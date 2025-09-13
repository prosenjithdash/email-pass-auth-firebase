import React from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

const Register = () => {

    const auth = getAuth(app);


    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Email: ', email, 'Password: ', password)
        
        // Created user with email & password
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log('Created User: ',user)
            })
            .catch((error) => {
            console.log('error',error.message)
        })

    }
    return (
        <div className='bg-orange-300 border-2 rounded-xl border-black-700 p-3 m-3 w-2/4 mx-auto'>
            <h2 className="text-2xl text-center font-extrabold m-4">Please Register</h2>

            <form onSubmit={handleRegister}>
                <input type="email" placeholder='enter email' name="email" id="" className='border-2 w-3/4 border-red-600 mb-2 p-2' />
                <br />
                <input type="password" placeholder='enter password' name="password" id="" className='border-2 border-red-600 mb-2 p-2 w-3/4' />
                <br />
                <br />
                <input type="submit" value="Register" className='border-2 bg-orange-600 text-white font-bold border-red-600 p-2 rounded-lg w-full mb-4' />
            </form>
        </div>
    );
};

export default Register;