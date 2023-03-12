import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_createRandom_DynamicEnumeration = _test_random(
    "DynamicEnumeration",
    (
        generator: Partial<typia.IRandomGenerator> = (typia.createRandom as any)
            .generator,
    ): typia.Primitive<DynamicEnumeration> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            ar: $pick([
                () => undefined,
                () => (generator.string ?? $generator.string)(),
            ])(),
            "zh-Hans": $pick([
                () => undefined,
                () => (generator.string ?? $generator.string)(),
            ])(),
            "zh-Hant": $pick([
                () => undefined,
                () => (generator.string ?? $generator.string)(),
            ])(),
            en: $pick([
                () => undefined,
                () => (generator.string ?? $generator.string)(),
            ])(),
            fr: $pick([
                () => undefined,
                () => (generator.string ?? $generator.string)(),
            ])(),
            de: $pick([
                () => undefined,
                () => (generator.string ?? $generator.string)(),
            ])(),
            ja: $pick([
                () => undefined,
                () => (generator.string ?? $generator.string)(),
            ])(),
            ko: $pick([
                () => undefined,
                () => (generator.string ?? $generator.string)(),
            ])(),
            pt: $pick([
                () => undefined,
                () => (generator.string ?? $generator.string)(),
            ])(),
            ru: $pick([
                () => undefined,
                () => (generator.string ?? $generator.string)(),
            ])(),
        });
        return $ro0();
    },
    (input: any): DynamicEnumeration => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is DynamicEnumeration => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (undefined === input.ar ||
                    "string" === typeof input.ar ||
                    $guard(_exceptionable, {
                        path: _path + ".ar",
                        expected: "(string | undefined)",
                        value: input.ar,
                    })) &&
                (undefined === input["zh-Hans"] ||
                    "string" === typeof input["zh-Hans"] ||
                    $guard(_exceptionable, {
                        path: _path + '["zh-Hans"]',
                        expected: "(string | undefined)",
                        value: input["zh-Hans"],
                    })) &&
                (undefined === input["zh-Hant"] ||
                    "string" === typeof input["zh-Hant"] ||
                    $guard(_exceptionable, {
                        path: _path + '["zh-Hant"]',
                        expected: "(string | undefined)",
                        value: input["zh-Hant"],
                    })) &&
                (undefined === input.en ||
                    "string" === typeof input.en ||
                    $guard(_exceptionable, {
                        path: _path + ".en",
                        expected: "(string | undefined)",
                        value: input.en,
                    })) &&
                (undefined === input.fr ||
                    "string" === typeof input.fr ||
                    $guard(_exceptionable, {
                        path: _path + ".fr",
                        expected: "(string | undefined)",
                        value: input.fr,
                    })) &&
                (undefined === input.de ||
                    "string" === typeof input.de ||
                    $guard(_exceptionable, {
                        path: _path + ".de",
                        expected: "(string | undefined)",
                        value: input.de,
                    })) &&
                (undefined === input.ja ||
                    "string" === typeof input.ja ||
                    $guard(_exceptionable, {
                        path: _path + ".ja",
                        expected: "(string | undefined)",
                        value: input.ja,
                    })) &&
                (undefined === input.ko ||
                    "string" === typeof input.ko ||
                    $guard(_exceptionable, {
                        path: _path + ".ko",
                        expected: "(string | undefined)",
                        value: input.ko,
                    })) &&
                (undefined === input.pt ||
                    "string" === typeof input.pt ||
                    $guard(_exceptionable, {
                        path: _path + ".pt",
                        expected: "(string | undefined)",
                        value: input.pt,
                    })) &&
                (undefined === input.ru ||
                    "string" === typeof input.ru ||
                    $guard(_exceptionable, {
                        path: _path + ".ru",
                        expected: "(string | undefined)",
                        value: input.ru,
                    }));
            return (
                (("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<DynamicEnumeration>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
