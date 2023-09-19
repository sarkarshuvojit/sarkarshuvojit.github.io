import {useQuery} from "react-query";

async function getAllPosts() {
  const response = await fetch("https://7aha5s5ytznht4zwgd7zmhjwpa0zxydq.lambda-url.us-east-1.on.aws/");
  const text = await response.text();
  return JSON.parse(text)["posts"];
}

export function usePosts() {
  const { data: posts, loading, error } = useQuery('getAllPosts', getAllPosts);
  console.log("[usePosts]", "Got response", posts);
  return {
    posts,
    loading,
    error
  }
}