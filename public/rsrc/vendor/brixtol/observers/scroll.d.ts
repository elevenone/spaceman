import { IPosition } from '../types/page';
/**
 * Returns to current scroll position, the `reset()`
 * function **MUST** be called after referencing this
 * to reset position.
 */
export declare const position: IPosition;
/**
 * onScroll event, asserts the current X and Y page
 * offset position of the document
 */
export declare function onScroll(): void;
/**
 * Resets the scroll position`of the document, applying
 * a `x`and `y` positions to `0`
 */
export declare function reset(): IPosition;
/**
 * Returns a faux scroll position. This prevents the
 * tracked scroll position from being overwritten and is
 * used within functions like `href.attrparse`
 */
export declare function y0x0(): IPosition;
/**
 * Attached `scroll` event listener.
 */
export declare function start(): void;
/**
 * Removed `scroll` event listener.
 */
export declare function stop(): void;
//# sourceMappingURL=scroll.d.ts.map