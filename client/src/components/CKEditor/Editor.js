import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useDispatch, useSelector } from 'react-redux';
import 'ckeditor5/ckeditor5.css';
import './style.css';

import {
	DecoupledEditor,
	AccessibilityHelp,
	Alignment,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	Base64UploadAdapter,
	BlockQuote,
	Bold,
	CloudServices,
	Essentials,
	FindAndReplace,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	ImageBlock,
	ImageCaption,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SelectAll,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	Title,
	Underline,
	Undo
} from 'ckeditor5';
import { getContent, getNew, getPreview } from '../../redux/selectors';
import postSlice from '../../slices/postSlice';

export default function App() {
	const editorContainerRef 	= useRef(null);
	const editorMenuBarRef 		= useRef(null);
	const editorToolbarRef 		= useRef(null);
	const editorRef				= useRef(null);
	const previewRef			= useRef(null);
	const [initialData, setInitialData] 	= useState('');
	const [isLayoutReady, setIsLayoutReady] = useState(false);
	const [editorReady, setEditorReady] 	= useState(false);
	const [previewReady, setPreviewReady] 	= useState(false);

	const dispatch 	= useDispatch();
	const content	= useSelector(getContent);
	const isNew		= useSelector(getNew);
	const isPreview = useSelector(getPreview);

	const editorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'findAndReplace',
				'|',
				'heading',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'subscript',
				'superscript',
				'removeFormat',
				'|',
				'specialCharacters',
				'horizontalLine',
				'link',
				'insertImage',
				'insertImageViaUrl',
				'mediaEmbed',
				'insertTable',
				'highlight',
				'blockQuote',
				'|',
				'alignment',
				'|',
				'bulletedList',
				'numberedList',
				'outdent',
				'indent'
			],
			shouldNotGroupWhenFull: false
		},
		plugins: [
			AccessibilityHelp,
			Alignment,
			AutoImage,
			AutoLink,
			Autosave,
			BalloonToolbar,
			Base64UploadAdapter,
			BlockQuote,
			Bold,
			CloudServices,
			Essentials,
			FindAndReplace,
			GeneralHtmlSupport,
			Heading,
			Highlight,
			HorizontalLine,
			ImageBlock,
			ImageCaption,
			ImageInsert,
			ImageInsertViaUrl,
			ImageResize,
			ImageToolbar,
			ImageUpload,
			Indent,
			IndentBlock,
			Italic,
			Link,
			LinkImage,
			List,
			MediaEmbed,
			Paragraph,
			PasteFromOffice,
			RemoveFormat,
			SelectAll,
			SpecialCharacters,
			SpecialCharactersArrows,
			SpecialCharactersCurrency,
			SpecialCharactersEssentials,
			SpecialCharactersLatin,
			SpecialCharactersMathematical,
			SpecialCharactersText,
			Strikethrough,
			Subscript,
			Superscript,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
			Title,
			Underline,
			Undo
		],
		balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph'
				},
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3'
				},
				{
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					class: 'ck-heading_heading4'
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5'
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6'
				}
			]
		},
		htmlSupport: {
			allow: [
				{
					name: /^.*$/,
					styles: true,
					attributes: true,
					classes: true
				}
			]
		},
		image: {
			toolbar: ['toggleImageCaption', 'imageTextAlternative', '|', 'resizeImage']
		},
		initialData: initialData,
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file'
					}
				}
			}
		},
		menuBar: {
			isVisible: true
		},
		placeholder: 'Type or paste your content here!',
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
		}
	};

	useEffect(() => {
		setIsLayoutReady(true);
		return () => setIsLayoutReady(false);
	}, []);

	useEffect(() => {
		if (isNew && isLayoutReady && editorRef.current.setData) {
			editorRef.current.setData('');
		}
	}, [isNew]);

	useEffect(() => {
		if (!isPreview && isLayoutReady && editorRef.current.setData) {
			editorRef.current.setData(content);
		}
	}, [editorReady, content]);

	useEffect(() => {
		if (isPreview && previewRef && previewReady) {
			const editableElement = previewRef.current.ui.view.editable.element;
            editableElement.contentEditable = false;
			previewRef.current.setData(content);
		}
	}, [previewReady, content]);

	return (
		<div className='w-full'>
			<div className="main-container">
				<div className="editor-container editor-container_document-editor" ref={editorContainerRef}>
					{isPreview ? <div></div> :
						<div>
							<div className="editor-container__menu-bar" ref={editorMenuBarRef}></div>
							<div className="editor-container__toolbar my-1" ref={editorToolbarRef}></div>
						</div>
					}
					<div className="editor-container__editor-wrapper w-full
						bg-white border border-gray-border">
						<div className="editor-container__editor">
							<div className=''>
								{isLayoutReady&& !isPreview && (
									<CKEditor
										ref={editorRef}
										onReady={editor => {
											editorRef.current = editor;
											editorToolbarRef.current.appendChild(editor.ui.view.toolbar.element);
											editorMenuBarRef.current.appendChild(editor.ui.view.menuBarView.element);
											setEditorReady(true);
										}}
										onAfterDestroy={() => {
											if (editorToolbarRef.current)
												Array.from(editorToolbarRef.current.children).forEach(child => child.remove());
											if (editorMenuBarRef.current)
												Array.from(editorMenuBarRef.current.children).forEach(child => child.remove());
										}}
										editor={DecoupledEditor}
										config={editorConfig}
										data={''}
										onBlur={(event, editor) => {
											dispatch(postSlice.actions.setContent(editor.getData()));
										}}
									/>
								)}
								{isLayoutReady && isPreview && (
									<CKEditor
										ref={previewRef}
										onReady={editor => {
											previewRef.current = editor;
											setPreviewReady(true);
										}}
										editor={DecoupledEditor}
										config={editorConfig}
										data={''}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};