import "./App.css";
import { Calendar } from "@/components";
import { CalendarContextProvider, ModalContextProvider } from "@/providers";

function App() {
  return (
    <ModalContextProvider>
      <CalendarContextProvider>
        <Calendar />
      </CalendarContextProvider>
    </ModalContextProvider>
  );
}

export default App;
