## 🚀 Getting Started with Your Project

Welcome! Follow this guide to set up your environment and start coding your page in the shared Next.js + Tailwind + shadcn/ui project.

---

### ✅ Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- A GitHub account

---

### 1. 🧰 Setup Git & GitHub

#### a. Configure Git (only once)
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

#### b. Authenticate with GitHub  

---

### 2. ⬇️ Clone the Starter Repository

```bash
git clone [REPO_LINK]
cd [REPO_NAME] 
```

---

### 3. 🌿 Create Your Branch

Name it after your GitHub username:

```bash
git checkout -b your-username
```

---

### 4. 🧱 Create Your Folder and Page

Inside `app/`, create your folder and `page.tsx` file:

```bash
mkdir app/your-username
touch app/your-username/page.tsx
```

Then edit it using shadcn/ui components:

```tsx
// app/your-username/page.tsx
import { Button } from "@/components/ui/button"

export default function MyPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hello from your-username!</h1>
      <Button>Click Me</Button>
    </div>
  )
}
```

### Project Stack
- Typescript
- NextJs
- Tailwind
- Shadcn (shandcn-ui is deprecated)

---

---

### 5. 🎨 Installing shadcn/ui Components (if needed)

If you want to use a component from [https://ui.shadcn.com/](https://ui.shadcn.com/), install it using:

```bash
npx shadcn@latest add [component-name]
```

Example:

```bash
npx shadcn@latest add card
```

💡 Only install components that you need and are not already in the project.

---

### 6. ▶️ Run the Project

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open: [http://localhost:3000/students/your-username](http://localhost:3000/students/your-username)

---

### 7. 🚀 Push Your Work

```bash
git add .
git commit -m "Add my page"
git push origin your-username
```

---

### ✅ You're Done!

You now have a personal route in the project using Tailwind and shadcn/ui. Happy coding!
