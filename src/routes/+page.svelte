<svelte:head>
  <title>Linkly - URL Shortener</title>
</svelte:head>

<script>
// @ts-nocheck

  import { createShortUrl } from '$lib/api/createShortUrl';

  let originalUrl = '';
  let shortUrl = '';
  let loading = false;
  let error = '';
</script>

<div class="bg-background text-white min-h-screen p-4">
  <!-- Navbar -->
  <header class="flex justify-between items-center mb-8">
    <h1 class="text-4xl font-bold bg-linkly-gradient text-transparent bg-clip-text">
        Linkly
    </h1>
  </header>

  <!-- Main Section -->
  <section class="text-center my-10">
    <h1 class="text-5xl font-extrabold text-center bg-headline-gradient text-transparent bg-clip-text">
        Shorten Your Loooong Links :)
    </h1>
    <p class="text-gray-400 mb-6">An efficient and easy-to-use URL shortening service.</p>
    <div class="flex justify-center items-center gap-2">
      <input
        type="url"
        placeholder="Enter the link here"
        bind:value={originalUrl}
        class="w-2/3 p-3 rounded-md text-black"
      />
      <button
        class="bg-primary px-6 py-3 rounded-md"
        on:click={async () => {
          loading = true;
          try {
            const response = await createShortUrl(originalUrl);
            
            shortUrl = response?.secureShortURL;
          } catch {
            error = 'Failed to shorten URL';
          } finally {
            loading = false;
          }
        }}
      >
        {loading ? 'Shortening...' : 'Shorten Now!'}
      </button>
    </div>
    {#if error}
      <p class="text-red-500 mt-2">{error}</p>
    {/if}
    {#if shortUrl}
      <p class="mt-4">✅ Shortened URL: <a href="{shortUrl}" target="_blank" class="text-secondary">{shortUrl}</a></p>
    {/if}
  </section>
</div>
