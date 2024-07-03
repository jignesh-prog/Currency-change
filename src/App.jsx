import UseCurrency from "./Hooks/UseCurrency";
import { useState } from "react";
import { Button, Container } from "@mui/material";
import Converter from "./components/Converter";
function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("use");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = UseCurrency(from);
  const options = object.keys(CurrencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo(to));
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "grey",
      }}
    >
      <Converter
        label="From"
        amount={amount}
        onAmountChange={(amount) => setAmount(amount)}
        selectCurrency={from}
        currencyOptions={options}
        onCurrencyChange={(currency) => setAmount(amount)}
        sx={{}}
      />
      <Button
        variant="contained"
        size="large"
        sx={{
          width: "200px",
          justifySelf: "center",
          margin: "auto",
        }}
        onClick={swap}
      >
        swap
      </Button>
      <Converter
        label="to"
        amount={convertedAmount}
        selectCurrency={from}
        currencyOptions={options}
        onCurrencyChange={(currency) => setTo(currency)}
      />
      <Button
        onClick={convert}
        variant="contained"
        size="large"
        color="success"
        sx={{ justifySelf: "left" }}
      >
        Convert amount {from} to {to}{" "}
      </Button>
    </Container>
  );
}

export default App;
