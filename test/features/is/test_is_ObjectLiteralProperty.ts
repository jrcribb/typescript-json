import typia from "../../../src";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectLiteralProperty = _test_is(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) => typia.is(input),
    ObjectLiteralProperty.SPOILERS,
);