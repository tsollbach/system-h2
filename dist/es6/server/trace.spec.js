var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import 'should';
import Builder from 'systemjs-builder';
import generateConfig from '../generate-config';
import trace from './trace';
const transpilerConfig = {
    transpiler: 'plugin-babel',
    map: {
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
    }
};
describe('trace', () => {
    let config;
    let builder;
    before(() => {
        config = generateConfig({
            rootFolder: 'tests/simple'
        });
        config.transpiler = transpilerConfig.transpiler;
        config.map = Object.assign(config.map, transpilerConfig.map);
        builder = new Builder();
        builder.config(config);
    });
    it('should run', () => __awaiter(this, void 0, void 0, function* () {
        const depList = yield trace('simple', builder);
        Object.keys(depList).length.should.equal(3);
    }));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zeXN0ZW0taDIvc2VydmVyL3RyYWNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLFFBQVEsQ0FBQTtBQUVmLE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFBO0FBR3RDLE9BQU8sY0FBYyxNQUFNLG9CQUFvQixDQUFBO0FBQy9DLE9BQU8sS0FBSyxNQUFNLFNBQVMsQ0FBQTtBQUUzQixNQUFNLGdCQUFnQixHQUFXO0lBQy9CLFVBQVUsRUFBRSxjQUFjO0lBQzFCLEdBQUcsRUFBRTtRQUNILGNBQWMsRUFBRSxvREFBb0Q7UUFDcEUsc0JBQXNCLEVBQUUsOERBQThEO0tBQ3ZGO0NBQ0YsQ0FBQTtBQUVELFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ3JCLElBQUksTUFBYyxDQUFBO0lBQ2xCLElBQUksT0FBZ0IsQ0FBQTtJQUNwQixNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1YsTUFBTSxHQUFHLGNBQWMsQ0FBQztZQUN0QixVQUFVLEVBQUUsY0FBYztTQUMzQixDQUFDLENBQUE7UUFFRixNQUFNLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQTtRQUMvQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUU1RCxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQTtRQUN2QixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3hCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFTLEVBQUU7UUFDMUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIiwiZmlsZSI6InNlcnZlci90cmFjZS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzaG91bGQnXG5cbmltcG9ydCBCdWlsZGVyIGZyb20gJ3N5c3RlbWpzLWJ1aWxkZXInXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdzeXN0ZW1qcydcblxuaW1wb3J0IGdlbmVyYXRlQ29uZmlnIGZyb20gJy4uL2dlbmVyYXRlLWNvbmZpZydcbmltcG9ydCB0cmFjZSBmcm9tICcuL3RyYWNlJ1xuXG5jb25zdCB0cmFuc3BpbGVyQ29uZmlnOiBDb25maWcgPSB7XG4gIHRyYW5zcGlsZXI6ICdwbHVnaW4tYmFiZWwnLFxuICBtYXA6IHtcbiAgICAncGx1Z2luLWJhYmVsJzogJ25vZGVfbW9kdWxlcy9zeXN0ZW1qcy1wbHVnaW4tYmFiZWwvcGx1Z2luLWJhYmVsLmpzJyxcbiAgICAnc3lzdGVtanMtYmFiZWwtYnVpbGQnOiAnbm9kZV9tb2R1bGVzL3N5c3RlbWpzLXBsdWdpbi1iYWJlbC9zeXN0ZW1qcy1iYWJlbC1icm93c2VyLmpzJyxcbiAgfVxufVxuXG5kZXNjcmliZSgndHJhY2UnLCAoKSA9PiB7XG4gIGxldCBjb25maWc6IENvbmZpZ1xuICBsZXQgYnVpbGRlcjogQnVpbGRlclxuICBiZWZvcmUoKCkgPT4ge1xuICAgIGNvbmZpZyA9IGdlbmVyYXRlQ29uZmlnKHtcbiAgICAgIHJvb3RGb2xkZXI6ICd0ZXN0cy9zaW1wbGUnXG4gICAgfSlcblxuICAgIGNvbmZpZy50cmFuc3BpbGVyID0gdHJhbnNwaWxlckNvbmZpZy50cmFuc3BpbGVyXG4gICAgY29uZmlnLm1hcCA9IE9iamVjdC5hc3NpZ24oY29uZmlnLm1hcCwgdHJhbnNwaWxlckNvbmZpZy5tYXApXG5cbiAgICBidWlsZGVyID0gbmV3IEJ1aWxkZXIoKVxuICAgIGJ1aWxkZXIuY29uZmlnKGNvbmZpZylcbiAgfSlcbiAgaXQoJ3Nob3VsZCBydW4nLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGVwTGlzdCA9IGF3YWl0IHRyYWNlKCdzaW1wbGUnLCBidWlsZGVyKVxuICAgIE9iamVjdC5rZXlzKGRlcExpc3QpLmxlbmd0aC5zaG91bGQuZXF1YWwoMylcbiAgfSlcbn0pXG4iXX0=
