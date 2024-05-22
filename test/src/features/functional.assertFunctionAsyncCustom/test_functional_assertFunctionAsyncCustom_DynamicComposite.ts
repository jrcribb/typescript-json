import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertFunctionAsyncCustom_DynamicComposite =
  _test_functional_assertFunctionAsync(CustomGuardError)("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
