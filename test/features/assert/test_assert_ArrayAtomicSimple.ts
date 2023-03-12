import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_assert_ArrayAtomicSimple = _test_assert(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.assert(input),
    ArrayAtomicSimple.SPOILERS,
);
