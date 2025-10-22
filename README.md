# 個人履歷網站 | Personal Resume Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-success)

## 👋 關於我

我是**陳冠宏**，一名前端 / 全端開發者，擅長使用 React、Next.js、JavaScript 打造簡潔直觀的網站介面，也熟悉 Node.js、Express、MySQL 等後端技術，能獨立完成從 UI 設計到 API 串接的完整開發流程。

我熱衷於打造實用、美觀且效能良好的網站，並持續學習最新的前端技術與框架。目前正在持續開發數位學習平台與個人專案，歡迎參觀我的作品與程式碼！

## 📌 專案簡介

這是一個使用純前端技術（Vanilla JavaScript）打造的個人履歷網站，展示個人資料、技能、專案經驗等內容。網站採用現代化設計風格，並實現了完整的響應式佈局（RWD），適配各種裝置尺寸。

## 🚀 技術棧

### 核心技術

- **HTML5** - 語義化標籤，提升 SEO 與可訪問性
- **CSS3** - 現代化樣式設計
- **JavaScript (Vanilla)** - 無框架依賴，輕量化實現

### 技術特色

- ✨ **SVG 動畫** - 技能進度圈的動態呈現
- 🎨 **CSS 動畫** - 流暢的過渡效果與 hover 互動
- 📱 **響應式設計 (RWD)** - 支援手機、平板、桌面多種裝置
- 🎯 **CSS Grid & Flexbox** - 現代化佈局技術
- ⚡ **CSS Variables** - 動態進度控制
- 🎭 **Keyframe 動畫** - 圓形進度條填充效果

## ✨ 功能特色

### 1. 動態技能展示

- 使用 SVG 實現圓形進度條動畫
- 透過 CSS `stroke-dashoffset` 和 `@keyframes` 打造流暢的填充效果
- 支援 hover 互動效果（放大、變色）

### 2. 響應式設計

```css
/* 多層次斷點設計 */
- Desktop: > 768px（雙欄佈局）
- Tablet: 481px - 768px（兩欄技能卡）
- Mobile: ≤ 480px（單欄佈局）
```

### 3. 現代化 UI/UX

- 簡潔直觀的介面設計
- 流暢的過渡動畫效果
- 社交媒體圖示互動
- 專案經驗時間軸呈現

### 4. 效能優化

- 無第三方框架依賴，載入速度快
- 圖片格式優化（SVG 向量圖）
- CSS 動畫使用 GPU 加速屬性

## 📂 專案結構

```
-Personal_resume_website/
│
├── index.html          # 主要 HTML 結構
├── styles.css          # 完整樣式表（包含 RWD）
├── script.js           # JavaScript 互動邏輯
├── README.md           # 專案說明文件
│
└── img/                # 圖片資源
    ├── headphoto.png   # 個人頭像
    ├── facebook_white.svg
    ├── medium_white.svg
    └── github_inverted.png
```

## 🎯 技術亮點

### 1. SVG 圓形進度條實現

```css
/* 使用 stroke-dasharray 和 stroke-dashoffset 控制進度 */
.progress-fill {
  stroke-dasharray: 251.2;
  animation: fillProgress 1s ease-out forwards;
}

@keyframes fillProgress {
  from {
    stroke-dashoffset: 251.2;
  }
  to {
    stroke-dashoffset: calc(251.2 * (1 - var(--progress) / 100));
  }
}
```

### 2. CSS Variables 動態控制

```html
<!-- 透過內聯樣式傳遞進度值 -->
<div class="progress-ring" style="--progress: 95"></div>
```

### 3. 響應式佈局切換

- 使用 Flexbox 實現彈性佈局
- Grid 實現技能卡片網格
- 媒體查詢實現斷點切換
- `clamp()` 函數實現流體字體大小

## 🛠️ 如何使用

### 本地運行

```bash
# 1. Clone 專案
git clone [repository-url]

# 2. 進入專案目錄
cd -Personal_resume_website

# 3. 直接開啟 index.html
# 可使用任何瀏覽器直接開啟，或使用 Live Server 等開發工具
```

### 部署建議

- **GitHub Pages** - 零成本靜態網頁託管
- **Netlify** - 支援自動部署與 HTTPS
- **Vercel** - 快速部署與 CDN 加速

## 📧 聯絡方式

- 📧 Email: sam0404044@gmail.com
- 📞 Phone: 0922850404
- 🔗 GitHub: [github.com/sam0404044](https://github.com/sam0404044)
- 📝 Medium: [@sam0404044](https://medium.com/@sam0404044)
- 👤 Facebook: [陳冠宏](https://www.facebook.com/chen.guan.hong.815381)

## 📝 開發筆記

### 技術決策

- **選擇 Vanilla JS** 而非框架：展示原生 JavaScript 能力，減少依賴
- **SVG 動畫** 而非 Canvas：向量圖可縮放，效能更好
- **CSS Variables** 傳遞數據：避免 JavaScript 直接操作樣式

### 可優化方向

- [ ] 加入深色模式切換
- [ ] 實現專案篩選功能
- [ ] 加入頁面載入動畫
- [ ] 整合 Google Analytics
- [ ] 實現多語言切換（中/英）

---

⭐ 如果覺得這個專案有幫助，歡迎給個 Star！
```
