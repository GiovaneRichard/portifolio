import { NextRouter } from "next/router";

export interface IDeletCancelSaveChangeStatusObject {
  title: string;
  description: string;
  executeFunctionOnConfirm?: () => Promise<any>;
  executeFunctionOnCancel?: () => Promise<any>;
  redirectUserConfirm?: {
    route: NextRouter;
    pathNameSendUser: string;
  };
  typeModal: "CANCEL" | "SAVE_OR_EDIT" | "CHANGE_STATUS" | "DELETE";
  textCancel?: string;
  textSend?: string;
}

export const objectConfirmModal = ({
  title,
  description,
  executeFunctionOnConfirm,
  executeFunctionOnCancel,
  redirectUserConfirm,
  typeModal,
  textCancel,
  textSend,
}: IDeletCancelSaveChangeStatusObject) => {
  const cancelText =
    textCancel || (typeModal === "CANCEL" ? "Continuar Criando" : "voltar");

  const okText =
    textSend ||
    (typeModal === "CANCEL"
      ? "Canelar e Voltar"
      : typeModal === "DELETE"
      ? "Excluir"
      : typeModal === "CHANGE_STATUS"
      ? "Mudar"
      : "Salvar");

  const object = {
    redirectUserConfirm,
    executeFunctionOnCancel,
    executeFunctionOnConfirm,
    title,
    cancelText,
    description,
    okText,
  };

  return object;
};
