import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createValidateStringify_ClassPropertyAssignment =
    _test_validateStringify(
        "ClassPropertyAssignment",
        ClassPropertyAssignment.generate,
        typia.createValidateStringify<ClassPropertyAssignment>(),
        ClassPropertyAssignment.SPOILERS,
    );
