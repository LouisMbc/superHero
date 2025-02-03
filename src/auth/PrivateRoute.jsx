import { useAuth } from "./AuthProvider";
import { Login } from "./LoginOut";

export function PrivateRoute({ children }) {
  const { user } = useAuth();

  return user ? (
    children
  ) : (
    <div>
      <div role="alert">
        <h4>Accès refusé</h4>
        <p>Vous devez vous connecter pour accéder à cette page.</p>
      </div>
      <Login />
    </div>
  );
}
