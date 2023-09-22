import {useQuery} from "react-query";

function getNicerFormat(ds) {
  const d = new Date(ds);
  const m = d.toLocaleString('default', { month: 'long' });
  return `${m} ${d.getDate()}, ${d.getFullYear()}`;
}

async function getAllPosts() {
  const response = await fetch("https://7aha5s5ytznht4zwgd7zmhjwpa0zxydq.lambda-url.us-east-1.on.aws/");
  const text = await response.text();
  const _posts = JSON.parse(text)["posts"];
  _posts.forEach(_p => {
    console.log(_p)
    console.log(_p.PublishedAt);
    _p.PublishedAt = getNicerFormat(_p.PublishedAt)
    console.log(_p)
  })
  return _posts;
}

export function usePosts() {
  const { data: posts, isLoading, error } = useQuery('getAllPosts', getAllPosts);
  return {
    posts,
    isLoading,
    error
  }
}
