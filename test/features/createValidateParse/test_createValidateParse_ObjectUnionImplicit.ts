import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectUnionImplicit = _test_validateParse(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    TSON.createValidateParse<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
