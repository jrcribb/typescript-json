import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagType } from "../../structures/TagType";

export const test_createEquals_TagType = _test_equals(
    "TagType",
    TagType.generate,
    typia.createEquals<TagType>(),
);
