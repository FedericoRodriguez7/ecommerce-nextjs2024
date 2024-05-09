// import { notFound } from "next/navigation";

import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";

  const seedProducts = initialData.products



interface Props {
  params: {
    id: Category;
  }
}


export default function ({params}: Props) {

  const {id} = params;
  const products = seedProducts.filter(product => product.gender === id);

  const labels: Record<Category, string> = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  }

  const subLabels: Record<Category, string> = {
    'men': 'de ellos',
    'women': 'de ellas',
    'kid': 'de los peques',
    'unisex': 'de todos'
  }

  // if ( id === "kids") {
  //   notFound();
  // }

    return (
      <>
      <Title
        title={`Articulos ${labels[id]}`}
        subtitle={`Productos ${subLabels[id]}`}
        className="mb-2"
      />

      <ProductGrid
        products={products}
      />

    </>
    );
  }