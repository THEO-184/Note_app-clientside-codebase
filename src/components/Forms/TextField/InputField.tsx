import React from 'react';

interface InputProps
    extends React.ComponentPropsWithoutRef<'input'> {}

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
