import typia from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectUnionImplicit = _test_is(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createIs<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);