'use client'

import { useState } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { Sparkles, Zap, Shield, ArrowRight, Loader2, CheckCircle, AlertCircle, ExternalLink, Github } from 'lucide-react'

const API_URL = process.env.API_URL || 'https://ai_skill_insight_engine.vercel.app'
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || ''

interface AnalysisResult {
  success: boolean
  report?: string
  error?: string
  analysis?: {
    summary: string
    functionalities: string[]
    use_cases: string[]
    improvement_suggestions: string[]
  }
}

export default function Home() {
  const [url, setUrl] = useState('')
  const [format, setFormat] = useState('markdown')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResult(null)

    try {
      const headers: Record<string, string> = {}
      if (API_KEY) {
        headers['X-API-Key'] = API_KEY
      }
      
      const response = await axios.get(`${API_URL}/analyze`, {
        params: { url, format },
        headers,
        timeout: 60000,
      })
      
      setResult({
        success: true,
        report: response.data,
      })
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to analyze. Please try again.')
      if (err.response?.data) {
        setResult(err.response.data)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <h1 className="text-2xl font-bold text-white">AI Skill Insight Engine</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/sobatanonimak/ai_skill_insight_engine"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={`${API_URL}/health`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="hidden sm:inline">API Status</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Analyze AI Skills in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Seconds
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Get instant insights from any AI skill documentation. Powered by Pollinations AI.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Get comprehensive analysis in seconds, not hours</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-gray-400">Advanced AI extracts key insights automatically</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Rate Limited</h3>
              <p className="text-gray-400">Protected against abuse with smart rate limiting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <label htmlFor="url" className="block text-lg font-medium text-white mb-2">
                Skill Documentation URL
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="url"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/skill.md"
                  required
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="markdown">Markdown</option>
                  <option value="json">JSON</option>
                  <option value="html">HTML</option>
                </select>
                <button
                  type="submit"
                  disabled={loading || !url}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <span>Analyze</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {/* Example URLs */}
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Try these examples:</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setUrl('https://github.com/pollinations/pollinations/blob/main/APIDOCS.md')}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-sm text-gray-300 transition-colors"
                  >
                    Pollinations API
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrl('https://www.moltbook.com/skill.md')}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-sm text-gray-300 transition-colors"
                  >
                    Moltbook Skills
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Results Section */}
      {(result || error) && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-1">Error</h3>
                  <p className="text-gray-300">{error}</p>
                </div>
              </div>
            )}

            {result?.success && (
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <h3 className="text-lg font-semibold text-white">Analysis Complete</h3>
                  </div>
                  <button
                    onClick={() => {
                      const blob = new Blob([result.report || ''], { type: 'text/markdown' })
                      const url = URL.createObjectURL(blob)
                      const a = document.createElement('a')
                      a.href = url
                      a.download = 'skill-analysis.md'
                      a.click()
                    }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded text-sm text-white transition-colors"
                  >
                    Download
                  </button>
                </div>
                <div className="p-6">
                  <div className="prose prose-invert max-w-none">
                    <ReactMarkdown>{result.report || ''}</ReactMarkdown>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">
              Built with ❤️ using{' '}
              <a
                href="https://pollinations.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Pollinations AI
              </a>
            </p>
            <p className="text-sm">
              © 2026 AI Skill Insight Engine. Open source on{' '}
              <a
                href="https://github.com/sobatanonimak/ai_skill_insight_engine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
