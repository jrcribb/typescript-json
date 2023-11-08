import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_createIsEncode_ClassNonPublic =
    _test_protobuf_isEncode("ClassNonPublic")<ClassNonPublic>(ClassNonPublic)({
        encode: typia.protobuf.createIsEncode<ClassNonPublic>(),
        decode: typia.protobuf.createDecode<ClassNonPublic>(),
        message: typia.protobuf.message<ClassNonPublic>(),
    });
