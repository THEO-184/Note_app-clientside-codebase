import React from 'react';

<<<<<<< HEAD
interface TextAreaProps
    extends React.ComponentPropsWithoutRef<'textarea'> {}
=======
interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {}
>>>>>>> b8a57b80755f21a2a6f71bcfb2bef489f19e5b9d

const TextAreaField = (props: TextAreaProps) => {
    return (
        <textarea
            {...props}
            className=" w-full block p-5 border-2 border-gray-300 focus:border-gray-300 focus:outline-none "
        />
    );
};

export default TextAreaField;
