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
import { useForm } from "react-hook-form";
import Output from "@/Components/Output";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'

type FormData = {
  name: string
  email: string 
  make: Make
  vehicleAge: VehicleAge | null
  features: string[]
}

export default function ReactHookFormZod() {
  const [submittedData, setSubmittedData] = useState<any>(undefined)
  
  const { 
    textfieldLabels,
    autocompleteOptions,
    checkboxOptions,
    radioOptions 
  } = formTemplate


  const validationSchema = z.object({
    name: z.string().nonempty({message: "Nome é requerido"}),
    email: z.string().email({message: "Informe um email válido"}),
    make: z.string().nonempty({message: 'Escolha uma marca'}),
    vehicleAge: z.string({invalid_type_error: "Requerido"}),
    features: z.string().array().optional()
  }).transform(data => data as FormData)
  
  const { 
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema)
  })

  const submitForm = (data: FormData) => setSubmittedData({data})

  const handleErrors = (error: any) => console.log(error)

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

          <div>
            <TextField label={textfieldLabels.name} {...register("name")}/>
            <p>{errors.name?.message}</p>
          </div>
          
          <div>
            <TextField label={textfieldLabels.email} {...register("email")}/>
            <p>{errors.email?.message}</p>
          </div>

          <Autocomplete 
            options={autocompleteOptions} 
            renderInput={(params) => (
              <TextField {...params} label={textfieldLabels.make} {...register("make")}/>
            )}
          />
          <p>{errors.make?.message}</p>

          
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
          <p>{errors.vehicleAge?.message}</p>


          <FormLabel>Opcionais</FormLabel>

          {checkboxOptions.map(option => (
            <FormControlLabel 
              key={option.value}
              label={option.label}
              control={<Checkbox/>}
              value={option.value}
              {...register("features")}
            />
          ))}

          <Button 
            variant="contained" 
            onClick={handleSubmit(submitForm, handleErrors)}
          > 
            Submit
          </Button>
        </Box>
        
        <Box width={'50%'} height={500} display={'flex'} flexDirection={'column'}>
          <Output formData={submittedData}/>
        </Box>
      </Box>
    </Layout>
  )
}
