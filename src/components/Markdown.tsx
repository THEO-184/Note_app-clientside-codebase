import React from 'react';

// local imports
import ReactMarkdown from 'react-markdown';

interface Props {
    children: string;
    component: any;
}

const Markdown = ({ children, component }: Props) => {
    return (
        <ReactMarkdown
            className="text-xs sm:text-base"
            children={children}
            components={{
                code: component,
            }}
        />
    );
};

export default Markdown;
