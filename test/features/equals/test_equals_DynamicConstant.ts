import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_equals_DynamicConstant = _test_equals(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.equals(input),
);
