import { Header } from "antd/es/layout/layout"
import { Link, useNavigate } from "react-router-dom"
import { AppRoute } from "../../utils/const"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { AuthStatus } from "../../types/auth"
import { Button } from "antd"
import { useAuthActions } from "../../hooks/useActions"


export function HeaderNav() {
  const {signOutAction} = useAuthActions();
  const {authStatus, currentUser} = useTypedSelector(state => state.auth);
  const navigate = useNavigate();
  const handleSignOutBtnClick = () => {
    signOutAction();
    navigate("/");
  }
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
      <div style={{display: 'flex', gap: 100, alignItems: 'center'}}>
        { (authStatus === AuthStatus.AUTH) ? (
          <>
            <Link to={AppRoute.Favourites} style={{color: 'white'}}> Избранное </Link>
            <Link to={AppRoute.History} style={{color: 'white'}}> История </Link>
            <div style={{color: 'white'}}>{currentUser}</div>
            <Button onClick={handleSignOutBtnClick}> Выход </Button>
          </>
          ) : (
          <>
            <Link to={AppRoute.SignIn} style={{color: 'white'}}> Вход </Link>
            <Link to={AppRoute.SignUp} style={{color: 'white'}}> Регистрация </Link>
          </>
          )}
      </div>
    </Header>
    )
}