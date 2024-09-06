import { createContext, ReactNode } from "react";
import { useState } from "react";

interface CalendarContextInterface {
  currentDate: string | null;
  setCurrentDate: React.Dispatch<React.SetStateAction<string | null>>;
}

export const CalendarContext = createContext<CalendarContextInterface>({
  currentDate: null,
  setCurrentDate: () => null,
});

export const CalendarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const value = { currentDate, setCurrentDate };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};
