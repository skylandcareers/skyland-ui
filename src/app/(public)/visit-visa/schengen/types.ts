export interface FAQ {
  question: string;
  answer: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
} 