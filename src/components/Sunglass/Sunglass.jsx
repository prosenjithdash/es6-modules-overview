import React from 'react';
import add, { mul } from '../../Utils/Calculate';

const Sunglass = () => {

    const first = 78;
    const second = 89;
    const sum = add(first, second)
    const multi = mul(first, second);
    console.log(sum, multi)

    return (
        <div>
            
        </div>
    );
};

export default Sunglass;