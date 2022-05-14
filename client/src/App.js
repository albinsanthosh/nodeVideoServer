import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Dashboard from './components/Dasboard/Dashboard';

import SignIn from "./components/Form/SignIn/SignIn";
import SignUp from "./components/Form/SignUp/SignUp";
import Upload from "./components/Upload/Upload";
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import SignOut from './components/SignOut/SignOut';

function App() {
  const Wrapper = (props) => {
  const params = useParams();
  return < VideoPlayer {...{...props, match: {params}}} /> 
  }
  return (
    <Routes>
      <Route exact path="/" element={< Dashboard />} />
      <Route exact path="/video/:videoTitle" element={< Wrapper />}/>
      <Route exact path="/signIn" element={< SignIn />} />
      <Route exact path="/signUp" element={< SignUp />} />
      <Route exact path="/upload" element={< Upload />} />
      <Route exact path="/signOut" element={< SignOut />} />
    </Routes>
  );
}

export default App;
