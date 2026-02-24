import dayjs, { Dayjs } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useState } from "react";
import TimestampPageForm from "./components/TimestampPageForm/TimestampPageForm";
import TimestampInfoItem from "./components/TimestampInfoItme/TimestampInfoItem";
dayjs.extend(utc);
dayjs.extend(timezone);

export default function Timestamp() {
    const [date, setDate] = useState<Dayjs>(dayjs());

    return (
        <div className="w-full max-w-200 min-w-150 flex flex-col bg-white gap-1 p-4 rounded shadow">
            <TimestampPageForm date={date} onDateChange={setDate} />
            <div className="w-full flex flex-col px-4 py-2 bg-gray-100 divide-gray-400 divide-y">
                <TimestampInfoItem title="Timestamp" value={date.unix().toString()} />
                <TimestampInfoItem title="Timestamp in milliseconds" value={date.valueOf().toString()} />
                <TimestampInfoItem title="ISO 8601" value={date.toISOString()} />
                <TimestampInfoItem title="Date Time (UTC)" value={dayjs.tz(date.valueOf(),'UTC').format("DD.MM.YYYY HH:mm:ss")} />
                <TimestampInfoItem title="Date Time (your time zone)" value={date.format("DD.MM.YYYY HH:mm:ss")} />
            </div>
        </div>
    )
}