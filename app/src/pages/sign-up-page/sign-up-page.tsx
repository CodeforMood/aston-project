import './sign-up-page.css'
import { Button, FormControl, FormGroup, FormLabel, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuthActions } from '../../hooks/useActions';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const {signUpAction} = useAuthActions();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .min(8, 'Must be more than 8 characters')
        .required('Email is required!'),
      password: Yup.string()
        .min(4, 'Must be more than 4 characters')
        .required('Password is required!')
      }),
      onSubmit: (values) => {
        signUpAction(values.email, values.password);
        navigate("/");
      }
    });

  return (
    <form onSubmit={formik.handleSubmit} className='form'>
        <FormControl>
            <FormLabel>
                <h1>SignUP</h1>
            </FormLabel>
            <FormGroup>
                <TextField
                    margin='normal'
                    label='Use your email as login'
                    id='email'
                    type='email'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}

                <TextField
                    margin='normal'
                    type="password"
                    label=" Your password"
                    id='password'
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                />

                {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}


                <Button type={'submit'} variant={'contained'} color={'primary'}>
                    Submit
                </Button>
            </FormGroup>
        </FormControl>
    </form>
  )
}

export default SignUpPage;
