import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import ThreeColWithSideImage from "components/features/ThreeColWithSideImage";
import ThreePlansWithHalfPrimaryBackground from "components/pricing/ThreePlansWithHalfPrimaryBackground";
import Footer from "components/footers/MiniCenteredFooter.js";
import GetStarted from "components/cta/GetStartedLight";
import WithStatsAndImageFeatures from "components/features/TwoColSingleFeatureWithStats.js";
import ProfileThreeColGridCards from "components/cards/ProfileThreeColGrid.js"
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import ThreeColSimpleWithImageAndDashedBorderBlog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";

export default () => (
    <AnimationRevealPage>
        <Hero/>
        <ThreeColWithSideImage/>
        <WithStatsAndImageFeatures/>
        <ThreePlansWithHalfPrimaryBackground/>
        <ThreeColSimpleWithImageAndDashedBorderBlog/>
        <GetStarted/>
        <ProfileThreeColGridCards/>
        <FAQ/>

        <Footer/>
    </AnimationRevealPage>
);
