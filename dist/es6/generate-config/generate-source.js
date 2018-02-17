import glob from 'glob';
import { SEP, JS_EXTENSIONS } from './constants';
import { generatePackageMap } from './generate-package-map';
export function generateSource(rootFolder, relativeSourceFolder) {
    const files = glob.sync(`${rootFolder}${SEP}${relativeSourceFolder}${SEP}**${SEP}index.@(${JS_EXTENSIONS})`);
    const regex = new RegExp(`^${rootFolder}${SEP}(${relativeSourceFolder}${SEP}(.*))${SEP}(index.*)$`);
    const map = {};
    const packages = {};
    files.forEach((file) => {
        const match = regex.exec(file);
        if (match) {
            const packagePath = match[1];
            map[match[2]] = packagePath;
            packages[packagePath] = {
                main: `./${match[3]}`,
                map: generatePackageMap(rootFolder, packagePath),
            };
        }
        else {
            throw new Error(`invalid file while generating config: '${file}'`);
        }
    });
    return {
        map,
        packages,
    };
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zeXN0ZW0taDIvZ2VuZXJhdGUtY29uZmlnL2dlbmVyYXRlLXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLElBQUksTUFBTSxNQUFNLENBQUE7QUFHdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUE7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFFM0QsTUFBTSx5QkFBeUIsVUFBa0IsRUFBRSxvQkFBNEI7SUFDN0UsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsR0FBRyxHQUFHLEdBQUcsb0JBQW9CLEdBQUcsR0FBRyxLQUFLLEdBQUcsV0FBVyxhQUFhLEdBQUcsQ0FBQyxDQUFBO0lBQzVHLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksVUFBVSxHQUFHLEdBQUcsSUFBSSxvQkFBb0IsR0FBRyxHQUFHLFFBQVEsR0FBRyxZQUFZLENBQUMsQ0FBQTtJQUNuRyxNQUFNLEdBQUcsR0FBYyxFQUFFLENBQUE7SUFDekIsTUFBTSxRQUFRLEdBQStCLEVBQUUsQ0FBQTtJQUUvQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDN0IsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzVCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUE7WUFDM0IsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHO2dCQUN0QixJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDO2FBQ2pELENBQUE7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO1FBQ3BFLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUVGLE1BQU0sQ0FBQztRQUNMLEdBQUc7UUFDSCxRQUFRO0tBQ1QsQ0FBQTtBQUNILENBQUMiLCJmaWxlIjoiZ2VuZXJhdGUtY29uZmlnL2dlbmVyYXRlLXNvdXJjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZ2xvYiBmcm9tICdnbG9iJ1xuaW1wb3J0IHsgUGFja2FnZUxpc3QsIENvbmZpZ01hcCwgUGFja2FnZUNvbmZpZyB9IGZyb20gJ3N5c3RlbWpzJ1xuXG5pbXBvcnQgeyBTRVAsIEpTX0VYVEVOU0lPTlMgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7IGdlbmVyYXRlUGFja2FnZU1hcCB9IGZyb20gJy4vZ2VuZXJhdGUtcGFja2FnZS1tYXAnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVNvdXJjZShyb290Rm9sZGVyOiBzdHJpbmcsIHJlbGF0aXZlU291cmNlRm9sZGVyOiBzdHJpbmcpIHtcbiAgY29uc3QgZmlsZXMgPSBnbG9iLnN5bmMoYCR7cm9vdEZvbGRlcn0ke1NFUH0ke3JlbGF0aXZlU291cmNlRm9sZGVyfSR7U0VQfSoqJHtTRVB9aW5kZXguQCgke0pTX0VYVEVOU0lPTlN9KWApXG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7cm9vdEZvbGRlcn0ke1NFUH0oJHtyZWxhdGl2ZVNvdXJjZUZvbGRlcn0ke1NFUH0oLiopKSR7U0VQfShpbmRleC4qKSRgKVxuICBjb25zdCBtYXAgPSA8Q29uZmlnTWFwPnt9XG4gIGNvbnN0IHBhY2thZ2VzID0gPFBhY2thZ2VMaXN0PFBhY2thZ2VDb25maWc+Pnt9XG5cbiAgZmlsZXMuZm9yRWFjaCgoZmlsZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbWF0Y2ggPSByZWdleC5leGVjKGZpbGUpXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCBwYWNrYWdlUGF0aCA9IG1hdGNoWzFdXG4gICAgICBtYXBbbWF0Y2hbMl1dID0gcGFja2FnZVBhdGhcbiAgICAgIHBhY2thZ2VzW3BhY2thZ2VQYXRoXSA9IHtcbiAgICAgICAgbWFpbjogYC4vJHttYXRjaFszXX1gLFxuICAgICAgICBtYXA6IGdlbmVyYXRlUGFja2FnZU1hcChyb290Rm9sZGVyLCBwYWNrYWdlUGF0aCksXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBmaWxlIHdoaWxlIGdlbmVyYXRpbmcgY29uZmlnOiAnJHtmaWxlfSdgKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIG1hcCxcbiAgICBwYWNrYWdlcyxcbiAgfVxufVxuIl19
