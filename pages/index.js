import fs from 'fs/promises';
import path from 'path';

const HomePage = (props) => {
  const { products } = props;

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const filepath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products
    }
  };
};

export default HomePage;