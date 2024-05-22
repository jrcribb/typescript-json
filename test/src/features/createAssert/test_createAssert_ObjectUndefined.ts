import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssert_ObjectUndefined = _test_assert(TypeGuardError)(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)(typia.createAssert<ObjectUndefined>());
