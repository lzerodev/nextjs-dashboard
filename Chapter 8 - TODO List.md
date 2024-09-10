# Chapter 8

## Static and Dynamic Rendering

- [ ] What static rendering is and how it can improve your application's performance.

- [ ]  What dynamic rendering is and when to use it.

- [ ] Different approaches to make your dashboard dynamic.

- [ ] Simulate a slow data fetch to see what happens.


## What is Static Rendering?

With static rendering, data fetching and rendering happens on the server at build time (when you deploy) or when revalidating data.

Whenever a user visits your application, the cached result is served. There are a couple of benefits of static rendering:

*Faster Websites* - Prerendered content can be cached and globally distributed. This ensures that users around the world can access your website's content more quickly and reliably.

*Reduced Server Load* - Because the content is cached, your server does not have to dynamically generate content for each user request.

*SEO* - Prerendered content is easier for search engine crawlers to index, as the content is already available when the page loads. This can lead to improved search engine rankings.

Static rendering is useful for UI with no data or data that is shared across users, such as a static blog post or a product page. It might not be a good fit for a dashboard that has personalized data which is regularly updated.

The opposite of static rendering is dynamic rendering.