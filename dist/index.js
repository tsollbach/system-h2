(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('http2'), require('fs')) :
	typeof define === 'function' && define.amd ? define('index', ['http2', 'fs'], factory) :
	(factory(global.http2,global.fs));
}(this, (function (http2,fs) { 'use strict';

http2 = 'default' in http2 ? http2['default'] : http2;
fs = 'default' in fs ? fs['default'] : fs;

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

console.log('Server listening on Port 3000');
server.listen(3000);

})));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImRpc3QvZXM2L3NlcnZlci5qcyIsImRpc3QvZXM2L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwMiBmcm9tICdodHRwMic7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuY29uc3Qgc2VydmVyID0gaHR0cDIuY3JlYXRlU2VjdXJlU2VydmVyKHtcbiAgICBrZXk6IGZzLnJlYWRGaWxlU3luYygnY2VydHMvbG9jYWxob3N0LXByaXZrZXkucGVtJyksXG4gICAgY2VydDogZnMucmVhZEZpbGVTeW5jKCdjZXJ0cy9sb2NhbGhvc3QtY2VydC5wZW0nKSxcbn0pO1xuc2VydmVyLm9uKCdlcnJvcicsIGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuc2VydmVyLm9uKCdzb2NrZXRFcnJvcicsIGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuY29uc3QgaW5kZXggPSBmcy5vcGVuU3luYygnc3JjL3N5c3RlbS1oMi9pbmRleC5odG1sJywgJ3InKTtcbmNvbnN0IHRlc3QgPSBmcy5vcGVuU3luYygnc3JjL3N5c3RlbS1oMi90ZXN0LmpzJywgJ3InKTtcbnNlcnZlci5vbignc3RyZWFtJywgKHN0cmVhbSwgcmVxSGVhZGVycykgPT4ge1xuICAgIGlmIChyZXFIZWFkZXJzWyc6cGF0aCddID09PSAnLycpIHtcbiAgICAgICAgc3RyZWFtLnB1c2hTdHJlYW0oeyAnOnBhdGgnOiAnL3Rlc3QuanMnIH0sIChzdHJlYW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXQgPSBmcy5mc3RhdFN5bmModGVzdCk7XG4gICAgICAgICAgICBjb25zdCByZXNIZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgICdjb250ZW50LWxlbmd0aCc6IHN0YXQuc2l6ZSxcbiAgICAgICAgICAgICAgICAnbGFzdC1tb2RpZmllZCc6IHN0YXQubXRpbWUudG9VVENTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ3RleHQvamF2YXNjcmlwdCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc3RyZWFtLnJlc3BvbmRXaXRoRkQodGVzdCwgcmVzSGVhZGVycyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdGF0ID0gZnMuZnN0YXRTeW5jKGluZGV4KTtcbiAgICAgICAgY29uc3QgcmVzSGVhZGVycyA9IHtcbiAgICAgICAgICAgICdjb250ZW50LWxlbmd0aCc6IHN0YXQuc2l6ZSxcbiAgICAgICAgICAgICdsYXN0LW1vZGlmaWVkJzogc3RhdC5tdGltZS50b1VUQ1N0cmluZygpLFxuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICd0ZXh0L2h0bWwnLFxuICAgICAgICB9O1xuICAgICAgICBzdHJlYW0ucmVzcG9uZFdpdGhGRChpbmRleCwgcmVzSGVhZGVycyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlcUhlYWRlcnNbJzpwYXRoJ10gPT09ICcvdGVzdC5qcycpIHtcbiAgICAgICAgY29uc3Qgc3RhdCA9IGZzLmZzdGF0U3luYyh0ZXN0KTtcbiAgICAgICAgY29uc3QgcmVzSGVhZGVycyA9IHtcbiAgICAgICAgICAgICdjb250ZW50LWxlbmd0aCc6IHN0YXQuc2l6ZSxcbiAgICAgICAgICAgICdsYXN0LW1vZGlmaWVkJzogc3RhdC5tdGltZS50b1VUQ1N0cmluZygpLFxuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICd0ZXh0L2phdmFzY3JpcHQnLFxuICAgICAgICB9O1xuICAgICAgICBzdHJlYW0ucmVzcG9uZFdpdGhGRCh0ZXN0LCByZXNIZWFkZXJzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0cmVhbS5lbmQoKTtcbiAgICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IHNlcnZlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OXplWE4wWlcwdGFESXZjMlZ5ZG1WeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEU5QlFVOHNTMEZCU3l4TlFVRk5MRTlCUVU4c1EwRkJRVHRCUVVONlFpeFBRVUZQTEVWQlFVVXNUVUZCVFN4SlFVRkpMRU5CUVVFN1FVRkZia0lzVFVGQlRTeE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMR3RDUVVGclFpeERRVUZETzBsQlEzUkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zV1VGQldTeERRVUZETERaQ1FVRTJRaXhEUVVGRE8wbEJRMjVFTEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1dVRkJXU3hEUVVGRExEQkNRVUV3UWl4RFFVRkRPME5CUTJ4RUxFTkJRVU1zUTBGQlFUdEJRVVZHTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZCTzBGQlF6ZERMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zWVVGQllTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkJPMEZCUlc1RUxFMUJRVTBzUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc01FSkJRVEJDTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVFN1FVRkRNVVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXgxUWtGQmRVSXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRVHRCUVVWMFJDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFMUJRVTBzUlVGQlJTeFZRVUZWTEVWQlFVVXNSVUZCUlR0SlFVTjZReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVU1zVDBGQlR5eEZRVUZGTEZWQlFWVXNSVUZCUXl4RlFVRkZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVU3V1VGRGJFUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUVR0WlFVTXZRaXhOUVVGTkxGVkJRVlVzUjBGQlJ6dG5Ra0ZEYWtJc1owSkJRV2RDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrN1owSkJRek5DTEdWQlFXVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJUdG5Ra0ZEZWtNc1kwRkJZeXhGUVVGRkxHbENRVUZwUWp0aFFVTnNReXhEUVVGQk8xbEJRMFFzVFVGQlRTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVUU3VVVGRGVFTXNRMEZCUXl4RFFVRkRMRU5CUVVFN1VVRkRSaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGQk8xRkJRMmhETEUxQlFVMHNWVUZCVlN4SFFVRkhPMWxCUTJwQ0xHZENRVUZuUWl4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSk8xbEJRek5DTEdWQlFXVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJUdFpRVU42UXl4alFVRmpMRVZCUVVVc1YwRkJWenRUUVVNMVFpeERRVUZCTzFGQlEwUXNUVUZCVFN4RFFVRkRMR0ZCUVdFc1EwRkJReXhMUVVGTExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVRTdTVUZEZWtNc1EwRkJRenRKUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTVReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGQk8xRkJReTlDTEUxQlFVMHNWVUZCVlN4SFFVRkhPMWxCUTJwQ0xHZENRVUZuUWl4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSk8xbEJRek5DTEdWQlFXVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJUdFpRVU42UXl4alFVRmpMRVZCUVVVc2FVSkJRV2xDTzFOQlEyeERMRU5CUVVFN1VVRkRSQ3hOUVVGTkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRVHRKUVVONFF5eERRVUZETzBsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRUaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVRTdTVUZEWkN4RFFVRkRPMEZCUTBnc1EwRkJReXhEUVVGRExFTkJRVUU3UVVGRlJpeGxRVUZsTEUxQlFVMHNRMEZCUVNJc0ltWnBiR1VpT2lKelpYSjJaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2FIUjBjRElnWm5KdmJTQW5hSFIwY0RJblhHNXBiWEJ2Y25RZ1puTWdabkp2YlNBblpuTW5YRzVjYm1OdmJuTjBJSE5sY25abGNpQTlJR2gwZEhBeUxtTnlaV0YwWlZObFkzVnlaVk5sY25abGNpaDdYRzRnSUd0bGVUb2dabk11Y21WaFpFWnBiR1ZUZVc1aktDZGpaWEowY3k5c2IyTmhiR2h2YzNRdGNISnBkbXRsZVM1d1pXMG5LU3hjYmlBZ1kyVnlkRG9nWm5NdWNtVmhaRVpwYkdWVGVXNWpLQ2RqWlhKMGN5OXNiMk5oYkdodmMzUXRZMlZ5ZEM1d1pXMG5LU3hjYm4wcFhHNWNibk5sY25abGNpNXZiaWduWlhKeWIzSW5MQ0JsY25JZ1BUNGdZMjl1YzI5c1pTNWxjbkp2Y2lobGNuSXBLVnh1YzJWeWRtVnlMbTl1S0NkemIyTnJaWFJGY25KdmNpY3NJR1Z5Y2lBOVBpQmpiMjV6YjJ4bExtVnljbTl5S0dWeWNpa3BYRzVjYm1OdmJuTjBJR2x1WkdWNElEMGdabk11YjNCbGJsTjVibU1vSjNOeVl5OXplWE4wWlcwdGFESXZhVzVrWlhndWFIUnRiQ2NzSUNkeUp5bGNibU52Ym5OMElIUmxjM1FnUFNCbWN5NXZjR1Z1VTNsdVl5Z25jM0pqTDNONWMzUmxiUzFvTWk5MFpYTjBMbXB6Snl3Z0ozSW5LVnh1WEc1elpYSjJaWEl1YjI0b0ozTjBjbVZoYlNjc0lDaHpkSEpsWVcwc0lISmxjVWhsWVdSbGNuTXBJRDArSUh0Y2JpQWdhV1lnS0hKbGNVaGxZV1JsY25OYkp6cHdZWFJvSjEwZ1BUMDlJQ2N2SnlrZ2UxeHVJQ0FnSUhOMGNtVmhiUzV3ZFhOb1UzUnlaV0Z0S0hzbk9uQmhkR2duT2lBbkwzUmxjM1F1YW5NbmZTd2dLSE4wY21WaGJTa2dQVDRnZTF4dUlDQWdJQ0FnWTI5dWMzUWdjM1JoZENBOUlHWnpMbVp6ZEdGMFUzbHVZeWgwWlhOMEtWeHVJQ0FnSUNBZ1kyOXVjM1FnY21WelNHVmhaR1Z5Y3lBOUlIdGNiaUFnSUNBZ0lDQWdKMk52Ym5SbGJuUXRiR1Z1WjNSb0p6b2djM1JoZEM1emFYcGxMRnh1SUNBZ0lDQWdJQ0FuYkdGemRDMXRiMlJwWm1sbFpDYzZJSE4wWVhRdWJYUnBiV1V1ZEc5VlZFTlRkSEpwYm1jb0tTeGNiaUFnSUNBZ0lDQWdKMk52Ym5SbGJuUXRkSGx3WlNjNklDZDBaWGgwTDJwaGRtRnpZM0pwY0hRbkxGeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2MzUnlaV0Z0TG5KbGMzQnZibVJYYVhSb1JrUW9kR1Z6ZEN3Z2NtVnpTR1ZoWkdWeWN5bGNiaUFnSUNCOUtWeHVJQ0FnSUdOdmJuTjBJSE4wWVhRZ1BTQm1jeTVtYzNSaGRGTjVibU1vYVc1a1pYZ3BYRzRnSUNBZ1kyOXVjM1FnY21WelNHVmhaR1Z5Y3lBOUlIdGNiaUFnSUNBZ0lDZGpiMjUwWlc1MExXeGxibWQwYUNjNklITjBZWFF1YzJsNlpTeGNiaUFnSUNBZ0lDZHNZWE4wTFcxdlpHbG1hV1ZrSnpvZ2MzUmhkQzV0ZEdsdFpTNTBiMVZVUTFOMGNtbHVaeWdwTEZ4dUlDQWdJQ0FnSjJOdmJuUmxiblF0ZEhsd1pTYzZJQ2QwWlhoMEwyaDBiV3duTEZ4dUlDQWdJSDFjYmlBZ0lDQnpkSEpsWVcwdWNtVnpjRzl1WkZkcGRHaEdSQ2hwYm1SbGVDd2djbVZ6U0dWaFpHVnljeWxjYmlBZ2ZTQmxiSE5sSUdsbUlDaHlaWEZJWldGa1pYSnpXeWM2Y0dGMGFDZGRJRDA5UFNBbkwzUmxjM1F1YW5NbktTQjdYRzRnSUNBZ1kyOXVjM1FnYzNSaGRDQTlJR1p6TG1aemRHRjBVM2x1WXloMFpYTjBLVnh1SUNBZ0lHTnZibk4wSUhKbGMwaGxZV1JsY25NZ1BTQjdYRzRnSUNBZ0lDQW5ZMjl1ZEdWdWRDMXNaVzVuZEdnbk9pQnpkR0YwTG5OcGVtVXNYRzRnSUNBZ0lDQW5iR0Z6ZEMxdGIyUnBabWxsWkNjNklITjBZWFF1YlhScGJXVXVkRzlWVkVOVGRISnBibWNvS1N4Y2JpQWdJQ0FnSUNkamIyNTBaVzUwTFhSNWNHVW5PaUFuZEdWNGRDOXFZWFpoYzJOeWFYQjBKeXhjYmlBZ0lDQjlYRzRnSUNBZ2MzUnlaV0Z0TG5KbGMzQnZibVJYYVhSb1JrUW9kR1Z6ZEN3Z2NtVnpTR1ZoWkdWeWN5bGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnpkSEpsWVcwdVpXNWtLQ2xjYmlBZ2ZWeHVmU2xjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnYzJWeWRtVnlYRzVjYmlKZGZRPT1cbiIsImltcG9ydCBzZXJ2ZXIgZnJvbSAnLi9zZXJ2ZXInO1xuY29uc29sZS5sb2coJ1NlcnZlciBsaXN0ZW5pbmcgb24gUG9ydCAzMDAwJyk7XG5zZXJ2ZXIubGlzdGVuKDMwMDApO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGY4O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5emVYTjBaVzB0YURJdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUMEZCVHl4TlFVRk5MRTFCUVUwc1ZVRkJWU3hEUVVGQk8wRkJSVGRDTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc0swSkJRU3RDTEVOQlFVTXNRMEZCUVR0QlFVTTFReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkJJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSE5sY25abGNpQm1jbTl0SUNjdUwzTmxjblpsY2lkY2JseHVZMjl1YzI5c1pTNXNiMmNvSjFObGNuWmxjaUJzYVhOMFpXNXBibWNnYjI0Z1VHOXlkQ0F6TURBd0p5bGNibk5sY25abGNpNXNhWE4wWlc0b016QXdNQ2xjYmlKZGZRPT1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUM7SUFDcEMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsNkJBQTZCLENBQUM7SUFDbkQsSUFBSSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUM7Q0FDcEQsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BELE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDM0QsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2RCxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUs7SUFDeEMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQzdCLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEtBQUs7WUFDbkQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxNQUFNLFVBQVUsR0FBRztnQkFDZixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO2dCQUN6QyxjQUFjLEVBQUUsaUJBQWlCO2FBQ3BDLENBQUM7WUFDRixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztTQUMxQyxDQUFDLENBQUM7UUFDSCxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sVUFBVSxHQUFHO1lBQ2YsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQ3pDLGNBQWMsRUFBRSxXQUFXO1NBQzlCLENBQUM7UUFDRixNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztLQUMzQztTQUNJLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFVBQVUsRUFBRTtRQUN6QyxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sVUFBVSxHQUFHO1lBQ2YsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQ3pDLGNBQWMsRUFBRSxpQkFBaUI7U0FDcEMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQzFDO1NBQ0k7UUFDRCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDaEI7Q0FDSixDQUFDLENBQUMsQUFDSCxBQUFzQixBQUV0QixBQUF1eUk7O0FDM0N2eUksT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQUFFcEIsQUFBMmY7OyJ9
