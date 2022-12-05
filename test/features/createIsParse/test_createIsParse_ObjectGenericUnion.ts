import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectGenericUnion = _test_isParse(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    TSON.createIsParse<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
