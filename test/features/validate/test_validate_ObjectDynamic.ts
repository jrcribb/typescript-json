import typia from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectDynamic = _test_validate(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.validate(input),
    ObjectDynamic.SPOILERS,
);