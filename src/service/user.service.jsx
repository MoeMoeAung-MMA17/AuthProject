import { api } from "./baseUrl";

export const Auth = async (arg, form) => {
  try {
    const { data } = await api.get(arg);

    const finder = data.find((i) => i.email === form.email);
    console.log(finder);
    if (!finder) {
      throw new Error("User Not Found");
    }

    const comparePassword = finder.password === form.password;

    if (!comparePassword) {
      throw new Error("Password Not Correct");
    }

    return finder;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const RegAuth = async (arg, form) => {
  try {
    const { data } = await api.post(arg, form);
    console.log(data);

    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
