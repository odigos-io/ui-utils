export enum TIER {
  COMMUNITY = 'community',
  CLOUD = 'cloud',
  ONPREM = 'onprem',
}

export enum PLATFORM_TYPE {
  K8S = 'k8s',
  VM = 'vm',
}

export enum PROGRAMMING_LANGUAGES {
  GO = 'go',
  JAVASCRIPT = 'javascript',
  PYTHON = 'python',
  JAVA = 'java',
  DOTNET = 'dotnet',
  CSHARP = 'csharp',
  CPLUSPLUS = 'cplusplus',
  PHP = 'php',
  RUBY = 'ruby',
  RUST = 'rust',
  SWIFT = 'swift',
  ELIXIR = 'elixir',
  MYSQL = 'mysql',
  NGINX = 'nginx',
  POSTGRES = 'postgres',
  REDIS = 'redis',
  KAFKA = 'kafka',

  IGNORED = 'ignored',
  UNKNOWN = 'unknown', // language detection completed but could not find a supported language
  PROCESSING = 'processing', // language detection is not yet complotted, data is not available
  NO_CONTAINERS = 'no containers', // language detection completed but no containers found or they are ignored
  NO_RUNNING_PODS = 'no running pods', // no running pods are available for language detection
}

export enum CRUD {
  CREATE = 'Create',
  READ = 'Read',
  UPDATE = 'Update',
  DELETE = 'Delete',
}

export enum ENTITY_TYPES {
  SOURCE = 'source',
  DESTINATION = 'destination',
  ACTION = 'action',
  INSTRUMENTATION_RULE = 'rule',
}

export enum FIELD_TYPES {
  INPUT = 'input',
  MULTI_INPUT = 'multiInput',
  MULTI_TABLED_INPUT = 'multiTabledInput', // not used by dests, but is in form components
  KEY_VALUE_PAIR = 'keyValuePairs',
  TEXTAREA = 'textarea',
  DROPDOWN = 'dropdown',
  CHECKBOX = 'checkbox',
  TOGGLE = 'toggle', // not used by dests, but is in form components
}

export enum CRD_TYPES {
  ODIGOS_CONFIGURATION = 'OdigosConfiguration',
  COLLECTORS_GROUP = 'CollectorsGroup',
  SOURCE = 'Source',
  INSTRUMENTATION_CONFIG = 'InstrumentationConfig',
  INSTRUMENTATION_INSTANCE = 'InstrumentationInstance',
  DESTINATION = 'Destination',
  INSTRUMENTATION_RULE = 'InstrumentationRule',
  PROCESSOR = 'Processor',
  ADD_CLUSTER_INFO = 'AddClusterInfo',
  DELETE_ATTTRIBUTE = 'DeleteAttribute',
  RENAME_ATTRIBUTE = 'RenameAttribute',
  PII_MASKING = 'PiiMasking',
  ERROR_SAMPLER = 'ErrorSampler',
  LATENCY_SAMPLER = 'LatencySampler',
  PROBABILISTIC_SAMPLER = 'ProbabilisticSampler',
}
