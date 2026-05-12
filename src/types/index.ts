export type StateCode = 'CA' | 'TX' | 'NY' | 'FL';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type Topic =
  | 'Road Signs'
  | 'Right of Way'
  | 'Speed Limits'
  | 'Parking'
  | 'Lane Changes'
  | 'Intersections'
  | 'Defensive Driving'
  | 'Alcohol & Safety'
  | 'School Zones'
  | 'Emergency Vehicles';

export type DriverState = {
  code: StateCode;
  name: string;
  shortName: string;
  accent: string;
  permitNote: string;
};

export type Question = {
  id: string;
  state: StateCode;
  topic: Topic;
  question: string;
  options: [string, string, string, string];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: Difficulty;
};

export type ExamAnswer = {
  questionId: string;
  topic: Topic;
  selectedIndex: number;
  correctAnswerIndex: number;
  correct: boolean;
};

export type ExamResult = {
  id: string;
  state: StateCode;
  date: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  elapsedSeconds: number;
  answers: ExamAnswer[];
};
