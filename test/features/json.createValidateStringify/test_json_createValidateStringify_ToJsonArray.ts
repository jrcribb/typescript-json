import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_createValidateStringify_ToJsonArray =
    _test_json_validateStringify("ToJsonArray")<ToJsonArray>(ToJsonArray)(
        typia.json.createValidateStringify<ToJsonArray>(),
    );
