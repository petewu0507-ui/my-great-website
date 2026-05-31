import { useState, useRef, useEffect } from 'react'
import { Send, Moon, Sun, Scale, MessageCircle, Shield, AlertTriangle, CheckCircle, XCircle, Home, Briefcase, Package, ChevronRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { contractRisks, scenarios, quickQuestions, generateResponse } from '@/lib/knowledge-base'

type Language = 'zh' | 'en'
type Theme = 'light' | 'dark'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function App() {
  const [language, setLanguage] = useState<Language>('zh')
  const [theme, setTheme] = useState<Theme>('light')
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const t = {
    zh: {
      title: '中国合同法律顾问 Pro',
      subtitle: '基于专业指南的智能法律问答助手',
      placeholder: '输入您的法律问题...',
      send: '发送',
      welcome: '您好！我是您的中国合同法律顾问。我可以帮您分析合同风险、解答法律问题。请告诉我您遇到的情况。',
      quickQuestions: '快速提问',
      riskAnalysis: '风险分析',
      scenarios: '常见场景',
      disclaimer: '免责声明：本系统仅供参考，不构成法律建议。重要合同请咨询专业律师。',
      lowRisk: '低风险',
      mediumRisk: '中等风险',
      highRisk: '高风险',
      renting: '在中国租房',
      working: '在中国工作',
      trading: '从中国采购/贸易',
      toggleLang: 'English',
      toggleTheme: theme === 'light' ? '深色模式' : '浅色模式',
    },
    en: {
      title: 'China Legal Advisor',
      subtitle: 'AI-Powered Contract Risk Analysis',
      placeholder: 'Ask your legal question...',
      send: 'Send',
      welcome: 'Hello! I\'m your China Contract Legal Advisor. I can help you analyze contract risks and answer legal questions. Please tell me about your situation.',
      quickQuestions: 'Quick Questions',
      riskAnalysis: 'Risk Analysis',
      scenarios: 'Common Scenarios',
      disclaimer: 'Disclaimer: This system is for reference only and does not constitute legal advice. Consult a professional lawyer for important contracts.',
      lowRisk: 'Low Risk',
      mediumRisk: 'Medium Risk',
      highRisk: 'High Risk',
      renting: 'Renting in China',
      working: 'Working in China',
      trading: 'Buying from China / Trade',
      toggleLang: '中文',
      toggleTheme: theme === 'light' ? 'Dark Mode' : 'Light Mode',
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI processing
    setTimeout(() => {
      const response = generateResponse(text, language)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'low':
        return <CheckCircle className="w-4 h-4" />
      case 'medium':
        return <AlertTriangle className="w-4 h-4" />
      case 'high':
        return <XCircle className="w-4 h-4" />
      default:
        return null
    }
  }

  const getScenarioIcon = (icon: string) => {
    switch (icon) {
      case 'home':
        return <Home className="w-5 h-5" />
      case 'briefcase':
        return <Briefcase className="w-5 h-5" />
      case 'package':
        return <Package className="w-5 h-5" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow shadow-elegant flex-shrink-0">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl font-bold text-gradient break-words">{t[language].title}</h1>
              <p className="text-xs text-muted-foreground break-words hidden sm:block">{t[language].subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="gap-2 px-2 sm:px-4"
              title={t[language].toggleTheme}
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              <span className="hidden lg:inline whitespace-nowrap">{t[language].toggleTheme}</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="gap-2 px-2 sm:px-4"
            >
              <Sparkles className="h-4 w-4" />
              <span className="whitespace-nowrap">{t[language].toggleLang}</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Sidebar - Quick Questions & Scenarios */}
          <div className="xl:col-span-1 space-y-6">
            {/* Quick Questions */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  {t[language].quickQuestions}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickQuestions.map((q, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-left h-auto py-3 px-4 text-sm whitespace-normal break-words leading-snug min-h-[3.5rem]"
                    onClick={() => handleQuickQuestion(q[language])}
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="break-words">{q[language]}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Scenarios */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5 text-primary" />
                  {t[language].scenarios}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {scenarios.map((scenario) => (
                  <Button
                    key={scenario.id}
                    variant="outline"
                    className="w-full justify-start h-auto py-4 px-4 whitespace-normal"
                    onClick={() => handleQuickQuestion(
                      language === 'zh'
                        ? `我想了解关于${scenario.title.zh}的合同风险`
                        : `I want to know about contract risks for ${scenario.title.en}`
                    )}
                  >
                    <div className="flex items-start gap-3 w-full">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                        {getScenarioIcon(scenario.icon)}
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <div className="font-medium text-sm break-words">{scenario.title[language]}</div>
                        <div className="text-xs text-muted-foreground mt-1 space-y-0.5">
                          {scenario.keyPoints.slice(0, 2).map((point, i) => (
                            <div key={i} className="break-words leading-tight">• {point[language]}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Risk Levels Overview */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  {t[language].riskAnalysis}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { level: 'high', label: t[language].highRisk, count: contractRisks.filter(r => r.riskLevel.level === 'high').length },
                  { level: 'medium', label: t[language].mediumRisk, count: contractRisks.filter(r => r.riskLevel.level === 'medium').length },
                  { level: 'low', label: t[language].lowRisk, count: contractRisks.filter(r => r.riskLevel.level === 'low').length },
                ].map((item) => (
                  <div key={item.level} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2">
                      {getRiskIcon(item.level)}
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <Badge variant={`risk${item.level.charAt(0).toUpperCase() + item.level.slice(1)}` as any}>
                      {item.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Chat Area */}
          <div className="xl:col-span-2">
            <Card className="h-[calc(100vh-10rem)] lg:h-[calc(100vh-8rem)] flex flex-col shadow-elegant">
              <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-transparent">
                <CardTitle className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    <Scale className="h-5 w-5" />
                  </div>
                  <span>{t[language].title}</span>
                </CardTitle>
              </CardHeader>

              <ScrollArea className="flex-1 p-6">
                <div className="space-y-4">
                  {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-64 text-center animate-fade-in px-4">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow mb-4 shadow-glow">
                        <Scale className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 break-words">{t[language].welcome}</h3>
                      <p className="text-sm text-muted-foreground max-w-md break-words leading-relaxed">
                        {language === 'zh'
                          ? '您可以询问关于租赁合同、劳动合同、贸易合同等各种合同问题。我会根据专业知识为您提供风险分析和建议。'
                          : 'You can ask about lease agreements, employment contracts, trade agreements, and various contract issues. I will provide risk analysis and recommendations based on professional knowledge.'}
                      </p>
                    </div>
                  )}

                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-in`}
                    >
                      <div
                        className={`max-w-[85%] lg:max-w-[75%] rounded-lg p-4 break-words ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground shadow-elegant'
                            : 'bg-card border shadow-sm'
                        }`}
                      >
                        <div className="whitespace-pre-wrap text-sm leading-relaxed overflow-wrap-anywhere">
                          {message.content.split('\n').map((line, i) => {
                            // Simple markdown-like formatting
                            if (line.startsWith('**')) {
                              return <strong key={i} className="font-semibold break-words">{line.replace(/\*\*/g, '')}</strong>
                            }
                            if (line.startsWith('---')) {
                              return <hr key={i} className="my-2 border-t" />
                            }
                            return <div key={i} className="break-words">{line || <br />}</div>
                          })}
                        </div>
                        <div className={`text-xs mt-2 ${message.role === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="bg-card border rounded-lg p-4 shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {language === 'zh' ? '正在分析...' : 'Analyzing...'}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              <div className="border-t p-4 bg-background">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage(inputValue)
                      }
                    }}
                    placeholder={t[language].placeholder}
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage(inputValue)}
                    disabled={!inputValue.trim() || isTyping}
                    className="gap-2"
                  >
                    <Send className="h-4 w-4" />
                    {t[language].send}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center px-4">
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto leading-relaxed break-words">
            {t[language].disclaimer}
          </p>
        </div>
      </main>
    </div>
  )
}
