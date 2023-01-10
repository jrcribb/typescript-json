import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ArrayHierarchical = _test_assert(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createAssert<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);