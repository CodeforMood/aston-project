import { Header } from "antd/es/layout/layout"
import { Link } from "react-router-dom"
import { AppRoute } from "../../const"


export const HeaderNav: React.FC = () => {

  return (

    <Header
      style={{
      position: 'sticky',
      top: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
      }}
    >
      <Link to={AppRoute.Root} style={{display: 'flex', alignItems: 'center',}}> 
        <img src="img/logo.jpg" alt="logo" style={{ height: 36, width: 35 }} />
      </Link>
      <div style={{display: 'flex', gap: 100}}>
        <Link to={AppRoute.SignUp} style={{color: 'white'}}> Регистрация </Link>
        <Link to={AppRoute.Favourites} style={{color: 'white'}}> Избранное </Link>
        <Link to={AppRoute.History} style={{color: 'white'}}> История </Link>
      </div>
    </Header>
    )
}