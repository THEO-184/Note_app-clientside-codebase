import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

<<<<<<< HEAD
const MarkComponent = ({
    value,
    language,
}: {
    value: any;
    language: any;
}) => {
=======
const MarkComponent = ({ value, language }: { value: any; language: any }) => {
>>>>>>> b8a57b80755f21a2a6f71bcfb2bef489f19e5b9d
    return (
        <SyntaxHighlighter language={language ?? null} style={docco}>
            {value ?? ''}
        </SyntaxHighlighter>
    );
};

export default MarkComponent;
