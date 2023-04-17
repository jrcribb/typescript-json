import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ToJsonUndefined } from "../../../structures/ToJsonUndefined";

export const test_createAssert_ToJsonUndefined = _test_assert(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    (input: any): ToJsonUndefined => {
        const $guard = (typia.createAssert as any).guard;
        const __is = (input: any): input is ToJsonUndefined => {
            return "object" === typeof input && null !== input && true;
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ToJsonUndefined => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean => true;
                return (
                    (("object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<ToJsonUndefined>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
        return input;
    },
);
