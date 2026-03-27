// 机场品牌数据定义
export interface AirportBrand {
  id: string;
  name: string;
  description: string;
  logo: string;
  website?: string;
  features: string[];
  specs: {
    avgSpeed: string;
    nodeCount: number;
    latency: string;
    supportedProtocols: string[];
    unlockServices: string[];
    ipType: string;
  };
}

export interface PricePlan {
  id: string;
  name: string;
  price: number;
  period: string;
  traffic: string;
  devices: number;
  features: string[];
  recommended?: boolean;
}

export interface AirportWithPricing extends AirportBrand {
  plans: PricePlan[];
}

// 机场品牌详细数据
export const airportBrands: AirportWithPricing[] = [
  {
    id: "yiyuan",
    name: "一元机场",
    description: "性价比之王，专为预算用户设计的高效代理服务",
    logo: "🛫",
    website: "https://yiyuanjichang.com",
    features: [
      "极致性价比",
      "稳定可靠",
      "全球节点",
      "24/7 技术支持",
      "无日志政策",
    ],
    specs: {
      avgSpeed: "850 Mbps",
      nodeCount: 280,
      latency: "45ms",
      supportedProtocols: ["Shadowsocks", "Trojan", "VMess", "VLESS"],
      unlockServices: [
        "Netflix",
        "Disney+",
        "HBO Max",
        "Hulu",
        "YouTube Premium",
        "Spotify",
        "ChatGPT",
      ],
      ipType: "住宅 IP + 数据中心 IP",
    },
    plans: [
      {
        id: "yiyuan-basic",
        name: "基础套餐",
        price: 1,
        period: "月",
        traffic: "10GB",
        devices: 1,
        features: ["基础节点", "标准速度", "邮件支持"],
      },
      {
        id: "yiyuan-pro",
        name: "专业套餐",
        price: 5,
        period: "月",
        traffic: "100GB",
        devices: 3,
        features: ["全部节点", "高速通道", "优先支持"],
        recommended: true,
      },
      {
        id: "yiyuan-vip",
        name: "VIP 套餐",
        price: 12,
        period: "月",
        traffic: "无限",
        devices: 5,
        features: ["全部节点", "极速通道", "24/7 VIP 支持", "专属节点"],
      },
    ],
  },
  {
    id: "taishan",
    name: "泰山机场",
    description: "稳定性能卓越，适合长期使用的企业级代理",
    logo: "⛰️",
    website: "https://taishanairport.com",
    features: [
      "企业级稳定性",
      "高速节点",
      "智能路由",
      "DDoS 防护",
      "99.9% 可用性",
    ],
    specs: {
      avgSpeed: "920 Mbps",
      nodeCount: 350,
      latency: "38ms",
      supportedProtocols: ["Shadowsocks", "Trojan", "WireGuard", "VLESS"],
      unlockServices: [
        "Netflix",
        "Disney+",
        "HBO Max",
        "Amazon Prime",
        "Twitch",
        "ChatGPT",
        "Claude",
      ],
      ipType: "高质量住宅 IP",
    },
    plans: [
      {
        id: "taishan-basic",
        name: "入门套餐",
        price: 3,
        period: "月",
        traffic: "50GB",
        devices: 2,
        features: ["基础节点", "标准速度"],
      },
      {
        id: "taishan-pro",
        name: "专业套餐",
        price: 8,
        period: "月",
        traffic: "200GB",
        devices: 4,
        features: ["全部节点", "高速通道", "智能路由"],
        recommended: true,
      },
      {
        id: "taishan-enterprise",
        name: "企业套餐",
        price: 20,
        period: "月",
        traffic: "无限",
        devices: 10,
        features: [
          "全部节点",
          "极速通道",
          "专属客服",
          "API 接口",
          "DDoS 防护",
        ],
      },
    ],
  },
  {
    id: "baibianxiaoying",
    name: "百变小樱机场",
    description: "节点丰富多样，解锁能力强的综合型代理",
    logo: "🌸",
    website: "https://baibianxiaoying.com",
    features: [
      "节点众多",
      "解锁全面",
      "速度稳定",
      "低延迟",
      "智能分流",
    ],
    specs: {
      avgSpeed: "780 Mbps",
      nodeCount: 420,
      latency: "52ms",
      supportedProtocols: ["Shadowsocks", "Trojan", "VMess", "VLESS", "Hysteria"],
      unlockServices: [
        "Netflix",
        "Disney+",
        "HBO Max",
        "Hulu",
        "YouTube Premium",
        "Spotify",
        "Tidal",
        "ChatGPT",
        "Midjourney",
      ],
      ipType: "混合 IP（住宅 + 数据中心）",
    },
    plans: [
      {
        id: "baibianxiaoying-lite",
        name: "轻量套餐",
        price: 2,
        period: "月",
        traffic: "30GB",
        devices: 2,
        features: ["部分节点", "标准速度"],
      },
      {
        id: "baibianxiaoying-standard",
        name: "标准套餐",
        price: 6,
        period: "月",
        traffic: "150GB",
        devices: 4,
        features: ["全部节点", "高速通道", "智能分流"],
        recommended: true,
      },
      {
        id: "baibianxiaoying-premium",
        name: "高级套餐",
        price: 15,
        period: "月",
        traffic: "无限",
        devices: 6,
        features: [
          "全部节点",
          "极速通道",
          "优先级路由",
          "专属节点",
          "VIP 支持",
        ],
      },
    ],
  },
  {
    id: "eyu",
    name: "鳄鱼机场",
    description: "速度怪兽，为追求极速体验的用户打造",
    logo: "🐊",
    website: "https://eyujichang.com",
    features: [
      "超高速",
      "低延迟",
      "游戏优化",
      "流媒体加速",
      "实时监控",
    ],
    specs: {
      avgSpeed: "1050 Mbps",
      nodeCount: 290,
      latency: "28ms",
      supportedProtocols: ["Shadowsocks", "Trojan", "WireGuard", "Hysteria2"],
      unlockServices: [
        "Netflix",
        "Disney+",
        "Twitch",
        "YouTube",
        "Steam",
        "Epic Games",
        "ChatGPT",
      ],
      ipType: "高速数据中心 IP",
    },
    plans: [
      {
        id: "eyu-starter",
        name: "入门套餐",
        price: 4,
        period: "月",
        traffic: "80GB",
        devices: 2,
        features: ["高速节点", "游戏优化"],
      },
      {
        id: "eyu-gamer",
        name: "游戏套餐",
        price: 10,
        period: "月",
        traffic: "250GB",
        devices: 5,
        features: [
          "全部高速节点",
          "游戏加速",
          "低延迟保证",
          "实时监控",
        ],
        recommended: true,
      },
      {
        id: "eyu-extreme",
        name: "极速套餐",
        price: 25,
        period: "月",
        traffic: "无限",
        devices: 8,
        features: [
          "全部节点",
          "专属极速通道",
          "游戏加速",
          "流媒体加速",
          "24/7 VIP 支持",
        ],
      },
    ],
  },
  {
    id: "yinghua",
    name: "樱花机场",
    description: "日本优化专家，亚洲连接首选",
    logo: "🌸",
    website: "https://yinghuajichang.com",
    features: [
      "日本节点优化",
      "亚洲加速",
      "低延迟",
      "解锁日本服务",
      "稳定可靠",
    ],
    specs: {
      avgSpeed: "890 Mbps",
      nodeCount: 180,
      latency: "35ms",
      supportedProtocols: ["Shadowsocks", "Trojan", "VMess", "VLESS"],
      unlockServices: [
        "Netflix JP",
        "Hulu JP",
        "DMM",
        "Pixiv",
        "Niconico",
        "YouTube",
        "ChatGPT",
      ],
      ipType: "日本住宅 IP + 亚洲节点",
    },
    plans: [
      {
        id: "yinghua-basic",
        name: "基础套餐",
        price: 3,
        period: "月",
        traffic: "60GB",
        devices: 2,
        features: ["日本节点", "标准速度"],
      },
      {
        id: "yinghua-pro",
        name: "专业套餐",
        price: 8,
        period: "月",
        traffic: "180GB",
        devices: 4,
        features: ["全部亚洲节点", "高速通道", "日本优化"],
        recommended: true,
      },
      {
        id: "yinghua-vip",
        name: "VIP 套餐",
        price: 18,
        period: "月",
        traffic: "无限",
        devices: 6,
        features: [
          "全部节点",
          "极速通道",
          "日本专线",
          "专属支持",
          "优先级路由",
        ],
      },
    ],
  },
  {
    id: "peiqian",
    name: "赔钱机场",
    description: "价格屠夫，不赚钱只为用户服务的良心机场",
    logo: "💸",
    website: "https://peiqianjichang.com",
    features: [
      "超低价格",
      "不赚钱承诺",
      "透明定价",
      "无隐藏费用",
      "社区驱动",
    ],
    specs: {
      avgSpeed: "750 Mbps",
      nodeCount: 320,
      latency: "48ms",
      supportedProtocols: ["Shadowsocks", "Trojan", "VMess"],
      unlockServices: [
        "Netflix",
        "YouTube",
        "Spotify",
        "ChatGPT",
        "Google",
      ],
      ipType: "混合 IP",
    },
    plans: [
      {
        id: "peiqian-free",
        name: "免费套餐",
        price: 0,
        period: "月",
        traffic: "5GB",
        devices: 1,
        features: ["基础节点", "社区支持"],
      },
      {
        id: "peiqian-budget",
        name: "预算套餐",
        price: 1,
        period: "月",
        traffic: "50GB",
        devices: 2,
        features: ["全部节点", "标准速度"],
        recommended: true,
      },
      {
        id: "peiqian-unlimited",
        name: "无限套餐",
        price: 3,
        period: "月",
        traffic: "无限",
        devices: 3,
        features: ["全部节点", "高速通道", "优先支持"],
      },
    ],
  },
  {
    id: "mugua",
    name: "木瓜云机场",
    description: "云端之选，稳定高效的云计算代理方案",
    logo: "🥭",
    website: "https://muguayun.com",
    features: [
      "云端架构",
      "自动扩展",
      "高可用性",
      "智能负载均衡",
      "实时日志",
    ],
    specs: {
      avgSpeed: "920 Mbps",
      nodeCount: 380,
      latency: "42ms",
      supportedProtocols: [
        "Shadowsocks",
        "Trojan",
        "WireGuard",
        "VLESS",
        "Hysteria",
      ],
      unlockServices: [
        "Netflix",
        "Disney+",
        "HBO Max",
        "Amazon Prime",
        "YouTube Premium",
        "ChatGPT",
        "Claude",
        "Midjourney",
      ],
      ipType: "云端 IP + 住宅 IP",
    },
    plans: [
      {
        id: "mugua-starter",
        name: "启动套餐",
        price: 2,
        period: "月",
        traffic: "40GB",
        devices: 2,
        features: ["云端节点", "自动扩展"],
      },
      {
        id: "mugua-business",
        name: "商业套餐",
        price: 7,
        period: "月",
        traffic: "200GB",
        devices: 5,
        features: [
          "全部云端节点",
          "高速通道",
          "负载均衡",
          "实时监控",
        ],
        recommended: true,
      },
      {
        id: "mugua-enterprise",
        name: "企业套餐",
        price: 22,
        period: "月",
        traffic: "无限",
        devices: 10,
        features: [
          "全部节点",
          "专属云端",
          "API 接口",
          "企业支持",
          "SLA 保证",
        ],
      },
    ],
  },
];

// 获取所有机场品牌
export const getAllAirports = (): AirportWithPricing[] => {
  return airportBrands;
};

// 按 ID 获取机场
export const getAirportById = (id: string): AirportWithPricing | undefined => {
  return airportBrands.find((airport) => airport.id === id);
};

// 获取推荐机场
export const getRecommendedAirports = (): AirportWithPricing[] => {
  return airportBrands.slice(0, 3);
};

// 按价格排序
export const getAirportsSortedByPrice = (): AirportWithPricing[] => {
  return [...airportBrands].sort((a, b) => {
    const priceA = Math.min(...a.plans.map((p) => p.price));
    const priceB = Math.min(...b.plans.map((p) => p.price));
    return priceA - priceB;
  });
};

// 按速度排序
export const getAirportsSortedBySpeed = (): AirportWithPricing[] => {
  return [...airportBrands].sort((a, b) => {
    const speedA = parseInt(a.specs.avgSpeed);
    const speedB = parseInt(b.specs.avgSpeed);
    return speedB - speedA;
  });
};

// 按节点数排序
export const getAirportsSortedByNodes = (): AirportWithPricing[] => {
  return [...airportBrands].sort(
    (a, b) => b.specs.nodeCount - a.specs.nodeCount
  );
};
