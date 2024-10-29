export default {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  pokerBaseUrl: process.env.NEXT_PUBLIC_POKER_API_BASE_URL,
  consultantProfileBaseUrl: (path: string) => `/api/v1/consultant/profile${path}`,
  contentManagementProfileBaseUrl: (path: string) => `/flute/api/v1${path}`,
  buzzBaseUrl: (path: string) => `/flute/flute_buzz/v1${path}`,
  dashboardBaseUrl: (path: string) => `/flute/dashboard/v1${path}`,
  metaBaseUrl: (path: string) => `/meta${path}`,
  coachRatingBaseUrl: (path: string) => `/coach-rating${path}`,
  testimonialBaseUrl:(path:string) => `/flute/api/v1${path}`,
  socialiconsBaseUrl:(path:string) => `/flute/api/v1${path}`,
  accordionBaseUrl:(path:string) => `/flute/api/v1${path}`,
  careerBaseUrl:(path:string) => `/flute/api/v1${path}`
}


 