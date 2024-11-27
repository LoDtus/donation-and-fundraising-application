import { Link } from "react-router-dom";

export default function DonationList() {
    let donationList = [];
    for (let i=0; i<30; i++) {
        if (i === 0) {
            donationList.push(
                <Link to="/editor" key={0}
                    className="basis-[20%] px-2 pb-4">
                    <button className="w-full h-full
                        flex flex-col justify-center items-center bg-white fill-gray text-gray
                        rounded-md border-4 border-dashed border-gray
                        duration-200 hover:border-black hover:fill-black hover:text-black active:scale-90">
                        <svg className="w-[40px]"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                        </svg>
                        <span className="font-semibold ml-2 text-xl">Add Your Donation</span>
                    </button>
                </Link>
            )
        } else {
            donationList.push(
                <Link to="/detail" key={i+1}
                    className="basis-[20%] px-2 pb-4">
                    <button className="donationItem rounded-md bg-white shadow-md
                        duration-200 active:scale-90">
                        <img
                            className="donationItem_thumbnail rounded-t-md duration-200"
                            src="https://i.pinimg.com/564x/0e/28/f1/0e28f101304a60429d0186367dd352a5.jpg"
                            alt="" />
                        <div className="py-2 px-3 text-left">
                            <span className="line-clamp-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit at sed nobis, eius, illo totam voluptatem delectus eum molestias saepe error, amet commodi impedit odit blanditiis aliquam! Odit, optio nihil!</span>
                            <div className="flex items-center">
                                <div className="grow">
                                    <span className="font-semibold">User 1</span>
                                    <div className="flex">
                                        <svg className="w-[20px] mr-2"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3l-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 91.9c-11.1 0-20.1 9-20.1 20.1l0 6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.7 4c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-2.2-.7-4.3-1.5-6.4-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1l0 6.4c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1l0-5.5c5.3-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4l0-6.3c0-11.1-9-20.1-20.1-20.1zM48 352l16 0c19.5 25.9 44 47.7 72.2 64L64 416l0 32 192 0 192 0 0-32-72.2 0c28.2-16.3 52.8-38.1 72.2-64l16 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48z"/>
                                        </svg>
                                        <span>30K VND</span>
                                    </div>
                                </div>
                                {/* <div className="mx-1">
                                    <svg className="w-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                                    </svg>
                                </div>
                                <div className="w-[14px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/>
                                    </svg>
                                </div> */}
                            </div>
                        </div>
                    </button>
                </Link>
            )
        }
    }

    return (
        <div className="flex flex-wrap mt-5">
            {donationList}
        </div>
    )
};