import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_assert_ArrayUnion = _test_assert(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.assert(input),
    ArrayUnion.SPOILERS,
);
