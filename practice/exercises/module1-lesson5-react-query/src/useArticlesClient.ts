import axios from 'axios';
import { useQuery } from '@tanstack/react-query'

interface Article {
  id: number;
  author: string;
  title: string;
  content: string;
}

const getArticles = async () => {
  const { data } = await axios.get('http://localhost:3000/api/data/articles')
  return data.articles
};

export function useArticlesClient() {
  return useQuery<Article[]>({
    queryKey: ['articles'],
    queryFn: getArticles
  })
}
