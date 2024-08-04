import reactLogo from "./img/react.svg";
import s from "./CombatPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { increment } from "../../store/sliced/incrementToClick.slice";

const CombatPageModule = () => {
  useSelector((state: RootState) => state.clickToEarn.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.logo_container}>
        {/* {tapValue && <p className="value_output">+10</p>} */}
        <img
          onClick={() => dispatch(increment())}
          src={reactLogo}
          className={s.logo}
          alt="React logo"
        />
      </div>
    </>
  );
};

export default CombatPageModule;

// onClick={() => {
//   setTapValue(true);
//   setTimeout(() => {
//     setTapValue(false);
//   }, 100);
// }}
