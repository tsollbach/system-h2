import 'should';
import System from 'systemjs';
import { generateConfig } from './generate-config';
const transpilerConfig = {
    transpiler: 'plugin-babel',
    map: {
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
    }
};
describe('ConfigGenerator', () => {
    before(() => {
        const config = generateConfig({
            rootFolder: 'tests/simple'
        });
        System.config(transpilerConfig);
        System.config(config);
    });
    it('should be able to import a simple module with dependencies', (done) => {
        System.import('simple').then((simple) => {
            simple.simple().should.equal('simple');
            simple.simpleDep().should.equal('simpleDep');
            simple.simpleDefault().should.equal('simpleDefault');
            simple.simpleDepDefault().should.equal('simpleDepDefault');
            done();
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zeXN0ZW0taDIvZ2VuZXJhdGUtY29uZmlnL2dlbmVyYXRlLWNvbmZpZy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxDQUFBO0FBRWYsT0FBTyxNQUFrQixNQUFNLFVBQVUsQ0FBQTtBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFbEQsTUFBTSxnQkFBZ0IsR0FBVztJQUMvQixVQUFVLEVBQUUsY0FBYztJQUMxQixHQUFHLEVBQUU7UUFDSCxjQUFjLEVBQUUsb0RBQW9EO1FBQ3BFLHNCQUFzQixFQUFFLDhEQUE4RDtLQUN2RjtDQUNGLENBQUE7QUFFRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDVixNQUFNLE1BQU0sR0FBRyxjQUFjLENBQUM7WUFDNUIsVUFBVSxFQUFFLGNBQWM7U0FDM0IsQ0FBQyxDQUFBO1FBRUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsNERBQTRELEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN4RSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3RDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBRTVDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1lBQ3BELE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtZQUUxRCxJQUFJLEVBQUUsQ0FBQTtRQUNSLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZS1jb25maWcvZ2VuZXJhdGUtY29uZmlnLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3Nob3VsZCdcblxuaW1wb3J0IFN5c3RlbSwgeyBDb25maWcgfSBmcm9tICdzeXN0ZW1qcydcblxuaW1wb3J0IHsgZ2VuZXJhdGVDb25maWcgfSBmcm9tICcuL2dlbmVyYXRlLWNvbmZpZydcblxuY29uc3QgdHJhbnNwaWxlckNvbmZpZzogQ29uZmlnID0ge1xuICB0cmFuc3BpbGVyOiAncGx1Z2luLWJhYmVsJyxcbiAgbWFwOiB7XG4gICAgJ3BsdWdpbi1iYWJlbCc6ICdub2RlX21vZHVsZXMvc3lzdGVtanMtcGx1Z2luLWJhYmVsL3BsdWdpbi1iYWJlbC5qcycsXG4gICAgJ3N5c3RlbWpzLWJhYmVsLWJ1aWxkJzogJ25vZGVfbW9kdWxlcy9zeXN0ZW1qcy1wbHVnaW4tYmFiZWwvc3lzdGVtanMtYmFiZWwtYnJvd3Nlci5qcycsXG4gIH1cbn1cblxuZGVzY3JpYmUoJ0NvbmZpZ0dlbmVyYXRvcicsICgpID0+IHtcbiAgYmVmb3JlKCgpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZW5lcmF0ZUNvbmZpZyh7XG4gICAgICByb290Rm9sZGVyOiAndGVzdHMvc2ltcGxlJ1xuICAgIH0pXG5cbiAgICBTeXN0ZW0uY29uZmlnKHRyYW5zcGlsZXJDb25maWcpXG4gICAgU3lzdGVtLmNvbmZpZyhjb25maWcpXG4gIH0pXG4gIGl0KCdzaG91bGQgYmUgYWJsZSB0byBpbXBvcnQgYSBzaW1wbGUgbW9kdWxlIHdpdGggZGVwZW5kZW5jaWVzJywgKGRvbmUpID0+IHtcbiAgICBTeXN0ZW0uaW1wb3J0KCdzaW1wbGUnKS50aGVuKChzaW1wbGUpID0+IHtcbiAgICAgIHNpbXBsZS5zaW1wbGUoKS5zaG91bGQuZXF1YWwoJ3NpbXBsZScpXG4gICAgICBzaW1wbGUuc2ltcGxlRGVwKCkuc2hvdWxkLmVxdWFsKCdzaW1wbGVEZXAnKVxuXG4gICAgICBzaW1wbGUuc2ltcGxlRGVmYXVsdCgpLnNob3VsZC5lcXVhbCgnc2ltcGxlRGVmYXVsdCcpXG4gICAgICBzaW1wbGUuc2ltcGxlRGVwRGVmYXVsdCgpLnNob3VsZC5lcXVhbCgnc2ltcGxlRGVwRGVmYXVsdCcpXG5cbiAgICAgIGRvbmUoKVxuICAgIH0pXG4gIH0pXG59KVxuIl19
