import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_assertPrune_TypeTagTuple = _test_misc_assertPrune(
  TypeGuardError,
)("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)((input) =>
  typia.misc.assertPrune<TypeTagTuple>(input),
);
