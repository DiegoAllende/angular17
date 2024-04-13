export const ROUTES_PATHS = {
  AUTH: {
    DEFAULT: 'auht',
    LOGIN: 'login',
  },
}

export const INTERNAL_PATHS = {
  AUTH_DEFAULT: `${ROUTES_PATHS.AUTH.DEFAULT}`,
  AUTH_LOGIN: `${ROUTES_PATHS.AUTH.LOGIN}`,
}

export const INTERNAL_ROUTES = {
  AUTH_LOGIN: `${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_LOGIN}`,
}