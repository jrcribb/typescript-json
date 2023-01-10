import typia from "../../../../src";
import { DynamicConstant } from "../../../structures/DynamicConstant";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicConstant = 
    _test_application("ajv")(
        "DynamicConstant",
        typia.application<[DynamicConstant], "ajv">(),
    );