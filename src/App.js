import { useEffect, useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { Button, Typography } from "@mui/material";

function App() {
  const [sum, setSum] = useState(0);
  const [addend1, setAddend1] = useState(0);
  const [addend2, setAddend2] = useState(0);

  const updateAddend1 = (event) => setAddend1(Number(event.target.value));
  const updateAddend2 = (event) => setAddend2(Number(event.target.value));

  useEffect(() => {
    setSum(Number(addend1) + Number(addend2));
  }, [addend1, addend2]);

  const reset = () => {
    setAddend1(0);
    setAddend2(0);
  };

  return (
    <div className="app">
      <Box className="calculator">
        <Box className="title">
          <Typography noWrap variant="h2" component="div">
            Simple Calculator
          </Typography>
        </Box>
        <Box className="addition">
          <TextField
            className="addend"
            id="addend1"
            label="Addend"
            value={addend1}
            onChange={updateAddend1}
            type="number"
            size="medium"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <LocalHospitalIcon fontSize="large" />
          <TextField
            className="addend"
            id="addend2"
            label="Addend"
            type="number"
            value={addend2}
            onChange={updateAddend2}
            size="medium"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className="sum"
            disabled
            id="standard-disabled"
            label="Sum"
            value={sum}
            variant="filled"
            size="medium"
          />
        </Box>
        <Button className="reset" variant="contained" onClick={reset}>
          Reset
        </Button>
      </Box>
    </div>
    //   <div className="app">
    //     <div className="calculator">
    //       <input
    //         type="number"
    //         value={addend1}
    //         onChange={updateAddend1}
    //         className="addend"
    //       />
    //       <input
    //         type="number"
    //         value={addend2}
    //         onChange={updateAddend2}
    //         className="addend"
    //       />
    //       <div className="sum">{Number(addend1) + Number(addend2)}</div>
    //     </div>
    //   </div>
  );
}

export default App;
