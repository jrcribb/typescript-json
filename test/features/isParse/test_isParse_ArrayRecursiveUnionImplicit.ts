import typia from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ArrayRecursiveUnionImplicit = _test_isParse(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.isParse<ArrayRecursiveUnionImplicit>(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);