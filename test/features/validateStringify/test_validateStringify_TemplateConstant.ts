import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TemplateConstant = _test_validateStringify(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => TSON.validateStringify(input),
    TemplateConstant.SPOILERS,
);
