import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectLiteralProperty = _test_validateClone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => TSON.validateClone(input),
    ObjectLiteralProperty.SPOILERS,
);
