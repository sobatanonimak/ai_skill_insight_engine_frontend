# 🎨 AI Skill Insight Engine - Frontend

**Modern React/Next.js UI for AI Skill Analysis**

A beautiful, responsive web interface for the AI Skill Insight Engine API. Built with Next.js 14, Tailwind CSS, and TypeScript.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)

## ✨ Features

- **🎨 Modern UI** - Beautiful gradient design with dark mode support
- **⚡ Real-time Analysis** - Live results with loading states
- **📱 Responsive** - Works perfectly on desktop, tablet, and mobile
- **🔄 Multiple Formats** - Support for Markdown, JSON, and HTML output
- **⬇️ Download Results** - Export analysis reports
- **🔗 API Integration** - Seamless connection to backend API
- **♿ Accessible** - WCAG compliant with proper ARIA labels

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sobatanonimak/ai_skill_insight_engine.git
   cd ai_skill_insight_engine_frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment** (optional):
   ```bash
   cp .env.example .env.local
   # Edit .env.local if you need to change API URL
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Analyzing a Skill

1. Enter the URL of an AI skill documentation page
2. Select output format (Markdown, JSON, or HTML)
3. Click "Analyze"
4. View results instantly with beautiful formatting
5. Download the report if needed

### Example URLs

- Pollinations API Docs: `https://github.com/pollinations/pollinations/blob/main/APIDOCS.md`
- Moltbook Skills: `https://www.moltbook.com/skill.md`

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Frontend UI"
   git remote add origin https://github.com/sobatanonimak/ai_skill_insight_engine_frontend.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables:
     - `API_URL`: `https://ai_skill_insight_engine.vercel.app`
   - Deploy!

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `API_URL` | Backend API URL | `https://ai_skill_insight_engine.vercel.app` |
| `NEXT_PUBLIC_API_KEY` | Optional API key for backend authentication | (empty) |

**🔐 Security Note:** If the backend has `FRONTEND_API_KEY` enabled, you must set `NEXT_PUBLIC_API_KEY` in your Vercel environment variables with the same value. This ensures only your frontend can access the backend API.

## 🎨 Customization

### Colors

The UI uses a purple/pink gradient theme. To customize:

1. Edit `tailwind.config.js`
2. Modify the gradient colors in `app/page.tsx`

### Branding

Update the following in `app/page.tsx`:
- Logo (Sparkles icon)
- Title and description
- Footer text
- GitHub links

## 📁 Project Structure

```
ai_skill_insight_engine_frontend/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Main page component
│   └── favicon.ico
├── public/               # Static assets
├── .env.example          # Environment variables template
├── .gitignore
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Markdown**: react-markdown
- **Deployment**: Vercel

## 🔗 Links

- **Live Demo**: [Coming soon]
- **Backend API**: https://ai_skill_insight_engine.vercel.app
- **GitHub Repo**: https://github.com/sobatanonimak/ai_skill_insight_engine
- **Pollinations AI**: https://pollinations.ai

## 🙏 Acknowledgments

- **[Pollinations AI](https://pollinations.ai)** - For the powerful API
- **[Next.js](https://nextjs.org)** - For the amazing framework
- **[Tailwind CSS](https://tailwindcss.com)** - For the utility-first CSS
- **[Lucide](https://lucide.dev)** - For the beautiful icons

## 📝 License

This project is part of the AI Skill Insight Engine and is built to showcase Pollinations AI capabilities.

---

<div align="center">

**Built with ❤️ using [Pollinations AI](https://pollinations.ai)**

[![Built With pollinations.ai](https://img.shields.io/badge/Built%20With-pollinations.ai-000000?style=for-the-badge)](https://pollinations.ai)

</div>
