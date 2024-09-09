import { Calendar, Modal } from "@/components";
import { CalendarContextProvider, ModalContextProvider } from "@/providers";
import CalendarLayout from "./layouts/calendar-layout";

function App() {
  return (
    <ModalContextProvider>
      <CalendarContextProvider>
        <Modal />
        <CalendarLayout>
          <Calendar />
        </CalendarLayout>
      </CalendarContextProvider>
    </ModalContextProvider>
  );
}

export default App;
