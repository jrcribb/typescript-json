import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagLength } from "../../structures/TagLength";

export const test_createAssert_TagLength = _test_assert(
    "TagLength",
    TagLength.generate,
    typia.createAssert<TagLength>(),
    TagLength.SPOILERS,
);
