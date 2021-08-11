import { SearchInput } from "./components/SearchInput";
import "./global/App.css";

export const App = () => {
  return (
    <div className="App">
      <h2>Food Search</h2>

      <SearchInput />
    </div>
  );
};