import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TagLength = _test_assertParse(
    "TagLength",
    TagLength.generate,
    (input) => TSON.assertParse<TagLength>(input),
    TagLength.SPOILERS,
);
