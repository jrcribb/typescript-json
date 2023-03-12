import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_is_ObjectGenericAlias = _test_is(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.is(input),
    ObjectGenericAlias.SPOILERS,
);
