import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import ArtikelDetail from "./ArtikelDetail";
import QnaSection from "./QnaSection";
import ListProduct from "./ListProduct";




import './custom.css';


createRoot(document.getElementById("root")).render(
  <div>
    
      <Container>
      <ArtikelDetail/>
      <QnaSection/>
      <ListProduct/>
      </Container>
      
    


  </div>
);
