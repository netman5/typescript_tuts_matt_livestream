
// type Role = 'admin' | 'user' | 'guest';
/**
 * To be able to customize the role with other parameters, we can change the interface to a type & create rolesabttributes
 */

type UserRoleAttributes =
  | {
    role: 'admin',
    adminPassword: string,
  }

  | {
    role: 'user'
  }
  | {
    role: "super-admin",
    superAdminPassword: string,
  }

  
  type User = {
    id: number;
    firstName: string;
    lastName: string;
  } & UserRoleAttributes;
  
  // type Role = UserRoleAttributes['role'];

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
  adminPassword: "1234",
}
