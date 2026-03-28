---
layout: default
title: 新闻中心
permalink: /news
---

<section class="page-header">
    <h1>新闻中心</h1>
    <p>了解一元机场最新动态、产品更新和行业资讯</p>
</section>

<section class="news-list" style="padding: 60px 20px;">
    <div class="container" style="max-width: 900px;">
        <div class="posts-grid" style="display: grid; gap: 32px;">
            {% for post in site.posts %}
            <article class="post-card" style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; transition: all 0.3s; hover-shadow: 0 12px 24px rgba(0,0,0,0.1);">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                    <h2 style="font-size: 22px; margin: 0; flex: 1;">
                        <a href="{{ post.url }}" style="color: #1e40af; text-decoration: none;">{{ post.title }}</a>
                    </h2>
                    <span style="background: #f3f4f6; color: #6b7280; padding: 4px 12px; border-radius: 20px; font-size: 12px; white-space: nowrap; margin-left: 12px;">{{ post.category }}</span>
                </div>
                
                <div style="color: #6b7280; font-size: 14px; margin-bottom: 12px;">
                    {{ post.date | date: "%Y 年 %m 月 %d 日" }} | 作者：{{ post.author }}
                </div>
                
                <p style="color: #374151; line-height: 1.6; margin-bottom: 16px;">{{ post.excerpt }}</p>
                
                <a href="{{ post.url }}" style="color: #1e40af; text-decoration: none; font-weight: 600;">阅读全文 →</a>
            </article>
            {% endfor %}
        </div>
    </div>
</section>

<style>
.post-card:hover {
    box-shadow: 0 12px 24px rgba(0,0,0,0.1);
    border-color: #1e40af;
}

.post-card a {
    transition: color 0.3s;
}

.post-card a:hover {
    color: #f97316;
}
</style>
