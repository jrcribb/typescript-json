import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssert_DynamicUnion = _test_assert(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createAssert<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
