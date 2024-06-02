import { useArticlesClient } from '../useArticlesClient';

type AuthorCounts = {
  [author: string]: number;
};

export default function AuthorsRating() {
  const { data } = useArticlesClient();

  const authors = data?.map((article) => article.author);

  if (!authors) {
    return <div>Loading...</div>;
  }

  const authorCounts = authors.reduce((counts, author) => {
    counts[author] = (counts[author] || 0) + 1;
    return counts;
  }, {} as AuthorCounts);

  return (
    <div>
      {Object.entries(authorCounts).map(([author, count]) => (
        <div key={author}>
          {author}: {count} articles
        </div>
      ))}
    </div>
  );
}
