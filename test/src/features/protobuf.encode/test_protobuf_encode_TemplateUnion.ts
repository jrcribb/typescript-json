import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_createEncode_TemplateUnion = _test_protobuf_encode(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)({
  encode: (input) => typia.protobuf.encode<TemplateUnion>(input),
  decode: typia.protobuf.createDecode<TemplateUnion>(),
  message: typia.protobuf.message<TemplateUnion>(),
});
