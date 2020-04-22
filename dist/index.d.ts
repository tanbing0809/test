/**
 * sum
 * @param a number
 * @param b number
 */
export declare function add(a: number, b: number): number;
/**
 * 解析url
 * @param str string
 */
export declare function queryParameter(str: string): url;
interface url {
    HASH: string;
    [key: string]: any;
}
export {};
