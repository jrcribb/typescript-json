import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_SetSimple = _test_validateStringify(
    "SetSimple",
    SetSimple.generate,
    (input) => TSON.validateStringify(input),
    SetSimple.SPOILERS,
);
