import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createValidate_TemplateAtomic = _test_validate(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createValidate<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);
