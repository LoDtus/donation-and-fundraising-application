import Editor from '../components/CKEditor/Editor';

export default function PostEditor() {
    return (
        <div className='w-full h-full px-10 flex'>
            <div className="basis-[75%] w-full h-full pr-2 border">
                <Editor/>
            </div>
            <div className="basis-[25%] w-full h-full bg-white rounded-md">
                
            </div>
        </div>
    )
};