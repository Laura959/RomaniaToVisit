import Layout from "./components/shared/Layout/Layout";
import MainContent from "./components/shared/MainContent/MainContent";
import Modal from "./components/shared/Modal/Modal";
import Snackbar from "./components/shared/Snackbar/Snackbar";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./themes/modalThemes";

function App() {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Modal />
      </ThemeProvider>
      <Snackbar />
      <MainContent />
    </Layout>
  );
}

export default App;
