import "../utils/generate-nonce";
import styles from "../styles/home.module.scss";

export default function Index() {
  const nonce = __webpack_nonce__;

  return <div className={styles.component}>Browser nonce {nonce}</div>;
}
