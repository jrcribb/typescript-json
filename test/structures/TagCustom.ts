import { v4 } from "uuid";

import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

import typia from "../../src";
import { Spoiler } from "../helpers/Spoiler";

export interface TagCustom {
    /**
     * Regular feature supported by typia
     *
     * @format uuid
     */
    id: string;

    /**
     * Custom feature composed with "$" + number
     *
     * @dollar
     */
    dollar: string;

    /**
     * Custom feature composed with string + "abcd"
     *
     * @postfix abcd
     */
    postfix: string;

    /**
     * Custom feature meaning x^y
     *
     * @powerOf 10
     */
    log: number;
}
export namespace TagCustom {
    export function generate(): TagCustom {
        return {
            id: v4(),
            dollar: "$" + RandomGenerator.integer(),
            postfix: RandomGenerator.string() + "abcd",
            log: 100,
        };
    }

    export const SPOILERS: Spoiler<TagCustom>[] = [
        (input) => {
            input.id = "invalid";
            return ["$input.id"];
        },
        (input) => {
            input.dollar = RandomGenerator.integer().toString();
            return ["$input.dollar"];
        },
        (input) => {
            input.postfix = RandomGenerator.string() + "dcba";
            return ["$input.postfix"];
        },
        (input) => {
            input.log = 3;
            return ["$input.log"];
        },
    ];

    export const RANDOM: typia.IRandomGenerator = {
        ...RandomGenerator,
        customs: {
            string: (tags) => {
                if (tags.find((t) => t.name === "dollar") !== undefined)
                    return "$" + RandomGenerator.integer();
                const postfix = tags.find((t) => t.name === "postfix");
                if (postfix !== undefined)
                    return RandomGenerator.string() + postfix.value;
            },
            number: (tags) => {
                const powerOf = tags.find((t) => t.name === "powerOf");
                if (powerOf !== undefined)
                    return Math.pow(
                        Number(powerOf.value),
                        RandomGenerator.integer(1, 4),
                    );
            },
        },
    };
}

typia.customValidators.insert("dollar")("string")(
    () => (value: string) =>
        value.startsWith("$") &&
        !isNaN(Number(value.substring(1).split(",").join(""))),
);
typia.customValidators.insert("postfix")("string")(
    (text: string) => (value: string) => value.endsWith(text),
);
typia.customValidators.insert("powerOf")("number")((text: string) => {
    const denominator: number = Math.log(Number(text));
    return (value: number) => {
        value = Math.log(value) / denominator;
        return Math.abs(value - Math.round(value)) < 0.00000001;
    };
});
