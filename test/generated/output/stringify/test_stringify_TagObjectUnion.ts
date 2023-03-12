import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_stringify_TagObjectUnion = _test_stringify(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) =>
        ((input: Array<TagObjectUnion.Type>): string => {
            const $number = (typia.stringify as any).number;
            const $string = (typia.stringify as any).string;
            const $throws = (typia.stringify as any).throws;
            const $io0 = (input: any): boolean =>
                "number" === typeof input.value && 3 <= input.value;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.value &&
                3 <= input.value.length &&
                7 >= input.value.length;
            const $iu0 = (input: any): any =>
                (() => {
                    if ("number" === typeof input.value) return $io0(input);
                    if ("string" === typeof input.value) return $io1(input);
                    return false;
                })();
            const $so0 = (input: any): any =>
                `{"value":${$number(input.value)}}`;
            const $so1 = (input: any): any =>
                `{"value":${$string(input.value)}}`;
            const $su0 = (input: any): any =>
                (() => {
                    if ("number" === typeof input.value) return $so0(input);
                    if ("string" === typeof input.value) return $so1(input);
                    $throws({
                        expected:
                            "(TagObjectUnion.Numeric | TagObjectUnion.Literal)",
                        value: input,
                    });
                })();
            return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
        })(input),
);
