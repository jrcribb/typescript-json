import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagPattern } from "../../structures/TagPattern";

export const test_validate_TagPattern = _test_validate(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.validate(input),
    TagPattern.SPOILERS,
);
