import { CloseOutlined } from '@ant-design/icons';
import React from 'react';

const someHistory = [
  {'URL': 'someUrl', 'search': 'Форсаж' },
  {'URL': 'someUrl', 'search': 'Форсаж' },
  {'URL': 'someUrl', 'search': 'Форсаж' },
  {'URL': 'someUrl', 'search': 'Форсаж' },
  {'URL': 'someUrl', 'search': 'Форсаж' }
]
function History() {

  return (
    <div style={{height: 'calc(100vh - 171px)', maxWidth: 600}}>
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
        {someHistory.map((request, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '30px'}}>
            {request.search}
            <p style={{color: 'black'}}>{request.URL}</p>
            <p style={{color: 'black'}}> 01.03.2024 14:53</p>
            {<CloseOutlined />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
