import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_assertEquals_ToJsonUnion = _test_assertEquals(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) =>
        ((
            input: any,
        ): Array<
            | string
            | number
            | ToJsonUnion.ICitizen
            | ToJsonUnion.IWrapper<boolean>
            | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
            | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
        > => {
            const $guard = (typia.assertEquals as any).guard;
            const $join = (typia.assertEquals as any).join;
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is Array<
                | string
                | number
                | ToJsonUnion.ICitizen
                | ToJsonUnion.IWrapper<boolean>
                | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
                | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
            > => {
                const $io0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.mobile &&
                    "string" === typeof input.name &&
                    (3 === Object.keys(input).length ||
                        Object.keys(input).every((key) => {
                            if (
                                ["id", "mobile", "name"].some(
                                    (prop) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io1 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "function" === typeof input.toJSON &&
                    (1 === Object.keys(input).length ||
                        Object.keys(input).every((key) => {
                            if (["toJSON"].some((prop) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io2 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "function" === typeof input.toJSON &&
                    (1 === Object.keys(input).length ||
                        Object.keys(input).every((key) => {
                            if (["toJSON"].some((prop) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io3 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "function" === typeof input.toJSON &&
                    (1 === Object.keys(input).length ||
                        Object.keys(input).every((key) => {
                            if (["toJSON"].some((prop) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $iu0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if (undefined !== input.id)
                            return $io0(input, true && _exceptionable);
                        return (() => {
                            if ($io1(input, false && _exceptionable))
                                return $io1(input, true && _exceptionable);
                            if ($io2(input, false && _exceptionable))
                                return $io2(input, true && _exceptionable);
                            if ($io3(input, false && _exceptionable))
                                return $io3(input, true && _exceptionable);
                            return false;
                        })();
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            null !== elem &&
                            undefined !== elem &&
                            ("string" === typeof elem ||
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                ("object" === typeof elem &&
                                    null !== elem &&
                                    $iu0(elem, true))),
                    )
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<
                    | string
                    | number
                    | ToJsonUnion.ICitizen
                    | ToJsonUnion.IWrapper<boolean>
                    | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
                    | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
                > => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.mobile ||
                            $guard(_exceptionable, {
                                path: _path + ".mobile",
                                expected: "string",
                                value: input.mobile,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (3 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key) => {
                                if (
                                    ["id", "mobile", "name"].some(
                                        (prop) => key === prop,
                                    )
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
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("function" === typeof input.toJSON ||
                            $guard(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            })) &&
                        (1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key) => {
                                if (["toJSON"].some((prop) => key === prop))
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            }));
                    const $ao2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("function" === typeof input.toJSON ||
                            $guard(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            })) &&
                        (1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key) => {
                                if (["toJSON"].some((prop) => key === prop))
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            }));
                    const $ao3 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("function" === typeof input.toJSON ||
                            $guard(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            })) &&
                        (1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key) => {
                                if (["toJSON"].some((prop) => key === prop))
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            }));
                    const $au0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if (undefined !== input.id)
                                return $ao0(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return (() => {
                                if ($ao1(input, _path, false && _exceptionable))
                                    return $ao1(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ($ao2(input, _path, false && _exceptionable))
                                    return $ao2(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ($ao3(input, _path, false && _exceptionable))
                                    return $ao3(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                return $guard(_exceptionable, {
                                    path: _path,
                                    expected:
                                        "(ToJsonUnion.IWrapper<boolean> | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>)",
                                    value: input,
                                });
                            })();
                        })();
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "Array<(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (null !== elem ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
                                        value: elem,
                                    })) &&
                                (undefined !== elem ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
                                        value: elem,
                                    })) &&
                                ("string" === typeof elem ||
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
                                            value: elem,
                                        })) &&
                                        $au0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        ))),
                        )
                    );
                })(input, "$input", true);
            return input;
        })(input),
);
