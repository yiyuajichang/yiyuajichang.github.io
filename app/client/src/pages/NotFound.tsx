import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl font-bold text-blue-700 mb-4">404</div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">页面未找到</h1>
        <p className="text-slate-600 mb-8 text-lg">
          抱歉，我们找不到您要查找的页面。可能是链接已过期或输入错误。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ChevronLeft className="mr-2 h-4 w-4" />
              返回首页
            </Button>
          </Link>
          <Link href="/categories">
            <Button variant="outline">浏览机场</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
