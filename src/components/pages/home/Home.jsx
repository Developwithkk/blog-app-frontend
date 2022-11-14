import { useEffect,useState  } from "react";
import { useLocation } from "react-router";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";
import axios from 'axios'
import Stock from "../../Stock/Stock";



export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
      console.log(res)
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <Stock/>
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}