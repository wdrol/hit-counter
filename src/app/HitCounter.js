
import React from 'react';
import CensoredButton from './CensoredButton';
import { readFile , writeFile } from '../helpers/file-helpers';

function HitCounter()
{
    const path = '/src/database.json';
    const text = readFile( path );
    const obj  = JSON.parse( text );

    obj.hits++;

    writeFile( path , JSON.stringify( obj ) );

    return (
        <p>
            You are visitor number:
            <span> </span> <CensoredButton hits={ obj.hits } />
        </p>
    );
}

export default HitCounter;
