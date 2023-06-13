class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Aa-z0-9-_:\/]+/g) || []
    }
}

module.exports = {
    plugins: [
        require('postcss-import')({
            path: ["assets/css/src"],
        }),
        require('tailwindcss')(),
        require('@fullhuman/postcss-purgecss')({
            content: ['config.toml','config.yml', 'config/**/*.toml', 'config/**/*.yml', 'layouts/**/*.html', 'themes/clearstatustheme/layouts/**/*.html'],
            extractors: [
                {
                    extractor: TailwindExtractor,
                    extensions: ['html', 'yml', 'toml']
                }],
            fontFace: true,
            whitelist: []
        })
    ]
}