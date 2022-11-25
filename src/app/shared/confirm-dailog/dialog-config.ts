import { Buttonconfig } from './buttonconfig';

export interface DialogConfig {
  title?: string;
  message?: string;
  visible?: boolean;
  buttonConfigList?: Buttonconfig[];
}
