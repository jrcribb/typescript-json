import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_is_ObjectGeneric = _test_is(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.is(input),
    ObjectGeneric.SPOILERS,
);
