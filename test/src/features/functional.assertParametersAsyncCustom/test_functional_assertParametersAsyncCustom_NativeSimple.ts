import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_assertParametersAsyncCustom_NativeSimple =
  _test_functional_assertParametersAsync(CustomGuardError)("NativeSimple")(
    NativeSimple,
  )((p: (input: NativeSimple) => Promise<NativeSimple>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
