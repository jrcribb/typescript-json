import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_isStringify_ConstantConstEnumeration = _test_isStringify(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) =>
        ((
            input: Array<ConstantConstEnumeration.Enumeration>,
        ): string | null => {
            const is = (
                input: any,
            ): input is Array<ConstantConstEnumeration.Enumeration> => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            0 === elem ||
                            1 === elem ||
                            2 === elem ||
                            "Three" === elem ||
                            "Four" === elem,
                    )
                );
            };
            const stringify = (
                input: Array<ConstantConstEnumeration.Enumeration>,
            ): string => {
                const $string = (typia.isStringify as any).string;
                const $number = (typia.isStringify as any).number;
                const $throws = (typia.isStringify as any).throws;
                return `[${input
                    .map((elem: any) =>
                        (() => {
                            if ("string" === typeof elem) return $string(elem);
                            if ("number" === typeof elem) return $number(elem);
                            if ("string" === typeof elem)
                                return '"' + elem + '"';
                            $throws({
                                expected: '("Four" | "Three" | 0 | 1 | 2)',
                                value: elem,
                            });
                        })(),
                    )
                    .join(",")}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ConstantConstEnumeration.SPOILERS,
);
