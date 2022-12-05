import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ClassPropertyAssignment =
    _test_validateStringify(
        "ClassPropertyAssignment",
        ClassPropertyAssignment.generate,
        (input) => TSON.validateStringify(input),
        ClassPropertyAssignment.SPOILERS,
    );
