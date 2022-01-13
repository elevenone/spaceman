import { IPage } from '../types/page';
/**
 * Parses link `href` attributes and assigns them to
 * configuration options.
 */
export declare function attrparse({ attributes }: Element, state?: IPage): IPage;
/**
 * Locted the closest link when click bubbles.
 */
export declare function getLink(target: EventTarget | MouseEvent, selector: string): Element | false;
/**
 * Returns the byte size of a string value
 */
export declare function byteSize(string: string): number;
/**
 * Link is not cached and can be fetched
 */
export declare function canFetch(target: Element): boolean;
/**
 * Returns a list of link elements to be prefetched. Filters out
 * any links which exist in cache to prevent extrenous transit.
 */
export declare function getTargets(selector: string): Element[];
/**
 * Converts byte size to killobyte, megabyre,
 * gigabyte or terrabyte
 */
export declare function byteConvert(bytes: number): string;
/**
 * Each iterator helper function. Provides a util function
 * for loop iterations
 */
export declare function forEach(fn: (item: Element | any, index?: number, array?: any) => any, list?: any): (arr: any) => any;
/**
 * Get Element attributes
 */
export declare function getElementAttrs({ attributes }: Element, { exclude, include }: {
    exclude?: string[];
    include?: Array<[
        name: string,
        value: string
    ]>;
}): Array<[
    name: string,
    value: string
]>;
//# sourceMappingURL=utils.d.ts.map