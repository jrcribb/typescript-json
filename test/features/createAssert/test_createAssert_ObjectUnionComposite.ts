import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createAssert_ObjectUnionComposite = _test_assert(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createAssert<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
