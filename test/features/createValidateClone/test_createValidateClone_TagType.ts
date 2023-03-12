import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagType } from "../../structures/TagType";

export const test_createValidateClone_TagType = _test_validateClone(
    "TagType",
    TagType.generate,
    typia.createValidateClone<TagType>(),
    TagType.SPOILERS,
);
