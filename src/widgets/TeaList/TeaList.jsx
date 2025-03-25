export const TeaList = ({data, callback}) => {
    console.log(data);
    
    return (
        <>
        <div className='w-full flex justify-center mt-[50px] relative'>
            <div className='w-full max-w-[1240px] flex flex-col'>
                <ul className="w-full flex flex-col gap-[25px]">
                    {
                        data.map((item,i) => <>
                            <li className="bg-[#F5FEF0] border-[#232323] border-[1px] p-[20px]">
                                <p className="font-semibold text-[20px]">
                                    Название:
                                    <br />
                                    <span className="font-medium text-[16px]">
                                    {
                                        item.name
                                    }
                                    </span>

                                </p>
                                <hr className="border-[#232323] my-[5px]" />
                                <p className="font-semibold text-[20px]">
                                    Описание:
                                    <br />
                                    <span className="font-medium text-[16px]">
                                    {
                                        item.description
                                    }
                                    </span>

                                </p>
                                <hr className="border-[#232323] my-[5px]" />
                                <p className="font-semibold text-[20px]">
                                    Цена:
                                    <br />
                                    <span className="font-medium text-[16px]">
                                    {
                                        item.description
                                    }
                                    </span>

                                </p>
                            </li>
                        </>)
                    }
                </ul>
                <div className='w-full flex justify-center mt-[50px] relative'>
                    <div className='w-full max-w-[1240px] flex items-center'>
                        <button onClick={() => callback(prev => !prev)} class="bg-[#2B322B] p-[20px] rounded-[10px] text-[#F5FEF0]">Добавить предмет</button>
                        <ul>
                            <li>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
};