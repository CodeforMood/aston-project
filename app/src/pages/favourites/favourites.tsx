import { RestOutlined } from '@ant-design/icons';
import React from 'react';

const someDate = [
  { "id": 1, "url": "http://example.com/film1", "title": "Форсаж", "description": "Коп под прикрытием внедряется в банду стритрейсеров и становится одним из них. Первая часть гоночной франшизы", 'src': 'https://w.forfun.com/fetch/ed/ed16411652a506979f8d2c25bd9439ef.jpeg', 'raiting': '7.9' },
  { "id": 2, "url": "http://example.com/film2", "title": "Форсаж 2", "description": "Коп под прикрытием внедряется в банду стритрейсеров и становится одним из них. Первая часть гоночной франшизы", 'src': 'https://w.forfun.com/fetch/ed/ed16411652a506979f8d2c25bd9439ef.jpeg', 'raiting': '7.9' },
  { "id": 3, "url": "http://example.com/film3", "title": "Форсаж 3", "description": "Коп под прикрытием внедряется в банду стритрейсеров и становится одним из них. Первая часть гоночной франшизы", 'src': 'https://w.forfun.com/fetch/ed/ed16411652a506979f8d2c25bd9439ef.jpeg', 'raiting': '7.9' }
];

function Favourites() {
  return (
    <div 
      style={{
        display: 'block',
        padding: '40px',
        fontWeight: 'bold',
        fontSize: '25px',
        height: 'calc(100vh - 171px)',
      }}
    >
      Буду смотреть
      <ul>
        {someDate.map(item => 
          <li 
            key={item.id}
            style={{
              display: 'flex',
              marginBottom: '20px',
              position: 'relative'            
            }}
          >
            <img 
              src={item.src} 
              style={{
                width: 250,
                borderRadius: 5,
              }} 
              alt="форсаж" 
            />
            <span 
              style={{
                position: 'absolute', 
                left: 7,
                top: 7,
                fontSize: 18, 
                backgroundColor: 'lightgreen', 
                padding: '2px 7px',
                borderRadius: 5,
              }}
            >
              {item.raiting}
            </span>
            <div>
              <p 
                style={{
                  margin: '0 0 0 20px',
                  color: 'black',
                  fontWeight: 700,
                  fontSize: 22,
                }}
              >
                {item.title}
              </p>
              <p 
                style={{
                  margin: '0 0 0 20px',
                  color: 'black',
                  fontSize: 13,
                  marginTop: 30,
                  fontWeight: 400
                }}
              >
                {item.description}
              </p>
            </div>

            <button style={{border: 'none', background: 'none', cursor: 'pointer', position: 'absolute', right: 0}}>
              {<RestOutlined 
                style={{ 
                  fontSize: 20, 
                  color: 'black',
                  }}
              />}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Favourites;
