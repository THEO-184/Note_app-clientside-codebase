import React from 'react';

<<<<<<< HEAD
interface ButtonProps
    extends React.ComponentPropsWithoutRef<'button'> {}
=======
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}
>>>>>>> b8a57b80755f21a2a6f71bcfb2bef489f19e5b9d

const Button = (props: ButtonProps) => {
    return <button {...props} />;
};

export default Button;
