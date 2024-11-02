import { Input } from 'antd';

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

export default function SearchBar() {
    return (
        <div className='w-[50%]'>
            <Search
                placeholder="Search here"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
        </div>
    )
};