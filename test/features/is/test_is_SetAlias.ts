import typia from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_is } from "../internal/_test_is";

export const test_is_SetAlias = _test_is(
    "SetAlias",
    SetAlias.generate,
    (input) => typia.is(input),
    SetAlias.SPOILERS,
);