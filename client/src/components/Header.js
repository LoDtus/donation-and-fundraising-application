import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import accessSlice from '../slices/accessSlice';

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function signIn() {
        dispatch(accessSlice.actions.setSignIn(true));
    }

    function signUp() {
        dispatch(accessSlice.actions.setSignUp(true));
    }

    return (
        <header className="w-full flex justify-center">
            <div className="w-full flex justify-between items-center px-10 py-4 mb-2 font-semibold">
                <Link to='/' className='container-header !w-fit
                    duration-200 hover:text-dark-gray active:scale-90'>
                    Project: Donation and Fundraising Application
                </Link>
                <div className='flex'>
                    <Button
                        className="w-fit px-8 font-semibold mr-2"
                        type="primary"
                        onClick={() => signIn()}>
                        Sign In
                    </Button>
                    <Button
                        className="w-fit px-8 font-semibold"
                        onClick={() => signUp()}>
                        Sign Up
                    </Button>
                </div>
            </div>
        </header>
    )
};