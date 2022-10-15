import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { useAppContext } from "../views/Home";

const RightColumn = () => {
	const context = useAppContext();

	return (
		<div className="col-span-8 p-4">
			<div className="w-full h-10 mb-4">
				<input
					type="text"
					autoFocus
					value={context?.title}
					onChange={context?.handleChangeTitle}
					className="w-full block h-full p-5 border-2 border-gray-300 focus:border-gray-300 focus:outline-none"
					placeholder="Add title"
				/>
			</div>
			<div className="w-full">
				<textarea
					defaultValue={context?.text}
					className=" w-full block p-5 border-2 border-gray-300 focus:border-gray-300 focus:outline-none "
					rows={10}
					onChange={context?.handleChangeText}
					placeholder="write your note here..."
				></textarea>
			</div>
			<div className="bg-gray-200 h-full w-full p-4">
				<h4 className="font-bold">{context?.title}</h4>
				<ReactMarkdown
					children={context?.text!}
					components={{
						code: MarkComponent as any,
					}}
				/>
			</div>
		</div>
	);
};

const MemoizedRightColumn = memo(RightColumn);

const MarkComponent = ({ value, language }: { value: any; language: any }) => {
	return (
		<SyntaxHighlighter language={language ?? null} style={docco}>
			{value ?? ""}
		</SyntaxHighlighter>
	);
};

export default MemoizedRightColumn;
