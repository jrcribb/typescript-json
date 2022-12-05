import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ArrayRecursiveUnionImplicit =
    _test_validateClone(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        (input) => TSON.validateClone(input),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
