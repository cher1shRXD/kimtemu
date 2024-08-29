import Header from "./components/header";
import Router from "./components/router";
import { ThemeProvider } from "./context/theme/themeContext";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <ThemeProvider>
      <Header/>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App