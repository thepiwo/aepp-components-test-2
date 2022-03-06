import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg'
import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import image from '@rollup/plugin-image'
import commonjs from 'rollup-plugin-commonjs';

export default [
    {
        input: 'src/main.js',
        output: [
            {
                format: 'esm',
                file: 'dist/library.mjs'
            },
            {
                format: 'cjs',
                file: 'dist/library.js'
            }
        ],
        plugins: [
            image(),
            postcss(),
            vue(),
            svg(),
            commonjs(),
            peerDepsExternal(),
            resolve(),
        ]
    }
]
