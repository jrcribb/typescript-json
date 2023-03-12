import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createValidateClone_ObjectGenericArray = _test_validateClone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createValidateClone<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
