import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_createIs_TagObjectUnion = _test_is(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createIs<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
