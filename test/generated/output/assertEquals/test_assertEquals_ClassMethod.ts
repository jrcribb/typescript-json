import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_assertEquals_ClassMethod = _test_assertEquals(
    "ClassMethod",
    ClassMethod.generate,
    (input) =>
        ((input: any): ClassMethod.Animal => {
            const $guard = (typia.assertEquals as any).guard;
            const $join = (typia.assertEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ClassMethod.Animal => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    (("number" === typeof input.age &&
                        Number.isFinite(input.age)) ||
                        $guard(_exceptionable, {
                            path: _path + ".age",
                            expected: "number",
                            value: input.age,
                        })) &&
                    (2 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (["name", "age"].some((prop) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<ClassMethod.Animal>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        })(input),
);
