"""Convert a MAGeCK gene_summary.txt into src/data/screen.csv for the front-page figure.

Usage:
  python3 scripts/mageck-to-screen.py <gene_summary.txt> [symbols.json]

Works with MAGeCK MLE output (uses the first `<condition>|beta` and `<condition>|fdr`
columns) and MAGeCK RRA output (uses `neg|lfc` and the smaller of `neg|fdr`/`pos|fdr`).
symbols.json, if given, maps gene IDs to gene symbols (e.g. Ensembl ID -> name).
"""
import csv
import json
import sys
from pathlib import Path

src = Path(sys.argv[1])
symbols = json.loads(Path(sys.argv[2]).read_text()) if len(sys.argv) > 2 else {}
out = Path(__file__).resolve().parent.parent / 'src' / 'data' / 'screen.csv'

with src.open() as f:
    reader = csv.reader(f, delimiter='\t')
    header = next(reader)
    col = {name: i for i, name in enumerate(header)}
    beta = next((c for c in header if c.endswith('|beta')), None)
    if beta:  # MLE
        cond = beta.split('|')[0]
        score_of = lambda r: float(r[col[beta]])
        fdr_of = lambda r: float(r[col[f'{cond}|fdr']])
    else:  # RRA
        score_of = lambda r: float(r[col['neg|lfc']])
        fdr_of = lambda r: min(float(r[col['neg|fdr']]), float(r[col['pos|fdr']]))
    gene_col = col.get('Gene', col.get('id', 0))
    rows = []
    for r in reader:
        gene = r[gene_col]
        name = symbols.get(gene) or gene
        rows.append((name, score_of(r), fdr_of(r)))

with out.open('w') as f:
    f.write('gene,score,fdr\n')
    for name, score, fdr in rows:
        f.write(f'{name},{score:.5g},{fdr:.3g}\n')
print(f'wrote {len(rows)} genes to {out}')
