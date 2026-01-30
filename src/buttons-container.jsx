import styles from "./buttons-container.module.css"
const Container = ({onbuttonclick}) => {
  const buttons = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];
  return (
  <div className={styles["buttons-container"]}>
    {buttons.map((n,index)=> (<button key = {index } className = {styles["buttons"]} onClick={()=>onbuttonclick(n)}>{n}</button>
    ))}
  </div>
  )
}
export default Container;