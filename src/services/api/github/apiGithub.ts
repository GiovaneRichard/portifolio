import { GET } from "@/shared/services/api";

export const ApiGithub = {
  getAllProjects: async (): Promise<string> => {
    try {
      const response = await GET<string>(
        `https://api.github.com/users/GiovaneRichard`
      );
      console.log(response);

      return "";
    } catch (error: any) {
      return error?.message?.data?.message;
    }
  },
};
