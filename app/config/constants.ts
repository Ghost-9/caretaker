const SITE_NAME: string = "Attend Assist"
const VERSION: string = "0.0.1"
const DESCRIPTION: string = 'Empowering your health and uplifting your life with trusted healthcare services.';
const TITLE: string = 'Attend Assist - Your Trusted Healthcare Partner';


const API_ENDPOINTS: { [key: string]: string } = {
  LOGIN: '/api/login',
  REGISTER: '/api/register',
};

const META: { AUTHOR: string; KEYWORDS: string } = {
  AUTHOR: 'Owl-e Studios',
  KEYWORDS: 'nextjs, react, health & wellness site, web development',
};

export const constants = {
  SITE_NAME,
  VERSION,
  DESCRIPTION,
  TITLE,
  API_ENDPOINTS,
  META,
};
