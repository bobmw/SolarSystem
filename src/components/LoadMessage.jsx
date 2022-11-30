import { Box, CircularProgress, Typography } from "@mui/material";
import { Html } from "@react-three/drei";

export default function LoadMessage() {
  return (<>
    <color attach="background" args={["#232323"]} />
    <Html fullscreen>
      <Box
        display='flex'
        height='100%'
        width='100%'
        alignItems='center'
        gap={2}
        justifyContent='center'
        color='white'
      >
        <CircularProgress />
        <Typography>Carregando</Typography>
      </Box>
    </Html>
  </>
  );
}