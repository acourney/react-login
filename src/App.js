import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="App">
      <main>
        <div id="img-container">
          <img
            id="acompany-logo"
            src="https://media.git.generalassemb.ly/user/21811/files/546c2880-af58-11ec-917c-d9bd1e9dbecd"
            alt="A Company Logo"
          />
        </div>

        <InputForm />

        <footer className="main-footer">
          <div>
            <span id="forgot-password">Forgot my password</span>|
            <span id="signup">Sign Up</span>
          </div>
          <div>&#169; 2019 A Company</div>
        </footer>
      </main>
      <footer className="page-footer">
        Need Help? No problem! Email&nbsp;
        <a href="" id="support-email">
          support@acompany.com
        </a>
        &nbsp; or call 800-377-6915
      </footer>
    </div>
  );
}

export default App;
