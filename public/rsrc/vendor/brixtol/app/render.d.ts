import { IPage } from '../types/page';
/**
 * Parse HTML document string from request response
 * using `parser()` method. Cached pages will pass
 * the saved response here.
 */
export declare function parse(HTMLString: string): Document;
/**
 * Captures current document element and sets a
 * record to snapshot state
 */
export declare function capture(state: IPage): Promise<void>;
/**
 * Observe Head Element
 */
/**
 * Observe Head Element
 */
/**
 * Update the DOM and execute page adjustments
 * to new navigation point
 */
export declare function update(state: IPage, popstate?: boolean): void;
//# sourceMappingURL=render.d.ts.map