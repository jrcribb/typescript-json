import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_createPrune_ConstantAtomicUnion = _test_prune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input: ConstantAtomicUnion): void => {
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if ("key" === key) continue;
                delete input[key];
            }
        };
        if (Array.isArray(input))
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po0(elem);
            });
    },
);
