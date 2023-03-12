import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createAssertEquals_ArraySimple = _test_assertEquals(
    "ArraySimple",
    ArraySimple.generate,
    typia.createAssertEquals<ArraySimple>(),
);
