module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  const url = process.env.GITHUB_ACTIONS
    ? 'https://alex-hedley.github.io/design-history/'
    : '/'
  const pathPrefix = process.env.GITHUB_ACTIONS
    ? '/design-history/'
    : '/'
  const assetPath = process.env.GITHUB_ACTIONS 
    ? '/design-history/assets/' 
    : '/assets/'

  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(require('govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    headingPermalinks: true,
    assetPath,
    pathPrefix, 
    url,
    header: {
      organisationLogo: false,
      productName: 'Design history',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    footer: {
      contentLicence: {
        html: 'An unofficial community project. <a class="govuk-footer__link" href="https://github.com/x-govuk/x-govuk.github.io">GitHub source</a>.'
      },
      copyright: {
        text: '© X-GOVUK'
      }
    }
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    },
    pathPrefix
  }
}
