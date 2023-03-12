import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_equals_ClassPropertyAssignment = _test_equals(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => typia.equals(input),
);
