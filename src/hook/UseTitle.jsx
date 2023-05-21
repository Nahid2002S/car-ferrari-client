import React, { useEffect } from 'react';

const useTitle = title => {
    return (
        useEffect(()=>{
            document.title = `Car Ferrari | ${title}`
        },[title])
    );
};

export default useTitle;