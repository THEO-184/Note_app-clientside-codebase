import React from "react";

// local imports
import ReactMarkdown from "react-markdown";

interface Props {
	children: string;
	component: any;
}

const Markdown = ({ children, component }: Props) => {
	return (
		<ReactMarkdown
			children={children}
			components={{
				code: component,
			}}
		/>
	);
};

export default Markdown;
