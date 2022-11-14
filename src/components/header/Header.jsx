import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Trading </span>
        <span className="headerTitleLg">Stocks Of The Day</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80"
        alt="trading"
      />
    </div>
  );
}