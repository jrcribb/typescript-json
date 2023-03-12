import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createAssertEquals_TupleRestAtomic = _test_assertEquals(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createAssertEquals<TupleRestAtomic>(),
);
