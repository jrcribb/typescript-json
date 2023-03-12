import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_assertStringify_DynamicConstant = _test_assertStringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.assertStringify(input),
    DynamicConstant.SPOILERS,
);
