import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createAssert_ArrayAtomicSimple = _test_assert(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createAssert<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
