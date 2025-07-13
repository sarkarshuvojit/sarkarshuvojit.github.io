import React from "react";

const News = ({ posts }) => {
  console.log("Render News")

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
            {!posts && <p>Loading...</p>}
            <ul className="modal_items" data-from="blog" data-count={posts?.length || 6}>
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
                    <p>{p.PublishedAt}</p>
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

function ArticleSkeleton(idx) {
  return <div className="item modal_item" data-index={idx}>
      <div className="img_holder">
        <img src="img/thumb/square.jpg" alt="image" />
        <div className="abs_img skeleton-box" style={{height: "100%"}}/>
      </div>
      <div className="title_holder">
        <p className="skeleton-box" style={{width: "100px"}}></p>
        <h3>
          <a href="#">gg
          </a>
        </h3>
      </div>
    </div>

}

export default News
