import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_createIsStringify_ObjectTuple = _test_isStringify(
    "ObjectTuple",
    ObjectTuple.generate,
    (input: ObjectTuple): string | null => {
        const is = (input: any): input is ObjectTuple => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.code &&
                "string" === typeof input.name;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.mobile &&
                "string" === typeof input.name;
            return (
                Array.isArray(input) &&
                input.length === 2 &&
                "object" === typeof input[0] &&
                null !== input[0] &&
                $io0(input[0]) &&
                "object" === typeof input[1] &&
                null !== input[1] &&
                $io1(input[1])
            );
        };
        const stringify = (input: ObjectTuple): string => {
            const $string = (typia.createIsStringify as any).string;
            return `[${`{"id":${$string(input[0].id)},"code":${$string(
                input[0].code,
            )},"name":${$string(input[0].name)}}`},${`{"id":${$string(
                input[1].id,
            )},"mobile":${$string(input[1].mobile)},"name":${$string(
                input[1].name,
            )}}`}]`;
        };
        return is(input) ? stringify(input) : null;
    },
    ObjectTuple.SPOILERS,
);
