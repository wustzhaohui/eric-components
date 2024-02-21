import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';
import path, { join } from 'path';

function resolve(str: string) {
    return path.resolve(__dirname, str);
}
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        typescript({
            target: 'es5',
            rootDir: resolve('packages/'),
            declaration: true,
            declarationDir: resolve('lib'),
            exclude: resolve('node_modules/**'),
            allowSyntheticDefaultImports: true,
        }),
    ],
    build: {
        outDir: 'lib',
        cssTarget: 'chrome61',
        lib: {
            entry: resolve('packages/index.ts'),
            name: 'eric-components',
            fileName: 'eric-packages',
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'react',
                    'react-dom': 'react-dom',
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': join(__dirname, 'packages'),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                additionalData: `@import "${resolve('packages/assets/styles/base.less')}";`,
                '@prefix': process.env.VITE_PREFIX
            },
        },
    },
    server: {
        port: 3956,
        hmr: true
    },
});
