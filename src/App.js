import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import imageUrls from './image_urls.json';

function App() {
  console.log(imageUrls);
  return (
    <>
      <Header title='Mammal Judge' />
      <Main heading="Who's you're favorite Mammal?" imageUrls={imageUrls} />
      <Footer message='Let us know your favorite!; Created by B. Halliwell' />
    </>
  );
}

export default App;
