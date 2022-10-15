import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const MarkComponent = ({ value, language }: { value: any; language: any }) => {
	return (
		<SyntaxHighlighter language={language ?? null} style={docco}>
			{value ?? ""}
		</SyntaxHighlighter>
	);
};

export default MarkComponent;
