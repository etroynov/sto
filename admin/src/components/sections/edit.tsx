/*!
 * Vendor
 */

import * as React from 'react';
import CKEditor from 'react-ckeditor-component';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, Select, Tabs } from 'antd';

/*!
 * Actions
 */

import { success } from './../../utils/modals';
import { updateSection } from '../../actions/sectionsActions';

/*!
 * Components
 */

const Option = Select.Option;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const { TextArea } = Input;

/*!
 * Expo
 */

class SectionEditForm extends React.Component<any, {
  title: string;
  description: string;
  name: string;
  content: string;
  icon: string;
  status: number;
  slug: string;
}> {
  state = {
    title: '',
    description: '',
    name: '',
    content: '',
    icon: '',
    status: 0,
    slug: '',
  };

  private componentDidMount() {
    const { sections, match: { params } } = this.props;

    const filteredSection = sections.data.filter(({ _id }) => _id === params.id);

    return this.setState({
      ...filteredSection[0],
    });
  }

  private handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.updateSection({ ...this.state, ...values }).then(() => success());
      }
    });
  }

  private updateContent = (content) => {
    this.setState({ content });
  }

  private handleChangeContent = (e) => {
    const content = e.editor.getData();

    this.setState({ content });
  }

  private handelChangeStatus = status => this.setState({ status });

  public render() {
    const { getFieldDecorator } = this.props.form;
    const {
      title,
      description,
      name,
      content,
      icon,
      slug,
      status,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Общее" key="1">
            <FormItem>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Укажите название!' }],
                initialValue: name,
              })(<Input placeholder="название страницы" />)}
            </FormItem>
            <FormItem>
              <CKEditor 
                config={{
                  language: 'ru',
                  allowedContent: true,
                }}
                content={content} 
                events={{
                  change: this.handleChangeContent,
                }}
              />
            </FormItem>
          </TabPane>
          <TabPane tab="Сео" key="2">
            <FormItem>
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Укажите заголовок!' }],
                initialValue: title,
              })(<Input placeholder="заголовок страницы ( тег title )" />)}
            </FormItem>

            <FormItem>
              {getFieldDecorator('description', {
                rules: [{ required: true, message: 'Укажите описание!' }],
                initialValue: description,
              })(
                <TextArea
                  rows={4}
                  placeholder="краткое описание ( тег meta='description' )"
                />,
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('slug', {
                rules: [{ required: true, message: 'Укажите ЧПУ!' }],
                initialValue: slug,
              })(
                <Input placeholder="адрес страницы, например: testpage" />,
              )}
            </FormItem>
          </TabPane>
          <TabPane tab="Изображения" key="3">
            <FormItem>
              {getFieldDecorator('icon', {
                rules: [{ required: true, message: 'Иконка не выбрана!' }],
                initialValue: icon,
              })(<Input placeholder="ссылка на иконку" />)}
            </FormItem>
          </TabPane>
        </Tabs>
        <FormItem>
          <Select defaultValue={String(status)} onChange={this.handelChangeStatus}>
            <Option value="0">Черновик</Option>
            <Option value="1">Опубликованно</Option>
          </Select>
        </FormItem>
        <FormItem>
          <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedSectionEditForm = Form.create()(SectionEditForm as any);

const mapStateToProps = ({ sections }) => ({ sections });

export default connect(
  mapStateToProps,
  { updateSection },
)(WrappedSectionEditForm as any);
