import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createAssertEquals_TemplateConstant = _test_assertEquals(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createAssertEquals<TemplateConstant>(),
);
