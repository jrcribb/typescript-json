import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_is_ArraySimple = _test_is(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.is(input),
    ArraySimple.SPOILERS,
);
