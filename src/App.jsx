import { Box, Stack } from '@mui/material';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { Home } from './pages/Home';

function App() {


  return (
    <Box>
      <NavBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <SideBar/>
      <Home/>
      </Stack>
      <Footer/>
    </Box>
  );
}

export default App;
