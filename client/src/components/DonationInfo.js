import { Input } from 'antd';
import { useState } from 'react';

export default function DonationInfo() {
    const [plhOrganizer, setPlhOrganizer] = useState("Nguyen Trung Long");
    const [plhEmail, setPlhEmail] = useState("abc@gmail.com");
    const [plhNumber, setPlhNumber] = useState("0123456789");

    return (
        <div className='w-full'>
            <span className='flex justify-center text-xl font-semibold mb-3'>Donation Information</span>
            <div className="flex items-center mb-1">
                <span className='mr-2 basis-[25%] font-semibold'>Organizer:</span>
                <Input
                    className='basis-[75%]'
                    placeholder={plhOrganizer}/>
            </div>
            <div className="flex items-center mb-1">
                <span className='mr-2 basis-[25%] font-semibold'>Email:</span>
                <Input
                    className='basis-[75%]'
                    placeholder={plhEmail}/>
            </div>
            <div className="flex items-center mb-1">
                <span className='mr-2 basis-[25%] font-semibold'>Number:</span>
                <Input
                    className='basis-[75%]'
                    placeholder={plhNumber}/>
            </div>
        </div>
    )
};