import { instanceToPlain, plainToInstance } from "class-transformer";

import { ClassValidatorArrayHierarchical } from "../../../../structures/class-validator/ClassValidatorArrayHierarchical";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ArrayHierarchical } from "../../../../structures/pure/ArrayHierarchical";
import { createExpressServerStringifyBenchmarkProgram } from "../createExpressServerStringifyBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorArrayHierarchical);
createExpressServerStringifyBenchmarkProgram<ArrayHierarchical>((input) =>
  JSON.stringify(instanceToPlain(plainToInstance(schema, input))),
);
