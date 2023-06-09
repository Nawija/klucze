import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

import { CardsServices, KeysServices } from "../components/HomePage/index";

const Home = () => {
    return (
        <div className="mx-auto w-full text-center bg-fixed">
            <StaticImage
                style={{ margin: "10px 20px" }}
                draggable="false"
                quality={100}
                loading="eager"
                placeholder="none"
                alt="logo kluczezamkiklamki"
                src="../assets/heroLogo1.jpg"
            />

            <Layout>
                <CardsServices />
                
                <KeysServices />
            </Layout>
        </div>
    );
};

export const Head = () => (
    <Seo
        title="Dorabianie Kluczy - Ostrów Wielkopolski"
        description="Zaplanuj niezapomnianą przygodę na wodach Tanwi z naszymi kajakami, Odkryj piękno natury i ciesz się aktywnym spływem Zarezerwuj i zanurz się w emocjach"
    />
);

export default Home;
