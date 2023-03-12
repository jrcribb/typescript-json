import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_assert_TupleUnion = _test_assert(
    "TupleUnion",
    TupleUnion.generate,
    (input) => typia.assert(input),
    TupleUnion.SPOILERS,
);
