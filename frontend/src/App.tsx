import { AuthProvider } from "./contexts/Auth";
import { ThemeProvider } from "./contexts/Theme";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
