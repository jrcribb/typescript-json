import TSON from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectLiteralProperty =
    _test_validateStringify(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        TSON.createValidateStringify<ObjectLiteralProperty>(),
        ObjectLiteralProperty.SPOILERS,
    );
