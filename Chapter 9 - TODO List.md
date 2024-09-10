# Chapter 9

## Streaming

- [x] What streaming is and when you might use it.

- [x] How to implement streaming with loading.tsx and Suspense.

- [x] What loading skeletons are.

- [x] What route groups are, and when you might use them.

- [x] Where to place Suspense boundaries in your application.

In general, what is considered good practice when working with Suspense and data fetching?

*Move data fetches down to the components that need it*

**By moving data fetching down to the components that need it, you can create more granular Suspense boundaries. This allows you to stream specific components and prevent the UI from blocking.**