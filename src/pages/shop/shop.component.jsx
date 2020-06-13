import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import "./shop.styles.scss";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, [updateCollections]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={match.path}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
