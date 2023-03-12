import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createAssert_TupleHierarchical = _test_assert(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createAssert<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
