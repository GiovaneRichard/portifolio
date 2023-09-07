import { ApiGithub } from "@/services/api/github/apiGithub";
import { IOptions } from "@/types/options";

interface IGetAllProjects {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setProjectsOptions: React.Dispatch<React.SetStateAction<IOptions>>;
}

export const getAllProjects = async ({
  setLoading,
  setProjectsOptions,
}: IGetAllProjects) => {
  setLoading(true);

  const getAllProjects = await ApiGithub.getAllProjects();
  console.log(getAllProjects);

  // const getNotExist =
  // typeof getAllProjects === "undefined" ||
  // typeof getAllProjects === "string" ||
  // getAllProjects.length === 0;
};
