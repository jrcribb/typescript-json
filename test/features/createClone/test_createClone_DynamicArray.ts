import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_createClone_DynamicArray = _test_clone(
    "DynamicArray",
    DynamicArray.generate,
    typia.createClone<DynamicArray>(),
);
