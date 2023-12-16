
"use client";

import React from 'react';

function CensoredButton( { hits } )
{
    const [ isCensored , setIsCensored ] = React.useState( true );

    return (
        <button onClick={ () => setIsCensored( !isCensored ) } className={ isCensored ? "censored" : undefined }>
            { hits }
        </button>
    );
}

export default CensoredButton;
