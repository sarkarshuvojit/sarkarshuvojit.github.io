import { useState } from "react";
import NewsModalbox from "./NewsModalbox";

const News = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);
  const [load, setLoad] = useState(false);
  const [hiddenItem, setHiddenItem] = useState(true);
  const [focusValue, setFocusValue] = useState("");
  const modalValueSet = (value) => {
    setModal(true);
    setModalValue(value);
  };
  const loadValueSet = (e) => {
    e.preventDefault();
    if (hiddenItem) {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
        setHiddenItem(false);
      }, 2000);
    }
  };
  const focusValueChange = () => {
    if (!hiddenItem) {
      setFocusValue("No more articles found");
    }
  };

  return (
    <section id="news">
      {modal && <NewsModalbox close={setModal} value={modalValue} />}
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">News &amp; Tips</h3>
            <h3 className="title">Latest Articles</h3>
          </div>
          {/* /Main Title */}
          {/* Blog List */}
          <div className="resumo_fn_blog_list">
            <ul className="modal_items" data-from="blog" data-count={5}>
              <li>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(1)}
                  data-index={1}
                >
                  <div className="img_holder">
                    <img src="img/thumb/square.jpg" alt="image" />
                    <div className="abs_img" data-bg-img="img/blog/1.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>September 22, 2021</p>
                    <h3>
                      <a href="#">
                        Five Solid Evidences Attending Design Is Good For Your
                        Career Development.
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">September 22, 2021</p>
                    <h3 className="fn__title">
                      Five Solid Evidences Attending Design Is Good For Your
                      Career Development.
                    </h3>
                    <div className="img_holder">
                      <img src="img/thumb/square.jpg" alt="image" />
                      <div className="abs_img" data-bg-img="img/blog/1.jpg" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(2)}
                  data-index={2}
                >
                  <div className="img_holder">
                    <img src="img/thumb/square.jpg" alt="image" />
                    <div className="abs_img" data-bg-img="img/blog/2.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>September 17, 2021</p>
                    <h3>
                      <a href="#">
                        Ten Mind-Blowing Reasons Why Design Is Using This
                        Technique For Exposure.
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">September 17, 2021</p>
                    <h3 className="fn__title">
                      Ten Mind-Blowing Reasons Why Design Is Using This
                      Technique For Exposure.
                    </h3>
                    <div className="img_holder">
                      <img src="img/thumb/square.jpg" alt="image" />
                      <div className="abs_img" data-bg-img="img/blog/2.jpg" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(3)}
                  data-index={3}
                >
                  <div className="img_holder">
                    <img src="img/thumb/square.jpg" alt="image" />
                    <div className="abs_img" data-bg-img="img/blog/3.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>September 04, 2021</p>
                    <h3>
                      <a href="#">
                        I Will Tell You The Truth About Design In The Next 60
                        Seconds.
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">September 04, 2021</p>
                    <h3 className="fn__title">
                      I Will Tell You The Truth About Design In The Next 60
                      Seconds.
                    </h3>
                    <div className="img_holder">
                      <img src="img/thumb/square.jpg" alt="image" />
                      <div className="abs_img" data-bg-img="img/blog/3.jpg" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(4)}
                  data-index={4}
                >
                  <div className="img_holder">
                    <img src="img/thumb/square.jpg" alt="image" />
                    <div className="abs_img" data-bg-img="img/blog/4.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>August 18, 2021</p>
                    <h3>
                      <a href="#">
                        {`What You Know About Design And What You Don't
                                  Know About Design.`}
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">August 18, 2021</p>
                    <h3 className="fn__title">
                      {` What You Know About Design And What You Don't
                                Know About Design.`}
                    </h3>
                    <div className="img_holder">
                      <img src="img/thumb/square.jpg" alt="image" />
                      <div className="abs_img" data-bg-img="img/blog/4.jpg" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
                  </div>
                </div>
              </li>
              <li className={!hiddenItem ? "" : "be_animated"}>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(5)}
                  data-index={5}
                >
                  <div className="img_holder">
                    <img src="img/thumb/square.jpg" alt="image" />
                    <div className="abs_img" data-bg-img="img/blog/5.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>August 15, 2021</p>
                    <h3>
                      <a href="#">
                        Forgive Yourself for Not Being Perfect. Then Do It Again
                        Tomorrow.
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">August 15, 2021</p>
                    <h3 className="fn__title">
                      Forgive Yourself for Not Being Perfect. Then Do It Again
                      Tomorrow.
                    </h3>
                    <div className="img_holder">
                      <img src="img/thumb/square.jpg" alt="image" />
                      <div className="abs_img" data-bg-img="img/blog/5.jpg" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
                  </div>
                </div>
              </li>
              <li className={!hiddenItem ? "" : "be_animated"}>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(6)}
                  data-index={6}
                >
                  <div className="img_holder">
                    <img src="img/thumb/square.jpg" alt="image" />
                    <div className="abs_img" data-bg-img="img/blog/6.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>August 01, 2021</p>
                    <h3>
                      <a href="#">
                        Why Decorating Your Home Is Good for Your Mental Health
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">August 01, 2021</p>
                    <h3 className="fn__title">
                      Why Decorating Your Home Is Good for Your Mental Health
                    </h3>
                    <div className="img_holder">
                      <img src="img/thumb/square.jpg" alt="image" />
                      <div className="abs_img" data-bg-img="img/blog/6.jpg" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="clearfix" />
            <div className="load_more">
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
            </div>
          </div>
          {/* /Blog List */}
        </div>
      </div>
    </section>
  );
};

export default News;
