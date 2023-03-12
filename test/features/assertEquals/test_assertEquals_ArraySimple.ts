import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_assertEquals_ArraySimple = _test_assertEquals(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.assertEquals(input),
);
