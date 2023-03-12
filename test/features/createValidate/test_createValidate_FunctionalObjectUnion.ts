import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_createValidate_FunctionalObjectUnion = _test_validate(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    typia.createValidate<FunctionalObjectUnion>(),
    FunctionalObjectUnion.SPOILERS,
);
