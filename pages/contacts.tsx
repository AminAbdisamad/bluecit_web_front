import * as React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import PageHeading from "../components/PageHeading";
import { Divider, Typography, Form, Input, Select, Button, Steps } from "antd";
import styled from "styled-components";
import { EmailOutline as Out } from "@styled-icons/evaicons-outline/";
import Meta from "components/Meta";
import Router from "next/router";

const { Title } = Typography;
const { Option } = Select;
const { Step } = Steps;

const EmailOutline = styled(Out)`
  color: ${({ theme }) => theme.showcaseText};
`;

const CustomeForm = styled(Form)`
  label {
    /* color: ${({ theme }) => theme.showcaseText}; */
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
  }
`;

const CREATE_CONTACT_FORM = gql`
  mutation CREATE_CONTACT_FORM(
    $name: String!
    $email: String!
    $budget: String!
    $description: String!
    $phone: String
    $howDidYouHearAboutUs: String
  ) {
    createContactForm(
      data: {
        name: $name
        email: $email
        budget: $budget
        description: $description
        phone: $phone
        howDidYouHearAboutUs: $howDidYouHearAboutUs
      }
    ) {
      id
    }
  }
`;

const CustomeButton = styled(Button)`
  display: block;
  background: ${({ theme }) => theme.showcaseText};
  color: var(--light_2);
  width: 100%;
  border: transparent;
  border-radius: 6rem;
  &:hover {
    color: var(--light_1);
    background: var(--grey);
  }
`;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 26 },
  },
};
const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Email = styled.p`
  padding-top: 1rem;
  padding-left: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.showcaseText};
  font-size: 2.5rem;
`;

const CustomeTitle = styled(Title)`
  color: ${({ theme }) => theme.text} !important;
  margin-bottom: 1rem;
`;
const headingContent = {
  title: "Contact Us",
  text: "Do you want to create something spectacular? Please let us know how we can assist you",
};

const Container = styled.div`
  padding: var(--paddingLayout);
  background: ${(props) => props.theme.background};
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: block;
  margin: 2rem auto;
  max-width: 870px;
  text-align: center;

  border-radius: var(--borderRadius);
`;
const Contacts = () => {
  const [form] = Form.useForm();

  const [createForm, { data, loading, error }] =
    useMutation(CREATE_CONTACT_FORM);

  const onFinish = async (values: any) => {
    const res = await createForm({ variables: values });
  };

  return (
    <React.Fragment>
      <Meta name='Contacts' path='/contacts' />
      <PageHeading title={headingContent.title} text={headingContent.text} />
      <Container>
        <CustomeTitle level={5}>
          Please email us with any questions you have about any of our services.
        </CustomeTitle>

        <EmailContainer>
          <EmailOutline size='35' />
          <Email>contact@bluecit.io</Email>
        </EmailContainer>
        <Divider> OR</Divider>
        <CustomeTitle level={3}>Fill in our contact form</CustomeTitle>

        <CustomeForm
          {...formItemLayout}
          form={form}
          style={{ display: "block", margin: "auto" }}
          size='large'
          layout='vertical'
          name='contact'
          onFinish={onFinish}
          scrollToFirstError
        >
          <div>
            {/* If no error then clean the form and reset form fields */}
          </div>
          <Form.Item
            name='description'
            label='What can we help you with?'
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input.TextArea showCount maxLength={200} />
          </Form.Item>
          <Form.Item
            name='budget'
            label='What is your budget? (US Dollars)'
            rules={[{ required: true, message: "Please select your budget" }]}
          >
            <Select placeholder='Select your budget'>
              <Option value='ONE_THOUSAND_TO_TEN_THOUSAND'>
                1,000 to 10,000
              </Option>
              <Option value='TEN_THOUSAND_TO_FIFTY_THOUSAND'>
                10,000 to 50,000
              </Option>
              <Option value='MORE_THAN_FIFTY_THOUSAND'>50,000 ++</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='name'
            label='Your Name'
            rules={[
              {
                required: true,
                message: "Name is required",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name='phone' label='Phone Number'>
            <Input style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name='email'
            label='E-mail'
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='howDidYouHearAboutUs'
            label='How did you hear about BlueCIT?'
          >
            <Input.TextArea showCount maxLength={200} />
          </Form.Item>
          <CustomeButton type='primary' htmlType='submit'>
            Send Message
          </CustomeButton>
        </CustomeForm>
      </Container>
    </React.Fragment>
  );
};

export default Contacts;
