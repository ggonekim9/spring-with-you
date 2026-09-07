import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
await build({
  entryPoints: [join(root, 'app.source.js')],
  outfile: join(root, 'app.js'),
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['es2020'],
  legalComments: 'eof',
});
console.log('GitHub Pages bundle ready.');
