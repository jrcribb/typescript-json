import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TemplateConstant = _test_validateClone(
    "TemplateConstant",
    TemplateConstant.generate,
    TSON.createValidateClone<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
