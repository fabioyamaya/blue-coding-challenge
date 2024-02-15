import { Button, Input } from "@mui/material";
import React from "react";

export default function InputSearch({ inputValue, setInputValue, onSearch }) {
  return (
    <div>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        onClick={() => {
          onSearch(0);
        }}
      >
        Submit
      </Button>
    </div>
  );
}
