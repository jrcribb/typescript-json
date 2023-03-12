import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagArray } from "../../structures/TagArray";

export const test_createAssert_TagArray = _test_assert(
    "TagArray",
    TagArray.generate,
    typia.createAssert<TagArray>(),
    TagArray.SPOILERS,
);
