import { loader } from 'webpack-loader-helper';

const sourcePath = `${__dirname}/src`;
const buildPath = `${__dirname}/lib`;

export = {
    mode: 'development',
    entry: {
        app: './src/example/app.tsx',
    },
    devtool: false,
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            { parser: { amd: false } },
            { test: /\.tsx?$/, use: [loader('ts', { transpileOnly: true })] },
        ]
    },
    devServer: {
        contentBase: [`${sourcePath}/example`],
    },
    output: {
        filename: '[name].bundle.js',
        path: buildPath,
    },
};
