import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

function App() {
  const [users, setUsers] = useState<[User]>();
  const inputRef = useRef<HTMLInputElement>(null);

  const names = useMemo(
    () => users?.map((user) => user.name).join(", ") || "",
    [users]
  );

  const greeting = useCallback((name: string) => alert(`Hello ${name}`), []);

  const onFocus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  async function loadData() {
    const response = await fetch("https://api.github.com/users/diego3g");
    const data = await response.json();

    setUsers(data);
  }
  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={onFocus}>Focar</button>
    </div>
  );
}

export default App;
