import axios from 'axios';
import { Modal } from 'antd';
import { RECEIVE_EMPLOYERS } from './types';


export const receiveEmployers = ({ employers }) => ({
  type: RECEIVE_EMPLOYERS,
  payload: employers,
});

export const fetchEmployers = () => dispatch => axios.get(
  'http://localhost:8081/organizations/employers'
).then(
  ({ data }) => {
    dispatch(receiveEmployers(data));
  },
  err => {
    Modal.error({
      title: 'Ошибка!',
      content: `В ходе отправки запроса возникла ошибка. Если ошибка возникает повторно напишите нам на support@ucavtor.ru или в онлайн консультант.`,
    }); 
  },
);
