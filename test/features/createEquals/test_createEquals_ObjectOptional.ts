import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createEquals_ObjectOptional = _test_equals(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createEquals<ObjectOptional>(),
);
