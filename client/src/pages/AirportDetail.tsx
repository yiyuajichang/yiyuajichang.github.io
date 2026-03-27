import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Zap, Globe, Lock, Smartphone, TrendingUp, Server, Shield } from "lucide-react";
import { getAirportById } from "@/lib/airportData";

export default function AirportDetail() {
  const { id } = useParams<{ id: string }>();
  const airport = id ? getAirportById(id) : null;

  if (!airport) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">机场未找到</h1>
          <p className="text-slate-600 mb-8">抱歉，我们找不到您要查找的机场信息。</p>
          <Link href="/categories">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              返回分类页
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const minPrice = Math.min(...airport.plans.map((p) => p.price));

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/categories">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4 mr-1" />
              返回
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-slate-900">
              <span className="text-3xl mr-2">{airport.logo}</span>
              {airport.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                {airport.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {airport.features.map((feature) => (
                  <Badge key={feature} className="bg-blue-100 text-blue-700">
                    {feature}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  立即购买
                </Button>
                <Button variant="outline">了解更多</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="h-5 w-5 text-orange-500" />
                    <span className="text-sm text-slate-600">平均速度</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-700">
                    {airport.specs.avgSpeed}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-slate-600">全球节点</span>
                  </div>
                  <div className="text-2xl font-bold text-green-700">
                    {airport.specs.nodeCount}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="h-5 w-5 text-purple-500" />
                    <span className="text-sm text-slate-600">平均延迟</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-700">
                    {airport.specs.latency}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Lock className="h-5 w-5 text-red-500" />
                    <span className="text-sm text-slate-600">最低价格</span>
                  </div>
                  <div className="text-2xl font-bold text-red-700">
                    ¥{minPrice}/月
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">技术规格</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-blue-600" />
                  支持协议
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {airport.specs.supportedProtocols.map((protocol) => (
                    <div key={protocol} className="flex items-center gap-3">
                      <Badge className="bg-blue-100 text-blue-700">{protocol}</Badge>
                      <span className="text-slate-600">最新版本</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  IP 类型
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-slate-900 mb-4">
                  {airport.specs.ipType}
                </div>
                <p className="text-slate-600">
                  支持住宅 IP 和数据中心 IP 的混合部署，适应不同使用场景。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unlock Services */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">解锁服务</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {airport.specs.unlockServices.map((service) => (
              <Card key={service} className="border-0 shadow-sm text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-blue-700 mb-2">✓</div>
                  <div className="font-semibold text-slate-900">{service}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">价格方案</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {airport.plans.map((plan) => (
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
                  <div className="space-y-3 py-4 border-y border-slate-100">
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

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            常见问题
          </h2>
          <Tabs defaultValue="faq1" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="faq1">使用方式</TabsTrigger>
              <TabsTrigger value="faq2">技术支持</TabsTrigger>
            </TabsList>
            <TabsContent value="faq1" className="mt-8 space-y-4">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">如何开始使用？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    购买套餐后，您将获得订阅链接和配置文件。使用支持的客户端（如 Clash、Shadowrocket 等）导入配置即可开始使用。
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">支持多少台设备同时连接？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    不同套餐支持的设备数不同。基础套餐支持 1-2 台，专业套餐支持 3-5 台，VIP 套餐支持 5-10 台设备同时连接。
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="faq2" className="mt-8 space-y-4">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">连接不上怎么办？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    请先检查网络连接，更新客户端到最新版本，尝试切换不同的节点。如问题持续，请联系 24/7 技术支持团队。
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">流量用完了怎么办？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    流量用完后，您可以升级到更高套餐或等待下个计费周期。VIP 套餐提供无限流量，适合重度用户。
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">准备好了吗？</h2>
          <p className="text-lg mb-8 text-blue-100">
            立即购买 {airport.name}，享受高速、安全的网络体验
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
