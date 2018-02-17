import http2 from 'http2'
import fs from 'fs'

const server = http2.createSecureServer({
  key: fs.readFileSync('certs/localhost-privkey.pem'),
  cert: fs.readFileSync('certs/localhost-cert.pem'),
})

server.on('error', err => console.error(err))
server.on('socketError', err => console.error(err))

const index = fs.openSync('src/system-h2/index.html', 'r')
const test = fs.openSync('src/system-h2/test.js', 'r')

server.on('stream', (stream, reqHeaders) => {
  if (reqHeaders[':path'] === '/') {
    stream.pushStream({':path': '/test.js'}, (stream) => {
      const stat = fs.fstatSync(test)
      const resHeaders = {
        'content-length': stat.size,
        'last-modified': stat.mtime.toUTCString(),
        'content-type': 'text/javascript',
      }
      stream.respondWithFD(test, resHeaders)
    })
    const stat = fs.fstatSync(index)
    const resHeaders = {
      'content-length': stat.size,
      'last-modified': stat.mtime.toUTCString(),
      'content-type': 'text/html',
    }
    stream.respondWithFD(index, resHeaders)
  } else if (reqHeaders[':path'] === '/test.js') {
    const stat = fs.fstatSync(test)
    const resHeaders = {
      'content-length': stat.size,
      'last-modified': stat.mtime.toUTCString(),
      'content-type': 'text/javascript',
    }
    stream.respondWithFD(test, resHeaders)
  } else {
    stream.end()
  }
})

export default server

