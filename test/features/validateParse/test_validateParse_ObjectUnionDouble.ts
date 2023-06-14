import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_validateParse_ObjectUnionDouble = _test_validateParse(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.validateParse<ObjectUnionDouble>(input),
    ObjectUnionDouble.SPOILERS,
);