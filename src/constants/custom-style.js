export const customStyles = {
  control: (provided) => ({
    ...provided,
    boxShadow: "none",
    padding: "0.2rem",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "none",
    },
    border: "1px solid #cbd5e1",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "oklch(50.8% 0.118 165.612)" : "white",
    color: state.isFocused ? "white" : "black",

    border: "none",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "oklch(50.8% 0.118 165.612)",
      color: "white",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderColor: "white",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  }),
};
