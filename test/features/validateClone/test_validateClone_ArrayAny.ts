import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ArrayAny = _test_validateClone(
    "ArrayAny",
    ArrayAny.generate,
    (input) => TSON.validateClone(input),
    ArrayAny.SPOILERS,
);
