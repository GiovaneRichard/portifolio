import { IModalProps } from "@/components/Modal/types";
import { NextRouter } from "next/router";

interface IConfirModal {
  confirm: (data: Omit<IModalProps, "isOpen">) => void;
  destroy: () => void;
  confirmObject: {
    title: string;
    cancelText: string;
    okText: string;
    description: string;
    redirectUserConfirm?: {
      router: NextRouter;
      pathNameSendUser: string;
    };
    executeFunctionOnConfirm?: () => Promise<any>;
    executeFunctionOnCancel?: () => Promise<any>;
  };
}

export const confirModal = ({
  confirm,
  destroy,
  confirmObject,
}: IConfirModal) => {
  const {
    cancelText,
    description,
    okText,
    title,
    redirectUserConfirm,
    executeFunctionOnConfirm,
    executeFunctionOnCancel,
  } = confirmObject;

  confirm({
    title,
    cancelText,
    okText,
    type: "CONFIRM",
    description,
    onCancel: async () => {
      destroy();
      if (executeFunctionOnCancel) await executeFunctionOnCancel();
    },
    onOk: async () => {
      destroy();

      if (redirectUserConfirm)
        redirectUserConfirm.router.push(redirectUserConfirm.pathNameSendUser);

      if (executeFunctionOnConfirm) await executeFunctionOnConfirm();
    },
  });
};
