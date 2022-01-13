import { IPage } from '../types/page';
import { IOptions } from '../types/options';
/**
 * Cache
 */
export declare const cache: Map<string, IPage>;
/**
 * Snapshots
 */
export declare const snapshots: Map<string, string>;
/**
 * Ready connections
 */
export declare const ready: {
    controller: boolean;
    history: boolean;
    href: boolean;
    hover: boolean;
    intersect: boolean;
};
/**
 * Configuration
 */
export declare const config: IOptions;
/**
 * Connects store and intialized the workable
 * state management model. Connect MUST be called
 * upon Pjax initialization. This function acts
 * as a class `constructor` establishing an instance.
 */
export declare function connect(options?: IOptions): void;
/**
 * Indicates a new page visit or a return page visit. New visits
 * are defined by an event dispatched from a `href` link. Both a new
 * new page visit or subsequent visit will call this function.
 *
 * **Breakdown**
 *
 * Subsequent visits calling this function will have their per-page
 * specifics configs (generally those configs set with attributes)
 * reset and merged into its existing records (if it has any), otherwise
 * a new page instance will be generated including defult preset configs.
 */
export declare function capture(state: IPage, snapshot: string): IPage;
/**
 * Returns a snapshot matching provided ID
 */
export declare function snapshot(id: string): string;
/**
 * Removes cached records. Optionally pass in URL
 * to remove specific record.
 */
export declare function clear(url?: string): void;
/**
 * Check if cache record exists with snapshot
 *
 * @param {string} url
 * @param {{snapshot?: boolean}} has
 */
export declare function get(url: string): Partial<{
    page: IPage;
    snapshot: string;
    readonly target: Document;
}>;
/**
 * Check if cache record exists with snapshot
 */
export declare function has(url: string, has?: {
    snapshot?: boolean;
}): boolean;
/**
 * Update current pushState History
 */
export declare function history(): string;
/**
 * Updates page state, this function will run a merge
 * on the current page instance and re-assign the `pageState`
 * letting to updated config.
 *
 * If newState contains a different `ILocation.url` value from
 * that of the current page instance `url` then it will be updated
 * to match that of the `newState.url` value.
 *
 * The cache will be updated accordingly, so `this.page` will provide
 * access to the updated instance.
 *
 * @param {IPage} state
 * @returns {IPage}
 */
export declare function update(state: IPage): IPage;
//# sourceMappingURL=store.d.ts.map