/**
 * Attribute Configuration
 *
 * Used to match Pjax data attribute names
 */
export declare const Attr: RegExp;
/**
 * Form Inputs
 *
 * Used to match Form Input elements
 */
export declare const CacheValue: RegExp;
/**
 * URL Pathname
 *
 * Used to match first pathname from a URL (group 1)
 */
export declare const Pathname: RegExp;
/**
 * Form Inputs
 *
 * Used to match Form Input elements
 */
export declare const FormInputs: RegExp;
/**
 * Ready State
 *
 * Ready State Match
 */
export declare const isReady: RegExp;
/**
 * Boolean Attribute value
 *
 * Used to Match 'true' or 'false' attribute
 */
export declare const isBoolean: RegExp;
/**
 * Matches decimal number
 *
 * Used to Match number, respected negative numbers
 */
export declare const isNumber: RegExp;
/**
 * Matches whitespaces (greedy)
 *
 * Used to Match whitspaces
 */
export declare const isWhitespace: RegExp;
/**
 * Attribute Action Caller
 *
 * Used to match the event caller for attribute actions
 */
export declare const isAction: RegExp;
/**
 * Append or Prepend
 *
 * Used to match append or prepend insertion
 */
export declare const isReplace: RegExp;
/**
 * Cache Attribute
 *
 * Used to match and validate a cache attribute config
 */
export declare const isCache: RegExp;
/**
 * Threshold Attribute Value
 *
 * Used to match threshold JSON attributes
 */
export declare const isPrefetch: RegExp;
/**
 * Threshold Attribute Value
 *
 * Used to match threshold JSON attributes
 */
export declare const isThreshold: RegExp;
/**
 * Attribute Parameter Value
 *
 * Used to match a class event caller target attributes
 */
export declare const ActionParams: RegExp;
/**
 * Array Value
 *
 * Used to test value for a string array attribute value, like data-pjax-replace.
 *
 * @example
 * https://regex101.com/r/I77U9B/1
 *
 */
export declare const isArray: RegExp;
/**
 * Append or Prepend attribute value
 *
 * Used to test value for append or prepend, array within array
 *
 * @example
 * https://regex101.com/r/QDSRBK/1
 *
 */
export declare const isPenderValue: RegExp;
/**
 * Test Position Attributes
 *
 * Tests attribute values for a position config
 *
 * @example
 * https://regex101.com/r/DG2LI1/1
 *
 */
export declare const isPosition: RegExp;
/**
 * Mached Position Attributes
 *
 * Used to match `x:0` and `y:0` JSON space separated attributes
 */
export declare const inPosition: RegExp;
/**
 * Protocol
 *
 * Used to match Protocol
 */
export declare const Protocol: RegExp;
/**
 * Route Parameter
 *
 * Used for router
 */
export declare const OptionalParam: RegExp;
/**
 * Route Named Parameter
 *
 * Used for router
 */
export declare const NamedParam: RegExp;
/**
 * Route Splat Parameter
 *
 * Used for router
 */
export declare const SplatParam: RegExp;
/**
 * Route Escape Expression
 *
 * Used for router
 */
export declare const EscapeExp: RegExp;
//# sourceMappingURL=regexp.d.ts.map