import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="App">
      <main>
        <img
          id="acompany-logo"
          src="https://media.git.generalassemb.ly/user/21811/files/546c2880-af58-11ec-917c-d9bd1e9dbecd"
          alt="A Company Logo"
        />

        <InputForm />

        <footer className="main-footer">
          <div>
            <span>Forgot my password</span>|<span>Sign Up</span>
          </div>
          <div>&#169; 2019 A Company</div>
        </footer>
      </main>
      <footer className="page-footer">
        Need Help? No problem! Email <span>support@acompany.com</span> or call
        00-377-6915
      </footer>
    </div>
  );
}

export default App;
