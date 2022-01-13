import { IPage } from '../types/page';
/**
 * Executes a pjax navigation.
 */
export declare function navigate(url: string, state?: IPage | false): Promise<void>;
/**
 * Attached `click` event listener.
 *
 * @returns {void}
 */
export declare function start(): void;
/**
 * Removed `click` event listener.
 */
export declare function stop(): void;
//# sourceMappingURL=hrefs.d.ts.map