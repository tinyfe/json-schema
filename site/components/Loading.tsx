import React from 'react';
import { Spin } from 'antd';
import type { SpinProps } from 'antd';

export type LoadingProps = SpinProps;

export const Loading: React.FC<SpinProps> = props => {
  return <Spin {...props} />;
};
