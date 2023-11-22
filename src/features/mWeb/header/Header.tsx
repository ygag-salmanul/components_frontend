import Link from "next/link";
import styles from "./Header.module.scss";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Header = () => {
  return (
    <div className={styles["header-main"]}>
      <Link href={"/"} className={styles["header-logo"]}>
      <img src="./images/company-logo.png" alt="logo" />
      </Link>
      <div className={styles["header-links"]}>
        <Link href={"/"}>العربية</Link>
        <Link className={styles["menu-icon"]} href={"/"}><MenuRoundedIcon/></Link>
      </div>

    </div>
  );
};
export default Header;
