import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_DynamicUnion = _test_validateStringify(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.validateStringify(input),
    DynamicUnion.SPOILERS,
);