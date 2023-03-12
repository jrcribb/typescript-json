import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createAssertEquals_ToJsonNull = _test_assertEquals(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createAssertEquals<ToJsonNull>(),
);
