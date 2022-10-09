import { IncomingMessage, ServerResponse } from 'http'
import { renderToStaticMarkup } from 'react-dom/server'
import { NEXT_PUBLIC_URL } from '../../lib/notion/server-constants'

import { getBlogLink } from '../../lib/blog-helpers'
import { getPosts } from '../../lib/notion/client'

function decode(string) {
  return string
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function mapToEntry(post) {
  const date = new Date(post.Date)
  return `
    <entry>
      <id>${NEXT_PUBLIC_URL}${getBlogLink(post.Slug)}</id>
      <title>${decode(post.Title)}</title>
      <link href="${NEXT_PUBLIC_URL}${getBlogLink(post.Slug)}"/>
      <published>${date.toJSON()}</published>
      <updated>${date.toJSON()}</updated>
      <author>
        <name>yumenomatayume</name>
        <uri>https://yumenomatayume.net</uri>
      </author>
      <content type="xhtml">
        <div xmlns="http://www.w3.org/1999/xhtml">
          ${renderToStaticMarkup(post.Excerpt)}
        </div>
      </content>
    </entry>`
}

function concat(total, item) {
  return total + item
}

function createRSS(posts = []) {
  const postsString = posts.map(mapToEntry).reduce(concat, '')
  const updated =
    posts.length > 0
      ? `
    <updated>${new Date(posts[0].Date).toJSON()}</updated>`
      : ''

  return `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>😽 yumenomatayume.log の RSS feed</title>
    <subtitle>yumenomatayume's blog RSS feed</subtitle>
    <link href="${NEXT_PUBLIC_URL}/feed" rel="self" type="application/rss+xml"/>
    <link href="${NEXT_PUBLIC_URL}" />${updated}
    <id>${NEXT_PUBLIC_URL}/feed</id>${postsString}
  </feed>`
}

const Atom = async function(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Content-Type', 'text/xml')
  res.setHeader(
    'Cache-Control',
    'public, max-age=300'
  )

  try {
    const posts = await getPosts()
    res.write(createRSS(posts))
    res.end()
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.end()
  }
}

export default Atom
