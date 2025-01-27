import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [isLoading, setIsLoading] = useState(false);
  
    async function buscarCategorias() {
        setIsLoading(true)
        try {
            await buscar('/categoria', setCategorias)
        } catch (error: any) {
            if (error.toString().includes('403')) {
                console.log(error)
            }
        }setIsLoading(false)
    }

    useEffect(() => {
        buscarCategorias()    
    }, [categorias.length])
  
    return (
      <>
        {isLoading ? (
          <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
        ) : (
          <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorias.map((categoria) => (
                  <CardCategoria key={categoria.id} categoria={categoria} />
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default ListaCategorias;