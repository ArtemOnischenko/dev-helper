import type { FormInstance } from "antd";

export const isFormValid = (form: FormInstance) => {
     return !form.getFieldsError().some(({ errors }) => errors.length);
}