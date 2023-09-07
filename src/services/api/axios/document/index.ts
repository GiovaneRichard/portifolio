import { POST } from "@/shared/services/api";
import { IDataSentMessage } from "./types/interface";

export const ApiMessage = {
  sendEmailTo: async ({ data }: IDataSentMessage): Promise<string> => {
    try {
      await POST("document/sendEmail", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return "A mensagem foi enviada com sucesso!";
    } catch (error: any) {
      return error?.response?.data?.message;
    }
  },
};
