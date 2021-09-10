import React, { FC } from 'react';
import Head from 'next/head';
import { ConversionPanel, TransformerArgs } from 'components/ConversionPanel';
import clsx from '@tinyfe/classnames';
import styles from 'styles/pages.module.scss';

export interface JsonToTypescriptProps {}

const JsonToTypescript: FC<JsonToTypescriptProps> = props => {
  const transformer = ({ value }: TransformerArgs) => {
    return new Promise<any>((resolve, reject) => {
      resolve(value);
    });
  };

  return (
    <div className={styles['layout-container']}>
      <ConversionPanel
        editorTitle={'JSON'}
        resultTitle={'TypeScript'}
        editable={true}
        language={'typescript'}
        transformer={transformer}
      />
    </div>
  );
};

export default JsonToTypescript;
