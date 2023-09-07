export interface ISendMessageTo {
  name: string;
  email: string;
  ccToMe: boolean;
  subject: string;
  annexes?: (File | null)[];
  message: string;
}
