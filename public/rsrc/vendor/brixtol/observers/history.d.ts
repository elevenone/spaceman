import { IPage } from '../types/page';
/**
 * Attached `history` event listener.
 */
export declare function start(): void;
/**
 * Removed `history` event listener.
 */
export declare function stop(): void;
/**
 * Execute a history state replacement for the current
 * page location. It's intended use is to update the
 * current scroll position and any other values stored
 * in history state.
 *
 */
export declare function updateState(): IPage;
//# sourceMappingURL=history.d.ts.map