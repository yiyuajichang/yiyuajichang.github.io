import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="text-2xl">🛫</div>
              <span className="font-bold text-lg text-slate-900">一元机场</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">
              <span className="text-slate-600 hover:text-blue-600 transition cursor-pointer">
                首页
              </span>
            </Link>
            <Link href="/categories">
              <span className="text-slate-600 hover:text-blue-600 transition cursor-pointer">
                分类
              </span>
            </Link>
            <a
              href="#about"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              关于
            </a>
            <a
              href="#contact"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              联系
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              登录
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              立即购买
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-slate-900" />
            ) : (
              <Menu className="h-6 w-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href="/">
              <div
                className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                首页
              </div>
            </Link>
            <Link href="/categories">
              <div
                className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                分类
              </div>
            </Link>
            <a
              href="#about"
              className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded"
            >
              关于
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded"
            >
              联系
            </a>
            <div className="flex gap-3 px-4 pt-4">
              <Button
                variant="outline"
                className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                登录
              </Button>
              <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
                购买
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
