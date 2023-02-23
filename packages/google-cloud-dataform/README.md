[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Dataform API: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/dataform.svg)](https://www.npmjs.org/package/@google-cloud/dataform)




dataform client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-dataform/CHANGELOG.md).

* [Dataform API Node.js Client API Reference][client-docs]
* [Dataform API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-dataform](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-dataform)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Dataform API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/dataform
```




## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Dataform.cancel_workflow_invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.cancel_workflow_invocation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.cancel_workflow_invocation.js,samples/README.md) |
| Dataform.commit_workspace_changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.commit_workspace_changes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.commit_workspace_changes.js,samples/README.md) |
| Dataform.create_compilation_result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_compilation_result.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_compilation_result.js,samples/README.md) |
| Dataform.create_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_repository.js,samples/README.md) |
| Dataform.create_workflow_invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_workflow_invocation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_workflow_invocation.js,samples/README.md) |
| Dataform.create_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_workspace.js,samples/README.md) |
| Dataform.delete_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_repository.js,samples/README.md) |
| Dataform.delete_workflow_invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_workflow_invocation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_workflow_invocation.js,samples/README.md) |
| Dataform.delete_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_workspace.js,samples/README.md) |
| Dataform.fetch_file_diff | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_file_diff.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_file_diff.js,samples/README.md) |
| Dataform.fetch_file_git_statuses | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_file_git_statuses.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_file_git_statuses.js,samples/README.md) |
| Dataform.fetch_git_ahead_behind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_git_ahead_behind.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_git_ahead_behind.js,samples/README.md) |
| Dataform.fetch_remote_branches | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_remote_branches.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_remote_branches.js,samples/README.md) |
| Dataform.get_compilation_result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_compilation_result.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_compilation_result.js,samples/README.md) |
| Dataform.get_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_repository.js,samples/README.md) |
| Dataform.get_workflow_invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_workflow_invocation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_workflow_invocation.js,samples/README.md) |
| Dataform.get_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_workspace.js,samples/README.md) |
| Dataform.install_npm_packages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.install_npm_packages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.install_npm_packages.js,samples/README.md) |
| Dataform.list_compilation_results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_compilation_results.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_compilation_results.js,samples/README.md) |
| Dataform.list_repositories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_repositories.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_repositories.js,samples/README.md) |
| Dataform.list_workflow_invocations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_workflow_invocations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_workflow_invocations.js,samples/README.md) |
| Dataform.list_workspaces | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_workspaces.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_workspaces.js,samples/README.md) |
| Dataform.make_directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.make_directory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.make_directory.js,samples/README.md) |
| Dataform.move_directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.move_directory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.move_directory.js,samples/README.md) |
| Dataform.move_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.move_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.move_file.js,samples/README.md) |
| Dataform.pull_git_commits | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.pull_git_commits.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.pull_git_commits.js,samples/README.md) |
| Dataform.push_git_commits | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.push_git_commits.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.push_git_commits.js,samples/README.md) |
| Dataform.query_compilation_result_actions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_compilation_result_actions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_compilation_result_actions.js,samples/README.md) |
| Dataform.query_directory_contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_directory_contents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_directory_contents.js,samples/README.md) |
| Dataform.query_workflow_invocation_actions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_workflow_invocation_actions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_workflow_invocation_actions.js,samples/README.md) |
| Dataform.read_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.read_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.read_file.js,samples/README.md) |
| Dataform.remove_directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.remove_directory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.remove_directory.js,samples/README.md) |
| Dataform.remove_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.remove_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.remove_file.js,samples/README.md) |
| Dataform.reset_workspace_changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.reset_workspace_changes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.reset_workspace_changes.js,samples/README.md) |
| Dataform.update_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.update_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.update_repository.js,samples/README.md) |
| Dataform.write_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.write_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.write_file.js,samples/README.md) |
| Dataform.cancel_workflow_invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.cancel_workflow_invocation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.cancel_workflow_invocation.js,samples/README.md) |
| Dataform.commit_workspace_changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.commit_workspace_changes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.commit_workspace_changes.js,samples/README.md) |
| Dataform.create_compilation_result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_compilation_result.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_compilation_result.js,samples/README.md) |
| Dataform.create_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_repository.js,samples/README.md) |
| Dataform.create_workflow_invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workflow_invocation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workflow_invocation.js,samples/README.md) |
| Dataform.create_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workspace.js,samples/README.md) |
| Dataform.delete_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_repository.js,samples/README.md) |
| Dataform.delete_workflow_invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workflow_invocation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workflow_invocation.js,samples/README.md) |
| Dataform.delete_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workspace.js,samples/README.md) |
| Dataform.fetch_file_diff | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_file_diff.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_file_diff.js,samples/README.md) |
| Dataform.fetch_file_git_statuses | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_file_git_statuses.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_file_git_statuses.js,samples/README.md) |
| Dataform.fetch_git_ahead_behind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_git_ahead_behind.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_git_ahead_behind.js,samples/README.md) |
| Dataform.fetch_remote_branches | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_remote_branches.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_remote_branches.js,samples/README.md) |
| Dataform.get_compilation_result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_compilation_result.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_compilation_result.js,samples/README.md) |
| Dataform.get_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_repository.js,samples/README.md) |
| Dataform.get_workflow_invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workflow_invocation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workflow_invocation.js,samples/README.md) |
| Dataform.get_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workspace.js,samples/README.md) |
| Dataform.install_npm_packages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.install_npm_packages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.install_npm_packages.js,samples/README.md) |
| Dataform.list_compilation_results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_compilation_results.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_compilation_results.js,samples/README.md) |
| Dataform.list_repositories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_repositories.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_repositories.js,samples/README.md) |
| Dataform.list_workflow_invocations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workflow_invocations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workflow_invocations.js,samples/README.md) |
| Dataform.list_workspaces | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workspaces.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workspaces.js,samples/README.md) |
| Dataform.make_directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.make_directory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.make_directory.js,samples/README.md) |
| Dataform.move_directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.move_directory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.move_directory.js,samples/README.md) |
| Dataform.move_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.move_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.move_file.js,samples/README.md) |
| Dataform.pull_git_commits | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.pull_git_commits.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.pull_git_commits.js,samples/README.md) |
| Dataform.push_git_commits | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.push_git_commits.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.push_git_commits.js,samples/README.md) |
| Dataform.query_compilation_result_actions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_compilation_result_actions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_compilation_result_actions.js,samples/README.md) |
| Dataform.query_directory_contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_directory_contents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_directory_contents.js,samples/README.md) |
| Dataform.query_workflow_invocation_actions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_workflow_invocation_actions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_workflow_invocation_actions.js,samples/README.md) |
| Dataform.read_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.read_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.read_file.js,samples/README.md) |
| Dataform.remove_directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.remove_directory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.remove_directory.js,samples/README.md) |
| Dataform.remove_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.remove_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.remove_file.js,samples/README.md) |
| Dataform.reset_workspace_changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.reset_workspace_changes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.reset_workspace_changes.js,samples/README.md) |
| Dataform.update_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_repository.js,samples/README.md) |
| Dataform.write_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.write_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.write_file.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/quickstart.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/test/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/test/quickstart.js,samples/README.md) |



The [Dataform API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @google-cloud/dataform@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).







This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.


More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/dataform/latest
[product-docs]: https://dataform.co/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dataform.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started