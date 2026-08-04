# AI Drama Club Landing Page — No Supabase Version

这是一个给 AI 短剧账号使用的极简转化页：把 Instagram Reels 流量承接到自己的用户池里，完成 **邮箱收集 + 剧情投票 + VIP 意向收集 + 来源追踪**。

这一版 **不需要 Supabase / 数据库 / 后端 API**。表单使用 Tally 嵌入，数据可以直接进入 Tally、Google Sheets，后续再同步到 beehiiv、Mailchimp、Kit 或 Substack。

页面面向海外观众，所以前端文案是英文；说明文档用中文。

## 适合你的当前漏斗

```txt
Instagram Reel
  ↓
评论区：Comment "NEXT"
  ↓
自动 / 手动 DM
  ↓
Landing Page
  ↓
Tally form：Email + Story Vote + VIP Interest
  ↓
Google Sheets / beehiiv / Mailchimp
  ↓
后续：Patreon / Substack / 品牌植入 / 早鸟会员
```

## 功能

- 高转化短剧 landing page
- 英文海外观众文案
- 移动端优先设计
- Tally embed 表单
- Email capture
- 剧情系列选择
- 下一集剧情投票
- VIP waitlist 意向
- URL source / UTM 参数自动传入 Tally hidden fields
- 无数据库、无后端、无密钥泄露风险

## 本地启动

```bash
npm install
npm run dev
```

打开：

```txt
http://localhost:3000
```

测试不同来源：

```txt
http://localhost:3000?source=ig_part5_comment_next&utm_source=instagram&utm_campaign=divorced_heiress_part5
```

## Tally 配置

详细看：[`TALLY_SETUP.md`](./TALLY_SETUP.md)

最简单步骤：

1. 去 Tally 创建表单。
2. 添加字段：email、series_interest、plot_vote、vip_interest。
3. 添加 hidden fields：source、utm_source、utm_medium、utm_campaign、utm_content、utm_term、page_url、landing_path。
4. 复制 Tally 表单 ID。
5. 复制 `.env.example` 为 `.env.local`，填入：

```env
NEXT_PUBLIC_TALLY_FORM_ID=你的表单ID
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/你的账号/
```

如果你的 Tally 链接是：

```txt
https://tally.so/r/abc123
```

那么表单 ID 就是：

```txt
abc123
```

## Vercel 部署

1. 上传到 GitHub。
2. 在 Vercel 导入项目。
3. 在 Vercel Project Settings → Environment Variables 添加：

```env
NEXT_PUBLIC_TALLY_FORM_ID=你的表单ID
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/你的账号/
NEXT_PUBLIC_PATREON_URL=
NEXT_PUBLIC_SUBSTACK_URL=
```

4. Deploy。

## Instagram 评论区文案

### 默认版

```txt
Want Part 6? Comment “NEXT” and I’ll send the early access link.
```

### 更抓马版

```txt
He thought he won. He has no idea what she owns now.
Comment “NEXT” for Part 6.
```

### 投票版

```txt
Should Sarah destroy him or forgive him?
Comment “NEXT” and vote for the next twist.
```

## DM 文案

```txt
You’re on the list ❤️

Here’s where the story continues:
你的 landing page 链接

You can also vote on what Sarah should do next.
```

## 建议的链接参数

每条视频放不同 source，方便你看转化：

```txt
/?source=ig_bio
/?source=ig_part5_comment_next
/?source=ig_part6_caption
/?source=ig_story_swipe
```

## 以后怎么升级

第一版只做 email + 投票。等有 200–500 个 email 后，再加：

- beehiiv 自动欢迎邮件
- Patreon 会员入口
- Substack 免费 / 付费邮件
- 早鸟剧集页面
- 独家剧集付费解锁
- 品牌植入数据看板
- 真正的数据库 / 登录系统

## 文件结构

```txt
app/
  components/TallyEmbed.tsx # Tally 嵌入 + 来源追踪
  globals.css               # 全站样式
  layout.tsx                # SEO metadata
  page.tsx                  # Landing page 主页面
public/
  favicon.svg
  og-card.svg
TALLY_SETUP.md              # Tally 配置说明
TALLY_FORM_COPY.md          # 可直接复制进 Tally 的表单文案
.env.example                # 环境变量模板
```
