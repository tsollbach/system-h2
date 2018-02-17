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
            rootFolder: 'testProjects/simple'
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zeXN0ZW0taDIvZ2VuZXJhdGUtY29uZmlnL2dlbmVyYXRlLWNvbmZpZy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxDQUFBO0FBRWYsT0FBTyxNQUFrQixNQUFNLFVBQVUsQ0FBQTtBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFbEQsTUFBTSxnQkFBZ0IsR0FBVztJQUMvQixVQUFVLEVBQUUsY0FBYztJQUMxQixHQUFHLEVBQUU7UUFDSCxjQUFjLEVBQUUsb0RBQW9EO1FBQ3BFLHNCQUFzQixFQUFFLDhEQUE4RDtLQUN2RjtDQUNGLENBQUE7QUFFRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDVixNQUFNLE1BQU0sR0FBRyxjQUFjLENBQUM7WUFDNUIsVUFBVSxFQUFFLHFCQUFxQjtTQUNsQyxDQUFDLENBQUE7UUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyw0REFBNEQsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3hFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdEMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDdEMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7WUFFNUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDcEQsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1lBRTFELElBQUksRUFBRSxDQUFBO1FBQ1IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlLWNvbmZpZy9nZW5lcmF0ZS1jb25maWcuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc2hvdWxkJ1xuXG5pbXBvcnQgU3lzdGVtLCB7IENvbmZpZyB9IGZyb20gJ3N5c3RlbWpzJ1xuXG5pbXBvcnQgeyBnZW5lcmF0ZUNvbmZpZyB9IGZyb20gJy4vZ2VuZXJhdGUtY29uZmlnJ1xuXG5jb25zdCB0cmFuc3BpbGVyQ29uZmlnOiBDb25maWcgPSB7XG4gIHRyYW5zcGlsZXI6ICdwbHVnaW4tYmFiZWwnLFxuICBtYXA6IHtcbiAgICAncGx1Z2luLWJhYmVsJzogJ25vZGVfbW9kdWxlcy9zeXN0ZW1qcy1wbHVnaW4tYmFiZWwvcGx1Z2luLWJhYmVsLmpzJyxcbiAgICAnc3lzdGVtanMtYmFiZWwtYnVpbGQnOiAnbm9kZV9tb2R1bGVzL3N5c3RlbWpzLXBsdWdpbi1iYWJlbC9zeXN0ZW1qcy1iYWJlbC1icm93c2VyLmpzJyxcbiAgfVxufVxuXG5kZXNjcmliZSgnQ29uZmlnR2VuZXJhdG9yJywgKCkgPT4ge1xuICBiZWZvcmUoKCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdlbmVyYXRlQ29uZmlnKHtcbiAgICAgIHJvb3RGb2xkZXI6ICd0ZXN0UHJvamVjdHMvc2ltcGxlJ1xuICAgIH0pXG5cbiAgICBTeXN0ZW0uY29uZmlnKHRyYW5zcGlsZXJDb25maWcpXG4gICAgU3lzdGVtLmNvbmZpZyhjb25maWcpXG4gIH0pXG4gIGl0KCdzaG91bGQgYmUgYWJsZSB0byBpbXBvcnQgYSBzaW1wbGUgbW9kdWxlIHdpdGggZGVwZW5kZW5jaWVzJywgKGRvbmUpID0+IHtcbiAgICBTeXN0ZW0uaW1wb3J0KCdzaW1wbGUnKS50aGVuKChzaW1wbGUpID0+IHtcbiAgICAgIHNpbXBsZS5zaW1wbGUoKS5zaG91bGQuZXF1YWwoJ3NpbXBsZScpXG4gICAgICBzaW1wbGUuc2ltcGxlRGVwKCkuc2hvdWxkLmVxdWFsKCdzaW1wbGVEZXAnKVxuXG4gICAgICBzaW1wbGUuc2ltcGxlRGVmYXVsdCgpLnNob3VsZC5lcXVhbCgnc2ltcGxlRGVmYXVsdCcpXG4gICAgICBzaW1wbGUuc2ltcGxlRGVwRGVmYXVsdCgpLnNob3VsZC5lcXVhbCgnc2ltcGxlRGVwRGVmYXVsdCcpXG5cbiAgICAgIGRvbmUoKVxuICAgIH0pXG4gIH0pXG59KVxuIl19
