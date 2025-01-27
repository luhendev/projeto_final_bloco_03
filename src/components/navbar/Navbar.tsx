function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-red-500 text-white'>

                <div className="container flex justify-between text-lg">
                    Farmácia

                    <div className='flex gap-4'>
                        Produtos
                        Categorias
                        Cadastrar Categoria
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar