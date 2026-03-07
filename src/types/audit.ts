export type OperationType = 'add' | 'subtract';

export interface AuditRowType {
  id: string;
  time: string;
  type: OperationType;
}