import User from "../model/User";

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
export const uppercaseFirstLetter = (data: User) => ({
  firstName: capitalizeFirstLetter(data.firstName),
  lastName: capitalizeFirstLetter(data.lastName),
  email: data.email,
  age: data.age,
  phone: data.phone,
});
