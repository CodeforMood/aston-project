import './custom-form.css'
import { Button, FormControl, FormGroup, FormLabel, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Dispatch } from 'redux';
import * as Yup from 'yup';
import { PageName, validationFormik } from '../../utils/const'
import { AuthAction } from '../../types/auth';
import { historyActions } from '../../types/history';
import { favouritesActions } from '../../types/favourites';

type CustomFormProps = {
  pageName: string,
  action: (login: string, password: string) => (dispatch: Dispatch<AuthAction | favouritesActions | historyActions>) => void
}


function CustomForm({pageName, action}: CustomFormProps) {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .min(8, validationFormik.minSymbol)
        .required(validationFormik.requiredEmail),
      password: Yup.string()
        .min(8, validationFormik.minSymbol)
        .required(validationFormik.requiredPassword)
      }),
      onSubmit: (values) => {
        action(values.email, values.password)
      }
    });

  return (
    <form onSubmit={formik.handleSubmit} className='form' style={{display: "flex", height: 'calc(100vh - 171px)' , justifyContent: 'start'}}>
        <FormControl>
            <FormLabel>
                <h1>{pageName === PageName.SignUp? PageName.SignUp: PageName.SignIn}</h1>
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

export default CustomForm