import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectLiteralProperty = _test_validateParse(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => TSON.validateParse<ObjectLiteralProperty>(input),
    ObjectLiteralProperty.SPOILERS,
);
