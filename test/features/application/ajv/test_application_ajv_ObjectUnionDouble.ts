import typia from "../../../../src";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectUnionDouble = 
    _test_application("ajv")(
        "ObjectUnionDouble",
        typia.application<[ObjectUnionDouble], "ajv">(),
    );