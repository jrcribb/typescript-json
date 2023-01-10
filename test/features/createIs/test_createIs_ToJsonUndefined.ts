import typia from "../../../src";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ToJsonUndefined = _test_is(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    typia.createIs<ToJsonUndefined>(),
);