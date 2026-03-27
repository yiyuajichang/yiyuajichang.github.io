import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Zap, Globe, TrendingUp, ChevronRight } from "lucide-react";
import {
  getAllAirports,
  getAirportsSortedByPrice,
  getAirportsSortedBySpeed,
  getAirportsSortedByNodes,
} from "@/lib/airportData";

const categoryBannerUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663292951984/ip9AU4qmDpnEnghaEZuckT/category-banner-9e3B3ySwHwTCnn7hytXj2A.webp";

export default function Categories() {
  const [sortBy, setSortBy] = useState<"default" | "price" | "speed" | "nodes">("default");

  const getAirports = () => {
    switch (sortBy) {
      case "price":
        return getAirportsSortedByPrice();
      case "speed":
        return getAirportsSortedBySpeed();
      case "nodes":
        return getAirportsSortedByNodes();
      default:
        return getAllAirports();
    }
  };

  const airports = getAirports();

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section
        className="relative py-16 px-4 md:py-24 text-center overflow-hidden"
        style={{
          backgroundImage: `url(${categoryBannerUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            机场分类
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            浏览所有优质代理服务，找到最适合您的方案
          </p>
        </div>
      </section>

      {/* Sort Controls */}
      <section className="py-8 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              共 {airports.length} 个机场品牌
            </h2>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="排序方式" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">默认排序</SelectItem>
                <SelectItem value="price">按价格排序</SelectItem>
                <SelectItem value="speed">按速度排序</SelectItem>
                <SelectItem value="nodes">按节点数排序</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Airports Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airports.map((airport) => {
              const minPrice = Math.min(...airport.plans.map((p) => p.price));
              return (
                <Link key={airport.id} href={`/airport/${airport.id}`}>
                  <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl">{airport.logo}</div>
                        {airport.id === "yiyuan" && (
                          <Badge className="bg-orange-500">推荐</Badge>
                        )}
                      </div>
                      <CardTitle className="group-hover:text-blue-600 transition">
                        {airport.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {airport.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100">
                        <div className="text-center">
                          <div className="text-sm font-bold text-blue-700">
                            {airport.specs.avgSpeed}
                          </div>
                          <div className="text-xs text-slate-500">速度</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-green-700">
                            {airport.specs.nodeCount}
                          </div>
                          <div className="text-xs text-slate-500">节点</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-purple-700">
                            {airport.specs.latency}
                          </div>
                          <div className="text-xs text-slate-500">延迟</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">
                          主要特性
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {airport.features.slice(0, 3).map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div>
                          <div className="text-2xl font-bold text-blue-700">
                            ¥{minPrice}
                          </div>
                          <div className="text-xs text-slate-500">起价/月</div>
                        </div>
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          查看详情 <ChevronRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            完整对比表
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300 bg-slate-100">
                  <th className="text-left py-4 px-4 font-bold text-slate-900">机场</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900">速度</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900">节点</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900">延迟</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900">最低价</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-900">操作</th>
                </tr>
              </thead>
              <tbody>
                {airports.map((airport, idx) => {
                  const minPrice = Math.min(...airport.plans.map((p) => p.price));
                  return (
                    <tr
                      key={airport.id}
                      className={`border-b border-slate-200 ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50"
                      } ${airport.id === "yiyuan" ? "bg-orange-50" : ""}`}
                    >
                      <td className="py-4 px-4 font-semibold text-slate-900">
                        <span className="text-2xl mr-2">{airport.logo}</span>
                        {airport.name}
                      </td>
                      <td className="text-center py-4 px-4 text-slate-600">
                        <div className="flex items-center justify-center gap-1">
                          <Zap className="h-4 w-4 text-orange-500" />
                          {airport.specs.avgSpeed}
                        </div>
                      </td>
                      <td className="text-center py-4 px-4 text-slate-600">
                        <div className="flex items-center justify-center gap-1">
                          <Globe className="h-4 w-4 text-blue-500" />
                          {airport.specs.nodeCount}
                        </div>
                      </td>
                      <td className="text-center py-4 px-4 text-slate-600">
                        {airport.specs.latency}
                      </td>
                      <td className="text-center py-4 px-4 font-bold text-blue-700">
                        ¥{minPrice}/月
                      </td>
                      <td className="text-center py-4 px-4">
                        <Link href={`/airport/${airport.id}`}>
                          <Button size="sm" variant="outline">
                            详情
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            功能对比
          </h2>
          <Tabs defaultValue="protocols" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="protocols">支持协议</TabsTrigger>
              <TabsTrigger value="services">解锁服务</TabsTrigger>
            </TabsList>
            <TabsContent value="protocols" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {airports.map((airport) => (
                  <Card key={airport.id} className="border-0 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {airport.logo} {airport.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {airport.specs.supportedProtocols.map((protocol) => (
                          <Badge key={protocol} className="bg-blue-100 text-blue-700">
                            {protocol}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="services" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {airports.map((airport) => (
                  <Card key={airport.id} className="border-0 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {airport.logo} {airport.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {airport.specs.unlockServices.map((service) => (
                          <Badge key={service} variant="outline">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            还在犹豫？立即开始
          </h2>
          <p className="text-lg mb-6 text-blue-100">
            选择适合您的机场，享受高速、安全的网络体验
          </p>
          <Link href="/">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              返回首页
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
