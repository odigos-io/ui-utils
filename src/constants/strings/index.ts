export const FORM_ALERTS = {
  REQUIRED_FIELDS: 'Required fields are missing',
  FIELD_IS_REQUIRED: 'This field is required',
  FORBIDDEN: 'Forbidden',
  ENTERPRISE_ONLY: (str: string = 'This') => `${str} is an Enterprise feature. Please upgrade your plan.`,
  CANNOT_EDIT_RULE: 'Cannot edit a system-managed instrumentation rule',
  CANNOT_DELETE_RULE: 'Cannot delete a system-managed instrumentation rule',
  LATENCY_HTTP_ROUTE: 'HTTP route must start with a forward slash "/"',
  READONLY_WARNING: "You're not allowed to create/update/delete in readonly mode",
}

export const DISPLAY_TITLES = {
  NAMESPACE: 'Namespace',
  NAME: 'Name',
  KIND: 'Kind',

  ACTION: 'Action',
  ACTIONS: 'Actions',
  ACTION_DETAILS: 'Action Details',

  INSTRUMENTATION_RULE: 'Instrumentation Rule',
  INSTRUMENTATION_RULES: 'Instrumentation Rules',
  INSTRUMENTATION_RULE_DETAILS: 'Instrumentation Rule Details',

  DESTINATION: 'Destination',
  DESTINATIONS: 'Destinations',
  DESTINATION_DETAILS: 'Destination Details',

  SOURCE: 'Source',
  SOURCES: 'Sources',
  SOURCE_DETAILS: 'Source Details',

  TYPE: 'Type',
  NOTES: 'Notes',
  STATUS: 'Status',
  READONLY: 'Readonly',
  LANGUAGE: 'Language',
  MONITORS: 'Monitors',
  SIGNALS_FOR_PROCESSING: 'Signals for Processing',
  MANAGED_BY_PROFILE: 'Managed by Profile',

  API_TOKEN: 'API Token',
  API_TOKENS: 'API Tokens',
  DESCRIBE_ODIGOS: 'Describe Odigos',
  DESCRIBE_SOURCE: 'Describe Source',

  DETECTED_CONTAINERS: 'Detected Containers',
  DETECTED_CONTAINERS_DESCRIPTION: 'The system automatically instruments the containers it detects with a supported programming language.',
  CONTAINER_NAME: 'Container Name',
}
