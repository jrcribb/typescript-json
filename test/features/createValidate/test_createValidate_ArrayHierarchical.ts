import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createValidate_ArrayHierarchical = _test_validate(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createValidate<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
