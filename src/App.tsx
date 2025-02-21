import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "@mui/material"

import theme from "./styles/Theme"
import MainPage from "./pages/MainPage"
import AboutMe from "./pages/AboutMe"
import PageNotFound from "./components/PageNotFound"


function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
