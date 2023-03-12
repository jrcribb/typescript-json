import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_createIs_DynamicEnumeration = _test_is(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input: any): input is DynamicEnumeration => {
        const $io0 = (input: any): boolean =>
            (undefined === input.ar || "string" === typeof input.ar) &&
            (undefined === input["zh-Hans"] ||
                "string" === typeof input["zh-Hans"]) &&
            (undefined === input["zh-Hant"] ||
                "string" === typeof input["zh-Hant"]) &&
            (undefined === input.en || "string" === typeof input.en) &&
            (undefined === input.fr || "string" === typeof input.fr) &&
            (undefined === input.de || "string" === typeof input.de) &&
            (undefined === input.ja || "string" === typeof input.ja) &&
            (undefined === input.ko || "string" === typeof input.ko) &&
            (undefined === input.pt || "string" === typeof input.pt) &&
            (undefined === input.ru || "string" === typeof input.ru);
        return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
        );
    },
    DynamicEnumeration.SPOILERS,
);
