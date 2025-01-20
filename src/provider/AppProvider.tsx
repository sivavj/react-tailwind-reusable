import { useState } from "react";
import Buttons from "../components/Buttons";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { useTheme } from "./ThemeProvider";

const AppProvider = () => {
  const { theme, toggleTheme } = useTheme();
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">Reusable Tailwind Project</h1>
      <button className="btn btn-secondary mb-4" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <Buttons />
      <Card />
      <button
        className="btn btn-primary mt-6"
        onClick={() => setModalOpen(true)}
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default AppProvider;
