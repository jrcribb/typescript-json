import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_TagObjectUnion = _test_isStringify(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.isStringify(input),
    TagObjectUnion.SPOILERS,
);