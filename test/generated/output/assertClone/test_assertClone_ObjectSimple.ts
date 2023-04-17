import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_assertClone_ObjectSimple = _test_assertClone(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) =>
        ((input: any): typia.Primitive<ObjectSimple.IBox3D> => {
            const assert = (input: any): ObjectSimple.IBox3D => {
                const $guard = (typia.assertClone as any).guard;
                const __is = (input: any): input is ObjectSimple.IBox3D => {
                    const $io0 = (input: any): boolean =>
                        "object" === typeof input.scale &&
                        null !== input.scale &&
                        "number" === typeof input.scale.x &&
                        Number.isFinite(input.scale.x) &&
                        "number" === typeof input.scale.y &&
                        Number.isFinite(input.scale.y) &&
                        "number" === typeof input.scale.z &&
                        Number.isFinite(input.scale.z) &&
                        "object" === typeof input.position &&
                        null !== input.position &&
                        "number" === typeof input.position.x &&
                        Number.isFinite(input.position.x) &&
                        "number" === typeof input.position.y &&
                        Number.isFinite(input.position.y) &&
                        "number" === typeof input.position.z &&
                        Number.isFinite(input.position.z) &&
                        "object" === typeof input.rotate &&
                        null !== input.rotate &&
                        "number" === typeof input.rotate.x &&
                        Number.isFinite(input.rotate.x) &&
                        "number" === typeof input.rotate.y &&
                        Number.isFinite(input.rotate.y) &&
                        "number" === typeof input.rotate.z &&
                        Number.isFinite(input.rotate.z) &&
                        "object" === typeof input.pivot &&
                        null !== input.pivot &&
                        "number" === typeof input.pivot.x &&
                        Number.isFinite(input.pivot.x) &&
                        "number" === typeof input.pivot.y &&
                        Number.isFinite(input.pivot.y) &&
                        "number" === typeof input.pivot.z &&
                        Number.isFinite(input.pivot.z);
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectSimple.IBox3D => {
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("object" === typeof input.scale &&
                                null !== input.scale) ||
                                $guard(_exceptionable, {
                                    path: _path + ".scale",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.scale,
                                })) &&
                            $ao1(
                                input.scale,
                                _path + ".scale",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.position &&
                                null !== input.position) ||
                                $guard(_exceptionable, {
                                    path: _path + ".position",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.position,
                                })) &&
                            $ao1(
                                input.position,
                                _path + ".position",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.rotate &&
                                null !== input.rotate) ||
                                $guard(_exceptionable, {
                                    path: _path + ".rotate",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.rotate,
                                })) &&
                            $ao1(
                                input.rotate,
                                _path + ".rotate",
                                true && _exceptionable,
                            ) &&
                            (("object" === typeof input.pivot &&
                                null !== input.pivot) ||
                                $guard(_exceptionable, {
                                    path: _path + ".pivot",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.pivot,
                                })) &&
                            $ao1(
                                input.pivot,
                                _path + ".pivot",
                                true && _exceptionable,
                            );
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (("number" === typeof input.x &&
                                Number.isFinite(input.x)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".x",
                                    expected: "number",
                                    value: input.x,
                                })) &&
                            (("number" === typeof input.y &&
                                Number.isFinite(input.y)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".y",
                                    expected: "number",
                                    value: input.y,
                                })) &&
                            (("number" === typeof input.z &&
                                Number.isFinite(input.z)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".z",
                                    expected: "number",
                                    value: input.z,
                                }));
                        return (
                            (("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "Resolve<ObjectSimple.IBox3D>",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: ObjectSimple.IBox3D,
            ): typia.Primitive<ObjectSimple.IBox3D> => {
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.x &&
                    "number" === typeof input.y &&
                    "number" === typeof input.z;
                const $co0 = (input: any): any => ({
                    scale:
                        "object" === typeof input.scale && null !== input.scale
                            ? $co1(input.scale)
                            : (input.scale as any),
                    position:
                        "object" === typeof input.position &&
                        null !== input.position
                            ? $co1(input.position)
                            : (input.position as any),
                    rotate:
                        "object" === typeof input.rotate &&
                        null !== input.rotate
                            ? $co1(input.rotate)
                            : (input.rotate as any),
                    pivot:
                        "object" === typeof input.pivot && null !== input.pivot
                            ? $co1(input.pivot)
                            : (input.pivot as any),
                });
                const $co1 = (input: any): any => ({
                    x: input.x as any,
                    y: input.y as any,
                    z: input.z as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    ObjectSimple.SPOILERS,
);
