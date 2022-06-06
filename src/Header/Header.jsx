import s from "./Header.module.css"

const Header = () => {
    return (
        <div className="header">
            <div className="container">

            <div className={s.header}>
          <div className={s.btnContainer}>
            <div className={runtimeBtnClassName} onClick={(e) => onBtnClick(e)}>
              {runtimeSVG} Runtime
            </div>
            <div
              className={constructorBtnClassName}
              onClick={(e) => onBtnClick(e)}
            >
              {constructorSVG} Constructor
            </div>
          </div>
        </div>

            </div>
            </div>
    )
}