import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_DynamicTemplate = _test_validateStringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => TSON.validateStringify(input),
    DynamicTemplate.SPOILERS,
);
