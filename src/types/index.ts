export interface IPageComponentArray {
  path: string;
  element: JSX.Element;
  isLazy: boolean;
}

export interface IUser {
  name: string;
}

export interface ISkipLimit {
  skip: number;
  limit: number;
}
export interface IRequestDemo {
  organizationName: string;
  organizationType: string;
  contactPerson: string;
  contactNo: string;
  email: any;
  address: string;
  notes: string;
}
export interface IUserLogin {
  username: string;
  password: string;
}
export interface IOrganization {
  organizationName: string;
  organizationType: string;
  contactPerson: string;
  contactNumber: string;
  emailAddress: any;
  gstNumber: string;
  noOfUsers: string;
  userName: string;
  password: string;
}
export interface IModules {
  organization_id: string;
  moduleName: string;
  description: string;
  parentModule: string;
}
