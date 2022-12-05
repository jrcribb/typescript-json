import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ArrayAtomicAlias = _test_validateClone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => TSON.validateClone(input),
    ArrayAtomicAlias.SPOILERS,
);
