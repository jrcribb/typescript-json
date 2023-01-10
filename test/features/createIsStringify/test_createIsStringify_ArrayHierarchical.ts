import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ArrayHierarchical = _test_isStringify(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createIsStringify<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);