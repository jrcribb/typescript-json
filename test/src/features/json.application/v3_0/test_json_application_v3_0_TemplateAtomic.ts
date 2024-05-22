import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_json_application_v3_0_TemplateAtomic = _test_json_application(
  {
    version: "3.0",
    name: "TemplateAtomic",
  },
)(typia.json.application<[TemplateAtomic], "3.0">());
