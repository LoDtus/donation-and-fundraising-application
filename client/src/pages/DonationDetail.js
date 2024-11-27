import Editor from '../components/CKEditor/Editor';
import DonationInfo from '../components/DonationInfo';

export default function DonationDetail() {
    const title = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus totam, facere doloribus nam, tempore numquam expedita labore molestiae fugiat obcaecati ducimus quidem, cum quaerat porro ullam saepe nulla facilis dolorum!";
    const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus totam, facere doloribus nam, tempore numquam expedita labore molestiae fugiat obcaecati ducimus quidem, cum quaerat porro ullam saepe nulla facilis dolorum!";

    return (
        <div className="w-full h-full px-10 flex">
            <div className="basis-[75%] w-full h-full pr-2">
                <p className="text-2xl font-semibold mb-3">{title}</p>
                <img className="w-full rounded-md"
                    src="https://i.pinimg.com/1200x/69/fa/8d/69fa8dfa28bd011fa0299c3058277a7f.jpg"
                    alt="" />
                <Editor/>
            </div>
            <div className="basis-[25%] w-full min-h-full bg-white border border-gray-border py-3 px-3">
                <DonationInfo/>
            </div>
        </div>
    )
};