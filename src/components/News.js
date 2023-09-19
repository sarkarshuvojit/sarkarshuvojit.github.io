import { useState } from "react";
import {usePosts} from "../services/posts";
import NewsModalbox from "./NewsModalbox";

const News = () => {
  const [load, setLoad] = useState(false);
  const [hiddenItem, setHiddenItem] = useState(true);
  const [focusValue, setFocusValue] = useState("");
  const { posts, loading, error } = usePosts();
  const focusValueChange = () => {
    if (!hiddenItem) {
      setFocusValue("No more articles found");
    }
  };

  if (loading) {
    <section id="news">
      <p>Loading...</p>
    </section>
  }


  if (error) {
    console.error("Error:", error);
  }

  if (!posts) {
    console.info("[News] Posts:", posts);
    return <section id="news">
      <div className="container">
        <p>No Posts found</p>
      </div>
    </section>;
  }

  return (
    <section id="news">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">I write about tech</h3>
            <h3 className="title">Articles</h3>
          </div>
          {/* /Main Title */}
          {/* Blog List */}
          <div className="resumo_fn_blog_list">
            <ul className="modal_items" data-from="blog" data-count={posts.length}>
              {posts && posts.map((p, idx) => <li key={idx}>
                <div
                  className="item modal_item"
                  onClick={() => {
                    window.open(p.OgUrl, "_blank")
                  }}
                  data-index={idx}
                >
                  <div className="img_holder">
                    <img src="img/thumb/square.jpg" alt="image" />
                    <div className="abs_img" style={{ backgroundImage: `url('${p.OgImageUrl}')` }} />
                  </div>
                  <div className="title_holder">
                    <p>September 22, 2021</p>
                    <h3>
                      <a href="#">
                        {p.Title}
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
            )}
            </ul>
            <div className="clearfix" />
            {/*<div className="load_more">
              <a
                href="#"
                data-done="Done"
                className={load ? "loading" : ""}
                data-no="No more articles found"
                onClick={(e) => loadValueSet(e)}
                onFocus={(e) => focusValueChange()}
              >
                <span className="text">
                  {hiddenItem
                    ? "Load More Articles"
                    : focusValue
                    ? focusValue
                    : "Done"}
                </span>
                <span className="fn__pulse">
                  <span />
                  <span />
                  <span />
                </span>
              </a>
            </div> */}
          </div>
          {/* /Blog List */}
        </div>
      </div>
    </section>
  );
};

export default News;
