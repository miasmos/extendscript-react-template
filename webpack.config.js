const path = require('path');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');

let rootPath;
const isSupported =
    process.platform === 'win32' || process.platform === 'darwin';
switch (process.platform) {
    case 'win32':
        rootPath =
            'C:\\Program Files (x86)\\Common Files\\Adobe\\CEP\\extensions';
        break;
    case 'darwin':
        rootPath = '/Library/Application Support/Adobe/CEP/extensions';
        break;
    default:
        break;
}

const config = {
    output: {
        filename: 'ui.compiled.js',
        path: path.resolve(__dirname, 'plugin/lib')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    node: {
        fs: 'empty'
    },
    plugins: []
};

if (isSupported) {
    const targetPath = path.resolve(`${rootPath}/${pkg.name}`);
    fs.stat(targetPath, error => {
        if (!error) {
            config.plugins.push(
                new CopyPlugin([{ from: 'plugin', to: targetPath }])
            );
        } else {
            console.warn(
                '\x1b[33m%s\x1b[0m',
                `Failed to copy contents of plugin folder to '${targetPath}'. Try running webpack again as an admin, or copy the files yourself.`
            );
        }
    });
} else {
    console.warn(
        '\x1b[33m%s\x1b[0m',
        'Unsupported OS, skipping copying of plugin folder.'
    );
}

module.exports = config;
