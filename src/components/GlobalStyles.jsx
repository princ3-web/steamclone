import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const GlobalStyles = () => {
  return (
    <MuiGlobalStyles styles={{
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },

    }} />
  );
};

export default GlobalStyles;