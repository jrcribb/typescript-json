import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TagArray = _test_assert(
    "TagArray",
    TagArray.generate,
    typia.createAssert<TagArray>(),
    TagArray.SPOILERS,
);