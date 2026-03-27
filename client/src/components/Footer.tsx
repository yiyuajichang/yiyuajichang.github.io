import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">🛫</div>
              <span className="font-bold text-lg text-white">一元机场</span>
            </div>
            <p className="text-sm text-slate-400">
              性价比之王，全球加速，安全可靠
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-white mb-4">产品</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories">
                  <span className="text-slate-400 hover:text-white transition cursor-pointer">
                    所有机场
                  </span>
                </Link>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-white transition">
                  价格方案
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-white transition">
                  功能特性
                </a>
              </li>
              <li>
                <a href="#download" className="text-slate-400 hover:text-white transition">
                  下载客户端
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-4">支持</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#help" className="text-slate-400 hover:text-white transition">
                  帮助中心
                </a>
              </li>
              <li>
                <a href="#tutorial" className="text-slate-400 hover:text-white transition">
                  使用教程
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition">
                  常见问题
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition">
                  联系我们
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4">法律</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="text-slate-400 hover:text-white transition">
                  隐私政策
                </a>
              </li>
              <li>
                <a href="#terms" className="text-slate-400 hover:text-white transition">
                  服务条款
                </a>
              </li>
              <li>
                <a href="#refund" className="text-slate-400 hover:text-white transition">
                  退款政策
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-slate-400 hover:text-white transition">
                  免责声明
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <p>&copy; 2024 一元机场. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#twitter" className="hover:text-white transition">
              Twitter
            </a>
            <a href="#telegram" className="hover:text-white transition">
              Telegram
            </a>
            <a href="#email" className="hover:text-white transition">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
