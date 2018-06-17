import * as logo from 'public/logo.svg';

export const defaultState: ApplicationState = {
  title: 'Technology Radar',
  logo,
  owner: false,
  editor: false,
  editMode: false,
  focusedTechnology: null,
  selectedTechnology: null,
  selectedGroup: null,
  viewMode: 'radar'
};
