import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_createAssertEquals_ToJsonDouble = _test_assertEquals(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input: any): ToJsonDouble => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ToJsonDouble => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                0 === Object.keys(input).length ||
                false === _exceptionable ||
                Object.keys(input).every((key) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(_exceptionable, {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                    });
                });
            return (
                (("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<ToJsonDouble.Parent>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
