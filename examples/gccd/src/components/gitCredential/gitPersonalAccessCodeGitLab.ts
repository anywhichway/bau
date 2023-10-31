import input from "@grucloud/bau-ui/input";
import { Context } from "@grucloud/bau-ui/context";

export default (context: Context) => {
  const { bau } = context;
  const { section, label, small, a, h2 } = bau.tags;
  const Input = input(context);
  return function gitPersonalAccessCodeGitLab(props: any) {
    const { org_id } = props;
    const search = new URLSearchParams({
      scopes: "api,read_user",
      name: `Organisation ${org_id} by GruCloud`,
    }).toString();

    return section(
      h2("GitLab Personal Access Code"),
      label(
        "Gitlab Username",
        Input({
          autofocus: true,
          placeholder: "Git Username",
          name: "username",
          minLength: 3,
          maxLength: 128,
          required: true,
        })
      ),
      label(
        "Gitlab Personal Access Code or password",
        Input({
          placeholder: "Git Personal Access Code",
          type: "password",
          name: "password",
          minLength: 8,
          required: true,
        }),
        small(
          a(
            {
              href: `https://gitlab.com/-/profile/personal_access_tokens?${search}`,
              target: "_blank",
            },
            "Create a new Personal Access Code with the api and read_user scopes."
          )
        )
      )
    );
  };
};
