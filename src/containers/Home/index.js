import React from "react";
import ReactMarkdown from "react-markdown";
import Query from "../../components/Query";
import HOME_QUERY from "../../queries/home/home";

const Home = () => {
  // const renderers = {
  //   //This custom renderer changes how images are rendered
  //   //we use it to constrain the max width of an image to its container
  //   image: ({
  //       alt,
  //       src,
  //       title,
  //   }) => (
  //       <img 
  //           alt={alt} 
  //           src={src} 
  //           title={title} 
  //           style={{ maxWidth: 200, height: 'auto' }}  />
  //   ),
  // };
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Query query={HOME_QUERY}>
            {({ data: { homes } }) => {
              console.log(homes);
              return (
                <ReactMarkdown 
                  children={homes.data[0].attributes.intro}
                />
              );
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
