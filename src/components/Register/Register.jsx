import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {

    // error state

    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')


    const auth = getAuth(app);


    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Email: ', email, 'Password: ', password)
        
        // reset error
        setRegisterError('')

        // rest succuss
        setSuccess('')
        

        // Must be give 6 latter pass
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters.')
            return;
        }

        // Created user with email & password
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                toast('Successfully Registered.')
                setSuccess('Successfully Registered.')
                console.log('Created User: ',user)
            })
            .catch((error) => {
                setRegisterError(error.message)
                toast('Something is wrong, Please try again...')
            console.log('error',error.message)
        })

    }
    return (
        <div className='bg-orange-300 border-2 rounded-xl border-black-700 p-3 m-3 w-2/4 mx-auto'>
            <h2 className="text-2xl text-center font-extrabold m-4">Please Register</h2>

            <form onSubmit={handleRegister}>
                <input type="email" placeholder='enter email' name="email" id="" required className='border-2 w-3/4 border-red-600 mb-2 p-2' />
                <br />
                <input type="password" placeholder='enter password' name="password" required id="" className='border-2 border-red-600 mb-2 p-2 w-3/4' />
                <br />
                <br />
                <input type="submit" value="Register" className='border-2 bg-orange-600 text-white font-bold border-red-600 p-2 rounded-lg w-full mb-4' />
            </form>

            
            <div>
                {
                    registerError && <p className='text-2xl text-red-600 font-extrabold'>{registerError}</p>
                }
            </div>

            <div>
                {
                    success && <p className='text-2xl text-green-500 font-extrabold'>{ success}</p>
                }
            </div>
            


            <ToastContainer />
        </div>
        
    );
};

export default Register;