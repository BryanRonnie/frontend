// Fixed Theme Switch Component
import { Switch as ShadCNSwitch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useAppPreferences } from "@/hooks/app-preferences";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useAppPreferences();

  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <ShadCNSwitch
          id="theme-switch"
          className="bg-gray-200 dark:bg-gray-700"
          checked={theme === 'dark'}
          onCheckedChange={toggleTheme}
        />
        {/* Icons positioned based on theme state */}
        <div className="absolute inset-0 flex items-center pointer-events-none">
          {theme === 'dark' ? (
            <Moon className="h-4 w-4 pb-1 pr-0.5 text-blue-950 ml-7 transition-all duration-200" />
          ) : (
            <Sun className="h-4 w-4 pb-1 pl-0.5 text-amber-500 ml-1 transition-all duration-200" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;