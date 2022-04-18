import { Divider } from "../Common/Divider";
import { Cards } from "./Cards";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { MainAvatar } from "./MainAvatar";
import { MainCurrent } from "./MainCurrent";
import { MainTitle } from "./MainTitle";

const Presentation = () => {
  return (
    <div className="container">
      <MainAvatar />
      <h1>Hola 👋🏻, soy Agustín Aguilera </h1>
      <MainTitle />
      <MainCurrent text="Actualmente: Full Stack Developer en Codea IT" />
      <Divider />
      <h5>Mis trabajos</h5>
      <Cards />
      <Divider />
      <h5>Conectemos</h5>
      <Contact />
      <Footer />
      <style jsx>{`
        .container {
          margin-top: 5rem;
          padding: 0 1rem;
        }

        h1,
        h4,
        h5 {
          font-size: 2rem;
          color: #37352f;
          margin: 0;
          margin-top: 0.6em;
        }
        h4 {
          font-size: 1.3rem;
        }
        p {
          line-height: 1.6;
          margin-bottom: 0;
        }
        h5 {
          font-size: 1.6em;
          margin: 0;
        }
        @media screen and (min-width: 768px) {
          .container {
            padding: 15px 90px;
          }
        }
      `}</style>
    </div>
  );
};

export default Presentation;
