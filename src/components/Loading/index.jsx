import React from 'react'
import { Space, Spin } from 'antd';

export default function Loading () {
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <Space style={{ display: 'flex', justifyContent: 'center' }}>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>
    </Space>
  )
}