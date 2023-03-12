import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_isPrune_ArrayAtomicAlias = _test_isPrune(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) =>
        ((
            input: any,
        ): input is [
            ArrayAtomicAlias.Alias<boolean>,
            ArrayAtomicAlias.Alias<number>,
            ArrayAtomicAlias.Alias<string>,
        ] => {
            const is = (
                input: any,
            ): input is [
                ArrayAtomicAlias.Alias<boolean>,
                ArrayAtomicAlias.Alias<number>,
                ArrayAtomicAlias.Alias<string>,
            ] => {
                return (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    Array.isArray(input[0]) &&
                    input[0].every((elem: any) => "boolean" === typeof elem) &&
                    Array.isArray(input[1]) &&
                    input[1].every(
                        (elem: any) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    ) &&
                    Array.isArray(input[2]) &&
                    input[2].every((elem: any) => "string" === typeof elem)
                );
            };
            const prune = (
                input: [
                    ArrayAtomicAlias.Alias<boolean>,
                    ArrayAtomicAlias.Alias<number>,
                    ArrayAtomicAlias.Alias<string>,
                ],
            ): void => {};
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    ArrayAtomicAlias.SPOILERS,
);
