import { DatePicker, Form, Input, InputNumber, Select } from "antd";
import type { Rule } from "antd/es/form";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

interface FormOptions {
    label: string;
    value: string;
}
const dateTypeInputs: FormOptions[] = [
    { label: "Timestamp", value: "timestamp" },
    { label: 'Date Time Picker', value: "dateTimePicker" },
]

const numberRule: Rule = { type: "number", message: "Value must be a number" };
const requiredRule: Rule = { required: true, message: "This field is required" };

export default function TimestampPageForm({date, onDateChange}: {date: Dayjs, onDateChange: any}) {
    const [form] = Form.useForm();
    const isFormValid = () => {
        return !form.getFieldsError().some(({ errors }) => errors.length);
    }
    const onDatePickerChange = (newDate: Dayjs | null) => {
        if (newDate) {
            onDateChange(newDate);
            form.setFieldValue("timestamp", newDate.unix());
        }
    }
    const onTimestampChanged = () => {
        if(isFormValid()) {
            const newDate: Dayjs = dayjs.unix(form.getFieldValue("timestamp"));
            if(newDate.isValid()) {
                form.setFieldValue("dateTime", newDate);
                onDateChange(newDate);
            }
        }
    }
    return (
        <Form form={form} layout="inline" variant="underlined" requiredMark={false}>
            <Form.Item shouldUpdate={(prevValues, currentValues) => prevValues.dateType !== currentValues.dateType} noStyle>
                {({ getFieldValue }) => {
                    return (
                        <>
                            {getFieldValue("dateType") === "dateTimePicker" && 
                                <Form.Item label="Date Time" name="dateTime" initialValue={date}>
                                    <DatePicker format={"DD.MM.YYYY HH:mm:ss"} showTime allowClear={false} onChange={onDatePickerChange} />
                                </Form.Item>}
                            {getFieldValue("dateType") === "timestamp" && 
                                <Form.Item label="Timestamp" name="timestamp" initialValue={date.unix()} rules={[requiredRule, numberRule]}>
                                    <InputNumber style={{ width: 190 }} controls={false} onPressEnter={onTimestampChanged} onBlur={onTimestampChanged} />
                                </Form.Item>}
                        </>
                    )
                }}
            </Form.Item>
            <Form.Item label="Date Type" name="dateType" initialValue="dateTimePicker">
                <Select style={{ width: 150 }} options={dateTypeInputs} />
            </Form.Item>
        </Form>
    )
}