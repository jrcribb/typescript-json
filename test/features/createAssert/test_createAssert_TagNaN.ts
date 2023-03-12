import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagNaN } from "../../structures/TagNaN";

export const test_createAssert_TagNaN = _test_assert(
    "TagNaN",
    TagNaN.generate,
    typia.createAssert<TagNaN>(),
    TagNaN.SPOILERS,
);
