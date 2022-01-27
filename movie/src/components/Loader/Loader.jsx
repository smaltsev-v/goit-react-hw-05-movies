import { ImSpinner } from "react-icons/im";
import s from "./Loader.module.css";


export default function App ()  {
  return (
    <div className={s.loader}>
      <ImSpinner
        fill="#7f7c94"
          
        className="icon-spin"
      />
    </div>
  );
}