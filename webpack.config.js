
const path = require('path');

module.exports = {
    entry:'./chplayer/chplayer.js',
    output: {
        filename: 'chplayer.min.js',
        path: path.resolve(__dirname, 'chplayer')
    }
};
