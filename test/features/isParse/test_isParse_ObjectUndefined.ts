import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_isParse_ObjectUndefined = _test_isParse(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.isParse<ObjectUndefined>(input),
    ObjectUndefined.SPOILERS,
);
