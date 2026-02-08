module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  documentSources: {
    mirrors: {
      folder: '/:lang/:segment+',
      path: '/:lang?/docs/:segment+',
      template: `./src/templates/mirror-doc.tsx`,
      getLanguageFromPath: true
    },
    news: {
      folder: '/:lang/:segment+',
      path: '/:lang?/news/:segment+',
      template: `./src/templates/news.tsx`,
      getLanguageFromPath: true
    }
  },
  defaultLanguage: 'zh',
  locales: ['zh', 'en'],
  siteUrl: 'https://mirrors.jcut.edu.cn',
  pathPrefix: '',
  assetPrefix: '/index',
};
