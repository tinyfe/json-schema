import React, { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import copy from 'clipboard-copy';
import { MonacoProps } from './Monaco';
import styles from 'styles/components.module.scss';
import { Panel } from './Panel';

export const Monaco = dynamic(() => import('./Monaco'), {
  ssr: false,
});

export interface EditorProps extends MonacoProps {
  editable?: boolean;
  hasCopy?: boolean;
}

export const Editor: FC<EditorProps> = ({
  editable,
  language,
  defaultValue,
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
      <Panel>
        <Monaco
          language={language}
          value={value}
          options={options}
          onChange={(value, event) => {
            setValue(value);
            onChange!(value, event);
          }}
        />
      </Panel>
      <Panel>
        <Monaco
          language={language}
          value={value}
          options={options}
          onChange={(value, event) => {
            setValue(value);
            onChange!(value, event);
          }}
        />
      </Panel>
    </div>
  );
};
