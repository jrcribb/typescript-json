import typia from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_is } from "../internal/_test_is";

export const test_createIs_DynamicArray = _test_is(
    "DynamicArray",
    DynamicArray.generate,
    typia.createIs<DynamicArray>(),
    DynamicArray.SPOILERS,
);