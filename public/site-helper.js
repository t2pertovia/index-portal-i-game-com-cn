/**
 * 页面提示助手 - 在页面中动态创建引导提示卡片、关键词标识与访问说明块
 * 无第三方依赖，纯原生 JavaScript 实现
 */
(function() {
  'use strict';

  // 配置数据
  const CONFIG = {
    portalUrl: 'https://index-portal-i-game.com.cn',
    keyword: '爱游戏',
    seed: 0, // 仅用于变化，不写入注释
    layout: {
      cardClass: 'helper-card',
      badgeClass: 'keyword-badge',
      infoClass: 'access-info'
    }
  };

  // 用于生成卡片内容的示例数据集
  const tips = [
    { title: '快速导航', content: '点击顶部菜单可切换分类，右侧搜索框支持模糊匹配。' },
    { title: '收藏提示', content: '将本页加入浏览器收藏夹，方便下次快速访问。' },
    { title: '安全说明', content: '请勿在公共设备保存密码，定期清理浏览记录。' }
  ];

  // 创建主容器
  const container = document.createElement('div');
  container.id = 'page-helper';
  container.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999;font-family:sans-serif;max-width:320px;background:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);padding:16px;';

  // 标题行
  const header = document.createElement('div');
  header.style.cssText = 'font-size:16px;font-weight:600;color:#333;margin-bottom:12px;border-bottom:1px solid #e9ecef;padding-bottom:8px;';
  header.textContent = '💡 页面助手';
  container.appendChild(header);

  // 提示卡片列表
  tips.forEach(function(tip) {
    const card = document.createElement('div');
    card.className = CONFIG.layout.cardClass;
    card.style.cssText = 'background:#fff;border:1px solid #e9ecef;border-radius:6px;padding:8px 10px;margin-bottom:8px;';

    const titleEl = document.createElement('div');
    titleEl.style.cssText = 'font-size:13px;font-weight:500;color:#495057;margin-bottom:4px;';
    titleEl.textContent = tip.title;
    card.appendChild(titleEl);

    const contentEl = document.createElement('div');
    contentEl.style.cssText = 'font-size:12px;color:#6c757d;line-height:1.4;';
    contentEl.textContent = tip.content;
    card.appendChild(contentEl);

    container.appendChild(card);
  });

  // 关键词徽章
  const badgeWrap = document.createElement('div');
  badgeWrap.style.cssText = 'display:flex;align-items:center;gap:6px;margin:8px 0;';

  const badgeLabel = document.createElement('span');
  badgeLabel.style.cssText = 'font-size:12px;color:#6c757d;';
  badgeLabel.textContent = '核心关键词：';
  badgeWrap.appendChild(badgeLabel);

  const badge = document.createElement('span');
  badge.className = CONFIG.layout.badgeClass;
  badge.style.cssText = 'display:inline-block;background:#007bff;color:#fff;font-size:12px;padding:2px 8px;border-radius:12px;font-weight:500;';
  badge.textContent = CONFIG.keyword;
  badgeWrap.appendChild(badge);

  container.appendChild(badgeWrap);

  // 访问说明块
  const infoBlock = document.createElement('div');
  infoBlock.className = CONFIG.layout.infoClass;
  infoBlock.style.cssText = 'font-size:12px;color:#495057;background:#e9ecef;padding:8px 10px;border-radius:6px;margin-top:6px;word-break:break-all;';

  const infoTitle = document.createElement('div');
  infoTitle.style.cssText = 'font-weight:500;margin-bottom:4px;';
  infoTitle.textContent = '🔗 访问入口';
  infoBlock.appendChild(infoTitle);

  const urlEl = document.createElement('a');
  urlEl.href = CONFIG.portalUrl;
  urlEl.target = '_blank';
  urlEl.rel = 'noopener noreferrer';
  urlEl.style.cssText = 'color:#007bff;text-decoration:none;';
  urlEl.textContent = CONFIG.portalUrl;
  infoBlock.appendChild(urlEl);

  const noteLine = document.createElement('div');
  noteLine.style.cssText = 'margin-top:6px;color:#6c757d;';
  noteLine.textContent = '提示：点击上方链接可打开官方门户，请确保网络环境安全。';
  infoBlock.appendChild(noteLine);

  container.appendChild(infoBlock);

  // 辅助关闭按钮
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕ 关闭';
  closeBtn.style.cssText = 'display:block;margin:12px auto 0;background:transparent;border:1px solid #dee2e6;border-radius:4px;padding:4px 12px;font-size:12px;color:#6c757d;cursor:pointer;';
  closeBtn.addEventListener('click', function() {
    container.style.display = 'none';
  });
  container.appendChild(closeBtn);

  // 插入到页面（若 DOM 未加载完成则等待）
  if (document.body) {
    document.body.appendChild(container);
  } else {
    window.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(container);
    });
  }
})();