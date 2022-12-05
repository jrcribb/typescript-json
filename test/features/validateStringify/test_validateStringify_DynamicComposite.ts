import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_DynamicComposite = _test_validateStringify(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => TSON.validateStringify(input),
    DynamicComposite.SPOILERS,
);
