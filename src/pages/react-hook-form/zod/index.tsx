import { Autocomplete, Box, Button, Checkbox, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import Layout from "../../../Components/Layout";
import Link from "next/link";
import { formTemplate } from "@/helpers/formTemplate";
import { useForm } from "react-hook-form";
import Output from "@/Components/Output";
import { useState } from "react";


export default function ReactHookFormZod() {
  const { register, handleSubmit} = useForm()

  const [submittedData, setSubmittedData] = useState<any>(undefined)

  const { 
    textfieldLabels,
    autocompleteOptions,
    checkboxOptions,
    radioOptions 
  } = formTemplate

  const submitForm = (data: any) => {
    const features = []

    const featureLabels = checkboxOptions.map(option => option.label)

    for (const [key, value] of Object.entries(data)) {
      if (featureLabels.includes(key) && value === true) {
        const feature = checkboxOptions.find(option => option.label === key)

        features.push(feature?.value)
      }
    }

    setSubmittedData({data, features})
  }

  return (
    <Layout>
      <Link href={'/'}>
        <Button variant="outlined"> Voltar </Button>
      </Link>

      <Box mt={3} display={'flex'} justifyContent={'space-between'} gap={'16px'}>
        <Box width={'50%'} height={540} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
          <Typography variant="h5" component="h1" gutterBottom>
            React Hook Form + Zod
          </Typography>

          <TextField label={textfieldLabels.name} {...register("name")}/>

          <TextField label={textfieldLabels.email} {...register("email")}/>

          <Autocomplete 
            options={autocompleteOptions} 
            renderInput={(params) => (
              <TextField {...params} label={textfieldLabels.make} {...register("make")}/>
            )}
          />
          
          <RadioGroup {...register("vehicleAge")}>
            {radioOptions.map(({label, value}) => (
              <FormControlLabel 
                key={value}
                label={label} 
                value={value}
                control={<Radio/>}
              />
            ))}
          </RadioGroup>

          <FormLabel>Opcionais</FormLabel>

          {checkboxOptions.map(option => (
            <FormControlLabel 
              key={option.value}
              label={option.label}
              control={<Checkbox/>}
              {...register(option.label)}
            />
          ))}

          <Button variant="contained" onClick={handleSubmit(submitForm)}> Submit </Button>
        </Box>
        
        <Box width={'50%'} height={500} display={'flex'} flexDirection={'column'}>
          <Output formData={submittedData}/>
        </Box>
      </Box>
    </Layout>
  )
}
