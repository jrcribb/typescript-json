import typia from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectUnionComposite = _test_assertStringify(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.assertStringify(input),
    ObjectUnionComposite.SPOILERS,
);