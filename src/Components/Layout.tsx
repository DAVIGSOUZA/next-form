import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

export default function Layout({children}: {children: ReactNode}) {
  return (
    <Container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Box sx={{
        margin: '40px',
        width: '1024px',
      }}>
        {children}
      </Box>
    </Container>
  )
}
