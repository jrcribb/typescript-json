import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { ValueFactory } from "../factories/ValueFactory";

import { IProgrammerProps } from "../transformers/IProgrammerProps";
import { ITypiaContext } from "../transformers/ITypiaContext";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { FeatureProgrammer } from "./FeatureProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporter";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { check_object } from "./internal/check_object";

export namespace IsProgrammer {
  export const configure =
    (options?: Partial<CONFIG.IOptions>) =>
    (project: ITypiaContext) =>
    (importer: FunctionImporter): CheckerProgrammer.IConfig => ({
      prefix: "$i",
      equals: !!options?.object,
      trace: false,
      path: false,
      numeric: OptionPredicator.numeric({
        numeric: options?.numeric,
      }),
      atomist: () => (entry) => () =>
        [
          ...(entry.expression ? [entry.expression] : []),
          ...(entry.conditions.length === 0
            ? []
            : [
                entry.conditions
                  .map((set) =>
                    set
                      .map((s) => s.expression)
                      .reduce((a, b) => ts.factory.createLogicalAnd(a, b)),
                  )
                  .reduce((a, b) => ts.factory.createLogicalOr(a, b)),
              ]),
        ].reduce((x, y) => ts.factory.createLogicalAnd(x, y)),
      combiner: () => (type: "and" | "or") => {
        const initial: ts.TrueLiteral | ts.FalseLiteral =
          type === "and" ? ts.factory.createTrue() : ts.factory.createFalse();
        const binder =
          type === "and"
            ? ts.factory.createLogicalAnd
            : ts.factory.createLogicalOr;
        return (
          _input: ts.Expression,
          binaries: CheckerProgrammer.IBinary[],
        ) =>
          binaries.length
            ? binaries
                .map((binary) => binary.expression)
                .reduce((x, y) => binder(x, y))
            : initial;
      },
      joiner: {
        object:
          options?.object ||
          check_object({
            equals: !!options?.object,
            undefined: OptionPredicator.undefined({
              undefined: options?.undefined,
            }),
            assert: true,
            reduce: ts.factory.createLogicalAnd,
            positive: ts.factory.createTrue(),
            superfluous: () => ts.factory.createFalse(),
          })(project)(importer),
        array: (props) =>
          ts.factory.createCallExpression(
            IdentifierFactory.access(props.input)("every"),
            undefined,
            [props.arrow],
          ),
        failure: () => ts.factory.createFalse(),
      },
      success: ts.factory.createTrue(),
    });

  export namespace CONFIG {
    export interface IOptions {
      numeric: boolean;
      undefined: boolean;
      object: (props: {
        input: ts.Expression;
        entries: IExpressionEntry<ts.Expression>[];
      }) => ts.Expression;
    }
  }

  /* -----------------------------------------------------------
    WRITERS
  ----------------------------------------------------------- */
  export interface IConfig {
    equals: boolean;
  }
  export interface IProps extends IProgrammerProps {
    config: IConfig;
  }

  export const decompose = (props: {
    context: ITypiaContext;
    importer: FunctionImporter;
    config: IConfig;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    // CONFIGURATION
    const config: CheckerProgrammer.IConfig = {
      ...configure({
        object: check_object({
          equals: props.config.equals,
          undefined: OptionPredicator.undefined(props.context.options),
          assert: true,
          reduce: ts.factory.createLogicalAnd,
          positive: ts.factory.createTrue(),
          superfluous: () => ts.factory.createFalse(),
        })(props.context)(props.importer),
        numeric: OptionPredicator.numeric(props.context.options),
      })(props.context)(props.importer),
      trace: props.config.equals,
    };

    // COMPOSITION
    const composed: FeatureProgrammer.IComposed = CheckerProgrammer.compose({
      ...props,
      config,
    });
    return {
      functions: composed.functions,
      statements: composed.statements,
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        composed.parameters,
        composed.response,
        undefined,
        composed.body,
      ),
    };
  };

  export const write = (props: IProps) => {
    const importer: FunctionImporter = new FunctionImporter(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      config: props.config,
      context: props.context,
      importer,
      type: props.type,
      name: props.name,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      importer,
      result,
    });
  };

  export const write_function_statements =
    (project: ITypiaContext) =>
    (importer: FunctionImporter) =>
    (collection: MetadataCollection) => {
      const config = configure()(project)(importer);
      const objects =
        CheckerProgrammer.write_object_functions(project)(config)(importer)(
          collection,
        );
      const unions =
        CheckerProgrammer.write_union_functions(project)(config)(importer)(
          collection,
        );
      const arrays =
        CheckerProgrammer.write_array_functions(project)(config)(importer)(
          collection,
        );
      const tuples =
        CheckerProgrammer.write_tuple_functions(project)(config)(importer)(
          collection,
        );

      return [
        ...objects.filter((_, i) => importer.hasLocal(`${config.prefix}o${i}`)),
        ...unions.filter((_, i) => importer.hasLocal(`${config.prefix}u${i}`)),
        ...arrays.filter((_, i) => importer.hasLocal(`${config.prefix}a${i}`)),
        ...tuples.filter((_, i) => importer.hasLocal(`${config.prefix}t${i}`)),
      ];
    };

  /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
  export const decode =
    (project: ITypiaContext) => (importer: FunctionImporter) =>
      CheckerProgrammer.decode(project)(configure()(project)(importer))(
        importer,
      );

  export const decode_object =
    (project: ITypiaContext) => (importer: FunctionImporter) =>
      CheckerProgrammer.decode_object(configure()(project)(importer))(importer);

  export const decode_to_json =
    (checkNull: boolean) =>
    (input: ts.Expression): ts.Expression =>
      ts.factory.createLogicalAnd(
        ExpressionFactory.isObject({
          checkArray: false,
          checkNull,
        })(input),
        ts.factory.createStrictEquality(
          ts.factory.createStringLiteral("function"),
          ValueFactory.TYPEOF(IdentifierFactory.access(input)("toJSON")),
        ),
      );

  export const decode_functional = (input: ts.Expression) =>
    ts.factory.createStrictEquality(
      ts.factory.createStringLiteral("function"),
      ValueFactory.TYPEOF(input),
    );
}
