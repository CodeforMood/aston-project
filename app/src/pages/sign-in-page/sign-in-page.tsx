import './sign-in-page.css'
import { useAuthActions } from '../../hooks/useActions';
import CustomForm from '../../components/custom-form/custom-form';
import { PageName } from '../../const';

function SignInPage() {
  const {signInAction} = useAuthActions();

  return (
    <CustomForm pageName={PageName.SignIn} action={signInAction}/>
  )
}

export default SignInPage;
