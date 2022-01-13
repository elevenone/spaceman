import { ILocation } from '../types/location';
/**
 * Returns the next parsed url value.
 * Next URL is the new navigation URL key from
 * which a navigation will render. This is set
 * right before page replacements.
 *
 * **BEWARE**
 *
 * Use this with caution, this value will change only when
 * a new navigation has began. Otherwise it returns
 * the same value as `url`
 */
export declare let next: string;
/**
 * Returns the last parsed url value.
 * Prev URL is the current URL. Calling this will
 * return the same value as it would `window.location.pathname`
 *
 * **BEWARE**
 *
 * Use this with caution, this value will change on new
 * navigations.
 *
 * @returns {string}
 */
export declare let url: string;
/**
 * Returns the pathname cache key URL
 */
export declare function key(link: string): string;
/**
 * Returns the absolute URL
 */
export declare function absolute(link: string): string;
/**
 * Parses link and returns an ILocation.
 * Accepts either a `href` target or `string`.
 * If no parameter value is passed, the
 * current location pathname (string) is used.
 */
export declare function parse(link: Element | string): ILocation;
/**
 * Parses link and returns a location.
 *
 * **IMPORTANT**
 *
 * This function will modify the next url value
 */
export declare function get(link: Element | string, update?: boolean): {
    url: string;
    location: ILocation;
};
//# sourceMappingURL=path.d.ts.map