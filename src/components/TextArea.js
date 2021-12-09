import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

export default function TextAreaComponent({ label, value }) {
  return (
    <div>
      <label>{label}</label>
      <TextArea value={value} rows={4} disabled />
      <br />
    </div>
  );
}
