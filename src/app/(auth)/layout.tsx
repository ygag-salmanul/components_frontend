import { ReactNode } from "react";
import "./auth.scss";

interface PropsInterface {
  logo: string;
  children: ReactNode;
}

const LoginLayout = ({ logo, children }: PropsInterface) => {
  return (
    <main className="loginlayout">
      {/* <div className="background-container"> */}
        <img
            className="progressive-img"
            src="/images/Register-image.png"
            alt=""
          />
      {/* </div> */}
      <div className="form-section">
        <section className="">{children}</section>
      </div>
    </main>
  );
};
export default LoginLayout;
