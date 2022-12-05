import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectClosure = _test_validateStringify(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) => TSON.validateStringify(input),
    ObjectClosure.SPOILERS,
);
