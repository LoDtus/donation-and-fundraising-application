import DonationItem from "./DonationItem";

export default function DonationList() {
    let donationList = [];
    for (let i=0; i<30; i++) {
        donationList.push(
            <DonationItem
                key={i}
            />
        )
    }

    return (
        <div className="flex flex-wrap mt-5">
            {donationList}
        </div>
    )
};