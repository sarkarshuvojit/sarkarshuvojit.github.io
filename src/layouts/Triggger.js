const Triggger = ({ open }) => {
  return (
    <a href="#" className="menu_trigger">
      <span className="text">Menu</span>
      <span className="hamb" onClick={() => open()}>
        <span />
        <span />
        <span />
      </span>
    </a>
  );
};

export default Triggger;
