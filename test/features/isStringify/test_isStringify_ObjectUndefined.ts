import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_isStringify_ObjectUndefined = _test_isStringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.isStringify(input),
    ObjectUndefined.SPOILERS,
);
