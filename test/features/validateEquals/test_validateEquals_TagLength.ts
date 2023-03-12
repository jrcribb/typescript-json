import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagLength } from "../../structures/TagLength";

export const test_validateEquals_TagLength = _test_validateEquals(
    "TagLength",
    TagLength.generate,
    (input) => typia.validateEquals(input),
);
