var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import trace from './trace';
class EntryPoint {
    constructor(_route, _entry, _dependencies) {
        this._route = _route;
        this._entry = _entry;
        this._dependencies = _dependencies;
    }
    static build(route, entry, builder) {
        return __awaiter(this, void 0, void 0, function* () {
            const dependencies = yield trace(entry, builder);
            return new EntryPoint(route, entry, dependencies);
        });
    }
    get route() {
        return this._route;
    }
    get entry() {
        return this._entry;
    }
    get dependencies() {
        return this._dependencies;
    }
}
export default EntryPoint;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zeXN0ZW0taDIvc2VydmVyL2VudHJ5LXBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsT0FBTyxLQUF5QixNQUFNLFNBQVMsQ0FBQTtBQUUvQztJQU9FLFlBQW9CLE1BQWMsRUFBVSxNQUFjLEVBQVUsYUFBNkI7UUFBN0UsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7SUFFakcsQ0FBQztJQVBELE1BQU0sQ0FBTyxLQUFLLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxPQUFnQjs7WUFDL0QsTUFBTSxZQUFZLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBQ2hELE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFBO1FBQ25ELENBQUM7S0FBQTtJQU1ELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3BCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUNwQixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUE7SUFDM0IsQ0FBQztDQUNGO0FBRUQsZUFBZSxVQUFVLENBQUEiLCJmaWxlIjoic2VydmVyL2VudHJ5LXBvaW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1aWxkZXIgZnJvbSAnc3lzdGVtanMtYnVpbGRlcidcblxuaW1wb3J0IHRyYWNlLCB7IERlcGVuZGVuY3lMaXN0IH0gZnJvbSAnLi90cmFjZSdcblxuY2xhc3MgRW50cnlQb2ludCB7XG5cbiAgc3RhdGljIGFzeW5jIGJ1aWxkKHJvdXRlOiBzdHJpbmcsIGVudHJ5OiBzdHJpbmcsIGJ1aWxkZXI6IEJ1aWxkZXIpIHtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSBhd2FpdCB0cmFjZShlbnRyeSwgYnVpbGRlcilcbiAgICByZXR1cm4gbmV3IEVudHJ5UG9pbnQocm91dGUsIGVudHJ5LCBkZXBlbmRlbmNpZXMpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZTogc3RyaW5nLCBwcml2YXRlIF9lbnRyeTogc3RyaW5nLCBwcml2YXRlIF9kZXBlbmRlbmNpZXM6IERlcGVuZGVuY3lMaXN0ICkge1xuXG4gIH1cblxuICBnZXQgcm91dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdXRlXG4gIH1cblxuICBnZXQgZW50cnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VudHJ5XG4gIH1cblxuICBnZXQgZGVwZW5kZW5jaWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXBlbmRlbmNpZXNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRyeVBvaW50XG4iXX0=
