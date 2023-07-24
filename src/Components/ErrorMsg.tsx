import { Typography } from "@mui/material";

export default function ErrorMsg({msg}: {msg?: string}) {
  return (
    <Typography variant="body2" component="p" color={'red'} gutterBottom>
        {msg}
    </Typography>
  )
}






