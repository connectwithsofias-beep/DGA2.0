
export interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Project {
  id: string;
  title: string;
  category: 'Research' | 'Practice' | 'Both';
  description: string;
  platform?: string;
}

export enum AudienceType {
  STUDENT = 'Student',
  CLINICIAN = 'Clinician',
  PARTNER = 'Partner',
  CURIOUS = 'Curious'
}
