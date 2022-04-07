import "./styles.css";
import CircularProgress from "@mui/material/CircularProgress";

const Button = ({ label, disabled, type, isLoading ,onClick }: any) => {
  return (
    <div className="button_wrapper">
      <button className="button" disabled={disabled} type={type} onClick={onClick}>
        {!isLoading ? label : <CircularProgress color="inherit" size={20} />}
      </button>
    </div>
  );
};

export default Button;
