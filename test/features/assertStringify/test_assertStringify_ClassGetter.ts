import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ClassGetter = _test_assertStringify(
    "ClassGetter",
    ClassGetter.generate,
    (input) => typia.assertStringify(input),
    ClassGetter.SPOILERS,
);