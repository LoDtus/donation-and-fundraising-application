import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getSignIn } from '../redux/selectors'
import { Input, Button, Checkbox } from 'antd';
import accessSlice from "../slices/accessSlice";

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const dispatch  = useDispatch();
    const status    = useSelector(getSignIn);

    function openSignUp() {
        dispatch(accessSlice.actions.setSignUp(true));
        dispatch(accessSlice.actions.setSignIn(false));
    }

    return (
        <div className={status ? 'top-0 left-0 flex items-center' : 'hidden'}>
            <div className="w-full h-full fixed top-0 left-0 bg-[#52565c]/60 z-10"
                onClick={() => dispatch(accessSlice.actions.setSignIn(false))}></div>
            <div className="flex flex-col bg-white p-6 z-20 rounded-md fixed translate-x-[-50%] translate-y-[80%]">
                <span className='flex justify-center font-xl font-bold mb-4 text-2xl'>Sign In</span>
                <div className="flex items-center mb-1">
                    <label className='w-[100px]' htmlFor="username-signin">Username: </label>
                    <Input
                        className='basis-[70%]'
                        name="username-signin" id="username-signin"
                        placeholder="Your username"
                        onBlur={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="flex items-center mb-2">
                    <label className='w-[100px]' htmlFor="password-signin">Password: </label>
                    <Input.Password
                        className='basis-[70%]'
                        name="password-signin" id="password-signin"
                        placeholder="Your password"
                        onBlur={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex justify-between items-center mb-2 h-8">
                    <Checkbox onChange={(e) => setRememberMe(e.target.checked)}>Remember me</Checkbox>
                    <span className='text-[#0b57d4] duration-200 hover:cursor-pointer hover:text-[#307fff] active:scale-90'>Forgot password?</span>
                </div>

                <Button
                    className="w-full py-5 mb-2 font-semibold"
                    type="primary">
                    Sign In
                </Button>
                <div className="flex justify-between">
                    <span>Don't have an account?</span>
                    <span className='text-[#0b57d4] ml-2 duration-200 hover:cursor-pointer hover:text-[#307fff] active:scale-90'
                        onClick={() => openSignUp()}>Create an account</span>
                </div>
            </div>
        </div>
    )
};