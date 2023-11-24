import Header from "../components/Header";
import Cards from "../components/home-components/Cards";
import ButtonAlbumPage from "../components/home-components/ButtonAlbumPage";
import Wave from "../components/home-components/Wave";
import DescriptionHome from "../components/home-components/DescriptionHome";
import PhoneImg from "../components/home-components/PhoneImg";
import TitleHome from "../components/home-components/TitleHome";

export default function Home() {
    return (
        <div className="w-full h-full bg-cyan-700">
            <Header />
            <Wave />
            <div className="p-2 flex justify-center ">
                <div className="max-w-7xl flex items-center flex-col">
                    <TitleHome />
                    <PhoneImg />
                    <DescriptionHome />
                    <Cards />
                    <ButtonAlbumPage />
                </div>
            </div>
    </div>
    )
}