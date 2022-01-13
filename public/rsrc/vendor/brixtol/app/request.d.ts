import { IPage, ICacheSize } from '../types/page';
/**
 * XHR Requests
 */
export declare const transit: Map<string, XMLHttpRequest>;
/**
 * Returns request cache metrics
 */
export declare function cacheSize(): ICacheSize;
/**
 * Cancels the request in transit
 */
export declare function cancel(url: string): void;
/**
 * Prevents repeated requests from being executed.
 * When prefetching, if a request is in transit and a click
 * event dispatched this will prevent multiple requests and
 * instead wait for initial fetch to complete.
 *
 * Number of recursive runs to make, set this to 85 to disable,
 * else just leave it to execute as is.
 *
 * Returns `true` if request resolved in `850ms` else `false`
 */
export declare function inFlight(url: string): Promise<boolean>;
/**
 * Fetches documents and guards from duplicated requests
 * from being dispatched if an indentical fetch is in flight.
 * Requests will always save responses and snapshots.
 */
export declare function get(state: IPage): Promise<IPage | false>;
//# sourceMappingURL=request.d.ts.map