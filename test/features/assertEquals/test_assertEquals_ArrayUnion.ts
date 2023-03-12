import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_assertEquals_ArrayUnion = _test_assertEquals(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.assertEquals(input),
);
