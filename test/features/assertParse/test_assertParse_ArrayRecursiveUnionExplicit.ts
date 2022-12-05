import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ArrayRecursiveUnionExplicit = _test_assertParse(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => TSON.assertParse<ArrayRecursiveUnionExplicit>(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
