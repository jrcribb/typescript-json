import typia from "../../../../src";
import { TagRange } from "../../../structures/TagRange";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TagRange = 
    _test_application("swagger")(
        "TagRange",
        typia.application<[TagRange], "swagger">(),
    );