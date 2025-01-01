module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@assets': './app/assets/',
          '@lib': './app/lib/',
          '@features': './app/features/',
          '@components': './app/components/',
          '@constants': './app/constants/',
          '@screens': './app/screens/',
          '@app': './app/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
