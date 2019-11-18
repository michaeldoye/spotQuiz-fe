import { MenuItem } from '../models/menu.model';
import { RoutingEnum } from '../routing/routing.enum';
import { ProfileSectionsEnum } from '../pages/Profile/Sections/ProfileSections.enum';

export const profileMenu: MenuItem[] = [
  {
    label: 'Personal Details',
    icon: 'person',
    disabled: false,
    active: true,
    link: `${RoutingEnum.profile}/${ProfileSectionsEnum.personal}`,
    index: 0
  },
  {
    label: 'Site Settings',
    icon: 'settings_applications',
    disabled: false,
    active: false,
    link: `${RoutingEnum.profile}/${ProfileSectionsEnum.settings}`,
    index: 1
  },
  {
    label: 'My Modules',
    icon: 'school',
    disabled: false,
    active: false,
    link: `${RoutingEnum.profile}/${ProfileSectionsEnum.modules}`,
    index: 2
  },
  {
    label: 'My Progress',
    icon: 'trending_up',
    disabled: false,
    active: false,
    link: `${RoutingEnum.profile}/${ProfileSectionsEnum.progress}`,
    index: 3
  },
  {
    label: 'Home',
    icon: 'home',
    disabled: false,
    active: false,
    link: RoutingEnum.home,
    index: 4
  },
  {
    label: 'Log Out',
    icon: 'exit_to_app',
    disabled: false,
    active: false,
    link: RoutingEnum.profile,
    index: 5
  }
];
