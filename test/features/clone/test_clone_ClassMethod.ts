import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_clone_ClassMethod = _test_clone(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.clone(input),
);
