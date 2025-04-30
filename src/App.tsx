import "./App.css";
import Header from "./components/UI/Header/Header";
import Container from "./components/UI/Container/Container";
import { Route, Routes } from "react-router";
import AddPet from "./components/AddPet/AddPet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pets from "./components/Pets/Pets";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="bg-amber-50">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Pets />} />
            <Route path="/add" element={<AddPet />} />
          </Routes>
        </Container>
      </QueryClientProvider>
    </div>
  );
}

export default App;
