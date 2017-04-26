var path = require('path')

module.exports = {
    '@containers': path.join(__dirname, '../src/containers'),
    '@components': path.join(__dirname, '../src/components'),
    '@router': path.join(__dirname, '../src/router'),
    '@store': path.join(__dirname, '../src/store'),
    '@assets': path.join(__dirname, '../src/assets'),
    '@utils': path.join(__dirname, '../src/utils'),
    // Support React Native Web
    // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
    'react-native': 'react-native-web',
}