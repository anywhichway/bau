import input from "@grucloud/bau-ui/input";
import { Context } from "@grucloud/bau-ui/context";
import gitPersonalAccessCodeTest from "./gitPersonalAccessCodeTest";
import gitHubStore from "../../stores/gitHubStore";

export default (context: Context) => {
  const { bau } = context;
  const { section, label, small, a, h2 } = bau.tags;
  const { authenticatedUserQuery } = gitHubStore(context);
  const Input = input(context);

  const GitPersonalAccessCodeTest = gitPersonalAccessCodeTest(context);

  return function gitPersonalAccessCodeGitHub(props: any) {
    const { org_id } = props;
    const search = new URLSearchParams({
      scopes: "repo",
      description: `Organisation ${org_id} by GruCloud`,
    }).toString();

    return section(
      h2("GitHub Personal Access Code"),
      label(
        "GitHub Username",
        Input({
          autofocus: true,
          placeholder: "Git Username",
          name: "username",
          autocomplete: "username",
          minLength: 3,
          maxLength: 128,
          required: true,
        })
      ),
      label(
        "GitHub Personal Access Code or password",
        Input({
          placeholder: "Git Personal Access Code",
          type: "password",
          name: "password",
          autocomplete: "current-password",
          minLength: 8,
          required: true,
        }),
        small(
          a(
            {
              href: `https://github.com/settings/tokens/new?${search}`,
              target: "_blank",
            },
            "Create a new Personal Access Code with the repo scope"
          )
        )
      ),
      () => GitPersonalAccessCodeTest(authenticatedUserQuery)
    );
  };
};
