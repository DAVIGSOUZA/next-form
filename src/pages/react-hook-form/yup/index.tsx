import { Autocomplete, Box, Button, Checkbox, Container, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import Layout from "../../../Components/Layout";
import Link from "next/link";
import { formTemplate } from "@/helpers/formTemplate";
import { useRenderCount } from "@uidotdev/usehooks";


export default function ReactHookFormZod() {
  const renderCount = useRenderCount();

  const { 
    textfieldLabels,
    autocompleteOptions,
    checkboxOptions,
    radioOptions 
  } = formTemplate

  return (
    <Layout>
      <Link href={'/'}>
        <Button variant="outlined"> Voltar </Button>
      </Link>

      <Box mt={3} height={500} display={'flex'} justifyContent={'space-between'} gap={'16px'}>
        <Box width={'50%'} height={500} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
          <Typography variant="h5" component="h1" gutterBottom>
            React Hook Form + Zod
          </Typography>
          <TextField label={textfieldLabels.name}/>
          <TextField label={textfieldLabels.email}/>
          <Autocomplete 
            options={autocompleteOptions} 
            renderInput={(params) => (
              <TextField {...params} label={textfieldLabels.make}/>
            )}
          />
          
          <RadioGroup>
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
          <RadioGroup>
          {checkboxOptions.map(({label, value}) => (
              <FormControlLabel 
                key={value}
                label={label} 
                value={value}
                control={<Checkbox/>}
              />
            ))}
          </RadioGroup>
        </Box>
        
        <Box width={'50%'} height={500} display={'flex'} flexDirection={'column'}>
          <Typography variant="h5" component="h2" gutterBottom>
              Output
          </Typography>

          <div>
            <Typography variant="h6" component="p" gutterBottom>
                Form Data:
            </Typography>

            <Typography variant="h6" component="p" gutterBottom>
                Render Count: {renderCount}
            </Typography>
          </div>
        </Box>
      </Box>
    </Layout>
  )
}
