import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_is_ObjectUndefined = _test_is(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.is(input),
    ObjectUndefined.SPOILERS,
);
