import * as React from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  const [check, setCheck] = React.useState(true);
  const handlePage = (index) => {
    console.log(index);
    if (index === 'signup') {
      setCheck(false);
    }
    else if (index === 'signin') {
      setCheck(true);
    }
  }
  if (check) {
    return <SignIn handlePage={handlePage} />
  }
  else
    return <SignUp handlePage={handlePage} />

}

export default App;
