import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "Postagens no Instagram",
  heading = <><span tw="text-primary-500">Instagram</span></>,
  description = "Vou ver como pegar as fotos do instagram e mostrar direto no site",

}) => {
  const blogPosts = [
    {
      imageSrc:
        "data:image/jpeg;base64,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",
      author: "Adam Wathan",
      category: "SEO",
      title: "Optimizing your website for your main keyword",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://reddit.com"
    },
    {
      imageSrc:
        "https://t1.ea.ltmcdn.com/pt/images/6/7/4/5_hora_de_dar_banho_no_cachorro_7476_6_600.jpg",
      author: "Owais Khan",
      category: "Advertising",
      title: "Creating The perfect advertisement campaign",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://www.artesanatopassoapassoja.com.br/wp-content/uploads/2019/08/laco-pet-rosa-poa.jpg",
      author: "Steve Schoger",
      category: "Social Media",
      title: "Efficient management of your social media assets",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://timerse.com"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <UserIcon />
                      <div>{post.author}</div>
                    </Meta>
                    <Meta>
                      <TagIcon />
                      <div>{post.category}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}>Read Post</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
