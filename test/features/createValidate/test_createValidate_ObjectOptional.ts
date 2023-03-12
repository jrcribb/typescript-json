import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createValidate_ObjectOptional = _test_validate(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createValidate<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
