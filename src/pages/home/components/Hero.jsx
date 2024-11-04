import VictorSvg from "../../../components/svg/VictorSvg";
import LogosSlide from "./LogosSlide";
import { FaFileDownload } from "react-icons/fa";

const HomeMain = () => {
  return (
    <div className="hero">
      <div>
        <VictorSvg />
      </div>
      <div className="hero-main-text">
        <h1>Victor Leman</h1>
        <h2>Développeur Web</h2>
        <p>
          Passionné par le code et les projets innovants, je crée des
          applications <strong style={{ color: "white" }}>Full stack</strong>{" "}
          performantes et intuitives en JavaScript, Node.js, React et Next.js.
        </p>

        <a class="download-cv" href="/cv-alternance-victor-leman.pdf" download>
          Télécharger CV
          <FaFileDownload className="download-icon" />
        </a>
      </div>

      <LogosSlide />
    </div>
  );
};

export default HomeMain;
