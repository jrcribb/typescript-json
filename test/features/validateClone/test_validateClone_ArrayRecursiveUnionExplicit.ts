import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ArrayRecursiveUnionExplicit =
    _test_validateClone(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        (input) => TSON.validateClone(input),
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
