import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TagStep = _test_validateStringify(
    "TagStep",
    TagStep.generate,
    (input) => TSON.validateStringify(input),
    TagStep.SPOILERS,
);
