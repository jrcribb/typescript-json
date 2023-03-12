import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_isClone_ArrayRecursiveUnionImplicit = _test_isClone(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.isClone(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
