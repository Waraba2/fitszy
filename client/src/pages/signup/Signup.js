// import React, {useState} from 'react';
// import { Formik, Form } from 'formik';
// import { TextField } from './TextField';
// import * as Yup from 'yup';
// import Axios from "axios";
//
// export const Signup = () => {
//     const [registerFirstname, setRegisterFirstname] = useState("");
//     const [registerLastname, setRegisterLastname] = useState("");
//     const [age, setAge] = useState(0);
//     const [weight, setWeight] = useState(0);
//     const [email, setEmail] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");
//
//   const validate = Yup.object({
//     firstName: Yup.string()
//       .max(15, 'Must be 15 characters or less')
//       .required('Required'),
//     lastName: Yup.string()
//       .max(20, 'Must be 20 characters or less')
//       .required('Required'),
//     age: Yup.number()
//        .required("Required"),
//     weight: Yup.number()
//        .required("Required"),
//     email: Yup.string()
//       .email('Email is invalid')
//       .required('Email is required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 7 charaters')
//       .required('Password is required'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Password must match')
//       .required('Confirm password is required'),
//   })
//   return (
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         age: '',
//         weight: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//       }}
//       validationSchema={validate}
//       onSubmit={values => {
//         console.log(values)
//         Axios({
//             method: "POST",
//             data: {
//               firstName: values.firstName,
//               lastName: values.lastName,
//               age: values.age,
//               weight: values.weight,
//               email: values.email,
//               password: values.password,
//             },
//             withCredentials: true,
//             url: "http://localhost:5000/api/auth/signup",
//           }).then((res) => console.log(res));
//       }}
//     >
//       {formik => (
//         <div>
//           <h1>Sign Up</h1>
//           <Form>
//             <TextField label="First Name" name="firstName" type="text"/>
//             <TextField label="last Name" name="lastName" type="text"/>
//             <TextField label="Age" name="age" type="age" />
//             <TextField label="Weight" name="weight" type="weight" />
//             <TextField label="Email" name="email" type="email" />
//             <TextField label="Password" name="password" type="password" />
//             <TextField label="Confirm Password" name="confirmPassword" type="password" />
//             <button type="submit">Register</button>
//             <button type="reset">Reset</button>
//           </Form>
//         </div>
//       )}
//     </Formik>
//   )
// }