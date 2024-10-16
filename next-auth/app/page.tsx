import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import User from './components/User';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="">
      <h1>Server Side Rendered</h1>
      {JSON.stringify(session)}

      <h1>Client Side Rendered</h1>
      <User />
    </div>
  );
}
