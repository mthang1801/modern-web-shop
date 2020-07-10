import { createSelector } from "reselect";

export const selectDirectory = (state) => state.directory;

export const selectDirectories = createSelector(
  selectDirectory,
  (directory) => directory.directories
);

export const selectDirectoryIsLoading = createSelector(
  selectDirectory,
  (directory) => directory.loading
);
