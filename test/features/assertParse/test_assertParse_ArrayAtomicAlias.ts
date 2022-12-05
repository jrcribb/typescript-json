import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ArrayAtomicAlias = _test_assertParse(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => TSON.assertParse<ArrayAtomicAlias>(input),
    ArrayAtomicAlias.SPOILERS,
);
