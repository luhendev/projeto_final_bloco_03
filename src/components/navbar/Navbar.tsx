import { ReactNode } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    let component: ReactNode = (
        <div className='w-full bg-red-500  text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Farmácia</Link>
                <div className='flex gap-4'>
                    Produtos
                    <Link to='/categoria' className='hover:underline'>Categorias</Link>
                    <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                </div>
            </div>
        </div>
    );

    return (
        <>
            { component }
        </>
    );
}

export default Navbar;