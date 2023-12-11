# Usage for useLoading.ts

Cause this project created with scalebility I use this so you may have 1 store for isLoading state
So you can disable some component with `opacity-50 cursor-default pointer-events-none`

# Usage for useToast.ts

To show some toast for user
ususally in pop ups in bottom right corner with message like `"Error" "Please do something before doing something"`

```tsx
const toast = useToast()

// message.show('status',?'title',?'subTitle',?timeout)
// e.g
toast.show("success")
toast.show("success", "custom title")
toast.show("success", "custom title", "custom subTitle")
toast.show("success", "custom title", "custom subTitle", 3000) //disashow after 3s
```
