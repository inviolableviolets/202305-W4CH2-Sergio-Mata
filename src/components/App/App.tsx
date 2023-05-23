import AccessForm from "../AccessForm/AccessForm";
import PersonalForm from "../PersonalForm/PersonalForm";
import LoginForm from "../LoginForm/LoginForm";
import { Header } from "../Header/Header";

export default function App() {
  const title = "REACT FORM";

  return (
    <>
      <Header title={title}></Header>
      <PersonalForm></PersonalForm>
      <AccessForm></AccessForm>
      <LoginForm></LoginForm>
    </>
  );
}
