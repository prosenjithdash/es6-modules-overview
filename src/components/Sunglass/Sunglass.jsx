import React from 'react';
import add, { div, mul } from '../../Utils/Calculate';

const Sunglass = () => {

    const first = 78;
    const second = 89;
    const sum = add(first, second)
    const multi = mul(first, second);
    const div = div(first, second)
    console.log(sum, multi, div)

    return (
        <div>
            <h2>Sunglass Details.</h2>
        </div>
    );
};

export default Sunglass;