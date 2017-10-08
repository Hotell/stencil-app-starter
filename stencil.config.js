exports.config = {
  bundles: [
    { components: ['my-app'] },
    { components: ['my-datepicker'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
