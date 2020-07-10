import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  selectShop,
  (shop) => shop.collections
);

export const selectCollectionsIsLoading = createSelector(
  selectShop,
  (shop) => shop.loading
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    selectShopCollections,
    (collections) => collections[collectionUrlParam]
  );

export const selectCollectionsOverview = createSelector(
  selectShopCollections,
  (collections) => Object.keys(collections).map((objKey) => collections[objKey])
);

export const isCollectionPageLoaded = createSelector(
  selectShopCollections,
  (collections) =>
    collections ? Object.entries(collections).length > 0 : false
);
