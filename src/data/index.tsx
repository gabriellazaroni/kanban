export interface CardType {
  title: string;
  id: string;
  column: string;
}

export const data: CardType[] = [
  { title: 'Investigate slow loading issue on profile page', id: '1', column: 'backlog' },
  { title: 'Review internal audit checklist', id: '2', column: 'backlog' },
  { title: '[SPIKE] Explore AWS to Azure migration path', id: '3', column: 'backlog' },
  { title: 'Draft architecture doc for Alerts service', id: '4', column: 'backlog' },
  { title: 'Evaluate PostgreSQL vs MongoDB for analytics', id: '5', column: 'todo' },
  { title: 'Create incident report for weekend downtime', id: '6', column: 'todo' },
  { title: 'Align Q3 roadmap with stakeholder feedback', id: '7', column: 'todo' },
  { title: 'Migrate global state to Zustand store', id: '8', column: 'doing' },
  { title: 'Implement error logging in batch job', id: '9', column: 'doing' },
  { title: 'Finalize metrics dashboard for event listener', id: '10', column: 'done' },
];
