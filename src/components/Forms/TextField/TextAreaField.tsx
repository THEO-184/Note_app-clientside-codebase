import React from "react";

interface TextAreaProps extends React.ComponentPropsWithoutRef<"textarea"> {}

const TextAreaField = (props: TextAreaProps) => {
	return (
		<textarea
			{...props}
			className=" w-full block p-5 border-2 border-gray-300 focus:border-gray-300 focus:outline-none "
		/>
	);
};

export default TextAreaField;
