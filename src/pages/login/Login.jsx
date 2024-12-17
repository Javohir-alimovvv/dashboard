import React, { useState } from 'react'
import "./Login.scss"
import { useStore } from '../../zustend'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
    const onLogin = useStore(state => state.login);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData)

        axios
            .post(`https://dummyjson.com/auth/login`, user)
            .then(res => {
                toast.success('Successfully')
                onLogin(res.data.accessToken)
                navigate("/layout/home")
            })
            .catch(err => {
                toast.error('Username or password is incorrect')
            })
            .finally(()=> setLoading(false))
    }

    return (
        <>

            <div className='login'>
                <div className='login__card'>
                    <h2 className='login__card__title'>Logn In</h2>
                    <form onSubmit={handleLogin} className='login__card__form' action="">
                        <input name='username' className='login__card__form__input' placeholder='Username' type="text" />
                        <input name='password' className='login__card__form__input' placeholder='Password' type="password" />
                        <button disabled={loading} className='login__card__form__btn'>{loading ? "Loading..." : "Sig In"}</button>
                    </form>
                </div>
                <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
            </div>

        </>
    )
}

export default Login