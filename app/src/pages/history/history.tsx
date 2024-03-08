import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { dateHistoryType } from '../../types/history';
import { clearHistoryAction } from '../../store/actions/histiry-actions';
import { Button } from 'antd';

const History: React.FC = () => {
  let dispatch = useDispatch();
  let { history } = useSelector((state: RootState) => state.history)

  const clearHistory = () => {
    dispatch(clearHistoryAction())
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: 'calc(100vh - 171px)', maxWidth: 600, marginLeft: '40px'}}>
      <p 
        style={{
          display: 'block',
          paddingLeft: '40px',
          fontWeight: 'bold',
          fontSize: '25px',
          color: 'black',
        }}
      >
        История запросов
      </p>
      <ul style={{ listStyle: 'none', marginLeft: '20px' }}>
        {history.map((request: dateHistoryType) => (
          <li key={request.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '30px'}}>
            {history.length > 0 ? 'Запрос на поиск:' : null}
            <p style={{color: 'black', maxWidth: '250px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{request.name}</p>
            <p style={{color: 'black'}}>{request.time}</p>
          </li>
        ))}
        
      </ul>
      {
        history.length > 0 ? <Button type="primary" danger ghost onClick={clearHistory} style={{}}>
          Очистить историю
        </Button> : null
      }
    </div>
  );
};

export default History;
