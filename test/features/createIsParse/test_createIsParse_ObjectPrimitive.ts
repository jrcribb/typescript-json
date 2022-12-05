import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectPrimitive = _test_isParse(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    TSON.createIsParse<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
