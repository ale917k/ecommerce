import React, { useState, useEffect } from "react";

import SHOP_DATA from "../../SHOP_DATA";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = () => {
  const [collections, setCollections] = useState(null);

  useEffect(() => {
    !collections && setCollections(SHOP_DATA);
  }, [collections]);

  return (
    <div className="shop-page">
      {collections &&
        collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
    </div>
  );
};

export default ShopPage;
