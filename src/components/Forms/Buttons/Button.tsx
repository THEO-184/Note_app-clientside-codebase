import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

const Button = (props: ButtonProps) => {
    return <button {...props} />;
};

export default Button;
