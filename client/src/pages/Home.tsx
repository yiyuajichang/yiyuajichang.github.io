import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { ChevronRight, Zap, Globe, Lock, Smartphone, TrendingUp, Server, Shield } from "lucide-react";
import { getRecommendedAirports, airportBrands } from "@/lib/airportData";

const heroBackgroundUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663292951984/ip9AU4qmDpnEnghaEZuckT/hero-background-YT9jbFJvzgDqP7PJEyGC7t.webp";
const featureIconsBgUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663292951984/ip9AU4qmDpnEnghaEZuckT/feature-icons-bg-VqhvWAVsFLkDHbfZUhY3ED.webp";

export default function Home() {
  const yiyuanAirport = airportBrands[0];
  const recommendedAirports = getRecommendedAirports();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-20 px-4 md:py-32 text-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackgroundUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            一元机场
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            性价比之王 · 全球加速 · 安全可靠
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categories">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                浏览所有机场 <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              了解更多
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">850+</div>
              <p className="text-slate-600 font-medium">平均速度 Mbps</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">280+</div>
              <p className="text-slate-600 font-medium">全球节点</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">45ms</div>
              <p className="text-slate-600 font-medium">平均延迟</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">7/24</div>
              <p className="text-slate-600 font-medium">技术支持</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            关于一元机场
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                一元机场是一个专为全球用户设计的高效、安全、经济的代理服务平台。我们致力于为用户提供稳定的网络加速、隐私保护和内容解锁服务。
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                凭借先进的技术架构和遍布全球的节点部署，一元机场能够为用户提供极速的网络体验。无论您身在何处，我们都能帮助您快速、安全地访问全球互联网资源。
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                我们采用业界领先的加密技术，确保您的所有网络活动都受到保护。我们不记录用户日志，尊重用户隐私，让您可以放心地使用我们的服务。
              </p>
            </div>
            <div
              className="rounded-lg overflow-hidden h-96"
              style={{
                backgroundImage: `url(${featureIconsBgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            技术规格
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-3">
                <Zap className="h-6 w-6 text-orange-500 mb-2" />
                <CardTitle className="text-lg">超高速度</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  平均速度达 <strong>850 Mbps</strong>，支持 4K 视频流媒体播放和大文件下载。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-3">
                <Globe className="h-6 w-6 text-blue-500 mb-2" />
                <CardTitle className="text-lg">全球节点</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  部署在 <strong>6 大洲 50+ 国家</strong>，280+ 个高速节点，智能路由优化。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-3">
                <Lock className="h-6 w-6 text-green-500 mb-2" />
                <CardTitle className="text-lg">军级加密</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  采用 <strong>AES-256 加密</strong>，支持 Shadowsocks、Trojan、VLESS 等多种协议。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-3">
                <Smartphone className="h-6 w-6 text-purple-500 mb-2" />
                <CardTitle className="text-lg">多设备支持</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  支持 <strong>Windows、Mac、iOS、Android</strong>，同时连接 5 台设备。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Protocol Support */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            支持的协议与服务
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Server className="h-6 w-6 text-blue-600" />
                支持协议
              </h3>
              <div className="space-y-3">
                {["Shadowsocks", "Trojan", "VMess", "VLESS"].map((protocol) => (
                  <div key={protocol} className="flex items-center gap-3">
                    <Badge className="bg-blue-100 text-blue-700">{protocol}</Badge>
                    <span className="text-slate-600">最新版本支持</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-600" />
                解锁服务
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Netflix",
                  "Disney+",
                  "HBO Max",
                  "YouTube Premium",
                  "Spotify",
                  "ChatGPT",
                  "Hulu",
                  "Amazon Prime",
                ].map((service) => (
                  <Badge key={service} variant="outline" className="justify-center py-2">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IP Type Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            IP 类型与分布
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>住宅 IP</CardTitle>
                <CardDescription>真实用户 IP，反侦测能力强</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ 真实 ISP 分配的 IP 地址</li>
                  <li>✓ 低被封禁风险</li>
                  <li>✓ 适合流媒体和社交媒体</li>
                  <li>✓ 支持账号注册和登录</li>
                  <li>✓ 分布在 40+ 国家和地区</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>数据中心 IP</CardTitle>
                <CardDescription>高速稳定，适合大流量</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ 企业级数据中心 IP</li>
                  <li>✓ 超高速度和稳定性</li>
                  <li>✓ 适合下载和游戏</li>
                  <li>✓ 支持大流量传输</li>
                  <li>✓ 全球 6 大洲均有部署</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            性能指标
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  平均速度
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-blue-700 mb-2">850 Mbps</div>
                <p className="text-slate-600">实测平均下载速度</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  平均延迟
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-700 mb-2">45ms</div>
                <p className="text-slate-600">全球节点平均 Ping 值</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  可用性
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-purple-700 mb-2">99.8%</div>
                <p className="text-slate-600">服务正常运行时间</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            一元机场价格方案
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {yiyuanAirport.plans.map((plan) => (
              <Card
                key={plan.id}
                className={`border-0 shadow-sm transition-all ${
                  plan.recommended ? "ring-2 ring-orange-500 md:scale-105" : ""
                }`}
              >
                <CardHeader>
                  {plan.recommended && (
                    <Badge className="w-fit bg-orange-500 mb-2">推荐</Badge>
                  )}
                  <CardTitle>{plan.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-blue-700">
                      ¥{plan.price}
                      <span className="text-lg text-slate-600 font-normal">/{plan.period}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">流量</span>
                      <span className="font-semibold text-slate-900">{plan.traffic}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">设备数</span>
                      <span className="font-semibold text-slate-900">{plan.devices} 台</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <span className="text-green-600">✓</span>
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${
                      plan.recommended
                        ? "bg-orange-500 hover:bg-orange-600"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white`}
                  >
                    立即购买
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            与其他机场对比
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-bold text-slate-900">机场名称</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900">平均速度</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900">节点数</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900">延迟</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900">最低价格</th>
                </tr>
              </thead>
              <tbody>
                {airportBrands.map((airport) => {
                  const minPrice = Math.min(...airport.plans.map((p) => p.price));
                  return (
                    <tr
                      key={airport.id}
                      className={`border-b border-slate-100 ${
                        airport.id === "yiyuan" ? "bg-orange-50" : ""
                      }`}
                    >
                      <td className="py-4 px-4 font-semibold text-slate-900">
                        {airport.logo} {airport.name}
                      </td>
                      <td className="text-center py-4 px-4 text-slate-600">
                        {airport.specs.avgSpeed}
                      </td>
                      <td className="text-center py-4 px-4 text-slate-600">
                        {airport.specs.nodeCount}
                      </td>
                      <td className="text-center py-4 px-4 text-slate-600">
                        {airport.specs.latency}
                      </td>
                      <td className="text-center py-4 px-4 font-bold text-blue-700">
                        ¥{minPrice}/月
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            立即开始使用一元机场
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            加入数百万用户，享受高速、安全、稳定的网络体验
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              立即购买 <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/categories">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                浏览其他机场
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
