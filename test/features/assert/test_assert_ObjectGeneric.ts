import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_assert_ObjectGeneric = _test_assert(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.assert(input),
    ObjectGeneric.SPOILERS,
);
