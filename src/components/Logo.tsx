import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="text-2xl font-semibold no-underline text-slate-50">
      Book Explorer
    </Link>
  );
}

export default Logo;
