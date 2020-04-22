
/**
 * sum 
 * @param a number
 * @param b number
 */
export function add(a: number, b: number): number {
    return a + b;
}

/**
 * 解析url
 * @param str string
 */
export function queryParameter(str: string): url {
    const obj: url = {
        HASH: ''
    };
    let reg = /([^?=&#]+)=([^?=&#]+)/g;
    str.replace(reg, (...args) => {
        obj[args[1]] = args[2];
        return '';
    })
    reg = /#([^?=&#]+)/;
    if (reg.test(str)) {
        const hash = reg.exec(str) as RegExpExecArray;
        obj["HASH"] = hash[1];
    }
    return obj;
}

interface url {
    HASH: string,
    [key: string]: any
}