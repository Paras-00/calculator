import styles from "./display.module.css"

const Display = ({displayvalue}) => {
  return  <input type='text' className={styles.display}  value={displayvalue} readOnly></input>
}
export default Display;