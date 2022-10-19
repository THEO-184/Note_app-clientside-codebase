import React from 'react';

<<<<<<< HEAD
interface InputProps
    extends React.ComponentPropsWithoutRef<'input'> {}
=======
interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}
>>>>>>> b8a57b80755f21a2a6f71bcfb2bef489f19e5b9d

const InputField = (props: InputProps) => {
    return (
        <input
            {...props}
            className="w-full block h-full p-5 border-2 border-gray-300 focus:border-gray-300 focus:outline-none"
            autoFocus
        />
    );
};

export default InputField;
