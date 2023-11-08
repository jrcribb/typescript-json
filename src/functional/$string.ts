/**
 * In the past, name of `typia` was `typescript-json`, and supported
 * JSON serialization by wrapping `fast-json-stringify. `typescript-json` was
 * a helper library of `fast-json-stringify`, which can skip manual JSON schema
 * definition just by putting pure TypeScript type.
 *
 * This `$string` function is a part of `fast-json-stringify` at that time, and
 * still being used in `typia` for the string serialization.
 *
 * @internal
 * @reference https://github.com/fastify/fast-json-stringify/blob/master/lib/serializer.js
 * @blog https://dev.to/samchon/good-bye-typescript-is-ancestor-of-typia-20000x-faster-validator-49fi
 */
export const $string = (str: string): string => {
    if (STR_ESCAPE.test(str) === false) return `"${str}"`;

    const length: number = str.length;
    if (length > 41) return JSON.stringify(str);

    let result = "";
    let last = -1;
    let point = 255;

    // eslint-disable-next-line
    for (let i = 0; i < length; ++i) {
        point = str.charCodeAt(i);
        if (point < 32) {
            return JSON.stringify(str);
        }
        if (point >= 0xd800 && point <= 0xdfff) {
            // The current character is a surrogate.
            return JSON.stringify(str);
        }
        if (
            point === 0x22 || // '"'
            point === 0x5c // '\'
        ) {
            last === -1 && (last = 0);
            result += str.slice(last, i) + "\\";
            last = i;
        }
    }

    return (
        (last === -1 && '"' + str + '"') || '"' + result + str.slice(last) + '"'
    );
};

const STR_ESCAPE =
    /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/;
