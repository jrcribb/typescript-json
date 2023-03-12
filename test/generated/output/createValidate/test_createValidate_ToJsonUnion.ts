import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_createValidate_ToJsonUnion = _test_validate(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input: any): typia.IValidation<ToJsonUnion> => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ToJsonUnion => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ("number" === typeof input.id &&
                        Number.isFinite(input.id)) ||
                        $report(_exceptionable, {
                            path: _path + ".id",
                            expected: "number",
                            value: input.id,
                        }),
                    "string" === typeof input.mobile ||
                        $report(_exceptionable, {
                            path: _path + ".mobile",
                            expected: "string",
                            value: input.mobile,
                        }),
                    "string" === typeof input.name ||
                        $report(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        }),
                ].every((flag: boolean) => flag);
            const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "function" === typeof input.toJSON ||
                        $report(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        }),
                ].every((flag: boolean) => flag);
            const $vo2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "function" === typeof input.toJSON ||
                        $report(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        }),
                ].every((flag: boolean) => flag);
            const $vo3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "function" === typeof input.toJSON ||
                        $report(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        }),
                ].every((flag: boolean) => flag);
            const $vu0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if (undefined !== input.id)
                        return $vo0(input, _path, true && _exceptionable);
                    return (
                        $vo1(input, _path, false && _exceptionable) ||
                        $vo2(input, _path, false && _exceptionable) ||
                        $vo3(input, _path, false && _exceptionable)
                    );
                })();
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "Array<(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, _index1: number) =>
                                (null !== elem ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
                                        value: elem,
                                    })) &&
                                (undefined !== elem ||
                                    $report(true, {
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
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
                                            value: elem,
                                        })) &&
                                        $vu0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)",
                                        value: elem,
                                    })),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: _path + "",
                    expected:
                        "Array<(Resolve<ToJsonUnion.ICitizen> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>> | Resolve<ToJsonUnion.IWrapper<ToJsonUnion.IProduct>> | Resolve<ToJsonUnion.IWrapper<boolean>> | number | string)>",
                    value: input,
                })
            );
        })(input, "$input", true);
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
);
