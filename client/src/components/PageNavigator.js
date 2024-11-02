import { Pagination } from 'antd';
import { useState } from 'react';

export default function PageNavigator() {
    const [page, setPage] = useState(1);
    const movePage = (page) => {
        console.log(page);
        setPage(page);
    };

    return (
        <div className="">
            <Pagination
                align="center"
                total={58}
                defaultCurrent={1}
                current={page}
                onChange={movePage}
            />
        </div>
    )
};