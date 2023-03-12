import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_random_AtomicUnion = _test_random(
    "AtomicUnion",
    () =>
        ((
            generator: Partial<typia.IRandomGenerator> = (typia.random as any)
                .generator,
        ): typia.Primitive<AtomicUnion> => {
            const $generator = (typia.random as any).generator;
            const $pick = (typia.random as any).pick;
            return (generator.array ?? $generator.array)(() =>
                $pick([
                    () => null,
                    () => (generator.string ?? $generator.string)(),
                    () => (generator.number ?? $generator.number)(0, 100),
                    () => (generator.boolean ?? $generator.boolean)(),
                ])(),
            );
        })(),
    (input: any): AtomicUnion => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is AtomicUnion => {
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Array<(boolean | null | number | string)>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        null === elem ||
                        "string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        "boolean" === typeof elem ||
                        $guard(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "(boolean | null | number | string)",
                            value: elem,
                        }),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
