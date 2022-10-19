import React from 'react';
import { PolymorphicComponentProp } from '../../utils/interfaces';

const Typography = <C extends React.ElementType = 'span'>({
    as,
    children,
    ...restProps
}: PolymorphicComponentProp<C>) => {
    const Component = as || 'h6';
    return <Component {...restProps}>{children}</Component>;
};

export default Typography;
