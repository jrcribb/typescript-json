import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createValidateEquals_TupleRestArray = _test_validateEquals(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createValidateEquals<TupleRestArray>(),
);
