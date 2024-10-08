import { createThirdwebClient } from "thirdweb";


export const client = createThirdwebClient(import.meta.env.VITE_THIRDWEB_CLIENT_ID ? {
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
} : {
  secretKey: import.meta.env.THIRDWEB_SECRET_KEY,
});

