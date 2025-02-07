export enum CRUD {
  CREATE = 'Create',
  READ = 'Read',
  UPDATE = 'Update',
  DELETE = 'Delete',
}

export enum PROGRAMMING_LANGUAGES {
  GO = 'go',
  JAVASCRIPT = 'javascript',
  PYTHON = 'python',
  JAVA = 'java',
  DOTNET = 'dotnet',
  MYSQL = 'mysql',
  NGINX = 'nginx',

  IGNORED = 'ignored',
  UNKNOWN = 'unknown', // language detection completed but could not find a supported language
  PROCESSING = 'processing', // language detection is not yet complotted, data is not available
  NO_CONTAINERS = 'no containers', // language detection completed but no containers found or they are ignored
  NO_RUNNING_PODS = 'no running pods', // no running pods are available for language detection
}

export enum PLATFORM_TYPE {
  K8S = 'k8s',
  VM = 'vm',
}

export enum ENTITY_TYPES {
  SOURCE = 'source',
  DESTINATION = 'destination',
  ACTION = 'action',
  INSTRUMENTATION_RULE = 'rule',
}
