import React, { memo } from 'react';

const PostItem = ({id, title}) => {
    return(
        <div key={id}>{title}</div>
    )
};

export default memo(PostItem);
