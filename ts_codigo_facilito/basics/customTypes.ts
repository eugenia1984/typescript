type Person = {
  name: string;
  code: string | number;
  description?: string;
};

const newPerson: Person = {
  code: "H",
  name: "Kevin",
};

// Union type
type ServiceResponse = string | null | number | undefined;

type UserCharges = 'admin' | 'normal' | 'superUser';

let response : ServiceResponse;
const myUserAdminType : UserCharges = 'admin';
