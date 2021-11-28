function MobileApp(){
    return(
        <div className="bg-primary-brand-color flex flex-col md:flex-row justify-between items-center bg-mobile-app mt-8 rounded-lg text-white">
            <div className="flex flex-col gap-y-3 p-10 text-center md:text-left">
                <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin!</h3>
                <p className="text-base font-semibold">İstediğiniz ürünleri dakikalar içinde kapınıza kadar <br /> getirelim.</p>
                <nav className="mt-8 flex flex-wrap md:flex-nowrap justify-center gap-2 gap-x-2">
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/appstore-en-c661eed8e5955c0a422054a9021698ce.svg" className="md:h-8 lg:h-auto" alt="App Store" />
                    </a>
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/googleplay-en-46ff50211cf4b7b1c29309f3526af930.svg" className="md:h-8 lg:h-auto" alt="Google Play Store" />
                    </a>
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/huawei-appgallery-en-aed8ae3ea827fedc197b350496164d3f.svg" className="md:h-8 lg:h-auto" alt="Huawei App Gallery" />
                    </a>
                </nav>
            </div>
            <picture className="pt-6 hidden md:block md:self-end">
                <img src="https://getir.com/_next/static/images/phoneLandingEn-5e918947c1bcf3088c762a1b52c89c7d.png" alt="Getir App" />
            </picture>
        </div>
    )
}

export default MobileApp