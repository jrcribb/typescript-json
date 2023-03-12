import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { SetAlias } from "../../structures/SetAlias";

export const test_createValidate_SetAlias = _test_validate(
    "SetAlias",
    SetAlias.generate,
    typia.createValidate<SetAlias>(),
    SetAlias.SPOILERS,
);
