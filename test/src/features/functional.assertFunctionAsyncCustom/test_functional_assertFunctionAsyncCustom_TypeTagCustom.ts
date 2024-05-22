import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertFunctionAsyncCustom_TypeTagCustom =
  _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagCustom")(
    TypeTagCustom,
  )((p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
