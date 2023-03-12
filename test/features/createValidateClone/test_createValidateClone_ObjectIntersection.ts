import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createValidateClone_ObjectIntersection = _test_validateClone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createValidateClone<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
