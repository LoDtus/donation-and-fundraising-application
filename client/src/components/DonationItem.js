export default function DonationItem() {
    return (
        <div className="basis-[20%]">
            <button className="donationItem mx-2 mb-4 rounded-md bg-white shadow-md
                duration-200 active:scale-90">
                <img
                    className="donationItem_thumbnail rounded-t-md duration-200"
                    src="https://i.pinimg.com/564x/0e/28/f1/0e28f101304a60429d0186367dd352a5.jpg"
                    alt="" />
                <div className="p-2">
                    <span>Donation 1</span>
                </div>
            </button>
        </div>
    )
};