import { Suspense } from 'react';
import { GitHubUser } from './components/GithubUser';
import { DialogProvider } from './contexts/DialogContext';

export default async function Home() {
  return (
    <DialogProvider>
      <Suspense fallback={<p>loading...</p>}>
        <GitHubUser username='pmarcosfelipe' />
      </Suspense>
    </DialogProvider>
  );
}
