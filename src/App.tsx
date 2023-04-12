import { Container, Header, UserCard, Search } from "components";

import { userMock as defaultUser } from "mock";
import { useState } from "react";
import { GithubError, GithubUser, LocalGithubUser } from "types";
import { isGithubUser, extractLocalUser } from "utils";

const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (userName: string) => {
    const url = BASE_URL + userName;

    const res = await fetch(url);
    const user: GithubUser | GithubError = await res.json();

    if (isGithubUser(user)) {
      const localUser = extractLocalUser(user);

      setUser(localUser);
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search error={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
