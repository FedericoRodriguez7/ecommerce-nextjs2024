export const revalidate = 60;

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { Gender } from "@prisma/client";
import { redirect } from "next/navigation";

 


interface Props {
  params: {
    gender: string;
  },
  searchParams: {
    page?: string;

  }
}



export default async function GenderPage ({params, searchParams}: Props) {

  const {gender} = params;

  const page = searchParams.page ? parseInt( searchParams.page) : 1;
  
  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({
    page,
    gender: gender as Gender,

  });

  if ( products.length === 0 ) {
    redirect(`/gender/${ gender }`)
  } 

  

  const labels: Record<string, string> = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  }

  const subLabels: Record<string, string> = {
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
        title={`Articulos ${labels[gender]}`}
        subtitle={`Productos ${subLabels[gender]}`}
        className="mb-2"
      />

      <ProductGrid
        products={products}
      />

      <Pagination
      totalPages={totalPages}
      />

    </>
    );
  }