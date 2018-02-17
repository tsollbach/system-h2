var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import SystemBuilder from 'systemjs-builder';
import generateConfig from '../generate-config';
import EntryPoint from './entry-point';
export class Server {
    constructor(_config) {
        this._config = _config;
    }
    bootstrap() {
        return __awaiter(this, void 0, void 0, function* () {
            this.systemConfig = generateConfig(this.config.generator);
            this.systemBuilder = new SystemBuilder();
            this.systemBuilder.config(this.systemConfig);
            this.entryPoints = yield Promise.all(Object.keys(this.config.entryPoints).map((route) => {
                return EntryPoint.build(route, this.config.entryPoints[route], this.systemBuilder);
            }));
            console.log('server ready');
        });
    }
    get config() {
        return this._config;
    }
    set config(config) {
        this._config = config;
    }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zeXN0ZW0taDIvc2VydmVyL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLE9BQU8sYUFBYSxNQUFNLGtCQUFrQixDQUFBO0FBRzVDLE9BQU8sY0FBYyxNQUFNLG9CQUFvQixDQUFBO0FBRS9DLE9BQU8sVUFBVSxNQUFNLGVBQWUsQ0FBQTtBQUV0QyxNQUFNO0lBT0osWUFBb0IsT0FBcUI7UUFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztJQUFHLENBQUM7SUFFdkMsU0FBUzs7WUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQTtZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7WUFFNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNwRixNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3RGLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzdCLENBQUM7S0FBQTtJQUVELElBQUksTUFBTTtRQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFvQjtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtJQUN2QixDQUFDO0NBQ0YiLCJmaWxlIjoic2VydmVyL3NlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwMiBmcm9tICdodHRwMidcbmltcG9ydCBmcyBmcm9tICdmcydcblxuaW1wb3J0IFN5c3RlbUJ1aWxkZXIgZnJvbSAnc3lzdGVtanMtYnVpbGRlcidcbmltcG9ydCB7IENvbmZpZyBhcyBTeXN0ZW1Db25maWcgfSBmcm9tICdzeXN0ZW1qcydcblxuaW1wb3J0IGdlbmVyYXRlQ29uZmlnIGZyb20gJy4uL2dlbmVyYXRlLWNvbmZpZydcbmltcG9ydCB7IFNlcnZlckNvbmZpZyB9IGZyb20gJy4vaW50ZXJmYWNlcydcbmltcG9ydCBFbnRyeVBvaW50IGZyb20gJy4vZW50cnktcG9pbnQnXG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xuXG4gIHByaXZhdGUgc3lzdGVtQ29uZmlnOiBTeXN0ZW1Db25maWdcbiAgcHJpdmF0ZSBzeXN0ZW1CdWlsZGVyOiBTeXN0ZW1CdWlsZGVyXG5cbiAgcHJpdmF0ZSBlbnRyeVBvaW50czogRW50cnlQb2ludFtdXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29uZmlnOiBTZXJ2ZXJDb25maWcpIHt9XG5cbiAgYXN5bmMgYm9vdHN0cmFwKCkge1xuICAgIHRoaXMuc3lzdGVtQ29uZmlnID0gZ2VuZXJhdGVDb25maWcodGhpcy5jb25maWcuZ2VuZXJhdG9yKVxuICAgIHRoaXMuc3lzdGVtQnVpbGRlciA9IG5ldyBTeXN0ZW1CdWlsZGVyKClcbiAgICB0aGlzLnN5c3RlbUJ1aWxkZXIuY29uZmlnKHRoaXMuc3lzdGVtQ29uZmlnKVxuXG4gICAgdGhpcy5lbnRyeVBvaW50cyA9IGF3YWl0IFByb21pc2UuYWxsKE9iamVjdC5rZXlzKHRoaXMuY29uZmlnLmVudHJ5UG9pbnRzKS5tYXAoKHJvdXRlKSA9PiB7XG4gICAgICAgIHJldHVybiBFbnRyeVBvaW50LmJ1aWxkKHJvdXRlLCB0aGlzLmNvbmZpZy5lbnRyeVBvaW50c1tyb3V0ZV0sIHRoaXMuc3lzdGVtQnVpbGRlcilcbiAgICB9KSlcblxuICAgIGNvbnNvbGUubG9nKCdzZXJ2ZXIgcmVhZHknKVxuICB9XG5cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnXG4gIH1cblxuICBzZXQgY29uZmlnKGNvbmZpZzogU2VydmVyQ29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnXG4gIH1cbn1cbiJdfQ==
