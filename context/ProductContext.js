import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_PRODUCTS = gql`
  query {
    products(first: 10) {
      edges {
        node {
          id
          title
          productType
          images(first: 1) {
            edges {
              node {
                originalSrc
              }
            }
          }
        }
      }
    }
  }
`;

const ProductContext = (Component) => () => {
  return (
    <Query query={GET_PRODUCTS}>
      {({ data, loading, error }) => {
        if (loading) {
          return <div>Loading…</div>;
        }
        if (error) {
          return <div>{error.message}</div>;
        }
        const {
          products: { edges },
        } = data;
        const products = edges.map(({ node: { id, productType, images } }) => ({
          id,
          productType,
          image: images.edges[0].node.originalSrc,
        }));
        
        return <Component products={products} />;
      }}
    </Query>
  );
};

export default ProductContext;
