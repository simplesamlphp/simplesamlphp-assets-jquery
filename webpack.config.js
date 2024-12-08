const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const buildDir = __dirname + '/';

const localConfig = {
    css_filename: 'css/[name].css',
    js_filename: 'js/[name].js'
}

module.exports = environment => {
    return {
        mode: 'production',
        entry: {},
        output: {
            path: path.resolve(buildDir),
            filename: localConfig['js_filename']
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname + '/node_modules/jquery/dist/jquery.min.*'),
                        to: 'js/[name][ext]'
                    }
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname + '/node_modules/jquery-ui/dist/jquery-ui.min.*'),
                        to: 'js/[name][ext]'
                    }
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname + '/node_modules/jquery-ui/dist/themes/base/jquery-ui.min.css'),
                        to: 'css/[name][ext]'
                    }
                ]
            })
        ]
    }
};
