import * as React from 'react';
import { Tooltip } from 'react-tooltip'
import IconButton from '@mui/material/IconButton';
import { FaCartShopping } from "react-icons/fa6";

export default function LoadingIconButton() {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });
  return (
    <Tooltip title="Click to see loading">
      <IconButton onClick={() => setLoading(true)} loading={loading}>
        <FaCartShopping />
      </IconButton>
    </Tooltip>
  );
}
