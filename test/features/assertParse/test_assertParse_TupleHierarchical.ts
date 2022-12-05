import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TupleHierarchical = _test_assertParse(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => TSON.assertParse<TupleHierarchical>(input),
    TupleHierarchical.SPOILERS,
);
