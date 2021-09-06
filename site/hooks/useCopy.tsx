import React, { FC } from 'react';
import copy from 'clipboard-copy';
import { message } from 'antd';

interface CopyProps {
  value: string | undefined;
  text: string;
  duration?: number;
}

export const useCopy = ({ value, text, duration = 2 }: CopyProps) => {
  copy(value);

  message.success(text, duration);
};
