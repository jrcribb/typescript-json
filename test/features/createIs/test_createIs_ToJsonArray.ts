import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createIs_ToJsonArray = _test_is(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createIs<ToJsonArray>(),
);
