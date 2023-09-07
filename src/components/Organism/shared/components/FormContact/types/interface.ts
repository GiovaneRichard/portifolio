export interface IContact {
  name: string;
  assunto: string;
  email: string;
  message: string;
  ccToMe: false;
}

export const initiationValues = {
  name: "",
  assunto: "",
  email: "",
  message: "",
  ccToMe: false,
};
