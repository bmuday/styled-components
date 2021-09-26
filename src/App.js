import { Container } from "./components/styles/Container.styles";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global";

const App = () => {
  const theme = {
    colors: {
      header: "#ebeffe",
      body: "#fff",
      footer: "#efbacd",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <h1>Hello World!</h1>
        <Header />
        <Body />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
