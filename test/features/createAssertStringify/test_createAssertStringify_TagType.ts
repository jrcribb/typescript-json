import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TagType = _test_assertStringify(
    "TagType",
    TagType.generate,
    typia.createAssertStringify<TagType>(),
    TagType.SPOILERS,
);