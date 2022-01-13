import { IOptions } from './types/options';
import { IPage } from './types/page';
/**
 * Supported
 */
export declare const supported: boolean;
/**
 * Connect Pjax
 */
export declare const connect: (options: IOptions) => void;
/**
 * Reload
 *
 * Reloads the current page
 */
export declare const reload: () => void;
/**
 * UUID Generator
 */
export declare const uuid: (size?: number) => string;
/**
 * Flush Cache
 */
export declare const clear: (url: string) => void;
/**
 * Visit
 */
export declare const visit: (link: string | Element, state?: IPage) => Promise<void>;
/**
 * Disconnect
 */
export declare const disconnect: () => void;
//# sourceMappingURL=index.d.ts.map