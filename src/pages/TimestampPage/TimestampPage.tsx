import moment from "moment-timezone"

export default function Timestamp() {
    const date = moment();
    return (
        <div className="w-full max-w-[800px] min-w-[600px] flex flex-col bg-white gap-1 p-4 rounded shadow">
            <h2>Welcome to the Timestamp Page</h2>
            <div className="w-full flex flex-col px-4 py-2 bg-gray-100 divide-gray-400 divide-y">
                <div className="w-full flex leading-10 px-4">
                    <div>Timestamp:</div>
                    <div className="flex-1"></div>
                    <div>{date.valueOf()}</div>
                </div>
                 <div className="w-full flex leading-10 px-4">
                    <div>ISO 8601:</div>
                    <div className="flex-1"></div>
                    <div>{date.toISOString()}</div>
                </div>
                 <div className="w-full flex leading-10 px-4">
                    <div>Date Time (UTC):</div>
                    <div className="flex-1"></div>
                    <div>{moment.tz(date.valueOf(),'UTC').format("DD-MM-YYYY HH:mm:ss")}</div>
                </div>
                <div className="w-full flex leading-10 px-4">
                    <div>Date Time (your time zone):</div>
                    <div className="flex-1"></div> 
                    <div>{date.format("DD-MM-YYYY HH:mm:ss")}</div>
                </div>
            </div>
        </div>
    )
}