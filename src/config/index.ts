const env = import.meta.env;

export default {
  serverBaseURL: env.SERVER_BASE_URL as string,
};
