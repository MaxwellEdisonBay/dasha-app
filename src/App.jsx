import { Alert, Button, ButtonGroup, Snackbar, TextField } from "@mui/material";
import "./App.css";
import jsPDF from "jspdf";
import gif2 from "./assets/gif2.mp4";
import gif1 from "./assets/gif3.mp4";
import { useRef, useState } from "react";
import CopyIcon from "@mui/icons-material/CopyAll";

import PDFIcon from "@mui/icons-material/PictureAsPdf";
import { getHRText, getMarketingText } from "./text";
function App() {
  const [position, setPosition] = useState("marketing");
  const [company, setCompany] = useState("");
  const [manager, setManager] = useState("HR Manager");
  const [errorOpen, setErrorOpen] = useState(false);
  const [copyOpen, setCopyOpen] = useState(false);
  const [generatedText, setGeneratedText] = useState("");
  const isFieldError = company === "" || manager === "";
  const pdfContainerRef = useRef(null);

  const prepareText = () => {
    return position === "marketing"
      ? getMarketingText(manager, company)
      : getHRText(manager, company);
  };

  const onCopyClick = () => {
    if (isFieldError) {
      setErrorOpen(true);
      return;
    }
    navigator.clipboard.writeText(prepareText());
    setCopyOpen(true);
  };

  const onPDFClick = () => {
    if (isFieldError) {
      setErrorOpen(true);
      return;
    }
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });
    setGeneratedText(prepareText().replaceAll("\n", "<br/>"));
    console.log(generatedText.split("\n"));
    doc.html(pdfContainerRef.current, {
      async callback(doc) {
        await doc.save(`${company}_Daria_Dryha_Cover_Letter`);
      },
    });
  };
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", margin: "40px" }}
    >
      <div className="wordart-texts">
        <div class="wordart rainbow">
          <span class="text">Генератор кавер леттерів</span>
        </div>
        <div class="wordart superhero">
          <span class="text">Для Дашуні</span>
        </div>
      </div>

      <div className="inputs">
        <div className="gifs-wrapper">
          <video  height="250" loop autoPlay muted>
            <source src={gif2} type="video/mp4" />
          </video>
          <video  height="250" loop autoPlay muted>
            <source src={gif1} type="video/mp4" />
          </video>
        </div>
        <ButtonGroup
          aria-label="outlined primary button group"
          disableElevation
        >
          <Button
            variant={position === "marketing" ? "contained" : "outlined"}
            onClick={() => setPosition("marketing")}
          >
            Marketing
          </Button>
          <Button
            variant={position === "hr" ? "contained" : "outlined"}
            onClick={() => setPosition("hr")}
          >
            HR
          </Button>
        </ButtonGroup>
        <div className="input-fields">
          <TextField
            label="Назва компанії"
            id="outlined-basic"
            variant="outlined"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <TextField
            label="Ім'я менеджера"
            id="outlined-basic"
            variant="outlined"
            value={manager}
            onChange={(e) => setManager(e.target.value)}
          />
        </div>
        <div className="result-buttons">
          <Button
            variant="contained"
            startIcon={<CopyIcon />}
            onClick={onCopyClick}
          >
            Копія
          </Button>
          <Button
            variant="contained"
            startIcon={<PDFIcon />}
            onClick={onPDFClick}
          >
            Завантажити PDF
          </Button>
        </div>
        <div className="" hidden={true}>
          <div className="test" >
            <div
            ref={pdfContainerRef}
              style={{
                width:"340px",
                textAlign: "justify",
                // height:"297px",
                margin: "30px 45px 30px 45px",
                "page-break-after": "always",
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: generatedText }}
                style={{ fontSize: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={errorOpen}
        autoHideDuration={1000}
        onClose={() => setErrorOpen(false)}
      >
        <Alert severity="warning" sx={{ width: "100%" }}>
          Дашуня, заповни усі поля!
        </Alert>
      </Snackbar>
      <Snackbar
        open={copyOpen}
        autoHideDuration={1000}
        onClose={() => setCopyOpen(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Скопійовано!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
