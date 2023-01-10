import path from "path";
import ts from "typescript";

import { IProject } from "./IProject";
import { ApplicationTransformer } from "./features/miscellaneous/ApplicationTransformer";
import { MetadataTransformer } from "./features/miscellaneous/MetadataTransformer";
import { AssertParseTransformer } from "./features/parsers/AssertParseTransformer";
import { CreateAssertParseTransformer } from "./features/parsers/CreateAssertParseTransformer";
import { CreateIsParseTransformer } from "./features/parsers/CreateIsParseTransformer";
import { CreateValidateParseTransformer } from "./features/parsers/CreateValidateParseTransformer";
import { IsParseTransformer } from "./features/parsers/IsParseTransformer";
import { ValidateParseTransformer } from "./features/parsers/ValidateParseTransformer";
import { AssertStringifyTransformer } from "./features/stringifiers/AssertStringifyTransformer";
import { CreateAssertStringifyTransformer } from "./features/stringifiers/CreateAssertStringifyTransformer";
import { CreateIsStringifyTransformer } from "./features/stringifiers/CreateIsStringifyTransformer";
import { CreateStringifyTransformer } from "./features/stringifiers/CreateStringifyTransformer";
import { CreateValidateStringifyTransformer } from "./features/stringifiers/CreateValidateStringifyProgrammer";
import { IsStringifyTransformer } from "./features/stringifiers/IsStringifyTransformer";
import { StringifyTransformer } from "./features/stringifiers/StringifyTransformer";
import { ValidateStringifyTransformer } from "./features/stringifiers/ValidateStringifyTransformer";
import { AssertTransformer } from "./features/validators/AssertTransformer";
import { CreateAssertTransformer } from "./features/validators/CreateAssertTransformer";
import { CreateIsTransformer } from "./features/validators/CreateIsTransformer";
import { CreateValidateTransformer } from "./features/validators/CreateValidateTransformer";
import { IsTransformer } from "./features/validators/IsTransformer";
import { ValidateTransformer } from "./features/validators/ValidateTransformer";

export namespace CallExpressionTransformer {
    export function transform(
        project: IProject,
        expression: ts.CallExpression,
    ): ts.Expression {
        //----
        // VALIDATIONS
        //----
        // SIGNATURE DECLARATION
        const declaration: ts.Declaration | undefined =
            project.checker.getResolvedSignature(expression)?.declaration;
        if (!declaration) return expression;

        // FILE PATH
        const file: string = path.resolve(declaration.getSourceFile().fileName);
        if (file.indexOf(LIB_PATH) === -1 && file !== SRC_PATH)
            return expression;

        //----
        // TRANSFORMATION
        //----
        // FUNCTION NAME
        const { name } = project.checker.getTypeAtLocation(declaration).symbol;

        // FIND TRANSFORMER
        const functor: (() => Task) | undefined = FUNCTORS[name];
        if (functor === undefined) return expression;

        // RETURNS WITH TRANSFORMATION
        return functor()(project, expression.expression, expression);
    }
}

type Task = (
    project: IProject,
    modulo: ts.LeftHandSideExpression,
    expression: ts.CallExpression,
) => ts.Expression;

const LIB_PATH = path.join("node_modules", "typia", "lib", "module.d.ts");
const SRC_PATH = path.resolve(path.join(__dirname, "..", "module.ts"));

const FUNCTORS: Record<string, () => Task> = {
    //----
    // SINGLE FUNCTIONS
    //----
    // BASIC VALIDATORS
    assert: () => AssertTransformer.transform(false),
    assertType: () => AssertTransformer.transform(false),
    is: () => IsTransformer.transform(false),
    validate: () => ValidateTransformer.transform(false),

    // STRICT VALIDATORS
    assertEquals: () => AssertTransformer.transform(true),
    equals: () => IsTransformer.transform(true),
    validateEquals: () => ValidateTransformer.transform(true),

    // PARSE FUNCTIONS
    isParse: () => IsParseTransformer.transform,
    assertParse: () => AssertParseTransformer.transform,
    validateParse: () => ValidateParseTransformer.transform,

    // STRINGIFY FUNCTIONS
    stringify: () => StringifyTransformer.transform,
    assertStringify: () => AssertStringifyTransformer.transform,
    isStringify: () => IsStringifyTransformer.transform,
    validateStringify: () => ValidateStringifyTransformer.transform,

    // MISC
    application: () => ApplicationTransformer.transform,
    metadata: () => MetadataTransformer.transform,

    //----
    // FACTORY FUNCTIONS
    //----
    // BASIC VALIDATORS
    createAssert: () => CreateAssertTransformer.transform(false),
    createAssertType: () => CreateAssertTransformer.transform(false),
    createIs: () => CreateIsTransformer.transform(false),
    createValidate: () => CreateValidateTransformer.transform(false),

    // STRICT VALIDATORS
    createAssertEquals: () => CreateAssertTransformer.transform(true),
    createEquals: () => CreateIsTransformer.transform(true),
    createValidateEquals: () => CreateValidateTransformer.transform(true),

    // PARSE FUNCTIONS
    createIsParse: () => CreateIsParseTransformer.transform,
    createAssertParse: () => CreateAssertParseTransformer.transform,
    createValidateParse: () => CreateValidateParseTransformer.transform,

    // STRINGIFY FUNCTIONS
    createStringify: () => CreateStringifyTransformer.transform,
    createAssertStringify: () => CreateAssertStringifyTransformer.transform,
    createIsStringify: () => CreateIsStringifyTransformer.transform,
    createValidateStringify: () => CreateValidateStringifyTransformer.transform,
};
