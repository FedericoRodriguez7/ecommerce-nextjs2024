import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";


const productsInCard = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function CheckOutPage () {


  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">

        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}

          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/cart" className="underline mb-5">
              Editar carrito
            </Link>



            {/*  Items */}

            {
              productsInCard.map((product) => (

                <div key={product.slug} className="flex mb-5">
                  <Image
                    src={`/products/${product.images[0]}`}
                    alt={product.title}
                    width={100}
                    height={100}
                    style={{
                      width: '100px',
                      height: '100px',
                    }}
                    className="mr-5 rounded"
                  />

                  <div>
                    <p>{product.title}</p>
                    <p>{product.price} x 3</p>
                    <p>Subtotal: ${ product.price * 3}</p>
    
                  </div>


                </div>
              ))
            }

          </div>

          {/* Checkout */}

          <div className="bg-white rounded-xl shadow-xl p-7">

            <h2 className="text-2xl  mb-2">Direccion de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Federico Rodriguez</p>
              <p>Av. Siempre Vivas 123</p>
              <p>Col. Centro</p>
              <p>Villa Gesell</p>
              <p>Buenos Aires</p>
              <p>CP 7165</p>
              <p>+532423444332</p>

            </div>

            {/* Divider */}

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

          



            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">

              <span>No. Productos</span>
              <span className="text-right">3 articulos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (%15)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>

            </div>

            <div className="mt-5 mb-2 w-full">

              <p className="mb-5">
                {/* Disclaimer */}
                <span className="text-xs">
                  Al hacer click en &quot;Colocar orden&quot; aceptas nuestros <a href="#">Terminos y condiciones</a> y <a href="#"> politica de privacidad</a>
                </span>
              </p>

              <Link
              className="flex btn-primary justify-center"
              href="/orders/123">
                Colocar orden
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}