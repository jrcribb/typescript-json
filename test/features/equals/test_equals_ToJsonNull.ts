import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_equals_ToJsonNull = _test_equals(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => typia.equals(input),
);
