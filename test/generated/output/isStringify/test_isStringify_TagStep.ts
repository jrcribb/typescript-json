import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TagStep } from "../../../structures/TagStep";

export const test_isStringify_TagStep = _test_isStringify(
    "TagStep",
    TagStep.generate,
    (input) =>
        ((input: Array<TagStep.Type>): string | null => {
            const is = (input: any): input is Array<TagStep.Type> => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.exclusiveMinimum &&
                    0 === (input.exclusiveMinimum % 5) - 3 &&
                    3 < input.exclusiveMinimum &&
                    "number" === typeof input.minimum &&
                    0 === (input.minimum % 5) - 3 &&
                    3 <= input.minimum &&
                    "number" === typeof input.range &&
                    0 === (input.range % 5) - 0 &&
                    0 < input.range &&
                    100 > input.range &&
                    "number" === typeof input.multipleOf &&
                    0 === input.multipleOf % 5 &&
                    3 <= input.multipleOf &&
                    99 >= input.multipleOf;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const stringify = (input: Array<TagStep.Type>): string => {
                const $number = (typia.isStringify as any).number;
                const $so0 = (input: any): any =>
                    `{"exclusiveMinimum":${$number(
                        input.exclusiveMinimum,
                    )},"minimum":${$number(input.minimum)},"range":${$number(
                        input.range,
                    )},"multipleOf":${$number(input.multipleOf)}}`;
                return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    TagStep.SPOILERS,
);
