import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { ClassValidatorObjectSimple } from "../../../../structures/class-validator/ClassValidatorObjectSimple";
import { ObjectSimple } from "../../../../structures/pure/ObjectSimple";
import { createFastifyCustomServerAssertBenchmarkProgram } from "../createFastifyCustomServerAssertBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorObjectSimple);
createFastifyCustomServerAssertBenchmarkProgram<ObjectSimple>((input) => {
  const output = plainToInstance(schema, input);
  const result = validateSync(output);
  if (result.length > 0) throw new Error(result[0].toString());
  return output;
});
