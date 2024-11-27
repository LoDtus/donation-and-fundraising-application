import Editor from '../components/CKEditor/Editor';
import DonationInfo from '../components/DonationInfo';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;
const props = {
	name: "file",
	multiple: true,
	action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
	onChange(info) {
		const { status } = info.file;
		if (status !== "uploading") {
			console.log(info.file, info.fileList);
		}
		if (status === "done") {
			message.success(`${info.file.name} file uploaded successfully.`);
		} else if (status === "error") {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
	onDrop(e) {
		console.log("Dropped files", e.dataTransfer.files);
	},
};

export default function PostEditor() {
    return (
		<div
			className="lg:flex
            w-full min-h-[85vh] px-10"
		>
			<div className="basis-[75%] flex flex-col w-full">
				<Dragger className='input-thumbnail mb-2 !p-0'
                    {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined/>
                    </p>
                    <p className="ant-upload-text">
                        Click or drag thumbnail to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited
                        from uploading company data or other banned files.
                    </p>
				</Dragger>
				<Editor/>
			</div>
			<div className="lg:pl-2 lg:mt-0 mt-2
                basis-[25%] w-full min-h-full">
				<div className="h-full bg-white border border-gray-border flex justify-start py-3 px-3">
					<DonationInfo/>
				</div>
			</div>
		</div>
	);
};