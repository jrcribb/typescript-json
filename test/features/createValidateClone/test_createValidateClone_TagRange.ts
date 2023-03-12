import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagRange } from "../../structures/TagRange";

export const test_createValidateClone_TagRange = _test_validateClone(
    "TagRange",
    TagRange.generate,
    typia.createValidateClone<TagRange>(),
    TagRange.SPOILERS,
);
