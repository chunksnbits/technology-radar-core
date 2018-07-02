import 'mocks/replace-consume';

// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { shallow } from 'enzyme';

import {
  mockTechnology,
  mockGroup,
  mockSettings,
  mockApplicationStateStore,
  mockTechnologyRadarStore,
  mockLevel
} from 'mocks';

import { LegendGroupLabels } from './components/LegendGroupLabels';
import { TechnologyItem } from './components/TechnologyItem';
import { LegendLevels } from './components/LegendLevels';
import { LegendGroupSeparators } from './components/LegendGroupSeparators';

import { TechnologyGraph } from './index';

const shallowWithState = (props: any = {}) => {
  return shallow(
    <TechnologyGraph
      { ...mockApplicationStateStore(props.applicationState) }
      { ...mockTechnologyRadarStore(props.technologyRadar)  }/>
  )
}

// ----------------------------------------------------------------------------- Implementation
it('renders without crashing', () => {
  const element = shallowWithState({
    technologyRadar: {
      technologies: [mockTechnology()],
      groups: [mockGroup()]
    }
  });

  expect(element.find('.c-technology-graph')).toBeTruthy();
});

it('renders legend', () => {
  const element = shallowWithState({
    technologyRadar: {
      technologies: []
    }
  });

  expect(element.find(LegendGroupLabels).length).toBe(1);
  expect(element.find(LegendLevels).length).toBe(1);
  expect(element.find(LegendGroupSeparators).length).toBe(1);
});

it('renders technology a single technology', () => {
  const element = shallowWithState({
    technologyRadar: {
      technologies: [mockTechnology()],
      groups: [mockGroup()]
    }
  });

  expect(element.find(TechnologyItem).length).toBe(1);
});

it('renders technology a multiple technologies', () => {
  const element = shallowWithState({
    technologyRadar: {
      technologies: [mockTechnology(), mockTechnology({ id: 'other' })],
      groups: [mockGroup()]
    }
  });

  expect(element.find(TechnologyItem).length).toBe(2);
});

it('applies base rotation', () => {
  const group = mockGroup();

  const element = shallowWithState({
    technologyRadar: {
      technologies: [mockTechnology({ groupId: group.id }), mockTechnology({ groupId: group.id })],
      groups: [group],
      levels: [mockLevel(), mockLevel()],
      settings: mockSettings()
    }
  });

  const transform = 'scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 0, 1, -10deg)';

  expect(element.find('.c-technology-graph').render().css('transform')).toContain(transform);
});