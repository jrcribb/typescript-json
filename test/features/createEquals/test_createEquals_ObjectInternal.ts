import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createEquals_ObjectInternal = _test_equals(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createEquals<ObjectInternal>(),
);
