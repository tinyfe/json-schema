import React, { FC, memo, useEffect, useState } from 'react';
import styles from 'styles/components.module.scss';
import { Row, Col, Button, Tooltip } from 'antd';
import {
  CopyOutlined,
  DeleteOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { Editor, EditorProps } from 'components/EditorPanel';
import { useCopy } from 'hooks/useCopy';
import { json } from 'constants/data';
import { transform } from '@babel/core';

export type TransformerArgs = {
  value: string;
};

export type Transformer = (arg: TransformerArgs) => Promise<string>;

export interface ConversionPanelProps extends EditorProps {
  editorTitle: string;
  resultTitle: string;
  transformer: Transformer;
}

export const ConversionPanel: FC<ConversionPanelProps> = memo(
  ({ editable, language, editorTitle, resultTitle, transformer }) => {
    const [value, setValue] = useState(json);
    const [result, setResult] = useState('');

    useEffect(() => {
      async function transform() {
        const result = await transformer({ value });
        setResult(result);
      }

      transform();
    }, [value]);

    return (
      <div className={styles['editor-container']}>
        <Row className={styles['editor-row']}>
          <Col
            key={'editor'}
            className={styles['editor-col']}
            span={12}
            flex={1}
          >
            <div className={styles['editor-wrapper']}>
              <Editor
                className={styles['editor']}
                key={'key'}
                editable={editable}
                title={editorTitle}
                language={language}
                onChange={value => setValue(value as string)}
                defaultValue={value}
                extra={[
                  <Tooltip title={'使用模板'}>
                    <Button
                      key={'fill'}
                      type={'primary'}
                      size={'small'}
                      icon={<FileTextOutlined />}
                      onClick={() => {
                        setValue(json);
                      }}
                    />
                  </Tooltip>,
                  <Tooltip title={'清空'}>
                    <Button
                      key={'delete'}
                      type={'primary'}
                      danger
                      size={'small'}
                      icon={<DeleteOutlined />}
                      onClick={() => {
                        setValue('');
                      }}
                    />
                  </Tooltip>,
                ]}
              />
            </div>
          </Col>
          <Col
            key={'result'}
            className={styles['editor-col']}
            span={12}
            flex={1}
          >
            <div className={styles['editor-wrapper']}>
              <Editor
                className={styles['editor']}
                editable={false}
                key={'result'}
                defaultValue={result}
                title={resultTitle}
                language={language}
                extra={[
                  <Button
                    type={'primary'}
                    size={'small'}
                    icon={<CopyOutlined />}
                    onClick={() => {
                      useCopy({ value: result, text: '复制成功' });
                    }}
                  >
                    Copy
                  </Button>,
                ]}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  },
);
