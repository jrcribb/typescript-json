import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_createValidateEquals_TypeTagFormat = _test_validateEquals(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)(
  (input: any): typia.IValidation<TypeTagFormat> => {
    const errors = [] as any[];
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is TypeTagFormat => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.byte &&
        /^[\x00-\xff]*$/.test(input.byte) &&
        "string" === typeof input.password &&
        true &&
        "string" === typeof input.regex &&
        (() => {
          try {
            new RegExp(input.regex);
            return true;
          } catch {
            return false;
          }
        })() &&
        "string" === typeof input.uuid &&
        /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
          input.uuid,
        ) &&
        "string" === typeof input.email &&
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
          input.email,
        ) &&
        "string" === typeof input.hostname &&
        /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i.test(
          input.hostname,
        ) &&
        "string" === typeof input.ipv4 &&
        /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/.test(
          input.ipv4,
        ) &&
        "string" === typeof input.ipv6 &&
        /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:)))$/i.test(
          input.ipv6,
        ) &&
        "string" === typeof input.uri &&
        /\/|:/.test(input.uri) &&
        /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test(
          input.uri,
        ) &&
        "string" === typeof input.uriReference &&
        /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test(
          input.uriReference,
        ) &&
        "string" === typeof input.uriTemplate &&
        /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i.test(
          input.uriTemplate,
        ) &&
        "string" === typeof input.url &&
        /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu.test(
          input.url,
        ) &&
        "string" === typeof input.datetime &&
        !isNaN(new Date(input.datetime).getTime()) &&
        "string" === typeof input.date &&
        /^(\d{4})-(\d{2})-(\d{2})$/.test(input.date) &&
        "string" === typeof input.time &&
        /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i.test(
          input.time,
        ) &&
        "string" === typeof input.duration &&
        /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/.test(
          input.duration,
        ) &&
        "string" === typeof input.jsonPointer &&
        /^(?:\/(?:[^~/]|~0|~1)*)*$/.test(input.jsonPointer) &&
        "string" === typeof input.relativeJsonPointer &&
        /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/.test(
          input.relativeJsonPointer,
        ) &&
        (18 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              [
                "byte",
                "password",
                "regex",
                "uuid",
                "email",
                "hostname",
                "ipv4",
                "ipv6",
                "uri",
                "uriReference",
                "uriTemplate",
                "url",
                "datetime",
                "date",
                "time",
                "duration",
                "jsonPointer",
                "relativeJsonPointer",
              ].some((prop: any) => key === prop)
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input)) {
      const $report = (typia.createValidateEquals as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagFormat => {
        const $join = (typia.createValidateEquals as any).join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("string" === typeof input.byte &&
              (/^[\x00-\xff]*$/.test(input.byte) ||
                $report(_exceptionable, {
                  path: _path + ".byte",
                  expected: 'string & Format<"byte">',
                  value: input.byte,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".byte",
                expected: '(string & Format<"byte">)',
                value: input.byte,
              }),
            ("string" === typeof input.password &&
              (true ||
                $report(_exceptionable, {
                  path: _path + ".password",
                  expected: 'string & Format<"password">',
                  value: input.password,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".password",
                expected: '(string & Format<"password">)',
                value: input.password,
              }),
            ("string" === typeof input.regex &&
              ((() => {
                try {
                  new RegExp(input.regex);
                  return true;
                } catch {
                  return false;
                }
              })() ||
                $report(_exceptionable, {
                  path: _path + ".regex",
                  expected: 'string & Format<"regex">',
                  value: input.regex,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".regex",
                expected: '(string & Format<"regex">)',
                value: input.regex,
              }),
            ("string" === typeof input.uuid &&
              (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.uuid,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".uuid",
                  expected: 'string & Format<"uuid">',
                  value: input.uuid,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".uuid",
                expected: '(string & Format<"uuid">)',
                value: input.uuid,
              }),
            ("string" === typeof input.email &&
              (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
                input.email,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".email",
                  expected: 'string & Format<"email">',
                  value: input.email,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".email",
                expected: '(string & Format<"email">)',
                value: input.email,
              }),
            ("string" === typeof input.hostname &&
              (/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i.test(
                input.hostname,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".hostname",
                  expected: 'string & Format<"hostname">',
                  value: input.hostname,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".hostname",
                expected: '(string & Format<"hostname">)',
                value: input.hostname,
              }),
            ("string" === typeof input.ipv4 &&
              (/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/.test(
                input.ipv4,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".ipv4",
                  expected: 'string & Format<"ipv4">',
                  value: input.ipv4,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".ipv4",
                expected: '(string & Format<"ipv4">)',
                value: input.ipv4,
              }),
            ("string" === typeof input.ipv6 &&
              (/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:)))$/i.test(
                input.ipv6,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".ipv6",
                  expected: 'string & Format<"ipv6">',
                  value: input.ipv6,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".ipv6",
                expected: '(string & Format<"ipv6">)',
                value: input.ipv6,
              }),
            ("string" === typeof input.uri &&
              ((/\/|:/.test(input.uri) &&
                /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test(
                  input.uri,
                )) ||
                $report(_exceptionable, {
                  path: _path + ".uri",
                  expected: 'string & Format<"uri">',
                  value: input.uri,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".uri",
                expected: '(string & Format<"uri">)',
                value: input.uri,
              }),
            ("string" === typeof input.uriReference &&
              (/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i.test(
                input.uriReference,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".uriReference",
                  expected: 'string & Format<"uri-reference">',
                  value: input.uriReference,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".uriReference",
                expected: '(string & Format<"uri-reference">)',
                value: input.uriReference,
              }),
            ("string" === typeof input.uriTemplate &&
              (/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i.test(
                input.uriTemplate,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".uriTemplate",
                  expected: 'string & Format<"uri-template">',
                  value: input.uriTemplate,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".uriTemplate",
                expected: '(string & Format<"uri-template">)',
                value: input.uriTemplate,
              }),
            ("string" === typeof input.url &&
              (/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu.test(
                input.url,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".url",
                  expected: 'string & Format<"url">',
                  value: input.url,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".url",
                expected: '(string & Format<"url">)',
                value: input.url,
              }),
            ("string" === typeof input.datetime &&
              (!isNaN(new Date(input.datetime).getTime()) ||
                $report(_exceptionable, {
                  path: _path + ".datetime",
                  expected: 'string & Format<"date-time">',
                  value: input.datetime,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".datetime",
                expected: '(string & Format<"date-time">)',
                value: input.datetime,
              }),
            ("string" === typeof input.date &&
              (/^(\d{4})-(\d{2})-(\d{2})$/.test(input.date) ||
                $report(_exceptionable, {
                  path: _path + ".date",
                  expected: 'string & Format<"date">',
                  value: input.date,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".date",
                expected: '(string & Format<"date">)',
                value: input.date,
              }),
            ("string" === typeof input.time &&
              (/^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i.test(
                input.time,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".time",
                  expected: 'string & Format<"time">',
                  value: input.time,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".time",
                expected: '(string & Format<"time">)',
                value: input.time,
              }),
            ("string" === typeof input.duration &&
              (/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/.test(
                input.duration,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".duration",
                  expected: 'string & Format<"duration">',
                  value: input.duration,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".duration",
                expected: '(string & Format<"duration">)',
                value: input.duration,
              }),
            ("string" === typeof input.jsonPointer &&
              (/^(?:\/(?:[^~/]|~0|~1)*)*$/.test(input.jsonPointer) ||
                $report(_exceptionable, {
                  path: _path + ".jsonPointer",
                  expected: 'string & Format<"json-pointer">',
                  value: input.jsonPointer,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".jsonPointer",
                expected: '(string & Format<"json-pointer">)',
                value: input.jsonPointer,
              }),
            ("string" === typeof input.relativeJsonPointer &&
              (/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/.test(
                input.relativeJsonPointer,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".relativeJsonPointer",
                  expected: 'string & Format<"relative-json-pointer">',
                  value: input.relativeJsonPointer,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".relativeJsonPointer",
                expected: '(string & Format<"relative-json-pointer">)',
                value: input.relativeJsonPointer,
              }),
            18 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (
                    [
                      "byte",
                      "password",
                      "regex",
                      "uuid",
                      "email",
                      "hostname",
                      "ipv4",
                      "ipv6",
                      "uri",
                      "uriReference",
                      "uriTemplate",
                      "url",
                      "datetime",
                      "date",
                      "time",
                      "duration",
                      "jsonPointer",
                      "relativeJsonPointer",
                    ].some((prop: any) => key === prop)
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  });
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        return (
          ((("object" === typeof input && null !== input) ||
            $report(true, {
              path: _path + "",
              expected: "TypeTagFormat",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "TypeTagFormat",
            value: input,
          })
        );
      })(input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
      success,
      errors,
      data: success ? input : undefined,
    } as any;
  },
);
