import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createAssert_TemplateConstant = _test_assert(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createAssert<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
