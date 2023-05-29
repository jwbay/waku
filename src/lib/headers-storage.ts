import { AsyncLocalStorage } from "node:async_hooks";
import { IncomingHttpHeaders } from "node:http";

console.log('Creating header store @', new Error().stack!.split('\n')[1]);
const headerStore = new AsyncLocalStorage<IncomingHttpHeaders>();
export function withHeadersStore(headers: IncomingHttpHeaders, fn: () => any) {
    headerStore.run(headers, () => {
        fn();
    });
};

export function getCurrentRequestHeaders() {
    return headerStore.getStore()!;
}
