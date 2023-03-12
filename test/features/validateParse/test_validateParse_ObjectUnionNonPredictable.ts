import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_validateParse_ObjectUnionNonPredictable = _test_validateParse(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.validateParse<ObjectUnionNonPredictable>(input),
    ObjectUnionNonPredictable.SPOILERS,
);
