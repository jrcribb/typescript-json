import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createValidateEquals_ToJsonNull = _test_validateEquals(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createValidateEquals<ToJsonNull>(),
);
