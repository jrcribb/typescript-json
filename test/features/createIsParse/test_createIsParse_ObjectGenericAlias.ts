import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectGenericAlias = _test_isParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    TSON.createIsParse<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
