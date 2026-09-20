import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  const handleToggle = () => {
    const root = document.documentElement;
    root.classList.add("theme-transitioning");
    setTheme(isDark ? "light" : "dark");
    window.setTimeout(() => root.classList.remove("theme-transitioning"), 320);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={label}
      title={label}
      className="flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
    >
      {mounted && !isDark ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
};

export default ThemeToggle;