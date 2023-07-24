import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from "@mui/material";
import Layout from "../../../Components/Layout";
import Link from "next/link";
import { Make, VehicleAge, formTemplate } from "@/helpers/formTemplate";
import Output from "@/Components/Output";
import { useState } from "react";
import * as yup from 'yup'
import ErrorMsg from "@/Components/ErrorMsg";
import { useFormik } from "formik";

type FormData = {
  name: string
  email: string
  make: Make
  vehicleAge: VehicleAge
  features: string[]
}

export default function FormikYup() {
  const [submittedData, setSubmittedData] = useState<any>(undefined)

  const {
    textfieldLabels,
    autocompleteOptions,
    checkboxOptions,
    radioOptions
  } = formTemplate


  const validationSchema = yup.object({
    name: yup.string().required("Nome é requerido"),
    email: yup.string().email("Informe um email válido").required("Nome é requerido"),
    make: yup.string().required('Escolha uma marca'),
    vehicleAge: yup.string().required("Requerido"),
    features: yup.array().of(yup.string())
  })

  const formik = useFormik<FormData>({
    initialValues: {
      name: '',
      email: '',
      make: 'fiat',
      vehicleAge: '0km',
      features: []
    },
    validationSchema,
    onSubmit: (data) => setSubmittedData(data)
  })

  const submitForm = () => formik.handleSubmit()

  return (
    <Layout>
      <Link href={'/'}>
        <Button variant="outlined"> Voltar </Button>
      </Link>

      <Box mt={3} display={'flex'} justifyContent={'space-between'} gap={'16px'}>
        <Box width={'50%'} height={540} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
          <Typography variant="h5" component="h1" gutterBottom>
            Formik + Yup
          </Typography>

          <div>
            <TextField
              label={textfieldLabels.name}
              name='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
            <ErrorMsg
              msg={formik.touched.name ? formik.errors.name : undefined}
            />
          </div>

          <div>
            <TextField
              label={textfieldLabels.email}
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            <ErrorMsg
              msg={formik.touched.email ? formik.errors.email : undefined}
            />
          </div>

          <Autocomplete
            options={autocompleteOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                name="make"
                label={textfieldLabels.make}
                value={formik.values.make}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.make && Boolean(formik.errors.make)}
              />
            )}
          />
          <ErrorMsg msg={formik.touched.make ? formik.errors.make : undefined} />


          <RadioGroup
            value={formik.values.vehicleAge}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {radioOptions.map(({ label, value }) => (
              <FormControlLabel
                key={value}
                label={label}
                value={value}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
          <ErrorMsg
            msg={
              formik.touched.vehicleAge ? formik.errors.vehicleAge : undefined
            }
          />


          <FormLabel>Opcionais</FormLabel>

          {checkboxOptions.map(option => (
            <FormControlLabel
              key={option.value}
              label={option.label}
              control={<Checkbox />}
              name={'features'}
              value={option.value}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          ))}

          <Button
            variant="contained"
            onClick={submitForm}
          >
            Submit
          </Button>
        </Box>

        <Box width={'50%'} height={500} display={'flex'} flexDirection={'column'}>
          <Output formData={submittedData} />
        </Box>
      </Box>
    </Layout>
  )
}
