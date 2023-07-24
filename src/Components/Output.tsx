import { Typography } from "@mui/material";
import { useRenderCount } from "@uidotdev/usehooks";


export default function Output({formData}: {formData: any}) {
  const renderCount = useRenderCount();

  return (
    <>
      <Typography variant="h5" component="h2" gutterBottom>
          Output
      </Typography>

      <div>
        <div>
          <Typography variant="h6" component="p" gutterBottom>
              Form Data:
          </Typography>

          {JSON.stringify(formData)}
        </div>

        <Typography variant="h6" component="p" gutterBottom>
            Render Count: {renderCount}
        </Typography>
      </div>
    </>
  )
}






