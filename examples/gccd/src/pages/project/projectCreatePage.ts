import { Context } from "@grucloud/bau-ui/context";
import button from "@grucloud/bau-ui/button";
import form from "@grucloud/bau-ui/form";

import page from "../../components/page";
import projectCreateContent from "../../components/project/projectCreateContent";

export default function (context: Context) {
  const { bau, stores, config, window } = context;
  const { h1, p, header, footer } = bau.tags;
  const ButtonCancel = button(context, {
    variant: "outline",
    color: "neutral",
  });
  const ButtonCreate = button(context, { color: "primary", variant: "solid" });
  const Page = page(context);
  const Form = form(context);

  const ProjectCreateContent = projectCreateContent(context);

  return function ProjectCreatePage({ org_id }: any) {
    const onsubmit = async (event: any) => {
      event.preventDefault();
      const { project_name } = event.target.elements;

      const { project_id } = await stores.project.createQuery.run(
        { org_id },
        {
          project_name: project_name.value,
        }
      );

      window.history.pushState(
        "",
        "",
        `${config.base}/org/${org_id}/projects/${project_id}`
      );
    };

    return Page(
      Form(
        { onsubmit },
        header(h1("Create a new project")),
        p(
          "A project is a container for workspaces representing various environment of the infrastructure."
        ),
        ProjectCreateContent({}),
        footer(
          ButtonCreate({ type: "submit" }, "Create"),
          ButtonCancel({ onclick: () => window.history.back() }, "Cancel")
        )
      )
    );
  };
}
