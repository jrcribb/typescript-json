import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createAssertPrune_ArrayRecursiveUnionImplicit =
    _test_assertPrune(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        typia.createAssertPrune<ArrayRecursiveUnionImplicit>(),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
