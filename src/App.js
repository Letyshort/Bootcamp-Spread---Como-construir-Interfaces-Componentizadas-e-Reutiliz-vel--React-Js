import React from 'react';
import Layout from './Components/Layout';
import NoSearch from './Components/nosearch';
import Profile from './Components/Profile';
import Repositories from './Components/repositeries';
import useGithub from './hooks/githubhooks'

const App = () => {
  const {githubState} = useGithub();

  return( 
  
      <Layout>
        {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ):(
          <>
            <Profile/>
            <Repositories/>
          </>
        )}
        </>
        ):(
          <NoSearch/>
        )};
        
        
      
      
      </Layout>
   
   
  
  );
};

export default App;
