import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_random_ObjectGenericAlias = _test_random(
    "ObjectGenericAlias",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<ObjectGenericAlias> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            });
            return $ro0();
        })(),
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
                            expected: "Resolve<ObjectGenericAlias.Alias>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
        return input;
    },
);
