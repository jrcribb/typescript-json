import typia from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ClassPropertyAssignment = _test_isStringify(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createIsStringify<ClassPropertyAssignment>(),
    ClassPropertyAssignment.SPOILERS,
);