const fs = require('fs')
const globby = require('globby')
const matter = require('gray-matter')
const prettier = require('prettier')
const siteMetadata = require('../data/siteMetadata')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.js',
    'pages/*.jsx',
    'pages/*.tsx',
    'pages/[locale]/*.js',
    'pages/[locale]/*.jsx',
    'pages/[locale]/*.tsx',
    'data/publications/*.mdx',
    'data/publications/*.md',
    // 'public/tags/**/*.xml',
    '!pages/_*.js',
    '!pages/_*.tsx',
    '!pages/api',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                // Exclude drafts from the sitemap
                if (page.search('.md') >= 1 && fs.existsSync(page)) {
                  const source = fs.readFileSync(page, 'utf8')
                  const fm = matter(source)
                  if (fm.data.draft) {
                    return
                  }
                }
                const path = page
                  .replace('pages/', '/')
                  .replace('data/publications', '/fr/information')
                  .replace('public/', '/')
                  .replace('.jsx', '')
                  .replace('.js', '')
                  .replace('[locale]', 'fr')
                  .replace('.tsx', '')
                  .replace('.mdx', '')
                  .replace('.md', '')
                  .replace('/feed.xml', '')
                  .replace('/index', '')
                const route = path === '/index' ? '' : path
                console.log('route', route, path)

                if (
                  page.search('pages/404.') > -1 ||
                  page.search(`pages/publications/[...slug].`) > -1
                ) {
                  return
                }
                return `
                        <url>
                            <loc>${siteMetadata.siteUrl}${route}/</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted)
})()
