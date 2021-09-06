import React, { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import copy from 'clipboard-copy';
import { MonacoProps } from './Monaco';
import { PageHeader, Button, Descriptions } from 'antd';
import type { PageHeaderProps } from 'antd';
import styles from 'styles/components.module.scss';

export const Monaco = dynamic(() => import('./Monaco'), {
  ssr: false,
});

export interface EditorProps extends MonacoProps {
  editable?: boolean;
  hasCopy?: boolean;
  title?: string;
  extra?: PageHeaderProps['extra'];
}

export const Editor: FC<EditorProps> = ({
  editable,
  language,
  defaultValue,
  title,
  extra,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const options = {
    fontSize: 14,
    readOnly: !editable,
    codeLens: false,
    fontFamily: 'Menlo, Consolas, monospace, sans-serif',
    minimap: {
      enabled: false,
    },
    quickSuggestions: false,
    lineNumbers: 'on',
    renderValidationDecorations: 'off',
  } as MonacoProps['options'];

  return (
    <div className={styles['editor-container']}>
      <PageHeader
        className={styles['header']}
        ghost={false}
        title={title}
        extra={extra}
      />
      <Monaco
        className={styles['editor']}
        language={language}
        value={value}
        options={options}
        onChange={(value, event) => {
          setValue(value);
          onChange!(value, event);
        }}
      />
    </div>
  );
};
