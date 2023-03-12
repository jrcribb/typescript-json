import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_validateStringify_DynamicUnion = _test_validateStringify(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.validateStringify(input),
    DynamicUnion.SPOILERS,
);
