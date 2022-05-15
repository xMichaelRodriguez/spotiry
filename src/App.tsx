import { AuthProvider } from "./context/authProvider";
import { Navigation } from "./routes/Navigation";
import './styles/index.css'
function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  )
}

export default App;

