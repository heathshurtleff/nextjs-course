import { useRouter } from 'next/router';

const SelectedClientProjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Page for a Selcted Clients Project</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
