import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    router.push({
      pathname: '/clients/[id]/[clientproject]',
      query: {
        id: router.query.id,
        clientproject: 'projecta'
      }
    });
  }

  return (
    <div>
      <h1>The Clients Projects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
