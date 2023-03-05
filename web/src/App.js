import './App.css';
import UserFB from './components/UserFB';
import FeedPost from './components/FeedPost';
import { useState } from 'react';

function App() {
  const [logedin,setLogedin] = useState(false)
  
  return (
    <div className="mainApp">
      <UserFB logedin={logedin} setLogedin={setLogedin} />
      {logedin ? <FeedPost/>:<></>}
    </div>
  );
}

export default App;
