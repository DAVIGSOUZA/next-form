import { Box, Button, Container, Typography } from "@mui/material";
import Layout from "../Components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Typography variant="h5" component="h1" gutterBottom>
        Exemplo de formulário + validação
      </Typography>

      <Box height={150} mt={3} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
        <Link href={'/react-hook-form/zod'}>
          <Button variant="contained">
            React Hook Form + Zod
          </Button>
        </Link>

        <Link href={'/react-hook-form/yup'}>
          <Button variant="contained">
            React Hook Form + Yup
          </Button>
        </Link>

        <Link href={'/formik/yup'}>
          <Button variant="contained">
            Formik + Yup
          </Button>
        </Link>
      </Box>
    </Layout>
  )
}
