import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function ErrorAlert({ err }) {
  return (
    <Stack sx={{ width: "50%", margin: "0 auto" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {err?.message || "Unable to fetch weather data."}
      </Alert>
    </Stack>
  );
}
