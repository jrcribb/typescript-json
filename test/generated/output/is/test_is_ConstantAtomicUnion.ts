import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_is_ConstantAtomicUnion = _test_is(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) =>
        ((input: any): input is Array<ConstantAtomicUnion.Union> => {
            const $io0 = (input: any): boolean => "key" === input.key;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        false === elem ||
                        1 === elem ||
                        2 === elem ||
                        "three" === elem ||
                        "four" === elem ||
                        ("object" === typeof elem &&
                            null !== elem &&
                            $io0(elem)),
                )
            );
        })(input),
    ConstantAtomicUnion.SPOILERS,
);
