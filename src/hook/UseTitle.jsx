import React, { useEffect } from 'react';

const useTitle = title => {
    return (
        useEffect(()=>{
            document.title = `${title} - Car Ferrari`
        },[title])
    );
};

export default useTitle;