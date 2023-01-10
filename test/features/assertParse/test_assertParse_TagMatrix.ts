import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TagMatrix = _test_assertParse(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.assertParse<TagMatrix>(input),
    TagMatrix.SPOILERS,
);