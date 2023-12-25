import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_createAssertGuardEquals_ObjectHttpArray =
  _test_assertGuardEquals("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)(
    typia.createAssertGuardEquals<ObjectHttpArray>(),
  );
