import { ImSpinner } from "react-icons/im";
import s from "./Loader.module.css";


export default function App ()  {
  return (
    <div className={s.loader}>
      <ImSpinner
        fill="#3f51b5"
          
        className="icon-spin"
      />
    </div>
  );
}