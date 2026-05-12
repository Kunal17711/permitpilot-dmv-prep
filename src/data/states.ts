import { DriverState } from '@/src/types';

export const states: DriverState[] = [
  {
    code: 'CA',
    name: 'California',
    shortName: 'CA',
    accent: '#0F766E',
    permitNote: 'Urban traffic, lane discipline, and school-zone awareness.',
  },
  {
    code: 'TX',
    name: 'Texas',
    shortName: 'TX',
    accent: '#0B6B8A',
    permitNote: 'Highway judgment, intersections, and emergency response.',
  },
  {
    code: 'NY',
    name: 'New York',
    shortName: 'NY',
    accent: '#2563EB',
    permitNote: 'Dense streets, right of way, parking, and safe spacing.',
  },
  {
    code: 'FL',
    name: 'Florida',
    shortName: 'FL',
    accent: '#059669',
    permitNote: 'Weather awareness, school zones, and defensive driving.',
  },
];

export const getStateName = (code?: string) => states.find((state) => state.code === code)?.name ?? 'Not selected';
