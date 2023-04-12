import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import allBeasts from './beastdata.json'; // rename image_urls.json to beastdata.json. Rename imageUrls to allBeasts
import Modal from './components/mammalmodal.js';

function App() {
  return (
    <>
      <Header title='Votes for mammals' />
      <Main heading="Who's you're favorite mammal? Click the image to enlarge the details." allBeasts={allBeasts} />
      <Footer message='Thanks for voting! Created by B. Halliwell' />
    </>
  );
}

export default App;
