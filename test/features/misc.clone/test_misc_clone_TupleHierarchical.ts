import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_clone_TupleHierarchical = _test_misc_clone(
    "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)((input) =>
    typia.misc.clone<TupleHierarchical>(input),
);
