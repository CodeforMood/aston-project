import './sign-up-page.css'
import { useAuthActions } from '../../hooks/useActions';
import { PageName } from '../../const';
import CustomForm from '../../components/custom-form/custom-form';

function SignUpPage() {
  const {signUpAction} = useAuthActions();

  return (
    <CustomForm pageName={PageName.SignUp} action={signUpAction}/>
  )
}

export default SignUpPage;
