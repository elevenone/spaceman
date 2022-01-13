import { ILocation } from './location';
/**
 * Pjax Events
 */
export declare type IEvents = 'pjax:prefetch' | 'pjax:trigger' | 'pjax:click' | 'pjax:request' | 'pjax:cache' | 'pjax:render' | 'pjax:script' | 'pjax:load';
/**
 * Cache Size
 */
export declare type ICacheSize = {
    total: number;
    weight: string;
};
/**
 * Scroll position records
 */
export declare type IPosition = {
    x: number;
    y: number;
};
/**
 * Page Visit State
 *
 * Configuration from each page visit. For every page navigation
 * the configuration object is generated in a immutable manner.
 */
export interface IPage {
    /**
     * The list of fragment target element selectors defined upon connection.
     *
     * @example
     * ['#main', '.header', '[data-attr]', 'header']
     */
    readonly targets?: string[];
    /**
     * The URL cache key and current url path
     */
    url?: string;
    /**
     * UUID reference to the page snapshot HTML Document element
     */
    snapshot?: string;
    /**
     * Location URL
     */
    location?: ILocation;
    /**
     * The Document title
     */
    title?: string;
    /**
     * Should this fetch be pushed to history
     */
    history?: boolean;
    /**
     * List of fragments to replace. When `hydrate` is used,
     * it will run precedence over `targets` and only execute
     * a replacement on the elements defined.
     *
     * @example
     * ['#main', '.header', '[data-attr]', 'header']
     */
    hydrate?: null | string[];
    /**
     * List of fragment element selectors. Accepts any valid
     * `querySelector()` string.
     *
     * @example
     * ['#main', '.header', '[data-attr]', 'header']
     */
    replace?: null | string[];
    /**
     * List of fragments to be appened from and to. Accepts multiple.
     *
     * @example
     * [['#main', '.header'], ['[data-attr]', 'header']]
     */
    append?: null | Array<[from: string, to: string]>;
    /**
     * List of fragments to be prepend from and to. Accepts multiple.
     *
     * @example
     * [['#main', '.header'], ['[data-attr]', 'header']]
     */
    prepend?: null | Array<[from: string, to: string]>;
    /**
     * Controls the caching engine for the link navigation.
     * Option is enabled when `cache` preset config is `true`.
     * Each pjax link can set a different cache option.
     *
     * **IMPORTANT**
     *
     * Cache control is only operational on clicks, prefetches
     * will not control cache.
     *
     * ---
     * `false`
     *
     * Passing in __false__ will execute a pjax visit that will
     * not be saved to cache and if the link exists in cache
     * it will be removed.
     *
     * `reset`
     *
     * Passing in __reset__ will remove the requested page from cache
     * (if it exsists) and the next navigation result will be saved.
     *
     * `clear`
     *
     * Passing in __clear__ will cleat the entire cache, removing all
     * saved records.
     *
     * `history`
     *
     * Passing in __history__ will clear all previous record but keep
     * the current visit.
     */
    cache?: boolean | string;
    /**
     * Scroll position of the next navigation.
     *
     * ---
     * `x` - Equivalent to `scrollLeft` in pixels
     *
     * `y` - Equivalent to `scrollTop` in pixels
     */
    position?: IPosition;
    /**
     * Define mouseover timeout from which fetching will begin
     * after time spent on mouseover
     *
     * @default 100
     */
    threshold?: number;
    /**
     * Define proximity prefetch distance from which fetching will
     * begin relative to the cursor offset of href elements.
     *
     * @default 0
     */
    proximity?: number;
    /**
     * Progress bar threshold delay
     *
     * @default 350
     */
    progress?: boolean | number;
}
//# sourceMappingURL=page.d.ts.map
