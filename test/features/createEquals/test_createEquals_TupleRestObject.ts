import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createEquals_TupleRestObject = _test_equals(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createEquals<TupleRestObject>(),
);
