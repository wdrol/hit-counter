
import React from 'react';
import Button from './CensoredButton';
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
            <span> </span> <Button hits={ obj.hits } />
        </p>
    );
}

export default HitCounter;
