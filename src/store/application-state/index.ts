
// ----------------------------------------------------------------------------- Dependencies
import { observable } from 'mobx';

import logo from 'public/assets/logo.svg';

export class ApplicationState {
  @observable
  title: string = 'Technology Radar';

  @observable
  logo: string = logo;

  @observable
  selectedTechnology: Technology = null;

  @observable
  selectedGroup: Group = null;

  @observable
  technologies: Technology[] = [];

  @observable
  groups: Group[] = [];

  @observable
  settings: TechnologyRadarSettings = {
    innerRadiusPercent: 0,
    outerRadiusPercent: 50
  };

  constructor(innitialState: any = {}) {
    Object.entries(innitialState).forEach(([key, value]) => {
      if (!Object(this).hasOwnProperty(key)) {
        return;
      }

      this[key] = value;
    });
  }

  selectTechnology(selected: Technology) {
    this.selectedTechnology = selected;
  }

  selectGroup(selected: Group) {
    this.selectedGroup = selected;
  }
}