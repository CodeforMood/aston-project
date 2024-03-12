import './sign-in-page.css'
import { useAuthActions } from '../../hooks/actions';
import CustomForm from '../../components/custom-form/custom-form';
import { PageName } from '../../utils/const';

function SignInPage() {
  const {signInAction} = useAuthActions();

  return (
    <CustomForm pageName={PageName.SignIn} action={signInAction}/>
  )
}

export default SignInPage;
