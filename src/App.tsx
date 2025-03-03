import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "@mui/material"

import theme from "./styles/Theme"
import MainPage from "./pages/MainPage"
import AboutMe from "./pages/AboutMe"
import PageNotFound from "./components/PageNotFound"
import ScrollToTop from "./components/ScrollToTop"
import { Toaster } from "react-hot-toast"
import ProjectInfoPage from "./pages/ProjectInfoPage"


function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects/:projectId" element={<ProjectInfoPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 5000,
              },
              error: {
                duration: 7000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px, 24px",
                backgroundColor: theme.palette.common.secondBgColor,
                color: theme.palette.common.secondTextColor,
              },
            }}
          />
    </ThemeProvider>
  )
}

export default App;
