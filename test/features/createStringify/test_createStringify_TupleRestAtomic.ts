import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createStringify_TupleRestAtomic = _test_stringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createStringify<TupleRestAtomic>(),
);
