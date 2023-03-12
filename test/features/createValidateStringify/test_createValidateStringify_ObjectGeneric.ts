import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createValidateStringify_ObjectGeneric =
    _test_validateStringify(
        "ObjectGeneric",
        ObjectGeneric.generate,
        typia.createValidateStringify<ObjectGeneric>(),
        ObjectGeneric.SPOILERS,
    );
