import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_DynamicComposite = _test_assert(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.assert(input),
    DynamicComposite.SPOILERS,
);