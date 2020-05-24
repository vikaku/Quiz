import React from 'react';
import Question from './components/Question/Question'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';


class App extends React.Component {
  state = {

  }

  


  render(){


    return (
      <div className="App">
      <div className = 'heading'>
          <h1 className ='display-1'><p class="text-primary"> Quiz : Javascript And React</p></h1>

      </div>
     
       <Question />
      </div>
    );

  }
  
}

export default App;
