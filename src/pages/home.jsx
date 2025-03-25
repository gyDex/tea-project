import { useState } from "react";
import { About, Advantage, Header, BannerCatalog, TeaCard, Footer, TeaList } from "../widgets";

export const Home = () => {
    const [ items, setItems ] = useState([{
        name: 'Название',
        description: 'Описание',
        price: 0
    }]);

    const [isModalActive, setModalActive] = useState(false);

    function AddItemToList(itemData) {
        const name = itemData.get("name");
        const description = itemData.get('description')
        const price = itemData.get('price')
        
        const result = {
            name,
            description,
            price
        }

        if(name !== '' || description !== '' || price !== '') {
            setItems(prev => [result, ...prev])
        }
    }

    return (
        <>
            <div className={`w-[100svw] h-[100svh] fixed flex justify-center items-center z-[1000]  ${isModalActive ? 'visible' : 'invisible' }`}>
                <div onClick={() => setModalActive(false)} className="bg-black bg-opacity-50 absolute w-full h-full">

                </div>
                <div className="max-w-[400px] bg-[#F5FEF0] w-[100%] rounded-[10px] p-[25px] z-[1000]">
                    <form action={AddItemToList}>
                        <label>
                            Название:
                            <input name="name" type="text" className="w-full focus-within:outline-none border-2 px-2 bg-transparent border-[#232323] rounded-md" />
                        </label>

                        <label>
                            Описание:
                            <input name="description" type="text" className="w-full focus-within:outline-none border-2 px-2 bg-transparent border-[#232323] rounded-md" />
                        </label>

                        <label>
                            Цена:
                            <input name="price" type="text" className="w-full focus-within:outline-none border-2 px-2 bg-transparent border-[#232323] rounded-md" />
                        </label>

                        <button type="submit" class="bg-[#2B322B] p-[5px] mt-[25px] w-full rounded-[10px] text-[#F5FEF0]">Добавить предмет</button>
                    </form>
                </div>
            </div>



            <Header />
            <TeaList callback={setModalActive} data={items}/>
            <BannerCatalog />
            <About />
            <Advantage />
            <TeaCard />
            <Footer />
        </>
    );
};