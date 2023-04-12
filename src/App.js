import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import imageUrls from './image_urls.json';

function App() {
  console.log(imageUrls);
  return (
    <>
      <Header title='Votes for mammals' />
      <Main heading="Who's you're favorite mammal?" imageUrls={imageUrls} />
      <Footer message='Thanks for voting! Created by B. Halliwell' />
    </>
  );
}

export default App;
