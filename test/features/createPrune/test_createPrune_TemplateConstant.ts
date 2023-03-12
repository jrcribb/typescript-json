import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createPrune_TemplateConstant = _test_prune(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createPrune<TemplateConstant>(),
);
