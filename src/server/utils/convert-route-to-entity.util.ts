const mapping: Record<string, string> = {
  meetings: 'meeting',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
