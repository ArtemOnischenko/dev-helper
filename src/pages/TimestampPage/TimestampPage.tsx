import { Form, Input, Select } from "antd";
import moment from "moment-timezone"

interface FormOptions {
    label: string;
    value: string;
}
const dateTypeInputs: FormOptions[] = [
    { label: "Timestamp", value: "timestamp" },
    { label: 'Date Time Picker', value: "dateTimePicker" },
]

export default function Timestamp() {
    const [form] = Form.useForm();
    const date = moment();
    const onFinish = (values: any) => {
        console.log(values);
    }
    return (
        <div className="w-full max-w-[800px] min-w-[600px] flex flex-col bg-white gap-1 p-4 rounded shadow">
            <Form form={form} onFinish={onFinish} layout="inline" variant="underlined">
                <Form.Item label="Timestamp" name="timestamp" initialValue={date.valueOf()}><Input /></Form.Item>
                <Form.Item label="Date Type" name="dateType" initialValue="timestamp">
                    <Select options={dateTypeInputs} />
                </Form.Item>
            </Form>
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