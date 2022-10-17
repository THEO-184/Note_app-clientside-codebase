import React, { memo } from "react";
// local imports
import { useAppContext } from "../views/Home";
import Button from "./Forms/Buttons/Button";
import InputField from "./Forms/TextField/InputField";
import TextAreaField from "./Forms/TextField/TextAreaField";
import Box from "./layout/Box";
import Typography from "./layout/Typography";
import MarkComponent from "./MarkComponent";
import Markdown from "./Markdown";

const RightColumn = () => {
	const context = useAppContext();

	const hasUserType = context?.text.length !== 0 || context?.title.length !== 0;

	return (
		<Box className="col-span-8 p-4">
			<Box className="flex items-center justify-between text-white p-2 ">
				{!context?.isUserEditing && (
					<Button className="text-indigo-500" onClick={context?.handleAddNote}>
						Save
					</Button>
				)}
				<Button
					className={`text-rose-500 rounded-xl ${
						hasUserType ? "visible" : "invisible"
					}`}
					onClick={context?.handleEraseNotes}
				>
					Erase
				</Button>
			</Box>
			<Box className="w-full h-10 mb-4">
				<InputField
					type="text"
					value={context?.title}
					onChange={context?.handleChangeTitle}
					placeholder="Add title"
				/>
			</Box>
			<Box className="w-full">
				<TextAreaField
					value={context?.text}
					rows={10}
					onChange={context?.handleChangeText}
					placeholder="write your note here..."
				/>
			</Box>
			<Box className="bg-gray-200 h-full w-full p-4">
				<Typography as="h4" className="font-bold">
					{context?.title}
				</Typography>
				<Markdown children={context?.text!} component={MarkComponent} />
			</Box>
		</Box>
	);
};

const MemoizedRightColumn = memo(RightColumn);

export default MemoizedRightColumn;
