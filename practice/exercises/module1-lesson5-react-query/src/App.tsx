import ArticlesList from './components/ArticlesList';
import AuthorsRating from './components/AuthorsRating';
import './App.css';

// Do podwojnego GET moge stworzyc komponent articicles oraz authors. Wyswietlic authorow z najwieksza iloscia artykulow, top 3
// Do POST moge wykorzystac dodawanie nowego artykulu

function App() {
  return (
    <>
      <AuthorsRating />
      <ArticlesList />
    </>
  );
}

export default App;
