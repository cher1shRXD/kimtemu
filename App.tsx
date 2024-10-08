import ModalScreen from "./components/modal";
import Router from "./components/router";
import { ThemeProvider } from "./context/theme/themeContext";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
      <ModalScreen />
    </ThemeProvider>
  );
}

export default App