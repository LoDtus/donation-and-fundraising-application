import { Input } from 'antd';
import { useEffect, useState } from 'react';

export default function DonationInfo() {
    const [plhOrganizer, setPlhOrganizer]   = useState("Nguyen Trung Long");
    const [plhEmail, setPlhEmail]           = useState("abc@gmail.com");
    const [plhNumber, setPlhNumber]         = useState("0123456789");

    const [organizer, setOrganizer] = useState(plhOrganizer);
    const [email, setEmail]         = useState(plhEmail);
    const [number, setNumber]       = useState(plhNumber);

    function previewDonation() {
        
    }

    function saveDonation() {
        // ...

        setOrganizer(organizer);
        setPlhEmail(email);
        setNumber(number);
    }

    function deleteDonation() {

    }

    return (
        <div className='w-full'>
            <span className='flex justify-center text-xl font-semibold mb-3'>Donation Information</span>
            <div className="flex items-center mb-1">
                <span className='mr-2 basis-[25%] font-semibold'>Organizer:</span>
                <Input
                    className='basis-[75%]'
                    placeholder={plhOrganizer}
                    onBlur={(e) => setOrganizer(e.target.value)}
                    />
            </div>
            <div className="flex items-center mb-1">
                <span className='mr-2 basis-[25%] font-semibold'>Email:</span>
                <Input
                    className='basis-[75%]'
                    placeholder={plhEmail}
                    onBlur={(e) => setEmail(e.target.value)}
                    />
            </div>
            <div className="flex items-center mb-1">
                <span className='mr-2 basis-[25%] font-semibold'>Number:</span>
                <Input
                    className='basis-[75%]'
                    placeholder={plhNumber}
                    onBlur={(e) => setNumber(e.target.value)}
                    />
            </div>

            <div className='flex flex-col mt-5'>
                <button className='rounded-md py-2 mb-1 font-semibold text-white bg-green
                    duration-200 hover:bg-soft-green active:scale-90'
                    onClick={() => previewDonation()}>Preview</button>
                <button className='rounded-md py-2 mb-1 font-semibold text-white bg-blue
                    duration-200 hover:bg-soft-green active:scale-90'
                    onClick={() => saveDonation()}>Save</button>
                <button className='rounded-md py-2 mb-1 font-semibold text-white bg-red
                    duration-200 hover:bg-soft-green active:scale-90'
                    onClick={() => deleteDonation()}>Delete</button>
            </div>
        </div>
    )
};