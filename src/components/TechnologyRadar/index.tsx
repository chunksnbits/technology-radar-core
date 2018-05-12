
// ----------------------------------------------------------------------------- Dependencies
import { Component, ReactNode } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import { TechnologyItem } from 'components/TechnologyItem';
import { Legend } from 'components/Legend';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarProps {
  className?: string;
  applicationState: ApplicationState;
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyRadar extends Component<TechnologyRadarProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { technologies, groups } = this.props.applicationState;

    const modifiers = [];

    return (
      <div className={ classNames('c-technology-radar', this.props.className, ...modifiers) }>
        <div className='c-technology-radar__legend'>
          <Legend technologies={ technologies } groups={ groups } />
        </div>

        <div className='c-technology-radar__technologies'>
          { this.renderTechnologies(technologies, groups) }
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  handleSelect = (selected: Technology): void => {
    this.props.applicationState.selectTechnology(selected);
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private renderTechnologies(technologies: Technology[], groups: Group[]): ReactNode[] {
    return technologies.map((technology) => {
      return (
        <TechnologyItem
          className='c-technology-radar__item'
          key={ technology.id }
          technology={ technology }
          group={ this.findGroupForTechnology(technology, groups) }
          technologies={ technologies }
          groups={ groups }
          onSelect={ this.handleSelect } />
      )
    });
  }

  private findGroupForTechnology(technology: Technology, groups: Group[]): Group {
    return groups.find(group => group.id === technology.groupId);
  }
}
