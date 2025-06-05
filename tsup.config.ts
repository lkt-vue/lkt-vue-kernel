import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    minify: true,
    external: [
        'axios',
        'vue',
        'lkt-control-tools',
        'lkt-http-client',
        'lkt-string-tools',
        'lkt-date-tools',
        'lkt-object-tools',
        'lkt-i18n',
    ],
});