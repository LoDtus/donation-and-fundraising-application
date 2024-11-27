import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="w-full flex justify-center">
            <div className="w-full flex items-center pl-10 py-4 mb-2 font-semibold">
                <Link to='/' className='container-header !w-fit
                    duration-200 hover:text-dark-gray active:scale-90'>
                    Project: Donation and Fundraising Application
                </Link>
            </div>
        </header>
    )
};