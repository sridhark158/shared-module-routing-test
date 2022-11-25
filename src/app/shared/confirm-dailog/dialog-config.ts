import { Buttonconfig } from './buttonconfig';

export interface DialogConfig {
  title?: string;
  close: () => void;
  message?: string;
  visible?: boolean;
  buttonConfigList?: Buttonconfig[];
}
