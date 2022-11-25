export interface Buttonconfig {
  classstr?: string;
  id?: string;
  label: string;
  handler: () => void;
  disable?: boolean;
}
