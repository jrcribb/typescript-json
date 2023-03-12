import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagFormat } from "../../structures/TagFormat";

export const test_validateStringify_TagFormat = _test_validateStringify(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.validateStringify(input),
    TagFormat.SPOILERS,
);
