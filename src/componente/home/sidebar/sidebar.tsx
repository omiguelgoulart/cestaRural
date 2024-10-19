// import Card from "../card/card"



function Sidebar() {
    



    return(
<nav className=" mt-10 w-full">
    <div className="w-full">
        <div className="flex">
            <ul className="flex flex-row font-medium space-x-8">
                <li>
                    <a className="text-gray-900 dark:text-white hover:font-bold hover:text-lg" aria-current="page"></a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:font-bold hover:text-lg">Populares</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:font-bold hover:text-lg">Novos</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:font-bold hover:text-lg">Baratos</a>
                </li>
            </ul>
        </div>
    </div>
</nav>



    )
}
export default Sidebar