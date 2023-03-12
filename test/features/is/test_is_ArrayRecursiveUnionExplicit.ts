import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_is_ArrayRecursiveUnionExplicit = _test_is(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.is(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
