import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from "components/hero/BackgroundAsImage.js";
import ThreeColWithSideImage from "components/features/ThreeColWithSideImage";
import Differentials from "components/cards/ThreeColContactDetails";
import Services from "components/pricing/ThreePlansWithHalfPrimaryBackground";
import Footer from "components/footers/MiniCenteredFooter.js";
import Contact from "components/forms/TwoColContactUsWithIllustration";
import Store from "components/features/TwoColSingleFeatureWithStats.js";
import Team from "components/cards/ProfileThreeColGrid.js"
import FAQ from "components/faqs/SimpleWithSideImage.js";
import Instagram from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Reviews from "components/testimonials/TwoColumnWithImageAndProfilePictureReview";

export default () => (
    <AnimationRevealPage>
        <Header/>
        <Differentials/>
        {/*<ThreeColWithSideImage/>*/}
        <Reviews/>
        <Instagram/>
        <Reviews/>
        <Services/>
        <Team/>
        <Contact/>
        <FAQ/>
        <Footer/>
    </AnimationRevealPage>
);
