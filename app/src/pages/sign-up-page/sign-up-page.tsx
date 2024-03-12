import './sign-up-page.css'
import { useAuthActions } from '../../hooks/useActions';
import CustomForm from '../../components/custom-form/custom-form';
import { PageName } from '../../utils/const';

function SignUpPage() {
  const {signUpAction} = useAuthActions();

  return (
    <CustomForm pageName={PageName.SignUp} action={signUpAction}/>
  )
}

export default SignUpPage;
