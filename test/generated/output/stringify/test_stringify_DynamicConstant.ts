import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_stringify_DynamicConstant = _test_stringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) =>
        ((input: { a: number; b: number; c: number; d: number }): string => {
            const $number = (typia.stringify as any).number;
            const $so0 = (input: any): any =>
                `{"a":${$number(input.a)},"b":${$number(input.b)},"c":${$number(
                    input.c,
                )},"d":${$number(input.d)}}`;
            return $so0(input);
        })(input),
);
