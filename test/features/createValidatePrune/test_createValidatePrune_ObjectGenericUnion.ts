import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createValidatePrune_ObjectGenericUnion = _test_validatePrune(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createValidatePrune<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
