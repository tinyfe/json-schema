import React, { FC, useState } from 'react';
import styles from 'styles/components.module.scss';
import { Row, Col, Button } from 'antd';
import {
  CopyOutlined,
  DeleteOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { Editor, EditorProps } from 'components/EditorPanel';
import { useCopy } from 'hooks/useCopy';
import { json } from 'constants/data';

// TODO: 待实现
const transformer = (value: string) => value;

export interface ConversionPanelProps extends EditorProps {
  editorTitle: string;
  resultTitle: string;
}

export const ConversionPanel: FC<ConversionPanelProps> = ({
  editable,
  language,
  editorTitle,
  resultTitle,
}) => {
  const [value, setValue] = useState<string | undefined>(json);
  const resultValue = transformer(json);

  return (
    <div className={styles['editor-container']}>
      <Row className={styles['editor-row']}>
        <Col className={styles['editor-col']} span={12} flex={1}>
          <div className={styles['editor-wrapper']}>
            <Editor
              className={styles['editor']}
              key={'key'}
              editable={editable}
              title={editorTitle}
              language={language}
              onChange={value => setValue(value)}
              defaultValue={value}
              extra={[
                <Button
                  type={'primary'}
                  size={'small'}
                  icon={<FileTextOutlined />}
                  onClick={() => {
                    setValue(json);
                  }}
                />,
                <Button
                  type={'primary'}
                  danger
                  size={'small'}
                  icon={<DeleteOutlined />}
                  onClick={() => {
                    setValue('');
                  }}
                />,
              ]}
            />
          </div>
        </Col>
        <Col className={styles['editor-col']} span={12} flex={1}>
          <div className={styles['editor-wrapper']}>
            <Editor
              className={styles['editor']}
              editable={false}
              key={'result'}
              defaultValue={resultValue}
              title={resultTitle}
              language={language}
              extra={[
                <Button
                  type={'primary'}
                  size={'small'}
                  icon={<CopyOutlined />}
                  onClick={() => {
                    useCopy({ value: resultValue, text: '复制成功' });
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
};
