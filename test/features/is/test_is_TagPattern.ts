import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagPattern } from "../../structures/TagPattern";

export const test_is_TagPattern = _test_is(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.is(input),
    TagPattern.SPOILERS,
);
