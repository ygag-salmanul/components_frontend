import styles from "./Footer.module.scss"
const Footer=()=>{
    return(
        <div className={styles["footer"]}>
            <p >© Powered by YOUGotaGift.com Ltd.- <span className={styles["footer-text"]}> Privacy Policy Terms of Use</span></p>
        </div>
    )
}
export default Footer