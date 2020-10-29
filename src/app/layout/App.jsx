import React, {Component, Fragment} from 'react';
import { Container } from 'semantic-ui-react';

import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';

class App extends Component {
  render(){
    return (
      <div> 
          <Fragment>
          <NavBar/>
        <Container className="main">
        <EventDashboard/>
        </Container>
        </Fragment>
       
       
       
        </div>
         
    );
  }
  }
  

export default App;
