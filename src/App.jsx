import { Box, TextField, Typography } from "@mui/material";
import "./App.css";
import gif2 from './assets/gif2.mp4'
import gif1 from './assets/gif3.mp4'


function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", margin: "40px" }}
    >
      <div className="column">
        <div class="wordart rainbow">
          <span class="text">Генератор кавер леттерів</span>
        </div>
        <div class="wordart superhero">
          <span class="text">Для Дашуні</span>
        </div>
      </div>
      
      <div className="inputs">
      {/* <img src="patron.webm" alt="" /> */}
      
      <div className="row">
      <video width="500" height="300" loop autoPlay muted>
      <source src={gif2} type="video/mp4"/>
     </video>
     <video width="500" height="300" loop autoPlay muted>
      <source src={gif1} type="video/mp4"/>
     </video>
      </div>
      
        <TextField
          label="Назва компанії"
          id="outlined-basic"
          variant="outlined"
        />
      </div>
    </div>
  );
}

export default App;
