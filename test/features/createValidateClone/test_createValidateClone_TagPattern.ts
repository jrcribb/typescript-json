import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TagPattern = _test_validateClone(
    "TagPattern",
    TagPattern.generate,
    TSON.createValidateClone<TagPattern>(),
    TagPattern.SPOILERS,
);
