import { setApiKey, postLinks } from "@short.io/client-node";

export async function createShortUrl(originalUrl: any) {
    setApiKey("sk_LboXusSjSwDOYopc")

    const response = await postLinks({
      body: {
        originalURL: originalUrl,
        domain: 'linkly-app.short.gy'
      }
    });
  
    if (!response) {
      throw new Error('Failed to shorten URL');
    }
  
    return response.data;
  }
  