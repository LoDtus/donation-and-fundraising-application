import { Input, InputNumber, Button } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPreview } from '../redux/selectors';

export default function DonationInfo() {
    const isPreview = useSelector(getPreview);
    const [plhOrganizer, setPlhOrganizer]   = useState("Nguyen Trung Long");
    const [plhEmail, setPlhEmail]           = useState("abc@gmail.com");
    const [plhNumber, setPlhNumber]         = useState("0123456789");
    const [organizer, setOrganizer] = useState(plhOrganizer);
    const [email, setEmail]         = useState(plhEmail);
    const [number, setNumber]       = useState(plhNumber);
    const [minDonation, setMinDonation] = useState(0);
    const [donation, setDonation]   = useState(0);

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
            <div className={isPreview ? 'hidden' : null}>
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

            <div className={isPreview ? null : 'hidden'}>
                <div className='flex items-center mb-2'>
                    <img
                        className='rounded-full aspect-square w-[50px] mr-2'
                        src="https://i.pinimg.com/564x/0e/28/f1/0e28f101304a60429d0186367dd352a5.jpg"
                        alt="Thumbnail"/>
                    <div className='flex flex-col'>
                        <span className='font-semibold'>Nguyen Trung Long</span>
                        <span>nguyentrunglong.150903@gmail.com</span>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>Amount:</span>
                    <InputNumber
                        id="value-vnPay"
                        className="grow"
                        suffix="VND"
                        defaultValue={minDonation}
                        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                        onChange={(e) => setDonation(e.target.value)}
                    />
                </div>
                <Button
                    className="w-full font-semibold my-2"
                    type="primary"
                    // onClick={() => paywith_VNPay()}
                    >
                    Donate by VNPay
                </Button>
                <Button
                    className="w-full font-semibold"
                    type=""
                    // onClick={() => paywith_VNPay()}
                    >
                    Donate by QR Code
                </Button>
            </div>
        </div>
    )
};