import Side from "./components/Side";

function Header({ isMobile, navigate }) {
  let [side, setSide] = useState(false);

  useEffect(() => {
    isMobile ? setSide(false) : setSide(true);
  }, [isMobile]);
  return (
    <>
      <div className="header">
        <div
          onClick={() => {
            setSide(!side);
          }}
          className={`ham-btn ${side ? "active" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="main-logo">Nari</div>
        {side == true ? (
          <Side
            isMobile={isMobile}
            side={side}
            navigate={navigate}
            setSide={setSide}
          />
        ) : null}
      </div>
    </>
  );
}

export default Header;
