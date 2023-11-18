/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Yup from 'yup'

export const signinSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Minimum 6 character').required('Required')
})