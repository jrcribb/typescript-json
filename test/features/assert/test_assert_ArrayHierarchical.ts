import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_assert_ArrayHierarchical = _test_assert(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.assert(input),
    ArrayHierarchical.SPOILERS,
);
