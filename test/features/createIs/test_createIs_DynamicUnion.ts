import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createIs_DynamicUnion = _test_is(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createIs<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
