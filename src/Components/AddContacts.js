import React, { useRef, useState } from 'react'
import { Form, Input, Button, Select, Radio, Upload, Layout } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function AddContacts() {
    const { Option } = Select;
    const [contact, setContacts] = useState([]);
    const [form] = Form.useForm();
    const formRef = useRef();
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const { Header, Content } = Layout;
    const onFinish = (values) => {
        console.log('Success:', values);
        let list = [values]
        setContacts(contact.concat(list))
        localStorage.setItem("add", JSON.stringify(contact))
        forceUpdate();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    const handleSubmit = () => {
        formRef.current.submit();
    }

    return (
        <Layout className="layout">
            <Header>
                <h3 style={{ color: 'white' }}>Contact Form</h3>
            </Header>
            <Content>
                <Form
                    name="basic"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 8,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    ref={formRef}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Phone no!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="type" label="Type" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                        >
                            <Option value="personal">personal</Option>
                            <Option value="office">office</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="isWhatsapp" label="Radio.Group">
                        <Radio.Group>
                            <Radio value={1}>true</Radio>
                            <Radio value={2}>false</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        name="upload"
                        label="Upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 8,
                        }}
                    >
                        <Button type="primary" htmlType="submit" onClick={handleSubmit}> 
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    )
}

export default AddContacts