import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = () => {
  const auth = useAuth();

  let authemail = !auth.email ? (
    <h1>Você não pussue acesso</h1>
  ) : (
    <h2>Esta é página do profile!</h2>
  );

  return authemail;
};
