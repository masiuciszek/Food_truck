interface Link {
  name: string;
  path: string;
}

type FnVoid = () => void;

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

type Status = "LOADING" | "PENDING" | "RESOLVED" | "REJECTED" | "NATURAL";

interface LoginFormData {
  email: string;
  password: string;
}
interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type FormDataType = LoginFormData | RegisterFormData;
