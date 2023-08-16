/* eslint-disable n/no-deprecated-api */
/* eslint-disable @typescript-eslint/no-var-requires */
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const axios = require('axios').create({})

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 7080
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      if (pathname === '/oauth') {
        console.log(pathname)
        console.log(query)
        console.log(query.provide)
        let url = ''
        const params = new URLSearchParams()
        switch (query.provide) {
          case 'naver':
            url = 'https://nid.naver.com/oauth2.0/token'
            params.append('client_id', process.env.NEXT_PUBLIC_NAVER_APP_KEY)
            params.append('client_secret', process.env.NEXT_PUBLIC_NAVER_APP_PASSWORD)
            params.append('grant_type', 'authorization_code')
            params.append('code', query.code)
            params.append('state', query.state)
            break

          default:
            break
        }
        axios.post(url, params).then((response) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(response.data))
        })
      } else if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
