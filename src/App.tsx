import "./App.css";
import Header from "./components/UI/Header/Header";
import Container from "./components/UI/Container/Container";
import { Route, Routes } from "react-router";
import PetsList from "./components/PetList/PetList";
import AddPet from "./components/AddPet/AddPet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="bg-amber-50">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<PetsList />} />
            <Route path="/add" element={<AddPet />} />
          </Routes>
        </Container>
      </QueryClientProvider>
    </div>
  );
}

export default App;
