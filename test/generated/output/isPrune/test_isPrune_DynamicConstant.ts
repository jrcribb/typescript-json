import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_isPrune_DynamicConstant = _test_isPrune(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) =>
        ((
            input: any,
        ): input is { a: number; b: number; c: number; d: number } => {
            const is = (
                input: any,
            ): input is { a: number; b: number; c: number; d: number } => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.a &&
                    Number.isFinite(input.a) &&
                    "number" === typeof input.b &&
                    Number.isFinite(input.b) &&
                    "number" === typeof input.c &&
                    Number.isFinite(input.c) &&
                    "number" === typeof input.d &&
                    Number.isFinite(input.d);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const prune = (input: {
                a: number;
                b: number;
                c: number;
                d: number;
            }): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "a" === key ||
                            "b" === key ||
                            "c" === key ||
                            "d" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    DynamicConstant.SPOILERS,
);
