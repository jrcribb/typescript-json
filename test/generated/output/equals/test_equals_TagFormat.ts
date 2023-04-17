import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagFormat } from "../../../structures/TagFormat";

export const test_equals_TagFormat = _test_equals(
    "TagFormat",
    TagFormat.generate,
    (input) =>
        ((input: any, _exceptionable: boolean = true): input is TagFormat => {
            const $is_uuid = (typia.equals as any).is_uuid;
            const $is_email = (typia.equals as any).is_email;
            const $is_url = (typia.equals as any).is_url;
            const $is_ipv4 = (typia.equals as any).is_ipv4;
            const $is_ipv6 = (typia.equals as any).is_ipv6;
            const $is_date = (typia.equals as any).is_date;
            const $is_datetime = (typia.equals as any).is_datetime;
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.uuid &&
                true === $is_uuid(input.uuid) &&
                "string" === typeof input.email &&
                true === $is_email(input.email) &&
                "string" === typeof input.url &&
                true === $is_url(input.url) &&
                "string" === typeof input.ipv4 &&
                true === $is_ipv4(input.ipv4) &&
                "string" === typeof input.ipv6 &&
                true === $is_ipv6(input.ipv6) &&
                "string" === typeof input.date &&
                true === $is_date(input.date) &&
                "string" === typeof input.date_time &&
                true === $is_datetime(input.date_time) &&
                "string" === typeof input.datetime &&
                true === $is_datetime(input.datetime) &&
                "string" === typeof input.dateTime &&
                true === $is_datetime(input.dateTime) &&
                "string" === typeof input.custom &&
                (10 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (
                            [
                                "uuid",
                                "email",
                                "url",
                                "ipv4",
                                "ipv6",
                                "date",
                                "date_time",
                                "datetime",
                                "dateTime",
                                "custom",
                            ].some((prop) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        })(input),
);
