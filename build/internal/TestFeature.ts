export interface TestFeature {
    method: string;
    creatable: boolean;
    spoilable: boolean;
    jsonable?: true;
    strict?: true;
    explicit?: true;
    primitive?: true;
    random?: true;
}
export namespace TestFeature {
    export const DATA: TestFeature[] = [
        // VALIDATORS
        {
            method: "is",
            creatable: true,
            spoilable: true,
        },
        {
            method: "assert",
            creatable: true,
            spoilable: true,
        },
        {
            method: "validate",
            creatable: true,
            spoilable: true,
        },

        // STRICT VALIDATORS
        {
            method: "equals",
            creatable: true,
            spoilable: false,
            strict: true,
        },
        {
            method: "assertEquals",
            creatable: true,
            spoilable: false,
            strict: true,
        },
        {
            method: "validateEquals",
            creatable: true,
            spoilable: false,
            strict: true,
        },

        // PARSERS
        {
            method: "isParse",
            creatable: true,
            spoilable: true,
            jsonable: true,
            explicit: true,
            primitive: true,
        },
        {
            method: "assertParse",
            creatable: true,
            spoilable: true,
            jsonable: true,
            explicit: true,
            primitive: true,
        },
        {
            method: "validateParse",
            creatable: true,
            spoilable: true,
            jsonable: true,
            explicit: true,
            primitive: true,
        },

        // STRINGIFY
        {
            method: "stringify",
            creatable: true,
            spoilable: false,
            jsonable: true,
        },
        {
            method: "isStringify",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },
        {
            method: "assertStringify",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },
        {
            method: "validateStringify",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },

        // MISCELLANEOUS
        {
            method: "clone",
            creatable: true,
            spoilable: false,
            jsonable: true,
        },
        {
            method: "isClone",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },
        {
            method: "assertClone",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },
        {
            method: "validateClone",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },
        {
            method: "prune",
            creatable: true,
            spoilable: false,
            strict: true,
            primitive: true,
        },
        {
            method: "isPrune",
            creatable: true,
            spoilable: true,
            strict: true,
            primitive: true,
        },
        {
            method: "assertPrune",
            creatable: true,
            spoilable: true,
            strict: true,
            primitive: true,
        },
        {
            method: "validatePrune",
            creatable: true,
            spoilable: true,
            strict: true,
            primitive: true,
        },
        {
            method: "random",
            creatable: true,
            spoilable: false,
            primitive: true,
            random: true,
        },
    ];
}
