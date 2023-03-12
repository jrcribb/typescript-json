import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createValidate_ObjectGenericAlias = _test_validate(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createValidate<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
