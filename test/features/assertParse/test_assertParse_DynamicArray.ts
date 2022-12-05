import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_DynamicArray = _test_assertParse(
    "DynamicArray",
    DynamicArray.generate,
    (input) => TSON.assertParse<DynamicArray>(input),
    DynamicArray.SPOILERS,
);
