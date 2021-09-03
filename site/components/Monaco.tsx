import React from 'react';
import Editor from '@monaco-editor/react';
import type { EditorProps } from '@monaco-editor/react';
import { Loading, LoadingProps } from './Loading';

export function parseCssUnit(value: string) {
  return !/^\d+$/.test(value) ? value : `${value}px`;
}

export interface MonacoProps extends EditorProps {
  width?: string | number;
  height?: string | number;
  loadingProps?: LoadingProps;
}

const Monaco: React.FC<MonacoProps> = ({
  language,
  width,
  height,
  options,
  value,
  defaultValue,
  onChange,
}) => {
  return (
    <Editor
      defaultValue={defaultValue}
      defaultLanguage={language}
      width={width}
      height={height}
      options={options}
      value={value}
      onChange={onChange}
      loading={<Loading />}
    />
  );
};

export default Monaco;
