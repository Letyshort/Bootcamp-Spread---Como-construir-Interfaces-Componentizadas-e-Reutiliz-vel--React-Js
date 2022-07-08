import React from 'react';
import App from './App';
import { ResetCSS } from './globals/Resetcss';
import GithubProvider from './providers/githubprovider';

const Providers = () => {

    return(
    <main>

    <GithubProvider>
        <ResetCSS/>
        <App/>
    </GithubProvider>
    </main>
    );
};

export default Providers;