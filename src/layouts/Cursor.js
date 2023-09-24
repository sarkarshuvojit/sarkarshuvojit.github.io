import { Fragment } from "react";

const Cursor = () => {
  return (
    <Fragment>
      <div
        className="frenify-cursor cursor-outer"
        data-default="yes"
        data-link="yes"
        data-slider="yes"
      >
        <span className="fn-cursor" />
      </div>
      <div
        className="frenify-cursor cursor-inner"
        data-default="yes"
        data-link="yes"
        data-slider="yes"
      >
        <span className="fn-cursor">
          <span className="fn-left" />
          <span className="fn-right" />
        </span>
      </div>
    </Fragment>
  );
};

export default Cursor;
