import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux'
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Sidebar.tsx"
import { I18nextProvider } from 'react-i18next'
import i18n from './lib/i18next-config.ts'
import { Toolbar } from "./components/Toolbar"
import Dashboard from "./pages/Dashboard/index.tsx"
import Users from "./pages/Users/index.tsx"
import Login from "./pages/Login/index.tsx"
import SignUp from "./pages/SignUp/index.tsx"
import Settings from "./pages/Settings/index.tsx"
import { useEffect } from "react"
import { useAppPreferences } from "./hooks/app-preferences.ts"
import Policies from "./pages/Policies/index.tsx"
import Routers from "./pages/Routers/index.tsx"

// Add this new component to handle theme
function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useAppPreferences();

  useEffect(() => {
    // Remove both classes first
    document.documentElement.classList.remove('light', 'dark');
    // Add the current theme class
    document.documentElement.classList.add(theme);
  }, [theme]);

  return children;
}
// Separate component for routing logic
function AppRoutes() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/sign-up';

  return (
    <div className="flex-row h-screen">
      {!isLoginPage && <Toolbar />}
      <div>
        {!isLoginPage ? (
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/routers" element={<Routers />} />
                <Route path="/policies" element={<Policies />} />
              </Routes>
            </main>
          </SidebarProvider>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <ThemeWrapper>
              <AppRoutes />
            </ThemeWrapper>
          </BrowserRouter>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  )
}