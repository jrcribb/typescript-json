import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TagPattern } from "../../structures/TagPattern";

export const test_assertParse_TagPattern = _test_assertParse(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.assertParse<TagPattern>(input),
    TagPattern.SPOILERS,
);
