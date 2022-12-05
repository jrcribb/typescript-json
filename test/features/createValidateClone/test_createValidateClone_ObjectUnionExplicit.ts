import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectUnionExplicit = _test_validateClone(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    TSON.createValidateClone<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
