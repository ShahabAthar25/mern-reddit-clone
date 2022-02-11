import Navbar from "../components/Navbar";
import useDarkMode from "../hooks/useDarkMode";

export default function Home() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="bg-[#DAE0E6] h-screen w-screen">
      <Navbar />
    </div>
  );
}
