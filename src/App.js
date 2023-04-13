import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import React, { Component } from 'react';
import Main from './components/main';
import Footer from './components/footer';
import Data from './beastdata.json';
import SelectedBeast from './components/mammalmodal';

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    beasts: Data,
    selectedBeast: {},
    display: false
  }
};
display = (name) => {
  const selected = Data.find(beast => beast.title === name);
  console.log('selected', selected);
  this.setState({ selectedBeast: selected, display:true });
};
onHide = () => {
  this.setState({ display: false })
  console.log('onHide called');
}

render() {
  return (
    <div>
      <Header title="Horned Beast" />
      <Main allBeasts={this.state.beasts} display={this.display}/>
      <SelectedBeast
        beast={this.state.selectedBeast}
        display={this.state.display}
        onHide={this.onHide}
      />
      <Footer closer="Thanks for voting! Created by B. Halliwell" />
    </div>
  )
}
};
export default App;


// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/header';
// import Main from './components/main';
// import Footer from './components/footer';
// import allBeasts from './beastdata.json'; // rename image_urls.json to beastdata.json. Rename imageUrls to allBeasts
// import mammalModal from './components/mammalmodal.js';

// function App() {
//   return (
//     <>
//       <Header title='Votes for mammals' />
//       <Main allBeasts={allBeasts} />
//       <Footer message='Thanks for voting! Created by B. Halliwell' />
//     </>
//   );
// }

// export default App;
