import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import smelte from 'smelte/rollup-plugin-smelte';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.ts',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/bundle.js',
    },
    plugins: [
        svelte({
            // enable run-time checks when not in production
            dev: !production,
            // we'll extract any component CSS out into
            // a separate file — better for performance
            css: (css) => {
                css.write('public/bundle.css');
            },
            preprocess: autoPreprocess(),
        }),
        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration —
        // consult the documentation for details:
        // https://github.com/rollup/rollup-plugin-commonjs
        resolve({ browser: true }),
        commonjs(),
        typescript({ sourceMap: !production }),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload('public'),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser(),

        smelte({
            purge: production,
            output: 'public/global.css', // it defaults to static/global.css which is probably what you expect in Sapper
            postcss: [], // Your PostCSS plugins
            whitelist: [], // Array of classnames whitelisted from purging
            whitelistPatterns: [], // Same as above, but list of regexes
            tailwind: {
                colors: {
                    primary: '#b027b0',
                    secondary: '#009688',
                    error: '#f44336',
                    success: '#4caf50',
                    alert: '#ff9800',
                    blue: '#2196f3',
                    dark: '#212121',
                }, // Object of colors to generate a palette from, and then all the utility classes
                darkMode: true,
            },
            // Any other props will be applied on top of default Smelte tailwind.config.js
        }),
    ],
    watch: {
        clearScreen: false,
    },
};
