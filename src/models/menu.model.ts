import { RoutingEnum } from '../routing/routing.enum';

export interface MenuItem {
  label: string;
  icon: string | null;
  disabled: boolean;
  active: boolean;
  link: RoutingEnum | string;
  index: number;
}
