import React from "react";
import { Input } from "antd";

export default function ItemsDetailMovie({ label, value }) {
  return (
    <div>
      <label>{label}</label>
      <Input value={value} disabled />
      <br />
      <br />
    </div>
  );
}
