import { useArticlesClient } from '../useArticlesClient';

export default function ArticlesList() {
  const { data } = useArticlesClient();

  return (
    <>
      {data?.map((article) => {
        return (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p>Author: {article.author}</p>
          </div>
        );
      })}
    </>
  );
}
