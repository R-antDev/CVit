import {BsPersonCircle} from "react-icons/bs";

function Main() {
    return (
        <>
            <section className={'m-8 col-span-3 space-y-6'}>
                <div className={'grid grid-cols-4 gap-10'}>
                    <div className={'col-span-1'}>
                        <img src={'https://placehold.co/100x120'} alt={'user-image'} className={'w-full h-full'}/>
                    </div>
                    <div className={'col-span-3 space-y-4 flex flex-col justify-center'}>
                        <div>
                            <h1 className={'text-2xl uppercase'}>David</h1>
                            <h1 className={'text-2xl font-bold uppercase'}>Hamilton</h1>
                            <p className={'uppercase text-md'}>Web Developer</p>
                        </div>
                        <div className={'flex items-center justify-around bg-gray-900'}>
                            <div className={'p-2 space-y-1 place-content-center text-xs'}>
                                <h6 className={'text-white font-bold'}>Phone</h6>
                                <p className={'text-white'}> +1234567890 </p>
                            </div>
                            <div className={'p-2 space-y-1 place-content-center text-xs'}>
                                <h6 className={'text-white font-bold'}>Email</h6>
                                <p className={'text-white'}> example@mail.com </p>
                            </div>
                            <div className={'p-2 space-y-1 place-content-center text-xs'}>
                                <h6 className={'text-white font-bold'}>Address</h6>
                                <p className={'text-white'}> 54, Address, State/City </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'grid grid-cols-3 gap-10'}>
                    <div className={'col-span-1 space-y-4 border-b pb-4'}>
                        <h1 className={'text-xl font-bold uppercase'}>
                            Profile
                        </h1>

                        <div className={'flex gap-2'}>
                            <div className={'space-y-2 text-sm'}>
                                <p className={'capitalize font-bold'}>name</p>
                                <p className={'capitalize font-bold'}>birthday</p>
                                <p className={'capitalize font-bold'}>national</p>
                                <p className={'capitalize font-bold'}>language</p>
                            </div>
                            <div className={'space-y-2 text-sm'}>
                                <p className={'capitalize'}>David Hamilton</p>
                                <p className={'capitalize'}>20/09/1997</p>
                                <p className={'capitalize'}>Bangladeshi</p>
                                <p className={'capitalize'}>English</p>
                            </div>
                        </div>
                    </div>
                    <div className={'col-span-2 space-y-4'}>
                        <div className={'space-x-2 flex items-center'}>
                            <BsPersonCircle/>
                            <h1 className={'text-xl font-bold uppercase'}>
                                About Me
                            </h1>
                        </div>
                        <div>
                            <p className={'text-sm'}>
                                Driven web developer with expertise in front-end and back-end technologies. Proven track
                                record of delivering high-quality, user-friendly websites. Passionate about continuous
                                learning and driving digital innovation.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Main;
