module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@src': './src',
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@views': './src/views'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}