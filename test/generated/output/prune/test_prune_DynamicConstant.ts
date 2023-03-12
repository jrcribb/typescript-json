import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_prune_DynamicConstant = _test_prune(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) =>
        ((input: { a: number; b: number; c: number; d: number }): void => {
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
        })(input),
);
