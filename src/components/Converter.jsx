import { Box, TextField, Typography, MenuItem, Select } from "@mui/material";

const Converter = ({
  label,
  amount,
  onAmountChange,
  selectCurrency = "usd",
  currencyOptions = [],
  onCurrencyChange,
}) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        height: "200px",
        width: "600px",
        display: "flex",
        border: 1,
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <Typography sx={{ margin: 4, fontSize: 25 }}>{label}</Typography>
      <TextField
        value={amount}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
        placeholder="amount"
        sx={{ display: "flex", position: "absolute", top: 100, left: 5 }}
      ></TextField>
      <Typography
        sx={{ position: "absolute", top: 30, right: 20, fontSize: 25 }}
      >
        currencyType
      </Typography>
      <Select sx={{ display: "flex", position: "relative" }}>
        <MenuItem>usd</MenuItem>
        <MenuItem>ird</MenuItem>
        <MenuItem>cad</MenuItem>
        {/* sx={{ display: "flex", position: "absolute", top: 150, left: 5 }}
        value={selectCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencyOptions.map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}*/}
      </Select>
    </Box>
  );
};

export default Converter;
