import Editor from '../components/CKEditor/Editor';
import DonationInfo from '../components/DonationInfo';

export default function PostEditor() {
    return (
        <div className='lg:flex
            w-full min-h-[85vh] px-10'>
            <div className="basis-[75%] flex flex-col w-full">
                <Editor/>
            </div>
            <div className="lg:pl-2 lg:mt-0 mt-2
                basis-[25%] w-full min-h-full ">
                <div className='h-full bg-white border border-gray-border flex justify-start py-3 px-3'>
                    <DonationInfo/>
                </div>
            </div>
        </div>
    )
};