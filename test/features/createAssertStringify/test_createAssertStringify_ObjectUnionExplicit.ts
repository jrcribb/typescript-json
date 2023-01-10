import typia from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectUnionExplicit = _test_assertStringify(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createAssertStringify<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);