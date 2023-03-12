import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_equals_DynamicEnumeration = _test_equals(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.equals(input),
);
