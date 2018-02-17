var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function trace(entry, builder) {
    return __awaiter(this, void 0, void 0, function* () {
        const tree = yield builder.trace(entry);
        return Object.keys(tree).reduce((result, key) => {
            result[key] = tree[key].source;
            return result;
        }, {});
    });
}
export default trace;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zeXN0ZW0taDIvc2VydmVyL3RyYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBT0EsZUFBcUIsS0FBYSxFQUFFLE9BQWdCOztRQUNsRCxNQUFNLElBQUksR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzlDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFBO1lBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUE7UUFDZixDQUFDLEVBQWtCLEVBQUUsQ0FBQyxDQUFBO0lBQ3hCLENBQUM7Q0FBQTtBQUVELGVBQWUsS0FBSyxDQUFBIiwiZmlsZSI6InNlcnZlci90cmFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWlsZGVyIGZyb20gJ3N5c3RlbWpzLWJ1aWxkZXInXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdzeXN0ZW1qcydcblxuZXhwb3J0IGludGVyZmFjZSBEZXBlbmRlbmN5TGlzdCB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xufVxuXG5hc3luYyBmdW5jdGlvbiB0cmFjZShlbnRyeTogc3RyaW5nLCBidWlsZGVyOiBCdWlsZGVyKSB7XG4gIGNvbnN0IHRyZWUgPSBhd2FpdCBidWlsZGVyLnRyYWNlKGVudHJ5KVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyh0cmVlKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSB0cmVlW2tleV0uc291cmNlXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCA8RGVwZW5kZW5jeUxpc3Q+e30pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyYWNlXG4iXX0=
