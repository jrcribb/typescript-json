import typia from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_DynamicNever = _test_assertStringify(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.assertStringify(input),
    DynamicNever.SPOILERS,
);