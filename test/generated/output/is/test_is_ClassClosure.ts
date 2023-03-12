import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ClassClosure } from "../../../structures/ClassClosure";

export const test_is_ClassClosure = _test_is(
    "ClassClosure",
    ClassClosure.generate,
    (input) =>
        ((input: any): input is ClassClosure.Something => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                "something" === input.type &&
                "function" === typeof input.closure;
            return "object" === typeof input && null !== input && $io0(input);
        })(input),
    ClassClosure.SPOILERS,
);
