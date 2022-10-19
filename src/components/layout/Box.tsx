import React from 'react';
import { PolymorphicComponentProp } from '../../utils/interfaces';

const Box = <C extends React.ElementType = 'span'>({
    as,
    children,
    ...restProps
}: PolymorphicComponentProp<C>) => {
    const Component = as || 'div';
    return <Component {...restProps}>{children}</Component>;
};

export default Box;
