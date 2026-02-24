import type { Rule } from "antd/es/form";

export const numberRule: Rule = { type: "number", message: "Value must be a number" };
export const requiredRule: Rule = { required: true, message: "This field is required" };