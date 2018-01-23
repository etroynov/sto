import * as React from "react";
import Dashboard from "../components/layout";
import {
  Row,
  Col,
  Card,
  List,
  Avatar,
  Button,
  Modal,
  Form,
  Icon,
  Input,
  Checkbox
} from "antd";
import { Link } from "react-router-dom";

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

declare const require: any;

const dataSource = [
  {
    key: "1",
    fio: "Тройнов Евгений Александрович",
    position: "ИТ - Специалист",
    email: "troinof@yandex.ru"
  },
  {
    key: "2",
    fio: "Кожевников Андрей Алексеевич",
    position: "Директор",
    email: "avtorka@list.ru"
  }
];

const columns = [
  {
    title: "ФИО",
    dataIndex: "fio",
    key: "fio"
  },
  {
    title: "Должность",
    dataIndex: "position",
    key: "position"
  },
  {
    title: "Электронная почта",
    dataIndex: "email",
    key: "email"
  }
];

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

/**
 * Data
 */

const options = [
  { label: "го и чс", value: "gochs" },
  { label: "Обучение по охране труда", value: "ohrana-truda" }
];

/*!
 * Expo
 */

class UserCreate extends React.Component<
  {
    form: any;
  },
  {}
> {
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Dashboard title="Новый сотрудник">
        <header
          style={{
            marginBottom: 20,
            padding: "10px 20px",
            background: "#ffffff"
          }}
        >
          <h1 style={{ margin: 0 }}>Новый сотрудник</h1>
        </header>
        <section style={{ padding: "20px", background: "#ffffff" }}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem label="ФИО">
              {getFieldDecorator("fio", {
                rules: [{ required: true, message: "Укажите имя!" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Иванов Иван Иванович"
                />
              )}
            </FormItem>
            <FormItem label="Должность">
              {getFieldDecorator("position", {
                rules: [{ required: true, message: "Укажите должность!" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Менеджер"
                />
              )}
            </FormItem>
            <FormItem label="Адрес электроной почты">
              {getFieldDecorator("email", {
                rules: [
                  { required: true, message: "Укажите адрес электроной почты!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="example@gmail.com"
                />
              )}
            </FormItem>
            <FormItem label="Выберите курсы">
              <hr style={{ border: "none", borderBottom: "1px solid #eee" }} />
              <Row gutter={16}>
                <Col span={6}>
                  <Card
                    title="Промышленая безопасность"
                    className="uc-course-card"
                  >
                    <img
                      src={require("./../assets/img/oot.svg")}
                      alt="Обучение по охране труда"
                      className="uc-img-response"
                    />
                    <p
                      style={{
                        margin: 0,
                        padding: 15,
                        fontWeight: 600,
                        textAlign: "center",
                        fontSize: 20,
                        textTransform: "uppercase"
                      }}
                    >
                      2200 р. / 72ч
                    </p>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    title="Промышленая безопасность"
                    className="uc-course-card"
                  >
                    <img
                      src={require("./../assets/img/ptm.svg")}
                      alt="Пожарно технический минимум"
                      className="uc-img-response"
                    />
                    <p
                      style={{
                        margin: 0,
                        padding: 15,
                        fontWeight: 600,
                        textAlign: "center",
                        fontSize: 20,
                        textTransform: "uppercase"
                      }}
                    >
                      2200 р. / 72ч
                    </p>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    title="Промышленая безопасность"
                    className="uc-course-card"
                  >
                    <img
                      src={require("./../assets/img/gochs.svg")}
                      alt="го и чс"
                      className="uc-img-response"
                    />
                    <p
                      style={{
                        margin: 0,
                        padding: 15,
                        fontWeight: 600,
                        textAlign: "center",
                        fontSize: 20,
                        textTransform: "uppercase"
                      }}
                    >
                      2200 р. / 72ч
                    </p>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card
                    title="Промышленая безопасность"
                    className="uc-course-card"
                  >
                    {/* <img
                      alt=""
                      className="uc-img-response"
                    /> */}
                    <h2 style={{ textAlign: 'center' }}>ПНООЛР</h2>
                    <p
                      style={{
                        margin: 0,
                        padding: 15,
                        fontWeight: 600,
                        textAlign: "center",
                        fontSize: 20,
                        textTransform: "uppercase"
                      }}
                    >
                      2200 р. / 72ч
                    </p>
                  </Card>
                </Col>
              </Row>
            </FormItem>
            <FormItem>
              <hr style={{ border: "none", borderBottom: "1px solid #eee" }} />
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Сохранить
              </Button>
            </FormItem>
          </Form>
        </section>
      </Dashboard>
    );
  }
}

const WrappedUserCreate = Form.create()(UserCreate);

export default WrappedUserCreate;
