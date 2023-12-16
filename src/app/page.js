
import React from 'react';
import HitCounter from './HitCounter';
import { readFile , writeFile } from '../helpers/file-helpers';

function Home()
{
    return (
        <main>
            <h1>Welcome!</h1>
            <HitCounter />
        </main>
    );
}

export default Home;
