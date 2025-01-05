import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { SignUpPage } from "./pages/Signup"

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* <Route path="/signin" element={<SignInPage />} />
          <Route path="/chat" element={<ChatPage />} /> */}
        </Routes>
      </BrowserRouter>
    )  
}

export default App
