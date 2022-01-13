import { IEvents } from '../types/page';
/**
 * Dispatches lifecycle events on the document.
 */
export declare function targetedEvent(eventName: IEvents, target: Element): boolean;
/**
 * Dispatches lifecycle events on the document.
 */
export declare function dispatchEvent(eventName: IEvents, detail: object, cancelable?: boolean): boolean;
//# sourceMappingURL=events.d.ts.map