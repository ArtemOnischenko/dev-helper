import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function CurrentTime() {
    const [time, setTime] = useState<Dayjs>(dayjs());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(dayjs());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col text-[#ffffffa6] leading-6 h-full justify-center">
            <div className="item"><b>Current Unix Timestamp:</b> {time.unix()}</div>
            <div className="item"><b>Current Time:</b> {time.format("dddd, MMMM Do YYYY HH:mm:ss")}</div>
        </div>
    )
}