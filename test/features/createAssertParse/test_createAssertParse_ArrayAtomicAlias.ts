import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ArrayAtomicAlias = _test_assertParse(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    TSON.createAssertParse<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
