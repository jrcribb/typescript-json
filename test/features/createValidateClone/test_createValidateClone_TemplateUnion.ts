import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createValidateClone_TemplateUnion = _test_validateClone(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createValidateClone<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);
