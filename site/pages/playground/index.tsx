import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ConversionPanel, TransformerArgs } from 'components/ConversionPanel';
import clsx from '@tinyfe/classnames';
import styles from 'styles/pages.module.scss';

const TransformLayout: NextPage = () => {
  const transformer = ({ value }: TransformerArgs) => {
    return new Promise<any>((resolve, reject) => {
      resolve(value);
    });
  };

  return (
    <div className={clsx(styles['layout-container'])}>
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

export default TransformLayout;
