import { Spin } from "antd"
import React from "react"
import { LoadingOutlined } from "@ant-design/icons"
export default function Loading() {
  return (
    <div>
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </div>
  )
}
