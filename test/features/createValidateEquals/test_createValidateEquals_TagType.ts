import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagType } from "../../structures/TagType";

export const test_createValidateEquals_TagType = _test_validateEquals(
    "TagType",
    TagType.generate,
    typia.createValidateEquals<TagType>(),
);
