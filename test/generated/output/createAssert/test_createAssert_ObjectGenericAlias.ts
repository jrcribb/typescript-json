import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_createAssert_ObjectGenericAlias = _test_assert(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input: any): ObjectGenericAlias => {
        const $guard = (typia.createAssert as any).guard;
        const __is = (input: any): input is ObjectGenericAlias => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.value
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectGenericAlias => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.value ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "string",
                        value: input.value,
                    });
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectGenericAlias.Alias",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
        return input;
    },
    ObjectGenericAlias.SPOILERS,
);
