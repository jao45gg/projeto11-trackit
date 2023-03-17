import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HojePage from "./pages/HojePage";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUpPage";
import HabitsPage from "./pages/HabitsPage"
import HistoryPage from "./pages/HistoryPage"
import { LevelContext } from "./constant";

export default function App() {

  const [user, setUser] = useState(null);

  return (
    <LevelContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage setUser={setUser} />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/hoje" element={<HojePage />}/>
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/historico" element={<HistoryPage />}/>
        </Routes>
      </BrowserRouter>
    </LevelContext.Provider>
  );
}