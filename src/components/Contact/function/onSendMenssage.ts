import { IDataSentMessageBackend } from "@/services/api/axios/document/types/interface";
import { ISendMessageTo } from "../types/interface";
import { ApiMessage } from "@/services/api/axios/document";
import { IModalProps } from "@/components/Modal/types";

interface IOnSendMessage {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateData: React.Dispatch<React.SetStateAction<boolean>>;
  success: (data: Omit<IModalProps, "isOpen">) => void;
  onOpenModalWarning: () => void;
  valuesSubmit: ISendMessageTo;
}

export const onSendMessage = async ({
  setLoading,
  setUpdateData,
  valuesSubmit,
}: IOnSendMessage) => {
  setLoading(true);

  const { name, ccToMe, email, message, subject } = valuesSubmit;
  // const allFilesBase64: string[] = [];

  // for (let i = 0; i < annexes?.length; i++) {
  //   if (annexes[i] !== null) {
  //     allFilesBase64.push(await fileToBase64(annexes[i]!));
  //   }
  // }

  const data: IDataSentMessageBackend = {
    name,
    assunto: subject,
    email,
    texto: message,
    ccToMe,
  };

  const sending = await ApiMessage.sendEmailTo({ data });

  if (sending === "A mensagem foi enviada com sucesso!") {
    success({
      title: "A mensagem foi enviada com sucesso!",
    });
    return setUpdateData(true);
  }

  onOpenModalWarning();
  return setLoading(false);
};
