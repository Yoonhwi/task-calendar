import "./App.css";
import { Calendar, Modal } from "@/components";
import { CalendarContextProvider, ModalContextProvider } from "@/providers";

function App() {
  return (
    <ModalContextProvider>
      <CalendarContextProvider>
        <Modal />
        <Calendar />
      </CalendarContextProvider>
    </ModalContextProvider>
  );
}

export default App;
