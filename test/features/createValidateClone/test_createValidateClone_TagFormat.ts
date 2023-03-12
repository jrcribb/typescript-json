import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagFormat } from "../../structures/TagFormat";

export const test_createValidateClone_TagFormat = _test_validateClone(
    "TagFormat",
    TagFormat.generate,
    typia.createValidateClone<TagFormat>(),
    TagFormat.SPOILERS,
);
