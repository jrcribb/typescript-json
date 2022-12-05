import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_DynamicUndefined = _test_validateStringify(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => TSON.validateStringify(input),
    DynamicUndefined.SPOILERS,
);
