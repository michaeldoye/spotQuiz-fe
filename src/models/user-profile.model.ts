export interface UserProfile {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  description: string;
  imageUrl: string;
  notifications: any; // TODO: notifications model
  meta: UserMeta;
}

interface UserMeta {
  dateJoined: string;
  lastActive: string;
}
