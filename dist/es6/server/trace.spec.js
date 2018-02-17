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
describe('ConfigGenerator', () => {
    let config;
    let builder;
    before(() => {
        config = generateConfig({
            rootFolder: 'testProjects/simple'
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zeXN0ZW0taDIvc2VydmVyL3RyYWNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLFFBQVEsQ0FBQTtBQUVmLE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFBO0FBR3RDLE9BQU8sY0FBYyxNQUFNLG9CQUFvQixDQUFBO0FBQy9DLE9BQU8sS0FBSyxNQUFNLFNBQVMsQ0FBQTtBQUUzQixNQUFNLGdCQUFnQixHQUFXO0lBQy9CLFVBQVUsRUFBRSxjQUFjO0lBQzFCLEdBQUcsRUFBRTtRQUNILGNBQWMsRUFBRSxvREFBb0Q7UUFDcEUsc0JBQXNCLEVBQUUsOERBQThEO0tBQ3ZGO0NBQ0YsQ0FBQTtBQUVELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFDL0IsSUFBSSxNQUFjLENBQUE7SUFDbEIsSUFBSSxPQUFnQixDQUFBO0lBQ3BCLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDVixNQUFNLEdBQUcsY0FBYyxDQUFDO1lBQ3RCLFVBQVUsRUFBRSxxQkFBcUI7U0FDbEMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUE7UUFDL0MsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFNUQsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUE7UUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBUyxFQUFFO1FBQzFCLE1BQU0sT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSIsImZpbGUiOiJzZXJ2ZXIvdHJhY2Uuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc2hvdWxkJ1xuXG5pbXBvcnQgQnVpbGRlciBmcm9tICdzeXN0ZW1qcy1idWlsZGVyJ1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnc3lzdGVtanMnXG5cbmltcG9ydCBnZW5lcmF0ZUNvbmZpZyBmcm9tICcuLi9nZW5lcmF0ZS1jb25maWcnXG5pbXBvcnQgdHJhY2UgZnJvbSAnLi90cmFjZSdcblxuY29uc3QgdHJhbnNwaWxlckNvbmZpZzogQ29uZmlnID0ge1xuICB0cmFuc3BpbGVyOiAncGx1Z2luLWJhYmVsJyxcbiAgbWFwOiB7XG4gICAgJ3BsdWdpbi1iYWJlbCc6ICdub2RlX21vZHVsZXMvc3lzdGVtanMtcGx1Z2luLWJhYmVsL3BsdWdpbi1iYWJlbC5qcycsXG4gICAgJ3N5c3RlbWpzLWJhYmVsLWJ1aWxkJzogJ25vZGVfbW9kdWxlcy9zeXN0ZW1qcy1wbHVnaW4tYmFiZWwvc3lzdGVtanMtYmFiZWwtYnJvd3Nlci5qcycsXG4gIH1cbn1cblxuZGVzY3JpYmUoJ0NvbmZpZ0dlbmVyYXRvcicsICgpID0+IHtcbiAgbGV0IGNvbmZpZzogQ29uZmlnXG4gIGxldCBidWlsZGVyOiBCdWlsZGVyXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgY29uZmlnID0gZ2VuZXJhdGVDb25maWcoe1xuICAgICAgcm9vdEZvbGRlcjogJ3Rlc3RQcm9qZWN0cy9zaW1wbGUnXG4gICAgfSlcblxuICAgIGNvbmZpZy50cmFuc3BpbGVyID0gdHJhbnNwaWxlckNvbmZpZy50cmFuc3BpbGVyXG4gICAgY29uZmlnLm1hcCA9IE9iamVjdC5hc3NpZ24oY29uZmlnLm1hcCwgdHJhbnNwaWxlckNvbmZpZy5tYXApXG5cbiAgICBidWlsZGVyID0gbmV3IEJ1aWxkZXIoKVxuICAgIGJ1aWxkZXIuY29uZmlnKGNvbmZpZylcbiAgfSlcbiAgaXQoJ3Nob3VsZCBydW4nLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGVwTGlzdCA9IGF3YWl0IHRyYWNlKCdzaW1wbGUnLCBidWlsZGVyKVxuICAgIE9iamVjdC5rZXlzKGRlcExpc3QpLmxlbmd0aC5zaG91bGQuZXF1YWwoMylcbiAgfSlcbn0pXG4iXX0=
