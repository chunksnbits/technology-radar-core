
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { createContext, Component, Context } from 'react';
import { canUseSessionStorage } from 'utils/dom';
import { restoreState } from 'utils/store';

import { defaultState } from './constants';
import produce from 'immer';

// ----------------------------------------------------------------------------- Configuration
export interface ApplicationStateProps {
  initialState?: ApplicationState;
}

const SESSION_STORAGE_KEY = 'cnb--application-state';

export const ApplicationStateContext: Context<ApplicationState & ApplicationStateActions> = createContext({} as any);

export class ApplicationStateStore extends Component<ApplicationStateProps, ApplicationState & ApplicationStateActions> implements ApplicationStateActions {

  constructor(props: ApplicationStateProps) {
    super(props);

    this.state = {
      ...defaultState,
      ...props.initialState || {},
      ...this.restoreState(),

      selectTechnology: this.selectTechnology.bind(this),
      selectGroup: this.selectGroup.bind(this),
      setEditMode: this.setEditMode.bind(this),
    };
  }

  render() {
    return (
      <ApplicationStateContext.Provider value={ this.state }>
        { this.props.children }
      </ApplicationStateContext.Provider>
    );
  }

  // ----------------------------------------------------------------------------- Action methods
  selectTechnology(selected: Technology): void {
    this.setState(produce(this.state, (draftState: ApplicationState) => {
      draftState.selectedTechnology = selected;

      return draftState;
    }));
  }

  selectGroup(selected: Group): void {
    this.setState(produce(this.state, (draftState: ApplicationState) => {
      draftState.selectedGroup = selected;

      return draftState;
    }));
  }

  setEditMode(value: boolean): void {
    this.setState(produce(this.state, (draftState: ApplicationState) => {
      draftState.editMode = value;

      return draftState;
    }));
  }

  private restoreState(): ApplicationState | {} {
    if (canUseSessionStorage()) {
      return restoreState(SESSION_STORAGE_KEY) || {};
    }

    return {};
  }
}
