import path from 'path';
import { generateSource } from './generate-source';
import { generateDeps } from './generate-deps';
const DEFAULT_OPTIONS = {
    rootFolder: '',
    sourceFolder: 'src',
    depsFolder: 'node_modules',
};
function prependRootToMap(rootFolder, map) {
    Object.keys(map).forEach((key) => {
        const mapping = map[key];
        if (typeof mapping === 'string') {
            map[key] = path.join(rootFolder, mapping);
        }
    });
    return map;
}
function prependRootToPackages(rootFolder, packages) {
    const resultPackages = {};
    Object.keys(packages).forEach((key) => {
        const _package = packages[key];
        resultPackages[path.join(rootFolder, key)] = _package;
        if (_package.map) {
            _package.map = prependRootToMap(rootFolder, _package.map);
        }
    });
    return resultPackages;
}
export function generateConfig(options) {
    const { sourceFolder, rootFolder, depsFolder } = Object.assign({}, DEFAULT_OPTIONS, options);
    const sourceConfig = generateSource(rootFolder, sourceFolder);
    const depConfig = generateDeps(rootFolder);
    const result = {
        map: prependRootToMap(rootFolder, Object.assign({}, sourceConfig.map, depConfig.map)),
        packages: prependRootToPackages(rootFolder, Object.assign({}, sourceConfig.packages, depConfig.packages))
    };
    return result;
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zeXN0ZW0taDIvZ2VuZXJhdGUtY29uZmlnL2dlbmVyYXRlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxNQUFNLENBQUE7QUFJdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUk5QyxNQUFNLGVBQWUsR0FBb0I7SUFDdkMsVUFBVSxFQUFFLEVBQUU7SUFDZCxZQUFZLEVBQUUsS0FBSztJQUNuQixVQUFVLEVBQUUsY0FBYztDQUMzQixDQUFBO0FBRUQsMEJBQTBCLFVBQWtCLEVBQUUsR0FBYztJQUMxRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQy9CLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN4QixFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUMzQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLENBQUMsR0FBRyxDQUFBO0FBQ1osQ0FBQztBQUVELCtCQUErQixVQUFrQixFQUFFLFFBQW9DO0lBQ3JGLE1BQU0sY0FBYyxHQUE4QixFQUFFLENBQUE7SUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNwQyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDOUIsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFBO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLFFBQVEsQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMzRCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLENBQUMsY0FBYyxDQUFBO0FBQ3ZCLENBQUM7QUFFRCxNQUFNLHlCQUF5QixPQUFpQztJQUM5RCxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFFNUYsTUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQTtJQUM3RCxNQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUE7SUFFMUMsTUFBTSxNQUFNLEdBQUc7UUFDYixHQUFHLEVBQUUsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JGLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDMUcsQ0FBQTtJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUE7QUFDZixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlLWNvbmZpZy9nZW5lcmF0ZS1jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5pbXBvcnQgeyBQYWNrYWdlTGlzdCwgQ29uZmlnTWFwLCBQYWNrYWdlQ29uZmlnIH0gZnJvbSAnc3lzdGVtanMnXG5cbmltcG9ydCB7IGdlbmVyYXRlU291cmNlIH0gZnJvbSAnLi9nZW5lcmF0ZS1zb3VyY2UnXG5pbXBvcnQgeyBnZW5lcmF0ZURlcHMgfSBmcm9tICcuL2dlbmVyYXRlLWRlcHMnXG5cbmltcG9ydCB7IEdlbmVyYXRlT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJmYWNlcy9nZW5lcmF0ZS1vcHRpb25zJ1xuXG5jb25zdCBERUZBVUxUX09QVElPTlM6IEdlbmVyYXRlT3B0aW9ucyA9IHtcbiAgcm9vdEZvbGRlcjogJycsXG4gIHNvdXJjZUZvbGRlcjogJ3NyYycsXG4gIGRlcHNGb2xkZXI6ICdub2RlX21vZHVsZXMnLFxufVxuXG5mdW5jdGlvbiBwcmVwZW5kUm9vdFRvTWFwKHJvb3RGb2xkZXI6IHN0cmluZywgbWFwOiBDb25maWdNYXApIHtcbiAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCBtYXBwaW5nID0gbWFwW2tleV1cbiAgICBpZiAodHlwZW9mIG1hcHBpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtYXBba2V5XSA9IHBhdGguam9pbihyb290Rm9sZGVyLCBtYXBwaW5nKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIG1hcFxufVxuXG5mdW5jdGlvbiBwcmVwZW5kUm9vdFRvUGFja2FnZXMocm9vdEZvbGRlcjogc3RyaW5nLCBwYWNrYWdlczogUGFja2FnZUxpc3Q8UGFja2FnZUNvbmZpZz4pIHtcbiAgY29uc3QgcmVzdWx0UGFja2FnZXM9IDxQYWNrYWdlTGlzdDxQYWNrYWdlQ29uZmlnPj57fVxuICBPYmplY3Qua2V5cyhwYWNrYWdlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgX3BhY2thZ2UgPSBwYWNrYWdlc1trZXldXG4gICAgcmVzdWx0UGFja2FnZXNbcGF0aC5qb2luKHJvb3RGb2xkZXIsIGtleSldID0gX3BhY2thZ2VcbiAgICBpZiAoX3BhY2thZ2UubWFwKSB7XG4gICAgICBfcGFja2FnZS5tYXAgPSBwcmVwZW5kUm9vdFRvTWFwKHJvb3RGb2xkZXIsIF9wYWNrYWdlLm1hcClcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRQYWNrYWdlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb25maWcob3B0aW9uczogUGFydGlhbDxHZW5lcmF0ZU9wdGlvbnM+KSB7XG4gIGNvbnN0IHsgc291cmNlRm9sZGVyLCByb290Rm9sZGVyLCBkZXBzRm9sZGVyIH0gPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIG9wdGlvbnMpXG5cbiAgY29uc3Qgc291cmNlQ29uZmlnID0gZ2VuZXJhdGVTb3VyY2Uocm9vdEZvbGRlciwgc291cmNlRm9sZGVyKVxuICBjb25zdCBkZXBDb25maWcgPSBnZW5lcmF0ZURlcHMocm9vdEZvbGRlcilcblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgbWFwOiBwcmVwZW5kUm9vdFRvTWFwKHJvb3RGb2xkZXIsIE9iamVjdC5hc3NpZ24oe30sIHNvdXJjZUNvbmZpZy5tYXAsIGRlcENvbmZpZy5tYXApKSxcbiAgICBwYWNrYWdlczogcHJlcGVuZFJvb3RUb1BhY2thZ2VzKHJvb3RGb2xkZXIsIE9iamVjdC5hc3NpZ24oe30sIHNvdXJjZUNvbmZpZy5wYWNrYWdlcywgZGVwQ29uZmlnLnBhY2thZ2VzKSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuIl19
