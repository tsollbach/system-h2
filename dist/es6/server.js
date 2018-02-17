import http2 from 'http2';
import fs from 'fs';
const server = http2.createSecureServer({
    key: fs.readFileSync('certs/localhost-privkey.pem'),
    cert: fs.readFileSync('certs/localhost-cert.pem'),
});
server.on('error', err => console.error(err));
server.on('socketError', err => console.error(err));
const index = fs.openSync('src/system-h2/index.html', 'r');
const test = fs.openSync('src/system-h2/test.js', 'r');
server.on('stream', (stream, reqHeaders) => {
    if (reqHeaders[':path'] === '/') {
        stream.pushStream({ ':path': '/test.js' }, (stream) => {
            const stat = fs.fstatSync(test);
            const resHeaders = {
                'content-length': stat.size,
                'last-modified': stat.mtime.toUTCString(),
                'content-type': 'text/javascript',
            };
            stream.respondWithFD(test, resHeaders);
        });
        const stat = fs.fstatSync(index);
        const resHeaders = {
            'content-length': stat.size,
            'last-modified': stat.mtime.toUTCString(),
            'content-type': 'text/html',
        };
        stream.respondWithFD(index, resHeaders);
    }
    else if (reqHeaders[':path'] === '/test.js') {
        const stat = fs.fstatSync(test);
        const resHeaders = {
            'content-length': stat.size,
            'last-modified': stat.mtime.toUTCString(),
            'content-type': 'text/javascript',
        };
        stream.respondWithFD(test, resHeaders);
    }
    else {
        stream.end();
    }
});
export default server;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zeXN0ZW0taDIvc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUN6QixPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUE7QUFFbkIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO0lBQ3RDLEdBQUcsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLDZCQUE2QixDQUFDO0lBQ25ELElBQUksRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLDBCQUEwQixDQUFDO0NBQ2xELENBQUMsQ0FBQTtBQUVGLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzdDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBRW5ELE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDMUQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUV0RCxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBRTtJQUN6QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDbEQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMvQixNQUFNLFVBQVUsR0FBRztnQkFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtnQkFDekMsY0FBYyxFQUFFLGlCQUFpQjthQUNsQyxDQUFBO1lBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFDeEMsQ0FBQyxDQUFDLENBQUE7UUFDRixNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sVUFBVSxHQUFHO1lBQ2pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUN6QyxjQUFjLEVBQUUsV0FBVztTQUM1QixDQUFBO1FBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDekMsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM5QyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQy9CLE1BQU0sVUFBVSxHQUFHO1lBQ2pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUN6QyxjQUFjLEVBQUUsaUJBQWlCO1NBQ2xDLENBQUE7UUFDRCxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDZCxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUE7QUFFRixlQUFlLE1BQU0sQ0FBQSIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cDIgZnJvbSAnaHR0cDInXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmNvbnN0IHNlcnZlciA9IGh0dHAyLmNyZWF0ZVNlY3VyZVNlcnZlcih7XG4gIGtleTogZnMucmVhZEZpbGVTeW5jKCdjZXJ0cy9sb2NhbGhvc3QtcHJpdmtleS5wZW0nKSxcbiAgY2VydDogZnMucmVhZEZpbGVTeW5jKCdjZXJ0cy9sb2NhbGhvc3QtY2VydC5wZW0nKSxcbn0pXG5cbnNlcnZlci5vbignZXJyb3InLCBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuc2VydmVyLm9uKCdzb2NrZXRFcnJvcicsIGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXG5cbmNvbnN0IGluZGV4ID0gZnMub3BlblN5bmMoJ3NyYy9zeXN0ZW0taDIvaW5kZXguaHRtbCcsICdyJylcbmNvbnN0IHRlc3QgPSBmcy5vcGVuU3luYygnc3JjL3N5c3RlbS1oMi90ZXN0LmpzJywgJ3InKVxuXG5zZXJ2ZXIub24oJ3N0cmVhbScsIChzdHJlYW0sIHJlcUhlYWRlcnMpID0+IHtcbiAgaWYgKHJlcUhlYWRlcnNbJzpwYXRoJ10gPT09ICcvJykge1xuICAgIHN0cmVhbS5wdXNoU3RyZWFtKHsnOnBhdGgnOiAnL3Rlc3QuanMnfSwgKHN0cmVhbSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdCA9IGZzLmZzdGF0U3luYyh0ZXN0KVxuICAgICAgY29uc3QgcmVzSGVhZGVycyA9IHtcbiAgICAgICAgJ2NvbnRlbnQtbGVuZ3RoJzogc3RhdC5zaXplLFxuICAgICAgICAnbGFzdC1tb2RpZmllZCc6IHN0YXQubXRpbWUudG9VVENTdHJpbmcoKSxcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICd0ZXh0L2phdmFzY3JpcHQnLFxuICAgICAgfVxuICAgICAgc3RyZWFtLnJlc3BvbmRXaXRoRkQodGVzdCwgcmVzSGVhZGVycylcbiAgICB9KVxuICAgIGNvbnN0IHN0YXQgPSBmcy5mc3RhdFN5bmMoaW5kZXgpXG4gICAgY29uc3QgcmVzSGVhZGVycyA9IHtcbiAgICAgICdjb250ZW50LWxlbmd0aCc6IHN0YXQuc2l6ZSxcbiAgICAgICdsYXN0LW1vZGlmaWVkJzogc3RhdC5tdGltZS50b1VUQ1N0cmluZygpLFxuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICd0ZXh0L2h0bWwnLFxuICAgIH1cbiAgICBzdHJlYW0ucmVzcG9uZFdpdGhGRChpbmRleCwgcmVzSGVhZGVycylcbiAgfSBlbHNlIGlmIChyZXFIZWFkZXJzWyc6cGF0aCddID09PSAnL3Rlc3QuanMnKSB7XG4gICAgY29uc3Qgc3RhdCA9IGZzLmZzdGF0U3luYyh0ZXN0KVxuICAgIGNvbnN0IHJlc0hlYWRlcnMgPSB7XG4gICAgICAnY29udGVudC1sZW5ndGgnOiBzdGF0LnNpemUsXG4gICAgICAnbGFzdC1tb2RpZmllZCc6IHN0YXQubXRpbWUudG9VVENTdHJpbmcoKSxcbiAgICAgICdjb250ZW50LXR5cGUnOiAndGV4dC9qYXZhc2NyaXB0JyxcbiAgICB9XG4gICAgc3RyZWFtLnJlc3BvbmRXaXRoRkQodGVzdCwgcmVzSGVhZGVycylcbiAgfSBlbHNlIHtcbiAgICBzdHJlYW0uZW5kKClcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgc2VydmVyXG5cbiJdfQ==
