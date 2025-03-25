import React from 'react';

export const BannerCatalog = () => {
    return (
        <>
            <div className='w-full overflow-hidden'>
                <div className='absolute w-full -z-10 h-[463px] flex justify-end'>
                    <img className='absolute h-[463px] float-right -mt-[125px] -mr-[250px]' src='/src/app/images/leaf.png' alt='leaf' />
                </div>

                <div className='w-full flex justify-center mt-[171px] relative'>
                    <div className='w-full max-w-[1240px] flex items-center gap-[345px]'>
                        <div>
                            <span className='font-normal text-[8px] uppercase'>наслаждайтесь природой севера</span>

                            <h1 className='font-normal text-[64px] mb-[75px]'>
                                Вкус <span className='text-[#4C6444]'>Карелии</span>
                                <br /> 
                                в одной кружке
                            </h1>

                            <button className='bg-[#2B322B] p-[20px] rounded-[10px] text-[#F5FEF0]'>
                                Посмотреть каталог
                            </button>
                        </div>

                        <div className='w-[288px] h-[402px] flex flex-col items-center py-[15px] px-[15px] bg-[#F5FEF0] border-[#232323] border-[1px]'>
                            <div className='overflow-hidden w-full h-[183px] rounded-[10px] border-[1px] border-[#2B322B]'>
                                <img className='h-full ' src='/src/app/images/tea_banner.jpeg' alt='tea'/>
                            </div>

                            <h2 className='font-normal text-[32px] leading-[120%] mt-[20px] mb-[30px]'>
                                Чайная экспедиция
                            </h2>

                            <button className='w-full bg-[#2B322B] h-[54px] rounded-[10px] items-center flex justify-between'>
                                <div className='flex gap-3 items-center ml-4'> 
                                    <img className='w-[10px] h-[10px]' src="/src/app/images/point.svg" alt="point" />

                                    <span className='text-[#F5FEF0]'>
                                        Смотреть
                                    </span>
                                </div>

                                <img className='mr-4' src="/src/app/images/arrow_up.svg" alt="arrow_up" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='absolute w-full -z-10 h-[463px] flex justify-start'>
                    <img className='absolute h-[463px] float-right -mt-[125px] -ml-[225px] rotate-[-154deg]' src='/src/app/images/leaf.png' alt='leaf' />
                </div>
            </div>
            
        </>
       
    );
};
