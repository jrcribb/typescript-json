import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_validateEquals_TupleHierarchical = _test_validateEquals(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.validateEquals(input),
);
