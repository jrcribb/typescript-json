import typia from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_SetAlias = _test_validate(
    "SetAlias",
    SetAlias.generate,
    (input) => typia.validate(input),
    SetAlias.SPOILERS,
);