import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { dateHistoryType } from '../../types/history';
import { Button } from 'antd';
import { useHistoryActions } from '../../hooks/actions';
import { getSearchUrl } from './history.utils';
import { useNavigate } from 'react-router-dom';

const History: React.FC = () => {
  const { clearHistoryAction } = useHistoryActions()
  let { history } = useSelector((state: RootState) => state.history)
  
  const clearHistory = () => {
    clearHistoryAction()
  }

  const navigate = useNavigate()

  const search = (e: any, searchValue: string) => {
    e.preventDefault()
    navigate(getSearchUrl(searchValue))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 171px)', maxWidth: 600, marginLeft: '40px' }}>
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
        {history.map((request: dateHistoryType, index: number) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '30px' }}>
            {history.length > 0 ? 'Запрос на поиск:' : null}
            <p style={{ color: 'black', maxWidth: '250px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{request.name}</p>
            <p style={{ color: 'black' }}>{request.time}</p>
            <p style={{ color: 'black' }}>
              <a href={getSearchUrl(request.name)} onClick={(e) => search(e, request.name)}>{request.name}</a></p>
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
