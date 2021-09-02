import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.scss';
// import Editor from '@/components/editor';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { prefix } from '@tinyfe/classnames';
import { useState } from 'react';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const p = prefix('transform-');

const menus = [{ label: 'Transform', value: '1' }];
const subMenus = [{ label: 'To TS', value: 'ts' }];

const TransformLayout: NextPage = () => {
  const [selectedKeys, setSelectedKeys] = useState(['1']);

  return (
    <div className={p('container')}>
      <Head>
        <title>Typescript Playground</title>
        <meta name="description" content="Typescript Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className={styles.wrapper}>
        <Header className={p('header')}>
          <div className={p('logo')}>Back</div>
          <Menu
            theme={'dark'}
            mode={'horizontal'}
            defaultSelectedKeys={selectedKeys}
          >
            {menus.map(({ value, label }) => {
              return <Menu.Item key={value}>{label}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className={p('layout-sider')}>
            <Menu
              mode={'inline'}
              defaultSelectedKeys={['ts']}
              defaultOpenKeys={['json']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key={'json'} icon={<UserOutlined />} title={'JSON'}>
                {subMenus.map(({ value, label }) => {
                  return <Menu.Item key={value}>{label}</Menu.Item>;
                })}
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '24px 0' }}>
            <Content
              className={p('layout-content')}
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              content
              {/* <Editor /> */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default TransformLayout;
