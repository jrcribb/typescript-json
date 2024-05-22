import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createAssertGuardEquals_ConstantConstEnumeration =
  _test_assertGuardEquals(TypeGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)(
    typia.createAssertGuardEquals<ConstantConstEnumeration>(),
  );
