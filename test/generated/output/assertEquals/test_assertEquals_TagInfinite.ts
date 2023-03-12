import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagInfinite } from "../../../structures/TagInfinite";

export const test_assertEquals_TagInfinite = _test_assertEquals(
    "TagInfinite",
    TagInfinite.generate,
    (input) =>
        ((input: any): TagInfinite => {
            const $guard = (typia.assertEquals as any).guard;
            const $join = (typia.assertEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagInfinite => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        })) &&
                    (("number" === typeof input.ranged &&
                        0 <= input.ranged &&
                        100 >= input.ranged) ||
                        $guard(_exceptionable, {
                            path: _path + ".ranged",
                            expected: "number",
                            value: input.ranged,
                        })) &&
                    (("number" === typeof input.minimum &&
                        Number.isFinite(input.minimum) &&
                        0 <= input.minimum) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "number",
                            value: input.minimum,
                        })) &&
                    (("number" === typeof input.maximum &&
                        Number.isFinite(input.maximum) &&
                        100 >= input.maximum) ||
                        $guard(_exceptionable, {
                            path: _path + ".maximum",
                            expected: "number",
                            value: input.maximum,
                        })) &&
                    (("number" === typeof input.multipleOf &&
                        0 === input.multipleOf % 3) ||
                        $guard(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: "number",
                            value: input.multipleOf,
                        })) &&
                    (("number" === typeof input.typed &&
                        Number.isFinite(input.typed) &&
                        parseInt(input.typed) === input.typed) ||
                        $guard(_exceptionable, {
                            path: _path + ".typed",
                            expected: "number",
                            value: input.typed,
                        })) &&
                    (6 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (
                                [
                                    "value",
                                    "ranged",
                                    "minimum",
                                    "maximum",
                                    "multipleOf",
                                    "typed",
                                ].some((prop) => key === prop)
                            )
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
                            expected: "Resolve<TagInfinite>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        })(input),
);
