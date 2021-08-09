import groupBy from 'lodash.groupby'
import { capitalCase } from 'capital-case'

export default ({$content, app}, inject) => {
  const loadPages = async (routePath, section) => {
    const filters = ['slug', 'title', 'position', 'menu', 'category']
    const links = []

    try {
      await app.router.options.routes
        .filter(({path}) => path === routePath)
        .forEach(page => {
          for (const child of page.children) {
            const path = (child.path && child.path.startsWith('/')) ? child.path.slice(1) : child.path
            const idx = path.indexOf('/')
            const category = idx > 0 ? path.slice(0, idx) : undefined
            const slug = idx < 0 ? path : path.slice(idx + 1)
            const title = capitalCase(slug)

            if (!/:[\w-]+?/.test(slug)) {
              links.push({
                category,
                slug,
                title
              })
            }
          }
        })

      let pages = await $content(app.i18n.defaultLocale, section)
        .only(filters)
        .sortBy('position')
        .fetch()

      if (app.i18n.locale !== app.i18n.defaultLocale) {
        const newPages = await $content(app.i18n.locale, section)
          .only(filters)
          .sortBy('position')
          .fetch()

        pages = pages.map(page => {
          const newPage = newPages.find(newPage => newPage.slug === page.slug)

          return newPage || page
        })
      }

      Array.prototype.push.apply(links, pages)
    } catch (e) { console.log(e) }

    return {
      rawLinks: links,
      links: groupBy(links, 'category')
    }
  }

  inject('loadPages', loadPages)
}
