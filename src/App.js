import React  from 'react';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Layouts from './Components/Layouts/Layouts';

class App extends React.Component {
  render() {
    return (
      <div >
        <Layouts>
          <BurgerBuilder />
        </Layouts>
          
      </div>
    )
  }
}

export default App
