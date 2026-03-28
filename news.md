---
layout: default
title: 新闻中心
permalink: /news
---

<!-- 面包屑导航 -->
<div class="breadcrumb" style="padding: 16px 0; background: #f9fafb; border-bottom: 1px solid #e5e7eb;">
    <div class="container" style="font-size: 14px; color: #6b7280;">
        <a href="/" style="color: #1e40af; text-decoration: none;">首页</a>
        <span style="margin: 0 8px;">/</span>
        <span>新闻中心</span>
    </div>
</div>

<section class="page-header" style="padding: 60px 20px; background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; text-align: center;">
    <div class="container">
        <h1 style="margin: 0; font-size: 40px; margin-bottom: 16px;">📰 新闻中心</h1>
        <p style="margin: 0; font-size: 18px; opacity: 0.9;">了解一元机场最新动态、产品更新和行业资讯</p>
    </div>
</section>

<section class="news-list" style="padding: 60px 20px; background: #ffffff;">
    <div class="container" style="max-width: 1000px;">
        <!-- 分类过滤 -->
        <div style="margin-bottom: 48px; display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
            <span style="font-weight: 600; color: #1f2937;">分类：</span>
            <a href="/news" style="display: inline-block; background: #1e40af; color: white; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 14px; transition: all 0.3s;">全部</a>
            {% assign categories = site.posts | map: 'category' | compact | uniq | sort %}
            {% if categories.size > 0 %}
                {% for category in categories %}
                <a href="/news?category={{ category }}" style="display: inline-block; background: #f3f4f6; color: #374151; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 14px; transition: all 0.3s; border: 1px solid #e5e7eb;">{{ category }}</a>
                {% endfor %}
            {% endif %}
        </div>

        <!-- 文章列表 -->
        <div class="posts-grid" style="display: grid; gap: 32px;">
            {% assign posts = site.posts | sort: 'date' | reverse %}
            {% for post in posts %}
            <article class="post-card" style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 32px; transition: all 0.3s ease; background: #ffffff;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 16px; gap: 16px;">
                    <div style="flex: 1;">
                        <h2 style="font-size: 24px; margin: 0 0 12px 0; line-height: 1.4;">
                            <a href="{{ post.url }}" style="color: #1e40af; text-decoration: none;">{{ post.title }}</a>
                        </h2>
                        <div style="display: flex; gap: 16px; font-size: 14px; color: #6b7280; flex-wrap: wrap;">
                            <span>📅 {{ post.date | date: "%Y 年 %m 月 %d 日" }}</span>
                            {% if post.author %}
                            <span>✍️ {{ post.author }}</span>
                            {% else %}
                            <span>✍️ 一元机场</span>
                            {% endif %}
                            {% if post.category %}
                            <span style="background: #fed7aa; color: #f97316; padding: 2px 8px; border-radius: 4px; font-size: 12px;">{{ post.category }}</span>
                            {% else %}
                            <span style="background: #fed7aa; color: #f97316; padding: 2px 8px; border-radius: 4px; font-size: 12px;">文章</span>
                            {% endif %}
                        </div>
                    </div>
                </div>
                
                {% if post.excerpt %}
                <p style="color: #374151; line-height: 1.8; margin: 16px 0; font-size: 15px;">{{ post.excerpt | strip_html | truncate: 150 }}</p>
                {% elsif post.description %}
                <p style="color: #374151; line-height: 1.8; margin: 16px 0; font-size: 15px;">{{ post.description | strip_html | truncate: 150 }}</p>
                {% else %}
                <p style="color: #374151; line-height: 1.8; margin: 16px 0; font-size: 15px;">{{ post.content | strip_html | truncate: 150 }}</p>
                {% endif %}
                
                <a href="{{ post.url }}" style="display: inline-block; color: #1e40af; text-decoration: none; font-weight: 600; font-size: 14px; padding: 8px 0; border-bottom: 2px solid transparent; transition: all 0.3s;">
                    阅读全文 →
                </a>
            </article>
            {% endfor %}
        </div>

        <!-- 没有文章提示 -->
        {% if site.posts.size == 0 %}
        <div style="text-align: center; padding: 60px 20px; color: #9ca3af;">
            <p style="font-size: 18px;">暂无文章</p>
        </div>
        {% endif %}
    </div>
</section>

<style>
.post-card {
    cursor: pointer;
}

.post-card:hover {
    box-shadow: 0 12px 32px rgba(30, 64, 175, 0.15);
    border-color: #1e40af;
    transform: translateY(-4px);
}

.post-card h2 a {
    transition: color 0.3s ease;
}

.post-card:hover h2 a {
    color: #f97316;
}

.post-card a[style*="color: #1e40af"] {
    transition: all 0.3s ease;
}

.post-card:hover a[style*="color: #1e40af"] {
    color: #f97316;
    border-bottom-color: #f97316;
}

@media (max-width: 768px) {
    .post-card {
        padding: 20px;
    }
    
    .post-card h2 {
        font-size: 18px;
    }
}
</style>
