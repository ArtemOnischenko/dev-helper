import moment, { type Moment } from "moment-timezone"
import { useEffect, useState } from "react";

export default function Timestamp() {
    const [time, setTime] = useState<Moment>(moment());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(moment());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h2>Welcome to the Timestamp Page</h2>
            <p>Current Unix Timestamp: {time.unix()}</p>
            <p>Current Time: {time.format("dddd, MMMM Do YYYY HH:mm:ss")}</p>
        </div>
    )
}