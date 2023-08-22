import { Dialog } from './Dialog';

export interface GitHubUserProps {
  username: string;
}

export async function GitHubUser({ username }: GitHubUserProps) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();

  return (
    <>
      <p className='break-all'>{JSON.stringify(user)}</p>
      <Dialog />
    </>
  );
}
