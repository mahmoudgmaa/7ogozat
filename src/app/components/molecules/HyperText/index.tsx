import { Link } from "react-router-dom";
import "./styles.css";

const HyperText = ({ text, link, toPath, ...props }: any) => {
  return (
    <div {...props} className="wrapper">
      <p>
        {text}
        <span>
          <Link to={toPath}>{link}</Link>
        </span>
      </p>
    </div>
  );
};

export default HyperText;
