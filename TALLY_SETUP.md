# Tally + Google Sheets / beehiiv 设置说明

这一版不需要 Supabase，也不需要你写后端。你只需要在 Tally 建一个表单，然后把表单 ID 填到 `.env.local` 或 Vercel 环境变量。

## 1. 建 Tally 表单

建议表单标题：

```txt
Join the AI Drama Club
```

建议描述：

```txt
Get the next episode first, vote on the next twist, and join the VIP early access waitlist.
```

## 2. 表单字段

建议添加这些可见字段：

| 字段名 | 类型 | 是否必填 | 选项 |
|---|---|---:|---|
| email | Email | 是 | - |
| series_interest | Single select | 是 | The Divorced Heiress / The Mother They Called a Nanny / The Werewolf Queen / Billionaire Revenge Romance |
| plot_vote | Single select | 是 | She destroys him publicly / His new wife discovers the truth / She buys the company behind him / He begs her to come back |
| vip_interest | Multiple choice 或 Checkbox | 否 | Yes, tell me when VIP opens |

建议添加这些 hidden fields：

```txt
source
utm_source
utm_medium
utm_campaign
utm_content
utm_term
page_url
landing_path
```

Tally 里输入 `/hidden` 就可以创建 hidden field。字段名大小写要和上面保持一致。

## 3. 开启 Google Sheets 同步

在 Tally 表单里进入：

```txt
Integrations → Google Sheets
```

连接你的 Google 账号后，每次提交都会自动新增一行。你可以用 Google Sheets 直接看：

```txt
哪个视频来的用户最多
哪个系列最受欢迎
哪种剧情投票最高
VIP 意向比例是多少
```

## 4. 可选：同步到 beehiiv / Mailchimp / Kit

最轻方案是：

```txt
Tally → Google Sheets → Zapier / Make → beehiiv
```

如果你暂时不想做自动化，可以先每周从 Tally 导出 CSV，再导入 beehiiv。

## 5. 填环境变量

复制 `.env.example` 为 `.env.local`：

```bash
cp .env.example .env.local
```

如果你的 Tally 表单地址是：

```txt
https://tally.so/r/abc123
```

那么填：

```env
NEXT_PUBLIC_TALLY_FORM_ID=abc123
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/你的账号/
```

然后启动：

```bash
npm install
npm run dev
```

## 6. 测试来源追踪

打开：

```txt
http://localhost:3000?source=ig_part5_comment_next&utm_source=instagram&utm_campaign=divorced_heiress_part5
```

提交表单后，Tally / Google Sheets 里应该能看到：

```txt
source = ig_part5_comment_next
utm_source = instagram
utm_campaign = divorced_heiress_part5
page_url = 当前页面完整 URL
```

## 7. 推荐 Instagram 链接参数

Bio 链接：

```txt
https://你的域名.com/?source=ig_bio&utm_source=instagram&utm_medium=bio
```

Part 5 评论私信链接：

```txt
https://你的域名.com/?source=ig_part5_comment_next&utm_source=instagram&utm_medium=dm&utm_campaign=divorced_heiress_part5
```

Story 链接：

```txt
https://你的域名.com/?source=ig_story&utm_source=instagram&utm_medium=story
```
