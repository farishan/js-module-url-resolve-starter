import urlResolve from 'rollup-plugin-url-resolve';
export default {
    input: 'main.js',
    output: {
        file: 'bundle.js',
        format: 'iife',
        sourcemap: true,
    },
    plugins: [urlResolve({
        // Caches the results of all fetch operations
        // in a local directory named ".cache"
        cacheManager: '.cache'
    })]
}