import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectUnionImplicit = _test_validateClone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => TSON.validateClone(input),
    ObjectUnionImplicit.SPOILERS,
);
