import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_is_DynamicArray = _test_is(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.is(input),
    DynamicArray.SPOILERS,
);
