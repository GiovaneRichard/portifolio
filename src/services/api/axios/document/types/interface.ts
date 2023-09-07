export interface IDataSentMessageBackend {
  name: string;
  email: string;
  assunto: string;
  texto: string;
  ccToMe: boolean;
}

export interface IDataSentMessage {
  data: IDataSentMessageBackend;
}
