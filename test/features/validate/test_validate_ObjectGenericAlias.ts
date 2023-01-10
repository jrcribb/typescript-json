import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectGenericAlias = _test_validate(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.validate(input),
    ObjectGenericAlias.SPOILERS,
);