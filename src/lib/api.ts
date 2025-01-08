export async function createShortUrl(originalUrl: any) {
    const response = await fetch('https://api.example.com/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: originalUrl }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to shorten URL');
    }
  
    return await response.json();
  }
  