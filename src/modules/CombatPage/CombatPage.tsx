import reactLogo from "./img/react.svg";
import s from "./CombatPage.module.scss";

const CombatPageModule = () => {
  return (
    <div className={s.logo_container}>
      {/* {tapValue && <p className="value_output">+10</p>} */}
      <img
        // onClick={() => {
        //   setTapValue(true);
        //   setTimeout(() => {
        //     setTapValue(false);
        //   }, 100);
        // }}
        src={reactLogo}
        className={s.logo}
        alt="React logo"
      />
    </div>
  );
};

export default CombatPageModule;
