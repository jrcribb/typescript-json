import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_validate_TagMatrix = _test_validate(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.validate(input),
    TagMatrix.SPOILERS,
);
