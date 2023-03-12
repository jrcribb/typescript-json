import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_createValidatePrune_TagObjectUnion = _test_validatePrune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createValidatePrune<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
