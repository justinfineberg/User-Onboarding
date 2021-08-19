// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'Username must be 3 characters long'),
    email: yup
        .string()
        .trim()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required'),
    terms: yup.boolean()
})

export default formSchema

// // Here goes the schema for the form
// import * as yup from 'yup';

// const formSchema = yup.object().shape({
//     username: yup
//         .string()
//         .trim()
//         .required('Username is required')
//         .min(3, 'Username must be 3 characters long'),
//     email: yup
//         .string()
//         .trim()
//         .email('Must be a valid email address')
//         .required('Email is required'),
//     role: yup
//         .string()
//         .oneOf(['instructor', 'student', 'alumni', 'tl'], 'Role is required'),
//     civil: yup
//         .string()
//         .oneOf(['married', 'single'], 'Civil status is required'),
//     hiking: yup.boolean(),
//     reading: yup.boolean(),
//     coding: yup.boolean()
// })

// export default formSchema