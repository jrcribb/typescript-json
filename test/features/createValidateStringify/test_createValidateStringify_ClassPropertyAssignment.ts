import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ClassPropertyAssignment =
    _test_validateStringify(
        "ClassPropertyAssignment",
        ClassPropertyAssignment.generate,
        TSON.createValidateStringify<ClassPropertyAssignment>(),
        ClassPropertyAssignment.SPOILERS,
    );
