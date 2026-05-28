This file is a merged representation of a subset of the codebase, containing specifically included files and files not matching ignore patterns, combined into a single document by Repomix.
The content has been processed where empty lines have been removed.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src/**, lib/**, docs/**, README.md, CLAUDE.md, *.toml, *.yaml, *.yml, package.json, pyproject.toml, LICENSE
- Files matching these patterns are excluded: node_modules, dist, build, .git, *.lock, *.min.js, test, tests
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Empty lines have been removed from all files
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
docs/channels/dingtalk.mdx
docs/channels/feishu.mdx
docs/channels/index.mdx
docs/channels/qq.mdx
docs/channels/telegram.mdx
docs/channels/web.mdx
docs/channels/wechatmp.mdx
docs/channels/wecom-bot.mdx
docs/channels/wecom.mdx
docs/channels/weixin.mdx
docs/cli/general.mdx
docs/cli/index.mdx
docs/cli/memory-knowledge.mdx
docs/cli/process.mdx
docs/cli/skill.mdx
docs/docs.json
docs/en/channels/dingtalk.mdx
docs/en/channels/feishu.mdx
docs/en/channels/index.mdx
docs/en/channels/qq.mdx
docs/en/channels/telegram.mdx
docs/en/channels/web.mdx
docs/en/channels/wechatmp.mdx
docs/en/channels/wecom-bot.mdx
docs/en/channels/wecom.mdx
docs/en/channels/weixin.mdx
docs/en/cli/general.mdx
docs/en/cli/index.mdx
docs/en/cli/memory-knowledge.mdx
docs/en/cli/process.mdx
docs/en/cli/skill.mdx
docs/en/guide/manual-install.mdx
docs/en/guide/quick-start.mdx
docs/en/guide/upgrade.mdx
docs/en/intro/architecture.mdx
docs/en/intro/features.mdx
docs/en/intro/index.mdx
docs/en/knowledge/index.mdx
docs/en/memory/context.mdx
docs/en/memory/deep-dream.mdx
docs/en/memory/index.mdx
docs/en/models/claude.mdx
docs/en/models/coding-plan.mdx
docs/en/models/custom.mdx
docs/en/models/deepseek.mdx
docs/en/models/doubao.mdx
docs/en/models/gemini.mdx
docs/en/models/glm.mdx
docs/en/models/index.mdx
docs/en/models/kimi.mdx
docs/en/models/linkai.mdx
docs/en/models/mimo.mdx
docs/en/models/minimax.mdx
docs/en/models/openai.mdx
docs/en/models/qianfan.mdx
docs/en/models/qwen.mdx
docs/en/releases/overview.mdx
docs/en/releases/v2.0.0.mdx
docs/en/releases/v2.0.1.mdx
docs/en/releases/v2.0.2.mdx
docs/en/releases/v2.0.3.mdx
docs/en/releases/v2.0.4.mdx
docs/en/releases/v2.0.5.mdx
docs/en/releases/v2.0.6.mdx
docs/en/releases/v2.0.7.mdx
docs/en/releases/v2.0.8.mdx
docs/en/releases/v2.0.9.mdx
docs/en/skills/create.mdx
docs/en/skills/hub.mdx
docs/en/skills/image-generation.mdx
docs/en/skills/index.mdx
docs/en/skills/install.mdx
docs/en/skills/knowledge-wiki.mdx
docs/en/skills/skill-creator.mdx
docs/en/tools/bash.mdx
docs/en/tools/browser.mdx
docs/en/tools/edit.mdx
docs/en/tools/env-config.mdx
docs/en/tools/index.mdx
docs/en/tools/ls.mdx
docs/en/tools/mcp.mdx
docs/en/tools/memory.mdx
docs/en/tools/read.mdx
docs/en/tools/scheduler.mdx
docs/en/tools/send.mdx
docs/en/tools/vision.mdx
docs/en/tools/web-fetch.mdx
docs/en/tools/web-search.mdx
docs/en/tools/write.mdx
docs/guide/manual-install.mdx
docs/guide/quick-start.mdx
docs/guide/upgrade.mdx
docs/images/contact.jpg
docs/images/favicon.ico
docs/images/logo.jpg
docs/intro/architecture.mdx
docs/intro/features.mdx
docs/intro/index.mdx
docs/ja/channels/dingtalk.mdx
docs/ja/channels/feishu.mdx
docs/ja/channels/index.mdx
docs/ja/channels/qq.mdx
docs/ja/channels/telegram.mdx
docs/ja/channels/web.mdx
docs/ja/channels/wechatmp.mdx
docs/ja/channels/wecom-bot.mdx
docs/ja/channels/wecom.mdx
docs/ja/channels/weixin.mdx
docs/ja/cli/general.mdx
docs/ja/cli/index.mdx
docs/ja/cli/memory-knowledge.mdx
docs/ja/cli/process.mdx
docs/ja/cli/skill.mdx
docs/ja/guide/manual-install.mdx
docs/ja/guide/quick-start.mdx
docs/ja/guide/upgrade.mdx
docs/ja/intro/architecture.mdx
docs/ja/intro/features.mdx
docs/ja/intro/index.mdx
docs/ja/knowledge/index.mdx
docs/ja/memory/context.mdx
docs/ja/memory/deep-dream.mdx
docs/ja/memory/index.mdx
docs/ja/models/claude.mdx
docs/ja/models/coding-plan.mdx
docs/ja/models/custom.mdx
docs/ja/models/deepseek.mdx
docs/ja/models/doubao.mdx
docs/ja/models/gemini.mdx
docs/ja/models/glm.mdx
docs/ja/models/index.mdx
docs/ja/models/kimi.mdx
docs/ja/models/linkai.mdx
docs/ja/models/mimo.mdx
docs/ja/models/minimax.mdx
docs/ja/models/openai.mdx
docs/ja/models/qianfan.mdx
docs/ja/models/qwen.mdx
docs/ja/README.md
docs/ja/releases/overview.mdx
docs/ja/releases/v2.0.0.mdx
docs/ja/releases/v2.0.1.mdx
docs/ja/releases/v2.0.2.mdx
docs/ja/releases/v2.0.3.mdx
docs/ja/releases/v2.0.4.mdx
docs/ja/releases/v2.0.5.mdx
docs/ja/releases/v2.0.6.mdx
docs/ja/releases/v2.0.7.mdx
docs/ja/releases/v2.0.8.mdx
docs/ja/releases/v2.0.9.mdx
docs/ja/skills/create.mdx
docs/ja/skills/hub.mdx
docs/ja/skills/image-generation.mdx
docs/ja/skills/index.mdx
docs/ja/skills/install.mdx
docs/ja/skills/knowledge-wiki.mdx
docs/ja/skills/skill-creator.mdx
docs/ja/tools/bash.mdx
docs/ja/tools/browser.mdx
docs/ja/tools/edit.mdx
docs/ja/tools/env-config.mdx
docs/ja/tools/index.mdx
docs/ja/tools/ls.mdx
docs/ja/tools/mcp.mdx
docs/ja/tools/memory.mdx
docs/ja/tools/read.mdx
docs/ja/tools/scheduler.mdx
docs/ja/tools/send.mdx
docs/ja/tools/vision.mdx
docs/ja/tools/web-fetch.mdx
docs/ja/tools/web-search.mdx
docs/ja/tools/write.mdx
docs/knowledge/index.mdx
docs/memory/context.mdx
docs/memory/deep-dream.mdx
docs/memory/index.mdx
docs/models/claude.mdx
docs/models/coding-plan.mdx
docs/models/custom.mdx
docs/models/deepseek.mdx
docs/models/doubao.mdx
docs/models/gemini.mdx
docs/models/glm.mdx
docs/models/index.mdx
docs/models/kimi.mdx
docs/models/linkai.mdx
docs/models/mimo.mdx
docs/models/minimax.mdx
docs/models/openai.mdx
docs/models/qianfan.mdx
docs/models/qwen.mdx
docs/README.md
docs/releases/overview.mdx
docs/releases/v2.0.0.mdx
docs/releases/v2.0.1.mdx
docs/releases/v2.0.2.mdx
docs/releases/v2.0.3.mdx
docs/releases/v2.0.4.mdx
docs/releases/v2.0.5.mdx
docs/releases/v2.0.6.mdx
docs/releases/v2.0.7.mdx
docs/releases/v2.0.8.mdx
docs/releases/v2.0.9.mdx
docs/skills/create.mdx
docs/skills/hub.mdx
docs/skills/image-generation.mdx
docs/skills/index.mdx
docs/skills/install.mdx
docs/skills/knowledge-wiki.mdx
docs/skills/skill-creator.mdx
docs/tools/bash.mdx
docs/tools/browser.mdx
docs/tools/edit.mdx
docs/tools/env-config.mdx
docs/tools/index.mdx
docs/tools/ls.mdx
docs/tools/mcp.mdx
docs/tools/memory.mdx
docs/tools/read.mdx
docs/tools/scheduler.mdx
docs/tools/send.mdx
docs/tools/vision.mdx
docs/tools/web-fetch.mdx
docs/tools/web-search.mdx
docs/tools/write.mdx
docs/zh/README.md
LICENSE
pyproject.toml
README.md
```

# Files

## File: docs/channels/dingtalk.mdx
````markdown
---
title: 钉钉
description: 将 CowAgent 接入钉钉应用
---

通过钉钉开放平台创建智能机器人应用，将 CowAgent 接入钉钉。

## 一、创建应用

1. 进入 [钉钉开发者后台](https://open-dev.dingtalk.com/fe/app#/corp/app)，登录后点击 **创建应用**，填写应用相关信息：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-create-app.png" width="800"/>

2. 点击添加应用能力，选择 **机器人** 能力，点击 **添加**：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-add-bot.png" width="800"/>

3. 配置机器人信息后点击 **发布**。发布后，点击 "**点击调试**"，会自动创建测试群聊，可在客户端查看：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-config-bot.png" width="600"/>

4. 点击 **版本管理与发布**，创建新版本发布：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-publish-bot.png" width="700"/>

## 二、项目配置

1. 点击 **凭证与基础信息**，获取 `Client ID` 和 `Client Secret`：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-get-secret.png" width="700"/>

2. 将以下配置加入项目根目录的 `config.json` 文件：

```json
{
  "channel_type": "dingtalk",
  "dingtalk_client_id": "YOUR_CLIENT_ID",
  "dingtalk_client_secret": "YOUR_CLIENT_SECRET"
}
```

3. 安装依赖：

```bash
pip3 install dingtalk_stream
```

4. 启动项目后，在钉钉开发者后台点击 **事件订阅**，点击 **已完成接入，验证连接通道**，显示 **连接接入成功** 即表示配置完成：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-event-sub.png" width="700"/>

## 三、使用

与机器人私聊或将机器人拉入企业群中均可开启对话：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-hosting-demo.png" width="650"/>
````

## File: docs/channels/feishu.mdx
````markdown
---
title: 飞书
description: 将 CowAgent 接入飞书应用
---

> 通过飞书自建应用接入 CowAgent，支持单聊与群聊（@机器人），使用 WebSocket 长连接模式，无需公网 IP，支持流式打字机回复、语音消息收发。

<Note>
  接入需要是飞书企业用户且具有企业管理权限。
</Note>

## 一、接入方式

### 方式一：扫码一键接入（推荐）

启动 Cow 项目后在终端中即可完成扫码创建。或打开 Web 控制台（本地链接：http://127.0.0.1:9899 ），选择 **通道** 菜单，点击 **接入通道**，选择 **飞书**，点击 **一键创建飞书应用**，使用 **飞书 App** 扫描二维码即可自动完成应用创建并接入:


<img src="https://cdn.link-ai.tech/doc/20260505181126.png" width="800"/>


<Note>
  1. `lark-oapi` 依赖版本需要 >=1.5.5
  2. 扫码创建出的应用会自动预置全部所需权限（消息收发、卡片读写、群聊事件等）和事件订阅，无需到开发者后台手动配置。
</Note>


### 方式二：手动创建接入

需要先在飞书开放平台创建自建应用并配置权限，再通过 Web 控制台或配置文件接入。

**步骤一：创建应用**

1. 进入 [飞书开发平台](https://open.feishu.cn/app/)，点击 **创建企业自建应用**：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/feishu-hosting-create-app.jpg" width="500"/>

2. 在 **添加应用能力** 中，为应用添加 **机器人** 能力：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/feishu-hosting-add-bot.jpg" width="800"/>

3. 在 **权限管理** 中，将以下权限粘贴到输入框，全选并 **批量开通**：

```
im:message,im:message.group_at_msg,im:message.group_at_msg:readonly,im:message.p2p_msg,im:message.p2p_msg:readonly,im:message:send_as_bot,im:resource,cardkit:card:write
```

<img src="https://cdn.link-ai.tech/doc/feishu-hosting-add-auth2.png" width="800"/>

4. 在 **凭证与基础信息** 中获取 `App ID` 和 `App Secret`：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/feishu-hosting-appid-secret.jpg" width="800"/>

**步骤二：接入 CowAgent**

<Tabs>
  <Tab title="Web 控制台">
    打开 Web 控制台，选择 **通道** 菜单，点击 **接入通道**，选择 **飞书**，切换到「手动填写」Tab，输入 App ID 和 App Secret，点击接入即可。
  </Tab>
  <Tab title="配置文件">
    在 `config.json` 中添加以下配置后启动程序：

    ```json
    {
      "channel_type": "feishu",
      "feishu_app_id": "YOUR_APP_ID",
      "feishu_app_secret": "YOUR_APP_SECRET",
      "feishu_stream_reply": true
    }
    ```

    | 参数 | 说明 | 默认值 |
    | --- | --- | --- |
    | `feishu_app_id` | 飞书应用 App ID | - |
    | `feishu_app_secret` | 飞书应用 App Secret | - |
    | `feishu_stream_reply` | 是否开启流式打字机回复 | `true` |
  </Tab>
</Tabs>

**步骤三：发布应用**

1. 启动 Cow 项目后，在飞书开放平台点击 **事件与回调**，选择 **长连接** 模式并保存：

<img src="https://cdn.link-ai.tech/doc/202601311731183.png" width="600"/>

2. 点击 **添加事件**，搜索 "接收消息"，选择 **接收消息 v2.0** 并确认。

3. 点击 **版本管理与发布**，创建版本并申请 **线上发布**，在飞书客户端审核通过：

<img src="https://cdn.link-ai.tech/doc/202601311807356.png" width="600"/>

## 二、功能说明

| 功能 | 支持情况 |
| --- | --- |
| 单聊 | ✅ |
| 群聊（@机器人） | ✅ |
| 文本消息 | ✅ 收发 |
| 图片消息 | ✅ 收发 |
| 语音消息 | ✅ 收发 |
| 流式回复 | ✅（通过 `feishu_stream_reply` 配置控制，默认开启） |

<Note>
  流式回复需要机器人具备 `cardkit:card:write` 权限（一键创建已默认开通），且接收方飞书客户端版本 ≥ 7.20。低版本客户端会显示升级提示，权限或版本不满足时自动降级为普通文本回复。
</Note>

## 三、使用

完成接入后，在飞书中搜索机器人名称即可开始单聊对话。

如需在群聊中使用，将机器人添加到群中，@机器人发送消息即可。
````

## File: docs/channels/index.mdx
````markdown
---
title: 通道概览
description: CowAgent 支持的通道及能力矩阵
---

CowAgent 支持接入多种聊天通道，启动时通过 `channel_type` 切换。Web 控制台默认开启，可与其他接入通道并行运行。

## 能力矩阵

下表汇总各通道支持的入站消息类型、机器人回复类型与群聊能力，方便按场景选择。

| 通道 | 文本 | 图片 | 文件 | 语音 | 群聊 |
| --- | :-: | :-: | :-: | :-: | :-: |
| [微信](/channels/weixin) | ✅ | ✅ | ✅ | ✅ |  |
| [Web 控制台](/channels/web) | ✅ | ✅ | ✅ | ✅ | |
| [飞书](/channels/feishu) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [钉钉](/channels/dingtalk) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [企微智能机器人](/channels/wecom-bot) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [QQ](/channels/qq) | ✅ | ✅ | ✅ | | ✅ |
| [企业微信应用](/channels/wecom) | ✅ | ✅ | ✅ | ✅ | |
| [公众号](/channels/wechatmp) | ✅ | ✅ | | ✅ | |
| [Telegram](/channels/telegram) | ✅ | ✅ | ✅ | ✅ | ✅ |

- **图片 / 文件 / 语音**列表示通道支持收发对应消息类型，具体细节详见各通道文档
- **群聊**列指可识别并响应群消息

<Tip>
  每个通道的语音 / 图像能力依赖对应模型厂商的配置，详见 [模型概览](/models)。
</Tip>

## 通道一览

- [Web 控制台](/channels/web) — 内置浏览器对话和管理面板，默认开启
- [微信](/channels/weixin) — 通过个人微信扫码登录
- [飞书](/channels/feishu) — 飞书自建机器人
- [钉钉](/channels/dingtalk) — 钉钉自建机器人
- [企微智能机器人](/channels/wecom-bot) — 企业微信智能机器人
- [QQ](/channels/qq) — QQ 官方机器人开放平台
- [企业微信应用](/channels/wecom) — 企业微信自建应用接入
- [公众号](/channels/wechatmp) — 微信公众号（订阅号 / 服务号）
- [Telegram](/channels/telegram) — 海外 IM，5 分钟接入，无需公网 IP
````

## File: docs/channels/qq.mdx
````markdown
---
title: QQ 机器人
description: 将 CowAgent 接入 QQ 机器人（WebSocket 长连接模式）
---

> 通过 QQ 开放平台的机器人接口接入 CowAgent，支持 QQ 单聊、QQ 群聊（@机器人）、频道消息和频道私信，无需公网 IP，使用 WebSocket 长连接模式。

<Note>
  QQ 机器人通过 QQ 开放平台创建，使用 WebSocket 长连接接收消息，通过 OpenAPI 发送消息，无需公网 IP 和域名。
</Note>

## 一、创建 QQ 机器人

> 进入[QQ 开放平台](https://q.qq.com)，QQ扫码登录，如果未注册开放平台账号，请先完成[账号注册](https://q.qq.com/#/register)。

1.在 [QQ开放平台-机器人列表页](https://q.qq.com/#/apps)，点击创建机器人:

<img src="https://cdn.link-ai.tech/doc/20260317162900.png" width="800"/>

2.填写机器人名称、头像等基本信息，完成创建：

<img src="https://cdn.link-ai.tech/doc/20260317163005.png" width="800"/>

3.点击进入机器人配置页面，选择**开发管理**菜单，完成以下步骤：

  - 复制并记录 **AppID**（机器人ID）
  - 生成并记录 **AppSecret**（机器人秘钥）

<img src="https://cdn.link-ai.tech/doc/20260317164955.png" width="800"/>

## 二、配置和运行

### 方式一：Web 控制台接入

启动 Cow项目后打开 Web 控制台 (本地链接为: http://127.0.0.1:9899/ )，选择 **通道** 菜单，点击 **接入通道**，选择 **QQ 机器人**，填写上一步保存的 AppID 和 AppSecret，点击接入即可。

<img src="https://cdn.link-ai.tech/doc/20260317165425.png" width="800"/>

### 方式二：配置文件接入

在 `config.json` 中添加以下配置：

```json
{
  "channel_type": "qq",
  "qq_app_id": "YOUR_APP_ID",
  "qq_app_secret": "YOUR_APP_SECRET"
}
```

| 参数 | 说明 |
| --- | --- |
| `qq_app_id` | QQ 机器人的 AppID，在开放平台开发管理中获取 |
| `qq_app_secret` | QQ 机器人的 AppSecret，在开放平台开发管理中获取 |

配置完成后启动程序，日志显示 `[QQ] ✅ Connected successfully` 即表示连接成功。


## 三、使用

在 QQ开放平台 - 管理 - **使用范围和人员** 菜单中，使用QQ客户端扫描 "添加到群和消息列表" 的二维码，即可开始与QQ机器人的聊天：

<img src="https://cdn.link-ai.tech/doc/20260317165947.png" width="800"/>

对话效果：
<img src="https://cdn.link-ai.tech/doc/20260317171508.png" width="800"/>

## 四、功能说明

> 注意：若需在群聊及频道中使用QQ机器人，需完成发布上架审核并在使用范围配置权限使用范围。

| 功能 | 支持情况 |
| --- | --- |
| QQ 单聊 | ✅ |
| QQ 群聊（@机器人） | ✅ |
| 频道消息（@机器人） | ✅ |
| 频道私信 | ✅ |
| 文本消息 | ✅ 收发 |
| 图片消息 | ✅ 收发（群聊和单聊） |
| 文件消息 | ✅ 发送（群聊和单聊） |
| 定时任务 | ✅ 主动推送（每月每用户限 4 条） |


## 五、注意事项

- **被动消息限制**：QQ 单聊被动消息有效期为 60 分钟，每条消息最多回复 5 次；QQ 群聊被动消息有效期为 5 分钟。
- **主动消息限制**：单聊和群聊每月主动消息上限为 4 条，在使用定时任务功能时需要注意这个限制
- **事件权限**：默认订阅 `GROUP_AND_C2C_EVENT`（QQ群/单聊）和 `PUBLIC_GUILD_MESSAGES`（频道公域消息），如需其他事件类型请在开放平台申请权限。
````

## File: docs/channels/telegram.mdx
````markdown
---
title: Telegram
description: 将 CowAgent 接入 Telegram Bot
---

> 通过 Telegram Bot API 接入 CowAgent，支持单聊与群聊（@机器人 / 回复机器人触发），使用 Long Polling 模式无需公网 IP，开箱即用。


## 一、接入步骤

### 步骤一：通过 BotFather 创建 Bot

1. 在 Telegram 中搜索并打开官方账号 [@BotFather](https://t.me/BotFather)。
2. 发送 `/newbot` 命令，按提示输入：
   - **Bot 名称**（显示名，可中文，例如 `My CowAgent Bot`）
   - **Bot 用户名**（必须以 `bot` 结尾，例如 `my_cowagent_bot`）
3. 创建成功后，BotFather 会返回一段 **HTTP API Token**（形如 `123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ`），妥善保存。

<Tip>
  这个 Token 等同于 Bot 的密码，请勿泄露。如果意外泄漏可向 `@BotFather` 发送 `/revoke` 重置。
</Tip>

### 步骤二：（群聊使用）关闭 Privacy Mode

仅使用单聊可跳过此步。Telegram Bot 默认开启 **Privacy Mode**，群聊中只能收到带 `@bot` 的命令（如 `/start@your_bot`）以及对 bot 消息的 reply；**普通的 `@bot 你好` 文字消息收不到**，会导致群聊无响应。

向 `@BotFather` 发送：

1. `/setprivacy`
2. 选择刚才创建的 bot
3. 选择 `Disable`

<Note>
  若设置后群聊仍无响应，可尝试把 Bot 从群里移除并重新拉入。
</Note>

### 步骤三：接入 CowAgent

<Tabs>
  <Tab title="Web 控制台（推荐）">
    打开 Web 控制台（本地链接：http://127.0.0.1:9899 ），选择 **通道** 菜单，点击 **接入通道**，选择 **Telegram**，填入 Bot Token，点击接入即可。
  </Tab>
  <Tab title="配置文件">
    在 `config.json` 中添加以下配置后启动：

    ```json
    {
      "channel_type": "telegram",
      "telegram_token": "123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ",
      "telegram_group_trigger": "mention_or_reply"
    }
    ```

    | 参数 | 说明 | 默认值 |
    | --- | --- | --- |
    | `telegram_token` | BotFather 返回的 HTTP API Token | - |
    | `telegram_group_trigger` | 群聊触发方式：`mention_or_reply`（@或回复机器人）/ `mention_only`（仅@） / `all`（所有消息） | `mention_or_reply` |
    | `telegram_register_commands` | 启动时是否自动向 BotFather 注册命令菜单 | `true` |
    | `telegram_proxy` | （可选）代理地址，如 `http://127.0.0.1:7890`、`socks5://127.0.0.1:1080`；运行环境无法直连 `api.telegram.org` 时配置，留空则使用环境变量 `HTTPS_PROXY` | `""` |
  </Tab>
</Tabs>

启动 Cow 后，日志中出现以下输出即表示接入成功：

```
[Telegram] Bot logged in as @my_cowagent_bot (id=123456789)
[Telegram] Registered 10 bot commands
[Telegram] ✅ Telegram bot ready, polling for updates
```

## 二、功能说明

| 功能 | 支持情况 |
| --- | --- |
| 单聊 | ✅ |
| 群聊（@机器人 / 回复机器人） | ✅ |
| 文本消息 | ✅ 收发 |
| 图片消息 | ✅ 收发 |
| 语音消息 | ✅ 收发（接收 OGG/Opus，发送 OGG/Opus） |
| 视频消息 | ✅ 收发 |
| 文件消息 | ✅ 收发（PDF / Word / Excel 等） |
| 命令菜单 | ✅ 与 Web 控制台 slash 命令一致 |

### 命令菜单

启动时会自动向 BotFather 注册命令菜单，用户在 Telegram 输入框输入 `/` 会出现下拉提示：

| 命令 | 说明 |
| --- | --- |
| `/help` | 显示命令帮助 |
| `/status` | 查看运行状态 |
| `/context` | 查看对话上下文（`/context clear` 清除） |
| `/skill` | 技能管理（`/skill list`、`/skill install` 等） |
| `/memory` | 记忆管理（`/memory dream`） |
| `/knowledge` | 知识库管理（`/knowledge list` / `on` / `off`） |
| `/config` | 查看当前配置 |
| `/cancel` | 中止当前正在运行的 Agent 任务 |
| `/logs` | 查看最近日志 |
| `/version` | 查看版本 |

<Note>
  Telegram 命令菜单只能展示一级命令，子命令通过空格输入即可，例如 `/skill list`、`/context clear`。
</Note>

## 三、使用

完成接入后：

- **单聊**：在 Telegram 中搜索你创建的 Bot 用户名（如 `@my_cowagent_bot`），点击 `Start` 即可开始对话。
- **群聊**：把 Bot 拉进群，使用 `@bot 你好` 或 **回复 Bot 的某条消息** 触发对话。若群聊无响应，请检查 Privacy Mode 是否已按 [步骤二](#步骤二-群聊使用-关闭-privacy-mode) 关闭。

发送图片或文件时，可以直接在附件上方的输入框中 **添加 Caption**（描述/问题）一并发送，机器人会结合附件回答。也支持先发附件再发问题，两条消息会自动合并提问。
````

## File: docs/channels/web.mdx
````markdown
---
title: Web 控制台
description: 通过 Web 控制台使用 CowAgent
---

Web 控制台是 CowAgent 的默认通道，启动后会自动运行，通过浏览器即可与 Agent 对话，并支持在线管理模型、技能、记忆、通道等配置。

## 配置

```json
{
  "channel_type": "web",
  "web_host": "0.0.0.0",
  "web_port": 9899,
  "web_password": "",
  "enable_thinking": false
}
```

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
| `channel_type` | 设为 `web` | `web` |
| `web_host` | Web 服务监听地址，默认监听 `127.0.0.1`（仅本机），如需公网访问请改为 `0.0.0.0` 并设置密码 | `""` |
| `web_port` | Web 服务监听端口 | `9899` |
| `web_password` | 访问密码，留空表示不启用密码保护；监听 `0.0.0.0` 时建议设置 | `""` |
| `web_session_expire_days` | 登录会话有效天数 | `30` |
| `enable_thinking` | 是否启用深度思考模式 | `false` |

配置密码后，访问控制台时需先输入密码完成登录。登录状态默认保持 30 天，期间重启服务也无需重新登录。密码也支持在控制台的「配置」页面中在线修改。

## 访问地址

启动项目后访问：

- 本地运行：`http://localhost:9899`
- 服务器运行：`http://<server-ip>:9899`

<Note>
  请确保服务器防火墙和安全组已放行对应端口。
</Note>

## 功能介绍

### 对话界面

支持流式输出，可实时展示 Agent 的思考过程（Reasoning）和工具调用过程（Tool Calls），更直观地观察 Agent 的决策过程。深度思考功能可通过配置或控制台的「Agent 配置」开关控制。

<img width="850" src="https://cdn.link-ai.tech/doc/20260227180120.png" />

#### 多会话管理

对话界面支持多会话（Session）管理，所有会话记录持久化存储在数据库中：

- **会话列表**：点击左侧历史会话图标可展开/收起会话列表面板，支持滚动加载全部历史会话
- **AI 生成标题**：新会话在首轮对话完成后，自动调用模型生成简短的会话摘要标题
- **新建会话**：点击会话列表顶部的「新对话」按钮或输入区的 `+` 按钮创建新会话
- **删除会话**：点击会话项的删除按钮，确认后永久删除该会话及其所有消息
- **清除上下文**：点击输入区的清除按钮，在当前会话中插入一条分隔线，分隔线以上的消息仍然展示但不再作为模型的上下文输入

### 模型管理

支持在线管理不同模型厂商的文本、图像、语音、向量模型配置，无需手动编辑配置文件：

<img width="850" src="https://cdn.link-ai.tech/doc/20260521212949.png" />

### 技能管理

支持在线查看和管理 Agent 技能（Skills）：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173403.png" />

### 记忆管理

支持在线查看和管理 Agent 记忆：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173349.png" />

### 通道管理

支持在线管理接入通道，支持实时连接/断开操作：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173331.png" />

### 定时任务

支持在线查看和管理定时任务，包括一次性任务、固定间隔、Cron 表达式等多种调度方式的可视化管理：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173704.png" />

### 日志

支持在线实时查看 Agent 运行日志，便于监控运行状态和排查问题：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173514.png" />
````

## File: docs/channels/wechatmp.mdx
````markdown
---
title: 微信公众号
description: 将 CowAgent 接入微信公众号
---

CowAgent 支持接入个人订阅号和企业服务号两种公众号类型。

| 类型 | 要求 | 特点 |
| --- | --- | --- |
| **个人订阅号** | 个人可申请 | 收到消息时会回复一条提示，回复生成后需用户主动发消息获取 |
| **企业服务号** | 企业申请，需通过微信认证开通客服接口 | 回复生成后可主动推送给用户 |

<Note>
  公众号仅支持服务器和 Docker 部署，不支持本地运行。需额外安装扩展依赖：`pip3 install -r requirements-optional.txt`
</Note>

## 一、个人订阅号

在 `config.json` 中添加以下配置：

```json
{
  "channel_type": "wechatmp",
  "single_chat_prefix": [""],
  "wechatmp_app_id": "wx73f9******d1e48",
  "wechatmp_app_secret": "YOUR_APP_SECRET",
  "wechatmp_aes_key": "",
  "wechatmp_token": "YOUR_TOKEN",
  "wechatmp_port": 80
}
```

### 配置步骤

这些配置需要和 [微信公众号后台](https://mp.weixin.qq.com/advanced/advanced?action=dev&t=advanced/dev) 中的保持一致，进入页面后，在左侧菜单选择 **设置与开发 → 基本配置 → 服务器配置**，按下图进行配置：

<img src="https://cdn.link-ai.tech/doc/20260228103506.png" width="480"/>

1. 在公众平台启用开发者密码（对应配置 `wechatmp_app_secret`），并将服务器 IP 填入白名单
2. 按上图填写 `config.json` 中与公众号相关的配置，要与公众号后台的配置一致
3. 启动程序，启动后会监听 80 端口（若无权限监听，则在启动命令前加上 `sudo`；若 80 端口已被占用，则关闭该占用进程）
4. 在公众号后台 **启用服务器配置** 并提交，保存成功则表示已成功配置。注意 **"服务器地址(URL)"** 需要配置为 `http://{HOST}/wx` 的格式，其中 `{HOST}` 可以是服务器的 IP 或域名

随后关注公众号并发送消息即可看到以下效果：

<img src="https://cdn.link-ai.tech/doc/20260228103522.png" width="720"/>

由于受订阅号限制，回复内容较短的情况下（15s 内），可以立即完成回复，但耗时较长的回复则会先回复一句 "正在思考中"，后续需要用户输入任意文字主动获取答案，而服务号则可以通过客服接口解决这一问题。

<Tip>
  **语音识别**：可利用微信自带的语音识别功能，需要在公众号管理页面的 "设置与开发 → 接口权限" 页面开启 "接收语音识别结果"。
</Tip>

## 二、企业服务号

企业服务号与上述个人订阅号的接入过程基本相同，差异如下：

1. 在公众平台申请企业服务号并完成微信认证，在接口权限中确认已获得 **客服接口** 的权限
2. 在 `config.json` 中设置 `"channel_type": "wechatmp_service"`，其他配置与上述订阅号相同
3. 交互效果上，即使是较长耗时的回复，也可以主动推送给用户，无需用户手动获取

```json
{
  "channel_type": "wechatmp_service",
  "single_chat_prefix": [""],
  "wechatmp_app_id": "YOUR_APP_ID",
  "wechatmp_app_secret": "YOUR_APP_SECRET",
  "wechatmp_aes_key": "",
  "wechatmp_token": "YOUR_TOKEN",
  "wechatmp_port": 80
}
```
````

## File: docs/channels/wecom-bot.mdx
````markdown
---
title: 企微智能机器人
description: 将 CowAgent 接入企业微信智能机器人（长连接模式）
---

> 通过企业微信智能机器人接入CowAgent，支持企业内部单聊和内部群聊，无需公网 IP，使用 WebSocket 长连接模式，支持Markdown渲染和流式输出。

<Note>
  智能机器人与企业微信自建应用是两种不同的接入方式。智能机器人使用 WebSocket 长连接，无需服务器公网 IP 和域名，配置更简单。
</Note>

## 一、接入方式

### 方式一：扫码一键接入（推荐）

无需提前创建机器人，启动 Cow 项目后打开 Web 控制台（本地链接：http://127.0.0.1:9899/），选择 **通道** 菜单，点击**接入通道**，选择**企微智能机器人**，切换到「扫码接入」模式，使用**企业微信**扫码即可自动完成机器人创建和接入。

<img src="https://cdn.link-ai.tech/doc/20260401121213.png" width="800"/>

<Note>
  扫码成功后，可在企业微信工作台 - **智能机器人**页面对机器人进行进一步配置，包括修改名称、头像、可见范围等。
</Note>

### 方式二：手动创建接入

需要先在企业微信中创建智能机器人并获取 Bot ID 和 Secret，再通过 Web 控制台或配置文件接入。

**步骤一：创建智能机器人**

1. 打开企业微信客户端，进入工作台，点击**智能机器人**：

<img src="https://cdn.link-ai.tech/doc/20260316180959.png" width="800"/>

2. 点击创建机器人 - 手动创建：

<img src="https://cdn.link-ai.tech/doc/20260316181118.png" width="800"/>

3. 右侧窗口拖到最下方，选择**API模式创建**：

<img src="https://cdn.link-ai.tech/doc/20260316181215.png" width="800"/>

4. 设置机器人名称、头像、可见范围，并选择**长连接模式**，记录下 **Bot ID** 和 **Secret** 信息后点击保存。

**步骤二：接入 CowAgent**

<Tabs>
  <Tab title="Web 控制台">
    打开 Web 控制台，选择**通道**菜单，点击**接入通道**，选择**企微智能机器人**，切换到「手动填写」模式，输入 Bot ID 和 Secret，点击接入即可。

    <img src="https://cdn.link-ai.tech/doc/20260316181711.png" width="800"/>
  </Tab>
  <Tab title="配置文件">
    在 `config.json` 中添加以下配置后启动程序：

    ```json
    {
      "channel_type": "wecom_bot",
      "wecom_bot_id": "YOUR_BOT_ID",
      "wecom_bot_secret": "YOUR_SECRET"
    }
    ```

    | 参数 | 说明 |
    | --- | --- |
    | `wecom_bot_id` | 智能机器人的 BotID |
    | `wecom_bot_secret` | 智能机器人的 Secret |
  </Tab>
</Tabs>

日志显示 `[WecomBot] Subscribe success` 即表示连接成功。

## 二、功能说明

| 功能 | 支持情况 |
| --- | --- |
| 单聊 | ✅ |
| 群聊（@机器人） | ✅ |
| 文本消息 | ✅ 收发 |
| 图片消息 | ✅ 收发 |
| 文件消息 | ✅ 收发 |
| 流式回复 | ✅ |
| 定时任务主动推送 | ✅ |

## 三、使用

在企业微信中搜索创建的机器人名称，即可开始单聊对话。

如需在企微内部群聊中使用，将机器人添加到群中，@机器人发送消息即可。

<img src="https://cdn.link-ai.tech/doc/20260316182902.png" width="800"/>
````

## File: docs/channels/wecom.mdx
````markdown
---
title: 企微自建应用
description: 将 CowAgent 接入企业微信自建应用
---

通过企业微信自建应用接入 CowAgent，支持企业内部人员单聊使用。

<Note>
  企业微信只能使用 Docker 部署或服务器 Python 部署，不支持本地运行模式。
</Note>

## 一、准备

需要的资源：

1. 一台服务器（有公网 IP）
2. 注册一个企业微信（个人也可注册，但无法认证）
3. 认证企业微信还需要对应主体备案的域名

## 二、创建企业微信应用

1. 在 [企业微信管理后台](https://work.weixin.qq.com/wework_admin/frame#profile) 点击 **我的企业**，在最下方获取 **企业ID**（后续填写到 `wechatcom_corp_id` 字段中）。

2. 切换到 **应用管理**，点击创建应用：

<img src="https://cdn.link-ai.tech/doc/20260228103156.png" width="480"/>

3. 进入应用创建页面，记录 `AgentId` 和 `Secret`：

<img src="https://cdn.link-ai.tech/doc/20260228103218.png" width="580"/>

4. 点击 **设置API接收**，配置应用接口：

<img src="https://cdn.link-ai.tech/doc/20260228103211.png" width="520"/>

- URL 格式为 `http://ip:port/wxcomapp`（认证企业需使用备案域名）
- 随机获取 `Token` 和 `EncodingAESKey` 并保存

<Note>
  此时保存 API 接收配置会失败，因为程序还未启动，等项目运行后再回来保存。
</Note>

## 三、配置和运行

在 `config.json` 中添加以下配置（各参数与企业微信后台的对应关系见上方截图）：

```json
{
  "channel_type": "wechatcom_app",
  "single_chat_prefix": [""],
  "wechatcom_corp_id": "YOUR_CORP_ID",
  "wechatcomapp_token": "YOUR_TOKEN",
  "wechatcomapp_secret": "YOUR_SECRET",
  "wechatcomapp_agent_id": "YOUR_AGENT_ID",
  "wechatcomapp_aes_key": "YOUR_AES_KEY",
  "wechatcomapp_port": 9898
}
```

| 参数 | 说明 |
| --- | --- |
| `wechatcom_corp_id` | 企业 ID |
| `wechatcomapp_token` | API 接收配置中的 Token |
| `wechatcomapp_secret` | 应用的 Secret |
| `wechatcomapp_agent_id` | 应用的 AgentId |
| `wechatcomapp_aes_key` | API 接收配置中的 EncodingAESKey |
| `wechatcomapp_port` | 监听端口，默认 9898 |

配置完成后启动程序。当后台日志显示 `http://0.0.0.0:9898/` 时说明程序运行成功，需要将该端口对外开放（如在云服务器安全组中放行）。

程序启动后，回到企业微信后台保存 **消息服务器配置**，保存成功后还需将服务器 IP 添加到 **企业可信IP** 中，否则无法收发消息：

<img src="https://cdn.link-ai.tech/doc/20260228103224.png" width="520"/>

<Warning>
  如遇到 URL 配置回调不通过或配置失败：
  1. 确保服务器防火墙关闭且安全组放行监听端口
  2. 仔细检查 Token、Secret Key 等参数配置是否一致，URL 格式是否正确
  3. 认证企业微信需要配置与主体一致的备案域名
</Warning>

## 四、使用

在企业微信中搜索刚创建的应用名称，即可直接对话：

<img src="https://cdn.link-ai.tech/doc/20260228103228.png" width="720"/>

如需让外部个人微信用户使用，可在 **我的企业 → 微信插件** 中分享邀请关注二维码，个人微信扫码关注后即可与应用对话：

<img src="https://cdn.link-ai.tech/doc/20260228103232.png" width="520"/>

## 常见问题

需要确保已安装以下依赖：

```bash
pip install websocket-client pycryptodome
```
````

## File: docs/channels/weixin.mdx
````markdown
---
title: 微信
description: 将 CowAgent 接入个人微信（基于官方接口）
---

> 接入个人微信，扫码登录即可使用，支持文本、图片、语音、文件、视频等消息的私聊收发。通过微信官方API进行接入，无安全风险，接入后会在会话中新增一个机器人助手，不影响当前账号的使用。

## 一、配置和运行

### 方式一：Web 控制台接入

启动 Cow 项目后打开 Web 控制台 (本地链接为: http://127.0.0.1:9899/ )，选择 **通道** 菜单，点击 **接入通道**，选择 **微信**，点击接入后按照提示扫码登录。

<img src="https://cdn.link-ai.tech/doc/20260322195114.png" width="800" />

### 方式二：配置文件接入

在 `config.json` 中设置 `channel_type` 为 `weixin`：

```json
{
  "channel_type": "weixin"
}
```

启动程序后，终端会显示二维码，使用微信扫码授权即可完成登录。

<img src="https://cdn.link-ai.tech/doc/20260322195509.png" width="800" />


<Note>
  1. 兼容历史配置：`channel_type` 设为 `wx` 同样可以启用微信通道。
  2. 注意微信客户端需要更新至 8.0.69 版本或以上
</Note>

## 二、使用说明

微信扫码并进行授权确认后，即可完成接入并开始对话。接入微信后会在对话中创建出一个机器人助理，不会对已有账号的正常使用有任何影响。

> 你可以通过搜索"微信ClawBot"随时找到这个机器人，还可以修改这个机器人的头像、备注等信息，将机器人置顶在消息列表等。

<img src="https://cdn.link-ai.tech/doc/83ae8251d896219fde4803f4205205be.jpg" width="250" />



## 三、登录说明

### 扫码登录

首次启动时，终端会显示一个二维码（有效期约 2 分钟）。使用微信扫描二维码并在手机上确认后即可完成登录。

- 二维码过期后会自动刷新并重新显示
- `requirements.txt` 中已默认包含 `qrcode` 依赖，安装后可在终端直接渲染二维码图案

### 凭证保存

登录成功后，凭证会自动保存至 `~/.weixin_cow_credentials.json`，下次启动时无需重新扫码。

如需重新登录，删除该凭证文件后重启程序即可。

### Session 过期

当微信 session 过期时（errcode -14），程序会自动清除旧凭证并重新发起扫码登录，无需手动干预。

## 四、功能说明

| 功能 | 支持情况 |
| --- | --- |
| 单聊 | ✅ |
| 文本消息 | ✅ 收发 |
| 图片消息 | ✅ 收发 |
| 文件消息 | ✅ 收发 |
| 视频消息 | ✅ 收发 |
| 语音消息 | ✅ 接收 (自带语音识别) |
````

## File: docs/cli/general.mdx
````markdown
---
title: 常用命令
description: 查看状态、管理配置和上下文等常用命令
---

以下命令支持在对话中使用 `/` 前缀，也支持在终端中使用 `cow` 前缀（部分命令仅对话可用）。

<Tip>
  在 Web 控制台中输入 `/` 会自动弹出命令提示，支持键盘上下选择和 Tab 补全。
</Tip>

## help

显示所有可用命令的帮助信息。

```text
/help
```

## status

查看当前会话和服务的运行状态，包括进程信息、模型配置、会话消息数量和已加载技能数量。

```text
/status
```

输出示例：

```
🐮 CowAgent Status

Process: PID 12345 | Running 2h 15m
Version: 2.0.4
Channel: web
Model:   MiniMax-M2.5
Mode:    agent

Session: 12 messages | 8 skills loaded
```

## cancel

中止当前会话正在运行的 Agent 任务。在 Agent 执行长时间任务（例如多轮工具调用、长流式输出）时，可随时发送 `/cancel`，Agent 会在下一次工具执行前停止。Web 端、微信、企业微信、飞书等各通道均可使用。

```text
/cancel
```

## config

查看或修改运行时配置。修改后立即生效，无需重启服务。

**查看所有可配置项：**

```text
/config
```

**查看单个配置项：**

```text
/config model
```

**修改配置项：**

```text
/config model deepseek-v4-flash
```

**支持修改的配置项：**

| 配置项 | 说明 | 示例值 |
| --- | --- | --- |
| `model` | AI 模型名称 | `deepseek-v4-flash` |
| `agent_max_context_tokens` | 最大上下文 tokens | `40000` |
| `agent_max_context_turns` | 最大上下文记忆轮次 | `30` |
| `agent_max_steps` | 单次任务最大决策步数 | `15` |
| `enable_thinking` | 是否启用深度思考模式 | `true` / `false` |

<Note>
  修改 `model` 时，系统会自动匹配对应的模型调用方式。配置会写入 `config.json` 并持久保存。
</Note>

## context

查看当前会话的上下文信息，包括消息数量、内容长度等统计。

```text
/context
```

**清空当前会话上下文：**

```text
/context clear
```

<Tip>
  清空上下文后，Agent 会"忘记"之前的对话内容，适用于切换话题或释放上下文空间。
</Tip>

## logs

查看最近的服务日志，默认显示最近 20 行，最多 50 行。

```text
/logs
```

**指定行数：**

```text
/logs 50
```

## version

显示当前 CowAgent 版本号。

```text
/version
```
````

## File: docs/cli/index.mdx
````markdown
---
title: 命令总览
description: CowAgent 命令系统 — 终端 CLI 和对话命令
---

CowAgent 提供两种命令交互方式：

- **终端CLI** — 在系统终端中执行 `cow <命令>`，用于服务管理、技能管理等运维操作
- **对话命令** — 在对话中输入 `/<命令>` 或 `cow <命令>`，用于查看状态、管理技能、调整配置等

## 终端命令

通过一键安装脚本部署后，`cow` 命令会自动可用。手动安装的用户需要在项目根目录下额外执行：

```bash
pip install -e .
```

安装后即可在任意位置使用 `cow` 命令：

```bash
cow help
```

输出示例：

```
CowAgent CLI

Usage: cow <command>

Service:
  start     Start the CowAgent service
  stop      Stop the CowAgent service
  restart   Restart the CowAgent service
  update    Update code and restart service
  status    Show service status
  logs      View service logs

Skills:
  skill     Manage skills (list / search / install / uninstall ...)

Memory & Knowledge:
  memory    Memory distillation (dream)
  knowledge View knowledge base stats and structure

Others:
  help      Show this help message
  version   Show version
```

## 对话命令

在 Web 控制台或任意接入渠道的对话中，支持输入以 `/` 开头的命令：

| 命令 | 说明 |
| --- | --- |
| `/help` | 显示命令帮助 |
| `/status` | 查看服务状态和配置 |
| `/cancel` | 中止当前正在运行的 Agent 任务 |
| `/config` | 查看或修改运行时配置 |
| `/skill` | 管理技能（安装、卸载、启用、禁用等） |
| `/memory dream [N]` | 手动触发记忆蒸馏（默认 3 天，最大 30） |
| `/knowledge` | 查看知识库统计信息 |
| `/knowledge list` | 查看知识库目录结构 |
| `/knowledge on\|off` | 开启或关闭知识库 |
| `/context` | 查看当前会话上下文信息 |
| `/context clear` | 清空当前会话上下文 |
| `/logs` | 查看最近日志 |
| `/version` | 显示版本号 |

<Tip>
  对话命令中 `/start`、`/stop`、`/restart` 等服务管理命令会提示到终端中执行，因为它们涉及进程操作。
</Tip>

## 命令对照表

以下是各命令在终端和对话中的可用性：

| 命令 | 终端 (`cow`) | 对话 (`/`) |
| --- | :---: | :---: |
| help | ✓ | ✓ |
| version | ✓ | ✓ |
| status | ✓ | ✓ |
| logs | ✓ | ✓ |
| cancel | ✗ | ✓ |
| config | ✗ | ✓ |
| context | — | ✓ |
| memory (子命令) | ✗ | ✓ |
| knowledge (子命令) | ✓ | ✓ |
| skill (子命令) | ✓ | ✓ |
| start / stop / restart | ✓ | ✗ |
| update | ✓ | ✗ |
| install-browser | ✓ | ✗ |

<Note>
  `context` 在终端中仅提示到对话中使用。`config` 仅支持在对话中修改。
</Note>
````

## File: docs/cli/memory-knowledge.mdx
````markdown
---
title: 记忆与知识库
description: 记忆蒸馏和知识库管理命令
---

## memory

管理 Agent 的长期记忆系统。

### memory dream

手动触发记忆蒸馏（Deep Dream），整理近期的天级记忆，蒸馏合并到 MEMORY.md，并生成梦境日记。

```text
/memory dream [N]
```

- `N`：整理近 N 天的记忆，默认 3 天，最大 30 天
- 蒸馏在后台异步执行，完成后会在对话中通知结果
- 无需等待 Agent 初始化，首次对话前即可使用

**示例：**

```text
/memory dream       # 整理近 3 天
/memory dream 7     # 整理近 7 天
/memory dream 30    # 整理近 30 天（全量）
```

蒸馏完成后，Web 端会收到带有跳转链接的通知，可直接查看更新后的 MEMORY.md 和梦境日记。

<Tip>
  系统每天 23:55 会自动执行一次蒸馏（lookback 1 天）。手动触发适用于首次部署后的历史整理，或需要立即更新记忆时使用。
</Tip>

## knowledge

查看和管理个人知识库。默认显示知识库统计信息。

```text
/knowledge
```

输出示例：

```
📚 知识库

- 状态：已开启
- 页面数：12
- 总大小：45.2 KB
- 分类明细：
  - concepts/: 5 篇
  - entities/: 4 篇
  - sources/: 3 篇
```

### knowledge list

查看知识库目录树结构。

```text
/knowledge list
```

### knowledge on / off

开启或关闭知识库。关闭后不再注入知识提示词和索引知识文件。

```text
/knowledge on
/knowledge off
```

<Note>
  终端 CLI 中 `cow knowledge` 和 `cow knowledge list` 可用，但 `on|off` 仅支持在对话中使用（需实时生效）。
</Note>
````

## File: docs/cli/process.mdx
````markdown
---
title: 进程管理
description: 使用 cow 命令管理 CowAgent 进程的启动、停止、重启、更新等操作
---

进程管理命令用于控制 CowAgent 后台进程的生命周期。这些命令仅在终端中可用。

## start

启动 CowAgent 服务。默认以后台进程方式运行，并自动跟踪日志输出。

```bash
cow start
```

**选项：**

| 选项 | 说明 |
| --- | --- |
| `-f`, `--foreground` | 前台运行，不以后台守护进程方式启动 |
| `--no-logs` | 启动后不自动跟踪日志 |

## stop

停止正在运行的 CowAgent 服务。

```bash
cow stop
```

## restart

重启 CowAgent 服务（先停止再启动）。

```bash
cow restart
```

**选项：**

| 选项 | 说明 |
| --- | --- |
| `--no-logs` | 重启后不自动跟踪日志 |

## update

更新代码并重启服务。自动执行以下流程：

1. 拉取最新代码（`git pull`）
2. 停止当前服务
3. 更新 Python 依赖
4. 重新安装 CLI
5. 启动服务

```bash
cow update
```

<Warning>
  如果 `git pull` 失败（如存在本地未提交的修改），更新会中止，服务不受影响。
</Warning>

## status

查看 CowAgent 服务运行状态，包括进程信息、版本号、当前配置的模型和通道。

```bash
cow status
```

输出示例：

```
🐮 CowAgent Status
  Status:   ● Running (PID: 12345)
  Version:  2.0.4
  Channel:  web
  Model:    MiniMax-M2.5
  Mode:     agent
```

## logs

查看服务日志。

```bash
cow logs
```

**选项：**

| 选项 | 说明 | 默认值 |
| --- | --- | --- |
| `-f`, `--follow` | 持续跟踪日志输出 | 否 |
| `-n`, `--lines` | 显示最近 N 行 | 50 |

示例：

```bash
# 查看最近 100 行日志
cow logs -n 100

# 持续跟踪日志
cow logs -f
```

## install-browser

安装 Playwright 和 Chromium 浏览器，用于启用 [浏览器工具](/tools/browser)。

```bash
cow install-browser
```

<Tip>
  仅在需要使用浏览器工具（如网页浏览、截图等）时才需要安装。
</Tip>

## run.sh 兼容

如果未安装 Cow CLI，也可以使用 `run.sh` 脚本管理服务：

| cow 命令 | run.sh 等效命令 |
| --- | --- |
| `cow start` | `./run.sh start` |
| `cow stop` | `./run.sh stop` |
| `cow restart` | `./run.sh restart` |
| `cow update` | `./run.sh update` |
| `cow status` | `./run.sh status` |
| `cow logs` | `./run.sh logs` |

<Note>
  推荐使用 `cow` 命令，它提供更简洁的语法和更丰富的功能。通过一键安装脚本部署时 `cow` 命令会自动安装。
</Note>
````

## File: docs/cli/skill.mdx
````markdown
---
title: 技能管理
description: 通过命令安装、卸载、启用、禁用和管理技能
---

技能管理命令用于安装、查询和管理 CowAgent 的技能。在对话中使用 `/skill <子命令>`，在终端中使用 `cow skill <子命令>`。

## list

列出已安装的技能及其状态。

<CodeGroup>
```text 对话
/skill list
```

```bash 终端
cow skill list
```
</CodeGroup>

输出示例：

```
📦 已安装的技能 (3/4)

✅ pptx
   Use this skill any time a .pptx file is involved…
   来源: cowhub

✅ skill-creator
   Create, install, or update skills…
   来源: builtin

⏸️ image-vision (已禁用)
   图片理解和视觉分析
   来源: builtin
```

**浏览技能广场**（查看 Hub 上所有可安装的技能）：

<CodeGroup>
```text 对话
/skill list --remote
```

```bash 终端
cow skill list --remote
```
</CodeGroup>

**选项：**

| 选项 | 说明 | 默认值 |
| --- | --- | --- |
| `--remote`, `-r` | 浏览 Skill Hub 远程技能列表 | 否 |
| `--page` | 远程列表分页页码 | 1 |

## search

在技能广场中搜索技能。

<CodeGroup>
```text 对话
/skill search pptx
```

```bash 终端
cow skill search pptx
```
</CodeGroup>

## install

安装技能。通过统一的 `install` 命令，可一键安装来自 **Cow 技能广场、GitHub、ClawHub** 以及任意 URL（zip 压缩包、SKILL.md 链接）上的技能，无需手动下载和配置。

**从 Cow 技能广场安装（推荐）：**

<CodeGroup>
```text 对话
/skill install pptx
```

```bash 终端
cow skill install pptx
```
</CodeGroup>

**从 GitHub 安装：**

<CodeGroup>
```text 对话
# 安装仓库中的所有技能（自动扫描包含 SKILL.md 的子目录）
/skill install larksuite/cli

# 指定子目录，只安装单个技能
/skill install https://github.com/larksuite/cli/tree/main/skills/lark-im

# 使用 # 指定子目录
/skill install larksuite/cli#skills/lark-minutes
```

```bash 终端
# 安装仓库中的所有技能（自动扫描包含 SKILL.md 的子目录）
cow skill install larksuite/cli

# 指定子目录，只安装单个技能
cow skill install https://github.com/larksuite/cli/tree/main/skills/lark-im

# 使用 # 指定子目录
cow skill install larksuite/cli#skills/lark-minutes
```
</CodeGroup>

支持完整的 GitHub URL 和 `owner/repo` 简写。对于 mono-repo（一个仓库中包含多个技能），不指定子目录时会自动发现并批量安装所有技能；指定子目录时只安装该目录下的技能。

**从 ClawHub 安装：**

<CodeGroup>
```text 对话
/skill install clawhub:baidu-search
```

```bash 终端
cow skill install clawhub:baidu-search
```
</CodeGroup>

**从 URL 安装：**

<CodeGroup>
```text 对话
# 从 zip 压缩包安装（支持单个或批量）
/skill install https://cdn.link-ai.tech/skills/pptx.zip

# 从 SKILL.md 链接安装
/skill install https://example.com/path/to/SKILL.md
```

```bash 终端
# 从 zip 压缩包安装（支持单个或批量）
cow skill install https://cdn.link-ai.tech/skills/pptx.zip

# 从 SKILL.md 链接安装
cow skill install https://example.com/path/to/SKILL.md
```
</CodeGroup>

支持从 zip / tar.gz 压缩包 URL 安装，解压后自动扫描包含 `SKILL.md` 的目录，支持单个或批量安装。也支持直接从 `SKILL.md` 文件链接安装，会自动解析技能名称和描述。

安装成功后会显示技能名称、描述和来源，例如：

```
✅ baidu-search
   百度搜索：使用百度搜索引擎检索信息…
   来源: clawhub
```

## uninstall

卸载已安装的技能。

<CodeGroup>
```text 对话
/skill uninstall pptx
```

```bash 终端
cow skill uninstall pptx
```
</CodeGroup>

<Warning>
  卸载操作会删除技能目录下的所有文件，此操作不可恢复。
</Warning>

## enable / disable

启用或禁用技能，禁用后技能不会被 Agent 调用。

<CodeGroup>
```text 对话
/skill enable pptx
/skill disable pptx
```

```bash 终端
cow skill enable pptx
cow skill disable pptx
```
</CodeGroup>

## info

查看已安装技能的详细信息，包括 `SKILL.md` 内容预览。

<CodeGroup>
```text 对话
/skill info pptx
```

```bash 终端
cow skill info pptx
```
</CodeGroup>

## 技能来源

安装的技能会记录来源信息，可通过 `/skill list` 查看：

| 来源标识 | 说明 |
| --- | --- |
| `builtin` | 项目内置技能 |
| `cowhub` | 从 CowAgent Skill Hub 安装 |
| `github` | 从 GitHub URL 直接安装 |
| `clawhub` | 从 ClawHub 安装 |
| `url` | 从 SKILL.md URL 安装 |
| `local` | 本地创建的技能 |
````

## File: docs/docs.json
````json
{
  "$schema": "https://mintlify.com/docs.json",
  "name": "CowAgent",
  "description": "CowAgent - AI Super Assistant powered by LLMs, with autonomous task planning, long-term memory, skills system, and multi-channel deployment.",
  "theme": "mint",
  "appearance": {
    "default": "light"
  },
  "colors": {
    "primary": "#35A85B",
    "light": "#4ABE6E",
    "dark": "#228547"
  },
  "logo": {
    "light": "/images/logo.jpg",
    "dark": "/images/logo.jpg"
  },
  "favicon": "/images/favicon.ico",
  "navbar": {
    "links": [
      {
        "label": "官网",
        "href": "https://cowagent.ai/"
      },
      {
        "label": "GitHub",
        "href": "https://github.com/zhayujie/CowAgent"
      }
    ]
  },
  "footer": {
    "socials": {
      "github": "https://github.com/zhayujie/CowAgent"
    }
  },
  "navigation": {
    "languages": [
      {
        "language": "zh",
        "default": true,
        "navbar": {
          "links": [
            { "label": "官网", "href": "https://cowagent.ai/?lang=zh" },
            { "label": "GitHub", "href": "https://github.com/zhayujie/CowAgent" }
          ]
        },
        "tabs": [
          {
            "tab": "项目介绍",
            "groups": [
              {
                "group": "概览",
                "pages": [
                  "intro/index",
                  "intro/architecture",
                  "intro/features"
                ]
              }
            ]
          },
          {
            "tab": "快速开始",
            "groups": [
              {
                "group": "安装部署",
                "pages": [
                  "guide/quick-start",
                  "guide/manual-install",
                  "guide/upgrade"
                ]
              }
            ]
          },
          {
            "tab": "模型",
            "groups": [
              {
                "group": "模型配置",
                "pages": [
                  "models/index",
                  "models/deepseek",
                  "models/minimax",
                  "models/claude",
                  "models/gemini",
                  "models/openai",
                  "models/glm",
                  "models/qwen",
                  "models/doubao",
                  "models/kimi",
                  "models/qianfan",
                  "models/mimo",
                  "models/linkai",
                  "models/coding-plan",
                  "models/custom"
                ]
              }
            ]
          },
          {
            "tab": "工具",
            "groups": [
              {
                "group": "工具系统",
                "pages": [
                  "tools/index"
                ]
              },
              {
                "group": "内置工具",
                "pages": [
                  "tools/read",
                  "tools/write",
                  "tools/edit",
                  "tools/ls",
                  "tools/bash",
                  "tools/send",
                  "tools/memory",
                  "tools/env-config",
                  "tools/web-fetch",
                  "tools/scheduler"
                ]
              },
              {
                "group": "可选工具",
                "pages": [
                  "tools/web-search",
                  "tools/vision",
                  "tools/browser"
                ]
              },
              {
                "group": "MCP 工具",
                "pages": [
                  "tools/mcp"
                ]
              }
            ]
          },
          {
            "tab": "技能",
            "groups": [
              {
                "group": "技能系统",
                "pages": [
                  "skills/index",
                  "skills/install",
                  "skills/create",
                  "skills/hub"
                ]
              },
              {
                "group": "内置技能",
                "pages": [
                  "skills/skill-creator",
                  "skills/knowledge-wiki",
                  "skills/image-generation"
                ]
              }
            ]
          },
          {
            "tab": "记忆",
            "groups": [
              {
                "group": "记忆系统",
                "pages": [
                  "memory/index",
                  "memory/context",
                  "memory/deep-dream"
                ]
              }
            ]
          },
          {
            "tab": "知识",
            "groups": [
              {
                "group": "知识库",
                "pages": [
                  "knowledge/index"
                ]
              }
            ]
          },
          {
            "tab": "通道",
            "groups": [
              {
                "group": "接入渠道",
                "pages": [
                  "channels/index",
                  "channels/weixin",
                  "channels/web",
                  "channels/feishu",
                  "channels/dingtalk",
                  "channels/wecom-bot",
                  "channels/qq",
                  "channels/wecom",
                  "channels/wechatmp",
                  "channels/telegram"
                ]
              }
            ]
          },
          {
            "tab": "命令",
            "groups": [
              {
                "group": "命令系统",
                "pages": [
                  "cli/index",
                  "cli/process",
                  "cli/skill",
                  "cli/memory-knowledge",
                  "cli/general"
                ]
              }
            ]
          },
          {
            "tab": "版本",
            "groups": [
              {
                "group": "发布记录",
                "pages": [
                  "releases/overview",
                  "releases/v2.0.9",
                  "releases/v2.0.8",
                  "releases/v2.0.7",
                  "releases/v2.0.6",
                  "releases/v2.0.5",
                  "releases/v2.0.4",
                  "releases/v2.0.3",
                  "releases/v2.0.2",
                  "releases/v2.0.1",
                  "releases/v2.0.0"
                ]
              }
            ]
          }
        ]
      },
      {
        "language": "en",
        "navbar": {
          "links": [
            { "label": "Website", "href": "https://cowagent.ai/" },
            { "label": "GitHub", "href": "https://github.com/zhayujie/CowAgent" }
          ]
        },
        "tabs": [
          {
            "tab": "Introduction",
            "groups": [
              {
                "group": "Overview",
                "pages": [
                  "en/intro/index",
                  "en/intro/architecture",
                  "en/intro/features"
                ]
              }
            ]
          },
          {
            "tab": "Get Started",
            "groups": [
              {
                "group": "Installation",
                "pages": [
                  "en/guide/quick-start",
                  "en/guide/manual-install",
                  "en/guide/upgrade"
                ]
              }
            ]
          },
          {
            "tab": "Models",
            "groups": [
              {
                "group": "Model Configuration",
                "pages": [
                  "en/models/index",
                  "en/models/deepseek",
                  "en/models/minimax",
                  "en/models/claude",
                  "en/models/gemini",
                  "en/models/openai",
                  "en/models/glm",
                  "en/models/qwen",
                  "en/models/doubao",
                  "en/models/kimi",
                  "en/models/qianfan",
                  "en/models/mimo",
                  "en/models/linkai",
                  "en/models/coding-plan",
                  "en/models/custom"
                ]
              }
            ]
          },
          {
            "tab": "Tools",
            "groups": [
              {
                "group": "Tools System",
                "pages": [
                  "en/tools/index"
                ]
              },
              {
                "group": "Built-in Tools",
                "pages": [
                  "en/tools/read",
                  "en/tools/write",
                  "en/tools/edit",
                  "en/tools/ls",
                  "en/tools/bash",
                  "en/tools/send",
                  "en/tools/memory",
                  "en/tools/env-config",
                  "en/tools/web-fetch",
                  "en/tools/scheduler"
                ]
              },
              {
                "group": "Optional Tools",
                "pages": [
                  "en/tools/web-search",
                  "en/tools/vision",
                  "en/tools/browser"
                ]
              },
              {
                "group": "MCP Tools",
                "pages": [
                  "en/tools/mcp"
                ]
              }
            ]
          },
          {
            "tab": "Skills",
            "groups": [
              {
                "group": "Skills System",
                "pages": [
                  "en/skills/index",
                  "en/skills/install",
                  "en/skills/create",
                  "en/skills/hub"
                ]
              },
              {
                "group": "Built-in Skills",
                "pages": [
                  "en/skills/skill-creator",
                  "en/skills/knowledge-wiki",
                  "en/skills/image-generation"
                ]
              }
            ]
          },
          {
            "tab": "Memory",
            "groups": [
              {
                "group": "Memory System",
                "pages": [
                  "en/memory/index",
                  "en/memory/context",
                  "en/memory/deep-dream"
                ]
              }
            ]
          },
          {
            "tab": "Knowledge",
            "groups": [
              {
                "group": "Knowledge Base",
                "pages": [
                  "en/knowledge/index"
                ]
              }
            ]
          },
          {
            "tab": "Channels",
            "groups": [
              {
                "group": "Platforms",
                "pages": [
                  "en/channels/index",
                  "en/channels/weixin",
                  "en/channels/web",
                  "en/channels/feishu",
                  "en/channels/dingtalk",
                  "en/channels/wecom-bot",
                  "en/channels/qq",
                  "en/channels/wecom",
                  "en/channels/wechatmp",
                  "en/channels/telegram"
                ]
              }
            ]
          },
          {
            "tab": "CLI",
            "groups": [
              {
                "group": "Command System",
                "pages": [
                  "en/cli/index",
                  "en/cli/process",
                  "en/cli/skill",
                  "en/cli/memory-knowledge",
                  "en/cli/general"
                ]
              }
            ]
          },
          {
            "tab": "Releases",
            "groups": [
              {
                "group": "Release Notes",
                "pages": [
                  "en/releases/overview",
                  "en/releases/v2.0.9",
                  "en/releases/v2.0.8",
                  "en/releases/v2.0.7",
                  "en/releases/v2.0.6",
                  "en/releases/v2.0.5",
                  "en/releases/v2.0.4",
                  "en/releases/v2.0.3",
                  "en/releases/v2.0.2",
                  "en/releases/v2.0.1",
                  "en/releases/v2.0.0"
                ]
              }
            ]
          }
        ]
      },
      {
        "language": "ja",
        "navbar": {
          "links": [
            { "label": "ウェブサイト", "href": "https://cowagent.ai/" },
            { "label": "GitHub", "href": "https://github.com/zhayujie/CowAgent" }
          ]
        },
        "tabs": [
          {
            "tab": "紹介",
            "groups": [
              {
                "group": "概要",
                "pages": [
                  "ja/intro/index",
                  "ja/intro/architecture",
                  "ja/intro/features"
                ]
              }
            ]
          },
          {
            "tab": "クイックスタート",
            "groups": [
              {
                "group": "インストール",
                "pages": [
                  "ja/guide/quick-start",
                  "ja/guide/manual-install",
                  "ja/guide/upgrade"
                ]
              }
            ]
          },
          {
            "tab": "モデル",
            "groups": [
              {
                "group": "モデル設定",
                "pages": [
                  "ja/models/index",
                  "ja/models/deepseek",
                  "ja/models/minimax",
                  "ja/models/claude",
                  "ja/models/gemini",
                  "ja/models/openai",
                  "ja/models/glm",
                  "ja/models/qwen",
                  "ja/models/doubao",
                  "ja/models/kimi",
                  "ja/models/qianfan",
                  "ja/models/mimo",
                  "ja/models/linkai",
                  "ja/models/coding-plan",
                  "ja/models/custom"
                ]
              }
            ]
          },
          {
            "tab": "ツール",
            "groups": [
              {
                "group": "ツールシステム",
                "pages": [
                  "ja/tools/index"
                ]
              },
              {
                "group": "内蔵ツール",
                "pages": [
                  "ja/tools/read",
                  "ja/tools/write",
                  "ja/tools/edit",
                  "ja/tools/ls",
                  "ja/tools/bash",
                  "ja/tools/send",
                  "ja/tools/memory",
                  "ja/tools/env-config",
                  "ja/tools/web-fetch",
                  "ja/tools/scheduler"
                ]
              },
              {
                "group": "オプションツール",
                "pages": [
                  "ja/tools/web-search",
                  "ja/tools/vision",
                  "ja/tools/browser"
                ]
              },
              {
                "group": "MCP Tool",
                "pages": [
                  "ja/tools/mcp"
                ]
              }
            ]
          },
          {
            "tab": "スキル",
            "groups": [
              {
                "group": "スキルシステム",
                "pages": [
                  "ja/skills/index",
                  "ja/skills/install",
                  "ja/skills/create",
                  "ja/skills/hub"
                ]
              },
              {
                "group": "内蔵スキル",
                "pages": [
                  "ja/skills/skill-creator",
                  "ja/skills/knowledge-wiki",
                  "ja/skills/image-generation"
                ]
              }
            ]
          },
          {
            "tab": "メモリ",
            "groups": [
              {
                "group": "メモリシステム",
                "pages": [
                  "ja/memory/index",
                  "ja/memory/context",
                  "ja/memory/deep-dream"
                ]
              }
            ]
          },
          {
            "tab": "ナレッジ",
            "groups": [
              {
                "group": "ナレッジベース",
                "pages": [
                  "ja/knowledge/index"
                ]
              }
            ]
          },
          {
            "tab": "チャネル",
            "groups": [
              {
                "group": "プラットフォーム",
                "pages": [
                  "ja/channels/index",
                  "ja/channels/weixin",
                  "ja/channels/web",
                  "ja/channels/feishu",
                  "ja/channels/dingtalk",
                  "ja/channels/wecom-bot",
                  "ja/channels/qq",
                  "ja/channels/wecom",
                  "ja/channels/wechatmp",
                  "ja/channels/telegram"
                ]
              }
            ]
          },
          {
            "tab": "CLI",
            "groups": [
              {
                "group": "コマンドシステム",
                "pages": [
                  "ja/cli/index",
                  "ja/cli/process",
                  "ja/cli/skill",
                  "ja/cli/memory-knowledge",
                  "ja/cli/general"
                ]
              }
            ]
          },
          {
            "tab": "リリース",
            "groups": [
              {
                "group": "リリースノート",
                "pages": [
                  "ja/releases/overview",
                  "ja/releases/v2.0.9",
                  "ja/releases/v2.0.8",
                  "ja/releases/v2.0.7",
                  "ja/releases/v2.0.6",
                  "ja/releases/v2.0.5",
                  "ja/releases/v2.0.4",
                  "ja/releases/v2.0.3",
                  "ja/releases/v2.0.2",
                  "ja/releases/v2.0.1",
                  "ja/releases/v2.0.0"
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
````

## File: docs/en/channels/dingtalk.mdx
````markdown
---
title: DingTalk
description: Integrate CowAgent into DingTalk application
---

Integrate CowAgent into DingTalk by creating an intelligent robot app on the DingTalk Open Platform.

## 1. Create App

1. Go to [DingTalk Developer Console](https://open-dev.dingtalk.com/fe/app#/corp/app), log in and click **Create App**, fill in the app information:

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-create-app.png" width="800"/>

2. Click **Add App Capability**, select **Robot** capability and click **Add**:

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-add-bot.png" width="800"/>

3. Configure the robot information and click **Publish**. After publishing, click "**Debug**" to automatically create a test group chat, which can be viewed in the client:

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-config-bot.png" width="600"/>

4. Click **Version Management & Release**, create a new version and publish:

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-publish-bot.png" width="700"/>

## 2. Project Configuration

1. Click **Credentials & Basic Info**, get the `Client ID` and `Client Secret`:

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-get-secret.png" width="700"/>

2. Add the following configuration to `config.json` in the project root:

```json
{
  "channel_type": "dingtalk",
  "dingtalk_client_id": "YOUR_CLIENT_ID",
  "dingtalk_client_secret": "YOUR_CLIENT_SECRET"
}
```

3. Install the dependency:

```bash
pip3 install dingtalk_stream
```

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-app-config.png" width="700"/>

4. After starting the project, go to the DingTalk Developer Console, click **Event Subscription**, then click **Connection verified, verify channel**. When "**Connection successful**" is displayed, the configuration is complete:

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-event-sub.png" width="700"/>

## 3. Usage

Chat privately with the robot or add it to an enterprise group to start a conversation:

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-hosting-demo.png" width="650"/>
````

## File: docs/en/channels/feishu.mdx
````markdown
---
title: Feishu (Lark)
description: Integrate CowAgent into Feishu via a custom enterprise app
---

> Integrate CowAgent into Feishu via a custom enterprise app. Supports p2p chat and group chat (@bot), uses WebSocket long connection (no public IP needed), supports streaming typewriter replies and voice messages.

<Note>
  You need to be a Feishu enterprise user with admin privileges.
</Note>

## 1. Setup

### Option 1: One-click Scan to Create (Recommended)

No need to manually create an app on the Feishu Developer Platform. Start the Cow project, open the web console (default `http://127.0.0.1:9899/`), go to **Channels**, click **Add Channel**, choose **Feishu**, then under the **Scan QR** tab click **One-click Create Feishu App** and scan with the **Feishu App** to complete app creation and connection automatically.

<img src="https://cdn.link-ai.tech/doc/20260505181126.png" width="800"/>

<Note>
  1. Requires `lark-oapi` ≥ 1.5.5.
  2. The created app comes with all required permissions (messaging, card read/write, group events, etc.) and event subscriptions pre-configured — no manual setup on the developer console needed. Currently only the Feishu mainland version is supported (Lark international not yet supported).
</Note>

When starting from CLI without `feishu_app_id` configured, the QR code is also printed to the terminal.

### Option 2: Manual Setup

Manually create a custom app on the Feishu Developer Platform, then connect via Web Console or config file.

**Step 1: Create the App**

1. Go to [Feishu Developer Platform](https://open.feishu.cn/app/), click **Create Enterprise Custom App**:

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/feishu-hosting-create-app.jpg" width="500"/>

2. In **Add App Capabilities**, add the **Bot** capability:

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/feishu-hosting-add-bot.jpg" width="800"/>

3. In **Permission Management**, paste the following permissions and **Batch Enable** all:

```
im:message,im:message.group_at_msg,im:message.group_at_msg:readonly,im:message.p2p_msg,im:message.p2p_msg:readonly,im:message:send_as_bot,im:resource,cardkit:card:write
```

<img src="https://cdn.link-ai.tech/doc/feishu-hosting-add-auth2.png" width="800"/>

4. Get `App ID` and `App Secret` from **Credentials & Basic Info**:

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/feishu-hosting-appid-secret.jpg" width="800"/>

**Step 2: Connect to CowAgent**

<Tabs>
  <Tab title="Web Console">
    Open the web console, go to **Channels**, click **Add Channel**, choose **Feishu**, switch to the **Manual** tab, enter App ID and App Secret, then click connect.
  </Tab>
  <Tab title="Config File">
    Add the following to `config.json` and start the program:

    ```json
    {
      "channel_type": "feishu",
      "feishu_app_id": "YOUR_APP_ID",
      "feishu_app_secret": "YOUR_APP_SECRET",
      "feishu_stream_reply": true
    }
    ```

    | Parameter | Description | Default |
    | --- | --- | --- |
    | `feishu_app_id` | Feishu app App ID | - |
    | `feishu_app_secret` | Feishu app App Secret | - |
    | `feishu_stream_reply` | Enable streaming typewriter reply | `true` |
  </Tab>
</Tabs>

**Step 3: Publish the App**

1. After Cow is running, go to **Events & Callbacks** in the Feishu Developer Platform, choose **Long Connection** mode and save:

<img src="https://cdn.link-ai.tech/doc/202601311731183.png" width="600"/>

2. Click **Add Event**, search for "Receive Message" and choose **Receive Message v2.0**.

3. Click **Version Management & Release**, create a version and apply for **Production Release**. Approve the request in the Feishu client:

<img src="https://cdn.link-ai.tech/doc/202601311807356.png" width="600"/>

## 2. Features

| Feature | Status |
| --- | --- |
| P2P chat | ✅ |
| Group chat (@bot) | ✅ |
| Text messages | ✅ send/receive |
| Image messages | ✅ send/receive |
| Voice messages | ✅ send/receive |
| Streaming reply | ✅ (powered by Feishu cardkit streaming card) |

<Note>
  Streaming reply requires the `cardkit:card:write` permission (already enabled by one-click creation) and Feishu client version ≥ 7.20. Older clients see an upgrade prompt; if the permission or version is not satisfied, replies fall back to plain text automatically.
</Note>

## 3. Usage

After connection, search for the bot name in Feishu to start a chat.

To use in groups, add the bot to a group and @-mention it.
````

## File: docs/en/channels/index.mdx
````markdown
---
title: Channels Overview
description: Channels supported by CowAgent and their capability matrix
---

CowAgent supports multiple chat channels. Switch between them at startup via `channel_type`. The Web Console is enabled by default and can run in parallel with other channels.

## Capability Matrix

The table below summarizes the inbound message types, bot reply types, and group chat capabilities supported by each channel, making it easy to choose by scenario.

| Channel | Text | Image | File | Voice | Group Chat |
| --- | :-: | :-: | :-: | :-: | :-: |
| [WeChat](/en/channels/weixin) | ✅ | ✅ | ✅ | ✅ |  |
| [Web Console](/en/channels/web) | ✅ | ✅ | ✅ | ✅ | |
| [Feishu](/en/channels/feishu) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [DingTalk](/en/channels/dingtalk) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WeCom Bot](/en/channels/wecom-bot) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [QQ](/en/channels/qq) | ✅ | ✅ | ✅ | | ✅ |
| [WeCom App](/en/channels/wecom) | ✅ | ✅ | ✅ | ✅ | |
| [Official Account](/en/channels/wechatmp) | ✅ | ✅ | | ✅ | |
| [Telegram](/en/channels/telegram) | ✅ | ✅ | ✅ | ✅ | ✅ |

- The **Image / File / Voice** columns indicate that the channel can send and receive the corresponding message types; see each channel's docs for details
- The **Group Chat** column indicates the ability to recognize and respond to group messages

<Tip>
  The voice / image capabilities of each channel depend on the configuration of the corresponding model provider. See [Models Overview](/en/models/index) for details.
</Tip>

## Channel List

- [Web Console](/en/channels/web) — built-in browser-based chat and management panel, enabled by default
- [WeChat](/en/channels/weixin) — log in via personal WeChat QR scan
- [Feishu](/en/channels/feishu) — Feishu custom bot
- [DingTalk](/en/channels/dingtalk) — DingTalk custom bot
- [WeCom Bot](/en/channels/wecom-bot) — WeCom AI Bot via WebSocket long connection
- [QQ](/en/channels/qq) — QQ Official Bot open platform
- [WeCom App](/en/channels/wecom) — WeCom custom app integration
- [Official Account](/en/channels/wechatmp) — WeChat Official Account (subscription / service)
- [Telegram](/en/channels/telegram) — global IM, 5-minute setup, no public IP needed
````

## File: docs/en/channels/qq.mdx
````markdown
---
title: QQ Bot
description: Connect CowAgent to QQ Bot (WebSocket long connection)
---

> Connect CowAgent via QQ Open Platform's bot API, supporting QQ direct messages, group chats (@bot), guild channel messages, and guild DMs. No public IP required — uses WebSocket long connection.

<Note>
  QQ Bot is created through the QQ Open Platform. It uses WebSocket long connection to receive messages and OpenAPI to send messages. No public IP or domain is required.
</Note>

## 1. Create a QQ Bot

> Visit the [QQ Open Platform](https://q.qq.com), sign in with QQ. If you haven't registered, please complete [account registration](https://q.qq.com/#/register) first.

1.Go to the [QQ Open Platform - Bot List](https://q.qq.com/#/apps), and click **Create Bot**:

<img src="https://cdn.link-ai.tech/doc/20260317162900.png" width="800"/>

2.Fill in the bot name, avatar, and other basic information to complete the creation:

<img src="https://cdn.link-ai.tech/doc/20260317163005.png" width="800"/>

3.Enter the bot configuration page, go to **Development Management**, and complete the following steps:

  - Copy and save the **AppID** (Bot ID)
  - Generate and save the **AppSecret** (Bot Secret)

<img src="https://cdn.link-ai.tech/doc/20260317164955.png" width="800"/>

## 2. Configuration and Running

### Option A: Web Console

Start the program and open the Web console (local access: http://127.0.0.1:9899/). Go to the **Channels** tab, click **Connect Channel**, select **QQ Bot**, fill in the AppID and AppSecret from the previous step, and click Connect.

<img src="https://cdn.link-ai.tech/doc/20260317165425.png" width="800"/>

### Option B: Config File

Add the following to your `config.json`:

```json
{
  "channel_type": "qq",
  "qq_app_id": "YOUR_APP_ID",
  "qq_app_secret": "YOUR_APP_SECRET"
}
```

| Parameter | Description |
| --- | --- |
| `qq_app_id` | AppID of the QQ Bot, found in Development Management on the open platform |
| `qq_app_secret` | AppSecret of the QQ Bot, found in Development Management on the open platform |

After configuration, start the program. The log message `[QQ] ✅ Connected successfully` indicates a successful connection.


## 3. Usage

In the QQ Open Platform, go to **Management → Usage Scope & Members**, scan the "Add to group and message list" QR code with your QQ client to start chatting with the bot:

<img src="https://cdn.link-ai.tech/doc/20260317165947.png" width="800"/>

Chat example:
<img src="https://cdn.link-ai.tech/doc/20260317171508.png" width="800"/>

## 4. Supported Features

> Note: To use the QQ bot in group chats and guild channels, you need to complete the publishing review and configure usage scope permissions.

| Feature | Status |
| --- | --- |
| QQ Direct Messages | ✅ |
| QQ Group Chat (@bot) | ✅ |
| Guild Channel (@bot) | ✅ |
| Guild DM | ✅ |
| Text Messages | ✅ Send & Receive |
| Image Messages | ✅ Send & Receive (group & direct) |
| File Messages | ✅ Send (group & direct) |
| Scheduled Tasks | ✅ Active push (4 per user per month) |


## 5. Notes

- **Passive message limits**: QQ direct message replies are valid for 60 minutes (max 5 replies per message); group chat replies are valid for 5 minutes.
- **Active message limits**: Both direct and group chats have a monthly limit of 4 active messages. Keep this in mind when using the scheduled tasks feature.
- **Event permissions**: By default, `GROUP_AND_C2C_EVENT` (QQ group/direct) and `PUBLIC_GUILD_MESSAGES` (guild public messages) are subscribed. Apply for additional permissions on the open platform if needed.
````

## File: docs/en/channels/telegram.mdx
````markdown
---
title: Telegram
description: Integrate CowAgent with Telegram via the Bot API
---

> Integrate CowAgent into Telegram via the official Bot API. Supports private chat and group chat (triggered by @mention or replying to the bot). Uses Long Polling — no public IP required, works out of the box.


## 1. Setup

### Step 1: Create a Bot via BotFather

1. Open the official account [@BotFather](https://t.me/BotFather) in Telegram.
2. Send `/newbot` and follow the prompts:
   - **Bot name** (display name, e.g. `My CowAgent Bot`)
   - **Bot username** (must end with `bot`, e.g. `my_cowagent_bot`)
3. Once created, BotFather returns an **HTTP API Token** (e.g. `123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ`). Keep it safe.

<Tip>
  The token is the password of your bot — never share it. If it leaks, send `/revoke` to `@BotFather` to reset it.
</Tip>

### Step 2: (Group chat only) Disable Privacy Mode

Skip this step if you only use private chat. Telegram bots run in **Privacy Mode** by default — in groups they can only see commands suffixed with `@bot` (e.g. `/start@your_bot`) and replies to bot messages; **plain `@bot hello` text messages are not delivered**, so the bot will appear unresponsive in groups.

Send the following to `@BotFather`:

1. `/setprivacy`
2. Pick the bot you just created
3. Choose `Disable`

<Note>
  If the bot is still silent in groups after this, try removing it from the group and adding it back.
</Note>

### Step 3: Connect to CowAgent

<Tabs>
  <Tab title="Web Console (Recommended)">
    Open the Web Console (default `http://127.0.0.1:9899`), go to **Channels**, click **Add Channel**, choose **Telegram**, paste the Bot Token, and click connect.
  </Tab>
  <Tab title="Config File">
    Add the following to `config.json` and start Cow:

    ```json
    {
      "channel_type": "telegram",
      "telegram_token": "123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ",
      "telegram_group_trigger": "mention_or_reply"
    }
    ```

    | Key | Description | Default |
    | --- | --- | --- |
    | `telegram_token` | HTTP API Token returned by BotFather | - |
    | `telegram_group_trigger` | Group trigger: `mention_or_reply` (@ or reply) / `mention_only` (@ only) / `all` (all messages) | `mention_or_reply` |
    | `telegram_register_commands` | Whether to register the command menu with BotFather on startup | `true` |
  </Tab>
</Tabs>

The integration is ready when you see logs like:

```
[Telegram] Bot logged in as @my_cowagent_bot (id=123456789)
[Telegram] Registered 10 bot commands
[Telegram] ✅ Telegram bot ready, polling for updates
```

## 2. Capabilities

| Feature | Support |
| --- | --- |
| Private chat | ✅ |
| Group chat (@bot / reply to bot) | ✅ |
| Text messages | ✅ send / receive |
| Image messages | ✅ send / receive |
| Voice messages | ✅ send / receive (OGG/Opus) |
| Video messages | ✅ send / receive |
| File messages | ✅ send / receive (PDF / Word / Excel, etc.) |
| Command menu | ✅ aligned with Web Console slash commands |

### Command Menu

On startup, the channel registers a command menu with BotFather. Typing `/` in Telegram shows a dropdown:

| Command | Description |
| --- | --- |
| `/help` | Show command help |
| `/status` | View runtime status |
| `/context` | View conversation context (`/context clear` to clear) |
| `/skill` | Skill management (`/skill list`, `/skill install`, ...) |
| `/memory` | Memory management (`/memory dream`) |
| `/knowledge` | Knowledge base (`/knowledge list` / `on` / `off`) |
| `/config` | View current config |
| `/cancel` | Cancel the running Agent task |
| `/logs` | View recent logs |
| `/version` | Show version |

<Note>
  Telegram's command menu only displays top-level commands; subcommands are entered with a space, e.g. `/skill list`, `/context clear`.
</Note>

## 3. Usage

Once connected:

- **Private chat**: search for your bot username (e.g. `@my_cowagent_bot`) in Telegram, click `Start` and chat away.
- **Group chat**: add the bot to a group, then trigger it with `@bot hello` or by **replying to one of the bot's messages**. If the bot doesn't respond in groups, double-check Privacy Mode in [Step 2](#step-2-group-chat-only-disable-privacy-mode).

When sending an image or file, you can **add a caption** (description / question) directly in the attachment input — the bot will answer based on both. Sending an attachment first and then a follow-up question also works; the two messages are merged automatically.
````

## File: docs/en/channels/web.mdx
````markdown
---
title: Web Console
description: Use CowAgent through the Web Console
---

The Web Console is CowAgent's default channel. It runs automatically once started, letting you chat with the Agent in a browser and manage models, skills, memory, channels, and other configuration online.

## Configuration

```json
{
  "channel_type": "web",
  "web_host": "0.0.0.0",
  "web_port": 9899,
  "web_password": "",
  "enable_thinking": false
}
```

| Parameter | Description | Default |
| --- | --- | --- |
| `channel_type` | Set to `web` | `web` |
| `web_host` | Web service listen address. Defaults to `127.0.0.1` (local only); set to `0.0.0.0` for public access and configure a password | `""` |
| `web_port` | Web service listen port | `9899` |
| `web_password` | Access password. Leave empty to disable password protection; recommended when listening on `0.0.0.0` | `""` |
| `web_session_expire_days` | Login session validity in days | `30` |
| `enable_thinking` | Whether to enable deep thinking mode | `false` |

Once a password is configured, you must enter it to log in when accessing the console. The login session is kept for 30 days by default, so restarting the service during that period does not require re-login. The password can also be changed online from the "Configuration" page in the console.

## Access URL

After starting the project, visit:

- Local: `http://localhost:9899`
- Server: `http://<server-ip>:9899`

<Note>
  Ensure the server firewall and security group allow the corresponding port.
</Note>

## Features

### Chat Interface

Supports streaming output with real-time display of the Agent's reasoning process and tool calls, providing intuitive observation of the Agent's decision-making. Deep thinking can be toggled via configuration or the "Agent Configuration" switch in the console.

<img width="850" src="https://cdn.link-ai.tech/doc/20260227180120.png" />

#### Multi-Session Management

The chat interface supports multi-session management. All session records are persistently stored in the database:

- **Session List**: Click the history icon on the left to expand/collapse the session list panel, with scroll-to-load support for all historical sessions
- **AI-Generated Titles**: After the first exchange in a new session, the model is automatically called to generate a short summary title
- **New Session**: Click the "New Chat" button at the top of the session list or the `+` button in the input area to create a new session
- **Delete Session**: Click the delete button on a session item and confirm to permanently delete the session and all its messages
- **Clear Context**: Click the clear button in the input area to insert a divider in the current session. Messages above the divider are still displayed but no longer included as context for the model

### Model Management

Manage text, image, voice, and embedding model configurations for different providers online — no need to edit config files manually:

<img width="850" src="https://cdn.link-ai.tech/doc/20260521212949.png" />

### Skill Management

View and manage Agent skills (Skills) online:

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173403.png" />

### Memory Management

View and manage Agent memory online:

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173349.png" />

### Channel Management

Manage connected channels online with real-time connect/disconnect operations:

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173331.png" />

### Scheduled Tasks

View and manage scheduled tasks online, including one-time tasks, fixed intervals, and Cron expressions:

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173704.png" />

### Logs

View Agent runtime logs in real time for monitoring and troubleshooting:

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173514.png" />
````

## File: docs/en/channels/wechatmp.mdx
````markdown
---
title: WeChat Official Account
description: Integrate CowAgent with WeChat Official Accounts
---

CowAgent supports both personal subscription accounts and enterprise service accounts.

| Type | Requirements | Features |
| --- | --- | --- |
| **Personal Subscription** | Available to individuals | Sends a placeholder reply first; users must send a message to retrieve the full response |
| **Enterprise Service** | Enterprise with verified customer service API | Can proactively push replies to users |

<Note>
  Official Accounts only support server and Docker deployment, not local run mode. Install extended dependencies: `pip3 install -r requirements-optional.txt`
</Note>

## 1. Personal Subscription Account

Add the following configuration to `config.json`:

```json
{
  "channel_type": "wechatmp",
  "single_chat_prefix": [""],
  "wechatmp_app_id": "wx73f9******d1e48",
  "wechatmp_app_secret": "YOUR_APP_SECRET",
  "wechatmp_aes_key": "",
  "wechatmp_token": "YOUR_TOKEN",
  "wechatmp_port": 80
}
```

### Setup Steps

These configurations must be consistent with the [WeChat Official Account Platform](https://mp.weixin.qq.com/advanced/advanced?action=dev&t=advanced/dev). Navigate to **Settings & Development → Basic Configuration → Server Configuration** and configure as shown below:

<img src="https://cdn.link-ai.tech/doc/20260228103506.png" width="480"/>

1. Enable the developer secret on the platform (corresponds to `wechatmp_app_secret`), and add the server IP to the whitelist
2. Fill in the `config.json` with the official account parameters matching the platform configuration
3. Start the program, which listens on port 80 (use `sudo` if you don't have permission; stop any process occupying port 80)
4. **Enable server configuration** on the official account platform and submit. A successful save means the configuration is complete. Note that the **"Server URL"** must be in the format `http://{HOST}/wx`, where `{HOST}` can be the server IP or domain

After following the account and sending a message, you should see the following result:

<img src="https://cdn.link-ai.tech/doc/20260228103522.png" width="720"/>

Due to subscription account limitations, short replies (within 15s) can be returned immediately, but longer replies will first send a "Thinking..." placeholder, requiring users to send any text to retrieve the answer. Enterprise service accounts can solve this with the customer service API.

<Tip>
  **Voice Recognition**: You can use WeChat's built-in voice recognition. Enable "Receive Voice Recognition Results" under "Settings & Development → API Permissions" on the official account management page.
</Tip>

## 2. Enterprise Service Account

The setup process for enterprise service accounts is essentially the same as personal subscription accounts, with the following differences:

1. Register an enterprise service account on the platform and complete WeChat certification. Confirm that the **Customer Service API** permission has been granted
2. Set `"channel_type": "wechatmp_service"` in `config.json`; other configurations remain the same
3. Even for longer replies, they can be proactively pushed to users without requiring manual retrieval

```json
{
  "channel_type": "wechatmp_service",
  "single_chat_prefix": [""],
  "wechatmp_app_id": "YOUR_APP_ID",
  "wechatmp_app_secret": "YOUR_APP_SECRET",
  "wechatmp_aes_key": "",
  "wechatmp_token": "YOUR_TOKEN",
  "wechatmp_port": 80
}
```
````

## File: docs/en/channels/wecom-bot.mdx
````markdown
---
title: WeCom Bot
description: Connect CowAgent to WeCom AI Bot (WebSocket long connection)
---

> Connect CowAgent via WeCom AI Bot, supporting both internal direct messages and group chats. No public IP required — uses a WebSocket long connection, with Markdown rendering and streaming output.

<Note>
  WeCom Bot and WeCom App are two different integration methods. WeCom Bot uses a WebSocket long connection and requires no public IP or domain, making setup much simpler.
</Note>

## 1. Connection methods

### Option A: One-click QR scan (recommended)

No need to create the bot ahead of time. Start CowAgent and open the Web console (local URL: http://127.0.0.1:9899/), go to the **Channels** tab, click **Connect Channel**, choose **WeCom Bot**, switch to **QR scan** mode, and scan the QR code with **WeCom** — bot creation and connection complete automatically.

<img src="https://cdn.link-ai.tech/doc/20260401121213.png" width="800"/>

<Note>
  After a successful scan, you can further configure the bot (name, avatar, visibility scope, etc.) in **WeCom Workbench → AI Bot**.
</Note>

### Option B: Manual creation

Create the AI Bot in WeCom and obtain the Bot ID and Secret, then connect via the Web console or config file.

**Step 1: Create the AI Bot**

1. Open the WeCom client, go to **Workbench**, and click **AI Bot**:

<img src="https://cdn.link-ai.tech/doc/20260316180959.png" width="800"/>

2. Click **Create Bot → Manual Creation**:

<img src="https://cdn.link-ai.tech/doc/20260316181118.png" width="800"/>

3. Scroll to the bottom of the right panel and select **API Mode**:

<img src="https://cdn.link-ai.tech/doc/20260316181215.png" width="800"/>

4. Set the bot name, avatar, and visibility scope. Choose **Long Connection** mode, save the **Bot ID** and **Secret**, then click Save.

**Step 2: Connect to CowAgent**

<Tabs>
  <Tab title="Web Console">
    Open the Web console, go to the **Channels** tab, click **Connect Channel**, choose **WeCom Bot**, switch to **Manual** mode, enter the Bot ID and Secret, and click Connect.

    <img src="https://cdn.link-ai.tech/doc/20260316181711.png" width="800"/>
  </Tab>
  <Tab title="Config File">
    Add the following to `config.json`, then start CowAgent:

    ```json
    {
      "channel_type": "wecom_bot",
      "wecom_bot_id": "YOUR_BOT_ID",
      "wecom_bot_secret": "YOUR_SECRET"
    }
    ```

    | Parameter | Description |
    | --- | --- |
    | `wecom_bot_id` | Bot ID of the AI Bot |
    | `wecom_bot_secret` | Secret of the AI Bot |
  </Tab>
</Tabs>

The log line `[WecomBot] Subscribe success` confirms the connection is established.

## 2. Supported features

| Feature | Status |
| --- | --- |
| Direct chat | ✅ |
| Group chat (@bot) | ✅ |
| Text messages | ✅ Send / Receive |
| Image messages | ✅ Send / Receive |
| File messages | ✅ Send / Receive |
| Streaming replies | ✅ |
| Scheduled push messages | ✅ |

## 3. Usage

Search for the bot's name inside WeCom to start a direct chat.

To use the bot in an internal group chat, add it to the group and @-mention it.

<img src="https://cdn.link-ai.tech/doc/20260316182902.png" width="800"/>
````

## File: docs/en/channels/wecom.mdx
````markdown
---
title: WeCom
description: Integrate CowAgent into WeCom enterprise app
---

Integrate CowAgent into WeCom through a custom enterprise app, supporting one-on-one chat for internal employees.

<Note>
  WeCom only supports Docker deployment or server Python deployment. Local run mode is not supported.
</Note>

## 1. Prerequisites

Required resources:

1. A server with public IP (overseas server, or domestic server with a proxy for international API access)
2. A registered WeCom account (individual registration is possible but cannot be certified)
3. Certified WeCom accounts additionally require a domain filed under the corresponding entity

## 2. Create WeCom App

1. In the [WeCom Admin Console](https://work.weixin.qq.com/wework_admin/frame#profile), click **My Enterprise** and find the **Corp ID** at the bottom of the page. Save this ID for the `wechatcom_corp_id` configuration field.

2. Switch to **Application Management** and click Create Application:

<img src="https://cdn.link-ai.tech/doc/20260228103156.png" width="480"/>

3. On the application creation page, record the `AgentId` and `Secret`:

<img src="https://cdn.link-ai.tech/doc/20260228103218.png" width="580"/>

4. Click **Set API Reception** to configure the application interface:

<img src="https://cdn.link-ai.tech/doc/20260228103211.png" width="520"/>

- URL format: `http://ip:port/wxcomapp` (certified enterprises must use a filed domain)
- Generate random `Token` and `EncodingAESKey` and save them for the configuration file

<Note>
  The API reception configuration cannot be saved at this point because the program hasn't started yet. Come back to save it after the project is running.
</Note>

## 3. Configuration and Run

Add the following configuration to `config.json` (the mapping between each parameter and the WeCom console is shown in the screenshots above):

```json
{
  "channel_type": "wechatcom_app",
  "single_chat_prefix": [""],
  "wechatcom_corp_id": "YOUR_CORP_ID",
  "wechatcomapp_token": "YOUR_TOKEN",
  "wechatcomapp_secret": "YOUR_SECRET",
  "wechatcomapp_agent_id": "YOUR_AGENT_ID",
  "wechatcomapp_aes_key": "YOUR_AES_KEY",
  "wechatcomapp_port": 9898
}
```

| Parameter | Description |
| --- | --- |
| `wechatcom_corp_id` | Corp ID |
| `wechatcomapp_token` | Token from API reception config |
| `wechatcomapp_secret` | App Secret |
| `wechatcomapp_agent_id` | App AgentId |
| `wechatcomapp_aes_key` | EncodingAESKey from API reception config |
| `wechatcomapp_port` | Listen port, default 9898 |

After configuration, start the program. When the log shows `http://0.0.0.0:9898/`, the program is running successfully. You need to open this port externally (e.g., allow it in the cloud server security group).

After the program starts, return to the WeCom Admin Console to save the **Message Server Configuration**. After saving successfully, you also need to add the server IP to **Enterprise Trusted IPs**, otherwise messages cannot be sent or received:

<img src="https://cdn.link-ai.tech/doc/20260228103224.png" width="520"/>

<Warning>
  If the URL configuration callback fails or the configuration is unsuccessful:
  1. Ensure the server firewall is disabled and the security group allows the listening port
  2. Carefully check that Token, Secret Key and other parameter configurations are consistent, and that the URL format is correct
  3. Certified WeCom accounts must configure a filed domain matching the entity
</Warning>

## 4. Usage

Search for the app name you just created in WeCom to start chatting directly. You can run multiple instances listening on different ports to create multiple WeCom apps:

<img src="https://cdn.link-ai.tech/doc/20260228103228.png" width="720"/>

To allow external personal WeChat users to use the app, go to **My Enterprise → WeChat Plugin**, share the invite QR code. After scanning and following, personal WeChat users can join and chat with the app:

<img src="https://cdn.link-ai.tech/doc/20260228103232.png" width="520"/>

## FAQ

Make sure the following dependencies are installed:

```bash
pip install websocket-client pycryptodome
```
````

## File: docs/en/channels/weixin.mdx
````markdown
---
title: WeChat
description: Connect CowAgent to personal WeChat (via the official API)
---

> Connect CowAgent to your personal WeChat — scan to log in, no public IP required. Supports text, image, voice, file, and video messages in 1-on-1 chats. Backed by WeChat's official API; safe to use. After connecting, a bot assistant is added to your conversation list without affecting normal account usage.

## 1. Setup and run

### Option A: Web console

Start CowAgent and open the Web console (local URL: http://127.0.0.1:9899/). Go to the **Channels** tab, click **Connect Channel**, select **WeChat**, and follow the prompts to scan in.

<img src="https://cdn.link-ai.tech/doc/20260322195114.png" width="800" />

### Option B: Config file

Set `channel_type` to `weixin` in `config.json`:

```json
{
  "channel_type": "weixin"
}
```

After starting CowAgent, a QR code is displayed in the terminal. Scan it with WeChat to complete login.

<img src="https://cdn.link-ai.tech/doc/20260322195509.png" width="800" />

<Note>
  1. For backward compatibility, setting `channel_type` to `wx` also activates the WeChat channel.
  2. The WeChat client must be on version **8.0.69** or higher.
</Note>

## 2. Usage

Once authorized, the integration completes and you can start chatting. A bot assistant is created in your WeChat conversation list, leaving normal account usage unaffected.

> You can find the bot at any time by searching for **"微信ClawBot"**. You may also rename it, change its avatar, pin it to the top of your conversation list, and so on.

<img src="https://cdn.link-ai.tech/doc/83ae8251d896219fde4803f4205205be.jpg" width="250" />

## 3. Login

### QR code login

On first startup, a QR code appears in the terminal (valid for around 2 minutes). Scan it with WeChat and confirm on your phone to log in.

- The QR code refreshes automatically when it expires
- The `qrcode` dependency is already included in `requirements.txt`, so the QR code renders directly in the terminal after install

### Credential persistence

After a successful login, credentials are saved to `~/.weixin_cow_credentials.json`. Subsequent startups reuse the saved credentials with no need to re-scan.

To force a re-login, delete the credentials file and restart.

### Session expiry

When the WeChat session expires (errcode `-14`), CowAgent automatically clears old credentials and initiates a new QR login — no manual intervention required.

## 4. Supported features

| Feature | Status |
| --- | --- |
| Direct messages | ✅ |
| Text messages | ✅ Send & Receive |
| Image messages | ✅ Send & Receive |
| File messages | ✅ Send & Receive |
| Video messages | ✅ Send & Receive |
| Voice messages | ✅ Receive (built-in speech recognition) |
````

## File: docs/en/cli/general.mdx
````markdown
---
title: General Commands
description: View status, manage config, and control context with commonly used commands
---

The following commands can be used in chat with the `/` prefix or in the terminal with the `cow` prefix (some are chat-only).

<Tip>
  In the Web console, typing `/` brings up an autocomplete menu with keyboard navigation and Tab completion.
</Tip>

## help

Show help information for all available commands.

```text
/help
```

## status

View current session and service status, including process info, model configuration, message count, and loaded skills.

```text
/status
```

## cancel

Abort the agent task currently running in this session. When the agent is busy with a long task (e.g. multi-turn tool calls or a long streaming response), send `/cancel` and the agent will stop before the next tool execution. Available across all channels — Web, WeChat, WeCom, Feishu, etc.

```text
/cancel
```

## config

View or modify runtime configuration. Changes take effect immediately without restarting.

**View all configurable items:**

```text
/config
```

**View a single item:**

```text
/config model
```

**Modify a config item:**

```text
/config model deepseek-v4-flash
```

**Configurable items:**

| Item | Description | Example |
| --- | --- | --- |
| `model` | AI model name | `deepseek-v4-flash` |
| `agent_max_context_tokens` | Max context tokens | `40000` |
| `agent_max_context_turns` | Max context memory turns | `30` |
| `agent_max_steps` | Max decision steps per task | `15` |
| `enable_thinking` | Enable deep thinking mode | `true` / `false` |

<Note>
  When changing `model`, the system automatically matches the corresponding model API. Configuration is persisted to `config.json`.
</Note>

## context

View current session context statistics, including message count and content length.

```text
/context
```

**Clear current session context:**

```text
/context clear
```

<Tip>
  Clearing context makes the Agent "forget" previous conversation, useful for switching topics or freeing context space.
</Tip>

## logs

View recent service logs. Shows the last 20 lines by default, up to 50.

```text
/logs
```

**Specify line count:**

```text
/logs 50
```

## version

Show the current CowAgent version.

```text
/version
```
````

## File: docs/en/cli/index.mdx
````markdown
---
title: Commands Overview
description: CowAgent command system — Terminal CLI and chat commands
---

CowAgent provides two ways to interact via commands:

- **Terminal CLI** — Run `cow <command>` in your system terminal for service management, skill management, and other operations
- **Chat Commands** — Type `/<command>` or `cow <command>` in any conversation to check status, manage skills, adjust configuration, etc.

## Cow CLI

After deploying with the one-click install script, the `cow` command is automatically available. For manual installations, run:

```bash
pip install -e .
```

Then use the `cow` command from anywhere:

```bash
cow help
```

Example output:

```
🐮 CowAgent CLI

Usage: cow <command>

Service:
  start     Start the CowAgent service
  stop      Stop the CowAgent service
  restart   Restart the CowAgent service
  update    Update code and restart service
  status    Show service status
  logs      View service logs

Skills:
  skill     Manage skills (list / search / install / uninstall ...)

Memory & Knowledge:
  memory    Memory distillation (dream)
  knowledge View knowledge base stats and structure

Others:
  help      Show this help message
  version   Show version
```

## Chat Commands

In the Web console or any connected channel, type `/` to see command suggestions. Supported commands:

| Command | Description |
| --- | --- |
| `/help` | Show command help |
| `/status` | View service status and configuration |
| `/cancel` | Abort the currently running agent task |
| `/config` | View or modify runtime configuration |
| `/skill` | Manage skills (install, uninstall, enable, disable, etc.) |
| `/memory dream [N]` | Manually trigger memory distillation (default 3 days, max 30) |
| `/knowledge` | View knowledge base statistics |
| `/knowledge list` | View knowledge base directory structure |
| `/knowledge on\|off` | Enable or disable knowledge base |
| `/context` | View current session context info |
| `/context clear` | Clear current session context |
| `/logs` | View recent logs |
| `/version` | Show version number |

<Tip>
  Service management commands like `/start`, `/stop`, `/restart` will prompt you to use them in the terminal instead, as they involve process operations.
</Tip>

## Command Availability

| Command | Terminal (`cow`) | Chat (`/`) |
| --- | :---: | :---: |
| help | ✓ | ✓ |
| version | ✓ | ✓ |
| status | ✓ | ✓ |
| logs | ✓ | ✓ |
| cancel | ✗ | ✓ |
| config | ✗ | ✓ |
| context | — | ✓ |
| memory (subcommands) | ✗ | ✓ |
| knowledge (subcommands) | ✓ | ✓ |
| skill (subcommands) | ✓ | ✓ |
| start / stop / restart | ✓ | ✗ |
| update | ✓ | ✗ |
| install-browser | ✓ | ✗ |

<Note>
  `context` only shows a hint in the terminal to use it in chat. `config` is only available in chat.
</Note>
````

## File: docs/en/cli/memory-knowledge.mdx
````markdown
---
title: Memory & Knowledge
description: Memory distillation and knowledge base management commands
---

## memory

Manage the Agent's long-term memory system.

### memory dream

Manually trigger memory distillation (Deep Dream) — consolidate recent daily memories into MEMORY.md and generate a dream diary.

```text
/memory dream [N]
```

- `N`: Consolidate the last N days of memory (default 3, max 30)
- Runs asynchronously in the background; you'll be notified in chat when complete
- Works without Agent initialization — can be used before the first conversation

**Examples:**

```text
/memory dream       # Consolidate last 3 days
/memory dream 7     # Consolidate last 7 days
/memory dream 30    # Consolidate last 30 days (full)
```

On the Web console, the completion notification includes clickable links to view the updated MEMORY.md and dream diary.

<Tip>
  The system automatically runs distillation daily at 23:55 (lookback 1 day). Manual trigger is useful for consolidating historical memories after first deployment, or when you need an immediate memory update.
</Tip>

## knowledge

View and manage the personal knowledge base. Shows statistics by default.

```text
/knowledge
```

### knowledge list

View the knowledge base directory tree.

```text
/knowledge list
```

### knowledge on / off

Enable or disable the knowledge base. When disabled, knowledge prompts and file indexing are not injected.

```text
/knowledge on
/knowledge off
```

<Note>
  In the terminal CLI, `cow knowledge` and `cow knowledge list` are available, but `on|off` is only supported in chat (requires runtime effect).
</Note>
````

## File: docs/en/cli/process.mdx
````markdown
---
title: Process Management
description: Manage CowAgent process lifecycle with cow commands
---

Process management commands control the CowAgent background process. These commands are only available in the terminal.

## start

Start the CowAgent service. Runs as a background daemon by default and automatically tails logs.

```bash
cow start
```

**Options:**

| Option | Description |
| --- | --- |
| `-f`, `--foreground` | Run in foreground, not as a background daemon |
| `--no-logs` | Don't tail logs after starting |

## stop

Stop the running CowAgent service.

```bash
cow stop
```

## restart

Restart the CowAgent service (stop then start).

```bash
cow restart
```

**Options:**

| Option | Description |
| --- | --- |
| `--no-logs` | Don't tail logs after restart |

## update

Update code and restart the service. Automatically performs:

1. Pull latest code (`git pull`)
2. Stop current service
3. Update Python dependencies
4. Reinstall CLI
5. Start service

```bash
cow update
```

<Warning>
  If `git pull` fails (e.g., uncommitted local changes), the update aborts and the service remains unaffected.
</Warning>

## status

Check CowAgent service status, including process info, version, and current model/channel configuration.

```bash
cow status
```

## logs

View service logs.

```bash
cow logs
```

**Options:**

| Option | Description | Default |
| --- | --- | --- |
| `-f`, `--follow` | Continuously tail log output | No |
| `-n`, `--lines` | Show last N lines | 50 |

Examples:

```bash
# View last 100 lines
cow logs -n 100

# Continuously tail logs
cow logs -f
```

## install-browser

Install Playwright and Chromium browser for the [browser tool](/en/tools/browser).

```bash
cow install-browser
```

<Tip>
  Only needed when using browser tools (web browsing, screenshots, etc.).
</Tip>

## run.sh Compatibility

If Cow CLI is not installed, you can use `run.sh` to manage the service:

| cow command | run.sh equivalent |
| --- | --- |
| `cow start` | `./run.sh start` |
| `cow stop` | `./run.sh stop` |
| `cow restart` | `./run.sh restart` |
| `cow update` | `./run.sh update` |
| `cow status` | `./run.sh status` |
| `cow logs` | `./run.sh logs` |

<Note>
  The `cow` command is recommended — it provides cleaner syntax and richer features. It is automatically installed via the one-click install script.
</Note>
````

## File: docs/en/cli/skill.mdx
````markdown
---
title: Skill Management
description: Install, uninstall, enable, disable, and manage skills via commands
---

Skill management commands are used to install, query, and manage CowAgent skills. Use `/skill <subcommand>` in chat or `cow skill <subcommand>` in the terminal.

## list

List installed skills and their status.

<CodeGroup>
```text Chat
/skill list
```

```bash Terminal
cow skill list
```
</CodeGroup>

Example output:

```
📦 Installed skills (3/4)

✅ pptx
   Use this skill any time a .pptx file is involved…
   Source: cowhub

✅ skill-creator
   Create, install, or update skills…
   Source: builtin

⏸️ image-vision (disabled)
   Image understanding and visual analysis
   Source: builtin
```

**Browse the Skill Hub** (view all available skills):

<CodeGroup>
```text Chat
/skill list --remote
```

```bash Terminal
cow skill list --remote
```
</CodeGroup>

**Options:**

| Option | Description | Default |
| --- | --- | --- |
| `--remote`, `-r` | Browse Skill Hub remote skill list | No |
| `--page` | Page number for remote listing | 1 |

## search

Search for skills on the Skill Hub.

<CodeGroup>
```text Chat
/skill search pptx
```

```bash Terminal
cow skill search pptx
```
</CodeGroup>

## install

Install skills with a single `install` command from Cow Skill Hub, GitHub, ClawHub, or any URL (zip archives, SKILL.md links) — no manual download or configuration required.

**From Skill Hub (recommended):**

<CodeGroup>
```text Chat
/skill install pptx
```

```bash Terminal
cow skill install pptx
```
</CodeGroup>

**From GitHub:**

<CodeGroup>
```text Chat
# Install all skills in a repo (auto-discovers subdirectories with SKILL.md)
/skill install larksuite/cli

# Specify a subdirectory to install a single skill
/skill install https://github.com/larksuite/cli/tree/main/skills/lark-im

# Use # to specify a subdirectory
/skill install larksuite/cli#skills/lark-minutes
```

```bash Terminal
# Install all skills in a repo (auto-discovers subdirectories with SKILL.md)
cow skill install larksuite/cli

# Specify a subdirectory to install a single skill
cow skill install https://github.com/larksuite/cli/tree/main/skills/lark-im

# Use # to specify a subdirectory
cow skill install larksuite/cli#skills/lark-minutes
```
</CodeGroup>

Supports full GitHub URLs and `owner/repo` shorthand. For mono-repos (multiple skills in one repository), omitting the subdirectory auto-discovers and batch-installs all skills; specifying a subdirectory installs only that skill.

**From ClawHub:**

<CodeGroup>
```text Chat
/skill install clawhub:baidu-search
```

```bash Terminal
cow skill install clawhub:baidu-search
```
</CodeGroup>

**From URL:**

<CodeGroup>
```text Chat
# Install from a zip archive (single or batch)
/skill install https://cdn.link-ai.tech/skills/pptx.zip

# Install from a SKILL.md link
/skill install https://example.com/path/to/SKILL.md
```

```bash Terminal
# Install from a zip archive (single or batch)
cow skill install https://cdn.link-ai.tech/skills/pptx.zip

# Install from a SKILL.md link
cow skill install https://example.com/path/to/SKILL.md
```
</CodeGroup>

Supports installing from zip / tar.gz archive URLs — automatically extracts and discovers directories containing `SKILL.md`, with support for single or batch install. Also supports installing directly from a `SKILL.md` file URL, automatically parsing the skill name and description.

## uninstall

Uninstall an installed skill.

<CodeGroup>
```text Chat
/skill uninstall pptx
```

```bash Terminal
cow skill uninstall pptx
```
</CodeGroup>

<Warning>
  Uninstalling deletes all files in the skill directory. This action cannot be undone.
</Warning>

## enable / disable

Enable or disable a skill. Disabled skills will not be invoked by the Agent.

<CodeGroup>
```text Chat
/skill enable pptx
/skill disable pptx
```

```bash Terminal
cow skill enable pptx
cow skill disable pptx
```
</CodeGroup>

## info

View details of an installed skill, including a preview of its `SKILL.md`.

<CodeGroup>
```text Chat
/skill info pptx
```

```bash Terminal
cow skill info pptx
```
</CodeGroup>

## Skill Sources

Installed skills track their origin, viewable via `/skill list`:

| Source | Description |
| --- | --- |
| `builtin` | Built-in project skills |
| `cowhub` | Installed from CowAgent Skill Hub |
| `github` | Installed directly from a GitHub URL |
| `clawhub` | Installed from ClawHub |
| `url` | Installed from a SKILL.md URL |
| `local` | Locally created skills |
````

## File: docs/en/guide/manual-install.mdx
````markdown
---
title: Manual Install
description: Deploy CowAgent manually (source code / Docker)
---

## Source Code Deployment

### 1. Clone the project

```bash
git clone https://github.com/zhayujie/CowAgent
cd CowAgent/
```

<Tip>
  For network issues, use the mirror: https://gitee.com/zhayujie/CowAgent
</Tip>

### 2. Install dependencies

Core dependencies (required):

```bash
pip3 install -r requirements.txt
```

Optional dependencies (recommended):

```bash
pip3 install -r requirements-optional.txt
```

### 3. Install Cow CLI

Install the command-line tool for managing services and skills:

```bash
pip3 install -e .
```

Then use the `cow` command:

```bash
cow help
```

<Note>
  This step is recommended. After installation you can use `cow start`, `cow stop`, `cow update` to manage the service, and `cow skill` to manage skills. Without the CLI, you can use `./run.sh` or `python3 app.py` to run.
</Note>

### 4. Configure

Copy the config template and edit:

```bash
cp config-template.json config.json
```

Fill in model API keys, channel type, and other settings in `config.json`. See the [model docs](/en/models/index) for details.

### 5. Run

**Using Cow CLI (recommended):**

```bash
cow start
```

**Or run locally in foreground:**

```bash
python3 app.py
```

By default, the Web console starts. Access `http://localhost:9899` to chat.

**Background run on server (without CLI):**

```bash
nohup python3 app.py & tail -f nohup.out
```

<Tip>
  **Deploying on a server?** By default `web_host` only listens on `127.0.0.1` (local access). Set `web_host` to `0.0.0.0` in `config.json` to make the console reachable from outside, and set `web_password` to protect it. Don't forget to open port `9899` in your firewall or security group — ideally restricted to specific IPs.
</Tip>

## Docker Deployment

Docker deployment does not require cloning source code or installing dependencies. For Agent mode, source deployment is recommended for broader system access.

<Note>
  Requires [Docker](https://docs.docker.com/engine/install/) and docker-compose.
</Note>

**1. Download config**

```bash
curl -O https://cdn.link-ai.tech/code/cow/docker-compose.yml
```

Edit `docker-compose.yml` with your configuration.

**2. Start container**

```bash
sudo docker compose up -d
```

**3. View logs**

```bash
sudo docker logs -f chatgpt-on-wechat
```

<Tip>
  **Running in Docker?** Set `WEB_HOST` to `0.0.0.0` in `docker-compose.yml` so the console is reachable from outside the container, and set `WEB_PASSWORD` to protect it. Make sure port `9899` is mapped to the host and open in your firewall or security group.
</Tip>

## Core Configuration

```json
{
  "channel_type": "web",
  "model": "deepseek-v4-flash",
  "deepseek_api_key": "",
  "agent": true,
  "agent_workspace": "~/cow",
  "agent_max_context_tokens": 40000,
  "agent_max_context_turns": 30,
  "agent_max_steps": 15
}
```

| Parameter | Description | Default |
| --- | --- | --- |
| `channel_type` | Channel type | `web` |
| `model` | Model name | `deepseek-v4-flash` |
| `agent` | Enable Agent mode | `true` |
| `agent_workspace` | Agent workspace path | `~/cow` |
| `agent_max_context_tokens` | Max context tokens | `40000` |
| `agent_max_context_turns` | Max context turns | `30` |
| `agent_max_steps` | Max decision steps per task | `15` |

<Tip>
  Full configuration options are in the project [`config.py`](https://github.com/zhayujie/CowAgent/blob/master/config.py).
</Tip>
````

## File: docs/en/guide/quick-start.mdx
````markdown
---
title: One-click Install
description: One-click install and manage CowAgent with scripts
---

The project provides scripts for one-click install, configuration, startup, and management. Script-based deployment is recommended for quick setup.

Supports Linux, macOS, and Windows. Requires Python 3.7-3.12 (3.9 recommended).

## Install Command

<Tabs>
  <Tab title="Linux / macOS">
    ```bash
    bash <(curl -fsSL https://cdn.link-ai.tech/code/cow/run.sh)
    ```
  </Tab>
  <Tab title="Windows (PowerShell)">
    ```powershell
    irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex
    ```
  </Tab>
</Tabs>

The script automatically performs these steps:

1. Check Python environment (requires Python 3.7+)
2. Install required tools (git, curl, etc.)
3. Clone project to `~/CowAgent`
4. Install Python dependencies and Cow CLI
5. Guided configuration for AI model and channel
6. Start service

By default, the Web console starts after installation. Access `http://localhost:9899` to begin chatting.

<Note>
  **Deploying on a server?** By default `web_host` only listens on `127.0.0.1` (local access only). Set `web_host` to `0.0.0.0` in `config.json` to make the console reachable from outside, and set `web_password` to protect it. Don't forget to open port `9899` in your firewall or security group — ideally restricted to specific IPs.
</Note>

## Management Commands

After installation, use the `cow` command to manage the service:

| Command | Description |
| --- | --- |
| `cow start` | Start service |
| `cow stop` | Stop service |
| `cow restart` | Restart service |
| `cow status` | Check run status |
| `cow logs` | View real-time logs |
| `cow update` | Update code and restart |
| `cow install-browser` | Install browser tool dependencies |

See the [Commands documentation](/en/cli/index) for more details.

<Note>
  If the `cow` command is not available, you can use `./run.sh <command>` (Linux/macOS) or `.\scripts\run.ps1 <command>` (Windows) as a fallback. Both are functionally equivalent.
</Note>
````

## File: docs/en/guide/upgrade.mdx
````markdown
---
title: Upgrade
description: How to upgrade CowAgent
---

## Recommended: One-line upgrade

Use `cow update` to pull the latest code and restart the service in one step:

```bash
cow update
```

The command runs the following automatically:

1. Pull the latest code (`git pull`)
2. Stop the running service
3. Update Python dependencies
4. Reinstall the CLI
5. Start the service

<Note>
  If the Cow CLI is not installed, `./run.sh update` performs the same operations.
</Note>

## Manual upgrade

Run the following inside the project root:

```bash
git pull
pip3 install -r requirements.txt
pip3 install -e .
```

Then restart the service:

```bash
# Using Cow CLI (recommended)
cow restart

# Or using run.sh
./run.sh restart

# Or restart manually with nohup
kill $(ps -ef | grep app.py | grep -v grep | awk '{print $2}')
nohup python3 app.py & tail -f nohup.out
```

## Docker upgrade

Run the following in the directory containing `docker-compose.yml`:

```bash
sudo docker compose pull
sudo docker compose up -d
```

<Tip>
  Back up `config.json` before upgrading. For Docker deployments, mount the workspace directory as a volume to persist data across upgrades.
</Tip>
````

## File: docs/en/intro/architecture.mdx
````markdown
---
title: Architecture
description: CowAgent 2.0 system architecture and core design
---

CowAgent 2.0 has evolved from a simple chatbot into a super intelligent assistant with Agent architecture, featuring autonomous thinking, task planning, long-term memory, and skill extensibility.

## System Architecture

CowAgent's architecture consists of the following core modules:

<img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/architecture/en/architecture.jpg" alt="CowAgent Architecture" />

| Module | Description |
| --- | --- |
| **Plan** | Understands user intent, decomposes complex tasks into multi-step plans, and iteratively invokes tools until the goal is achieved |
| **Memory** | Automatically persists important information as core memory and daily memory, with hybrid keyword and vector retrieval for cross-session context continuity |
| **Knowledge** | Organizes structured knowledge by topic. The Agent autonomously distills valuable information into Markdown pages, maintaining indexes and cross-references to build a growing knowledge network |
| **Tools** | Core capability for Agent to access OS resources. 10+ built-in tools including file read/write, terminal, browser, scheduler, memory search, web search, and more |
| **Skills** | Loads and manages Skills. Supports one-click installation from Skill Hub, GitHub, and more, or custom skill creation through conversation |
| **Models** | Model layer with unified access to OpenAI, Claude, Gemini, DeepSeek, MiniMax, GLM, Qwen, and other mainstream LLMs |
| **Channels** | Message channel layer for receiving and sending messages. Supports Web console, WeChat, Feishu, DingTalk, WeCom, WeChat Official Account, and more with a unified protocol |
| **CLI** | Command-line system providing terminal commands (`cow`) and chat commands (`/`) for process management, skill installation, configuration, knowledge base management, and more |

## Agent Mode Workflow

When Agent mode is enabled, CowAgent runs as an autonomous agent with the following workflow:

1. **Receive Message** — Receive user input through channels
2. **Understand Intent** — Analyze task requirements and context
3. **Plan Task** — Break complex tasks into multiple steps
4. **Invoke Tools** — Select and execute appropriate tools for each step
5. **Update Memory & Knowledge** — Store important information in long-term memory and organize structured knowledge into the knowledge base
6. **Return Result** — Send execution results back to the user

## Workspace Directory Structure

The Agent workspace is located at `~/cow` by default and stores system prompts, memory files, and skill files:

```
~/cow/
├── SYSTEM.md          # Agent system prompt
├── USER.md            # User profile
├── MEMORY.md          # Core memory
├── memory/            # Long-term memory storage
│   └── YYYY-MM-DD.md  # Daily memory
├── knowledge/         # Personal knowledge base
│   ├── index.md       # Knowledge index
│   └── <category>/    # Topic-based pages
└── skills/            # Custom skills
    ├── skill-1/
    └── skill-2/
```

Secret keys are stored separately in `~/.cow` directory for security:

```
~/.cow/
└── .env               # Secret keys for skills
```

## Core Configuration

Configure Agent mode parameters in `config.json`:

```json
{
  "agent": true,
  "agent_workspace": "~/cow",
  "agent_max_context_tokens": 50000,
  "agent_max_context_turns": 20,
  "agent_max_steps": 20,
  "enable_thinking": false
}
```

| Parameter | Description | Default |
| --- | --- | --- |
| `agent` | Enable Agent mode | `true` |
| `agent_workspace` | Workspace path | `~/cow` |
| `agent_max_context_tokens` | Max context tokens | `50000` |
| `agent_max_context_turns` | Max context turns | `20` |
| `agent_max_steps` | Max decision steps per task | `20` |
| `enable_thinking` | Enable deep-thinking mode | `false` |
| `knowledge` | Enable personal knowledge base | `true` |
| `knowledge` | Enable personal knowledge base | `true` |
````

## File: docs/en/intro/features.mdx
````markdown
---
title: Features
description: CowAgent long-term memory, task planning, skills system, CLI commands, and browser tool in detail
---

## 1. Long-term Memory

The memory system enables the Agent to remember important information over time, using a three-tier memory flow: conversation context (short-term) → daily memory (mid-term) → MEMORY.md (long-term), forming a complete memory lifecycle.

On first launch, the Agent proactively asks the user for key information and records it in the workspace (default `~/cow`) — including agent settings, user identity, and memory files.

In subsequent long-term conversations, the Agent intelligently stores or retrieves memory as needed, continuously updating its own settings, user preferences, and memory files. **Deep Dream** distillation runs daily, consolidating scattered daily memories into refined long-term memory and generating a narrative-style dream diary.

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260203000455.png" width="800" />
</Frame>

See [Long-term Memory](/en/memory) and [Deep Dream](/en/memory/deep-dream) for details.

## 2. Personal Knowledge Base

> The knowledge base system enables the Agent to continuously accumulate and organize structured knowledge. Unlike memory which records along a timeline, the knowledge base is organized by topics, transforming articles, conversation insights, and learning materials into interconnected Markdown pages that form a continuously growing knowledge network.

The Agent automatically organizes valuable information from conversations into knowledge pages, maintaining cross-references and indexes. The Web console provides document browsing and knowledge graph visualization. Knowledge is stored in `~/cow/knowledge/` within the workspace.

- **Auto-organization**: The Agent autonomously extracts and organizes structured knowledge during conversations, maintaining indexes and cross-references
- **Knowledge graph**: Automatically builds a knowledge graph from cross-references between pages, with interactive graph visualization in the Web console
- **Chat integration**: Knowledge document links referenced in Agent replies can be clicked directly in the Web console for viewing
- **CLI management**: Use `/knowledge` commands to view stats, browse directory, and toggle the feature with `/knowledge on|off`

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260413105435.png" width="800" />
</Frame>

See [Personal Knowledge Base](/en/knowledge) for details.

## 3. Task Planning and Tool Use

Tools are the core of how the Agent accesses operating system resources. The Agent intelligently selects and invokes tools based on task requirements, performing file read/write, command execution, scheduled tasks, and more. Built-in tools are implemented in the project's `agent/tools/` directory.

**Key tools:** file read/write/edit, Bash terminal, browser, file send, scheduler, memory search, web search, environment config, and more.

### 3.1 Terminal and File Access

Access to the OS terminal and file system is the most fundamental and core capability. Many other tools and skills build on top of this. Users can interact with the Agent from a mobile device to operate resources on their personal computer or server:

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202181130.png" width="800" />
</Frame>

### 3.2 Programming Capability

Combining programming and system access, the Agent can execute the complete **Vibecoding workflow** — from information search, asset generation, coding, testing, deployment, Nginx configuration, to publishing — all triggered by a single command from your phone:

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260318211018.png" width="800" />
</Frame>

### 3.3 Scheduled Tasks

The `scheduler` tool enables dynamic scheduled tasks, supporting **one-time tasks, fixed intervals, and Cron expressions**. Tasks can be triggered as either a **fixed message send** or an **Agent dynamic task** execution:

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202195402.png" width="800" />
</Frame>

### 3.4 Browser

The built-in `browser` tool allows the Agent to control a Chromium browser to visit web pages, fill forms, click elements, and take screenshots, with support for dynamic JS-rendered pages. Run `cow install-browser` to install with one command, automatically adapting to server (headless) and desktop environments:

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260401110103.png" width="800" />
</Frame>

### 3.5 Environment Variable Management

Secrets required by skills are stored in an environment variable file, managed by the `env_config` tool. You can update secrets through conversation, with built-in security protection and desensitization:

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202234939.png" width="800" />
</Frame>

## 4. Skills System

The Skills system provides infinite extensibility for the Agent. Each Skill consists of a description file, execution scripts (optional), and resources (optional), describing how to complete specific types of tasks. Skills allow the Agent to follow instructions for complex workflows, invoke tools, or integrate third-party systems.

- [Skill Hub](https://skills.cowagent.ai/): An open skill marketplace featuring official, community, and third-party skills. Install with one command.
- **Built-in skills:** Located in the project's `skills/` directory, including skill creator, image recognition, LinkAI agent, web fetch, and more. Built-in skills are automatically enabled based on dependency conditions (API keys, system commands, etc.).
- **Custom skills:** Created by users through conversation, stored in the workspace (`~/cow/skills/`), capable of implementing any complex business process or third-party integration.

Install skills: `/skill install <name>` or `cow skill install <name>`, supporting Skill Hub, GitHub, ClawHub, URL, and more.

### 4.1 Creating Skills

The `skill-creator` skill enables rapid skill creation through conversation. You can ask the Agent to codify a workflow as a skill, or send any API documentation and examples for the Agent to complete the integration directly:

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202202247.png" width="800" />
</Frame>

### 4.2 Web Search and Image Recognition

- **Web search:** Built-in `web_search` tool, supports multiple search engines. Configure `BOCHA_API_KEY` or `LINKAI_API_KEY` to enable.
- **Image recognition:** Built-in `openai-image-vision` skill, supports `gpt-4.1-mini`, `gpt-4.1`, and other models. Requires `OPENAI_API_KEY`.

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202213219.png" width="800" />
</Frame>

### 4.3 Skill Hub

Visit [skills.cowagent.ai](https://skills.cowagent.ai/) to browse all available skills, or use commands in conversation:

```text
/skill list --remote          # Browse Skill Hub
/skill search <keyword>       # Search skills
/skill install <name>          # Install with one command
```

Also supports installing skills from GitHub, ClawHub, LinkAI, and other third-party platforms. See [Install Skills](/en/skills/install) for details.

<img src="https://cdn.link-ai.tech/doc/20260401110103.png" width="750" />

## 5. CLI Command System

CowAgent provides two command interaction methods, covering service management, skill installation, configuration, and more:

- **Terminal CLI:** Run `cow <command>` in the system terminal, supporting `start`, `stop`, `restart`, `update`, `status`, `logs`, `skill`, etc.
- **Chat commands:** Type `/<command>` in conversation. The Web console shows a command menu when you type `/`.

```bash
cow start              # Start service
cow stop               # Stop service
cow update             # Update and restart
cow skill install pptx # Install a skill
cow install-browser    # Install browser tool
```

See [Command Overview](https://docs.cowagent.ai/en/cli) for details.
````

## File: docs/en/intro/index.mdx
````markdown
---
title: Introduction
description: CowAgent - Open-source super AI assistant and Agent Harness
---

<div align="center">
  <img src="https://cdn.link-ai.tech/doc/78c5dd674e2c828642ecc0406669fed7.png" alt="CowAgent" width="450px"/>
</div>

**CowAgent** is an open-source super AI assistant and Agent Harness. It proactively plans tasks, runs tools and skills, and autonomously grows with memory and knowledge.

CowAgent is lightweight, easy to deploy, and built to extend. Plug in any major LLM provider, run it across Web and major IM platforms, 24/7 on a personal computer or server.

<CardGroup cols={2}>
  <Card title="GitHub" icon="github" href="https://github.com/zhayujie/CowAgent">
    Open-source repository — Star and contribute
  </Card>
  <Card title="Try Online" icon="cloud" href="https://link-ai.tech/cowagent/create">
    No setup required — experience CowAgent instantly
  </Card>
</CardGroup>

## Core Capabilities

<CardGroup cols={2}>
  <Card title="Autonomous Task Planning" icon="brain" href="/en/intro/architecture">
    Decomposes complex tasks and executes them step by step, looping over tools and skills until the goal is reached.
  </Card>
  <Card title="Long-term Memory" icon="database" href="/en/memory/index">
    Three-tier architecture (context → daily → core), automatic Deep Dream distillation, hybrid keyword + vector retrieval.
  </Card>
  <Card title="Personal Knowledge Base" icon="book" href="/en/knowledge/index">
    Auto-curates structured knowledge into a Markdown wiki, builds an evolving knowledge graph with visual browsing.
  </Card>
  <Card title="Skills System" icon="puzzle-piece" href="/en/skills/index">
    A complete skill creation and execution engine. Install from Skill Hub or generate custom skills via natural-language conversation.
  </Card>
  <Card title="Multimodal Messaging" icon="image" href="/en/channels/web">
    First-class support for text, images, voice, and files — recognition, generation, and delivery.
  </Card>
  <Card title="Tool System" icon="wrench" href="/en/tools/index">
    Built-in file I/O, terminal, browser, scheduler, memory retrieval, web search, and more — with native MCP integration.
  </Card>
  <Card title="Command System" icon="terminal" href="/en/cli/index">
    Terminal CLI and in-chat commands for process management, skill installation, configuration, and context inspection.
  </Card>
  <Card title="Pluggable Models" icon="microchip" href="/en/models/index">
    Claude, GPT, Gemini, DeepSeek, Qwen, GLM, Kimi, MiniMax, Doubao, and more — swap providers from the Web console with one click.
  </Card>
  <Card title="Multi-channel Integration" icon="server" href="/en/channels/index">
    A single Agent simultaneously serves Web, WeChat, Feishu, DingTalk, WeCom, QQ, and Official Accounts.
  </Card>
</CardGroup>

## Quick Start

Run one of the commands below to install, configure, and start CowAgent in a single step:

<Tabs>
  <Tab title="Linux / macOS">
    ```bash
    bash <(curl -fsSL https://cdn.link-ai.tech/code/cow/run.sh)
    ```
  </Tab>
  <Tab title="Windows (PowerShell)">
    ```powershell
    irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex
    ```
  </Tab>
</Tabs>

Once started, open `http://localhost:9899` to access the **Web console** — the unified place to chat, configure providers, connect channels, and install skills.

<CardGroup cols={2}>
  <Card title="Quick Start" icon="rocket" href="/en/guide/quick-start">
    Complete installation and run guide
  </Card>
  <Card title="Architecture" icon="sitemap" href="/en/intro/architecture">
    CowAgent system architecture
  </Card>
</CardGroup>

## Disclaimer

1. This project is licensed under the [MIT License](https://github.com/zhayujie/CowAgent/blob/master/LICENSE) and is intended for technical research and learning. You are responsible for complying with applicable laws and regulations in your jurisdiction; the maintainers assume no liability for any consequences arising from use of this project.
2. **Cost & safety:** Agent mode consumes substantially more tokens than plain chat — pick models that balance quality and cost. The Agent has access to your local operating system; deploy only in trusted environments.
3. CowAgent is a pure open-source project and does not participate in, authorize, or issue any cryptocurrency.

## Community

Scan the WeChat QR code to join the open-source community group:

<img width="140" src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/open-community.png" />
````

## File: docs/en/knowledge/index.mdx
````markdown
---
title: Personal Knowledge Base
description: CowAgent personal knowledge base — structured knowledge accumulation, automatic organization, and knowledge graph
---

The personal knowledge base is the Agent's long-term structured knowledge store, saved in the `knowledge/` directory within the workspace. Unlike memory, which is organized by timeline, the knowledge base organizes content by topic — articles, conversation insights, and learning materials are structured into interlinked Markdown pages, forming a continuously growing knowledge network.

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260413105435.png" width="800" />
</Frame>

## Core Concepts

### Knowledge vs Memory

| Dimension | Knowledge Base (knowledge/) | Long-term Memory (memory/) |
| --- | --- | --- |
| Organization | By topic, interlinked | By timeline, dated files |
| Writing | Agent actively structures content | Auto-summarized on context trimming |
| Content | Refined, structured knowledge | Raw conversation summaries |
| Use cases | Study notes, tech docs, project knowledge | Conversation history, event records |

### Directory Structure

```
~/cow/knowledge/
├── index.md          # Knowledge index, entry point for all pages
├── log.md            # Change log, records each write
├── concepts/         # Conceptual knowledge
│   └── machine-learning.md
├── entities/         # Entity knowledge (people, orgs, tools)
│   └── openai.md
└── sources/          # Source knowledge (articles, papers)
    └── llm-wiki.md
```

The directory structure is flexible — the Agent automatically creates appropriate category directories based on actual content. Users can also customize the organization.

## Automatic Organization

Knowledge writing is an autonomous Agent behavior, triggered in these scenarios:

- **User shares an article or document** — The Agent automatically extracts key information and creates a structured knowledge page
- **Conversation produces valuable conclusions** — The Agent organizes insights into knowledge pages and links them to existing knowledge
- **User explicitly requests organization** — Users can guide the Agent to organize and update knowledge through conversation

Each knowledge page includes cross-reference links to related pages, gradually building a knowledge graph.

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260413110104.png" width="800" />
</Frame>

## Knowledge Retrieval

The Agent can retrieve knowledge during conversation through:

- **Index lookup** — Quickly locate relevant pages via `knowledge/index.md`
- **Semantic search** — Search knowledge content via the `memory_search` tool
- **Direct read** — Read specific knowledge files via the `memory_get` tool

## Web Console

The web console provides a dedicated "Knowledge" module with:

- **Document browsing** — Tree-style directory structure, searchable and collapsible, click to view content
- **Knowledge graph** — Interactive graph visualizing relationships between knowledge pages
- **Chat integration** — Knowledge document links referenced in Agent replies are clickable for direct navigation

<Frame>
  <img src="https://cdn.link-ai.tech/doc/17aad553d3e9e428c52ff9dc31726fda.png" width="800" />
</Frame>

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260413105402.png" width="800" />
</Frame>

## CLI Commands

Manage the knowledge base with the `/knowledge` command:

| Command | Description |
| --- | --- |
| `/knowledge` | Show knowledge base statistics |
| `/knowledge list` | Display file directory as a tree |
| `/knowledge on` | Enable the knowledge base feature |
| `/knowledge off` | Disable the knowledge base feature |

## Configuration

| Parameter | Description | Default |
| --- | --- | --- |
| `knowledge` | Whether to enable the personal knowledge base | `true` |
| `agent_workspace` | Workspace path; knowledge is stored under the `knowledge/` subdirectory | `~/cow` |
````

## File: docs/en/memory/context.mdx
````markdown
---
title: Short-term Memory
description: Conversation context — message management, compression strategies, and context operations
---

Conversation context is the Agent's short-term memory, containing all messages in the current session (user input, Agent replies, tool calls and results). Proper context management is critical for the Agent's reasoning quality and cost control.

## Context Structure

Each conversation turn consists of:

```
User message → Agent thinking → Tool call → Tool result → ... → Agent final reply
```

A single turn may include multiple tool calls (controlled by `agent_max_steps`). All tool calls and results are retained in context until compressed or trimmed.

## Key Configuration

| Parameter | Description | Default |
| --- | --- | --- |
| `agent_max_context_tokens` | Maximum context token budget | `50000` |
| `agent_max_context_turns` | Maximum conversation turns in context | `20` |
| `agent_max_steps` | Maximum decision steps per turn (tool call count) | `15` |

Configurable via `config.json` or the `/config` chat command.

## Compression Strategy

When context exceeds limits, the system automatically compresses to free space. The process has multiple stages:

### 1. Tool Result Truncation

Before each decision loop, the system checks tool call results in historical turns. Results exceeding **20,000 characters** are truncated, keeping only the beginning and end with a truncation notice. Current turn results are not affected.

### 2. Turn Trimming

When conversation turns exceed `agent_max_context_turns`:

- The **oldest half** of complete turns is trimmed (preserving tool call chain integrity)
- Trimmed messages are summarized by LLM and **written to the daily memory file**
- Once the LLM summary is ready, it is also **injected into the first user message** of the retained context, helping the model maintain conversational continuity
- Summary injection runs asynchronously in the background and takes effect from the next turn onward

### 3. Token Budget Trimming

After turn trimming, if tokens still exceed the budget:

- **Fewer than 5 turns**: All turns undergo **text compression** — each turn keeps only the first user text and last Agent reply, removing intermediate tool call chains
- **5 or more turns**: The **first half** of turns is trimmed again, with discarded content written to memory and a context summary injected

### 4. Overflow Emergency Handling

When the model API returns a context overflow error:

1. All current messages are summarized and written to memory
2. Aggressive trimming is applied (tool results limited to 10K chars, user text to 10K, max 5 turns)
3. If still overflowing, the entire conversation context is cleared

## Session Persistence

Conversation messages are persisted to a local database, automatically restored after service restart. Restore strategy:

- Restores the most recent **`max(3, max_context_turns / 6)`** turns
- Only retains each turn's **user text and Agent final reply**, not intermediate tool call chains
- Sessions older than **30 days** are automatically cleaned up

## Commands

Use these commands in chat to manage context:

| Command | Description |
| --- | --- |
| `/context` | View current context statistics (message count, role distribution, total characters) |
| `/context clear` | Clear current session context |
| `/config agent_max_context_tokens 80000` | Adjust context token budget |
| `/config agent_max_context_turns 30` | Adjust context turn limit |

<Tip>
  After clearing context, the Agent "forgets" previous conversation content. Content that was already written to long-term memory can still be retrieved via memory search.
</Tip>
````

## File: docs/en/memory/deep-dream.mdx
````markdown
---
title: Deep Dream
description: Deep Dream — automatic distillation from conversations to permanent memory
---

Deep Dream is the core consolidation mechanism of CowAgent's memory system, responsible for distilling scattered daily memories into refined long-term memory and generating dream diaries.

## Memory Flow

CowAgent's memory progresses through three stages from short-term to long-term:

```
Conversation context (short-term) → Daily memory (mid-term) → MEMORY.md (long-term)
```

### 1. Conversation → Daily Memory

When conversation context is trimmed or during the daily scheduled summary, the system uses LLM to summarize conversation content into key events, writing them to the daily memory file `memory/YYYY-MM-DD.md`.

Triggers:
- **Context trimming** — Trimmed content is summarized when turn or token limits are exceeded
- **Daily schedule** — Automatically triggered at 23:55
- **API overflow** — Emergency save of current conversation summary

### 2. Daily Memory → MEMORY.md (Distillation)

After the daily summary completes, Deep Dream automatically runs distillation:

1. **Read materials** — Current `MEMORY.md` + today's daily memory
2. **LLM distillation** — Deduplicate, merge, prune, extract new information
3. **Overwrite MEMORY.md** — Output the refined long-term memory
4. **Generate dream diary** — Record discoveries and insights from the consolidation

### 3. Role of MEMORY.md

`MEMORY.md` is injected into the system prompt for every conversation, keeping the Agent aware of user preferences, decisions, and key facts. Therefore it must stay concise — Deep Dream targets approximately 30 entries or fewer.

## Distillation Rules

Deep Dream follows these consolidation rules:

| Operation | Description |
| --- | --- |
| **Merge & refine** | Combine similar entries into single high-density statements |
| **Extract new** | Pull preferences, decisions, people, experiences from daily memory |
| **Conflict update** | When new info contradicts old entries, newer info takes precedence |
| **Clean invalid** | Remove temporary records, blank entries, formatting artifacts |
| **Remove redundancy** | Delete old entries already covered by more refined statements |

## Dream Diary

Each distillation generates a dream diary saved at `memory/dreams/YYYY-MM-DD.md`, written in a narrative style recording:

- Duplications or contradictions found
- New insights extracted from daily memory
- Cleanups and optimizations performed
- Overall observations

Dream diaries can be viewed in the Web console under "Memory → Dream Diary" tab.

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260414110032.png" width="800" />
</Frame>

## Manual Trigger

In addition to the automatic daily run, you can manually trigger distillation in chat:

```text
/memory dream [N]
```

- `N`: Consolidate the last N days of memory (default 3, max 30)
- Runs asynchronously in the background; you'll be notified in chat when complete
- Web notifications include clickable links to view MEMORY.md and dream diary
- Works without Agent initialization — can be used before the first conversation

<Tip>
  After first deployment, it's recommended to run `/memory dream 30` once to distill all historical daily memories into MEMORY.md.
</Tip>

## Safety Mechanisms

| Mechanism | Description |
| --- | --- |
| **Skip on no content** | Distillation skipped when no daily memory exists, avoiding empty overwrites |
| **Input dedup** | In scheduled tasks, automatically skipped when input materials haven't changed |
| **Async execution** | Distillation runs in a background thread, never blocking conversation |
| **Sequential guarantee** | In scheduled tasks, daily flush completes before distillation starts |
| **No fabrication** | Prompt explicitly constrains consolidation to existing materials only |
````

## File: docs/en/memory/index.mdx
````markdown
---
title: Long-term Memory
description: CowAgent long-term memory system — file persistence, automatic writing, and hybrid retrieval
---

Long-term memory is stored in workspace files, persisting across sessions. The Agent loads historical memory on demand via retrieval tools during conversation, and automatically writes conversation summaries to long-term memory when context is trimmed.

<img src="https://cdn.link-ai.tech/doc/memory-architecture-en.jpg" alt="Memory Architecture" />

## Memory Types

### Core Memory (MEMORY.md)

Stored in `~/cow/MEMORY.md`, containing long-term user preferences, important decisions, key facts, and other information that doesn't fade over time. The Agent reads and writes this file via tools to maintain long-term knowledge.

### Daily Memory (memory/YYYY-MM-DD.md)

Stored in `~/cow/memory/` directory, named by date (e.g., `2026-03-08.md`), recording daily conversation summaries and key events. Files are only created on first write to avoid generating empty files.

### Dream Diary (memory/dreams/YYYY-MM-DD.md)

A byproduct of the Deep Dream (memory distillation) process, recording discoveries, deduplication operations, and new insights from each consolidation. Stored in `~/cow/memory/dreams/` directory, named by date.

## Automatic Writing

The Agent automatically persists conversation content to long-term memory through the following mechanisms:

- **On context trimming** — When conversation turns or tokens exceed the configured limit, the oldest half of the context is trimmed, and the discarded content is summarized by LLM into key information and written to the daily memory file. The summary is also asynchronously injected into the retained context for conversational continuity
- **Daily scheduled summary** — A full summary is automatically triggered at 23:55 every day, ensuring memory is preserved even on low-activity days (skipped if content hasn't changed)
- [Deep Dream (memory distillation)](/en/memory/deep-dream) — Runs automatically after the daily summary, distilling daily memories into MEMORY.md and generating a dream diary
- **On API context overflow** — When the model API returns a context overflow error, the current conversation summary is saved as an emergency measure

All memory writes run asynchronously in a background thread (LLM summarization + file writing), never blocking normal conversation replies.

## Memory Retrieval

The memory system supports hybrid retrieval modes:

- **Keyword retrieval** — FTS5 full-text index matching with BM25 ranking
- **Vector retrieval** — Embedding-based semantic similarity search, finds relevant memory even with different wording

The Agent automatically triggers memory retrieval during conversation as needed, incorporating relevant historical information into context. Results are ranked by a combined score (default: 0.7 vector weight + 0.3 keyword weight). Daily memory scores decay over time (30-day half-life), while core memory does not decay.

## Related Files

Files related to memory in the workspace (default `~/cow`):

| File | Description |
| --- | --- |
| `AGENT.md` | Agent personality and behavior settings |
| `USER.md` | User identity information and preferences |
| `RULE.md` | Custom rules and constraints |
| `MEMORY.md` | Core memory (long-term) |
| `memory/YYYY-MM-DD.md` | Daily memory (created on demand) |
| `memory/dreams/YYYY-MM-DD.md` | Dream diary (auto-generated by Deep Dream) |

## Web Console

The memory management page in the Web console allows browsing memory files and dream diaries, with tab switching support:

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260414171014.png" width="800" />
</Frame>

## Configuration

| Parameter | Description | Default |
| --- | --- | --- |
| `agent_workspace` | Workspace path, memory files stored under this directory | `~/cow` |
| `agent_max_context_tokens` | Max context tokens; when exceeded, content is trimmed and summarized into memory | `50000` |
| `agent_max_context_turns` | Max context turns; when exceeded, content is trimmed and summarized into memory | `20` |
````

## File: docs/en/models/claude.mdx
````markdown
---
title: Claude
description: Anthropic Claude model configuration (Text Chat + Image Understanding)
---

Claude is provided by Anthropic and supports both text chat and image understanding. The mainstream Sonnet / Opus models natively support vision, so no separate Vision model needs to be specified.

<Tip>
  All capabilities below can be configured in one place via the "Model Management" page in the Web Console, with no need to manually edit the configuration file.
</Tip>

## Text Chat

```json
{
  "model": "claude-sonnet-4-6",
  "claude_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `model` | Supports `claude-sonnet-4-6`, `claude-opus-4-7`, `claude-opus-4-6`, `claude-sonnet-4-5`, `claude-sonnet-4-0`, `claude-3-5-sonnet-latest`, etc. See [official models](https://docs.anthropic.com/en/docs/about-claude/models/overview) |
| `claude_api_key` | Create one in the [Claude Console](https://console.anthropic.com/settings/keys) |
| `claude_api_base` | Optional, defaults to `https://api.anthropic.com/v1`. Can be changed to a third-party proxy |

### Model Selection

| Model | Use Case |
| --- | --- |
| `claude-sonnet-4-6` | Default recommended, balanced cost and speed |
| `claude-opus-4-7` | Complex reasoning and long-running tasks; best quality but higher cost |
| `claude-sonnet-4-5` / `claude-sonnet-4-0` | Previous-generation flagships at a lower price |

## Image Understanding

Once `claude_api_key` is configured, the Agent's Vision tool automatically uses the Claude main model to recognize images, with no extra setup required.

To manually specify a Vision model, set it explicitly in the configuration file:

```json
{
  "tools": {
    "vision": {
      "model": "claude-sonnet-4-6"
    }
  }
}
```
````

## File: docs/en/models/coding-plan.mdx
````markdown
---
title: Coding Plan
description: Coding Plan model configuration
---

> Coding Plan is a monthly subscription package offered by various providers, ideal for high-frequency Agent usage. CowAgent supports all Coding Plan providers via OpenAI-compatible mode.

<Note>
  Coding Plan API Base and API Key are usually separate from the standard pay-as-you-go ones. Please obtain them from each provider's platform.
</Note>

## General Configuration

All providers can be accessed via the OpenAI-compatible protocol, and can be quickly configured through the web console. Set the model provider to **OpenAI**, select a custom model and enter the model code, then fill in the corresponding provider's API Base and API Key:

<img src="https://cdn.link-ai.tech/doc/20260318113134.png" width="800"/>

You can also configure directly in `config.json`:

```json
{
  "bot_type": "openai",
  "model": "MODEL_NAME",
  "open_ai_api_base": "PROVIDER_CODING_PLAN_API_BASE",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `bot_type` | Must be `openai` (OpenAI-compatible mode) |
| `model` | Model name supported by the provider |
| `open_ai_api_base` | Provider's Coding Plan API Base URL |
| `open_ai_api_key` | Provider's Coding Plan API Key |

---

## Alibaba Cloud

```json
{
  "bot_type": "openai",
  "model": "qwen3.5-plus",
  "open_ai_api_base": "https://coding.dashscope.aliyuncs.com/v1",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `model` | `qwen3.5-plus`, `qwen3-max-2026-01-23`, `qwen3-coder-next`, `qwen3-coder-plus`, `glm-5`, `glm-4.7`, `kimi-k2.5`, `MiniMax-M2.5` |
| `open_ai_api_base` | `https://coding.dashscope.aliyuncs.com/v1` |
| `open_ai_api_key` | Coding Plan specific key (not shared with pay-as-you-go) |

Reference: [Quick Start](https://help.aliyun.com/zh/model-studio/coding-plan-quickstart?spm=a2c4g.11186623.help-menu-2400256.d_0_2_1.70115203zi5Igc), [Model List](https://help.aliyun.com/zh/model-studio/coding-plan)

---

## MiniMax

```json
{
  "bot_type": "openai",
  "model": "MiniMax-M2.5",
  "open_ai_api_base": "https://api.minimaxi.com/v1",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `model` | `MiniMax-M2.5`, `MiniMax-M2.5-highspeed`, `MiniMax-M2.1`, `MiniMax-M2` |
| `open_ai_api_base` | China: `https://api.minimaxi.com/v1`; Global: `https://api.minimax.io/v1` |
| `open_ai_api_key` | Coding Plan specific key (not shared with pay-as-you-go) |

Reference: [China Key](https://platform.minimaxi.com/docs/coding-plan/quickstart), [Model List](https://platform.minimaxi.com/docs/guides/pricing-coding-plan), [Global Key](https://platform.minimax.io/docs/coding-plan/quickstart)

---

## GLM

```json
{
  "bot_type": "openai",
  "model": "glm-4.7",
  "open_ai_api_base": "https://open.bigmodel.cn/api/coding/paas/v4",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `model` | `glm-5`, `glm-4.7`, `glm-4.6`, `glm-4.5`, `glm-4.5-air` |
| `open_ai_api_base` | China: `https://open.bigmodel.cn/api/coding/paas/v4`; Global: `https://api.z.ai/api/coding/paas/v4` |
| `open_ai_api_key` | Shared with standard API |

Reference: [China Quick Start](https://docs.bigmodel.cn/cn/coding-plan/quick-start), [Global Quick Start](https://docs.z.ai/devpack/quick-start)

---

## Kimi

```json
{
  "bot_type": "moonshot",
  "model": "kimi-for-coding",
  "moonshot_base_url": "https://api.kimi.com/coding/v1",
  "moonshot_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `model` | Use `kimi-for-coding` for auto-updating model, or specify a model such as `kimi-k2.6` |
| `moonshot_base_url` | `https://api.kimi.com/coding/v1` |
| `moonshot_api_key` | Coding Plan specific key (not shared with pay-as-you-go) |

Reference: [Key & Docs](https://www.kimi.com/code/docs/)

---

## Volcengine

```json
{
  "bot_type": "openai",
  "model": "Doubao-Seed-2.0-Code",
  "open_ai_api_base": "https://ark.cn-beijing.volces.com/api/coding/v3",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `model` | `Doubao-Seed-2.0-Code`, `Doubao-Seed-2.0-pro`, `Doubao-Seed-2.0-lite`, `Doubao-Seed-Code`, `MiniMax-M2.5`, `Kimi-K2.5`, `GLM-4.7`, `DeepSeek-V3.2` |
| `open_ai_api_base` | `https://ark.cn-beijing.volces.com/api/coding/v3` |
| `open_ai_api_key` | Shared with standard API |

Reference: [Quick Start](https://www.volcengine.com/docs/82379/1928261?lang=zh)
````

## File: docs/en/models/custom.mdx
````markdown
---
title: Custom
description: Custom vendor configuration for third-party API proxies and local models
---

For model services accessed via the OpenAI-compatible protocol or locally deployed models, such as:

- **Third-party API proxies**: call multiple models through a unified API base
- **Local models**: models deployed locally with tools like Ollama, vLLM, LocalAI
- **Private deployments**: model services deployed inside an enterprise

<Note>
  Difference from the `openai` vendor: when a custom vendor is selected, switching models via `/config model` does not automatically switch the vendor type — the custom API address is always used.
</Note>

## Text Chat

### Third-party API proxy

```json
{
  "bot_type": "custom",
  "model": "",
  "custom_api_key": "YOUR_API_KEY",
  "custom_api_base": "https://{your-proxy.com}/v1"
}
```

| Parameter | Description |
| --- | --- |
| `bot_type` | Must be set to `custom` |
| `model` | Model name; any model name supported by the proxy service |
| `custom_api_key` | API key provided by the proxy service |
| `custom_api_base` | API endpoint provided by the proxy service; must be OpenAI-compatible |

### Local models

Local models usually do not require an API key — only the API base needs to be filled in:

```json
{
  "bot_type": "custom",
  "model": "qwen3.5:27b",
  "custom_api_base": "http://localhost:11434/v1"
}
```

Common local deployment tools and their default endpoints:

| Tool | Default API Base |
| --- | --- |
| [Ollama](https://ollama.com) | `http://localhost:11434/v1` |
| [vLLM](https://docs.vllm.ai) | `http://localhost:8000/v1` |
| [LocalAI](https://localai.io) | `http://localhost:8080/v1` |

### Switching Models

Switching models under a custom vendor only changes `model` — `bot_type` and the API endpoint remain unchanged:

```
/config model qwen3.5:27b
```
````

## File: docs/en/models/deepseek.mdx
````markdown
---
title: DeepSeek
description: DeepSeek model configuration (Text Chat + Thinking Mode)
---

DeepSeek is one of the default recommended vendors in Agent mode, focused on cost-effective text chat and task planning.

## Text Chat

```json
{
  "model": "deepseek-v4-flash",
  "deepseek_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `model` | Supports `deepseek-v4-flash` (Default), `deepseek-v4-pro` |
| `deepseek_api_key` | Create one on the [DeepSeek Platform](https://platform.deepseek.com/api_keys) |
| `deepseek_api_base` | Optional, defaults to `https://api.deepseek.com/v1`. Can be changed to a third-party proxy |

### Model Selection

| Model | Use Case |
| --- | --- |
| `deepseek-v4-flash` | Default recommended; fast and low cost |
| `deepseek-v4-pro` | Smarter; better for complex tasks |

## Thinking Mode

The V4 series (`deepseek-v4-flash` / `deepseek-v4-pro`) supports an explicit "thinking mode": before producing the final answer, the model emits a chain of thought (`reasoning_content`) to improve answer quality.

### Toggle

Controlled by the global `enable_thinking` config, and can also be toggled from the Web Console's configuration page:

```json
{
  "enable_thinking": true
}
```

- `true`: the model thinks before answering across all channels. The Web Console displays the thinking process; IM channels (WeChat / WeCom / DingTalk / Feishu) do not show it but still get better answers.
- `false`: thinking is disabled, responses are faster, and time-to-first-token is lower.

### Reasoning Effort

Under thinking mode, `reasoning_effort` controls reasoning intensity:

```json
{
  "enable_thinking": true,
  "reasoning_effort": "high"
}
```

| Value | Use Case |
| --- | --- |
| `high` (Default) | Day-to-day Agent tasks; balanced reasoning and speed |
| `max` | Complex coding, long-horizon planning, strictly constrained tasks; deeper reasoning but more time and output tokens |

`reasoning_effort` only takes effect when `enable_thinking` is `true`; it is ignored automatically when the model does not support thinking mode.

### Behavior Notes

- **Sampling parameters**: in thinking mode, `temperature`, `top_p`, `presence_penalty`, and `frequency_penalty` are ignored by the server (without errors). CowAgent automatically skips them.
- **Multi-turn tool calls**: when the history contains tool calls, DeepSeek requires every assistant message to include `reasoning_content`. CowAgent handles this automatically, so toggling thinking mode across turns will not cause errors.

<Tip>
  `deepseek-v4-flash` is used by default; switch to `deepseek-v4-pro` for complex tasks; enable `enable_thinking` when deep reasoning is needed.
</Tip>
````

## File: docs/en/models/doubao.mdx
````markdown
---
title: Doubao
description: Doubao (Volcengine Ark) model configuration (Text / Image Understanding / Image Generation / Embedding)
---

Doubao (Volcengine Ark) supports text chat, image understanding, image generation (Seedream), and embedding. A single `ark_api_key` enables all capabilities.

<Tip>
  All capabilities below can be configured in one place via the "Model Management" page in the Web Console, with no need to manually edit the configuration file.
</Tip>

## Text Chat

```json
{
  "model": "doubao-seed-2-0-pro-260215",
  "ark_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `model` | Can be `doubao-seed-2-0-pro-260215`, `doubao-seed-2-0-code-preview-260215`, `doubao-seed-2-0-lite-260215`, etc. |
| `ark_api_key` | Create one in the [Volcengine Ark Console](https://console.volcengine.com/ark/region:ark+cn-beijing/apikey) |
| `ark_base_url` | Optional, defaults to `https://ark.cn-beijing.volces.com/api/v3` |

## Image Understanding

Once `ark_api_key` is configured, the Agent's Vision tool automatically uses `doubao-seed-2-0-pro-260215` to recognize images, with no extra setup required.

To manually specify a Vision model:

```json
{
  "tools": {
    "vision": {
      "model": "doubao-seed-2-0-pro-260215"
    }
  }
}
```

## Image Generation

```json
{
  "skills": {
    "image-generation": {
      "model": "seedream-5.0-lite"
    }
  }
}
```

Available models: `seedream-5.0-lite`, `seedream-4.5`.

## Embedding

```json
{
  "embedding_provider": "doubao",
  "embedding_model": "doubao-embedding-vision-251215"
}
```

The default model is `doubao-embedding-vision-251215` (multimodal embedding); the dimension (1024 or 2048) can be set via `embedding_dimensions` in the configuration file. After changing the embedding, run `/memory rebuild-index` to rebuild the index.
````

## File: docs/en/models/gemini.mdx
````markdown
---
title: Gemini
description: Google Gemini model configuration (Text Chat + Image Understanding + Image Generation)
---

Google Gemini supports text chat, image understanding, and image generation (Nano Banana series). A single `gemini_api_key` enables all capabilities.

<Tip>
  All capabilities below can be configured in one place via the "Model Management" page in the Web Console, with no need to manually edit the configuration file.
</Tip>

## Text Chat

```json
{
  "model": "gemini-3.5-flash",
  "gemini_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `model` | Recommended: `gemini-3.5-flash`; also supports `gemini-3.1-pro-preview`, `gemini-3.1-flash-lite-preview`, `gemini-3-flash-preview`, `gemini-3-pro-preview`, etc. See [official docs](https://ai.google.dev/gemini-api/docs/models) |
| `gemini_api_key` | Create one in [Google AI Studio](https://aistudio.google.com/app/apikey) |
| `gemini_api_base` | Optional, defaults to `https://generativelanguage.googleapis.com`. Can be changed to a third-party proxy |

## Image Understanding

All Gemini models natively support vision. Once `gemini_api_key` is configured, the Agent's Vision tool automatically uses the main model to recognize images, with no extra setup required.

To manually specify a Vision model:

```json
{
  "tools": {
    "vision": {
      "model": "gemini-3.1-flash-lite-preview"
    }
  }
}
```

## Image Generation

```json
{
  "skills": {
    "image-generation": {
      "model": "gemini-3.1-flash-image-preview"
    }
  }
}
```

| Model ID | Alias |
| --- | --- |
| `gemini-3.1-flash-image-preview` | Nano Banana 2 |
| `gemini-3-pro-image-preview` | Nano Banana Pro |
| `gemini-2.5-flash-image` | Nano Banana |
````

## File: docs/en/models/glm.mdx
````markdown
---
title: GLM
description: Zhipu AI GLM model configuration (Text / Image Understanding / Speech-to-Text / Embedding)
---

Zhipu AI supports text chat, image understanding, speech-to-text (ASR), and embedding. A single `zhipu_ai_api_key` enables all capabilities.

<Tip>
  All capabilities below can be configured in one place via the "Model Management" page in the Web Console, with no need to manually edit the configuration file.
</Tip>

## Text Chat

```json
{
  "model": "glm-5.1",
  "zhipu_ai_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `model` | Can be `glm-5.1`, `glm-5-turbo`, `glm-5`, `glm-4.7`, `glm-4-plus`, `glm-4-flash`, `glm-4-air`, etc. See [model codes](https://bigmodel.cn/dev/api/normal-model/glm-4) |
| `zhipu_ai_api_key` | Create one in the [Zhipu AI Console](https://www.bigmodel.cn/usercenter/proj-mgmt/apikeys) |
| `zhipu_ai_api_base` | Optional, defaults to `https://open.bigmodel.cn/api/paas/v4` |

## Image Understanding

Zhipu's chat models (`glm-5.1`, `glm-5-turbo`, etc.) do not support vision; vision calls are uniformly routed to `glm-5v-turbo`. Once `zhipu_ai_api_key` is configured, the Agent's Vision tool automatically uses this model, with no need to specify it explicitly in the configuration file.

## Speech-to-Text (ASR)

```json
{
  "voice_to_text": "zhipu",
  "voice_to_text_model": "glm-asr-2512"
}
```

| Parameter | Description |
| --- | --- |
| `voice_to_text` | Set to `zhipu` to enable Zhipu ASR |
| `voice_to_text_model` | Optional, defaults to `glm-asr-2512` |

Credentials are automatically reused from `zhipu_ai_api_key`. Audio files should be smaller than 25MB; oversized files may be rejected by the server.

## Embedding

```json
{
  "embedding_provider": "zhipu",
  "embedding_model": "embedding-3"
}
```

Available models: `embedding-3`, `embedding-2`. After changing the embedding, run `/memory rebuild-index` to rebuild the index.
````

## File: docs/en/models/index.mdx
````markdown
---
title: Models Overview
description: Model vendors supported by CowAgent and their capability matrix
---

CowAgent supports a wide range of mainstream large language models. Model interfaces live under the project's `models/` directory. Beyond text chat, several vendors also provide vision understanding, image generation, speech-to-text, text-to-speech, and embeddings — all of which can be invoked on demand in the Agent flow.

## Capability Matrix

A snapshot of each vendor's capabilities. "Text" refers to the main chat model; the remaining columns show which Agent capabilities the vendor can power.

| Vendor | Representative Models | Text | Vision | Image Gen | STT | TTS | Embedding |
| --- | --- | :-: | :-: | :-: | :-: | :-: | :-: |
| [DeepSeek](/en/models/deepseek) | deepseek-v4-flash / pro | ✅ | | | | | |
| [MiniMax](/en/models/minimax) | MiniMax-M2.7 | ✅ | ✅ | ✅ | | ✅ | |
| [Claude](/en/models/claude) | claude-opus-4-7 | ✅ | ✅ | | | | |
| [Gemini](/en/models/gemini) | gemini-3.5-flash | ✅ | ✅ | ✅ | | | |
| [OpenAI](/en/models/openai) | gpt-5.5, o-series | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [GLM](/en/models/glm) | glm-5.1, glm-5v-turbo | ✅ | ✅ | | ✅ | | ✅ |
| [Qwen](/en/models/qwen) | qwen3.7-max | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Doubao](/en/models/doubao) | doubao-seed-2.0 series | ✅ | ✅ | ✅ | | | ✅ |
| [Kimi](/en/models/kimi) | kimi-k2.6 | ✅ | ✅ | | | | |
| [ERNIE](/en/models/qianfan) | ernie-5.1 | ✅ | ✅ | | | | |
| [MiMo](/en/models/mimo) | mimo-v2.5-pro / v2.5 | ✅ | ✅ | | | ✅ | |
| [LinkAI](/en/models/linkai) | 100+ models from multiple vendors | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Custom](/en/models/custom) | Local models / third-party proxies | ✅ | | | | | |

<Tip>
  Every capability in the Web console (Vision / Image / STT / TTS / Embedding / Web Search) can be configured independently with its own vendor and model — there is no forced binding between them.
</Tip>

## How to Configure

**Option 1 (recommended):** Manage models and capabilities online via the [Web console](/en/channels/web), with no need to edit the configuration file:

<img width="900" src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/web-console-models-config.png" />

**Option 2:** Edit `config.json` manually and fill in the model name and API key for the selected vendor. Every model also supports OpenAI-compatible access — just set `bot_type` to `openai` and configure `open_ai_api_base` and `open_ai_api_key`.
````

## File: docs/en/models/kimi.mdx
````markdown
---
title: Kimi
description: Kimi (Moonshot) model configuration (Text Chat + Image Understanding)
---

Kimi is provided by Moonshot and supports both text chat and image understanding. The `kimi-k2.x` series natively supports vision.

<Tip>
  All capabilities below can be configured in one place via the "Model Management" page in the Web Console, with no need to manually edit the configuration file.
</Tip>

## Text Chat

```json
{
  "model": "kimi-k2.6",
  "moonshot_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `model` | Can be `kimi-k2.6`, `kimi-k2.5`, `kimi-k2`, `moonshot-v1-8k`, `moonshot-v1-32k`, `moonshot-v1-128k` |
| `moonshot_api_key` | Create one in the [Moonshot Console](https://platform.moonshot.cn/console/api-keys) |
| `moonshot_base_url` | Optional, defaults to `https://api.moonshot.cn/v1` |

## Image Understanding

Once `moonshot_api_key` is configured, the Agent's Vision tool automatically uses `kimi-k2.6` to recognize images, with no extra setup required.

To manually specify a Vision model:

```json
{
  "tools": {
    "vision": {
      "model": "kimi-k2.6"
    }
  }
}
```
````

## File: docs/en/models/linkai.mdx
````markdown
---
title: LinkAI
description: Access text, vision, image, speech, and embedding capabilities through the LinkAI platform
---

A single `linkai_api_key` gives you access to all capabilities of mainstream vendors such as OpenAI, Claude, Gemini, DeepSeek, MiniMax, Qwen, Kimi, and Doubao.

<Tip>
  All capabilities below can be configured in one place via the "Model Management" page in the Web Console, with no need to manually edit the configuration file.
</Tip>

## Text Chat

```json
{
  "use_linkai": true,
  "linkai_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `use_linkai` | Set to `true` to enable |
| `linkai_api_key` | Create one in the [Console](https://link-ai.tech/console/interface) |
| `model` | Can be any code from the [model list](https://link-ai.tech/console/models) |

See [Model Service](https://link-ai.tech/console/models) for more.

## Image Understanding

Once configured, the Agent's Vision tool automatically calls multimodal models via the gateway, with no extra setup required. To manually specify a Vision model:

```json
{
  "tools": {
    "vision": {
      "model": "gpt-5.4-mini"
    }
  }
}
```

Available models: `gpt-4.1-mini`, `gpt-5.4-mini`, `qwen3.6-plus`, `doubao-seed-2-0-pro-260215`, `kimi-k2.6`, `claude-sonnet-4-6`, `gemini-3.1-flash-lite-preview`, etc.

## Image Generation

```json
{
  "skills": {
    "image-generation": {
      "model": "gpt-image-2"
    }
  }
}
```

| Model ID | Alias |
| --- | --- |
| `gpt-image-2` | OpenAI |
| `gemini-3.1-flash-image-preview` | Nano Banana 2 |
| `gemini-3-pro-image-preview` | Nano Banana Pro |
| `seedream-5.0-lite` | ByteDance Doubao Seedream |

## Speech-to-Text (ASR)

```json
{
  "voice_to_text": "linkai"
}
```

ASR uses Whisper by default; credentials are automatically reused from `linkai_api_key`.

## Text-to-Speech (TTS)

The TTS gateway supports multiple underlying engines. The engine is selected by `text_to_voice_model`, and the available voices change with the engine.

```json
{
  "text_to_voice": "linkai",
  "text_to_voice_model": "doubao",
  "tts_voice_id": "BV001_streaming"
}
```

| `text_to_voice_model` | Engine |
| --- | --- |
| `tts-1` | OpenAI · Multi-language (voices like `alloy` / `nova` / `echo`, etc.) |
| `doubao` | ByteDance Doubao · Rich Chinese voices |
| `baidu` | Baidu · Chinese broadcaster voices |

Voices differ by engine; we recommend selecting them visually in the Web Console under "Model Management → Text-to-Speech".

## Embedding

```json
{
  "embedding_provider": "linkai",
  "embedding_model": "text-embedding-3-small"
}
```

The default model is `text-embedding-3-small` (OpenAI-compatible). After changing the embedding, run `/memory rebuild-index` to rebuild the index.
````

## File: docs/en/models/mimo.mdx
````markdown
---
title: MiMo
description: Xiaomi MiMo model configuration (Text Chat + Image Understanding + Text-to-Speech)
---

Xiaomi MiMo is a native omni-modal large model. A single `mimo_api_key` enables text chat, image understanding, and text-to-speech all at once.

<Tip>
  All capabilities below can be configured in one place via the "Model Management" page in the Web Console — no need to manually edit the configuration file.
</Tip>

## Text Chat

```json
{
  "model": "mimo-v2.5-pro",
  "mimo_api_key": "YOUR_API_KEY",
  "mimo_api_base": "https://api.xiaomimimo.com/v1"
}
```

| Parameter | Description |
| --- | --- |
| `model` | Default recommendation: `mimo-v2.5-pro`; `mimo-v2.5` is also supported |
| `mimo_api_key` | Create one in the [MiMo Open Platform](https://platform.xiaomimimo.com/console/api-keys) |
| `mimo_api_base` | Optional, defaults to `https://api.xiaomimimo.com/v1` |

### Model Selection

| Model | Use Case |
| --- | --- |
| `mimo-v2.5-pro` | Flagship: native omni-modal + Agent capability, up to 1M tokens context |
| `mimo-v2.5` | General-purpose, native omni-modal (text / image / video / audio) |

## Thinking Mode

The MiMo V2.5 series enables "thinking mode" by default: the model emits `reasoning_content` (chain-of-thought) before the final answer, improving performance on complex tasks.

Use the global `enable_thinking` flag to toggle visibility (also switchable from the Web Console settings):

```json
{
  "enable_thinking": true
}
```

## Image Understanding

Once `mimo_api_key` is configured, the Agent's Vision tool can automatically use MiMo's vision models:

- When the main model itself is multimodal (`mimo-v2.5-pro` / `mimo-v2.5`), images are handled directly by the main model with no extra setup.
- When the main model belongs to another vendor, the Vision tool falls back to `mimo-v2.5-pro` in order.

To force a specific Vision model, set it explicitly in the configuration:

```json
{
  "tools": {
    "vision": {
      "provider": "mimo",
      "model": "mimo-v2.5-pro"
    }
  }
}
```

## Text-to-Speech (TTS)

```json
{
  "text_to_voice": "mimo",
  "text_to_voice_model": "mimo-v2.5-tts",
  "tts_voice_id": "冰糖"
}
```

| Parameter | Description |
| --- | --- |
| `text_to_voice_model` | Currently only `mimo-v2.5-tts` (preset voices + singing mode) |
| `tts_voice_id` | Preset voice name (Chinese voice IDs use the Chinese name directly) |

### Preset Voices

| Voice ID | Description |
| --- | --- |
| `Mia` | English · Female |
| `Chloe` | English · Female |
| `Milo` | English · Male |
| `Dean` | English · Male |
| `冰糖` | Chinese · Female (default) |
| `茉莉` | Chinese · Female |
| `苏打` | Chinese · Male |
| `白桦` | Chinese · Male |


You can also pick a voice visually from the Web Console under "Model Management → Text-to-Speech".

### Style Control

MiMo TTS supports embedding **audio tags** in the synthesis text to control emotion, tone, dialect, persona, and even singing. Tags must appear in the **text that will be synthesized to speech (i.e. the Agent's reply)**, with the overall style tag placed at the very beginning:

```
(style)content-to-synthesize
```

Half-width `()`, full-width `（）`, and `[]` brackets are all accepted. Both Chinese and English style descriptors work — pick whichever language expresses the timbre most precisely. Common examples:

| Category | Example tags |
| --- | --- |
| Basic emotions | `happy` `sad` `angry` `fear` `surprised` `excited` `aggrieved` `calm` `indifferent` |
| Compound emotions | `wistful` `relieved` `helpless` `guilty` `at ease` `uneasy` `touched` |
| Overall tone | `gentle` `aloof` `lively` `serious` `languid` `playful` `deep` `sharp` `cutting` |
| Voice character | `magnetic` `mellow` `bright` `ethereal` `childlike` `aged` `sweet` `husky` |
| Persona | `squeaky` `mature lady` `young boy` `uncle` `Taiwanese accent` |
| Dialect | `Northeastern` `Sichuan` `Henan` `Cantonese` |
| Role-play | `Sun Wukong` `Lin Daiyu` |
| Singing | `sing` / `singing` |

Examples:

- `(magnetic)The night is deep, and the city is still breathing.`
- `(gentle)Take a breath. You've got this.`
- `(serious)This is the final warning before the system reboots.`
- `(singing)Oh, when the saints go marching in…`

You can also insert fine-grained audio tags at any position in the text to control breathing, laughter, pauses, etc. For example:

```
(nervous, deep breath) Phew… stay calm, stay calm. (faster pace) I've rehearsed this intro fifty times, it'll be fine.
```

See the [MiMo speech synthesis documentation](https://platform.xiaomimimo.com/docs/zh-CN/usage-guide/speech-synthesis-v2.5) for the full tag list.

<Tip>
  When CowAgent calls TTS, the Agent's reply text (including any `(...)` tags) is forwarded directly to MiMo for synthesis. Tell the model in its persona / system prompt to "prefix replies with a `(style)` tag to control the tone", and IM channels (WeChat / Feishu / DingTalk / WeCom) will play voice replies with the corresponding emotion, dialect, or even singing.
</Tip>
````

## File: docs/en/models/minimax.mdx
````markdown
---
title: MiniMax
description: MiniMax model configuration (Text / Image Understanding / Image Generation / Text-to-Speech)
---

MiniMax supports text chat, image understanding, image generation, and text-to-speech. A single `minimax_api_key` enables all capabilities.

<Tip>
  All capabilities below can be configured in one place via the "Model Management" page in the Web Console, with no need to manually edit the configuration file.
</Tip>

## Text Chat

```json
{
  "model": "MiniMax-M2.7",
  "minimax_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `model` | Can be `MiniMax-M2.7`, `MiniMax-M2.7-highspeed`, `MiniMax-M2.5`, `MiniMax-M2.1`, `MiniMax-M2.1-lightning`, `MiniMax-M2`, etc. |
| `minimax_api_key` | Create one in the [MiniMax Console](https://platform.minimaxi.com/user-center/basic-information/interface-key) |

## Image Understanding

MiniMax's M2.x chat models do not support vision natively; vision calls are uniformly routed to `MiniMax-Text-01`. Once `minimax_api_key` is configured, the Agent's Vision tool automatically uses this model, with no need to specify it explicitly in the configuration file.

## Image Generation

```json
{
  "skills": {
    "image-generation": {
      "model": "image-01"
    }
  }
}
```

Available models: `image-01`.

## Text-to-Speech (TTS)

```json
{
  "text_to_voice": "minimax",
  "text_to_voice_model": "speech-2.8-hd",
  "tts_voice_id": "female-shaonv"
}
```

| Parameter | Description |
| --- | --- |
| `text_to_voice_model` | `speech-2.8-hd` (emotional rendering, natural sound), `speech-2.8-turbo` (ultra-fast), `speech-2.6-hd`, `speech-2.6-turbo` |
| `tts_voice_id` | Voice ID; supports Chinese / Cantonese / English / Japanese / Korean — 70+ voices in total |

Common voice examples:

| Voice ID | Description |
| --- | --- |
| `female-shaonv` | Chinese · Young Girl (Female) |
| `female-yujie` | Chinese · Mature Lady (Female) |
| `female-tianmei` | Chinese · Sweet Female (Female) |
| `male-qn-jingying` | Chinese · Elite Youth (Male) |
| `male-qn-badao` | Chinese · Dominant Youth (Male) |
| `Cantonese_GentleLady` | Cantonese · Gentle Female Voice |
| `English_Graceful_Lady` | English · Graceful Lady |

For the full voice list (70+ voices across Chinese / Cantonese / English / Japanese / Korean), see the [system voice list](https://platform.minimaxi.com/docs/faq/system-voice-id), or select visually in the Web Console under "Model Management → Text-to-Speech".
````

## File: docs/en/models/openai.mdx
````markdown
---
title: OpenAI
description: OpenAI model configuration (Text / Vision / Image / Speech / Embedding)
---

OpenAI offers the most complete coverage and can simultaneously serve text chat, vision understanding, image generation, speech-to-text (ASR), text-to-speech (TTS), and embedding. A single `open_ai_api_key` lets the Agent use all of these capabilities.

<Tip>
  All capabilities below can be configured in one place via the "Model Management" page in the Web Console, with no need to manually edit the configuration file.
</Tip>


## Text Chat

```json
{
  "model": "gpt-5.5",
  "open_ai_api_key": "YOUR_API_KEY",
  "open_ai_api_base": "https://api.openai.com/v1"
}
```

| Parameter | Description |
| --- | --- |
| `model` | Same as OpenAI's [model parameter](https://platform.openai.com/docs/models); supports `gpt-5.5`, `gpt-5.4`, `gpt-5.4-mini`, `gpt-5.4-nano`, the `gpt-5` series, `gpt-4.1`, the o-series, etc. Agent mode defaults to `gpt-5.5`; use `gpt-5.4` for better cost-efficiency |
| `open_ai_api_key` | Create one on the [OpenAI Platform](https://platform.openai.com/api-keys) |
| `open_ai_api_base` | Optional; change it to access a third-party proxy |
| `bot_type` | Not required when using OpenAI's official models; set to `openai` when accessing other vendors via the compatible protocol |

## Image Understanding

OpenAI models like `gpt-5.5`, `gpt-5.4`, `gpt-4o`, and `gpt-4.1` natively support vision. Once `open_ai_api_key` is configured, the Agent's Vision tool automatically uses the main model to recognize images. If the main model does not support vision or you want to specify it explicitly, set it in the configuration file:

```json
{
  "tools": {
    "vision": {
      "model": "gpt-5.4-mini"
    }
  }
}
```

Supported Vision models: `gpt-5.5`, `gpt-5.4`, `gpt-5.4-mini`, `gpt-5.4-nano`, `gpt-5`, `gpt-4.1`, `gpt-4.1-mini`, `gpt-4o`.

## Image Generation

Specify the image generation model in the configuration file; the Agent automatically routes image generation skill calls to OpenAI:

```json
{
  "skills": {
    "image-generation": {
      "model": "gpt-image-2"
    }
  }
}
```

Supported image generation models: `gpt-image-2`, `gpt-image-1`.

## Speech-to-Text (ASR)

```json
{
  "voice_to_text": "openai",
  "voice_to_text_model": "gpt-4o-mini-transcribe"
}
```

| Parameter | Description |
| --- | --- |
| `voice_to_text` | Set to `openai` to enable OpenAI speech-to-text |
| `voice_to_text_model` | Optional, defaults to `gpt-4o-mini-transcribe`; can also be `gpt-4o-transcribe`, `whisper-1` |

Credentials are automatically reused from `open_ai_api_key`.

## Text-to-Speech (TTS)

```json
{
  "text_to_voice": "openai",
  "text_to_voice_model": "tts-1",
  "tts_voice_id": "alloy"
}
```

| Parameter | Description |
| --- | --- |
| `text_to_voice_model` | `tts-1`, `tts-1-hd`, `gpt-4o-mini-tts` |
| `tts_voice_id` | Voices: `alloy`, `echo`, `fable`, `onyx`, `nova`, `shimmer`, `ash`, `ballad`, `coral`, `sage`, `verse` |

## Embedding

```json
{
  "embedding_provider": "openai",
  "embedding_model": "text-embedding-3-small"
}
```

Available models: `text-embedding-3-small`, `text-embedding-3-large`, `text-embedding-ada-002`. After changing the embedding, run `/memory rebuild-index` to rebuild the index.
````

## File: docs/en/models/qianfan.mdx
````markdown
---
title: ERNIE
description: ERNIE model configuration (Baidu Qianfan)
---

Option 1: Native integration (recommended):

```json
{
  "model": "ernie-5.1",
  "qianfan_api_key": "",
  "qianfan_api_base": "https://qianfan.baidubce.com/v2"
}
```

| Parameter | Description |
| --- | --- |
| `model` | Default recommendation: `ernie-5.1`; also supports `ernie-5.0`, `ernie-x1.1`, `ernie-4.5-turbo-128k`, `ernie-4.5-turbo-32k` |
| `qianfan_api_key` | Qianfan API key, usually starting with `bce-v3/` |
| `qianfan_api_base` | Optional, defaults to `https://qianfan.baidubce.com/v2` |

## Model Selection

| Model | Use Case |
| --- | --- |
| `ernie-5.1` | Default recommendation; latest ERNIE flagship with the strongest overall capability |
| `ernie-5.0` | Previous-generation flagship with excellent overall capability |
| `ernie-x1.1` | Deep-thinking reasoning model with lower hallucination and stronger instruction following / tool calling |
| `ernie-4.5-turbo-128k` | Long-context and general chat |
| `ernie-4.5-turbo-32k` | General chat with a balanced context window and cost |

## Vision tool

Once `qianfan_api_key` is configured, Agent mode can auto-discover Qianfan for the Vision tool:

- When the main model itself is multimodal (e.g. `ernie-5.1`, `ernie-5.0`, `ernie-x1.1`, `ernie-4.5-turbo-vl`), images are handled directly by the main model with no extra setup.
- When the main model is text-only (e.g. `ernie-4.5-turbo-128k`), the Vision tool automatically falls back to `ernie-4.5-turbo-vl`.

To force a specific Vision model, set it explicitly in `config.json`:

```json
{
  "tools": {
    "vision": {
      "model": "ernie-4.5-turbo-vl"
    }
  }
}
```

Option 2: OpenAI-compatible configuration:

```json
{
  "model": "ernie-5.1",
  "bot_type": "openai",
  "open_ai_api_key": "",
  "open_ai_api_base": "https://qianfan.baidubce.com/v2"
}
```

<Tip>
  Prefer `qianfan_api_key` for new configurations. Existing `wenxin`, `wenxin-4`, `baidu_wenxin_api_key`, and `baidu_wenxin_secret_key` configurations remain supported.
</Tip>
````

## File: docs/en/models/qwen.mdx
````markdown
---
title: Qwen
description: Qwen model configuration (Text / Image Understanding / Image Generation / Speech-to-Text / Text-to-Speech / Embedding)
---

Qwen (Alibaba DashScope / Bailian) is one of the most fully-featured vendors. Text, image understanding, image generation, speech-to-text, text-to-speech, and embedding can all be enabled with a single `dashscope_api_key`.

<Tip>
  All capabilities below can be configured in one place via the "Model Management" page in the Web Console, with no need to manually edit the configuration file.
</Tip>

## Text Chat

```json
{
  "model": "qwen3.6-plus",
  "dashscope_api_key": "YOUR_API_KEY"
}
```

| Parameter | Description |
| --- | --- |
| `model` | Can be `qwen3.6-plus`, `qwen3.7-max`, `qwen3.5-plus`, `qwen3-max`, `qwen-max`, `qwen-plus`, `qwen-turbo`, `qwq-plus`, etc. |
| `dashscope_api_key` | Create one in the [Bailian Console](https://bailian.console.aliyun.com/?tab=model#/api-key); see the [official docs](https://bailian.console.aliyun.com/?tab=api#/api) |

## Image Understanding

Once `dashscope_api_key` is configured, the Agent's Vision tool automatically calls Qwen's vision models to recognize images. Models like `qwen3-max` / `qwen3.5-plus` / `qwen3.6-plus` are already multimodal; if the main model is text-only (e.g. `qwen-turbo`), it automatically falls back to `qwen-vl-max`.

To manually specify a Vision model:

```json
{
  "tools": {
    "vision": {
      "model": "qwen3.6-plus"
    }
  }
}
```

Supported models: `qwen3.6-plus`, `qwen3.5-plus`, `qwen3-max`.

## Image Generation

```json
{
  "skills": {
    "image-generation": {
      "model": "qwen-image-2.0"
    }
  }
}
```

Available models: `qwen-image-2.0`, `qwen-image-2.0-pro`.

## Speech-to-Text (ASR)

```json
{
  "voice_to_text": "dashscope",
  "voice_to_text_model": "qwen3-asr-flash"
}
```

| Parameter | Description |
| --- | --- |
| `voice_to_text` | Set to `dashscope` to enable Qwen ASR |
| `voice_to_text_model` | Optional, defaults to `qwen3-asr-flash` |

Credentials are automatically reused from `dashscope_api_key`. A single audio segment should be smaller than 10MB and no longer than 300 seconds.

## Text-to-Speech (TTS)

```json
{
  "text_to_voice": "dashscope",
  "text_to_voice_model": "qwen3-tts-flash",
  "tts_voice_id": "Cherry"
}
```

| Parameter | Description |
| --- | --- |
| `text_to_voice_model` | Optional, defaults to `qwen3-tts-flash`; covers Mandarin, dialects, and major foreign languages |
| `tts_voice_id` | Voice ID; see the common list below |

Common voice examples:

| Voice ID | Description |
| --- | --- |
| `Cherry` | Qianyue · Sunny Female Voice |
| `Serena` | Suyao · Gentle Female Voice |
| `Ethan` | Chenxu · Sunny Male Voice |
| `Chelsie` | Qianxue · Anime Girl |
| `Dylan` | Beijing Dialect · Xiaodong |
| `Rocky` | Cantonese · Aqiang |
| `Sunny` | Sichuan Dialect · Qing'er |

The full voice list (Mandarin / regional dialects / bilingual, etc.) can be selected visually in the Web Console under "Model Management → Text-to-Speech".

## Embedding

```json
{
  "embedding_provider": "dashscope",
  "embedding_model": "text-embedding-v4"
}
```

The default model is `text-embedding-v4`. After changing the embedding, run `/memory rebuild-index` to rebuild the index.
````

## File: docs/en/releases/overview.mdx
````markdown
---
title: Changelog
description: CowAgent version history
---

| Version | Date | Description |
| --- | --- | --- |
| [2.0.9](/en/releases/v2.0.9) | 2026.05.22 | Model management console, MCP protocol support, browser persistent login, new models (gpt-5.5, gemini-3.5-flash, qwen3.7-max, etc.), deployment hardening |
| [2.0.8](/en/releases/v2.0.8) | 2026.05.06 | Major Feishu channel upgrade (voice, streaming and Markdown, one-click QR-scan setup), DeepSeek V4 and Baidu models, scheduler tool enhancements |
| [2.0.7](/en/releases/v2.0.7) | 2026.04.22 | Image Generation Skill (6-provider auto-routing), new models (Kimi K2.6, Claude Opus 4.7, GLM 5.1), knowledge base and Web Console improvements |
| [2.0.6](/en/releases/v2.0.6) | 2026.04.14 | Project rename, Knowledge Base system, Deep Dream Memory Distillation, Smart Context Compression, Web Console multi-session and various improvements |
| [2.0.5](/en/releases/v2.0.5) | 2026.04.01 | Cow CLI, Skill Hub open source, Browser tool, WeCom Bot QR scan, and more |
| [2.0.4](/en/releases/v2.0.4) | 2026.03.22 | Personal WeChat channel, new model support, Japanese docs, script refactoring and bug fixes |
| [2.0.3](/en/releases/v2.0.3) | 2026.03.18 | WeCom Smart Bot and QQ channels, Coding Plan support, multiple new models, Web file processing, memory system upgrade |
| [2.0.2](/en/releases/v2.0.2) | 2026.02.27 | Web Console upgrade, multi-channel concurrency, session persistence |
| [2.0.1](/en/releases/v2.0.1) | 2026.02.13 | Built-in Web Search tool, smart context management, multiple fixes |
| [2.0.0](/en/releases/v2.0.0) | 2026.02.03 | Full upgrade to AI super assistant |
| 1.7.6 | 2025.05.23 | Web Channel optimization, AgentMesh plugin |
| 1.7.5 | 2025.04.11 | DeepSeek model |
| 1.7.4 | 2024.12.13 | Gemini 2.0 model, Web Channel |
| 1.7.3 | 2024.10.31 | Stability improvements, database features |
| 1.7.2 | 2024.09.26 | One-click install script, o1 model |
| 1.7.0 | 2024.08.02 | iFlytek 4.0 model, knowledge base references |
| 1.6.9 | 2024.07.19 | gpt-4o-mini, Alibaba voice recognition |
| 1.6.8 | 2024.07.05 | Claude 3.5, Gemini 1.5 Pro |
| 1.6.0 | 2024.04.26 | Kimi integration, gpt-4-turbo upgrade |
| 1.5.8 | 2024.03.26 | GLM-4, Claude-3, edge-tts |
| 1.5.2 | 2023.11.10 | Feishu channel, image recognition chat |
| 1.5.0 | 2023.11.10 | gpt-4-turbo, dall-e-3, tts multimodal |
| 1.0.0 | 2022.12.12 | Project created, first ChatGPT integration |

See [GitHub Releases](https://github.com/zhayujie/CowAgent/releases) for full history.
````

## File: docs/en/releases/v2.0.0.mdx
````markdown
---
title: v2.0.0
description: CowAgent 2.0 - Full upgrade from chatbot to AI super assistant
---

CowAgent 2.0 is a comprehensive upgrade from a chatbot to an **AI super assistant** — capable of autonomous thinking and task planning, long-term memory, operating computers, and creating and executing skills.

**Release Date**: 2026.02.03 | [GitHub Release](https://github.com/zhayujie/CowAgent/releases/tag/2.0.0)

## Key Updates

### Agent Core

- **Complex Task Planning**: Autonomous planning with multi-turn reasoning
- **Long-term Memory**: Persistent memory with keyword and vector search
- **Built-in Tools**: 10+ tools including file ops, Bash, browser, scheduler
- **Web search**: Built-in `web_search` tool, supports multiple search engines, configure corresponding API key to use
- **Skills System**: Skill engine with built-in and custom skill support
- **Security & Cost**: Secret management, prompt controls, token limits

### Other

- **Channels**: Feishu/DingTalk WebSocket support, image/file messages
- **Models**: claude-sonnet-4-5, gemini-3-pro-preview, glm-4.7, MiniMax-M2.1, qwen3-max
- **Deployment**: One-click install, configure, run, and management script

## Long-term Memory

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260203000455.png" width="800" />
</Frame>

## Task Planning & Tools

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202181130.png" width="800" />
</Frame>

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260203121008.png" width="800" />
</Frame>

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202195402.png" width="800" />
</Frame>

## Skills System

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202202247.png" width="800" />
</Frame>

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202213219.png" width="800" />
</Frame>

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202234350.png" width="750" />
</Frame>

## Contributing

Welcome to [submit feedback](https://github.com/zhayujie/CowAgent/issues) and [contribute code](https://github.com/zhayujie/CowAgent/pulls).
````

## File: docs/en/releases/v2.0.1.mdx
````markdown
---
title: v2.0.1
description: CowAgent 2.0.1 - Built-in Web Search, smart context management, multiple fixes
---

**Release Date**: 2026.02.27 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.0..2.0.1)

## New Features

- **Built-in Web Search tool**: Integrated web search as a built-in Agent tool, reducing decision cost ([4f0ea5d](https://github.com/zhayujie/CowAgent/commit/4f0ea5d7568d61db91ff69c91c429e785fd1b1c2))
- **Claude Opus 4.6 model support**: Added support for Claude Opus 4.6 model ([#2661](https://github.com/zhayujie/CowAgent/pull/2661))
- **WeCom image recognition**: Support image message recognition in WeCom channel ([#2667](https://github.com/zhayujie/CowAgent/pull/2667))

## Improvements

- **Smart context management**: Resolved chat context overflow with intelligent context trimming strategy to prevent token limits ([cea7fb7](https://github.com/zhayujie/CowAgent/commit/cea7fb7490c53454602bf05955a0e9f059bcf0fd), [8acf2db](https://github.com/zhayujie/CowAgent/commit/8acf2dbdfe713b84ad74b761b7f86674b1c1904d)) [#2663](https://github.com/zhayujie/CowAgent/issues/2663)
- **Runtime info dynamic update**: Automatic update of timestamps and other runtime info in system prompts via dynamic functions ([#2655](https://github.com/zhayujie/CowAgent/pull/2655), [#2657](https://github.com/zhayujie/CowAgent/pull/2657))
- **Skill prompt optimization**: Improved Skill system prompt generation, simplified tool descriptions for better Agent performance ([6c21833](https://github.com/zhayujie/CowAgent/commit/6c218331b1f1208ea8be6bf226936d3b556ade3e))
- **GLM custom API Base URL**: Support custom API Base URL for GLM models ([#2660](https://github.com/zhayujie/CowAgent/pull/2660))
- **Startup script optimization**: Improved `run.sh` script interaction and configuration flow ([#2656](https://github.com/zhayujie/CowAgent/pull/2656))
- **Decision step logging**: Added Agent decision step logging for debugging ([cb303e6](https://github.com/zhayujie/CowAgent/commit/cb303e6109c50c8dfef1f5e6c1ec47223bf3cd11))

## Bug Fixes

- **Scheduler memory loss**: Fixed memory loss caused by Scheduler dispatcher ([a77a874](https://github.com/zhayujie/CowAgent/commit/a77a8741b500a408c6f5c8868856fb4b018fe9db))
- **Empty tool calls & long results**: Fixed handling of empty tool calls and excessively long tool results ([0542700](https://github.com/zhayujie/CowAgent/commit/0542700f9091ebb08c1a56103b0f0f45f24aa621))
- **OpenAI Function Call**: Fixed function call compatibility with OpenAI models ([158c87a](https://github.com/zhayujie/CowAgent/commit/158c87ab8b05bae054cc1b4eacdbb64fc1062ba9))
- **Claude tool name field**: Removed extraneous tool name field from Claude model responses ([eec10cb](https://github.com/zhayujie/CowAgent/commit/eec10cb5db6a3d5bc12ef606606532237d2c5f6e))
- **MiniMax reasoning**: Optimized MiniMax model reasoning content handling, hidden thinking process output ([c72cda3](https://github.com/zhayujie/CowAgent/commit/c72cda33864bd1542012ee6e0a8bd8c6c88cb5ed), [72b1cac](https://github.com/zhayujie/CowAgent/commit/72b1cacea1ba0d1f3dedacbab2e088e98fd7e172))
- **GLM thinking process**: Hidden GLM model thinking process display ([72b1cac](https://github.com/zhayujie/CowAgent/commit/72b1cacea1ba0d1f3dedacbab2e088e98fd7e172))
- **Feishu connection & SSL**: Fixed Feishu channel SSL certificate errors and connection issues ([229b14b](https://github.com/zhayujie/CowAgent/commit/229b14b6fcabe7123d53cab1dea39f38dab26d6d), [8674421](https://github.com/zhayujie/CowAgent/commit/867442155e7f095b4f38b0856f8c1d8312b5fcf7))
- **model_type validation**: Fixed `AttributeError` caused by non-string `model_type` ([#2666](https://github.com/zhayujie/CowAgent/pull/2666))

## Platform Compatibility

- **Windows compatibility**: Fixed path handling, file encoding, and `os.getuid()` unavailability on Windows across multiple tool modules ([051ffd7](https://github.com/zhayujie/CowAgent/commit/051ffd78a372f71a967fd3259e37fe19131f83cf), [5264f7c](https://github.com/zhayujie/CowAgent/commit/5264f7ce18360ee4db5dcb4ebe67307977d40014))
````

## File: docs/en/releases/v2.0.2.mdx
````markdown
---
title: v2.0.2
description: CowAgent 2.0.2 - Web Console upgrade, multi-channel concurrency, session persistence
---

**Release Date**: 2026.02.27 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.1...master)

## Highlights

### 🖥️ Web Console Upgrade

The Web Console has been fully upgraded with streaming conversation output, visual display of tool execution and reasoning processes, and online management of **models, skills, memory, channels, and Agent configuration**.

#### Chat Interface

Supports streaming output with real-time display of the Agent's reasoning process and tool calls, providing intuitive observation of the Agent's decision-making:

<img width="850" src="https://cdn.link-ai.tech/doc/20260227180120.png" />

#### Model Management

Manage model configurations online without manually editing config files:

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173811.png" />

#### Skill Management

View and manage Agent skills (Skills) online:

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173403.png" />

#### Memory Management

View and manage Agent memory online:

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173349.png" />

#### Channel Management

Manage connected channels online with real-time connect/disconnect operations:

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173331.png" />

#### Scheduled Tasks

View and manage scheduled tasks online, including one-time tasks, fixed intervals, and Cron expressions:

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173704.png" />

#### Logs

View Agent runtime logs in real-time for monitoring and troubleshooting:

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173514.png" />

Related commits: [f1a1413](https://github.com/zhayujie/CowAgent/commit/f1a1413), [c0702c8](https://github.com/zhayujie/CowAgent/commit/c0702c8), [394853c](https://github.com/zhayujie/CowAgent/commit/394853c), [1c71c4e](https://github.com/zhayujie/CowAgent/commit/1c71c4e), [5e3eccb](https://github.com/zhayujie/CowAgent/commit/5e3eccb), [e1dc037](https://github.com/zhayujie/CowAgent/commit/e1dc037), [5edbf4c](https://github.com/zhayujie/CowAgent/commit/5edbf4c), [7d258b5](https://github.com/zhayujie/CowAgent/commit/7d258b5)

### 🔀 Multi-Channel Concurrency

Multiple channels (e.g., Feishu, DingTalk, WeCom, Web) can now run simultaneously, each in an independent thread without interference.

Configuration: Set multiple channels in `config.json` via `channel_type` separated by commas, or connect/disconnect channels in real-time from the Web Console's channel management page.

```json
{
  "channel_type": "web,feishu,dingtalk"
}
```

Related commits: [4694594](https://github.com/zhayujie/CowAgent/commit/4694594), [7cce224](https://github.com/zhayujie/CowAgent/commit/7cce224), [7d258b5](https://github.com/zhayujie/CowAgent/commit/7d258b5), [c9adddb](https://github.com/zhayujie/CowAgent/commit/c9adddb)

### 💾 Session Persistence

Session history is now persisted to a local SQLite database. Conversation context is automatically restored after service restarts. Historical conversations in the Web Console are also restored.

Related commits: [29bfbec](https://github.com/zhayujie/CowAgent/commit/29bfbec), [9917552](https://github.com/zhayujie/CowAgent/commit/9917552), [925d728](https://github.com/zhayujie/CowAgent/commit/925d728)

## New Models

- **Gemini 3.1 Pro Preview**: Added `gemini-3.1-pro-preview` model support ([52d7cad](https://github.com/zhayujie/CowAgent/commit/52d7cad))
- **Claude 4.6 Sonnet**: Added `claude-4.6-sonnet` model support ([52d7cad](https://github.com/zhayujie/CowAgent/commit/52d7cad))
- **Qwen3.5 Plus**: Added `qwen3.5-plus` model support ([e59a289](https://github.com/zhayujie/CowAgent/commit/e59a289))
- **MiniMax M2.5**: Added `Minimax-M2.5` model support ([48db538](https://github.com/zhayujie/CowAgent/commit/48db538))
- **GLM-5**: Added `glm-5` model support ([48db538](https://github.com/zhayujie/CowAgent/commit/48db538))
- **Kimi K2.5**: Added `kimi-k2.5` model support ([48db538](https://github.com/zhayujie/CowAgent/commit/48db538))
- **Doubao 2.0 Code**: Added `doubao-2.0-code` coding-specialized model ([ab28ee5](https://github.com/zhayujie/CowAgent/commit/ab28ee5))
- **DashScope Models**: Added Alibaba Cloud DashScope model name support ([ce58f23](https://github.com/zhayujie/CowAgent/commit/ce58f23))

## Website & Documentation

- **Official Website**: [cowagent.ai](https://cowagent.ai/)
- **Documentation**: [docs.cowagent.ai](https://docs.cowagent.ai/)

## Bug Fixes

- **Gemini DingTalk image recognition**: Fixed Gemini unable to process image markers in DingTalk channel ([05a3304](https://github.com/zhayujie/CowAgent/commit/05a3304)) ([#2670](https://github.com/zhayujie/CowAgent/pull/2670)) Thanks [@SgtPepper114](https://github.com/SgtPepper114)
- **Startup script dependencies**: Fixed dependency installation issue in `run.sh` script ([b6fc9fa](https://github.com/zhayujie/CowAgent/commit/b6fc9fa))
- **Bare except cleanup**: Replaced `bare except` with `except Exception` for better exception handling ([adca89b](https://github.com/zhayujie/CowAgent/commit/adca89b)) ([#2674](https://github.com/zhayujie/CowAgent/pull/2674)) Thanks [@haosenwang1018](https://github.com/haosenwang1018)
````

## File: docs/en/releases/v2.0.3.mdx
````markdown
---
title: v2.0.3
description: CowAgent 2.0.3 - WeCom Smart Bot and QQ channels, Web Console file handling, memory system upgrade
---

## 🔌 New Channels

### WeCom Smart Bot

Added the WeCom Smart Bot (`wecom_bot`) channel with streaming card output, support for receiving and replying to text and image messages, and full configuration through the Web Console.

Documentation: [WeCom Smart Bot](https://docs.cowagent.ai/en/channels/wecom-bot).

Related commits: [d4480b6](https://github.com/zhayujie/CowAgent/commit/d4480b6), [a42f31f](https://github.com/zhayujie/CowAgent/commit/a42f31f), [4ecd4df](https://github.com/zhayujie/CowAgent/commit/4ecd4df), [8b45d6c](https://github.com/zhayujie/CowAgent/commit/8b45d6c)

### QQ Channel

Added the QQ official bot (`qq`) channel with support for text and image messages in both private chats and group chats.

Documentation: [QQ Bot](https://docs.cowagent.ai/en/channels/qq).

Related commits: [005a0e1](https://github.com/zhayujie/CowAgent/commit/005a0e1), [a4d54f5](https://github.com/zhayujie/CowAgent/commit/a4d54f5)

## 🖥️ Web Console File Input and Processing

The Web Console chat UI now supports file and image uploads — files can be sent directly to the agent for processing. The Read tool gains parsing support for Office documents (Word, Excel, PPT).

Related commits: [30c6d9b](https://github.com/zhayujie/CowAgent/commit/30c6d9b)

## 🤖 New Models

- **GPT-5.4 Series**: Added `gpt-5.4`, `gpt-5.4-mini`, `gpt-5.4-nano` ([1623deb](https://github.com/zhayujie/CowAgent/commit/1623deb))
- **Gemini 3.1 Flash Lite Preview**: Added `gemini-3.1-flash-lite-preview` ([ba915f2](https://github.com/zhayujie/CowAgent/commit/ba915f2))

## 💰 Coding Plan Support

Added integration with vendor Coding Plan (monthly programming subscription) tiers via the unified OpenAI-compatible path. Supported vendors include Aliyun, MiniMax, GLM, Kimi, and Volcengine.

See [Coding Plan docs](https://docs.cowagent.ai/en/models/coding-plan) for detailed configuration.

## 🧠 Memory System Upgrade

Memory flush improvements:

- Use the LLM to summarize out-of-window conversations into compact daily memory entries
- Summarization runs asynchronously on a background thread, never blocking replies
- Smarter batch trimming policy reduces flush frequency
- Daily scheduled flush as a safety net for low-activity scenarios
- Fixed context-memory loss issues

Related commits: [022c13f](https://github.com/zhayujie/CowAgent/commit/022c13f), [c116235](https://github.com/zhayujie/CowAgent/commit/c116235)

## 🔧 Tool Refactoring

- **Image Vision**: Image recognition (Vision) is refactored from a Skill into a built-in Tool with a dedicated Vision Provider configuration, improving stability and maintainability ([a50fafa](https://github.com/zhayujie/CowAgent/commit/a50fafa), [3b8b562](https://github.com/zhayujie/CowAgent/commit/3b8b562))
- **Web Fetch**: Web fetch is refactored from a Skill into a built-in Tool with support for downloading and parsing remote documents (PDF, Word, Excel, PPT) ([ccb9030](https://github.com/zhayujie/CowAgent/commit/ccb9030), [fa61744](https://github.com/zhayujie/CowAgent/commit/fa61744))

## 🐳 Docker Deployment Improvements

- **Config Template Alignment**: `docker-compose.yml` env vars aligned with `config-template.json`, covering full model API key and Agent settings
- **Web Console Port Mapping**: Added `9899` port mapping so the Web Console is reachable in browser after Docker deployment
- **Hot Config Reload**: Bot API key and API base are now read at request time — changes from the Web Console take effect without restart
- **Workspace Persistence**: Added a `./cow` volume mount so agent workspace data (memories, persona, skills, etc.) persists across container rebuilds and upgrades

## ⚡ Performance Improvements

- **Faster Startup**: The Feishu channel imports its dependencies lazily, avoiding a 4–10s startup delay ([924dc79](https://github.com/zhayujie/CowAgent/commit/924dc79))
- **Channel Stability**: Improved channel connection stability and added env-var support for channel configuration ([f1c04bc](https://github.com/zhayujie/CowAgent/commit/f1c04bc), [46d97fd](https://github.com/zhayujie/CowAgent/commit/46d97fd))

## 🐛 Bug Fixes

- **bot_type Propagation**: Fixed `bot_type` propagation under Agent mode ([#2691](https://github.com/zhayujie/CowAgent/pull/2691)) Thanks [@Weikjssss](https://github.com/Weikjssss)
- **bot_type Resolution Priority**: Adjusted `bot_type` resolution priority under Agent mode ([#2692](https://github.com/zhayujie/CowAgent/pull/2692)) Thanks [@6vision](https://github.com/6vision)
- **Zhipu Config**: Fixed Zhipu `bot_type` naming, Web Console persistence, and regex escaping ([#2693](https://github.com/zhayujie/CowAgent/pull/2693)) Thanks [@6vision](https://github.com/6vision)
- **OpenAI-Compat Layer**: Unified error handling via the `openai_compat` layer ([#2688](https://github.com/zhayujie/CowAgent/pull/2688)) Thanks [@JasonOA888](https://github.com/JasonOA888)
- **OpenAI-Compat Migration**: Completed the `openai_compat` migration across all model bots ([#2689](https://github.com/zhayujie/CowAgent/pull/2689))
- **Gemini Tool Calling**: Fixed tool-call matching for Gemini ([eda82ba](https://github.com/zhayujie/CowAgent/commit/eda82ba))
- **Session Concurrency**: Fixed race conditions in concurrent session scenarios ([9879878](https://github.com/zhayujie/CowAgent/commit/9879878))
- **History Recovery**: Fixed incomplete history recovery — only user/assistant text messages are restored, tool calls are stripped ([b788a3d](https://github.com/zhayujie/CowAgent/commit/b788a3d), [a33ce97](https://github.com/zhayujie/CowAgent/commit/a33ce97))
- **Feishu Group Chat**: Removed the `bot_name` dependency for Feishu group chats ([b641bff](https://github.com/zhayujie/CowAgent/commit/b641bff))
- **Safari Compatibility**: Fixed an IME Enter key issue that mistakenly sent messages on Safari ([0687916](https://github.com/zhayujie/CowAgent/commit/0687916))
- **Windows Compatibility**: Fixed bash-style `$VAR` to `%VAR%` env-var conversion on Windows ([7c67513](https://github.com/zhayujie/CowAgent/commit/7c67513))
- **MiniMax Params**: Added a `max_tokens` cap for MiniMax models ([1767413](https://github.com/zhayujie/CowAgent/commit/1767413))
- **.gitignore**: Added Python directory ignore rules ([#2683](https://github.com/zhayujie/CowAgent/pull/2683)) Thanks [@pelioo](https://github.com/pelioo)
- **AGENT.md Proactive Evolution**: Improved the system prompt guidance around AGENT.md — instead of waiting for explicit user edits, the agent now proactively detects persona/style shifts in the conversation and updates AGENT.md accordingly

## 📦 Upgrade

Run `./run.sh update` for a one-click upgrade, or manually pull the latest code and restart. See [Upgrade Guide](https://docs.cowagent.ai/en/guide/upgrade) for details.

**Release Date**: 2026.03.18 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.2...2.0.3)
````

## File: docs/en/releases/v2.0.4.mdx
````markdown
---
title: v2.0.4
description: CowAgent 2.0.4 - Personal WeChat channel, new model support, Japanese docs, script refactoring and bug fixes
---

## 🔌 Personal WeChat Channel

Added personal WeChat (`weixin`) channel — the most important update in this release. Simply scan a QR code to connect CowAgent to your personal WeChat account, with support for:

- **Messaging**: Send and receive text, image, file, and video messages; receive voice messages
- **QR Code Login**: QR code displayed in terminal, scan with WeChat to log in; auto-refresh on expiry
- **Credential Persistence**: Login credentials saved to `~/.weixin_cow_credentials.json` automatically, no re-scan needed on restart
- **Session Auto-Reconnect**: Automatically clears expired credentials and re-initiates QR code login
- **Web Console Integration**: Add WeChat channel from the Web Console with synchronized QR code login flow
- **Docker & Script Support**: Both `run.sh` and `docker-compose.yml` now support the WeChat channel

Documentation: [WeChat Channel](https://docs.cowagent.ai/channels/weixin).

Related commits: [ce89869](https://github.com/zhayujie/CowAgent/commit/ce89869), [a483ec0](https://github.com/zhayujie/CowAgent/commit/a483ec0), [c1421e0](https://github.com/zhayujie/CowAgent/commit/c1421e0)

## 🤖 New Models

- **MiniMax-M2.7**: Added MiniMax-M2.7 model support
- **GLM-5-Turbo**: Added Zhipu glm-5-turbo model support

Related commits: [9192f6f](https://github.com/zhayujie/CowAgent/commit/9192f6f)

## 🔧 Script Refactoring

- **run.sh Refactoring**: Extracted shared logic and eliminated duplication, reducing from 600+ lines to 177 lines ([49d8707](https://github.com/zhayujie/CowAgent/commit/49d8707))
- **Executable Permission**: Fixed `run.sh` file permission issue ([652156e](https://github.com/zhayujie/CowAgent/commit/652156e))

## ⚡ Improvements

- **Unified Request Headers**: Added identification headers to external requests across Agent services (Chat, Embedding, Vision, WebSearch, etc.) ([b4e711f](https://github.com/zhayujie/CowAgent/commit/b4e711f))
- **Auto-Repair Messages**: Enhanced message protocol fault tolerance with automatic repair of malformed message sequences ([b8b57e3](https://github.com/zhayujie/CowAgent/commit/b8b57e3))

## 🌍 Japanese Documentation

Added complete Japanese documentation covering getting started guide, channel integration, model configuration and other major sections. Thanks [@Ikko Ashimine](https://github.com/ikoamu)

Related commits: [5487c0b](https://github.com/zhayujie/CowAgent/commit/5487c0b)

## 🐛 Bug Fixes

- **WeCom Bot Compatibility**: Fixed compatibility with older `websocket-client` versions, added unified WebSocket compatibility layer ([bc7f627](https://github.com/zhayujie/CowAgent/commit/bc7f627))
- **run.sh PID**: Fixed process PID retrieval error in `run.sh` ([9febb07](https://github.com/zhayujie/CowAgent/commit/9febb07))
- **Feishu Encoding**: Fixed message and log encoding issue in Feishu channel ([7d0e156](https://github.com/zhayujie/CowAgent/commit/7d0e156))
- **Feishu Config**: Removed redundant `feishu_bot_name` dependency in `run.sh` ([1b5be1b](https://github.com/zhayujie/CowAgent/commit/1b5be1b))

## 📦 Upgrade

Run `./run.sh update` for a one-click upgrade, or manually pull the latest code and restart. See [Upgrade Guide](https://docs.cowagent.ai/guide/upgrade) for details.

**Release Date**: 2026.03.22 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.3...master)
````

## File: docs/en/releases/v2.0.5.mdx
````markdown
---
title: v2.0.5
description: CowAgent 2.0.5 - Cow CLI, Skill Hub open source, Browser tool, WeCom Bot QR scan, and more
---

## 🖥️ Cow CLI

New CLI command system for managing CowAgent from terminal and chat:

- **Terminal commands**: Run `cow <command>` for `start`, `stop`, `restart`, `update`, `status`, `logs`, etc.
- **Chat commands**: Type `/<command>` in conversation for `/help`, `/status`, `/config`, `/skill`, `/context`, `/logs`, `/version`, etc.
- **Web console**: Type `/` in the input box to open a slash command menu, with arrow-key input history
- **Windows support**: New PowerShell script `scripts/run.ps1` with `cow` command support

Docs: [Command Overview](https://docs.cowagent.ai/en/cli)

<img src="https://cdn.link-ai.tech/doc/20260401114549.png" width="750" />

## 🧩 Cow Skill Hub Open Source

[Cow Skill Hub](https://skills.cowagent.ai) is now open source and live — browse, search, install, and publish AI Agent skills:

- **One-command install**: `/skill install <name>` in chat or `cow skill install <name>` in terminal
- **Multi-source**: Install from Skill Hub, GitHub, ClawHub, LinkAI, and more
- **Search**: `/skill search` and `/skill list --remote` to browse the hub
- **Publish**: Submit your own skills at [skills.cowagent.ai/submit](https://skills.cowagent.ai/submit)
- **Mirror**: Mirror acceleration for faster downloads in China

Open source repo: [cow-skill-hub](https://github.com/zhayujie/cow-skill-hub)

Docs: [Skill Hub](https://docs.cowagent.ai/en/skills/hub), [Install Skills](https://docs.cowagent.ai/en/skills/install)

<img src="https://cdn.link-ai.tech/doc/20260401110103.png" width="750" />

## 🌐 Browser Tool

New Browser tool — Agent can control a Chromium browser to visit and interact with web pages:

- **Navigation & interaction**: `navigate`, `click`, `fill`, `select`, `scroll`, `press`, etc.
- **Page snapshot**: Compact DOM snapshot for efficient page understanding, auto-snapshot after navigation
- **Screenshot**: Save page screenshots to workspace
- **JavaScript execution**: Run custom scripts on pages
- **CLI install**: `cow install-browser` for one-command setup
- **Docker support**: Browser install built into Docker image

Docs: [Browser Tool](https://docs.cowagent.ai/en/tools/browser)

<img src="https://cdn.link-ai.tech/doc/20260401115728.png" width="750" />

## 🤖 WeCom Bot QR Code Setup

WeCom Bot channel now supports QR code scan for one-click bot creation:

- **QR scan in Web console**: Select "Scan QR" mode, scan with WeCom to auto-create and connect a bot — no manual configuration needed
- **Manual mode**: Still supports manual Bot ID and Secret input
- **Stream push optimization**: Throttled push to avoid WebSocket congestion

Docs: [WeCom Bot](https://docs.cowagent.ai/en/channels/wecom-bot)

PR: [#2735](https://github.com/zhayujie/CowAgent/pull/2735). Thanks [@WecomTeam](https://github.com/WecomTeam)

## 🐛 Other Improvements & Fixes

- **DeepSeek module**: Independent DeepSeek Bot with dedicated `deepseek_api_key` config ([#2719](https://github.com/zhayujie/CowAgent/pull/2719)). Thanks [@6vision](https://github.com/6vision)
- **Web console**: Slash command menu, input history, new model options, mobile optimization ([#2731](https://github.com/zhayujie/CowAgent/pull/2731)). Thanks [@zkjqd](https://github.com/zkjqd)
- **Context loss**: Fix context loss after trimming ([393f0c0](https://github.com/zhayujie/CowAgent/commit/393f0c0))
- **System prompt**: Fix system prompt not rebuilding on every turn ([13f5fde](https://github.com/zhayujie/CowAgent/commit/13f5fde))
- **Gemini**: Fix missing model attribute in GoogleGeminiBot ([#2716](https://github.com/zhayujie/CowAgent/pull/2716)). Thanks [@cowagent](https://github.com/cowagent)
- **WeChat channel**: Fix file send failures and filename loss ([6d9b7ba](https://github.com/zhayujie/CowAgent/commit/6d9b7ba), [45faa9c](https://github.com/zhayujie/CowAgent/commit/45faa9c))
- **Docker**: Fix volume permissions, reduce image size ([3eb8348](https://github.com/zhayujie/CowAgent/commit/3eb8348), [4470d4c](https://github.com/zhayujie/CowAgent/commit/4470d4c))
- **Security**: Fix Memory Content path traversal risk. Thanks [@August829](https://github.com/August829)

## 📦 Upgrade

Run `cow update` or `./run.sh update` to upgrade, or pull the latest code and restart. See [Upgrade Guide](https://docs.cowagent.ai/en/guide/upgrade).

**Release Date**: 2026.04.01 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.4...master)
````

## File: docs/en/releases/v2.0.6.mdx
````markdown
---
title: v2.0.6
description: CowAgent 2.0.6 - Knowledge Base, Deep Dream Memory Distillation, Smart Context Compression, Web Console Multi-Session and More
---

## Project Renamed to CowAgent

The repository has been officially renamed from `chatgpt-on-wechat` to **CowAgent**, evolving into a full-featured AI Agent assistant.

- New URL: [github.com/zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) — GitHub auto-redirects the old URL
- CLI commands, config files, and documentation links remain compatible — no extra steps needed

## 📚 Knowledge Base

New personal knowledge base system — Agent can autonomously build and maintain structured knowledge, retrieving it on demand during conversations:

- **Index-driven self-organizing structure**: Knowledge is stored in `knowledge/` directory, auto-organized by category, with each knowledge page as an independent Markdown file
- **Auto-write**: Send files, links, or other knowledge to the Agent, or it will automatically create/update knowledge pages when valuable information is identified in conversation
- **Hybrid retrieval**: Supports keyword full-text search and vector semantic retrieval, loading relevant knowledge on demand during conversations
- **Visualization**: File tree browsing and knowledge graph visualization, with in-document links for direct navigation
- **Command management**: `/knowledge` for stats, `/knowledge list` for directory structure, `/knowledge on|off` to toggle

<img src="https://cdn.link-ai.tech/doc/20260413105435.png" width="750" />


Docs: [Knowledge Base](https://docs.cowagent.ai/en/knowledge)

## 🌙 Deep Dream Memory Distillation

A new memory consolidation mechanism that automatically distills scattered conversation memories into refined long-term memory daily:

- **Three-tier memory flow**: Conversation context (short-term) → Daily memory (mid-term) → MEMORY.md (long-term), forming a complete memory lifecycle
- **Auto-distillation**: Runs daily at 23:55, reads the day's daily memory and MEMORY.md, performs deduplication, merging, and pruning via LLM, outputting a refined MEMORY.md
- **Dream diary**: Each distillation generates a narrative-style dream diary recording discoveries and insights, stored in `memory/dreams/`
- **Manual trigger**: `/memory dream [N]` to manually trigger with configurable lookback days (default 3, max 30), with chat notification on completion
- **Web console**: Memory management page now includes a "Dream Diary" tab for browsing all dream diaries

Docs: [Deep Dream](https://docs.cowagent.ai/en/memory/deep-dream)

<img src="https://cdn.link-ai.tech/doc/20260414120158.png" width="750" />

## 🧠 Smart Context Compression

When context exceeds limits, trimmed portions are summarized by LLM and asynchronously injected to maintain conversation continuity:

- **Async LLM summary**: Trimmed messages are summarized into key information by LLM, written to daily memory files and injected into retained context
- **Multi-model compatible**: Uses the primary model for summarization, compatible with Claude, OpenAI, MiniMax and other model message format requirements

Docs: [Short-term Memory](https://docs.cowagent.ai/en/memory/context)

## 💬 Web Console Upgrades

Multiple enhancements to the Web console:

- **Multi-session management**: Create and switch between independent sessions, sidebar session list with auto-generated and manually editable titles
- **Password protection**: Set a login password via `web_console_password` config option
- **Deep thinking**: Display model thinking process in Web console, controlled by `enable_thinking` config option
- **Scheduled push**: Scheduled task results can be pushed to Web console
- **Message copy**: One-click copy of raw Markdown content from AI reply bubbles
- **Language toggle**: Top language switch button now shows current language for more intuitive interaction

## 🤖 Model Updates

- **Vision optimization**: Image recognition tool prefers the primary model with automatic multi-provider fallback. Docs: [Vision Tool](https://docs.cowagent.ai/en/tools/vision)
- **MiniMax new model**: Added MiniMax-M2.7-highspeed model and MiniMax TTS voice synthesis support. Thanks @octo-patch
- **Qwen**: Added qwen3.6-plus model support

## 🐛 Other Improvements & Fixes

- **Memory prompts**: `MEMORY.md` injected into system prompt by default, with refined memory retrieval and write trigger conditions for enhanced proactive writing
- **System prompt**: Optimized system prompt style and tone guidance
- **Browser tool**: Enhanced implicit interactive element detection
- **File send**: Fixed common file types (tar.gz, zip, etc.) not being sent correctly. Thanks @6vision
- **macOS compatibility**: Fixed network pre-check timeout compatibility issue. Thanks @Moliang Zhou
- **Windows compatibility**: Fixed PowerShell compatibility, process updates, terminal encoding and other issues on Windows
- **Python 3.13+**: Fixed missing `legacy-cgi` dependency for Python 3.13+
- **WeChat channel**: Updated personal WeChat channel version

## 📦 Upgrade

Run `cow update` or `./run.sh update` to upgrade, or pull the latest code and restart. See [Upgrade Guide](https://docs.cowagent.ai/en/guide/upgrade).

**Release Date**: 2026.04.14 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.5...master)
````

## File: docs/en/releases/v2.0.7.mdx
````markdown
---
title: v2.0.7
description: CowAgent 2.0.7 - Image Generation Skill (6-provider auto-routing), new models, knowledge base enhancements, Web Console improvements and bug fixes
---

## 🎨 Image Generation Skill

New built-in `image-generation` skill supporting text-to-image, image-to-image, and multi-image fusion across six major providers:

- **6-provider auto-routing**: OpenAI (GPT-Image-2) → Gemini (Nano Banana) → Seedream (Volcengine Ark) → Qwen (DashScope) → MiniMax → LinkAI — automatically selects from configured providers in fixed priority order, with automatic fallback on failure
- **Zero model selection**: Just configure an API key and it works — no need to manually specify a model. You can also name a specific model in conversation (e.g. "draw a cat with seedream")
- **Flexible control**: Supports `quality`, `size` (512/1K–4K), and `aspect_ratio` parameters, with each provider automatically mapping to its supported values
- **Image editing**: Pass existing images for editing, style transfer, or multi-image fusion (Seedream supports up to 14 reference images)
- **Skill-level config**: Pin a default model via `skills.image-generation.model` in `config.json`
- **Image lightbox**: All images in the Web console now support click-to-enlarge preview

Docs: [Image Generation Skill](https://docs.cowagent.ai/en/skills/image-generation)

## 🤖 New Model Support

- **Kimi K2.6**: Added `kimi-k2.6` model support
- **Claude Opus 4.7**: Added `claude-opus-4-7` model support
- **GLM 5.1**: Added `glm-5.1` model support
- **Kimi Coding Plan**: Support for Kimi Coding Plan mode
- **Custom model providers**: New custom model provider configuration for easier integration with additional vendors

## 💬 Web Console Improvements

- **Smart auto-scroll**: Improved chat scroll behaviour — no longer forces scroll to bottom while the user is reading earlier messages
- **Reasoning content cap**: Deep thinking content capped at 4 KB to prevent frontend lag
- **Mobile optimisation**: Session sidebar hidden by default on mobile, with overlay dismiss support
- **Session title fix**: Fixed title auto-generation fallback logic and Bridge reset on config change
- **Image preview dedup**: Fixed duplicate image rendering within the same message

## 📚 Knowledge Base Enhancements

- **Nested directory support**: Knowledge base listing and display now support multi-level nested directories
- **Root-level file display**: Show `index.md`, `log.md` and other root-level files in the knowledge tree
- **Empty state stats fix**: Root-level files no longer interfere with empty-state detection

## 🌙 Dream Memory Improvements

- **Structured organisation**: Dream memory files are now auto-archived by date with a cleaner directory structure
- **Schedule jitter**: Daily dream trigger includes random jitter to avoid concurrency conflicts in cluster deployments

## 🛠 Skill System Improvements

- **Skill manager refresh**: `/skill` commands now automatically refresh the skill manager to keep state in sync
- **Installation sources**: Skill installation supports multiple source formats (URL, zip, local file, etc.) with automatic target directory handling

## 🐛 Other Fixes

- **Gemini fix**: Fixed Gemini tool calls not returning results
- **Agent retry**: Empty-response retries no longer drop `tool_calls`
- **Docker env sync**: Fixed environment variables not syncing after config update in Docker environments
- **Python 3.7 compat**: Deferred `Literal` import for Python 3.7 compatibility
- **Model switch notification**: Fixed bot_type change notification not showing after model switch. Thanks @6vision
- **Config command**: `/config` now supports setting `enable_thinking`
- **Thinking display**: Deep thinking display disabled by default

## 📦 Upgrade

Run `cow update` or `./run.sh update` to upgrade, or pull the latest code and restart. See [Upgrade Guide](https://docs.cowagent.ai/en/guide/upgrade).

**Release Date**: 2026.04.22 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.6...master)
````

## File: docs/en/releases/v2.0.8.mdx
````markdown
---
title: v2.0.8
description: CowAgent 2.0.8 - Major Feishu channel upgrade (voice, streaming typewriter, one-click QR app creation), DeepSeek V4 / ERNIE 5.0 support, scheduler memory enhancements and multiple fixes
---

## 🪶 Major Feishu Channel Upgrade

### 1. One-click QR-scan App Creation

No more manual app setup, permission scopes and event subscriptions in the Feishu Open Platform. When `feishu_app_id` is not configured, both the Web Console and CLI startup flow now show a QR-scan entry — scan with Feishu, authorize, and the bot is created and config is filled back automatically. Out-of-the-box.

Documentation: [Feishu Channel](https://docs.cowagent.ai/en/channels/feishu)

### 2. Voice Messages

Receive Feishu voice messages with automatic speech-to-text, and reply in voice via TTS. Recognition accuracy for short Chinese voice messages has been improved.

### 3. Streaming Typewriter Replies

Integrated with Feishu CardKit streaming cards, **enabled by default**, matching the Web Console experience:

- Multi-turn agent flows render intermediate updates and the final reply on separate cards
- Tuned for high-throughput models like DeepSeek to keep pace with the Web Console
- Falls back to plain text replies automatically when not supported, no manual config needed
- Requires Feishu client ≥ 7.20

The voice and streaming building blocks come from a community contribution #2791. Thanks [@yangluxin613](https://github.com/yangluxin613)

## 🤖 New Model Support

- **DeepSeek V4 series**: Added `deepseek-v4-pro` / `deepseek-v4-flash`, with `deepseek-v4-flash` set as the new default
- **Unified thinking-mode toggle**: DeepSeek V4, Qwen3 and other thinking-capable models now share the same `enable_thinking` switch
- **ERNIE first-class integration**: New `qianfan` provider supporting `ernie-5.0` (default recommendation), `ernie-x1.1`, `ernie-4.5-turbo-128k`, `ernie-4.5-turbo-32k`. Dedicated `qianfan_api_key` / `qianfan_api_base` settings keep OpenAI config clean; legacy `wenxin` / `wenxin-4` paths are fully preserved. #2790 Thanks [@jimmyzhuu](https://github.com/jimmyzhuu)

  Documentation: [ERNIE](https://docs.cowagent.ai/en/models/qianfan)

## 🌐 Translation Provider

- **Youdao translator**: Added a Youdao provider to the `translate/` module using the v3 SHA-256 signing scheme, with automatic ISO 639-1 language-code mapping (`zh`, `zh-TW`, etc.) #2797 Thanks [@Zmjjeff7](https://github.com/Zmjjeff7)

## 🛠 OpenAI Client Refactor

- **Drop SDK dependency**: The OpenAI bot is reimplemented on a native HTTP client — leaner startup, fewer dependency conflicts
- **Web Console hint**: API base inputs in the model config UI now include version-path placeholder hints

## ⏰ Scheduler Memory Enhancements

- **Follow-up on task results**: Scheduled task results are automatically injected into the receiver's session history — the next turn can ask follow-up questions without re-stating context. Thanks [@huangrichao2020](https://github.com/huangrichao2020)
- **No long-term memory pollution**: Scheduler-injected pairs are excluded from the daily memory flush so high-frequency tasks don't drown the memory store
- **Bounded scheduler context**: The scheduler's own session context is automatically capped, so long-running periodic tasks don't accumulate state and slow down replies

## 🔧 Tools and Safety

- **Vision model selection**: `tools.vision.model` config now actually takes effect, with automatic fallback when unconfigured #2792
- **Bash safety prompt**: The destructive-deletion confirm prompt is now scoped to paths outside the workspace — routine in-workspace operations are no longer interrupted

## 🐛 Other Fixes

- Fixed Deep Dream firing duplicate runs in multi-instance setups
- Fixed missing `reasoning_content` on some history turns in DeepSeek multi-turn conversations

## 📦 Upgrade

Source-code deployments can run `cow update` or `./run.sh update` for a one-click upgrade, or pull the latest code and restart manually. See [Upgrade Guide](https://docs.cowagent.ai/en/guide/upgrade) for details.

> ⚠️ One-click Feishu app creation requires `lark-oapi>=1.5.5`. `cow update` pulls it automatically; manual deployments must update dependencies.

**Release Date**: 2026.05.05 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.7...2.0.8)
````

## File: docs/en/releases/v2.0.9.mdx
````markdown
---
title: v2.0.9
description: CowAgent 2.0.9 - Web Console model management, MCP protocol support, browser persistent login, new models and deployment hardening
---

## 🖥️ Model Management Console

The Web Console adds a new **Models** page that organizes everything by **provider × capability**, covering chat, image, voice, embedding and search models in one place:

- **Per-provider configuration**: Each provider's API Key / API Base is configured once at the top, and every capability below picks it up automatically — no more re-entering credentials
- **Image models**: Image understanding and image generation can each pick their own provider and model independently; falls back to the main model when unspecified
- **Voice models**: ASR (speech-to-text) and TTS (text-to-speech) can be configured independently, with new Qwen and Zhipu ASR/TTS models added
- **Embedding models**: Configurable embedding models (used for memory and knowledge-base retrieval), with new support for OpenAI, Tongyi, Doubao, Zhipu and others; run `/memory rebuild-index` after switching to rebuild the index online
- **Search capability**: Web search has been upgraded to support Bocha, Baidu, Zhipu and more providers — in auto mode the agent can synthesize results from multiple sources for deeper research

Documentation: [Models Overview](https://docs.cowagent.ai/en/models)

<img width="720" alt="20260522113305" src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/web-console-models-config.png" />


## 🧩 MCP Protocol Support

Adds support for **MCP (Model Context Protocol)**, expanding from a fixed built-in toolset to an open, pluggable tool ecosystem — any MCP-compatible service can be plugged in directly as an agent tool.

- Native JSON-RPC implementation, zero extra dependencies, supports both `stdio` and `sse` transports
- Compatible with the `mcpServers` configuration style used by Claude Desktop / Cursor, reads `~/cow/mcp.json` by default

Documentation: [MCP Tools](https://docs.cowagent.ai/en/tools/mcp). Thanks [@yangluxin613](https://github.com/yangluxin613) (#2801)

## 🌐 Browser Persistent Login

For sites that require login or have anti-bot protection, the browser tool can now persist a login session for long-term reuse, and supports attaching to your real Chrome browser to bypass fingerprint detection:

- **Persistent user profile (default)**: Uses `~/.cow/browser_profile` as the browser user data dir by default; once logged in, sessions are reused automatically on subsequent runs
- **CDP mode**: Configure `tools.browser.cdp_endpoint` to take over a real Chrome instance with full browser permissions

Documentation: [Browser Tool](https://docs.cowagent.ai/en/tools/browser). Thanks [@leafmove](https://github.com/leafmove) (#2809)

## 🤖 New Models and Improvements

- **New models**: `gpt-5.5`, `gemini-3.5-flash`, `qwen3.7-max`, `ernie-5.1`
- **Improvements**: DeepSeek V4 supports the `reasoning_effort` thinking-depth parameter; fixed thinking models like MiMo failing to connect via the OpenAI-compatible protocol

## 🔒 Deployment & Security

- **Bind to localhost by default**: The Web Console `web_host` now defaults to `127.0.0.1`; for server deployments, set it to `0.0.0.0` and configure a password manually. Thanks @August829, @yidaozhongqing, @YLChen-007, @icysun
- **Fully bundled frontend assets**: All third-party CSS / JS are now served locally — the console works offline and on intranet deployments. Thanks [@gitlayzer](https://github.com/gitlayzer) (#2816)

## 🛠 UX Improvements & Fixes

- **TTS rolls out to more channels**: Web Console, Personal WeChat, Feishu, DingTalk and WeCom Smart Bot all support voice replies — see the [Channels Overview](https://docs.cowagent.ai/en/channels)
- **Log panel enhancements**: Differentiated highlighting by log level, with level-based filtering. Thanks [@yangluxin613](https://github.com/yangluxin613) (#2807)
- **Auto-launch Web Console**: The Web Console now opens automatically on startup. Thanks [@yangluxin613](https://github.com/yangluxin613) (#2804)
- **Clean Ctrl+C exit**: No more long `KeyboardInterrupt` stack traces. Thanks [@yangluxin613](https://github.com/yangluxin613) (#2806)
- **Folder upload**: Web Console supports directory uploads, with path validation adapted for Windows. Thanks [@TryToMakeUsBetter](https://github.com/TryToMakeUsBetter) (#2814)
- Fixed scheduled tasks executing duplicates under certain conditions. Thanks [@CNXudiandian](https://github.com/CNXudiandian) (#2820)
- Fixed one-shot scheduled tasks with timezone not firing. Thanks @AethericSpace
- Fixed failed tool calls not being displayed after page refresh. Thanks [@a1094174619](https://github.com/a1094174619) (#2822)
- Fixed WeCom bot messages with illegal control characters failing to be delivered. Thanks [@Jacques-Zhao](https://github.com/Jacques-Zhao) (#2810)

## 📦 Upgrade

Source-code deployments can run `cow update` for a one-click upgrade, or pull the latest code and restart manually. See the [Upgrade Guide](https://docs.cowagent.ai/en/guide/upgrade) for details.

**Release Date**: 2026.05.22 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.8...2.0.9)
````

## File: docs/en/skills/create.mdx
````markdown
---
title: Create Skills
description: Create custom skills through conversation
---

CowAgent includes a built-in Skill Creator that lets you quickly create, install, or update skills through natural language conversation.

## Usage

Simply describe the skill you want in a conversation, and the Agent will handle the creation:

- Codify workflows as skills: "Create a skill from this deployment process"
- Integrate third-party APIs: "Create a skill based on this API documentation"
- Install remote skills: "Install xxx skill for me"

## Creation Flow

1. Tell the Agent what skill you want to create
2. Agent automatically generates `SKILL.md` description and execution scripts
3. Skill is saved to the workspace `~/cow/skills/` directory
4. Agent will automatically recognize and use the skill in future conversations

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202202247.png" width="800" />
</Frame>

## SKILL.md Format

Created skills follow the standard SKILL.md format:

```markdown
---
name: my-skill
description: Brief description of the skill
metadata:
  emoji: 🔧
  requires:
    bins: ["curl"]
    env: ["MY_API_KEY"]
  primaryEnv: "MY_API_KEY"
---

# My Skill

Detailed instructions...
```

| Field | Description |
| --- | --- |
| `name` | Skill name, must match directory name |
| `description` | Skill description, Agent decides whether to invoke based on this |
| `metadata.requires.bins` | Required system commands |
| `metadata.requires.env` | Required environment variables |
| `metadata.always` | Always load (default false) |

<Tip>
  See the [Skill Creator documentation](https://github.com/zhayujie/CowAgent/blob/master/skills/skill-creator/SKILL.md) for details.
</Tip>
````

## File: docs/en/skills/hub.mdx
````markdown
---
title: Skill Hub
description: Browse, search, and install AI Agent skills
---

[Cow Skill Hub](https://skills.cowagent.ai/) is an open-source skill marketplace for AI Agents, aggregating official picks, community contributions, and third-party skills from GitHub, ClawHub, and beyond.

Source code: [github.com/zhayujie/cow-skill-hub](https://github.com/zhayujie/cow-skill-hub)

<img src="https://cdn.link-ai.tech/doc/20260401110103.png" width="800" />

## Features

- **Browse skills** — filter by category (Featured / Community / Third-party) and tags
- **Search skills** — find skills by name or description
- **View details** — read the skill manifest, file contents, install command, and required environment variables
- **One-click install** — copy the install command and run it in CowAgent

## Installing a skill

Run the install command in chat or in your terminal:

<CodeGroup>
```text Chat
/skill install <name>
```

```bash Terminal
cow skill install <name>
```
</CodeGroup>

You can also browse the marketplace directly from chat:

```text
/skill list --remote
/skill search <keyword>
```

Beyond the curated list, you can install third-party skills from **GitHub, ClawHub, LinkAI, or any URL** via the CLI. See [Installing skills](/en/skills/install) for details.

## Contributing a skill

To submit your own skill:

1. Visit [skills.cowagent.ai/submit](https://skills.cowagent.ai/submit)
2. Sign in with GitHub or Google
3. Upload a folder or zip file containing `SKILL.md`
4. Skill name, display name, and description are auto-detected — adjust as needed
5. Submit for review; skills go live after security and quality checks

<img src="https://cdn.link-ai.tech/doc/20260401111904.png" width="800" />

Skill file layout:

```
your-skill/
├── SKILL.md        # required, in the root
├── scripts/        # optional, runtime scripts
└── resources/      # optional, additional assets
```

<Tip>
  Skills are built around the `SKILL.md` manifest. You can also download `SKILL.md` from a skill's detail page and use it with any Agent that supports custom instructions (OpenClaw, Cursor, Claude Code, and more).
</Tip>
````

## File: docs/en/skills/image-generation.mdx
````markdown
---
title: image-generation
description: Text-to-image / image-to-image / multi-image fusion with automatic multi-provider routing and fallback
---

A general-purpose image generation and editing skill supporting six providers: OpenAI, Gemini, Seedream (Volcengine Ark), Qwen (DashScope), MiniMax, and LinkAI. Configure any one provider's key to start using it; configure multiple to enable automatic fallback.

## Supported Models

| Provider | Models / Aliases | Notes |
| --- | --- | --- |
| OpenAI | `gpt-image-2`, `gpt-image-1` | General-purpose, high quality, supports `quality` parameter |
| Gemini Nano Banana | `nano-banana-2`, `nano-banana-pro`, `nano-banana` | Corresponds to the image variants of `gemini-3.1-flash`, `gemini-3-pro`, `gemini-2.5-flash` |
| Seedream (Volcengine Ark) | `seedream-5.0-lite`, `seedream-4.5` | Native 2K–4K, up to 14 reference images for fusion |
| Qwen (DashScope) | `qwen-image-2.0`, `qwen-image-2.0-pro` | Strong with Chinese text rendering and text-image layouts |
| MiniMax | `image-01` | Fast and simple |
| LinkAI | Any model | Universal gateway, used as fallback |

## Model Selection

By default, "auto routing + automatic fallback" is used:

1. Pick the first configured provider in the order `OpenAI → Gemini → Seedream → Qwen → MiniMax → LinkAI`
2. On errors such as 401, model not enabled, or network issues, automatically switch to the next provider
3. If the user specifies a model in the conversation (e.g. "use seedream to draw a cat"), the corresponding provider is promoted to the front

To pin a specific model:

```json
{
  "skills": {
    "image-generation": {
      "model": "seedream-5.0-lite"
    }
  }
}
```

## Configuring API Keys

<Tip>
  It is recommended to configure providers from the "Model Management" page in the [Web console](/en/channels/web). Chat model keys configured there are automatically reused by the image generation skill — no need to set them twice. You can also edit the configuration file manually or temporarily set keys in a conversation using the `env_config` tool.
</Tip>

Credentials are shared with the main model providers:

| Field | Provider |
| --- | --- |
| `openai_api_key` | OpenAI |
| `gemini_api_key` | Gemini |
| `ark_api_key` | Volcengine Ark (Seedream) |
| `dashscope_api_key` | Alibaba DashScope (Qwen) |
| `minimax_api_key` | MiniMax |
| `linkai_api_key` | LinkAI |


## Enabling and Disabling

The skill automatically adjusts its status based on API keys:

- **Key configured**: the Agent calls the skill directly when it receives a drawing request
- **Key not configured**: the skill still appears in context (marked as "needs configuration") — the Agent will guide the user to set up a key

To control it manually:

```text
/skill disable image-generation    # Disable
/skill enable image-generation     # Re-enable
```

Equivalent terminal commands: `cow skill disable image-generation` / `cow skill enable image-generation`.

## Parameters

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `prompt` | string | Yes | — | Image description |
| `image_url` | string / list | No | null | Input image for editing — local path or URL; pass a list for multi-image fusion |
| `quality` | string | No | auto | `low` / `medium` / `high`, supported only by some providers |
| `size` | string | No | auto | `512` / `1K` / `2K` / `3K` / `4K`, or pixel value like `1024x1024` |
| `aspect_ratio` | string | No | null | `1:1` / `3:2` / `2:3` / `16:9` / `9:16` / `21:9`; Gemini also supports `1:4` / `4:1` / `1:8` / `8:1` |

<Warning>
  **Higher quality and larger size cost more and take longer.** For everyday conversations, use the defaults (`auto`) or `quality=low` + `size=1K` — about 20 seconds per image. For posters or when high resolution is explicitly requested, use `quality=high` + `size=2K/4K` — may take 1–5 minutes.
</Warning>

## Common Use Cases

- **Text-to-image**: generate illustrations, posters, icons, avatars, storyboards, etc. from a description
- **Image-to-image**: change styles, swap elements, add decorations or text on an existing image
- **Multi-image fusion**: combine multiple reference images into one (outfit swaps, character group photos, etc.)

<Note>
- Bash timeout should be set to 600 seconds: each provider has a 300-second HTTP timeout, and the script may try multiple providers sequentially
- Input images are automatically compressed to ≤ 4 MB with the longest edge ≤ 4096 px
- Gemini / Seedream / Qwen / MiniMax do not support the `quality` parameter
- Seedream defaults to 2K; `seedream-5.0-lite` supports up to 3K; `seedream-4.5` supports up to 4K
</Note>
````

## File: docs/en/skills/index.mdx
````markdown
---
title: Skills Overview
description: CowAgent skills system introduction
---

Skills provide infinite extensibility for the Agent. Each Skill consists of a description file (`SKILL.md`), execution scripts (optional), and resources (optional), describing how to accomplish specific types of tasks.

The difference between Skills and Tools: Tools are atomic operations implemented in code (e.g., file read/write, command execution), while Skills are high-level workflows based on description files that can combine multiple Tools to complete complex tasks.

## Getting Skills

CowAgent offers multiple ways to acquire skills:

- **Cow Skill Hub** — Browse and install community skills via `/skill list --remote`
- **GitHub** — Install directly from GitHub repositories, with batch install support
- **ClawHub** — Install ClawHub skills via `/skill install clawhub:name`
- **URL** — Install from zip archives or SKILL.md links
- **Conversational creation** — Let the Agent create skills through natural language conversation

See [Install Skills](/en/skills/install) and [Skill Management Commands](/en/cli/skill) for details. You can also [create skills](/en/skills/create) through conversation.

## Skill Loading Priority

1. **Workspace skills** (highest): `~/cow/skills/`
2. **Project built-in skills** (lowest): `skills/`

Skills with the same name are overridden by priority.

## Skill File Structure

```
skills/
├── my-skill/
│   ├── SKILL.md          # Skill description (frontmatter + instructions)
│   ├── scripts/          # Execution scripts (optional)
│   └── resources/        # Additional resources (optional)
```

### SKILL.md Format

```markdown
---
name: my-skill
description: Brief description of the skill
metadata:
  emoji: 🔧
  requires:
    bins: ["curl"]
    env: ["MY_API_KEY"]
  primaryEnv: "MY_API_KEY"
---

# My Skill

Detailed instructions...
```

| Field | Description |
| --- | --- |
| `name` | Skill name, must match directory name |
| `description` | Skill description, Agent decides whether to invoke based on this |
| `metadata.requires.bins` | Required system commands |
| `metadata.requires.env` | Required environment variables |
| `metadata.always` | Always load (default false) |
````

## File: docs/en/skills/install.mdx
````markdown
---
title: Install Skills
description: Install skills from multiple sources with a single command
---

CowAgent supports installing skills from [Cow Skill Hub](https://skills.cowagent.ai/), GitHub, ClawHub, LinkAI, and any URL via a unified `install` command. Use `/skill install` in chat or `cow skill install` in the terminal.

## From the Skill Hub

Browse all available skills at [skills.cowagent.ai](https://skills.cowagent.ai/) and install by name:

```text
/skill list --remote
/skill install pptx
```

## From GitHub

Any GitHub-hosted skill can be installed directly. Supports both repository-level batch install and subdirectory-level single install:

```text
/skill install larksuite/cli
/skill install https://github.com/larksuite/cli/tree/main/skills/lark-im
```

## From ClawHub

All [ClawHub](https://clawhub.ai/) skills (40k+) can be installed with a single command:

```text
/skill install clawhub:<name>
```

## From LinkAI

All public resources on [LinkAI](https://link-ai.tech/console) (10k+ apps / workflows / plugins), as well as your own resources (apps, workflows, knowledge bases, databases, plugins), can be installed via:

```text
/skill install linkai:<code>
```

> Every resource created on the LinkAI platform has a unique `code`. Find it on each resource's page in the [console](https://link-ai.tech/console).

## From URL

Supports zip archives and SKILL.md file links:

```text
/skill install https://cdn.link-ai.tech/skills/pptx.zip
/skill install https://example.com/path/to/SKILL.md
```

## Manage Skills

```text
/skill list                  # View installed skills
/skill info pptx             # View skill details
/skill enable pptx           # Enable a skill
/skill disable pptx          # Disable a skill
/skill uninstall pptx        # Uninstall a skill
```

<Tip>
  All commands above work in the terminal by replacing `/skill` with `cow skill`. See [Skill Management Commands](/en/cli/skill) for full documentation.
</Tip>
````

## File: docs/en/skills/knowledge-wiki.mdx
````markdown
---
title: knowledge-wiki
description: Maintain a local structured knowledge base with automatic archiving, categorisation, and cross-referencing
---

Organises notes, insights, and reference materials from your conversations into a structured local knowledge base, automatically maintaining an index and cross-references between pages.

`knowledge-wiki` maintains a `knowledge/` directory in your workspace — essentially the Agent's "second brain". The skill is marked `always: true`, so it is **always loaded** and requires no external dependencies.

## When It Triggers

- You share an article, document, or URL that you want to keep for future reference
- A conversation produces conclusions worth retaining long-term
- You want to look up something you accumulated earlier

## Directory Structure

```
knowledge/
├── index.md           # Global index (must be maintained)
├── log.md             # Operation log (append-only)
└── <category>/        # Category subdirectories (grouped by content)
    └── <slug>.md      # Knowledge page (lowercase-hyphenated filename)
```

## Three Core Operations

### 1. Ingest

When you share some material, the Agent will:

1. Read and understand the original content, extracting key information
2. Decide which category it belongs to — check `index.md` first; create a new category if none fits
3. Generate a knowledge page at `knowledge/<category>/<slug>.md`
4. Update the index `index.md` and the log `log.md`

### 2. Synthesise

When a conversation produces new conclusions or insights:

1. Create a new knowledge page under an appropriate category
2. Add cross-links to and from related existing pages
3. Update the index and log

### 3. Query

When you ask about previously accumulated knowledge:

1. Search `index.md` for potentially relevant pages
2. Open specific pages with the `read` tool
3. Supplement with `memory_search` if needed
4. Include links to knowledge pages in the answer so you can click through to the source

## Page Format

```markdown
# Page Title

> Source: <source URL or brief description>

Body content. Link between pages using relative paths:
[Related Page](../category/related-page.md)

## Key Points

- ...

## Related Pages

- [Page A](../category/page-a.md) — why it's related
```

<Note>
- `> Source:` records where this knowledge came from. Always include it when there is a clear source
- Cross-references are important: when creating or updating a page, remember to add back-links in the related pages too
- **Only link to pages that already exist.** If a concept deserves its own page, create it first, then add the link
</Note>

## Index Format

`knowledge/index.md` uses a flat list grouped by category, one knowledge page per line:

```markdown
# Knowledge Index

## Category A
- [Page Title](category-a/page-slug.md) — one-line summary

## Category B
- [Page Title](category-b/page-slug.md) — one-line summary
```

No tables, no emojis. Category names and organisation can be adjusted freely.

## Log Format

`knowledge/log.md` is append-only — newest entries go at the bottom:

```markdown
## [YYYY-MM-DD] ingest | Page Title
## [YYYY-MM-DD] synthesize | Page Title
```

## Writing Guidelines

- **Filenames**: lowercase with hyphens, e.g. `machine-learning.md`
- **One topic per page** — link related content across pages
- **Update, don't duplicate** — if a page already exists, update it rather than creating a new one
- **Always update the index** `knowledge/index.md` after any change
- **Distill, don't copy** — capture the key points, not the entire source
- **Use full paths when referencing knowledge pages in conversations**, e.g. `[Title](knowledge/<category>/<slug>.md)`. Use relative paths only for inter-page links
- **Include links when answering questions based on knowledge pages** so users can dig deeper
````

## File: docs/en/skills/skill-creator.mdx
````markdown
---
title: skill-creator
description: Create, install, and update skills — standardises SKILL.md format and directory structure
---

`skill-creator` is a "meta-skill" that helps the Agent create, install, and update other skills, ensuring every skill follows a consistent `SKILL.md` format and directory layout.

## When It Triggers

- The user wants to install a skill from a URL or remote repository
- The user wants to create a brand-new skill from scratch
- An existing skill needs upgrading or restructuring

## What Is a Skill?

A skill is a reusable instruction set plus optional scripts and assets. It injects domain expertise into the Agent so it can handle specific tasks like a specialist.

A skill typically contains:

1. **Specialised workflow** — step-by-step instructions for a category of tasks
2. **Tool usage** — how to call a particular API or process a particular file format
3. **Domain knowledge** — team conventions, business rules, data schemas, etc.
4. **Attached resources** — scripts, reference docs, templates, etc.

<Note>
**Core principle: less is more.** Only write what the Agent wouldn't figure out on its own. For every line you add, ask yourself: is it worth the tokens?
</Note>

## Directory Structure

```
skill-name/
├── SKILL.md            # Required: skill definition
│   ├── YAML frontmatter (name / description are mandatory)
│   └── Markdown body (instructions + examples)
└── Optional resources
    ├── scripts/        # Executable scripts (Python / Bash, etc.)
    ├── references/     # Large reference docs the Agent reads on demand
    └── assets/         # Templates, icons, etc. used directly in output
```

## SKILL.md Specification

Frontmatter fields in the SKILL.md header:

| Field | Description |
| --- | --- |
| `name` | Skill name — lowercase with hyphens, must match the directory name |
| `description` | **The most important field.** Clearly state what the skill does and when to use it. The Agent reads this to decide whether to invoke it. All trigger-related descriptions go here, not in the body |
| `metadata.cowagent.requires.bins` | System CLI tools that must be installed |
| `metadata.cowagent.requires.env` | Required environment variables (all must be present) |
| `metadata.cowagent.requires.anyEnv` | Multiple API keys — at least one must be set |
| `metadata.cowagent.requires.anyBins` | Multiple tools — at least one must be installed |
| `metadata.cowagent.always` | Set to `true` to always load, skipping dependency checks |
| `metadata.cowagent.emoji` | Display emoji (optional) |
| `metadata.cowagent.os` | OS restriction, e.g. `["darwin", "linux"]` |

<Note>
The `category` field does not need to be set manually — the system automatically sets it to `skill`.
</Note>

Two ways to declare API key dependencies:

```yaml
metadata:
  cowagent:
    requires:
      env: ["MYAPI_KEY"]            # Must be present
```

```yaml
metadata:
  cowagent:
    requires:
      anyEnv: ["OPENAI_API_KEY", "LINKAI_API_KEY"]   # At least one
```

**Skills are auto-enabled/disabled based on dependencies**: they activate when all required environment variables are present and deactivate when any are missing — no need for manual `/skill enable`.

## Resource Directories

| Directory | What goes here | What does NOT go here |
| --- | --- | --- |
| `scripts/` | Code that needs to run repeatedly, or scripts that produce deterministic results | Demo-only code snippets |
| `references/` | Documents **over 500 lines** that genuinely won't fit in SKILL.md (e.g. a full DB schema) | General API docs, tutorials, examples |
| `assets/` | Files that appear in the final output (templates, icons, boilerplate, etc.) | Explanatory documentation |

<Warning>
**In principle, everything goes in `SKILL.md`** — only split into resource directories when it truly won't fit.

Do not add `README.md`, `CHANGELOG.md`, or `INSTALLATION_GUIDE.md` to a skill — put everything in `SKILL.md`. Resource directories should only contain scripts that actually run or assets that are actually used.
</Warning>

## Installing External Skills

After installation, the skill lands in `<workspace>/skills/<name>/`.

| Source | How to install |
| --- | --- |
| URL (single file) | curl / web_fetch |
| URL (zip archive) | Download and extract |
| Local SKILL.md | Read directly |
| Local zip archive | Extract |

Installation steps:

1. Locate the `SKILL.md` (may be at the root or in a subdirectory of the archive)
2. Read the `name` from the frontmatter
3. Copy the **entire skill directory** (including `SKILL.md`, `scripts/`, `assets/`, etc.) to `<workspace>/skills/<name>/`
4. If the archive contains an `INSTALL.md` or similar setup script, run it — but the final result must still reside under `<workspace>/skills/<name>/`

## Creating a Skill from Scratch

Recommended order:

1. **Clarify requirements** — ask the user for a few concrete use cases (don't ask too many at once)
2. **Plan the structure** — does this skill need scripts? Reference docs? Template assets?
3. **Scaffold** — use the init script:

   ```bash
   scripts/init_skill.py <skill-name> --path <workspace>/skills [--resources scripts,references,assets] [--examples]
   ```

4. **Fill in content** — write SKILL.md, add scripts and resources. Always test scripts after writing them
5. **Validate** (optional):

   ```bash
   scripts/quick_validate.py <workspace>/skills/<skill-name>
   ```

6. **Iterate** — keep improving based on real-world usage feedback

## Naming Conventions

- Use only lowercase letters, digits, and hyphens. Normalise user-given names, e.g. `Plan Mode` → `plan-mode`
- Maximum 64 characters
- Keep it short, start with a verb, make it self-explanatory
- Use tool names as prefixes when appropriate, e.g. `gh-address-comments`, `linear-address-issue`
- The directory name and the `name` field must match exactly

## Three-Level Loading

Skills are not loaded into context all at once — they use a three-level progressive loading mechanism:

1. **Metadata** (`name` + `description`) — always in context (~100 words). The Agent uses this to decide whether to invoke the skill
2. **SKILL.md body** — loaded only when the skill is activated; keep it under 500 lines
3. **Resource files** — read on demand by the Agent

For skills with multiple variants (e.g. multi-cloud deployment), organise like this:

```
cloud-deploy/
├── SKILL.md             # Main workflow and provider selection logic
└── references/
    ├── aws.md
    ├── gcp.md
    └── azure.md
```

When the user picks AWS, the Agent only reads `aws.md` — no need to load all three providers.

## Common Design Patterns

**Step-by-step**: numbered steps with corresponding scripts.

```markdown
1. Analyse form structure (run analyze_form.py)
2. Generate field mappings (edit fields.json)
3. Auto-fill the form (run fill_form.py)
```

**Branching**: different flows based on user intent.

```markdown
1. Determine operation type:
   **Creating new content?** → follow the "Create" workflow
   **Editing existing content?** → follow the "Edit" workflow
```

**Template-based**: when output format has strict requirements, include a template in SKILL.md for the Agent to follow.
````

## File: docs/en/tools/bash.mdx
````markdown
---
title: bash - Terminal
description: Execute system commands
---

Execute Bash commands in the current working directory, returns stdout and stderr. API keys configured via `env_config` are automatically injected into the environment.

## Dependencies

No extra dependencies, available by default.

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `command` | string | Yes | Command to execute |
| `timeout` | integer | No | Timeout in seconds |

## Use Cases

- Install packages and dependencies
- Run code and tests
- Deploy applications and services (Nginx config, process management, etc.)
- System administration and troubleshooting

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260203121008.png" width="800" />
</Frame>
````

## File: docs/en/tools/browser.mdx
````markdown
---
title: browser - Browser
description: Control a browser to access and interact with web pages
---

Control a Chromium browser for web navigation, element interaction and content extraction. Supports JavaScript-rendered pages and uses a compact DOM snapshot so the Agent can efficiently understand page structure.

## Installation

<Tabs>
  <Tab title="CLI install (recommended)">
    ```bash
    cow install-browser
    ```

    This command will:
    - Install the `playwright` Python package (with auto-fallback for older systems)
    - Install system dependencies on Linux
    - Download the Chromium browser (Linux servers automatically use the headless build)
    - Detect China-mainland networks and use mirror acceleration
  </Tab>
  <Tab title="Manual install">
    ```bash
    pip install playwright
    playwright install chromium
    ```

    On Linux servers, install system dependencies as well:
    ```bash
    sudo playwright install-deps chromium
    ```

    On older systems (e.g. Ubuntu 18.04, glibc < 2.28), install a compatible version:
    ```bash
    pip install playwright==1.28.0
    python -m playwright install chromium
    ```

    To accelerate the Chromium download from China:
    ```bash
    export PLAYWRIGHT_DOWNLOAD_HOST=https://registry.npmmirror.com/-/binary/playwright
    python -m playwright install chromium
    ```
  </Tab>
</Tabs>

<Note>
  1. Supported on Ubuntu 20.04+, Debian 10+, macOS and Windows. Older systems such as Ubuntu 18.04 will fall back to a compatible version automatically.
  2. The browser tool has heavy dependencies (~300MB) and is optional. For lightweight web content retrieval, use the `web_fetch` tool.
</Note>

## Workflow

A typical browser workflow for the Agent:

1. **`navigate`** — Open the target URL
2. **`snapshot`** — Get a compact DOM with auto-numbered interactive elements (`ref`)
3. **`click` / `fill` / `select`** — Operate elements by `ref`
4. **`snapshot`** — Snapshot again to verify the result

## Supported Actions

| Action | Description | Key parameters |
| --- | --- | --- |
| `navigate` | Open URL | `url` |
| `snapshot` | Get structured page text (primary way) | `selector` (optional) |
| `click` | Click an element | `ref` or `selector` |
| `fill` | Fill text into an input | `ref` or `selector`, `text` |
| `select` | Select a dropdown option | `ref` or `selector`, `value` |
| `scroll` | Scroll the page | `direction` (up/down/left/right) |
| `screenshot` | Save a screenshot to the workspace | `full_page` |
| `wait` | Wait for an element or timeout | `selector`, `timeout` |
| `press` | Press a key (Enter, Tab, etc.) | `key` |
| `back` / `forward` | Browser back / forward | - |
| `get_text` | Get an element's text content | `selector` |
| `evaluate` | Run JavaScript | `script` |

## Use Cases

- Access a URL to retrieve dynamic page content
- Fill in forms and log in
- Operate web elements (click buttons, select options, etc.)
- Verify the result of a deployed web page
- Scrape content that requires JS rendering

## Run Mode

The browser picks a mode based on the runtime environment:

| Environment | Mode |
| --- | --- |
| macOS / Windows | Headed (browser window visible) |
| Linux desktop (with DISPLAY) | Headed |
| Linux server (no DISPLAY) | Headless |

You can override it in `config.json`:

```json
{
  "tools": {
    "browser": {
      "headless": true
    }
  }
}
```

## Persistent Login

**Log in to a target site once and the Agent can keep using it.** Two ways are supported:

### Option 1: Persistent mode (default)

Works out of the box. Login state is saved under `~/.cow/browser_profile`. No configuration needed.

To disable persistence and start with a clean environment every time:

```json
{
  "tools": {
    "browser": {
      "persistent": false
    }
  }
}
```

### Option 2: CDP mode (attach to real Chrome)

Have the Agent connect to a separately launched real Chrome (instead of the Chromium bundled with Playwright) for full browser fingerprints. Useful for sites with strict bot detection.

Launch Chrome with a debugging port and a dedicated user data directory:

<Tabs>
  <Tab title="macOS">
    ```bash
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
      --remote-debugging-port=9222 \
      --user-data-dir="$HOME/.cow/chrome-cdp"
    ```
  </Tab>
  <Tab title="Linux">
    ```bash
    google-chrome \
      --remote-debugging-port=9222 \
      --user-data-dir="$HOME/.cow/chrome-cdp"
    ```
  </Tab>
  <Tab title="Windows">
    ```powershell
    & "C:\Program Files\Google\Chrome\Application\chrome.exe" `
      --remote-debugging-port=9222 `
      --user-data-dir="$env:USERPROFILE\.cow\chrome-cdp"
    ```
  </Tab>
</Tabs>

Then point the Agent at the endpoint in `config.json`:

```json
{
  "tools": {
    "browser": {
      "cdp_endpoint": "http://localhost:9222"
    }
  }
}
```

<Note>
  Chrome 137+ requires `--remote-debugging-port` to be paired with a dedicated `--user-data-dir`. As a result, the CDP-launched Chrome **cannot directly reuse the login state of your daily Chrome**; you'll need to log in once inside this dedicated profile.
</Note>
````

## File: docs/en/tools/edit.mdx
````markdown
---
title: edit - File Edit
description: Edit files via precise text replacement
---

Edit files via precise text replacement. If `oldText` is empty, appends to the end of the file.

## Dependencies

No extra dependencies, available by default.

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | Yes | File path |
| `oldText` | string | Yes | Original text to replace (empty to append) |
| `newText` | string | Yes | Replacement text |

## Use Cases

- Modify specific parameters in configuration files
- Fix bugs in code
- Insert content at specific positions in files
````

## File: docs/en/tools/env-config.mdx
````markdown
---
title: env_config - Environment
description: Manage API keys and secrets
---

Manage environment variables (API keys and secrets) in the workspace `.env` file, with secure conversational updates. Built-in security protection and desensitization.

## Dependencies

| Dependency | Install Command |
| --- | --- |
| `python-dotenv` ≥ 1.0.0 | `pip install python-dotenv>=1.0.0` |

Included when installing optional dependencies: `pip3 install -r requirements-optional.txt`

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | string | Yes | Operation type: `get`, `set`, `list`, `delete` |
| `key` | string | No | Environment variable name |
| `value` | string | No | Environment variable value (only for `set`) |

## Usage

Tell the Agent what key you need to configure, and it will automatically invoke this tool:

- "Configure my BOCHA_API_KEY"
- "Set OPENAI_API_KEY to sk-xxx"
- "Show configured environment variables"

Configured keys are automatically injected into the `bash` tool's execution environment.

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202234939.png" width="800" />
</Frame>
````

## File: docs/en/tools/index.mdx
````markdown
---
title: Tools Overview
description: CowAgent built-in tools system
---

Tools are the core capability for Agent to access operating system resources. The Agent intelligently selects and invokes tools based on task requirements, performing file operations, command execution, web search, scheduled tasks, and more. Tools are implemented in the `agent/tools/` directory.

## Built-in Tools

The following tools are available by default with no extra configuration:

<CardGroup cols={2}>
  <Card title="read - File Read" icon="file" href="/en/tools/read">
    Read file content, supports text, images, PDF
  </Card>
  <Card title="write - File Write" icon="pen" href="/en/tools/write">
    Create or overwrite files
  </Card>
  <Card title="edit - File Edit" icon="pen-to-square" href="/en/tools/edit">
    Edit files via precise text replacement
  </Card>
  <Card title="ls - Directory List" icon="folder-open" href="/en/tools/ls">
    List directory contents
  </Card>
  <Card title="bash - Terminal" icon="terminal" href="/en/tools/bash">
    Execute system commands
  </Card>
  <Card title="send - File Send" icon="paper-plane" href="/en/tools/send">
    Send files or images to user
  </Card>
  <Card title="memory - Memory" icon="brain" href="/en/tools/memory">
    Search and read long-term memory
  </Card>
</CardGroup>

## Optional Tools

The following tools require additional dependencies or API key configuration:

<CardGroup cols={2}>
  <Card title="env_config - Environment" icon="key" href="/en/tools/env-config">
    Manage API keys and secrets
  </Card>
  <Card title="scheduler - Scheduler" icon="clock" href="/en/tools/scheduler">
    Create and manage scheduled tasks
  </Card>
  <Card title="web_search - Web Search" icon="magnifying-glass" href="/en/tools/web-search">
    Search the internet for real-time information
  </Card>
</CardGroup>

## MCP Tools

Integrate thousands of community tools (maps, GitHub, Notion, etc.) via the [Model Context Protocol](https://modelcontextprotocol.io). Configure `mcp.json` once, ready to use:

<CardGroup cols={1}>
  <Card title="MCP - External Tool Ecosystem" icon="plug" href="/en/tools/mcp">
    Supports standard stdio / SSE transports. Hot-reload, zero code changes.
  </Card>
</CardGroup>
````

## File: docs/en/tools/ls.mdx
````markdown
---
title: ls - Directory List
description: List directory contents
---

List directory contents, sorted alphabetically, directories suffixed with `/`, includes hidden files.

## Dependencies

No extra dependencies, available by default.

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | Yes | Directory path, relative paths are based on workspace directory |
| `limit` | integer | No | Maximum entries to return, default 500 |

## Use Cases

- Browse project structure
- Find specific files
- Check if a directory exists
````

## File: docs/en/tools/mcp.mdx
````markdown
---
title: MCP Tools
description: Integrate external tool ecosystems via the Model Context Protocol
---

CowAgent supports the [Model Context Protocol (MCP)](https://modelcontextprotocol.io), allowing the Agent to directly invoke tens of thousands of community MCP tools. Configure `mcp.json` once and the tools are exposed to the LLM in exactly the same way as built-in tools — automatically selected and invoked.

## Configuration File

CowAgent reads `~/cow/mcp.json`. If the file does not exist, no MCP tools are loaded — and no error is raised.

For Docker deployments, the official `docker-compose.yml` already mounts the host's `./cow` directory to `/home/agent/cow` inside the container (i.e. the container user's `~/cow`). Just drop `mcp.json` into the host's `./cow/` directory and it will take effect.

### Standard Format

Fully compatible with the MCP community standard, identical to Claude Desktop / Cursor:

```json
{
  "mcpServers": {
    "<server-name>": {
      "command": "npx",
      "args": ["-y", "some-mcp-package"],
      "env": {
        "API_KEY": "your-key-here"
      }
    }
  }
}
```

| Field | Required | Description |
| --- | --- | --- |
| `command` | stdio | Executable to launch the server (e.g. `npx`, `python`, `uvx`) |
| `args` | No | Arguments passed to `command` |
| `env` | No | Environment variables for the subprocess, commonly used for API keys |
| `url` | SSE / Streamable HTTP | Remote endpoint URL (alternative to `command`) |
| `type` | Remote | Remote transport type: `sse` or `streamable-http` (defaults to `sse`) |
| `headers` | No | Extra HTTP headers for remote requests (e.g. `Authorization`); Streamable HTTP only |
| `disabled` | No | When `true`, this server is skipped — handy for temporary disabling |

### Full Example

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}
```

- **fetch**: Generic web page fetcher that returns page text content. No API key required.
- **github**: Access GitHub repos, issues, PRs, etc. Requires a Personal Access Token.

## Let the Agent Configure It for You

CowAgent ships with `read` / `write` / `edit` tools, so **you can simply send the MCP config to the Agent and ask it to write the file**:

For example:

```markdown
Add this MCP to ~/cow/mcp.json:

{"mcpServers":{"fetch":{"command":"uvx","args":["mcp-server-fetch"]}}}
```

The Agent will:

1. Read the existing MCP config and merge the new server entry, preserving existing ones
2. Hot-reload the new MCP server, so the corresponding tools become available on the next message

## How It Works

- **Async loading at startup**: All servers configured in `mcp.json` are loaded asynchronously in the background, never blocking the main loop — chat is usable immediately.
- **Hot reload**: When you or the Agent modifies `mcp.json`, changed servers are automatically reloaded after the current message — no need to restart cow.
- **Flat exposure**: Each method exposed by an MCP server appears as an individual tool. The LLM picks one directly without a second-stage decision.

## Supported Transports

| Transport | Description | Config Field |
| --- | --- | --- |
| **stdio** | Subprocess communication. The most common option, with the richest community ecosystem. | `command` + `args` |
| **SSE** | HTTP Server-Sent Events. Legacy remote transport. | `url` (default) |
| **Streamable HTTP** | New unified remote transport, gradually replacing SSE. | `type: "streamable-http"` + `url` |

## Troubleshooting

| Symptom | What to Check |
| --- | --- |
| Agent has no MCP tools after startup | Verify that `~/cow/mcp.json` exists and contains valid JSON |
| A specific server fails to load | Look for `[MCP] Server 'xxx' load failed` in startup logs — usually missing dependencies or API keys |
| Changes to `mcp.json` aren't applied | Changes take effect on **the next message**. If the server config didn't actually change (e.g. only comments edited), no restart is triggered |
| Docker deployment | Make sure host's `./cow` is mounted to `/home/agent/cow` in the container, then just drop `mcp.json` into host's `./cow/`. Or just ask the Agent to do it |

## Recommended MCP Marketplaces

You can browse third-party MCP marketplaces and copy a JSON config to use directly, for example:

- [mcp.so](https://mcp.so) — Global MCP service index
- [ModelScope MCP Hub](https://modelscope.cn/mcp) — ModelScope's MCP hub, more reliable from mainland China

Any MCP server that follows the standard protocol (stdio / SSE / Streamable HTTP) integrates with CowAgent out of the box.
````

## File: docs/en/tools/memory.mdx
````markdown
---
title: memory - Memory & Knowledge
description: Search and read long-term memory and knowledge base files
---

The memory tool contains two sub-tools: `memory_search` (search memory) and `memory_get` (read memory or knowledge files).

When the [knowledge base](/en/knowledge) feature is enabled, both tools also support accessing files under the `knowledge/` directory.

## Dependencies

No extra dependencies, available by default. Managed by the Agent Core memory system.

## memory_search

Search historical memory and knowledge base content with hybrid keyword and vector retrieval.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `query` | string | Yes | Search query |

## memory_get

Read the content of a specific memory or knowledge file.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | Yes | Relative path to the file (e.g. `MEMORY.md`, `memory/2026-01-01.md`, `knowledge/concepts/rag.md`) |
| `start_line` | integer | No | Start line number |
| `end_line` | integer | No | End line number |

## How It Works

The Agent automatically invokes memory tools in these scenarios:

- When the user shares important information → stores to memory
- When historical context is needed → searches relevant memory
- When conversation reaches a certain length → extracts summary for storage
- When discussing domain knowledge → retrieves relevant pages from the knowledge base

<Note>
  When `knowledge` is set to `false` in config, the tool descriptions and search scope automatically adjust to include only memory files.
</Note>
````

## File: docs/en/tools/read.mdx
````markdown
---
title: read - File Read
description: Read file content
---

Read file content. Supports text files, PDF files, images (returns metadata), and more.

## Dependencies

No extra dependencies, available by default.

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | Yes | File path, relative paths are based on workspace directory |
| `offset` | integer | No | Start line number (1-indexed), negative values read from the end |
| `limit` | integer | No | Number of lines to read |

## Use Cases

- View configuration files, log files
- Read code files for analysis
- Check image/video file info
````

## File: docs/en/tools/scheduler.mdx
````markdown
---
title: scheduler - Scheduler
description: Create and manage scheduled tasks
---

Create and manage dynamic scheduled tasks with flexible scheduling and execution modes.

## Dependencies

| Dependency | Install Command |
| --- | --- |
| `croniter` ≥ 2.0.0 | `pip install croniter>=2.0.0` |

Included in core dependencies: `pip3 install -r requirements.txt`

## Scheduling Modes

| Mode | Description |
| --- | --- |
| One-time | Execute once at a specified time |
| Fixed interval | Repeat at fixed time intervals |
| Cron expression | Define complex schedules using Cron syntax |

## Execution Modes

- **Fixed message**: Send a preset message when triggered
- **Agent dynamic task**: Agent intelligently executes the task when triggered

## Usage

Create and manage scheduled tasks with natural language:

- "Send me a weather report every morning at 9 AM"
- "Check server status every 2 hours"
- "Remind me about the meeting tomorrow at 3 PM"
- "Show all scheduled tasks"

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202195402.png" width="800" />
</Frame>

## Results injected into the conversation

Scheduled tasks run inside an isolated session (so internal planning and tool calls do not pollute the user's chat), but the **final output** is written back to the user's real session as a message pair. You can directly follow up — e.g. "expand on point 2 from earlier".

**Default policy**

- Output of Agent dynamic tasks is injected into the conversation
- Fixed-message tasks are not injected by default (configurable)
- Each session keeps the most recent **3 pairs** of scheduler messages; older pairs are pruned automatically. Regular user messages are unaffected

**Configuration**

| Key | Default | Description |
| --- | --- | --- |
| `scheduler_inject_to_session` | `true` | Master switch |
| `scheduler_inject_max_per_session` | `3` | Max scheduler message pairs kept per session |
| `scheduler_inject_send_message` | `false` | Whether to also inject fixed-message tasks |

```json
{
  "scheduler_inject_to_session": true,
  "scheduler_inject_max_per_session": 3,
  "scheduler_inject_send_message": false
}
```

## Context inside scheduled task execution

The isolated session for scheduled tasks retains a few recent runs of conversation history, so you can naturally do "compare with last time" or "continue from previous conclusion". To prevent prompts from growing unbounded for high-frequency tasks (e.g. a 5-minute monitor), history is auto-trimmed:

```
scheduler_keep_turns = max(1, agent_max_context_turns / 5)
```

`agent_max_context_turns` defaults to `20`, so each scheduled run keeps the most recent **4 turns** of history by default. Increase `agent_max_context_turns` if you need longer memory.

<Note>
For group-chat scenarios (Feishu / WeCom group bots / DingTalk, etc.), the user's real `session_id` looks like `user_id:group_id` — different from `receiver`. Scheduler records the correct `session_id` when a task is created. For older `tasks.json` entries missing this field, the runtime falls back to `receiver`, matching legacy behavior.
</Note>
````

## File: docs/en/tools/send.mdx
````markdown
---
title: send - File Send
description: Send files to user
---

Send files to the user (images, videos, audio, documents, etc.), used when the user explicitly requests to send/share a file.

## Dependencies

No extra dependencies, available by default.

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | Yes | File path, can be absolute or relative to workspace |
| `message` | string | No | Accompanying message |

## Use Cases

- Send generated code or documents to the user
- Send screenshots, charts
- Share downloaded files
````

## File: docs/en/tools/vision.mdx
````markdown
---
title: vision - Image Understanding
description: Analyze image content (recognition, description, OCR, etc.)
---

Analyze local images or image URLs using Vision API. Supports content description, text extraction (OCR), object recognition, and more.

## Model Selection

The vision tool uses a multi-level auto-selection strategy with automatic fallback — no manual configuration required:

1. **Main model** — uses the currently configured main model for image recognition (must be a multimodal model)
2. **Other configured models** — auto-discovers other multimodal models with configured API keys as alternatives

If the current provider fails, the tool automatically tries the next one until it succeeds or all fail.

### Supported Models

| Provider | Vision Model | Notes |
| --- | --- | --- |
| OpenAI / Compatible | Main model | All OpenAI-protocol-compatible multimodal models |
| Qwen (DashScope) | Main model | e.g. qwen3.6-plus, etc. |
| Claude | Main model | Anthropic native image format |
| Gemini | Main model | inlineData format |
| Doubao | Main model | doubao-seed-2-0 series natively supported |
| Kimi (Moonshot) | Main model | kimi-k2.6, kimi-k2.5 natively supported |
| ERNIE | Main model | Defaults to the multimodal main model (e.g. `ernie-5.1`); falls back to `ernie-4.5-turbo-vl` when the main model is not multimodal |
| ZhipuAI | glm-5v-turbo | Always uses the dedicated vision model |
| MiniMax | MiniMax-Text-01 | Always uses the dedicated vision model |

<Note>
  ZhipuAI and MiniMax text models do not support image understanding, so their dedicated vision models are always used automatically.
</Note>

> When `use_linkai=true`, LinkAI's multimodal model is used by default.

## Custom Configuration

To specify the model used by Vision, configure it in `config.json`, for example:

```json
{
    "tools": {
        "vision": {
            "model": "gpt-4.1"
        }
    }
}
```

The specified model is **used first**, and the tool automatically routes to the corresponding provider based on the model name; on failure, it falls back to other configured providers.

In most cases no configuration is needed — the tool works automatically as long as the main model supports multimodal input or any vision-capable API key is configured.

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | string | Yes | Local file path or HTTP(S) image URL |
| `question` | string | Yes | Question to ask about the image |

Supported image formats: jpg, jpeg, png, gif, webp



## Use Cases

- Describe image content
- Extract text from images (OCR)
- Identify objects, colors, scenes
- Analyze screenshots and scanned documents

<Note>
  Images larger than 1MB are automatically compressed before upload. All images (including remote URLs) are converted to base64 for transmission to ensure compatibility with all model backends.
</Note>
````

## File: docs/en/tools/web-fetch.mdx
````markdown
---
title: web_fetch - Web Fetch
description: Fetch web pages and document content
---

Fetch the content of an HTTP/HTTPS URL. Web pages are extracted as readable text; document files (PDF, Word, Excel, etc.) are downloaded and parsed automatically.

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | string | Yes | HTTP/HTTPS URL (web page or document) |

## Supported file types

| Type | Formats |
| --- | --- |
| PDF | `.pdf` |
| Word | `.docx` |
| Text | `.txt`, `.md`, `.csv`, `.log` |
| Spreadsheet | `.xls`, `.xlsx` |
| Presentation | `.ppt`, `.pptx` |

## Use cases

- Extract readable text from a web page
- Download and parse remote documents
- Inspect API response bodies

<Note>
  `web_fetch` only retrieves static HTML. For pages that require JavaScript rendering (such as SPAs), use the `browser` tool instead.
</Note>
````

## File: docs/en/tools/web-search.mdx
````markdown
---
title: web_search - Web Search
description: Search the internet for real-time information, with support for multiple search providers
---

Search the internet for real-time information, news, research, and more. Supports four backends — Bocha, ERNIE, GLM, and LinkAI — and works once any one of them is configured.

<Tip>
  It is recommended to configure providers and routing strategy visually from the "Model Management → Search" panel in the [Web console](/en/channels/web), without manually editing the configuration file.
</Tip>

## Providers

| Provider | Credential | Apply |
| --- | --- | --- |
| Bocha | `tools.web_search.bocha_api_key` | [Bocha Open Platform](https://open.bochaai.com/) |
| ERNIE | Reuses `qianfan_api_key` | [Qianfan Console](https://cloud.baidu.com/doc/qianfan/s/2mh4su4uy) |
| Zhipu | Reuses `zhipu_ai_api_key` | [Zhipu Open Platform](https://docs.bigmodel.cn/cn/guide/tools/web-search) |
| LinkAI | Reuses `linkai_api_key` | [LinkAI Console](https://link-ai.tech/console/interface) |

Except for Bocha which requires a dedicated `bocha_api_key`, the other three reuse the corresponding model's API key — configuring the model automatically grants search capability.

## Routing Strategy

```json
{
  "tools": {
    "web_search": {
      "strategy": "auto",
      "provider": ""
    }
  }
}
```

- `auto` (default): the Agent intelligently picks among configured providers and may call multiple providers in a single task to gather more comprehensive results; when none is specified, falls back through `bocha → qianfan → zhipu → linkai`.
- `fixed`: always use the provider specified in `provider`; falls back to the auto order if that provider's credentials are missing.

## Tool Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `query` | string | Yes | Search keywords |
| `count` | integer | No | Number of results (1–50, default 10) |
| `freshness` | string | No | Time range: `noLimit` (default), `oneDay`, `oneWeek`, `oneMonth`, `oneYear`, or date range like `2025-01-01..2025-02-01` |
| `summary` | boolean | No | Whether to return page summaries (default false) |
| `provider` | string | No | Available when multiple providers are configured under the `auto` strategy; used to switch provider for a single call |

<Note>
  If none of the four credentials are configured, this tool is not registered with the Agent.
</Note>
````

## File: docs/en/tools/write.mdx
````markdown
---
title: write - File Write
description: Create or overwrite files
---

Write content to a file. Creates the file if it doesn't exist, overwrites if it does. Automatically creates parent directories.

## Dependencies

No extra dependencies, available by default.

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | string | Yes | File path |
| `content` | string | Yes | Content to write |

## Use Cases

- Create new code files or scripts
- Generate configuration files
- Save processing results

<Note>
  Single writes should not exceed 10KB. For large files, create a skeleton first, then use the edit tool to add content in chunks.
</Note>
````

## File: docs/guide/manual-install.mdx
````markdown
---
title: 手动安装
description: 手动部署 CowAgent（源码 / Docker）
---

## 源码部署

### 1. 克隆项目代码

```bash
git clone https://github.com/zhayujie/CowAgent
cd CowAgent/
```

<Tip>
  若遇到网络问题可使用国内仓库地址：https://gitee.com/zhayujie/CowAgent
</Tip>

### 2. 安装依赖

核心依赖（必选）：

```bash
pip3 install -r requirements.txt
```

扩展依赖（可选，建议安装）：

```bash
pip3 install -r requirements-optional.txt
```

> 国内网络可使用镜像源加速：`pip3 install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple`

### 3. 安装 Cow CLI

安装命令行工具，用于管理服务和技能：

```bash
pip3 install -e .
```

安装后即可使用 `cow` 命令：

```bash
cow help
```

<Note>
  此步骤为推荐操作。安装后可以使用 `cow start`、`cow stop`、`cow update` 等命令管理服务，也可以使用 `cow skill` 管理技能。如果不安装 CLI，可以使用 `./run.sh` 或 `python3 app.py` 运行。
</Note>

### 3.1 安装浏览器工具（可选）

如需使用浏览器工具（控制浏览器访问网页、填写表单等），运行：

```bash
cow install-browser
```

该命令会自动安装 Playwright 和 Chromium 浏览器。详细说明参考 [浏览器工具文档](/tools/browser)。

<Note>
  浏览器工具依赖较重（~300MB），如不需要可跳过，不影响其他功能正常使用。
</Note>

### 4. 配置

复制配置文件模板并编辑：

```bash
cp config-template.json config.json
```

在 `config.json` 中填写模型 API Key 和通道类型等配置，详细说明参考各 [模型文档](/models/minimax)。

### 5. 运行

**使用 Cow CLI 运行（推荐）：**

```bash
cow start
```

**或者本地前台运行：**

```bash
python3 app.py
```

运行后默认启动 Web 控制台，访问 `http://localhost:9899` 开始对话和管理Agent。

**服务器后台运行（不使用 CLI 时）：**

```bash
nohup python3 app.py & tail -f nohup.out
```

<Tip>
  **服务器公网访问 Web 控制台**：默认 `web_host` 仅监听 `127.0.0.1`（本机访问），需公网访问时请在 `config.json` 中将 `web_host` 设为 `0.0.0.0`，同时强烈建议设置 `web_password` 启用鉴权。此外还需在防火墙/安全组中放行 `9899` 端口，建议仅对指定 IP 开放以保证安全。
</Tip>

## Docker 部署

使用 Docker 部署无需下载源码和安装依赖。Agent模式下更推荐使用源码部署以获得更多系统访问能力。

<Note>
  需要安装 [Docker](https://docs.docker.com/engine/install/) 和 docker-compose。
</Note>

**1. 下载配置文件**

```bash
curl -O https://cdn.link-ai.tech/code/cow/docker-compose.yml
```

打开 `docker-compose.yml` 填写所需配置。

**2. 启动容器**

```bash
sudo docker compose up -d
```

**3. 查看日志**

```bash
sudo docker logs -f chatgpt-on-wechat
```

<Tip>
  **Docker 公网访问 Web 控制台**：在 `docker-compose.yml` 中将 `WEB_HOST` 设为 `0.0.0.0`（容器内默认绑定 `127.0.0.1` 无法从宿主机外访问），同时强烈建议设置 `WEB_PASSWORD` 启用鉴权。此外需确保 `9899` 端口正确映射到宿主机，并在防火墙/安全组放行该端口。
</Tip>

## 核心配置项

<Tabs>
  <Tab title="源码部署（config.json）">
    ```json
    {
      "channel_type": "web",
      "model": "deepseek-v4-flash",
      "deepseek_api_key": "",
      "agent": true,
      "agent_workspace": "~/cow",
      "agent_max_context_tokens": 40000,
      "agent_max_context_turns": 30,
      "agent_max_steps": 15
    }
    ```
  </Tab>
  <Tab title="Docker 部署（docker-compose.yml）">
    ```yaml
    environment:
      CHANNEL_TYPE: 'web'
      MODEL: 'deepseek-v4-flash'
      DEEPSEEK_API_KEY: 'your-api-key'
      DEEPSEEK_API_BASE: 'https://api.deepseek.com/v1'
      AGENT: 'True'
      AGENT_MAX_CONTEXT_TOKENS: 40000
      AGENT_MAX_CONTEXT_TURNS: 30
      AGENT_MAX_STEPS: 15
    ```
  </Tab>
</Tabs>

| 参数 | 环境变量 | 说明 | 默认值 |
| --- | --- | --- | --- |
| `channel_type` | `CHANNEL_TYPE` | 接入渠道类型 | `web` |
| `model` | `MODEL` | 模型名称 | `deepseek-v4-flash` |
| `agent` | `AGENT` | 是否启用 Agent 模式 | `true` |
| `agent_workspace` | - | Agent 工作空间路径 | `~/cow` |
| `agent_max_context_tokens` | `AGENT_MAX_CONTEXT_TOKENS` | 最大上下文 tokens | `40000` |
| `agent_max_context_turns` | `AGENT_MAX_CONTEXT_TURNS` | 最大上下文记忆轮次 | `30` |
| `agent_max_steps` | `AGENT_MAX_STEPS` | 单次任务最大决策步数 | `15` |

<Tip>
  全部配置项可在项目 [`config.py`](https://github.com/zhayujie/CowAgent/blob/master/config.py) 文件中查看。Docker 部署时，配置项名称需转为大写环境变量格式。
</Tip>
````

## File: docs/guide/quick-start.mdx
````markdown
---
title: 一键安装
description: 使用脚本一键安装和管理 CowAgent
---

项目提供了一键安装、配置、启动、管理程序的脚本，推荐使用脚本快速运行。

支持 Linux、macOS、Windows 操作系统，需安装 Python 3.7 ~ 3.12（推荐 3.9）。

## 安装命令

<Tabs>
  <Tab title="Linux / macOS">
    ```bash
    bash <(curl -fsSL https://cdn.link-ai.tech/code/cow/run.sh)
    ```
  </Tab>
  <Tab title="Windows (PowerShell)">
    ```powershell
    irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex
    ```
  </Tab>
</Tabs>

脚本自动执行以下流程：

1. 检查 Python 环境（需要 Python 3.7+）
2. 安装必要工具（git、curl 等）
3. 克隆项目代码到 `~/CowAgent`
4. 安装 Python 依赖和 Cow CLI
5. 引导配置 AI 模型和通信渠道
6. 启动服务

运行后默认启动 Web 控制台，访问 `http://localhost:9899` 开始对话和管理Agent。

<Note>
  **服务器部署需要公网访问控制台时**，请在 `config.json` 中将 `web_host` 设为 `0.0.0.0`（默认仅监听 `127.0.0.1` 本机访问），同时强烈建议设置 `web_password` 启用鉴权。然后通过 `http://<server-ip>:9899` 访问，并确保防火墙/安全组放行 `9899` 端口。
</Note>

## 管理命令

安装完成后，使用 `cow` CLI 管理服务：

| 命令 | 说明 |
| --- | --- |
| `cow start` | 启动服务 |
| `cow stop` | 停止服务 |
| `cow restart` | 重启服务 |
| `cow status` | 查看运行状态 |
| `cow logs` | 查看实时日志 |
| `cow update` | 更新代码并重启 |
| `cow install-browser` | 安装浏览器工具依赖 |

更多命令和用法参考 [命令文档](/cli/index)。

<Note>
  如果 `cow` 命令不可用，也可以使用 `./run.sh <命令>`（Linux/macOS）或 `.\scripts\run.ps1 <命令>`（Windows）作为替代，功能等效。
</Note>
````

## File: docs/guide/upgrade.mdx
````markdown
---
title: 更新升级
description: CowAgent 的升级方式说明
---

## 命令升级（推荐）

使用 `cow update` 一键完成代码更新和服务重启：

```bash
cow update
```

该命令会自动完成以下流程：

1. 拉取最新代码（`git pull`）
2. 停止当前服务
3. 更新 Python 依赖
4. 重新安装 CLI
5. 启动服务

<Note>
  如果未安装 Cow CLI，也可以使用 `./run.sh update` 完成相同操作。
</Note>

## 手动升级

在项目根目录下执行：

```bash
git pull
pip3 install -r requirements.txt
pip3 install -e .
```

更新完成后重启服务：

```bash
# 使用 Cow CLI (推荐)
cow restart

# 或使用 run.sh
./run.sh restart

# 或使用 nohup 直接运行
kill $(ps -ef | grep app.py | grep -v grep | awk '{print $2}')
nohup python3 app.py & tail -f nohup.out
```

## Docker 升级

在 `docker-compose.yml` 所在目录下执行：

```bash
sudo docker compose pull
sudo docker compose up -d
```

<Tip>
  升级前建议备份 `config.json` 配置文件。Docker 环境下如需保留数据，可通过 volume 挂载持久化工作空间目录。
</Tip>
````

## File: docs/intro/architecture.mdx
````markdown
---
title: 项目架构
description: CowAgent 2.0 的系统架构和核心设计
---

CowAgent 2.0 从简单的聊天机器人全面升级为超级智能助理，采用 Agent 架构设计，具备自主思考、规划任务、长期记忆和技能扩展等能力。

## 系统架构

CowAgent 的整体架构由以下核心模块组成：

<img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/architecture/zh/architecture.jpg" alt="CowAgent Architecture" />

| 模块 | 说明 |
| --- | --- |
| **Plan** | 理解用户意图，将复杂任务分解为多步骤计划，循环调用工具直到完成目标 |
| **Memory** | 自动将重要信息持久化为核心记忆和日级记忆，支持关键词和向量混合检索，跨会话保持上下文连续性 |
| **Knowledge** | 以主题维度组织结构化知识，Agent 自主整理有价值信息为 Markdown 页面，维护索引和交叉引用，构建持续增长的知识网络 |
| **Tools** | Agent 访问操作系统资源的核心能力，内置文件读写、终端执行、浏览器操作、定时调度、记忆检索、联网搜索等 10+ 种工具 |
| **Skills** | 加载和管理 Skills，支持从 Skill Hub、GitHub 等一键安装，或通过对话创建自定义技能 |
| **Models** | 模型层，统一接入 OpenAI、Claude、Gemini、DeepSeek、MiniMax、GLM、Qwen 等国内外主流大语言模型 |
| **Channels** | 消息通道层，负责接收和发送消息，支持 Web 控制台、微信、飞书、钉钉、企微、公众号等，统一消息协议 |
| **CLI** | 命令行系统，提供终端命令（`cow`）和对话命令（`/`），支持进程管理、技能安装、配置修改、知识库管理等操作 |

## Agent 模式

启用 Agent 模式后，CowAgent 会以自主智能体的方式运行，核心工作流如下：

1. **接收消息** — 通过通道接收用户输入
2. **理解意图** — 分析任务需求和上下文
3. **规划任务** — 将复杂任务分解为多个步骤
4. **调用工具** — 选择合适的工具执行每个步骤
5. **记忆与知识更新** — 将重要信息存入长期记忆，将结构化知识整理至知识库
6. **返回结果** — 将执行结果发送回用户

## 工作空间

Agent 的工作空间默认位于 `~/cow` 目录，用于存储系统提示词、记忆文件、技能文件等：

```
~/cow/
├── SYSTEM.md          # Agent system prompt
├── USER.md            # User profile
├── MEMORY.md          # Core memory
├── memory/            # Long-term memory storage
│   └── YYYY-MM-DD.md  # Daily memory
├── knowledge/         # Personal knowledge base
│   ├── index.md       # Knowledge index
│   └── <category>/    # Topic-based pages
└── skills/            # Custom skills
    ├── skill-1/
    └── skill-2/
```

秘钥文件单独存储在 `~/.cow` 目录（出于安全考虑）：

```
~/.cow/
└── .env               # Secret keys for skills
```

## 核心配置

在 `config.json` 中配置 Agent 模式的核心参数：

```json
{
  "agent": true,
  "agent_workspace": "~/cow",
  "agent_max_context_tokens": 40000,
  "agent_max_context_turns": 30,
  "agent_max_steps": 15,
  "enable_thinking": false
}
```

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
| `agent` | 是否启用 Agent 模式 | `true` |
| `agent_workspace` | 工作空间路径 | `~/cow` |
| `agent_max_context_tokens` | 最大上下文 token 数 | `50000` |
| `agent_max_context_turns` | 最大上下文记忆轮次 | `20` |
| `agent_max_steps` | 单次任务最大决策步数 | `20` |
| `enable_thinking` | 是否启用深度思考模式 | `false` |
| `knowledge` | 是否启用个人知识库 | `true` |
````

## File: docs/intro/features.mdx
````markdown
---
title: 功能介绍
description: CowAgent 长期记忆、个人知识库、任务规划、技能系统、CLI 命令、浏览器工具详细说明
---

## 1. 长期记忆

> 记忆系统让 Agent 能够长期记住重要信息，采用三层记忆流转架构：对话上下文（短期）→ 天级记忆（中期）→ MEMORY.md（长期），形成完整的记忆生命周期。

第一次启动 Agent 时，Agent 会主动询问关键信息，并记录至工作空间（默认 `~/cow`）中的智能体设定、用户身份、记忆文件中。

在后续的长期对话中，Agent 会在需要时智能记录或检索记忆，并对自身设定、用户偏好、记忆文件等进行不断更新。每日自动执行 **梦境蒸馏（Deep Dream）**，将分散的天级记忆整合为精炼的长期记忆，同时生成叙事风格的梦境日记。

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260203000455.png" width="800" />
</Frame>

详细说明请参考 [长期记忆](/memory) 和 [梦境蒸馏](/memory/deep-dream)。

## 2. 个人知识库

> 知识库系统让 Agent 能够持续积累和组织结构化知识。与按时间线记录的记忆不同，知识库以主题为维度，将文章、对话洞察、学习材料等整理为互相关联的 Markdown 页面，形成持续增长的知识网络。

Agent 会在对话中自动将有价值的信息整理为知识页面，维护交叉引用和索引，通过 Web 控制台可浏览文档和查看知识图谱。知识库存储在工作空间的 `~/cow/knowledge/` 目录下。

- **自动整理**：Agent 在对话中自主提取和整理结构化知识，维护索引和交叉引用
- **知识图谱**：基于页面间的交叉引用自动构建知识图谱，Web 控制台提供可视化关系图浏览
- **对话联动**：Agent 回复中引用的知识文档链接可在 Web 控制台中直接点击跳转查看
- **CLI 管理**：通过 `/knowledge` 命令查看统计、浏览目录，通过 `/knowledge on|off` 开关功能

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260413105435.png" width="800" />
</Frame>

详细说明请参考 [个人知识库](/knowledge)。

## 3. 任务规划和工具调用

工具是 Agent 访问操作系统资源的核心，Agent 会根据任务需求智能选择和调用工具，完成文件读写、命令执行、定时任务等各类操作。内置工具的实现在项目的 `agent/tools/` 目录下。

**主要工具：** 文件读写编辑、Bash 终端、浏览器操作、文件发送、定时调度、记忆搜索、联网搜索、环境配置等。

### 3.1 终端和文件访问

针对操作系统的终端和文件的访问能力，是最基础和核心的工具，其他很多工具或技能都是基于此进行扩展。用户可通过手机端与 Agent 交互，操作个人电脑或服务器上的资源：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202181130.png" width="800" />
</Frame>

### 3.2 编程能力

基于编程能力和系统访问能力，Agent 可以实现从信息搜索、图片等素材生成、编码、测试、部署、Nginx 配置修改、发布的 **Vibecoding 全流程**，通过手机端简单的一句命令完成应用的快速 demo：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260318211018.png" width="800" />
</Frame>

### 3.3 定时任务

基于 `scheduler` 工具实现动态定时任务，支持**一次性任务、固定时间间隔、Cron 表达式**三种形式，任务触发可选择**固定消息发送**或 **Agent 动态任务**执行两种模式：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202195402.png" width="800" />
</Frame>

### 3.4 浏览器操作

内置 `browser` 工具，Agent 可控制浏览器访问网页、填写表单、点击元素、截图，支持动态 JS 渲染页面。运行 `cow install-browser` 一键安装，自动适配服务器（无头模式）和桌面环境：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260401115728.png" width="750" />
</Frame>

### 3.5 环境变量管理

技能所需的秘钥存储在环境变量文件中，由 `env_config` 工具进行管理，你可以通过对话的方式更新秘钥，工具内置安全保护和脱敏策略：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202234939.png" width="800" />
</Frame>

## 4. 技能系统

技能系统为 Agent 提供无限的扩展性，每个 Skill 由说明文件、运行脚本（可选）、资源（可选）组成，描述如何完成特定类型的任务。通过 Skill 可以让 Agent 遵循说明完成复杂流程、调用各类工具或对接第三方系统。

- [Skill Hub](https://skills.cowagent.ai/)：开放的技能广场，汇集官方推荐、社区贡献和第三方技能，支持一键安装。
- **内置技能：** 在项目的 `skills/` 目录下，包含技能创造器、图像识别、LinkAI 智能体、网页抓取等。内置 Skill 根据依赖条件（API Key、系统命令等）自动判断是否启用。
- **自定义技能：** 由用户通过对话创建，存放在工作空间中（`~/cow/skills/`），可实现任何复杂的业务流程和第三方系统对接。

安装技能：`/skill install <名称>` 或 `cow skill install <名称>`，支持从 Skill Hub、GitHub、ClawHub、URL 等来源安装。

### 4.1 创建技能

通过 `skill-creator` 技能可以通过对话的方式快速创建技能。你可以让 Agent 将某个工作流程固化为技能，或者把任意接口文档和示例发送给 Agent，让他直接完成对接：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202202247.png" width="800" />
</Frame>

### 4.2 搜索和图像识别

- **联网搜索：** 内置 `web_search` 工具，支持多种搜索引擎，配置 `BOCHA_API_KEY` 或 `LINKAI_API_KEY` 后启用。
- **图像识别：** 内置 `openai-image-vision` 技能，可使用 `gpt-4.1-mini`、`gpt-4.1` 等模型，依赖 `OPENAI_API_KEY`。

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202213219.png" width="800" />
</Frame>

### 4.3 技能广场

访问 [skills.cowagent.ai](https://skills.cowagent.ai/) 浏览所有可用技能，或在对话中执行：

```text
/skill list --remote          # 浏览技能广场
/skill search <关键词>         # 搜索技能
/skill install <名称>          # 一键安装
```

同时还支持安装Github、ClawHub、LinkAI等第三方平台上的所有技能，详情查看 [技能安装](/skills/install)

<img src="https://cdn.link-ai.tech/doc/20260401110103.png" width="750" />


## 5. CLI 命令系统

CowAgent 提供两种命令交互方式，覆盖服务管理、技能安装、配置调整等日常运维操作：

- **终端 CLI：** 在系统终端执行 `cow <命令>`，支持 `start`、`stop`、`restart`、`update`、`status`、`logs`、`skill` 等
- **对话命令：** 在对话中输入 `/<命令>`，Web 控制台输入 `/` 可弹出指令菜单快速选择

```bash
cow start              # 启动服务
cow stop               # 停止服务
cow update             # 更新并重启
cow skill install pptx # 安装技能
cow install-browser    # 安装浏览器工具
```

详细命令参考 [命令总览](https://docs.cowagent.ai/cli)。

<img src="https://cdn.link-ai.tech/doc/20260401114549.png" width="750" />
````

## File: docs/intro/index.mdx
````markdown
---
title: 项目介绍
description: CowAgent - 基于大模型的超级AI助理
---

<div align="center">
  <img src="https://cdn.link-ai.tech/doc/78c5dd674e2c828642ecc0406669fed7.png" alt="CowAgent" width="450px"/>
</div>

**CowAgent** 是基于大模型的超级AI助理，能够主动思考和任务规划、操作计算机和外部资源、创造和执行Skills、拥有长期记忆和知识库并不断成长。

CowAgent 支持灵活切换多种模型，能处理文本、语音、图片、文件等多模态消息，可接入微信、飞书、钉钉、企业微信应用、微信公众号、网页中使用，7×24小时运行于你的个人电脑或服务器中。

<CardGroup cols={2}>
  <Card title="GitHub" icon="github" href="https://github.com/zhayujie/CowAgent">
    开源代码仓库，欢迎 Star 和贡献
  </Card>
  <Card title="免部署在线体验" icon="cloud" href="https://link-ai.tech/cowagent/create">
    无需安装，立即在线体验 CowAgent
  </Card>
</CardGroup>

## 核心能力

<CardGroup cols={2}>
  <Card title="复杂任务规划" icon="brain" href="/intro/architecture">
    能够理解复杂任务并自主规划执行，持续思考和调用各类工具和技能直到完成目标。
  </Card>
  <Card title="长期记忆" icon="database" href="/memory">
    三层记忆流转（上下文→天级记忆→全局记忆），每日梦境蒸馏整理，支持关键词及向量检索。
  </Card>
  <Card title="个人知识库" icon="book" href="/knowledge">
    自动整理结构化知识，支持知识图谱可视化，通过交叉引用构建持续增长的知识网络。
  </Card>
  <Card title="技能系统" icon="puzzle-piece" href="/skills/index">
    实现了Skills创建和运行的引擎，内置多种技能，并支持通过自然语言对话完成自定义Skills开发。
  </Card>
  <Card title="工具系统" icon="wrench" href="/tools/index">
    内置文件读写、终端执行、浏览器操作、定时任务、消息发送等工具，Agent 可自主调用工具完成复杂任务。
  </Card>
  <Card title="命令系统" icon="terminal" href="/cli/index">
    提供终端 CLI 和对话中的命令，支持进程管理、技能安装、配置修改、上下文查看等常用操作。
  </Card>
  <Card title="多模型支持" icon="microchip" href="/models/index">
    支持 OpenAI, Claude, Gemini, DeepSeek, MiniMax, GLM, Qwen, Kimi, Doubao 等国内外主流模型厂商。
  </Card>
  <Card title="多通道接入" icon="server" href="/channels/weixin">
    支持运行在本地计算机或服务器，可集成到微信、网页、飞书、钉钉、微信公众号、企业微信应用中使用。
  </Card>
</CardGroup>

## 快速体验

在终端执行以下命令，即可一键安装、配置、启动 CowAgent：

<Tabs>
  <Tab title="Linux / macOS">
    ```bash
    bash <(curl -fsSL https://cdn.link-ai.tech/code/cow/run.sh)
    ```
  </Tab>
  <Tab title="Windows (PowerShell)">
    ```powershell
    irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex
    ```
  </Tab>
</Tabs>

运行后默认会启动 Web 控制台，通过访问 `http://localhost:9899` 可以在网页端进行对话、配置、应用通道接入等操作。

<CardGroup cols={2}>
  <Card title="快速开始" icon="rocket" href="/guide/quick-start">
    查看完整的安装和运行指南
  </Card>
  <Card title="项目架构" icon="sitemap" href="/intro/architecture">
    了解 CowAgent 的系统架构设计
  </Card>
</CardGroup>

## 社区

添加小助手微信加入开源项目交流群：

<img width="140" src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/open-community.png" />
````

## File: docs/ja/channels/dingtalk.mdx
````markdown
---
title: DingTalk
description: CowAgent を DingTalk アプリケーションに統合する
---

DingTalk オープンプラットフォームでインテリジェントロボットアプリを作成して、CowAgent を DingTalk に統合します。

## 1. アプリの作成

1. [DingTalk 開発者コンソール](https://open-dev.dingtalk.com/fe/app#/corp/app)にアクセスし、ログインして**アプリを作成**をクリックし、アプリ情報を入力します：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-create-app.png" width="800"/>

2. **アプリ機能の追加**をクリックし、**ロボット**機能を選択して**追加**をクリックします：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-add-bot.png" width="800"/>

3. ロボット情報を設定し、**公開**をクリックします。公開後、「**デバッグ**」をクリックすると自動的にテストグループチャットが作成され、クライアントで確認できます：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-config-bot.png" width="600"/>

4. **バージョン管理とリリース**をクリックし、新しいバージョンを作成して公開します：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-publish-bot.png" width="700"/>

## 2. プロジェクト設定

1. **認証情報と基本情報**をクリックし、`Client ID` と `Client Secret` を取得します：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-get-secret.png" width="700"/>

2. プロジェクトルートの `config.json` に以下の設定を追加します：

```json
{
  "channel_type": "dingtalk",
  "dingtalk_client_id": "YOUR_CLIENT_ID",
  "dingtalk_client_secret": "YOUR_CLIENT_SECRET"
}
```

3. 依存パッケージをインストールします：

```bash
pip3 install dingtalk_stream
```

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-app-config.png" width="700"/>

4. プロジェクト起動後、DingTalk 開発者コンソールに移動し、**イベントサブスクリプション**をクリックし、**接続確認済み、チャネルを確認**をクリックします。「**接続成功**」と表示されれば設定完了です：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-event-sub.png" width="700"/>

## 3. 使い方

ロボットと個別チャットするか、企業グループに追加して会話を開始します：

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/dingtalk-hosting-demo.png" width="650"/>
````

## File: docs/ja/channels/feishu.mdx
````markdown
---
title: Feishu (Lark)
description: 企業向けカスタムアプリで CowAgent を Feishu に接続
---

> 飛書（Feishu）の企業向けカスタムアプリを通じて CowAgent を接続。1 対 1 チャット、グループチャット（@メンション）に対応。WebSocket 長接続を使用するため公開 IP 不要、ストリーミングのタイプライター応答や音声メッセージにも対応します。

<Note>
  接続には管理者権限を持つ Feishu 企業ユーザーが必要です。
</Note>

## 1. 接続方法

### 方式 1: ワンクリック作成（推奨）

事前に Feishu 開発者プラットフォームでアプリを作成する必要はありません。Cow を起動後、Web コンソール（既定 `http://127.0.0.1:9899/`）を開き、**チャネル** メニュー → **チャネルを追加** → **Feishu** を選択し、**QR スキャン** タブで **ワンクリックで Feishu アプリを作成** をクリック。**Feishu アプリ** で QR コードをスキャンするとアプリ作成と接続が自動完了します。

<Note>
  作成されたアプリには必要な権限（メッセージ送受信、カード読み書き、グループイベントなど）とイベント購読がすべて事前設定されています。現在は Feishu 中国版のみ対応で、Lark 国際版は未対応です。
</Note>

CLI から `feishu_app_id` 未設定で起動した場合は、ターミナルにも QR コードが表示されます。

### 方式 2: 手動作成

Feishu 開発者プラットフォームで自分でアプリを作成し、Web コンソールまたは設定ファイルから接続します。

**ステップ 1: アプリ作成**

1. [Feishu 開発者プラットフォーム](https://open.feishu.cn/app/) にアクセスし、**企業カスタムアプリを作成** をクリック:

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/feishu-hosting-create-app.jpg" width="500"/>

2. **アプリ機能の追加** で **Bot** 機能を追加:

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/feishu-hosting-add-bot.jpg" width="800"/>

3. **権限管理** で以下の権限を貼り付け、全選択して **一括有効化**:

```
im:message,im:message.group_at_msg,im:message.group_at_msg:readonly,im:message.p2p_msg,im:message.p2p_msg:readonly,im:message:send_as_bot,im:resource,cardkit:card:write
```

<img src="https://cdn.link-ai.tech/doc/feishu-hosting-add-auth2.png" width="800"/>

4. **認証情報と基本情報** から `App ID` と `App Secret` を取得:

<img src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/feishu-hosting-appid-secret.jpg" width="800"/>

**ステップ 2: CowAgent に接続**

<Tabs>
  <Tab title="Web コンソール">
    Web コンソールから **チャネル** → **チャネルを追加** → **Feishu** → **手動入力** タブに切り替え、App ID と App Secret を入力して接続。
  </Tab>
  <Tab title="設定ファイル">
    `config.json` に以下を追加して起動:

    ```json
    {
      "channel_type": "feishu",
      "feishu_app_id": "YOUR_APP_ID",
      "feishu_app_secret": "YOUR_APP_SECRET",
      "feishu_stream_reply": true
    }
    ```

    | パラメータ | 説明 | デフォルト |
    | --- | --- | --- |
    | `feishu_app_id` | Feishu アプリの App ID | - |
    | `feishu_app_secret` | Feishu アプリの App Secret | - |
    | `feishu_stream_reply` | ストリーミングタイプライター応答を有効化 | `true` |
  </Tab>
</Tabs>

**ステップ 3: アプリの公開**

1. Cow 起動後、Feishu 開発者プラットフォームの **イベントとコールバック** で **ロングコネクション** モードを選択して保存:

<img src="https://cdn.link-ai.tech/doc/202601311731183.png" width="600"/>

2. **イベントを追加** で「メッセージ受信」を検索し、**メッセージ受信 v2.0** を選択。

3. **バージョン管理とリリース** で新バージョンを作成し **本番リリース** を申請、Feishu クライアントで承認:

<img src="https://cdn.link-ai.tech/doc/202601311807356.png" width="600"/>

## 2. 機能一覧

| 機能 | 対応状況 |
| --- | --- |
| 1 対 1 チャット | ✅ |
| グループチャット（@Bot） | ✅ |
| テキストメッセージ | ✅ 送受信 |
| 画像メッセージ | ✅ 送受信 |
| 音声メッセージ | ✅ 送受信 |
| ストリーミング応答 | ✅（Feishu cardkit ストリーミングカードベース） |

<Note>
  ストリーミング応答には `cardkit:card:write` 権限（ワンクリック作成では自動付与）と Feishu クライアント 7.20 以上が必要です。古いクライアントではアップグレード案内が表示され、権限/バージョン未充足時は通常テキスト応答に自動フォールバックします。
</Note>

## 3. 使い方

接続完了後、Feishu で Bot 名を検索してチャットを開始できます。

グループで使う場合は Bot をグループに追加し、@メンションでメッセージを送ってください。
````

## File: docs/ja/channels/index.mdx
````markdown
---
title: チャネル一覧
description: CowAgent が対応するチャネルと機能マトリクス
---

CowAgent は複数のチャットチャネルへの接続に対応しており、起動時に `channel_type` で切り替えます。Web コンソールはデフォルトで有効で、他の接続チャネルと並行して動作します。

## 機能マトリクス

下表は各チャネルが対応する受信メッセージタイプ、ボットの返信タイプ、グループチャット機能をまとめたものです。シーンに合わせて選択してください。

| チャネル | テキスト | 画像 | ファイル | 音声 | グループチャット |
| --- | :-: | :-: | :-: | :-: | :-: |
| [WeChat](/ja/channels/weixin) | ✅ | ✅ | ✅ | ✅ |  |
| [Web コンソール](/ja/channels/web) | ✅ | ✅ | ✅ | ✅ | |
| [Feishu](/ja/channels/feishu) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [DingTalk](/ja/channels/dingtalk) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WeCom スマートボット](/ja/channels/wecom-bot) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [QQ](/ja/channels/qq) | ✅ | ✅ | ✅ | | ✅ |
| [WeCom アプリ](/ja/channels/wecom) | ✅ | ✅ | ✅ | ✅ | |
| [WeChat 公式アカウント](/ja/channels/wechatmp) | ✅ | ✅ | | ✅ | |
| [Telegram](/ja/channels/telegram) | ✅ | ✅ | ✅ | ✅ | ✅ |

- **画像 / ファイル / 音声**列は対応するメッセージタイプの送受信に対応していることを示します。詳細は各チャネルのドキュメントを参照してください
- **グループチャット**列はグループメッセージを認識して応答できることを示します

<Tip>
  各チャネルの音声 / 画像機能は、対応するモデルプロバイダーの設定に依存します。詳細は [モデル一覧](/ja/models) を参照してください。
</Tip>

## チャネル一覧

- [Web コンソール](/ja/channels/web) — 組み込みのブラウザ対話・管理パネル、デフォルトで有効
- [WeChat](/ja/channels/weixin) — 個人 WeChat の QR コードログイン
- [Feishu](/ja/channels/feishu) — Feishu 自作ボット
- [DingTalk](/ja/channels/dingtalk) — DingTalk 自作ボット
- [WeCom スマートボット](/ja/channels/wecom-bot) — WeCom スマートボット
- [QQ](/ja/channels/qq) — QQ 公式ボットオープンプラットフォーム
- [WeCom アプリ](/ja/channels/wecom) — WeCom 自作アプリ接続
- [WeChat 公式アカウント](/ja/channels/wechatmp) — WeChat 公式アカウント（購読アカウント / サービスアカウント）
- [Telegram](/ja/channels/telegram) — グローバル IM、5 分で接続、公開 IP 不要
````

## File: docs/ja/channels/qq.mdx
````markdown
---
title: QQ Bot
description: CowAgent を QQ Bot に接続する（WebSocket ロングコネクション）
---

> QQ オープンプラットフォームの Bot API を介して CowAgent を接続し、QQ のダイレクトメッセージ、グループチャット（@bot）、ギルドチャネルメッセージ、ギルド DM に対応します。パブリック IP は不要で、WebSocket ロングコネクションを使用します。

<Note>
  QQ Bot は QQ オープンプラットフォームを通じて作成します。WebSocket ロングコネクションでメッセージを受信し、OpenAPI でメッセージを送信します。パブリック IP やドメインは不要です。
</Note>

## 1. QQ Bot の作成

> [QQ オープンプラットフォーム](https://q.qq.com)にアクセスし、QQ でサインインします。未登録の場合は、先に[アカウント登録](https://q.qq.com/#/register)を完了してください。

1.[QQ オープンプラットフォーム - Bot 一覧](https://q.qq.com/#/apps)に移動し、**Bot を作成**をクリックします：

<img src="https://cdn.link-ai.tech/doc/20260317162900.png" width="800"/>

2.Bot 名、アバター、その他の基本情報を入力して作成を完了します：

<img src="https://cdn.link-ai.tech/doc/20260317163005.png" width="800"/>

3.Bot 設定ページに入り、**開発管理**に移動して以下の手順を完了します：

  - **AppID**（Bot ID）をコピーして保存します
  - **AppSecret**（Bot Secret）を生成して保存します

<img src="https://cdn.link-ai.tech/doc/20260317164955.png" width="800"/>

## 2. 設定と起動

### 方法 A: Web コンソール

プログラムを起動し、Web コンソール（ローカルアクセス: http://127.0.0.1:9899/）を開きます。**チャネル**タブに移動し、**チャネルを接続**をクリックして **QQ Bot** を選択し、前のステップで取得した AppID と AppSecret を入力して接続をクリックします。

<img src="https://cdn.link-ai.tech/doc/20260317165425.png" width="800"/>

### 方法 B: 設定ファイル

`config.json` に以下を追加します：

```json
{
  "channel_type": "qq",
  "qq_app_id": "YOUR_APP_ID",
  "qq_app_secret": "YOUR_APP_SECRET"
}
```

| パラメータ | 説明 |
| --- | --- |
| `qq_app_id` | QQ Bot の AppID。オープンプラットフォームの開発管理で確認できます |
| `qq_app_secret` | QQ Bot の AppSecret。オープンプラットフォームの開発管理で確認できます |

設定後、プログラムを起動します。ログに `[QQ] ✅ Connected successfully` と表示されれば接続成功です。


## 3. 使い方

QQ オープンプラットフォームで、**管理 → 利用範囲とメンバー**に移動し、「グループとメッセージリストに追加」の QR コードを QQ クライアントでスキャンして Bot とのチャットを開始します：

<img src="https://cdn.link-ai.tech/doc/20260317165947.png" width="800"/>

チャット例:
<img src="https://cdn.link-ai.tech/doc/20260317171508.png" width="800"/>

## 4. 対応機能

> 注意: グループチャットやギルドチャネルで QQ Bot を使用するには、公開審査を完了し、利用範囲の権限を設定する必要があります。

| 機能 | 状態 |
| --- | --- |
| QQ ダイレクトメッセージ | ✅ |
| QQ グループチャット（@bot） | ✅ |
| ギルドチャネル（@bot） | ✅ |
| ギルド DM | ✅ |
| テキストメッセージ | ✅ 送受信 |
| 画像メッセージ | ✅ 送受信（グループ・ダイレクト） |
| ファイルメッセージ | ✅ 送信（グループ・ダイレクト） |
| スケジュールタスク | ✅ 能動的プッシュ（ユーザーあたり月4回） |


## 5. 注意事項

- **受動メッセージの制限**: QQ ダイレクトメッセージの返信は60分間有効です（1メッセージあたり最大5回返信可能）。グループチャットの返信は5分間有効です。
- **能動メッセージの制限**: ダイレクトメッセージとグループチャットの両方で、月あたりの能動メッセージは4件までです。スケジュールタスク機能を使用する際はこの点にご注意ください。
- **イベント権限**: デフォルトでは `GROUP_AND_C2C_EVENT`（QQ グループ/ダイレクト）と `PUBLIC_GUILD_MESSAGES`（ギルド公開メッセージ）がサブスクライブされています。追加の権限が必要な場合は、オープンプラットフォームで申請してください。
````

## File: docs/ja/channels/telegram.mdx
````markdown
---
title: Telegram
description: Telegram Bot API 経由で CowAgent を接続
---

> 公式の Telegram Bot API を通じて CowAgent を接続します。1 対 1 チャットおよびグループチャット（@メンションまたはボットへの返信で起動）に対応。Long Polling 方式のため公開 IP は不要で、すぐに利用できます。


## 1. 接続手順

### ステップ 1: BotFather で Bot を作成

1. Telegram で公式アカウント [@BotFather](https://t.me/BotFather) を開きます。
2. `/newbot` を送り、案内に従って入力します:
   - **Bot 名**（表示名、例: `My CowAgent Bot`）
   - **Bot ユーザー名**（`bot` で終わる必要があります、例: `my_cowagent_bot`）
3. 作成完了後、BotFather から **HTTP API Token**（例: `123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ`）が返されます。大切に保管してください。

<Tip>
  Token は Bot のパスワードに相当します。漏えいしないよう注意してください。万が一漏れた場合は `@BotFather` に `/revoke` を送って再発行できます。
</Tip>

### ステップ 2:（グループ利用時）Privacy Mode を無効化

1 対 1 チャットのみ利用する場合はスキップ可能です。Telegram Bot は既定で **Privacy Mode** が有効で、グループ内では `@bot` 接尾辞付きのコマンド（例: `/start@your_bot`）と、Bot メッセージへの返信のみ受信できます。**通常の `@bot こんにちは` のようなテキストメッセージは届きません**。そのままだとグループで反応しないので、必要に応じて以下を設定してください。

`@BotFather` に対して:

1. `/setprivacy` を送信
2. 作成した Bot を選択
3. `Disable` を選択

<Note>
  設定後もグループで反応しない場合は、Bot を一度グループから外して再度追加してみてください。
</Note>

### ステップ 3: CowAgent に接続

<Tabs>
  <Tab title="Web コンソール（推奨）">
    Web コンソール（既定 `http://127.0.0.1:9899`）を開き、**チャネル** メニュー → **チャネルを追加** → **Telegram** を選択し、Bot Token を貼り付けて接続をクリックします。
  </Tab>
  <Tab title="設定ファイル">
    `config.json` に以下を追加して Cow を起動します:

    ```json
    {
      "channel_type": "telegram",
      "telegram_token": "123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ",
      "telegram_group_trigger": "mention_or_reply"
    }
    ```

    | パラメータ | 説明 | 既定値 |
    | --- | --- | --- |
    | `telegram_token` | BotFather から発行された HTTP API Token | - |
    | `telegram_group_trigger` | グループのトリガー方式: `mention_or_reply`（@ または返信）/ `mention_only`（@ のみ）/ `all`（全メッセージ） | `mention_or_reply` |
    | `telegram_register_commands` | 起動時に BotFather にコマンドメニューを登録するかどうか | `true` |
  </Tab>
</Tabs>

ログに以下のような出力が表示されれば接続成功です:

```
[Telegram] Bot logged in as @my_cowagent_bot (id=123456789)
[Telegram] Registered 10 bot commands
[Telegram] ✅ Telegram bot ready, polling for updates
```

## 2. 機能

| 機能 | 対応状況 |
| --- | --- |
| 1 対 1 チャット | ✅ |
| グループチャット（@bot / Bot への返信） | ✅ |
| テキストメッセージ | ✅ 送受信 |
| 画像メッセージ | ✅ 送受信 |
| 音声メッセージ | ✅ 送受信（OGG/Opus） |
| 動画メッセージ | ✅ 送受信 |
| ファイルメッセージ | ✅ 送受信（PDF / Word / Excel など） |
| コマンドメニュー | ✅ Web コンソールの slash コマンドと一致 |

### コマンドメニュー

起動時に BotFather へコマンドメニューを自動登録します。Telegram の入力欄で `/` を入力するとサジェストが表示されます:

| コマンド | 説明 |
| --- | --- |
| `/help` | コマンドヘルプを表示 |
| `/status` | 実行ステータスを確認 |
| `/context` | 対話コンテキストを表示（`/context clear` でクリア） |
| `/skill` | スキル管理（`/skill list`、`/skill install` など） |
| `/memory` | 記憶管理（`/memory dream`） |
| `/knowledge` | ナレッジベース管理（`/knowledge list` / `on` / `off`） |
| `/config` | 現在の設定を表示 |
| `/cancel` | 実行中の Agent タスクを中断 |
| `/logs` | 最近のログを表示 |
| `/version` | バージョンを表示 |

<Note>
  Telegram のコマンドメニューはトップレベルのコマンドのみ表示されます。サブコマンドはスペース区切りで入力します（例: `/skill list`、`/context clear`）。
</Note>

## 3. 使い方

接続が完了したら:

- **1 対 1 チャット**: Telegram で Bot のユーザー名（例: `@my_cowagent_bot`）を検索し、`Start` をタップして会話を開始します。
- **グループチャット**: Bot をグループに追加し、`@bot こんにちは` または **Bot のメッセージに返信** することで起動します。グループで反応しない場合は [ステップ 2](#ステップ-2-グループ利用時-privacy-mode-を無効化) の Privacy Mode 設定を確認してください。

画像やファイルを送るときは、添付欄の上の入力欄に **キャプション**（説明・質問）を直接書いて一緒に送信できます。Bot は添付ファイルとキャプションを合わせて回答します。先に添付を送り、その後に質問を送る形でも、2 つのメッセージは自動でまとめて処理されます。
````

## File: docs/ja/channels/web.mdx
````markdown
---
title: Web コンソール
description: Web コンソールで CowAgent を使用する
---

Web コンソールは CowAgent のデフォルトチャネルです。起動後に自動的に実行され、ブラウザを通じて Agent と対話できるほか、モデル、Skill、メモリ、チャネルなどの設定をオンラインで管理できます。

## 設定

```json
{
  "channel_type": "web",
  "web_host": "0.0.0.0",
  "web_port": 9899,
  "web_password": "",
  "enable_thinking": false
}
```

| パラメータ | 説明 | デフォルト値 |
| --- | --- | --- |
| `channel_type` | `web` に設定 | `web` |
| `web_host` | Web サービスのリスンアドレス。デフォルトは `127.0.0.1`（ローカルのみ）。公開アクセスが必要な場合は `0.0.0.0` に変更してパスワードを設定してください | `""` |
| `web_port` | Web サービスのリスンポート | `9899` |
| `web_password` | アクセスパスワード。空欄の場合はパスワード保護が無効。`0.0.0.0` でリスンする場合は設定を推奨 | `""` |
| `web_session_expire_days` | ログインセッションの有効日数 | `30` |
| `enable_thinking` | 深い思考モードを有効化するか | `false` |

パスワード設定後、コンソールへアクセスする際にはまずパスワード入力によるログインが必要です。ログイン状態はデフォルトで 30 日間保持され、その間はサービスを再起動しても再ログインは不要です。パスワードはコンソールの「設定」ページからオンラインで変更することもできます。

## アクセス URL

プロジェクト起動後、以下にアクセスしてください：

- ローカル実行: `http://localhost:9899`
- サーバー実行: `http://<server-ip>:9899`

<Note>
  サーバーのファイアウォールとセキュリティグループで該当ポートが許可されていることを確認してください。
</Note>

## 機能紹介

### チャット画面

ストリーミング出力に対応しており、Agent の思考プロセス（Reasoning）とツール呼び出しプロセス（Tool Calls）をリアルタイムで表示でき、Agent の意思決定をより直感的に観察できます。深い思考機能は設定またはコンソールの「Agent 設定」スイッチで制御できます。

<img width="850" src="https://cdn.link-ai.tech/doc/20260227180120.png" />

#### マルチセッション管理

チャット画面はマルチセッション（Session）管理に対応しています。すべてのセッション記録はデータベースに永続化されます：

- **セッション一覧**：左側の履歴セッションアイコンをクリックするとセッション一覧パネルを展開/折りたたみでき、スクロールですべての履歴セッションを読み込めます
- **AI によるタイトル生成**：新しいセッションの初回対話完了後、自動的にモデルを呼び出して短いセッション要約タイトルを生成します
- **新規セッション**：セッション一覧上部の「新しい会話」ボタンまたは入力エリアの `+` ボタンをクリックして新しいセッションを作成します
- **セッション削除**：セッション項目の削除ボタンをクリックし、確認後にそのセッションとすべてのメッセージを完全に削除します
- **コンテキストクリア**：入力エリアのクリアボタンをクリックすると、現在のセッションに区切り線が挿入されます。区切り線より上のメッセージは表示されたままですが、モデルのコンテキスト入力には含まれなくなります

### モデル管理

設定ファイルを手動で編集することなく、異なるモデルプロバイダーのテキスト、画像、音声、埋め込みモデル設定をオンラインで管理できます：

<img width="850" src="https://cdn.link-ai.tech/doc/20260521212949.png" />

### Skill 管理

Agent の Skill をオンラインで閲覧・管理できます：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173403.png" />

### メモリ管理

Agent のメモリをオンラインで閲覧・管理できます：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173349.png" />

### チャネル管理

接続中のチャネルをオンラインで管理でき、リアルタイムでの接続・切断操作に対応しています：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173331.png" />

### スケジュールタスク

スケジュールタスクをオンラインで閲覧・管理できます。一回限りのタスク、固定間隔、Cron 式など複数のスケジューリング方式を可視化管理できます：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173704.png" />

### ログ

Agent のランタイムログをオンラインでリアルタイムに確認でき、実行状態の監視やトラブルシューティングに便利です：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173514.png" />
````

## File: docs/ja/channels/wechatmp.mdx
````markdown
---
title: WeChat 公式アカウント
description: CowAgent を WeChat 公式アカウントに統合する
---

CowAgent は個人サブスクリプションアカウントと企業サービスアカウントの両方に対応しています。

| 種類 | 要件 | 特徴 |
| --- | --- | --- |
| **個人サブスクリプション** | 個人で利用可能 | まずプレースホルダーの返信を送信し、ユーザーが完全な応答を取得するにはメッセージを送信する必要があります |
| **企業サービス** | カスタマーサービス API が認証済みの企業 | ユーザーに能動的に返信をプッシュできます |

<Note>
  公式アカウントはサーバーおよび Docker デプロイのみサポートしており、ローカル実行モードには対応していません。拡張依存パッケージをインストールしてください: `pip3 install -r requirements-optional.txt`
</Note>

## 1. 個人サブスクリプションアカウント

`config.json` に以下の設定を追加します：

```json
{
  "channel_type": "wechatmp",
  "single_chat_prefix": [""],
  "wechatmp_app_id": "wx73f9******d1e48",
  "wechatmp_app_secret": "YOUR_APP_SECRET",
  "wechatmp_aes_key": "",
  "wechatmp_token": "YOUR_TOKEN",
  "wechatmp_port": 80
}
```

### セットアップ手順

これらの設定は [WeChat 公式アカウントプラットフォーム](https://mp.weixin.qq.com/advanced/advanced?action=dev&t=advanced/dev)と一致している必要があります。**設定と開発 → 基本設定 → サーバー設定**に移動し、以下のように設定します：

<img src="https://cdn.link-ai.tech/doc/20260228103506.png" width="480"/>

1. プラットフォームで開発者シークレットを有効化し（`wechatmp_app_secret` に対応）、サーバー IP をホワイトリストに追加します
2. プラットフォームの設定と一致するように公式アカウントのパラメータを `config.json` に入力します
3. プログラムを起動します。ポート 80 でリスンします（権限がない場合は `sudo` を使用してください。ポート 80 を占有しているプロセスがあれば停止してください）
4. 公式アカウントプラットフォームで**サーバー設定を有効化**して送信します。正常に保存できれば設定完了です。**「サーバー URL」**は `http://{HOST}/wx` の形式で入力する必要があり、`{HOST}` にはサーバー IP またはドメインを指定できます

アカウントをフォローしてメッセージを送信すると、以下のような結果が表示されるはずです：

<img src="https://cdn.link-ai.tech/doc/20260228103522.png" width="720"/>

サブスクリプションアカウントの制限により、短い返信（15秒以内）は即座に返されますが、長い返信の場合はまず「考え中...」というプレースホルダーが送信され、ユーザーは任意のテキストを送信して回答を取得する必要があります。企業サービスアカウントではカスタマーサービス API を使用してこの問題を解決できます。

<Tip>
  **音声認識**: WeChat 内蔵の音声認識を使用できます。公式アカウント管理ページの「設定と開発 → API 権限」で「音声認識結果の受信」を有効にしてください。
</Tip>

## 2. 企業サービスアカウント

企業サービスアカウントのセットアップ手順は個人サブスクリプションアカウントとほぼ同じですが、以下の点が異なります：

1. プラットフォームで企業サービスアカウントを登録し、WeChat 認証を完了します。**カスタマーサービス API** の権限が付与されていることを確認してください
2. `config.json` で `"channel_type": "wechatmp_service"` に設定します。その他の設定は同じです
3. 長い返信であっても、ユーザーに能動的にプッシュでき、手動での取得が不要です

```json
{
  "channel_type": "wechatmp_service",
  "single_chat_prefix": [""],
  "wechatmp_app_id": "YOUR_APP_ID",
  "wechatmp_app_secret": "YOUR_APP_SECRET",
  "wechatmp_aes_key": "",
  "wechatmp_token": "YOUR_TOKEN",
  "wechatmp_port": 80
}
```
````

## File: docs/ja/channels/wecom-bot.mdx
````markdown
---
title: WeCom Bot
description: CowAgent を WeCom AI Bot に接続する（WebSocket ロングコネクション）
---

WeCom AI Bot を介して CowAgent を接続し、ダイレクトメッセージとグループチャットの両方に対応します。パブリック IP は不要で、WebSocket ロングコネクションを使用し、Markdown レンダリングとストリーミング出力をサポートします。

<Note>
  WeCom Bot と WeCom App は異なる統合方式です。WeCom Bot は WebSocket ロングコネクションを使用するため、パブリック IP やドメインが不要で、セットアップが簡単です。
</Note>

## 1. AI Bot の作成

1. WeCom クライアントを開き、**ワークベンチ**に移動し、**AI Bot** をクリックします：

<img src="https://cdn.link-ai.tech/doc/20260316180959.png" width="800"/>

2. **Bot を作成** → **手動作成**をクリックします：

<img src="https://cdn.link-ai.tech/doc/20260316181118.png" width="600"/>

3. 右パネルの一番下までスクロールし、**API モード**を選択します：

<img src="https://cdn.link-ai.tech/doc/20260316181215.png" width="600"/>

4. Bot 名、アバター、公開範囲を設定します。**ロングコネクション**モードを選択し、**Bot ID** と **Secret** をメモしてから保存をクリックします。

## 2. 設定

### 方法 A: Web コンソール

プログラムを起動し、Web コンソール（ローカルアクセス: http://127.0.0.1:9899）を開きます。**チャネル**タブに移動し、**チャネルを接続**をクリックして **WeCom Bot** を選択し、前のステップで取得した Bot ID と Secret を入力して接続をクリックします。

<img src="https://cdn.link-ai.tech/doc/20260316181711.png" width="600"/>

### 方法 B: 設定ファイル

`config.json` に以下を追加します：

```json
{
  "channel_type": "wecom_bot",
  "wecom_bot_id": "YOUR_BOT_ID",
  "wecom_bot_secret": "YOUR_SECRET"
}
```

| パラメータ | 説明 |
| --- | --- |
| `wecom_bot_id` | AI Bot の Bot ID |
| `wecom_bot_secret` | AI Bot の Secret |

設定後、プログラムを起動します。ログに `[WecomBot] Subscribe success` と表示されれば接続成功です。

## 3. 対応機能

| 機能 | 状態 |
| --- | --- |
| ダイレクトメッセージ | ✅ |
| グループチャット（@bot） | ✅ |
| テキストメッセージ | ✅ 送受信 |
| 画像メッセージ | ✅ 送受信 |
| ファイルメッセージ | ✅ 送受信 |
| ストリーミング返信 | ✅ |
| スケジュール配信 | ✅ |

## 4. 使い方

WeCom で Bot 名を検索してダイレクトメッセージを開始できます。

グループチャットで使用するには、Bot をグループに追加し、@メンションしてメッセージを送信します。

<img src="https://cdn.link-ai.tech/doc/20260316182902.png" width="800"/>
````

## File: docs/ja/channels/wecom.mdx
````markdown
---
title: WeCom
description: CowAgent を WeCom 企業アプリに統合する
---

カスタム企業アプリを通じて CowAgent を WeCom に統合し、社内従業員との1対1チャットに対応します。

<Note>
  WeCom は Docker デプロイまたはサーバー上の Python デプロイのみサポートしています。ローカル実行モードには対応していません。
</Note>

## 1. 前提条件

必要なリソース：

1. パブリック IP を持つサーバー（海外サーバー、または国際 API アクセス用のプロキシを持つ国内サーバー）
2. 登録済みの WeCom アカウント（個人登録は可能ですが認証はできません）
3. 認証済みの WeCom アカウントには、対応する法人名義で届け出済みのドメインが別途必要です

## 2. WeCom アプリの作成

1. [WeCom 管理コンソール](https://work.weixin.qq.com/wework_admin/frame#profile)で、**自社情報**をクリックし、ページ下部の **Corp ID** を確認します。この ID を `wechatcom_corp_id` 設定フィールド用に保存します。

2. **アプリ管理**に切り替え、アプリを作成をクリックします：

<img src="https://cdn.link-ai.tech/doc/20260228103156.png" width="480"/>

3. アプリ作成ページで、`AgentId` と `Secret` を記録します：

<img src="https://cdn.link-ai.tech/doc/20260228103218.png" width="580"/>

4. **API 受信設定**をクリックしてアプリケーションインターフェースを設定します：

<img src="https://cdn.link-ai.tech/doc/20260228103211.png" width="520"/>

- URL の形式: `http://ip:port/wxcomapp`（認証済み企業は届け出済みドメインを使用する必要があります）
- ランダムな `Token` と `EncodingAESKey` を生成し、設定ファイル用に保存します

<Note>
  プログラムがまだ起動していないため、この時点では API 受信設定を保存できません。プロジェクトが動作した後に戻って保存してください。
</Note>

## 3. 設定と起動

`config.json` に以下の設定を追加します（各パラメータと WeCom コンソールの対応関係は上のスクリーンショットを参照してください）：

```json
{
  "channel_type": "wechatcom_app",
  "single_chat_prefix": [""],
  "wechatcom_corp_id": "YOUR_CORP_ID",
  "wechatcomapp_token": "YOUR_TOKEN",
  "wechatcomapp_secret": "YOUR_SECRET",
  "wechatcomapp_agent_id": "YOUR_AGENT_ID",
  "wechatcomapp_aes_key": "YOUR_AES_KEY",
  "wechatcomapp_port": 9898
}
```

| パラメータ | 説明 |
| --- | --- |
| `wechatcom_corp_id` | Corp ID |
| `wechatcomapp_token` | API 受信設定の Token |
| `wechatcomapp_secret` | アプリの Secret |
| `wechatcomapp_agent_id` | アプリの AgentId |
| `wechatcomapp_aes_key` | API 受信設定の EncodingAESKey |
| `wechatcomapp_port` | リスンポート、デフォルトは 9898 |

設定後、プログラムを起動します。ログに `http://0.0.0.0:9898/` と表示されれば、プログラムは正常に動作しています。このポートを外部に公開する必要があります（例：クラウドサーバーのセキュリティグループで許可します）。

プログラム起動後、WeCom 管理コンソールに戻って**メッセージサーバー設定**を保存します。保存が成功したら、サーバー IP を**企業の信頼済み IP** に追加する必要もあります。追加しないとメッセージの送受信ができません：

<img src="https://cdn.link-ai.tech/doc/20260228103224.png" width="520"/>

<Warning>
  URL 設定のコールバックが失敗する場合や、設定がうまくいかない場合：
  1. サーバーのファイアウォールが無効になっており、セキュリティグループでリスンポートが許可されていることを確認してください
  2. Token、Secret Key などのパラメータ設定が一致しているか、URL の形式が正しいか慎重に確認してください
  3. 認証済みの WeCom アカウントは、法人に対応する届け出済みドメインを設定する必要があります
</Warning>

## 4. 使い方

WeCom で作成したアプリ名を検索して、直接チャットを開始できます。異なるポートでリスンする複数のインスタンスを実行して、複数の WeCom アプリを作成できます：

<img src="https://cdn.link-ai.tech/doc/20260228103228.png" width="720"/>

外部の個人 WeChat ユーザーにアプリを利用してもらうには、**自社情報 → WeChat プラグイン**に移動し、招待 QR コードを共有します。スキャンしてフォローした後、個人 WeChat ユーザーがアプリとチャットできるようになります：

<img src="https://cdn.link-ai.tech/doc/20260228103232.png" width="520"/>

## FAQ

以下の依存パッケージがインストールされていることを確認してください：

```bash
pip install websocket-client pycryptodome
```
````

## File: docs/ja/channels/weixin.mdx
````markdown
---
title: WeChat
description: CowAgent を個人の WeChat に接続する
---

> 個人の WeChat に接続します。QR コードをスキャンするだけでログインでき、パブリック IP は不要です。テキスト、画像、音声、ファイル、動画メッセージの送受信に対応しています。

## 1. 設定

### 方法 A: Web コンソール

プログラムを起動し、Web コンソール（ローカルアクセス: http://127.0.0.1:9899）を開きます。**チャネル**タブに移動し、**チャネルを接続**をクリックして **WeChat** を選択し、プロンプトに従って QR コードをスキャンしてください。

### 方法 B: 設定ファイル

`config.json` で `channel_type` を `weixin` に設定します：

```json
{
  "channel_type": "weixin"
}
```

プログラム起動後、ターミナルに QR コードが表示されます。WeChat でスキャンし、スマートフォンで確認してログインを完了してください。

<Note>
  後方互換性のため、`channel_type` を `wx` に設定しても WeChat チャネルが有効になります。
</Note>

## 2. パラメータ

| パラメータ | 説明 | デフォルト |
| --- | --- | --- |
| `channel_type` | `weixin` または `wx` を指定 | — |

ログイン認証情報は `~/.weixin_cow_credentials.json` に自動保存されます。再ログインするには、このファイルを削除してプログラムを再起動してください。

## 3. ログイン

### QR コードログイン

初回起動時に、ターミナルに QR コードが表示されます（有効期限は約 2 分）。WeChat でスキャンし、スマートフォンで確認してください。

- QR コードが期限切れになると自動的に更新・再表示されます
- `qrcode` 依存関係は `requirements.txt` にデフォルトで含まれており、ターミナルに直接 QR コードを表示できます

### 認証情報の永続化

ログイン成功後、認証情報は `~/.weixin_cow_credentials.json` に保存されます。次回起動時は保存された認証情報が再利用され、再スキャンは不要です。

再ログインするには、認証情報ファイルを削除してプログラムを再起動してください。

### セッションの期限切れ

WeChat セッションが期限切れになった場合（errcode -14）、プログラムは自動的に古い認証情報をクリアし、新しい QR ログインを開始します。手動での操作は不要です。

## 4. 対応機能

| 機能 | 状態 |
| --- | --- |
| ダイレクトメッセージ | ✅ |
| テキストメッセージ | ✅ 送受信 |
| 画像メッセージ | ✅ 送受信 |
| ファイルメッセージ | ✅ 送受信 |
| 動画メッセージ | ✅ 送受信 |
| 音声メッセージ | ✅ 受信 |

## 5. 注意事項

1. `ilinkai.weixin.qq.com` へのネットワークアクセスが必要です。
2. メディアファイル（画像、ファイル、動画）は CDN 経由で AES-128-ECB 暗号化を使用して転送され、プログラムが自動的に処理します。
3. 頻繁な切断による再スキャンを避けるため、安定したネットワーク環境での実行を推奨します。
````

## File: docs/ja/cli/general.mdx
````markdown
---
title: 汎用コマンド
description: ステータスの確認、設定管理、コンテキスト制御などのよく使うコマンド
---

以下のコマンドはチャットで `/` プレフィックス、ターミナルで `cow` プレフィックスで使用できます（一部はチャット専用）。

<Tip>
  Web コンソールでは `/` を入力すると自動補完メニューが表示され、キーボードのナビゲーションと Tab 補完に対応しています。
</Tip>

## help

使用可能なすべてのコマンドのヘルプ情報を表示します。

```text
/help
```

## status

現在のセッションとサービスの実行状態を表示します。プロセス情報、モデル設定、メッセージ数、読み込み済みスキル数を含みます。

```text
/status
```

## cancel

現在のセッションで実行中の Agent タスクを中止します。Agent が長時間のタスク（マルチターンのツール呼び出しや長いストリーミング応答など）を実行している間、`/cancel` を送信すると、次のツール実行の前に停止します。Web、WeChat、企業微信、Feishu など、すべてのチャネルで利用可能です。

```text
/cancel
```

## config

実行時設定の表示または変更を行います。変更は即座に反映され、再起動は不要です。

**すべての設定項目を表示：**

```text
/config
```

**単一の設定項目を表示：**

```text
/config model
```

**設定項目を変更：**

```text
/config model deepseek-v4-flash
```

**変更可能な設定項目：**

| 項目 | 説明 | 例 |
| --- | --- | --- |
| `model` | AI モデル名 | `deepseek-v4-flash` |
| `agent_max_context_tokens` | 最大コンテキストトークン数 | `40000` |
| `agent_max_context_turns` | 最大コンテキスト記憶ターン数 | `30` |
| `agent_max_steps` | タスクごとの最大判断ステップ数 | `15` |
| `enable_thinking` | ディープシンキングモードの有効化 | `true` / `false` |

<Note>
  `model` を変更すると、システムが対応するモデル API を自動的にマッチングします。設定は `config.json` に永続的に保存されます。
</Note>

## context

現在のセッションのコンテキスト統計情報を表示します。メッセージ数やコンテンツの長さを含みます。

```text
/context
```

**現在のセッションのコンテキストをクリア：**

```text
/context clear
```

<Tip>
  コンテキストをクリアすると、Agent は以前の会話内容を「忘れます」。話題の切り替えやコンテキストスペースの解放に便利です。
</Tip>

## logs

最近のサービスログを表示します。デフォルトでは最近の 20 行を表示し、最大 50 行です。

```text
/logs
```

**行数を指定：**

```text
/logs 50
```

## version

現在の CowAgent のバージョンを表示します。

```text
/version
```
````

## File: docs/ja/cli/index.mdx
````markdown
---
title: コマンド概要
description: CowAgent コマンドシステム — ターミナル CLI とチャットコマンド
---

CowAgent は2つのコマンド操作方法を提供しています：

- **ターミナル CLI** — システムターミナルで `cow <コマンド>` を実行し、サービス管理やスキル管理を行います
- **チャットコマンド** — 会話で `/<コマンド>` または `cow <コマンド>` を入力し、ステータス確認、スキル管理、設定変更を行います

## Cow CLI

ワンクリックインストールスクリプトでデプロイすると、`cow` コマンドが自動的に利用可能になります。手動インストールの場合は以下を実行してください：

```bash
pip install -e .
```

インストール後、任意の場所で `cow` コマンドを使用できます：

```bash
cow help
```

出力例：

```
🐮 CowAgent CLI

Usage: cow <command>

Service:
  start     Start the CowAgent service
  stop      Stop the CowAgent service
  restart   Restart the CowAgent service
  update    Update code and restart service
  status    Show service status
  logs      View service logs

Skills:
  skill     Manage skills (list / search / install / uninstall ...)

Memory & Knowledge:
  memory    Memory distillation (dream)
  knowledge View knowledge base stats and structure

Others:
  help      Show this help message
  version   Show version
```

## チャットコマンド

Web コンソールや接続されたチャネルの会話で `/` を入力すると、コマンドの候補が表示されます。使用可能なコマンド：

| コマンド | 説明 |
| --- | --- |
| `/help` | コマンドヘルプを表示 |
| `/status` | サービスの状態と設定を表示 |
| `/cancel` | 実行中の Agent タスクを中止 |
| `/config` | 実行時設定の表示・変更 |
| `/skill` | スキル管理（インストール、アンインストール、有効化、無効化など） |
| `/memory dream [N]` | 記憶蒸留を手動トリガー（デフォルト 3 日、最大 30） |
| `/knowledge` | ナレッジベースの統計情報を表示 |
| `/knowledge list` | ナレッジベースのディレクトリ構造を表示 |
| `/knowledge on\|off` | ナレッジベースの有効化・無効化 |
| `/context` | 現在のセッションのコンテキスト情報を表示 |
| `/context clear` | 現在のセッションのコンテキストをクリア |
| `/logs` | 最近のログを表示 |
| `/version` | バージョン番号を表示 |

<Tip>
  `/start`、`/stop`、`/restart` などのサービス管理コマンドは、プロセス操作を伴うため、ターミナルでの使用を案内します。
</Tip>

## コマンド対応表

| コマンド | ターミナル (`cow`) | チャット (`/`) |
| --- | :---: | :---: |
| help | ✓ | ✓ |
| version | ✓ | ✓ |
| status | ✓ | ✓ |
| logs | ✓ | ✓ |
| cancel | ✗ | ✓ |
| config | ✗ | ✓ |
| context | — | ✓ |
| memory（サブコマンド） | ✗ | ✓ |
| knowledge（サブコマンド） | ✓ | ✓ |
| skill（サブコマンド） | ✓ | ✓ |
| start / stop / restart | ✓ | ✗ |
| update | ✓ | ✗ |
| install-browser | ✓ | ✗ |

<Note>
  `context` はターミナルではチャットでの使用を案内するのみです。`config` はチャットでのみ利用可能です。
</Note>
````

## File: docs/ja/cli/memory-knowledge.mdx
````markdown
---
title: 記憶とナレッジベース
description: 記憶蒸留とナレッジベース管理コマンド
---

## memory

Agent の長期記憶システムを管理します。

### memory dream

記憶蒸留（Deep Dream）を手動でトリガーします — 最近の日次記憶を整理し、MEMORY.md に統合し、夢日記を生成します。

```text
/memory dream [N]
```

- `N`：直近 N 日間の記憶を整理（デフォルト 3 日、最大 30 日）
- バックグラウンドで非同期に実行され、完了するとチャットで通知されます
- Agent の初期化不要 — 最初の会話前でも使用可能

**例：**

```text
/memory dream       # 直近 3 日間を整理
/memory dream 7     # 直近 7 日間を整理
/memory dream 30    # 直近 30 日間を整理（全量）
```

Web コンソールでは、完了通知にクリック可能なリンクが含まれ、更新された MEMORY.md と夢日記を直接確認できます。

<Tip>
  システムは毎日 23:55 に自動で蒸留を実行します（lookback 1 日）。手動トリガーは、初回デプロイ後の履歴整理や、即座に記憶を更新したい場合に使用します。
</Tip>

## knowledge

パーソナルナレッジベースの表示と管理。デフォルトで統計情報を表示します。

```text
/knowledge
```

### knowledge list

ナレッジベースのディレクトリツリーを表示します。

```text
/knowledge list
```

### knowledge on / off

ナレッジベースの有効化・無効化。無効化すると、ナレッジプロンプトとファイルインデックスが注入されなくなります。

```text
/knowledge on
/knowledge off
```

<Note>
  ターミナル CLI では `cow knowledge` と `cow knowledge list` が利用可能ですが、`on|off` はチャットでのみサポートされます（ランタイム効果が必要なため）。
</Note>
````

## File: docs/ja/cli/process.mdx
````markdown
---
title: プロセス管理
description: cow コマンドで CowAgent プロセスのライフサイクルを管理
---

プロセス管理コマンドは CowAgent バックグラウンドプロセスのライフサイクルを制御します。これらのコマンドはターミナルでのみ使用可能です。

## start

CowAgent サービスを起動します。デフォルトではバックグラウンドデーモンとして実行され、自動的にログを表示します。

```bash
cow start
```

**オプション：**

| オプション | 説明 |
| --- | --- |
| `-f`, `--foreground` | フォアグラウンドで実行（デーモンとして起動しない） |
| `--no-logs` | 起動後にログを自動表示しない |

## stop

実行中の CowAgent サービスを停止します。

```bash
cow stop
```

## restart

CowAgent サービスを再起動します（停止してから起動）。

```bash
cow restart
```

**オプション：**

| オプション | 説明 |
| --- | --- |
| `--no-logs` | 再起動後にログを自動表示しない |

## update

コードを更新してサービスを再起動します。自動的に以下を実行します：

1. 最新コードをプル（`git pull`）
2. 現在のサービスを停止
3. Python 依存パッケージを更新
4. CLI を再インストール
5. サービスを起動

```bash
cow update
```

<Warning>
  `git pull` が失敗した場合（ローカルの未コミットの変更がある場合など）、更新は中止され、サービスには影響しません。
</Warning>

## status

CowAgent サービスの実行状態を確認します。プロセス情報、バージョン、現在のモデルとチャネルの設定を含みます。

```bash
cow status
```

## logs

サービスログを表示します。

```bash
cow logs
```

**オプション：**

| オプション | 説明 | デフォルト値 |
| --- | --- | --- |
| `-f`, `--follow` | ログ出力を継続的に追跡 | いいえ |
| `-n`, `--lines` | 最近の N 行を表示 | 50 |

例：

```bash
# 最近の100行を表示
cow logs -n 100

# ログを継続的に追跡
cow logs -f
```

## install-browser

[ブラウザツール](/ja/tools/browser)のために Playwright と Chromium ブラウザをインストールします。

```bash
cow install-browser
```

<Tip>
  ブラウザツール（Web ブラウジング、スクリーンショットなど）を使用する場合にのみ必要です。
</Tip>

## run.sh との互換性

Cow CLI がインストールされていない場合は、`run.sh` でサービスを管理できます：

| cow コマンド | run.sh 相当 |
| --- | --- |
| `cow start` | `./run.sh start` |
| `cow stop` | `./run.sh stop` |
| `cow restart` | `./run.sh restart` |
| `cow update` | `./run.sh update` |
| `cow status` | `./run.sh status` |
| `cow logs` | `./run.sh logs` |

<Note>
  `cow` コマンドの使用を推奨します。よりシンプルな構文と豊富な機能を提供します。ワンクリックインストールスクリプトで自動的にインストールされます。
</Note>
````

## File: docs/ja/cli/skill.mdx
````markdown
---
title: スキル管理
description: コマンドでスキルのインストール、アンインストール、有効化、無効化、管理を行う
---

スキル管理コマンドは CowAgent のスキルのインストール、検索、管理に使用します。チャットでは `/skill <サブコマンド>`、ターミナルでは `cow skill <サブコマンド>` を使用します。

## list

インストール済みスキルとその状態を一覧表示します。

<CodeGroup>
```text チャット
/skill list
```

```bash ターミナル
cow skill list
```
</CodeGroup>

**スキル広場を閲覧**（利用可能なすべてのスキルを表示）：

<CodeGroup>
```text チャット
/skill list --remote
```

```bash ターミナル
cow skill list --remote
```
</CodeGroup>

**オプション：**

| オプション | 説明 | デフォルト値 |
| --- | --- | --- |
| `--remote`, `-r` | Skill Hub のリモートスキルリストを閲覧 | いいえ |
| `--page` | リモートリストのページ番号 | 1 |

## search

スキル広場でスキルを検索します。

<CodeGroup>
```text チャット
/skill search pptx
```

```bash ターミナル
cow skill search pptx
```
</CodeGroup>

## install

統一された `install` コマンドで、Cow スキル広場、GitHub、ClawHub、任意の URL（zip アーカイブ、SKILL.md リンク）からスキルをワンクリックでインストールできます。手動ダウンロードや設定は不要です。

**スキル広場からインストール（推奨）：**

<CodeGroup>
```text チャット
/skill install pptx
```

```bash ターミナル
cow skill install pptx
```
</CodeGroup>

**GitHub からインストール：**

<CodeGroup>
```text チャット
# リポジトリ内のすべてのスキルをインストール（SKILL.md を含むサブディレクトリを自動検出）
/skill install larksuite/cli

# サブディレクトリを指定して単一スキルをインストール
/skill install https://github.com/larksuite/cli/tree/main/skills/lark-im

# # でサブディレクトリを指定
/skill install larksuite/cli#skills/lark-minutes
```

```bash ターミナル
# リポジトリ内のすべてのスキルをインストール（SKILL.md を含むサブディレクトリを自動検出）
cow skill install larksuite/cli

# サブディレクトリを指定して単一スキルをインストール
cow skill install https://github.com/larksuite/cli/tree/main/skills/lark-im

# # でサブディレクトリを指定
cow skill install larksuite/cli#skills/lark-minutes
```
</CodeGroup>

完全な GitHub URL と `owner/repo` 省略形に対応しています。モノリポ（1つのリポジトリに複数のスキル）の場合、サブディレクトリを省略するとすべてのスキルを自動検出して一括インストールします。サブディレクトリを指定した場合は、そのスキルのみをインストールします。

**ClawHub からインストール：**

<CodeGroup>
```text チャット
/skill install clawhub:baidu-search
```

```bash ターミナル
cow skill install clawhub:baidu-search
```
</CodeGroup>

**URL からインストール：**

<CodeGroup>
```text チャット
# zip アーカイブからインストール（単一またはバッチ）
/skill install https://cdn.link-ai.tech/skills/pptx.zip

# SKILL.md リンクからインストール
/skill install https://example.com/path/to/SKILL.md
```

```bash ターミナル
# zip アーカイブからインストール（単一またはバッチ）
cow skill install https://cdn.link-ai.tech/skills/pptx.zip

# SKILL.md リンクからインストール
cow skill install https://example.com/path/to/SKILL.md
```
</CodeGroup>

zip / tar.gz アーカイブ URL からのインストールに対応しており、自動的に解凍して `SKILL.md` を含むディレクトリを検出し、単一またはバッチインストールをサポートします。`SKILL.md` ファイルの URL から直接インストールすることもでき、スキル名と説明を自動的に解析します。

## uninstall

インストール済みスキルをアンインストールします。

<CodeGroup>
```text チャット
/skill uninstall pptx
```

```bash ターミナル
cow skill uninstall pptx
```
</CodeGroup>

<Warning>
  アンインストールするとスキルディレクトリ内のすべてのファイルが削除されます。この操作は元に戻せません。
</Warning>

## enable / disable

スキルの有効化・無効化を行います。無効化されたスキルは Agent から呼び出されません。

<CodeGroup>
```text チャット
/skill enable pptx
/skill disable pptx
```

```bash ターミナル
cow skill enable pptx
cow skill disable pptx
```
</CodeGroup>

## info

インストール済みスキルの詳細情報を表示します。`SKILL.md` のプレビューを含みます。

<CodeGroup>
```text チャット
/skill info pptx
```

```bash ターミナル
cow skill info pptx
```
</CodeGroup>

## スキルのソース

インストールされたスキルはソース情報を記録しており、`/skill list` で確認できます：

| ソース | 説明 |
| --- | --- |
| `builtin` | プロジェクト内蔵スキル |
| `cowhub` | CowAgent Skill Hub からインストール |
| `github` | GitHub URL から直接インストール |
| `clawhub` | ClawHub からインストール |
| `url` | SKILL.md URL からインストール |
| `local` | ローカルで作成されたスキル |
````

## File: docs/ja/guide/manual-install.mdx
````markdown
---
title: 手動インストール
description: CowAgentの手動デプロイ（ソースコード / Docker）
---

## ソースコードによるデプロイ

### 1. プロジェクトをクローン

```bash
git clone https://github.com/zhayujie/CowAgent
cd CowAgent/
```

<Tip>
  ネットワークに問題がある場合は、ミラーを使用してください: https://gitee.com/zhayujie/CowAgent
</Tip>

### 2. 依存パッケージをインストール

コア依存パッケージ（必須）：

```bash
pip3 install -r requirements.txt
```

オプション依存パッケージ（推奨）：

```bash
pip3 install -r requirements-optional.txt
```

### 3. Cow CLI をインストール

サービスとスキルを管理するためのコマンドラインツールをインストールします：

```bash
pip3 install -e .
```

インストール後、`cow` コマンドが使用可能になります：

```bash
cow help
```

<Note>
  このステップは推奨です。インストール後、`cow start`、`cow stop`、`cow update` でサービスを管理でき、`cow skill` でスキルを管理できます。CLI をインストールしない場合は、`./run.sh` または `python3 app.py` で実行できます。
</Note>

### 4. 設定

設定テンプレートをコピーして編集します：

```bash
cp config-template.json config.json
```

`config.json` にモデルの API キー、チャネルタイプ、その他の設定を入力します。詳細は[モデルのドキュメント](/ja/models/index)を参照してください。

### 5. 実行

**Cow CLI を使用して実行（推奨）：**

```bash
cow start
```

**またはローカルでフォアグラウンド実行：**

```bash
python3 app.py
```

デフォルトでは Web コンソールが起動します。`http://localhost:9899` にアクセスしてチャットできます。

**サーバーでバックグラウンド実行（CLI 未使用時）：**

```bash
nohup python3 app.py & tail -f nohup.out
```

<Tip>
  サーバーにデプロイする場合は、ファイアウォールまたはセキュリティグループでポート `9899` を開放して Web コンソールにアクセスできるようにしてください。セキュリティのため、特定の IP のみにアクセスを制限することを推奨します。
</Tip>

## Docker によるデプロイ

Docker デプロイでは、ソースコードのクローンや依存パッケージのインストールは不要です。Agent モードを使用する場合は、より広範なシステムアクセスが可能なソースコードによるデプロイを推奨します。

<Note>
  [Docker](https://docs.docker.com/engine/install/) と docker-compose が必要です。
</Note>

**1. 設定ファイルをダウンロード**

```bash
curl -O https://cdn.link-ai.tech/code/cow/docker-compose.yml
```

`docker-compose.yml` を編集して設定を行います。

**2. コンテナを起動**

```bash
sudo docker compose up -d
```

**3. ログを確認**

```bash
sudo docker logs -f chatgpt-on-wechat
```

<Tip>
  サーバーにデプロイする場合は、ファイアウォールまたはセキュリティグループでポート `9899` を開放して Web コンソールにアクセスできるようにしてください。セキュリティのため、特定の IP のみにアクセスを制限することを推奨します。
</Tip>

## 主要な設定項目

```json
{
  "channel_type": "web",
  "model": "deepseek-v4-flash",
  "deepseek_api_key": "",
  "agent": true,
  "agent_workspace": "~/cow",
  "agent_max_context_tokens": 40000,
  "agent_max_context_turns": 30,
  "agent_max_steps": 15
}
```

| パラメータ | 説明 | デフォルト値 |
| --- | --- | --- |
| `channel_type` | チャネルタイプ | `web` |
| `model` | モデル名 | `deepseek-v4-flash` |
| `agent` | Agent モードを有効化 | `true` |
| `agent_workspace` | Agent のワークスペースパス | `~/cow` |
| `agent_max_context_tokens` | 最大コンテキストトークン数 | `40000` |
| `agent_max_context_turns` | 最大コンテキストターン数 | `30` |
| `agent_max_steps` | タスクごとの最大判断ステップ数 | `15` |

<Tip>
  すべての設定オプションはプロジェクトの [`config.py`](https://github.com/zhayujie/CowAgent/blob/master/config.py) に記載されています。
</Tip>
````

## File: docs/ja/guide/quick-start.mdx
````markdown
---
title: ワンクリックインストール
description: スクリプトによるCowAgentのワンクリックインストールと管理
---

本プロジェクトでは、ワンクリックでのインストール、設定、起動、管理を行うスクリプトを提供しています。素早くセットアップするには、スクリプトによるデプロイを推奨します。

Linux、macOS、Windowsに対応しています。Python 3.7〜3.12が必要です（3.9を推奨）。

## インストールコマンド

<Tabs>
  <Tab title="Linux / macOS">
    ```bash
    bash <(curl -fsSL https://cdn.link-ai.tech/code/cow/run.sh)
    ```
  </Tab>
  <Tab title="Windows (PowerShell)">
    ```powershell
    irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex
    ```
  </Tab>
</Tabs>

スクリプトは以下の手順を自動的に実行します：

1. Python環境の確認（Python 3.7以上が必要）
2. 必要なツールのインストール（git、curlなど）
3. プロジェクトを `~/CowAgent` にクローン
4. Pythonの依存パッケージと Cow CLI をインストール
5. AIモデルとチャネルの対話式設定
6. サービスの起動

デフォルトでは、インストール後に Web コンソールが起動します。`http://localhost:9899` にアクセスしてチャットを開始できます。

## 管理コマンド

インストール後、`cow` コマンドでサービスを管理できます：

| コマンド | 説明 |
| --- | --- |
| `cow start` | サービスを起動 |
| `cow stop` | サービスを停止 |
| `cow restart` | サービスを再起動 |
| `cow status` | 実行状態を確認 |
| `cow logs` | リアルタイムログを表示 |
| `cow update` | コードを更新して再起動 |
| `cow install-browser` | ブラウザツールの依存をインストール |

詳細は[コマンドドキュメント](/ja/cli/index)を参照してください。

<Note>
  `cow` コマンドが利用できない場合は、`./run.sh <コマンド>`（Linux/macOS）または `.\scripts\run.ps1 <コマンド>`（Windows）で代替できます。機能は同等です。
</Note>
````

## File: docs/ja/guide/upgrade.mdx
````markdown
---
title: アップデート
description: CowAgent のアップグレード方法
---

## コマンドによるアップグレード（推奨）

`cow update` でコードの更新とサービスの再起動をワンクリックで実行できます：

```bash
cow update
```

このコマンドは以下のフローを自動的に実行します：

1. 最新コードをプル（`git pull`）
2. 現在のサービスを停止
3. Python 依存パッケージを更新
4. CLI を再インストール
5. サービスを起動

<Note>
  Cow CLI がインストールされていない場合は、`./run.sh update` でも同様の操作が可能です。
</Note>

## 手動アップグレード

プロジェクトのルートディレクトリで以下を実行します：

```bash
git pull
pip3 install -r requirements.txt
pip3 install -e .
```

更新完了後、サービスを再起動します：

```bash
# Cow CLI を使用
cow restart

# または run.sh を使用
./run.sh restart

# または nohup で直接実行
kill $(ps -ef | grep app.py | grep -v grep | awk '{print $2}')
nohup python3 app.py & tail -f nohup.out
```

## Docker アップグレード

`docker-compose.yml` があるディレクトリで以下を実行します：

```bash
sudo docker compose pull
sudo docker compose up -d
```

<Tip>
  アップグレード前に `config.json` 設定ファイルのバックアップを推奨します。Docker 環境でデータを保持する場合は、volume マウントでワークスペースディレクトリを永続化できます。
</Tip>
````

## File: docs/ja/intro/architecture.mdx
````markdown
---
title: アーキテクチャ
description: CowAgent 2.0 のシステムアーキテクチャとコア設計
---

CowAgent 2.0 は、シンプルなチャットボットから、自律的な思考、タスク計画、長期記憶、Skill の拡張性を備えた Agent アーキテクチャのスーパーインテリジェントアシスタントへと進化しました。

## システムアーキテクチャ

CowAgent のアーキテクチャは以下のコアモジュールで構成されています：

<img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/architecture/en/architecture.jpg" alt="CowAgent Architecture" />

| モジュール | 説明 |
| --- | --- |
| **Plan** | ユーザーの意図を理解し、複雑なタスクをマルチステップの計画に分解、目標達成までツールを反復的に呼び出す |
| **Memory** | 重要な情報をコアメモリとデイリーメモリとして自動永続化し、キーワードとベクトルのハイブリッド検索でセッション間の連続性を実現 |
| **Knowledge** | トピック別に構造化された知識を整理。Agent が価値ある情報を Markdown ページとして自律的に整理し、インデックスと相互参照で成長するナレッジネットワークを構築 |
| **Tools** | Agent が OS リソースにアクセスするための中核能力。ファイル読み書き、ターミナル、ブラウザ、スケジューラ、記憶検索、Web 検索など 10 以上の組み込みツール |
| **Skills** | Skill の読み込み・管理。Skill Hub や GitHub からのワンクリックインストール、または会話を通じたカスタム Skill の作成をサポート |
| **Models** | モデル層。OpenAI、Claude、Gemini、DeepSeek、MiniMax、GLM、Qwen など主要 LLM への統一アクセスを提供 |
| **Channels** | メッセージチャネル層。Web コンソール、WeChat、Feishu、DingTalk、WeCom、公式アカウントなど複数チャネルを統一プロトコルでサポート |
| **CLI** | コマンドラインシステム。ターミナルコマンド（`cow`）とチャットコマンド（`/`）で、プロセス管理、Skill インストール、設定変更、ナレッジベース管理などをサポート |

## Agent モードのワークフロー

Agent モードが有効な場合、CowAgent は以下のワークフローで自律的な Agent として動作します：

1. **メッセージ受信** — チャネルを通じてユーザーの入力を受信
2. **意図の理解** — タスク要件とコンテキストを分析
3. **タスク計画** — 複雑なタスクを複数のステップに分解
4. **ツール呼び出し** — 各ステップに適切なツールを選択・実行
5. **記憶・ナレッジの更新** — 重要な情報を長期記憶に保存し、構造化された知識をナレッジベースに整理
6. **結果の返却** — 実行結果をユーザーに送信

## ワークスペースのディレクトリ構成

Agent のワークスペースはデフォルトで `~/cow` にあり、システムプロンプト、記憶ファイル、Skill ファイルを格納しています：

```
~/cow/
├── system.md          # Agent システムプロンプト
├── user.md            # ユーザープロフィール
├── MEMORY.md          # コアメモリ
├── memory/            # 長期記憶ストレージ
│   └── YYYY-MM-DD.md  # デイリーメモリ
├── knowledge/         # パーソナルナレッジベース
│   ├── index.md       # ナレッジインデックス
│   └── <category>/    # トピック別ページ
└── skills/            # カスタム Skill
    ├── skill-1/
    └── skill-2/
```

シークレットキーはセキュリティのため `~/.cow` ディレクトリに別途保存されます：

```
~/.cow/
└── .env               # Skill 用のシークレットキー
```

## コア設定

`config.json` で Agent モードのパラメータを設定します：

```json
{
  "agent": true,
  "agent_workspace": "~/cow",
  "agent_max_context_tokens": 40000,
  "agent_max_context_turns": 30,
  "agent_max_steps": 15
}
```

| パラメータ | 説明 | デフォルト値 |
| --- | --- | --- |
| `agent` | Agent モードの有効化 | `true` |
| `agent_workspace` | ワークスペースのパス | `~/cow` |
| `agent_max_context_tokens` | 最大コンテキストトークン数 | `40000` |
| `agent_max_context_turns` | 最大コンテキストターン数 | `30` |
| `agent_max_steps` | タスクあたりの最大判断ステップ数 | `15` |
| `knowledge` | パーソナルナレッジベースの有効化 | `true` |
````

## File: docs/ja/intro/features.mdx
````markdown
---
title: 機能詳細
description: CowAgent の長期記憶、タスク計画、Skill システム、CLI コマンド、ブラウザツールの詳細
---

## 1. 長期記憶

記憶システムにより、Agent は重要な情報を長期にわたって記憶できます。三層記憶フローを採用：会話コンテキスト（短期）→ デイリーメモリ（中期）→ MEMORY.md（長期）、完全な記憶ライフサイクルを形成します。

初回起動時、Agent はユーザーに重要な情報を自発的に尋ね、ワークスペース（デフォルト `~/cow`）に記録します。これには Agent の設定、ユーザーの身元情報、記憶ファイルが含まれます。

その後の長期的な会話において、Agent は必要に応じてインテリジェントに記憶を保存・取得し、自身の設定やユーザーの好み、記憶ファイルを継続的に更新します。毎日 **Deep Dream（夢境蒸留）** が自動実行され、散在するデイリーメモリを精製された長期記憶に統合し、ナラティブスタイルの夢日記を生成します。

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260203000455.png" width="800" />
</Frame>

詳細は [長期記憶](/ja/memory) と [Deep Dream](/ja/memory/deep-dream) を参照してください。

## 2. パーソナルナレッジベース

> ナレッジベースシステムにより、Agent は構造化された知識を継続的に蓄積・整理できます。時系列で記録されるメモリとは異なり、ナレッジベースはトピック別に整理され、記事、会話からの洞察、学習資料などを相互にリンクされた Markdown ページとして整理し、継続的に成長するナレッジネットワークを形成します。

Agent は会話中に価値ある情報を自動的にナレッジページとして整理し、相互参照とインデックスを維持します。Web コンソールではドキュメントの閲覧とナレッジグラフの可視化が可能です。ナレッジはワークスペースの `~/cow/knowledge/` ディレクトリに保存されます。

- **自動整理**：Agent が会話中に構造化された知識を自律的に抽出・整理し、インデックスと相互参照を維持
- **ナレッジグラフ**：ページ間の相互参照から自動的にナレッジグラフを構築し、Web コンソールでインタラクティブな関係図として可視化
- **チャット連携**：Agent の回答で参照されるナレッジドキュメントのリンクを Web コンソールで直接クリックして閲覧可能
- **CLI 管理**：`/knowledge` コマンドで統計表示、ディレクトリ閲覧、`/knowledge on|off` で機能の切り替えが可能

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260413105435.png" width="800" />
</Frame>

詳細は [パーソナルナレッジベース](/ja/knowledge) を参照してください。

## 3. タスク計画とツール活用

ツールは Agent がオペレーティングシステムのリソースにアクセスするための中核です。Agent はタスク要件に基づいてインテリジェントにツールを選択・呼び出し、ファイルの読み書き、コマンド実行、スケジュールタスクなどを実行します。組み込みツールはプロジェクトの `agent/tools/` ディレクトリに実装されています。

**主なツール：** ファイルの読み書き・編集、Bash ターミナル、ブラウザ操作、ファイル送信、スケジューラ、記憶検索、Web 検索、環境設定など。

### 3.1 ターミナルとファイルアクセス

OS のターミナルとファイルシステムへのアクセスは、最も基本的かつ中核的な機能です。多くの他のツールや Skill はこの機能の上に構築されています。ユーザーはモバイルデバイスから Agent とやり取りし、パソコンやサーバーのリソースを操作できます：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202181130.png" width="800" />
</Frame>

### 3.2 プログラミング能力

プログラミングとシステムアクセスを組み合わせることで、Agent は完全な **Vibecoding ワークフロー** を実行できます。情報検索、アセット生成、コーディング、テスト、デプロイ、Nginx 設定、公開まで、すべてスマートフォンからの一つのコマンドで実行可能です：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260318211018.png" width="800" />
</Frame>

### 3.3 スケジュールタスク

`scheduler` ツールにより動的なスケジュールタスクが可能で、**ワンタイムタスク、固定間隔、Cron 式**をサポートしています。タスクは**固定メッセージ送信**または **Agent 動的タスク**実行としてトリガーできます：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202195402.png" width="800" />
</Frame>

### 3.4 ブラウザ操作

組み込みの `browser` ツールにより、Agent は Chromium ブラウザを制御して Web ページへのアクセス、フォームの入力、要素のクリック、スクリーンショットの撮影が可能です。動的 JS レンダリングページにも対応しています。`cow install-browser` でワンコマンドインストール、サーバー（ヘッドレス）とデスクトップ環境に自動対応します：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260401110103.png" width="800" />
</Frame>

### 3.5 環境変数管理

Skill が必要とするシークレットキーは環境変数ファイルに保存され、`env_config` ツールによって管理されます。会話を通じてシークレットを更新でき、セキュリティ保護とマスキング機能が組み込まれています：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202234939.png" width="800" />
</Frame>

## 4. Skill システム

Skill システムは Agent に無限の拡張性を提供します。各 Skill は説明ファイル、実行スクリプト（任意）、リソース（任意）で構成され、特定のタイプのタスクを完了する方法を記述します。Skill により Agent は複雑なワークフローの指示に従い、ツールを呼び出し、サードパーティシステムと連携できます。

- [Skill Hub](https://skills.cowagent.ai/)：オープンな Skill マーケットプレイス。公式推奨、コミュニティ、サードパーティの Skill を収録。ワンコマンドでインストール可能。
- **組み込み Skill：** プロジェクトの `skills/` ディレクトリにあり、Skill クリエイター、画像認識、LinkAI Agent、Web フェッチなどが含まれます。組み込み Skill は依存条件（API キー、システムコマンドなど）に基づいて自動的に有効化されます。
- **カスタム Skill：** ユーザーが会話を通じて作成し、ワークスペース（`~/cow/skills/`）に保存されます。あらゆる複雑なビジネスプロセスやサードパーティ連携を実装できます。

Skill のインストール：`/skill install <名前>` または `cow skill install <名前>`。Skill Hub、GitHub、ClawHub、URL などからインストール可能。

### 4.1 Skill の作成

`skill-creator` Skill により、会話を通じて Skill を素早く作成できます。ワークフローを Skill としてコード化するよう Agent に依頼したり、API ドキュメントやサンプルを送信して Agent に直接連携を完成させることができます：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202202247.png" width="800" />
</Frame>

### 4.2 Web 検索と画像認識

- **Web 検索：** 組み込みの `web_search` ツールで、複数の検索エンジンをサポートします。`BOCHA_API_KEY` または `LINKAI_API_KEY` を設定して有効化してください。
- **画像認識：** 組み込みの `openai-image-vision` Skill で、`gpt-4.1-mini`、`gpt-4.1` などのモデルをサポートします。`OPENAI_API_KEY` が必要です。

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202213219.png" width="800" />
</Frame>

### 4.3 Skill Hub

[skills.cowagent.ai](https://skills.cowagent.ai/) で利用可能なすべての Skill を閲覧するか、会話内でコマンドを実行できます：

```text
/skill list --remote          # Skill Hub を閲覧
/skill search <キーワード>     # Skill を検索
/skill install <名前>          # ワンコマンドでインストール
```

GitHub、ClawHub、LinkAI などサードパーティプラットフォームの Skill もインストール可能です。詳細は [Skill のインストール](/ja/skills/install) を参照してください。

<img src="https://cdn.link-ai.tech/doc/20260401110103.png" width="750" />

## 5. CLI コマンドシステム

CowAgent はサービス管理、Skill インストール、設定変更などをカバーする2つのコマンドインターフェースを提供します：

- **ターミナル CLI：** システムターミナルで `cow <コマンド>` を実行。`start`、`stop`、`restart`、`update`、`status`、`logs`、`skill` などをサポート。
- **チャットコマンド：** 会話内で `/<コマンド>` を入力。Web コンソールでは `/` を入力するとコマンドメニューが表示されます。

```bash
cow start              # サービスを開始
cow stop               # サービスを停止
cow update             # 更新して再起動
cow skill install pptx # Skill をインストール
cow install-browser    # ブラウザツールをインストール
```

詳細は [コマンド一覧](https://docs.cowagent.ai/ja/cli) を参照してください。
````

## File: docs/ja/intro/index.mdx
````markdown
---
title: はじめに
description: CowAgent - LLM を活用した AI スーパーアシスタント
---

<img src="https://cdn.link-ai.tech/doc/78c5dd674e2c828642ecc0406669fed7.png" alt="CowAgent" width="600px"/>

**CowAgent** は、自律的なタスク計画、長期記憶、Skill システム、マルチモーダルメッセージ、複数モデル対応、マルチプラットフォームデプロイを備えた、LLM を活用した AI スーパーアシスタントです。

CowAgent は自ら思考しタスクを計画し、コンピュータや外部リソースを操作し、Skill を作成・実行し、長期記憶により継続的に成長します。複数モデルの柔軟な切り替えをサポートし、テキスト、音声、画像、ファイルなどのマルチモーダルメッセージを処理でき、WeChat、Web、Feishu（飛書）、DingTalk（釘釘）、WeCom（企業微信）、WeChat公式アカウントに統合できます。お使いのパソコンやサーバー上で24時間365日稼働します。

<Card title="GitHub" icon="github" href="https://github.com/zhayujie/CowAgent">
  github.com/zhayujie/CowAgent
</Card>

## コア機能

<CardGroup cols={2}>
  <Card title="自律タスク計画" icon="brain" href="/ja/intro/architecture">
    複雑なタスクを理解し、自律的に実行計画を立て、目標が達成されるまで思考とツール呼び出しを続けます。ツールを通じてファイルシステム、ターミナル、ブラウザ、スケジューラなどのシステムリソースにアクセスできます。
  </Card>
  <Card title="長期記憶" icon="database" href="/ja/memory">
    三層記憶フロー（コンテキスト→デイリーメモリ→グローバルメモリ）、毎日 Deep Dream 蒸留で整理、キーワード検索とベクトル検索に対応。
  </Card>
  <Card title="ナレッジベース" icon="book" href="/ja/knowledge">
    構造化された知識を自動整理し、ナレッジグラフの可視化をサポート。相互参照により継続的に成長するナレッジネットワークを構築します。
  </Card>
  <Card title="Skill システム" icon="puzzle-piece" href="/ja/skills/index">
    Skill の作成・実行エンジンを実装し、組み込み Skill を搭載。自然言語の会話を通じてカスタム Skill の開発もサポートしています。
  </Card>
  <Card title="マルチモーダルメッセージ" icon="image" href="/ja/channels/web">
    テキスト、画像、音声、ファイルなどのメッセージタイプの解析、処理、生成、送信をサポートします。
  </Card>
  <Card title="ツールシステム" icon="wrench" href="/ja/tools/index">
    ファイル読み書き、ターミナル実行、ブラウザ操作、スケジュールタスク、メッセージ送信などの組み込みツールを提供。Agent が自律的にツールを呼び出して複雑なタスクを完了します。
  </Card>
  <Card title="コマンドシステム" icon="terminal" href="/ja/cli/index">
    ターミナル CLI とチャット内コマンドを提供し、プロセス管理、Skill インストール、設定変更、コンテキスト確認などの一般的な操作をサポートします。
  </Card>
  <Card title="複数モデル対応" icon="microchip" href="/ja/models/index">
    OpenAI、Claude、Gemini、DeepSeek、MiniMax、GLM、Qwen、Kimi、Doubao など、主要なモデルプロバイダーをサポートしています。
  </Card>
  <Card title="マルチプラットフォームデプロイ" icon="server" href="/ja/channels/weixin">
    ローカルコンピュータやサーバー上で動作し、WeChat、Web、Feishu（飛書）、DingTalk（釘釘）、WeChat公式アカウント、WeCom（企業微信）アプリケーションに統合できます。
  </Card>
</CardGroup>

## クイック体験

ターミナルで以下のコマンドを実行すると、ワンクリックでインストール、設定、起動ができます：

<Tabs>
  <Tab title="Linux / macOS">
    ```bash
    bash <(curl -fsSL https://cdn.link-ai.tech/code/cow/run.sh)
    ```
  </Tab>
  <Tab title="Windows (PowerShell)">
    ```powershell
    irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex
    ```
  </Tab>
</Tabs>

デフォルトでは実行後に Web サービスが起動します。`http://localhost:9899/chat` にアクセスして Web インターフェースでチャットできます。

<CardGroup cols={2}>
  <Card title="クイックスタート" icon="rocket" href="/ja/guide/quick-start">
    インストールと実行の完全ガイド
  </Card>
  <Card title="アーキテクチャ" icon="sitemap" href="/ja/intro/architecture">
    CowAgent システムアーキテクチャ設計
  </Card>
</CardGroup>

## 免責事項

1. 本プロジェクトは [MIT License](https://github.com/zhayujie/CowAgent/blob/master/LICENSE) に基づき、技術研究および学習を目的としています。利用者は現地の法律、規制、ポリシー、および企業の社内規程を遵守する必要があります。違法行為や権利侵害につながる利用は禁止されています。
2. Agent モードは通常のチャットモードよりも多くのトークンを消費します。効果とコストを考慮してモデルを選択してください。Agent はホスト OS にアクセスできるため、デプロイには十分注意してください。
3. CowAgent はオープンソース開発に注力しており、いかなる暗号通貨の発行、認可、参加も行っておりません。

## コミュニティ

WeChat でアシスタントを追加して、オープンソースコミュニティに参加しましょう：

<img width="140" src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/open-community.png" />
````

## File: docs/ja/knowledge/index.mdx
````markdown
---
title: パーソナルナレッジベース
description: CowAgent のパーソナルナレッジベース — 構造化された知識の蓄積、自動整理、ナレッジグラフ
---

パーソナルナレッジベースは、Agent の長期的な構造化知識ストレージで、ワークスペースの `knowledge/` ディレクトリに保存されます。タイムラインで整理されるメモリとは異なり、ナレッジベースはトピック別にコンテンツを整理します。記事、会話のインサイト、学習資料が相互リンクされた Markdown ページとして構造化され、継続的に成長するナレッジネットワークを形成します。

## コアコンセプト

### ナレッジ vs メモリ

| 次元 | ナレッジベース（knowledge/） | 長期記憶（memory/） |
| --- | --- | --- |
| 整理方法 | トピック別、相互リンク | タイムライン順、日付ファイル |
| 書き込み | Agent が能動的に構造化 | コンテキストトリミング時に自動要約 |
| コンテンツ | 精製された構造化知識 | 生の会話要約 |
| 用途 | 学習ノート、技術ドキュメント、プロジェクト知識 | 会話履歴、イベント記録 |

### ディレクトリ構造

```
~/cow/knowledge/
├── index.md          # ナレッジインデックス、全ページのエントリポイント
├── log.md            # 変更ログ、各書き込みの記録
├── concepts/         # 概念的な知識
│   └── machine-learning.md
├── entities/         # エンティティ知識（人物、組織、ツール）
│   └── openai.md
└── sources/          # ソース知識（記事、論文）
    └── llm-wiki.md
```

ディレクトリ構造は柔軟です — Agent は実際のコンテンツに基づいて適切なカテゴリディレクトリを自動作成します。ユーザーが整理方法をカスタマイズすることも可能です。

## 自動整理

ナレッジの書き込みは Agent の自律的な動作で、以下のシナリオでトリガーされます：

- **ユーザーが記事やドキュメントを共有** — Agent が自動的にキー情報を抽出し、構造化されたナレッジページを作成
- **会話から価値ある結論が生まれた場合** — Agent がインサイトをナレッジページに整理し、既存の知識とリンク
- **ユーザーが明示的に整理を要求** — ユーザーは会話を通じて Agent にナレッジの整理・更新を指示可能

各ナレッジページには関連ページへの相互参照リンクが含まれ、ナレッジグラフを段階的に構築します。

<Frame>
  <img src="https://gist.github.com/user-attachments/assets/3ce92f78-1863-4820-8fa8-660c0f2b7f09" alt="会話によるナレッジの取り込み" />
</Frame>

## ナレッジ検索

Agent は会話中に以下の方法でナレッジを検索できます：

- **インデックス参照** — `knowledge/index.md` で関連ページを素早く特定
- **セマンティック検索** — `memory_search` ツールでナレッジコンテンツをセマンティック検索
- **直接読み取り** — `memory_get` ツールで特定のナレッジファイルを読み取り

## Web コンソール

Web コンソールには専用の「ナレッジ」モジュールがあり、以下をサポートします：

- **ドキュメント閲覧** — ツリー形式のディレクトリ構造、検索・折りたたみ可能、クリックでコンテンツ表示
- **ナレッジグラフ** — インタラクティブなグラフによるナレッジ間の関係を可視化
- **チャット連携** — Agent の返信で参照されたナレッジドキュメントリンクはクリックで直接ナビゲーション

<Frame>
  <img src="https://gist.github.com/user-attachments/assets/b7b9d6be-0ac1-4c65-803b-2c6b36bd59a7" alt="ナレッジドキュメント閲覧" />
</Frame>

<Frame>
  <img src="https://gist.github.com/user-attachments/assets/44ae68ca-96cc-40b9-ab33-cdbec34c2379" alt="ナレッジグラフの可視化" />
</Frame>

## CLI コマンド

`/knowledge` コマンドでナレッジベースを管理：

| コマンド | 説明 |
| --- | --- |
| `/knowledge` | ナレッジベースの統計情報を表示 |
| `/knowledge list` | ファイルディレクトリをツリー形式で表示 |
| `/knowledge on` | ナレッジベース機能を有効化 |
| `/knowledge off` | ナレッジベース機能を無効化 |

## 設定

| パラメータ | 説明 | デフォルト |
| --- | --- | --- |
| `knowledge` | パーソナルナレッジベースの有効/無効 | `true` |
| `agent_workspace` | ワークスペースパス、ナレッジは `knowledge/` サブディレクトリに保存されます | `~/cow` |
````

## File: docs/ja/memory/context.mdx
````markdown
---
title: 短期記憶
description: 会話コンテキスト — メッセージ管理、圧縮戦略、コンテキスト操作
---

会話コンテキストは Agent の短期記憶であり、現在のセッション内のすべてのメッセージ（ユーザー入力、Agent の返信、ツール呼び出しと結果）を含みます。適切なコンテキスト管理は、Agent の推論品質とコスト制御にとって重要です。

## コンテキストの構造

各会話ターンは以下で構成されます：

```
ユーザーメッセージ → Agent の思考 → ツール呼び出し → ツール結果 → ... → Agent の最終返信
```

1 つのターンには複数のツール呼び出しが含まれる場合があります（`agent_max_steps` で制御）。すべてのツール呼び出しと結果は、圧縮またはトリミングされるまでコンテキストに保持されます。

## 主要な設定

| パラメータ | 説明 | デフォルト値 |
| --- | --- | --- |
| `agent_max_context_tokens` | コンテキストの最大トークン予算 | `50000` |
| `agent_max_context_turns` | コンテキストの最大会話ターン数 | `20` |
| `agent_max_steps` | ターンあたりの最大判断ステップ数（ツール呼び出し回数） | `15` |

`config.json` またはチャットの `/config` コマンドで設定できます。

## 圧縮戦略

コンテキストが制限を超えた場合、システムは自動的に圧縮を実行してスペースを解放します。このプロセスには複数の段階があります：

### 1. ツール結果の切り詰め

各判断ループの開始前に、過去のターンのツール呼び出し結果を確認します。**20,000 文字** を超えるツール結果は切り詰められ、先頭と末尾のみが保持されます。現在のターンの結果は影響を受けません。

### 2. ターンのトリミング

会話ターン数が `agent_max_context_turns` を超えた場合：

- **最も古い半分** の完全なターンがトリミングされます（ツール呼び出しチェーンの完全性を保証）
- トリミングされたメッセージは LLM によって要約され、**日次記憶ファイルに書き込まれます**
- LLM 要約が完了すると、保持されたコンテキストの最初のユーザーメッセージの先頭に要約が**注入**され、モデルが会話の文脈を維持できるようにします
- 要約注入はバックグラウンドで非同期に実行され、次のターンから有効になります

### 3. トークン予算のトリミング

ターンのトリミング後、トークン数がまだ予算を超えている場合：

- **5 ターン未満の場合**：すべてのターンで**テキスト圧縮**を実行 — 各ターンは最初のユーザーテキストと最後の Agent 返信のみを保持し、中間のツール呼び出しチェーンを削除
- **5 ターン以上の場合**：**前半のターン**を再度トリミングし、破棄されたコンテンツも記憶に書き込まれ、コンテキスト要約も注入されます

### 4. オーバーフロー緊急処理

モデル API がコンテキストオーバーフローエラーを返した場合：

1. 現在のすべてのメッセージを要約して記憶に書き込み
2. 積極的なトリミングを適用（ツール結果は 10K 文字に制限、ユーザーテキストは 10K、最大 5 ターン）
3. それでもオーバーフローする場合は、会話コンテキスト全体をクリア

## セッションの永続化

会話メッセージはローカルデータベースに永続化され、サービス再起動後に自動的に復元されます。復元戦略：

- 最近の **`max(3, max_context_turns / 6)`** ターンを復元
- 各ターンの**ユーザーテキストと Agent の最終返信のみ**を保持し、中間のツール呼び出しチェーンは復元しません
- **30 日** を超える過去のセッションは自動的にクリーンアップされます

## 操作コマンド

チャットで以下のコマンドを使用してコンテキストを管理できます：

| コマンド | 説明 |
| --- | --- |
| `/context` | 現在のコンテキスト統計を表示（メッセージ数、ロール分布、合計文字数） |
| `/context clear` | 現在のセッションコンテキストをクリア |
| `/config agent_max_context_tokens 80000` | コンテキストトークン予算を調整 |
| `/config agent_max_context_turns 30` | コンテキストターン上限を調整 |

<Tip>
  コンテキストをクリアすると、Agent は以前の会話内容を「忘れます」。すでに長期記憶に書き込まれたコンテンツは、記憶検索を通じて引き続き取得できます。
</Tip>
````

## File: docs/ja/memory/deep-dream.mdx
````markdown
---
title: 夢境蒸留
description: Deep Dream — 会話から永続記憶への自動蒸留メカニズム
---

夢境蒸留（Deep Dream）は CowAgent の記憶システムの中核的な整理メカニズムであり、散在する日次記憶を精錬された長期記憶に蒸留し、夢日記を生成します。

## 記憶の流れ

CowAgent の記憶は短期から長期まで 3 つの段階を経ます：

```
会話コンテキスト（短期）→ 日次記憶（中期）→ MEMORY.md（長期）
```

### 1. 会話 → 日次記憶

会話コンテキストがトリミングされた時、または毎日のスケジュール要約時に、LLM が会話内容を重要イベントに要約し、日次記憶ファイル `memory/YYYY-MM-DD.md` に書き込みます。

トリガー：
- **コンテキストトリミング** — ターン数またはトークン制限を超えた時、トリミングされた内容が要約されます
- **毎日のスケジュール** — 23:55 に自動トリガー
- **API オーバーフロー** — 現在の会話要約の緊急保存

### 2. 日次記憶 → MEMORY.md（蒸留）

毎日の要約完了後、Deep Dream が自動的に蒸留を実行します：

1. **材料の読み込み** — 現在の `MEMORY.md` + 当日の日次記憶
2. **LLM 蒸留** — 重複排除、統合、剪定、新情報の抽出
3. **MEMORY.md の上書き** — 精錬された長期記憶を出力
4. **夢日記の生成** — 整理過程の発見と洞察を記録

### 3. MEMORY.md の役割

`MEMORY.md` は毎回の会話のシステムプロンプトに注入され、Agent がユーザーの好み、決定、重要な事実を常に把握できるようにします。そのため簡潔に保つ必要があり、Deep Dream は約 30 項目以内に制御します。

## 蒸留ルール

Deep Dream は以下の整理ルールに従います：

| 操作 | 説明 |
| --- | --- |
| **統合・精錬** | 類似する複数の項目を 1 つの高密度な表現に統合 |
| **新規抽出** | 日次記憶から好み、決定、人物、経験を抽出 |
| **矛盾更新** | 新情報が古い項目と矛盾する場合、新情報を優先 |
| **無効クリーン** | 一時的な記録、空白項目、フォーマット残留を削除 |
| **冗長削除** | より精錬された表現でカバーされた古い項目を削除 |

## 夢日記

各蒸留で夢日記が生成され、`memory/dreams/YYYY-MM-DD.md` に保存されます。ナラティブスタイルで以下を記録します：

- 発見された重複や矛盾
- 日次記憶から抽出された新しい洞察
- 実行されたクリーンアップと最適化
- 全体的な観察

夢日記は Web コンソールの「メモリ管理 → 夢日記」タブで確認できます。

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260414110032.png" width="800" />
</Frame>

## 手動トリガー

毎日の自動実行に加えて、チャットで手動トリガーできます：

```text
/memory dream [N]
```

- `N`：直近 N 日間の記憶を整理（デフォルト 3 日、最大 30 日）
- バックグラウンドで非同期に実行され、完了するとチャットで通知されます
- Web 通知にはクリック可能なリンクが含まれ、MEMORY.md と夢日記を直接確認できます
- Agent の初期化不要 — 最初の会話前でも使用可能

<Tip>
  初回デプロイ後は `/memory dream 30` を一度実行して、すべての履歴日次記憶を MEMORY.md に蒸留することをお勧めします。
</Tip>

## 安全メカニズム

| メカニズム | 説明 |
| --- | --- |
| **コンテンツなしでスキップ** | 日次記憶がない場合、蒸留をスキップし空の上書きを回避 |
| **入力重複排除** | スケジュールタスクで、入力材料が変更されていない場合自動スキップ |
| **非同期実行** | 蒸留はバックグラウンドスレッドで実行、会話をブロックしない |
| **順序保証** | スケジュールタスクで、日次フラッシュ完了後に蒸留を開始 |
| **捏造禁止** | プロンプトで既存の材料のみに基づく整理を明示的に制約 |
````

## File: docs/ja/memory/index.mdx
````markdown
---
title: 長期記憶
description: CowAgent の長期記憶システム — ファイル永続化、自動書き込み、ハイブリッド検索
---

長期記憶はワークスペースのファイルに保存され、セッション間で永続化されます。Agent は会話中に検索ツールを通じて過去の記憶をオンデマンドで読み込み、コンテキストのトリミング時に会話の要約を自動的に長期記憶に書き込みます。

<img src="https://cdn.link-ai.tech/doc/memory-architecture-en.jpg" alt="Memory Architecture" />

## 記憶の種類

### コア記憶（MEMORY.md）

`~/cow/MEMORY.md` に保存され、長期的なユーザーの好み、重要な決定、主要な事実など、時間が経っても薄れない情報を含みます。Agent はツールを通じてこのファイルを読み書きし、長期的な知識を維持します。

### 日次記憶（memory/YYYY-MM-DD.md）

`~/cow/memory/` ディレクトリに保存され、日付で命名されます（例：`2026-03-08.md`）。日々の会話の要約と主要なイベントを記録します。空ファイルの生成を避けるため、最初の書き込み時にのみファイルが作成されます。

### 夢日記（memory/dreams/YYYY-MM-DD.md）

Deep Dream（記憶蒸留）プロセスの副産物で、各整理で発見された重複、統合操作、新しい洞察を記録します。`~/cow/memory/dreams/` ディレクトリに日付で命名されて保存されます。

## 自動書き込み

Agent は以下のメカニズムにより、会話内容を長期記憶に自動的に永続化します：

- **コンテキストトリミング時** — 会話ターン数またはトークン数が設定上限を超えた場合、最も古い半分のコンテキストがトリミングされ、LLM によって要約されて日次記憶ファイルに書き込まれます。要約は保持されたコンテキストにも非同期で注入され、会話の連続性を維持します
- **毎日のスケジュール要約** — 毎日 23:55 に自動的にフル要約がトリガーされ、アクティビティが少ない日でも記憶が保存されます（内容が変更されていない場合はスキップ）
- [夢境蒸留（Deep Dream）](/ja/memory/deep-dream) — 毎日の要約完了後に自動実行され、日次記憶を MEMORY.md に蒸留し、夢日記を生成します
- **API コンテキストオーバーフロー時** — モデル API がコンテキストオーバーフローエラーを返した場合、緊急措置として現在の会話要約が保存されます

すべての記憶書き込みはバックグラウンドスレッドで非同期に実行され（LLM の要約 + ファイル書き込み）、通常の会話応答をブロックしません。

## 関連ファイル

ワークスペース（デフォルト `~/cow`）内の記憶関連ファイル：

| ファイル | 説明 |
| --- | --- |
| `AGENT.md` | Agent のパーソナリティと動作設定 |
| `USER.md` | ユーザーの身元情報と好み |
| `RULE.md` | カスタムルールと制約 |
| `MEMORY.md` | コア記憶（長期） |
| `memory/YYYY-MM-DD.md` | 日次記憶（オンデマンドで作成） |
| `memory/dreams/YYYY-MM-DD.md` | 夢日記（Deep Dream で自動生成） |

## Web コンソール

Web コンソールの記憶管理ページで、記憶ファイルと夢日記を閲覧できます。タブ切り替えに対応：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260414171014.png" width="800" />
</Frame>

## 設定

| パラメータ | 説明 | デフォルト |
| --- | --- | --- |
| `agent_workspace` | ワークスペースパス、記憶ファイルはこのディレクトリ配下に保存されます | `~/cow` |
| `agent_max_context_tokens` | 最大コンテキストトークン数。超過時にトリミングされ、記憶として要約されます | `50000` |
| `agent_max_context_turns` | 最大コンテキストターン数。超過時にトリミングされ、記憶として要約されます | `20` |
````

## File: docs/ja/models/claude.mdx
````markdown
---
title: Claude
description: Anthropic Claude モデル設定（テキスト対話 + 画像理解）
---

Claude は Anthropic が提供するモデルで、テキスト対話と画像理解をサポートします。主流の Sonnet / Opus モデルはネイティブにビジョンをサポートしており、別途 Vision モデルを指定する必要はありません。

<Tip>
  Web コンソールの「モデル管理」ページから、以下のすべての機能をワンストップで設定でき、設定ファイルを手動で編集する必要はありません。
</Tip>

## テキスト対話

```json
{
  "model": "claude-sonnet-4-6",
  "claude_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | `claude-sonnet-4-6`、`claude-opus-4-7`、`claude-opus-4-6`、`claude-sonnet-4-5`、`claude-sonnet-4-0`、`claude-3-5-sonnet-latest` などをサポート。詳細は [公式モデル一覧](https://docs.anthropic.com/en/docs/about-claude/models/overview) を参照 |
| `claude_api_key` | [Claude コンソール](https://console.anthropic.com/settings/keys) で作成 |
| `claude_api_base` | 任意。デフォルトは `https://api.anthropic.com/v1`。サードパーティのプロキシに変更可能 |

### モデル選択

| モデル | 用途 |
| --- | --- |
| `claude-sonnet-4-6` | デフォルト推奨。コストパフォーマンスと速度のバランスが良い |
| `claude-opus-4-7` | 複雑な推論や長いタスクチェーンに最適。効果は最高だがコストも高い |
| `claude-sonnet-4-5` / `claude-sonnet-4-0` | 前世代のフラッグシップ。価格はより安い |

## 画像理解

`claude_api_key` を設定すると、Agent の Vision ツールは Claude のメインモデルを使用して自動的に画像を認識します。追加設定は不要です。

Vision モデルを手動で指定したい場合は、設定ファイルで明示的に指定できます：

```json
{
  "tools": {
    "vision": {
      "model": "claude-sonnet-4-6"
    }
  }
}
```
````

## File: docs/ja/models/coding-plan.mdx
````markdown
---
title: Coding Plan
description: Coding Planモデルの設定
---

> Coding Planは各プロバイダーが提供する月額サブスクリプションパッケージで、高頻度のAgent利用に最適です。CowAgentはOpenAI互換モードにより、すべてのCoding Planプロバイダーをサポートしています。

<Note>
  Coding PlanのAPI BaseとAPI Keyは、通常の従量課金制のものとは別になっています。各プロバイダーのプラットフォームから取得してください。
</Note>

## 共通設定

すべてのプロバイダーはOpenAI互換プロトコルでアクセスでき、Webコンソールから素早く設定できます。モデルプロバイダーを**OpenAI**に設定し、カスタムモデルを選択してモデルコードを入力し、対応するプロバイダーのAPI BaseとAPI Keyを入力してください:

<img src="https://cdn.link-ai.tech/doc/20260318113134.png" width="800"/>

`config.json`で直接設定することも可能です:

```json
{
  "bot_type": "openai",
  "model": "MODEL_NAME",
  "open_ai_api_base": "PROVIDER_CODING_PLAN_API_BASE",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `bot_type` | `openai`を指定（OpenAI互換モード） |
| `model` | プロバイダーがサポートするモデル名 |
| `open_ai_api_base` | プロバイダーのCoding Plan API Base URL |
| `open_ai_api_key` | プロバイダーのCoding Plan API Key |

---

## 阿里云

```json
{
  "bot_type": "openai",
  "model": "qwen3.5-plus",
  "open_ai_api_base": "https://coding.dashscope.aliyuncs.com/v1",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | `qwen3.5-plus`、`qwen3-max-2026-01-23`、`qwen3-coder-next`、`qwen3-coder-plus`、`glm-5`、`glm-4.7`、`kimi-k2.5`、`MiniMax-M2.5` |
| `open_ai_api_base` | `https://coding.dashscope.aliyuncs.com/v1` |
| `open_ai_api_key` | Coding Plan専用キー（従量課金とは共有不可） |

参考: [クイックスタート](https://help.aliyun.com/zh/model-studio/coding-plan-quickstart?spm=a2c4g.11186623.help-menu-2400256.d_0_2_1.70115203zi5Igc)、[モデル一覧](https://help.aliyun.com/zh/model-studio/coding-plan)

---

## MiniMax

```json
{
  "bot_type": "openai",
  "model": "MiniMax-M2.5",
  "open_ai_api_base": "https://api.minimaxi.com/v1",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | `MiniMax-M2.5`、`MiniMax-M2.5-highspeed`、`MiniMax-M2.1`、`MiniMax-M2` |
| `open_ai_api_base` | 中国: `https://api.minimaxi.com/v1`、グローバル: `https://api.minimax.io/v1` |
| `open_ai_api_key` | Coding Plan専用キー（従量課金とは共有不可） |

参考: [中国キー](https://platform.minimaxi.com/docs/coding-plan/quickstart)、[モデル一覧](https://platform.minimaxi.com/docs/guides/pricing-coding-plan)、[グローバルキー](https://platform.minimax.io/docs/coding-plan/quickstart)

---

## 智谱 GLM

```json
{
  "bot_type": "openai",
  "model": "glm-4.7",
  "open_ai_api_base": "https://open.bigmodel.cn/api/coding/paas/v4",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | `glm-5`、`glm-4.7`、`glm-4.6`、`glm-4.5`、`glm-4.5-air` |
| `open_ai_api_base` | 中国: `https://open.bigmodel.cn/api/coding/paas/v4`、グローバル: `https://api.z.ai/api/coding/paas/v4` |
| `open_ai_api_key` | 標準APIと共有 |

参考: [中国クイックスタート](https://docs.bigmodel.cn/cn/coding-plan/quick-start)、[グローバルクイックスタート](https://docs.z.ai/devpack/quick-start)

---

## Kimi

```json
{
  "bot_type": "moonshot",
  "model": "kimi-for-coding",
  "moonshot_base_url": "https://api.kimi.com/coding/v1",
  "moonshot_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | `kimi-for-coding`で自動更新モデル、または`kimi-k2.6`などのモデルを指定 |
| `moonshot_base_url` | `https://api.kimi.com/coding/v1` |
| `moonshot_api_key` | Coding Plan専用キー（従量課金とは共有不可） |

参考: [キー & ドキュメント](https://www.kimi.com/code/docs/)

---

## 火山引擎

```json
{
  "bot_type": "openai",
  "model": "Doubao-Seed-2.0-Code",
  "open_ai_api_base": "https://ark.cn-beijing.volces.com/api/coding/v3",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | `Doubao-Seed-2.0-Code`、`Doubao-Seed-2.0-pro`、`Doubao-Seed-2.0-lite`、`Doubao-Seed-Code`、`MiniMax-M2.5`、`Kimi-K2.5`、`GLM-4.7`、`DeepSeek-V3.2` |
| `open_ai_api_base` | `https://ark.cn-beijing.volces.com/api/coding/v3` |
| `open_ai_api_key` | 標準APIと共有 |

参考: [クイックスタート](https://www.volcengine.com/docs/82379/1928261?lang=zh)
````

## File: docs/ja/models/custom.mdx
````markdown
---
title: カスタム
description: カスタムベンダー設定。サードパーティ API プロキシやローカルモデル向け
---

OpenAI 互換プロトコルで接続するサードパーティのモデルサービスや、ローカルにデプロイしたモデルに適しています。例えば：

- **サードパーティ API プロキシ**：統一された API Base から複数のモデルを呼び出す
- **ローカルモデル**：Ollama、vLLM、LocalAI などのツールでローカルにデプロイしたモデル
- **プライベートデプロイ**：企業内部にデプロイしたモデルサービス

<Note>
  `openai` ベンダーとの違い：カスタムベンダーを選択した場合、`/config model` でモデルを切り替えてもベンダータイプは自動で切り替わらず、常にカスタムの API アドレスを使用します。
</Note>

## テキスト対話

### サードパーティ API プロキシ

```json
{
  "bot_type": "custom",
  "model": "",
  "custom_api_key": "YOUR_API_KEY",
  "custom_api_base": "https://{your-proxy.com}/v1"
}
```

| パラメータ | 説明 |
| --- | --- |
| `bot_type` | `custom` に設定する必要があります |
| `model` | モデル名。プロキシサービスがサポートする任意のモデル名を指定 |
| `custom_api_key` | API キー。プロキシサービスから提供されます |
| `custom_api_base` | API アドレス。プロキシサービスから提供され、OpenAI プロトコル互換である必要があります |

### ローカルモデル

ローカルモデルは通常 API Key が不要で、API Base のみ設定します：

```json
{
  "bot_type": "custom",
  "model": "qwen3.5:27b",
  "custom_api_base": "http://localhost:11434/v1"
}
```

一般的なローカルデプロイツールとデフォルトアドレス：

| ツール | デフォルト API Base |
| --- | --- |
| [Ollama](https://ollama.com) | `http://localhost:11434/v1` |
| [vLLM](https://docs.vllm.ai) | `http://localhost:8000/v1` |
| [LocalAI](https://localai.io) | `http://localhost:8080/v1` |

### モデル切り替え

カスタムベンダーでモデルを切り替える際は `model` のみが変更され、`bot_type` と API アドレスは変わりません：

```
/config model qwen3.5:27b
```
````

## File: docs/ja/models/deepseek.mdx
````markdown
---
title: DeepSeek
description: DeepSeek モデル設定（テキスト対話 + 思考モード）
---

DeepSeek は現在 Agent モードでデフォルト推奨されているベンダーの 1 つで、コストパフォーマンスの高いテキスト対話とタスクプランニング能力を主力としています。

## テキスト対話

```json
{
  "model": "deepseek-v4-flash",
  "deepseek_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | `deepseek-v4-flash`（デフォルト）、`deepseek-v4-pro` をサポート |
| `deepseek_api_key` | [DeepSeek プラットフォーム](https://platform.deepseek.com/api_keys) で作成 |
| `deepseek_api_base` | 任意。デフォルトは `https://api.deepseek.com/v1`。サードパーティのプロキシアドレスに変更可能 |

### モデル選択

| モデル | 用途 |
| --- | --- |
| `deepseek-v4-flash` | デフォルト推奨。高速かつ低コスト |
| `deepseek-v4-pro` | より高い知能。複雑なタスクで効果が高い |

## 思考モード

V4 シリーズ（`deepseek-v4-flash` / `deepseek-v4-pro`）は明示的な「思考モード」をサポートしています：モデルは最終回答を出力する前に、まず思考連鎖（`reasoning_content`）を出力することで、回答の品質を向上させます。

### スイッチ

グローバル設定 `enable_thinking` で制御し、Web コンソールの設定ページからも切り替えできます：

```json
{
  "enable_thinking": true
}
```

- `true`：すべてのチャネルでモデルが先に思考してから回答します。Web コンソールでは思考過程が表示され、IM チャネル（WeChat / 企業 WeChat / DingTalk / Lark）では表示されませんが、同様により良い回答が得られます。
- `false`：思考をオフにし、レスポンスが速くなり、初回トークン遅延が短くなります。

### 推論強度

思考モードでは `reasoning_effort` で推論の強さを制御できます：

```json
{
  "enable_thinking": true,
  "reasoning_effort": "high"
}
```

| 値 | 用途 |
| --- | --- |
| `high`（デフォルト） | 日常的な Agent タスク。思考と速度のバランス |
| `max` | 複雑なコーディング、長いプランニング、厳しい制約を伴うタスク。推論はより深いが、所要時間と出力トークンが増える |

`reasoning_effort` は `enable_thinking` が `true` の場合のみ有効です。モデルが思考モードに対応していない場合、このフィールドは自動的に無視されます。

### 動作の補足

- **サンプリングパラメータ**：思考モードでは `temperature`、`top_p`、`presence_penalty`、`frequency_penalty` がサーバ側で無視されます（エラーにはなりません）。CowAgent は自動的にこれらの送信をスキップします。
- **マルチターンのツール呼び出し**：履歴にツール呼び出しが含まれる場合、DeepSeek はすべての assistant メッセージで `reasoning_content` を返却することを要求します。CowAgent は返却ロジックを自動的に処理しており、ターンをまたいで思考スイッチを切り替えてもエラーにはなりません。

<Tip>
  デフォルトでは `deepseek-v4-flash` を使用します。複雑なタスクには `deepseek-v4-pro` を使用でき、深い推論が必要な場合は `enable_thinking` をオンにできます。
</Tip>
````

## File: docs/ja/models/doubao.mdx
````markdown
---
title: Doubao
description: Doubao（火山方舟）モデル設定（テキスト / 画像理解 / 画像生成 / ベクトル）
---

Doubao（火山方舟）はテキスト対話、画像理解、画像生成（Seedream）、ベクトル機能をサポートしており、1 つの `ark_api_key` ですべての機能を有効化できます。

<Tip>
  Web コンソールの「モデル管理」ページから、以下のすべての機能をワンストップで設定でき、設定ファイルを手動で編集する必要はありません。
</Tip>

## テキスト対話

```json
{
  "model": "doubao-seed-2-0-pro-260215",
  "ark_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | `doubao-seed-2-0-pro-260215`、`doubao-seed-2-0-code-preview-260215`、`doubao-seed-2-0-lite-260215` などを指定可能 |
| `ark_api_key` | [火山方舟コンソール](https://console.volcengine.com/ark/region:ark+cn-beijing/apikey) で作成 |
| `ark_base_url` | 任意。デフォルトは `https://ark.cn-beijing.volces.com/api/v3` |

## 画像理解

`ark_api_key` を設定すると、Agent の Vision ツールは自動的に `doubao-seed-2-0-pro-260215` を使用して画像を認識します。追加設定は不要です。

Vision モデルを手動で指定したい場合は：

```json
{
  "tools": {
    "vision": {
      "model": "doubao-seed-2-0-pro-260215"
    }
  }
}
```

## 画像生成

```json
{
  "skills": {
    "image-generation": {
      "model": "seedream-5.0-lite"
    }
  }
}
```

選択可能なモデル：`seedream-5.0-lite`、`seedream-4.5`。

## ベクトル

```json
{
  "embedding_provider": "doubao",
  "embedding_model": "doubao-embedding-vision-251215"
}
```

デフォルトモデルは `doubao-embedding-vision-251215`（マルチモーダル embedding）です。設定ファイルで `embedding_dimensions` から 1024 または 2048 次元を指定できます。embedding を変更した後は `/memory rebuild-index` コマンドを実行してインデックスを再構築する必要があります。
````

## File: docs/ja/models/gemini.mdx
````markdown
---
title: Gemini
description: Google Gemini モデル設定（テキスト対話 + 画像理解 + 画像生成）
---

Google Gemini はテキスト対話、画像理解、画像生成（Nano Banana シリーズ）をサポートしており、1 つの `gemini_api_key` ですべての機能を有効化できます。

<Tip>
  Web コンソールの「モデル管理」ページから、以下のすべての機能をワンストップで設定でき、設定ファイルを手動で編集する必要はありません。
</Tip>

## テキスト対話

```json
{
  "model": "gemini-3.5-flash",
  "gemini_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | 推奨は `gemini-3.5-flash`。`gemini-3.1-pro-preview`、`gemini-3.1-flash-lite-preview`、`gemini-3-flash-preview`、`gemini-3-pro-preview` などもサポート。詳細は [公式ドキュメント](https://ai.google.dev/gemini-api/docs/models) を参照 |
| `gemini_api_key` | [Google AI Studio](https://aistudio.google.com/app/apikey) で作成 |
| `gemini_api_base` | 任意。デフォルトは `https://generativelanguage.googleapis.com`。サードパーティのプロキシに変更可能 |

## 画像理解

Gemini の全シリーズモデルはネイティブにビジョンをサポートしています。`gemini_api_key` を設定すると、Agent の Vision ツールは自動的にメインモデルを使用して画像を認識します。追加設定は不要です。

Vision モデルを手動で指定したい場合：

```json
{
  "tools": {
    "vision": {
      "model": "gemini-3.1-flash-lite-preview"
    }
  }
}
```

## 画像生成

```json
{
  "skills": {
    "image-generation": {
      "model": "gemini-3.1-flash-image-preview"
    }
  }
}
```

| モデル ID | エイリアス |
| --- | --- |
| `gemini-3.1-flash-image-preview` | Nano Banana 2 |
| `gemini-3-pro-image-preview` | Nano Banana Pro |
| `gemini-2.5-flash-image` | Nano Banana |
````

## File: docs/ja/models/glm.mdx
````markdown
---
title: Zhipu GLM
description: Zhipu AI GLM モデル設定（テキスト / 画像理解 / 音声認識 / ベクトル）
---

Zhipu AI はテキスト対話、画像理解、音声認識（ASR）、ベクトル（Embedding）をサポートしており、1 つの `zhipu_ai_api_key` ですべての機能を有効化できます。

<Tip>
  Web コンソールの「モデル管理」ページから、以下のすべての機能をワンストップで設定でき、設定ファイルを手動で編集する必要はありません。
</Tip>

## テキスト対話

```json
{
  "model": "glm-5.1",
  "zhipu_ai_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | `glm-5.1`、`glm-5-turbo`、`glm-5`、`glm-4.7`、`glm-4-plus`、`glm-4-flash`、`glm-4-air` などを指定可能。詳細は [モデルコード](https://bigmodel.cn/dev/api/normal-model/glm-4) を参照 |
| `zhipu_ai_api_key` | [Zhipu AI コンソール](https://www.bigmodel.cn/usercenter/proj-mgmt/apikeys) で作成 |
| `zhipu_ai_api_base` | 任意。デフォルトは `https://open.bigmodel.cn/api/paas/v4` |

## 画像理解

Zhipu の chat 系モデル（`glm-5.1`、`glm-5-turbo` など）はビジョンに対応していないため、ビジョン呼び出しは `glm-5v-turbo` に統一的にルーティングされます。`zhipu_ai_api_key` を設定すると、Agent の Vision ツールは自動的にこのモデルを使用するため、設定ファイルで明示的に指定する必要はありません。

## 音声認識

```json
{
  "voice_to_text": "zhipu",
  "voice_to_text_model": "glm-asr-2512"
}
```

| パラメータ | 説明 |
| --- | --- |
| `voice_to_text` | `zhipu` に設定すると Zhipu ASR が有効になります |
| `voice_to_text_model` | 任意。デフォルトは `glm-asr-2512` |

認証情報は `zhipu_ai_api_key` を自動的に再利用します。音声ファイルは 25MB 未満を推奨します。サイズが大きすぎるファイルはサーバ側で拒否される可能性があります。

## ベクトル

```json
{
  "embedding_provider": "zhipu",
  "embedding_model": "embedding-3"
}
```

選択可能なモデル：`embedding-3`、`embedding-2`。embedding を変更した後は `/memory rebuild-index` コマンドを実行してインデックスを再構築する必要があります。
````

## File: docs/ja/models/index.mdx
````markdown
---
title: モデル概要
description: CowAgent がサポートするモデルベンダーと機能マトリクス
---

CowAgent は国内外の主要ベンダーの大規模言語モデルをサポートしており、モデル接続の実装はプロジェクトの `models/` ディレクトリにあります。テキスト対話に加えて、一部のベンダーは画像理解、画像生成、音声認識、音声合成、ベクトルなどの機能も提供しており、Agent フローの中で必要に応じて呼び出すことができます。

<Note>
  Agent モードでは、効果とコストのバランスを考慮して以下のモデルの利用を推奨します：deepseek-v4-flash、MiniMax-M2.7、claude-sonnet-4-6、gemini-3.5-flash、glm-5.1、qwen3.6-plus、kimi-k2.6、ernie-5.1。

  同時に [LinkAI](https://link-ai.tech) プラットフォームの API もサポートしており、1 つの Key で複数ベンダーを柔軟に切り替えられ、ナレッジベース、ワークフロー、プラグインなどの機能も付属しています。
</Note>


## モデル機能の全体像

各ベンダーが提供する機能の一覧です。「テキスト」はメインの対話モデルを指し、その他の列はそのベンダーが対応する Agent 機能を担えるかを示します。

| ベンダー | 代表モデル | テキスト | 画像理解 | 画像生成 | 音声認識 | 音声合成 | ベクトル |
| --- | --- | :-: | :-: | :-: | :-: | :-: | :-: |
| [DeepSeek](/models/deepseek) | deepseek-v4-flash / pro | ✅ | | | | | |
| [MiniMax](/models/minimax) | MiniMax-M2.7 | ✅ | ✅ | ✅ | | ✅ | |
| [Claude](/models/claude) | claude-opus-4-7 | ✅ | ✅ | | | | |
| [Gemini](/models/gemini) | gemini-3.5-flash | ✅ | ✅ | ✅ | | | |
| [OpenAI](/models/openai) | gpt-5.5、o シリーズ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Zhipu GLM](/models/glm) | glm-5.1、glm-5v-turbo | ✅ | ✅ | | ✅ | | ✅ |
| [Tongyi Qianwen](/models/qwen) | qwen3.7-max | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Doubao](/models/doubao) | doubao-seed-2.0 シリーズ | ✅ | ✅ | ✅ | | | ✅ |
| [Kimi](/models/kimi) | kimi-k2.6 | ✅ | ✅ | | | | |
| [Baidu Qianfan](/models/qianfan) | ernie-5.1 | ✅ | ✅ | | | | |
| [LinkAI](/models/linkai) | 複数ベンダー 100+ モデルを統一接続 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [カスタム](/models/custom) | ローカルモデル / サードパーティプロキシ | ✅ | | | | | |

<Tip>
  Web コンソール上では各機能（ビジョン / 画像 / 音声認識 / 音声合成 / ベクトル / Web 検索）ごとに独立してベンダーとモデルを設定でき、互いに強制的に紐付けされません。
</Tip>


## 設定方法

**方法 1（推奨）:** [Web コンソール](/channels/web) からオンラインでモデルや各機能を管理でき、設定ファイルを手動で編集する必要はありません：

<img width="900" src="https://cdn.link-ai.tech/doc/20260521212527.png" />

**方法 2:** `config.json` を手動で編集し、選択したモデルに応じてモデル名と API Key を設定します。各モデルは OpenAI 互換方式での接続もサポートしており、`bot_type` を `openai` に設定し、`open_ai_api_base` と `open_ai_api_key` を設定すれば利用できます。
````

## File: docs/ja/models/kimi.mdx
````markdown
---
title: Kimi
description: Kimi（Moonshot）モデル設定（テキスト対話 + 画像理解）
---

Kimi は Moonshot が提供するモデルで、テキスト対話と画像理解をサポートします。`kimi-k2.x` シリーズはネイティブにビジョンをサポートしています。

<Tip>
  Web コンソールの「モデル管理」ページから、以下のすべての機能をワンストップで設定でき、設定ファイルを手動で編集する必要はありません。
</Tip>

## テキスト対話

```json
{
  "model": "kimi-k2.6",
  "moonshot_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | `kimi-k2.6`、`kimi-k2.5`、`kimi-k2`、`moonshot-v1-8k`、`moonshot-v1-32k`、`moonshot-v1-128k` を指定可能 |
| `moonshot_api_key` | [Moonshot コンソール](https://platform.moonshot.cn/console/api-keys) で作成 |
| `moonshot_base_url` | 任意。デフォルトは `https://api.moonshot.cn/v1` |

## 画像理解

`moonshot_api_key` を設定すると、Agent の Vision ツールは自動的に `kimi-k2.6` を使用して画像を認識します。追加設定は不要です。

Vision モデルを手動で指定したい場合：

```json
{
  "tools": {
    "vision": {
      "model": "kimi-k2.6"
    }
  }
}
```
````

## File: docs/ja/models/linkai.mdx
````markdown
---
title: LinkAI
description: LinkAI プラットフォーム経由でテキスト、ビジョン、画像、音声、ベクトル機能を統一接続
---

1 つの `linkai_api_key` で、OpenAI、Claude、Gemini、DeepSeek、MiniMax、Qwen、Kimi、Doubao など主要ベンダーのすべての機能にアクセスできます。

<Tip>
  Web コンソールの「モデル管理」ページから、以下のすべての機能をワンストップで設定でき、設定ファイルを手動で編集する必要はありません。
</Tip>

## テキスト対話

```json
{
  "use_linkai": true,
  "linkai_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `use_linkai` | `true` に設定すると有効になります |
| `linkai_api_key` | [コンソール](https://link-ai.tech/console/interface) で作成 |
| `model` | [モデル一覧](https://link-ai.tech/console/models) の任意のコードを指定可能 |

詳細は [モデルサービス](https://link-ai.tech/console/models) を参照してください。

## 画像理解

設定が完了すると、Agent の Vision ツールは自動的にゲートウェイ上のマルチモーダルモデルを呼び出します。追加設定は不要です。Vision モデルを手動で指定したい場合：

```json
{
  "tools": {
    "vision": {
      "model": "gpt-5.4-mini"
    }
  }
}
```

選択可能なモデル：`gpt-4.1-mini`、`gpt-5.4-mini`、`qwen3.6-plus`、`doubao-seed-2-0-pro-260215`、`kimi-k2.6`、`claude-sonnet-4-6`、`gemini-3.1-flash-lite-preview` など。

## 画像生成

```json
{
  "skills": {
    "image-generation": {
      "model": "gpt-image-2"
    }
  }
}
```

| モデル ID | エイリアス |
| --- | --- |
| `gpt-image-2` | OpenAI |
| `gemini-3.1-flash-image-preview` | Nano Banana 2 |
| `gemini-3-pro-image-preview` | Nano Banana Pro |
| `seedream-5.0-lite` | ByteDance Doubao Seedream |

## 音声認識

```json
{
  "voice_to_text": "linkai"
}
```

ASR は固定で Whisper を使用します。認証情報は `linkai_api_key` を自動的に再利用します。

## 音声合成

音声合成ゲートウェイは複数の TTS エンジンをサポートしており、`text_to_voice_model` でエンジンを選択し、音色はエンジンに応じて切り替わります。

```json
{
  "text_to_voice": "linkai",
  "text_to_voice_model": "doubao",
  "tts_voice_id": "BV001_streaming"
}
```

| `text_to_voice_model` | エンジンの説明 |
| --- | --- |
| `tts-1` | OpenAI · 多言語汎用（音色 `alloy` / `nova` / `echo` など） |
| `doubao` | ByteDance Doubao · 中国語の音色が豊富 |
| `baidu` | Baidu · 中国語のアナウンサー音色 |

エンジンによって対応する音色が異なるため、Web コンソールの「モデル管理 → 音声合成」から視覚的に選択することをおすすめします。

## ベクトル

```json
{
  "embedding_provider": "linkai",
  "embedding_model": "text-embedding-3-small"
}
```

デフォルトモデルは `text-embedding-3-small`（OpenAI 互換）です。embedding を変更した後は `/memory rebuild-index` コマンドを実行してインデックスを再構築する必要があります。
````

## File: docs/ja/models/mimo.mdx
````markdown
---
title: Xiaomi MiMo
description: Xiaomi MiMo モデル設定（テキスト対話 + 画像理解 + 音声合成）
---

Xiaomi MiMo はネイティブ全モーダル大規模言語モデルです。1 つの `mimo_api_key` でテキスト対話、画像理解、音声合成を同時に有効化できます。

<Tip>
  Web コンソールの「モデル管理」ページから、以下のすべての機能をワンストップで設定でき、設定ファイルを手動で編集する必要はありません。
</Tip>

## テキスト対話

```json
{
  "model": "mimo-v2.5-pro",
  "mimo_api_key": "YOUR_API_KEY",
  "mimo_api_base": "https://api.xiaomimimo.com/v1"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | 推奨は `mimo-v2.5-pro`。`mimo-v2.5` も使用可能 |
| `mimo_api_key` | [MiMo Open Platform](https://platform.xiaomimimo.com/console/api-keys) で作成 |
| `mimo_api_base` | 任意。デフォルトは `https://api.xiaomimimo.com/v1` |

### モデル選択

| モデル | ユースケース |
| --- | --- |
| `mimo-v2.5-pro` | フラッグシップ。ネイティブ全モーダル + Agent 能力、最大 100 万トークンのコンテキスト |
| `mimo-v2.5` | 汎用版。ネイティブ全モーダル（テキスト / 画像 / 動画 / 音声） |

## 思考モード

MiMo V2.5 シリーズはデフォルトで「思考モード」が有効です。最終回答の前に `reasoning_content`（思考過程）を出力することで、複雑なタスクのパフォーマンスを高めます。

表示の有無はグローバル設定 `enable_thinking` で切り替え可能です（Web コンソールの設定ページからも変更できます）：

```json
{
  "enable_thinking": true
}
```

## 画像理解

`mimo_api_key` を設定すると、Agent の Vision ツールは自動的に MiMo のビジョンモデルを利用します：

- メインモデル自体がマルチモーダル（`mimo-v2.5-pro` / `mimo-v2.5`）の場合は、画像はメインモデルが直接処理し、追加設定は不要です。
- メインモデルが他社製の場合、Vision ツールは順序に従い `mimo-v2.5-pro` にフォールバックします。

特定の Vision モデルを強制したい場合は、設定ファイルで明示的に指定してください：

```json
{
  "tools": {
    "vision": {
      "provider": "mimo",
      "model": "mimo-v2.5-pro"
    }
  }
}
```

## 音声合成

```json
{
  "text_to_voice": "mimo",
  "text_to_voice_model": "mimo-v2.5-tts",
  "tts_voice_id": "冰糖"
}
```

| パラメータ | 説明 |
| --- | --- |
| `text_to_voice_model` | 現在は `mimo-v2.5-tts` のみ対応（プリセット音色 + 歌唱モード） |
| `tts_voice_id` | プリセット音色名（中国語の音色は中国語名がそのまま ID） |

### プリセット音色

| 音色 ID | 説明 |
| --- | --- |
| `冰糖` | 中国語 · 女声（デフォルト） |
| `茉莉` | 中国語 · 女声 |
| `苏打` | 中国語 · 男声 |
| `白桦` | 中国語 · 男声 |
| `Mia` | 英語 · 女声 |
| `Chloe` | 英語 · 女声 |
| `Milo` | 英語 · 男声 |
| `Dean` | 英語 · 男声 |

Web コンソールの「モデル管理 → 音声合成」のドロップダウンから視覚的に選択することもできます。

### スタイル制御

MiMo TTS は合成テキスト内に **音声タグ** を埋め込むことで、感情、語調、方言、キャラクター、さらには歌唱まで制御できます。タグは **最終的に音声合成されるテキスト（つまり Agent の返信内容）** に含める必要があり、全体スタイルのタグは先頭に置きます：

```
(スタイル)合成するテキスト
```

半角 `()`、全角 `（）`、`[]` の 3 種類の括弧に対応。スタイル記述は中国語・英語のどちらでも OK で、最も的確に表現できる言語を選んでください。代表的なスタイル例：

| 種類 | サンプルタグ |
| --- | --- |
| 基本感情 | `happy` `sad` `angry` `fear` `surprised` `excited` `aggrieved` `calm` `indifferent` |
| 複合感情 | `wistful` `relieved` `helpless` `guilty` `at ease` `uneasy` `touched` |
| 全体トーン | `gentle` `aloof` `lively` `serious` `languid` `playful` `deep` `sharp` `cutting` |
| 声質 | `magnetic` `mellow` `bright` `ethereal` `childlike` `aged` `sweet` `husky` |
| キャラクター調 | `squeaky` `mature lady` `young boy` `uncle` `Taiwanese accent` |
| 方言 | `Northeastern` `Sichuan` `Henan` `Cantonese` |
| ロールプレイ | `Sun Wukong` `Lin Daiyu` |
| 歌唱 | `sing` / `singing` |

例：

- `(magnetic)夜が深まり、街はまだ呼吸している。`
- `(gentle)深呼吸して。きっと大丈夫。`
- `(serious)これがシステム再起動前の最後の警告です。`
- `(singing)Twinkle, twinkle, little star, how I wonder what you are…`

テキストの任意の位置に細かい音声タグを挿入して、呼吸、笑い声、間などを制御することもできます。例：

```
(nervous, deep breath) ふぅ……落ち着いて、落ち着いて。(faster pace) 自己紹介は五十回練習したから大丈夫。
```

タグの完全な一覧は [MiMo 音声合成ドキュメント](https://platform.xiaomimimo.com/docs/zh-CN/usage-guide/speech-synthesis-v2.5) を参照してください。

<Tip>
  CowAgent は TTS 呼び出し時、Agent の返信原文（`(...)` タグを含む）をそのまま MiMo に送信します。ペルソナ / システムプロンプトで「返信の冒頭に `(スタイル)` タグを付けて口調を指定する」よう指示すれば、IM チャネル（WeChat / Feishu / DingTalk / WeCom）の音声返信に感情・方言・歌唱などの効果を付与できます。
</Tip>
````

## File: docs/ja/models/minimax.mdx
````markdown
---
title: MiniMax
description: MiniMax モデル設定（テキスト / 画像理解 / 画像生成 / 音声合成）
---

MiniMax はテキスト対話、画像理解、画像生成、音声合成をサポートしており、1 つの `minimax_api_key` ですべての機能を有効化できます。

<Tip>
  Web コンソールの「モデル管理」ページから、以下のすべての機能をワンストップで設定でき、設定ファイルを手動で編集する必要はありません。
</Tip>

## テキスト対話

```json
{
  "model": "MiniMax-M2.7",
  "minimax_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | `MiniMax-M2.7`、`MiniMax-M2.7-highspeed`、`MiniMax-M2.5`、`MiniMax-M2.1`、`MiniMax-M2.1-lightning`、`MiniMax-M2` などを指定可能 |
| `minimax_api_key` | [MiniMax コンソール](https://platform.minimaxi.com/user-center/basic-information/interface-key) で作成 |

## 画像理解

MiniMax の M2.x シリーズの chat モデル自体はビジョンに対応していないため、ビジョン呼び出しは `MiniMax-Text-01` に統一的にルーティングされます。`minimax_api_key` を設定すると、Agent の Vision ツールは自動的にこのモデルを使用するため、設定ファイルで明示的に指定する必要はありません。

## 画像生成

```json
{
  "skills": {
    "image-generation": {
      "model": "image-01"
    }
  }
}
```

選択可能なモデル：`image-01`。

## 音声合成

```json
{
  "text_to_voice": "minimax",
  "text_to_voice_model": "speech-2.8-hd",
  "tts_voice_id": "female-shaonv"
}
```

| パラメータ | 説明 |
| --- | --- |
| `text_to_voice_model` | `speech-2.8-hd`（感情表現、自然な聴感）、`speech-2.8-turbo`（高速）、`speech-2.6-hd`、`speech-2.6-turbo` |
| `tts_voice_id` | 音色 ID。中国語 / 広東語 / 英語 / 日本語 / 韓国語をサポートし、合計 70 種類以上 |

よく使われる音色の例：

| 音色 ID | 説明 |
| --- | --- |
| `female-shaonv` | 中国語 · 少女（女性） |
| `female-yujie` | 中国語 · お姉さま（女性） |
| `female-tianmei` | 中国語 · 甘い女性（女性） |
| `male-qn-jingying` | 中国語 · エリート青年（男性） |
| `male-qn-badao` | 中国語 · 強気な青年（男性） |
| `Cantonese_GentleLady` | 広東語 · 優しい女声 |
| `English_Graceful_Lady` | 英語 · Graceful Lady |

完全な音色リスト（中国語 / 広東語 / 英語 / 日本語 / 韓国語の合計 70 種類以上）は [システム音色一覧](https://platform.minimaxi.com/docs/faq/system-voice-id) を参照してください。Web コンソールの「モデル管理 → 音声合成」のドロップダウンから視覚的に選択することもできます。
````

## File: docs/ja/models/openai.mdx
````markdown
---
title: OpenAI
description: OpenAI モデル設定（テキスト / ビジョン / 画像 / 音声 / ベクトル）
---

OpenAI は最も広範な機能をカバーするベンダーで、テキスト対話、画像理解、画像生成、音声認識（ASR）、音声合成（TTS）、ベクトル（Embedding）の各機能を同時に担えます。1 つの `open_ai_api_key` で Agent はすべての機能を利用できます。

<Tip>
  Web コンソールの「モデル管理」ページから、以下のすべての機能をワンストップで設定でき、設定ファイルを手動で編集する必要はありません。
</Tip>


## テキスト対話

```json
{
  "model": "gpt-5.5",
  "open_ai_api_key": "YOUR_API_KEY",
  "open_ai_api_base": "https://api.openai.com/v1"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | OpenAI API の [model パラメータ](https://platform.openai.com/docs/models) と同じです。`gpt-5.5`、`gpt-5.4`、`gpt-5.4-mini`、`gpt-5.4-nano`、`gpt-5` シリーズ、`gpt-4.1`、o シリーズなどをサポート。Agent モードのデフォルトは `gpt-5.5`、コストパフォーマンスを重視する場合は `gpt-5.4` に変更可能 |
| `open_ai_api_key` | [OpenAI プラットフォーム](https://platform.openai.com/api-keys) で作成 |
| `open_ai_api_base` | 任意。サードパーティのプロキシに接続するために変更可能 |
| `bot_type` | OpenAI 公式モデルを使用する場合は不要。互換プロトコルでベンダーモデルに接続する場合は `openai` に設定 |

## 画像理解

`gpt-5.5`、`gpt-5.4`、`gpt-4o`、`gpt-4.1` などの OpenAI モデルはネイティブにビジョンをサポートしています。`open_ai_api_key` を設定すると、Agent の Vision ツールは自動的にメインモデルを使用して画像を認識します。メインモデルがビジョンに対応していない場合や明示的に指定したい場合は、設定ファイルで指定できます：

```json
{
  "tools": {
    "vision": {
      "model": "gpt-5.4-mini"
    }
  }
}
```

サポートする Vision モデル：`gpt-5.5`、`gpt-5.4`、`gpt-5.4-mini`、`gpt-5.4-nano`、`gpt-5`、`gpt-4.1`、`gpt-4.1-mini`、`gpt-4o`。

## 画像生成

設定ファイルで画像生成モデルを指定すると、Agent が画像生成スキルを呼び出す際に自動的に OpenAI にルーティングされます：

```json
{
  "skills": {
    "image-generation": {
      "model": "gpt-image-2"
    }
  }
}
```

サポートする画像生成モデル：`gpt-image-2`、`gpt-image-1`。

## 音声認識

```json
{
  "voice_to_text": "openai",
  "voice_to_text_model": "gpt-4o-mini-transcribe"
}
```

| パラメータ | 説明 |
| --- | --- |
| `voice_to_text` | `openai` に設定すると OpenAI 音声認識が有効になります |
| `voice_to_text_model` | 任意。デフォルトは `gpt-4o-mini-transcribe`。`gpt-4o-transcribe`、`whisper-1` も指定可能 |

認証情報は `open_ai_api_key` を自動的に再利用します。

## 音声合成

```json
{
  "text_to_voice": "openai",
  "text_to_voice_model": "tts-1",
  "tts_voice_id": "alloy"
}
```

| パラメータ | 説明 |
| --- | --- |
| `text_to_voice_model` | `tts-1`、`tts-1-hd`、`gpt-4o-mini-tts` |
| `tts_voice_id` | 音色：`alloy`、`echo`、`fable`、`onyx`、`nova`、`shimmer`、`ash`、`ballad`、`coral`、`sage`、`verse` |

## ベクトル

```json
{
  "embedding_provider": "openai",
  "embedding_model": "text-embedding-3-small"
}
```

選択可能なモデル：`text-embedding-3-small`、`text-embedding-3-large`、`text-embedding-ada-002`。embedding を変更した後は `/memory rebuild-index` コマンドを実行してインデックスを再構築する必要があります。
````

## File: docs/ja/models/qianfan.mdx
````markdown
---
title: Baidu Qianfan / ERNIE
description: Baidu Qianfan ERNIE モデル設定
---

方法 1: 公式接続（推奨）:

```json
{
  "model": "ernie-5.1",
  "qianfan_api_key": "",
  "qianfan_api_base": "https://qianfan.baidubce.com/v2"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | デフォルトの推奨は `ernie-5.1`。`ernie-5.0`、`ernie-x1.1`、`ernie-4.5-turbo-128k`、`ernie-4.5-turbo-32k` も利用できます |
| `qianfan_api_key` | Qianfan API Key。通常は `bce-v3/` で始まります |
| `qianfan_api_base` | 任意。デフォルトは `https://qianfan.baidubce.com/v2` |

## モデル選択

| モデル | 用途 |
| --- | --- |
| `ernie-5.1` | デフォルト推奨。文心の最新フラッグシップモデルで、総合性能が最も強い |
| `ernie-5.0` | 前世代フラッグシップ。総合性能に優れる |
| `ernie-x1.1` | 深層推論モデル。ハルシネーションが少なく、指示追従とツール呼び出しが強化 |
| `ernie-4.5-turbo-128k` | 長いコンテキストと一般的なチャット向け |
| `ernie-4.5-turbo-32k` | コンテキスト長とコストのバランスが良い一般チャット向け |

## Vision ツール

`qianfan_api_key` を設定すると、Agent モードの Vision ツールは Qianfan を自動検出します：

- 主モデルが多モーダル（`ernie-5.1`、`ernie-5.0`、`ernie-x1.1`、`ernie-4.5-turbo-vl` など）の場合は、追加設定なしで主モデルがそのまま画像を処理します。
- 主モデルがテキスト専用（`ernie-4.5-turbo-128k` など）の場合は、Vision ツールが自動的に `ernie-4.5-turbo-vl` にフォールバックします。

特定の Vision モデルを強制したい場合は、`config.json` で明示的に指定できます：

```json
{
  "tools": {
    "vision": {
      "model": "ernie-4.5-turbo-vl"
    }
  }
}
```

方法 2: OpenAI 互換接続:

```json
{
  "model": "ernie-5.1",
  "bot_type": "openai",
  "open_ai_api_key": "",
  "open_ai_api_base": "https://qianfan.baidubce.com/v2"
}
```

<Tip>
  新しい設定では `qianfan_api_key` の利用を推奨します。既存の `wenxin`、`wenxin-4`、`baidu_wenxin_api_key`、`baidu_wenxin_secret_key` 設定は引き続き利用できます。
</Tip>
````

## File: docs/ja/models/qwen.mdx
````markdown
---
title: Tongyi Qianwen Qwen
description: Tongyi Qianwen モデル設定（テキスト / 画像理解 / 画像生成 / 音声認識 / 音声合成 / ベクトル）
---

Tongyi Qianwen（DashScope / Bailian）は国内で最も広範な機能をカバーするベンダーの 1 つで、テキスト、画像理解、画像生成、音声認識、音声合成、ベクトルの各機能を 1 つの `dashscope_api_key` で有効化できます。

<Tip>
  Web コンソールの「モデル管理」ページから、以下のすべての機能をワンストップで設定でき、設定ファイルを手動で編集する必要はありません。
</Tip>

## テキスト対話

```json
{
  "model": "qwen3.6-plus",
  "dashscope_api_key": "YOUR_API_KEY"
}
```

| パラメータ | 説明 |
| --- | --- |
| `model` | `qwen3.6-plus`、`qwen3.7-max`、`qwen3.5-plus`、`qwen3-max`、`qwen-max`、`qwen-plus`、`qwen-turbo`、`qwq-plus` などを指定可能 |
| `dashscope_api_key` | [Bailian コンソール](https://bailian.console.aliyun.com/?tab=model#/api-key) で作成。詳細は [公式ドキュメント](https://bailian.console.aliyun.com/?tab=api#/api) を参照 |

## 画像理解

`dashscope_api_key` を設定すると、Agent の Vision ツールは自動的に Qwen のビジョンモデルを呼び出して画像を認識します。`qwen3-max` / `qwen3.5-plus` / `qwen3.6-plus` などのモデルはそのままマルチモーダルです。メインモデルがテキスト専用（`qwen-turbo` など）の場合は、自動的に `qwen-vl-max` にフォールバックします。

Vision モデルを手動で指定したい場合：

```json
{
  "tools": {
    "vision": {
      "model": "qwen3.6-plus"
    }
  }
}
```

サポートするモデル：`qwen3.6-plus`、`qwen3.5-plus`、`qwen3-max`。

## 画像生成

```json
{
  "skills": {
    "image-generation": {
      "model": "qwen-image-2.0"
    }
  }
}
```

選択可能なモデル：`qwen-image-2.0`、`qwen-image-2.0-pro`。

## 音声認識

```json
{
  "voice_to_text": "dashscope",
  "voice_to_text_model": "qwen3-asr-flash"
}
```

| パラメータ | 説明 |
| --- | --- |
| `voice_to_text` | `dashscope` に設定すると Tongyi Qianwen ASR が有効になります |
| `voice_to_text_model` | 任意。デフォルトは `qwen3-asr-flash` |

認証情報は `dashscope_api_key` を自動的に再利用します。1 ファイルあたり 10MB 未満、長さ 300 秒以内を推奨します。

## 音声合成

```json
{
  "text_to_voice": "dashscope",
  "text_to_voice_model": "qwen3-tts-flash",
  "tts_voice_id": "Cherry"
}
```

| パラメータ | 説明 |
| --- | --- |
| `text_to_voice_model` | 任意。デフォルトは `qwen3-tts-flash`。普通話、方言、主要な外国語をカバー |
| `tts_voice_id` | 音色 ID。下記のよく使われる一覧を参照 |

よく使われる音色の例：

| 音色 ID | 説明 |
| --- | --- |
| `Cherry` | 芊悦 · 明るい女声 |
| `Serena` | 苏瑶 · 優しい女声 |
| `Ethan` | 晨煦 · 明るい男声 |
| `Chelsie` | 千雪 · 二次元少女 |
| `Dylan` | 北京語 · 晓东 |
| `Rocky` | 広東語 · 阿强 |
| `Sunny` | 四川語 · 晴儿 |

完全な音色（普通話 / 各地の方言 / バイリンガルなど）は、Web コンソールの「モデル管理 → 音声合成」のドロップダウンから視覚的に選択できます。

## ベクトル

```json
{
  "embedding_provider": "dashscope",
  "embedding_model": "text-embedding-v4"
}
```

デフォルトモデルは `text-embedding-v4` です。embedding を変更した後は `/memory rebuild-index` コマンドを実行してインデックスを再構築する必要があります。
````

## File: docs/ja/README.md
````markdown
<p align="center"><img src="https://github.com/user-attachments/assets/eca9a9ec-8534-4615-9e0f-96c5ac1d10a3" alt="CowAgent" width="420" /></p>

<p align="center">
  <a href="https://github.com/zhayujie/CowAgent/releases/latest"><img src="https://img.shields.io/github/v/release/zhayujie/CowAgent" alt="Latest release"></a>
  <a href="https://github.com/zhayujie/CowAgent/blob/master/LICENSE"><img src="https://img.shields.io/github/license/zhayujie/CowAgent" alt="License: MIT"></a>
  <a href="https://github.com/zhayujie/CowAgent"><img src="https://img.shields.io/github/stars/zhayujie/CowAgent?style=flat-square" alt="Stars"></a> <br/>
  [<a href="../../README.md">English</a>] | [<a href="../zh/README.md">中文</a>] | [日本語]
</p>

**CowAgent** は、自律的にタスクを計画し、コンピュータや外部リソースを操作し、Skill を作成・実行し、パーソナルナレッジベースと長期記憶でユーザーとともに成長するオープンソースのスーパー AI アシスタントです。エンドツーエンドの Agent Harness のリファレンス実装の一つでもあります。

CowAgent は軽量でデプロイしやすく、拡張性に優れています。主要な LLM プロバイダーをそのまま組み込み、Web や主要な IM プラットフォーム上で動作。個人 PC やサーバー上で 24 時間 365 日稼働できます。

<p align="center">
  <a href="https://cowagent.ai/">🌐 ウェブサイト</a> &nbsp;·&nbsp;
  <a href="https://docs.cowagent.ai/ja/intro/index">📖 ドキュメント</a> &nbsp;·&nbsp;
  <a href="https://docs.cowagent.ai/ja/guide/quick-start">🚀 クイックスタート</a> &nbsp;·&nbsp;
  <a href="https://skills.cowagent.ai/">🧩 Skill Hub</a> &nbsp;·&nbsp;
  <a href="https://link-ai.tech/cowagent/create">☁️ オンラインで試す</a>
</p>

<br/>

## 🌟 主な機能

| 機能 | 説明 |
| :--- | :--- |
| [タスク計画](https://docs.cowagent.ai/ja/intro/architecture) | 複雑なタスクを分解し、目標達成までツールを繰り返し呼び出して段階的に実行 |
| [長期記憶](https://docs.cowagent.ai/ja/memory/index) | 三層構造（コンテキスト → デイリー → コア）、Deep Dream による自動蒸留、キーワードとベクトルのハイブリッド検索 |
| [ナレッジベース](https://docs.cowagent.ai/ja/knowledge/index) | 構造化された知識を Markdown Wiki として自動整理し、進化し続けるナレッジグラフを可視化ブラウジング |
| [Skill](https://docs.cowagent.ai/ja/skills/index) | [Skill Hub](https://skills.cowagent.ai/)、GitHub、ClawHub からワンクリックでインストール；対話によるカスタム Skill 作成にも対応 |
| [ツール](https://docs.cowagent.ai/ja/tools/index) | ファイル I/O、ターミナル、ブラウザ、スケジューラ、記憶検索、Web 検索など 10+ の組み込みツール — MCP プロトコルに完全対応 |
| [チャネル](https://docs.cowagent.ai/ja/channels/index) | 一つの Agent で Web、WeChat、Feishu、DingTalk、WeCom、QQ、公式アカウント、Telegram を同時にサポート |
| マルチモーダル | テキスト・画像・音声・ファイルをフルサポート — 認識・生成・双方向送受信 |
| [モデル](https://docs.cowagent.ai/ja/models/index) | Claude、GPT、Gemini、DeepSeek、GLM、Qwen、Kimi、MiniMax、Doubao など、設定 1 行で切り替え可能 |
| [デプロイ](https://docs.cowagent.ai/ja/guide/quick-start) | ワンラインインストーラー、統合された Web コンソール、複数のデプロイモード（ローカル / Docker / サーバー） |

<br/>

## 🏗️ アーキテクチャ

<img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/architecture/en/architecture.jpg" alt="CowAgent Architecture" width="750"/>

CowAgent は完全な **Agent Harness** です：メッセージは各種**チャネル**から流入し、**Agent Core** が記憶・知識・利用可能なツール／Skill を組み合わせてタスクを計画・判断、**モデル**が応答を生成し、結果は元のチャネルに返されます。各レイヤーは疎結合で、独立して拡張可能です。

詳細は [アーキテクチャ](https://docs.cowagent.ai/ja/intro/architecture) を参照してください。

<br/>

## 🚀 クイックスタート

依存関係のインストール、設定、起動を自動で行うワンラインインストーラーを提供しています：

**Linux / macOS:**

```bash
bash <(curl -fsSL https://cdn.link-ai.tech/code/cow/run.sh)
```

**Windows (PowerShell):**

```powershell
irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex
```

**Docker:**

```bash
curl -O https://cdn.link-ai.tech/code/cow/docker-compose.yml
docker compose up -d
```

起動後、`http://localhost:9899` にアクセスして **Web コンソール**を開くと、モデル設定・チャネル接続・Skill インストールがすべてここで完結します。

> サーバーデプロイでコンソールに公開アクセスする場合は、`config.json` の `web_host` を `0.0.0.0` に設定してください（あわせて `web_password` の設定も強く推奨）。その後 `http://<server-ip>:9899` にアクセスし、ファイアウォール／セキュリティグループで `9899` ポートを開放することも忘れずに。

> 📖 詳細ガイド: [クイックスタート](https://docs.cowagent.ai/ja/guide/quick-start) · [ソースからインストール](https://docs.cowagent.ai/ja/guide/manual-install) · [アップグレード](https://docs.cowagent.ai/ja/guide/upgrade)

インストール後は、[`cow` CLI](https://docs.cowagent.ai/ja/cli/index) でサービスを管理できます：

```bash
cow start | stop | restart        # サービス制御
cow status | logs                  # ステータスとログ
cow update                         # 最新コード取得後に再起動
cow skill install <名前>           # Skill のインストール
cow install-browser                # ブラウザツールのインストール
```

<br/>

## 🤖 モデル

CowAgent は主要な LLM プロバイダーすべてに対応しています。**チャット、画像認識、画像生成、ASR/TTS、埋め込み（Embedding）** の各機能はそれぞれ別のベンダーで設定可能です。

| プロバイダー | 代表的なモデル | チャット | 画像認識 | 画像生成 | ASR | TTS | Embedding |
| --- | --- | :-: | :-: | :-: | :-: | :-: | :-: |
| [Claude](https://docs.cowagent.ai/ja/models/claude) | claude-opus-4-7 | ✅ | ✅ | | | | |
| [OpenAI](https://docs.cowagent.ai/ja/models/openai) | gpt-5.5、o シリーズ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Gemini](https://docs.cowagent.ai/ja/models/gemini) | gemini-3.5-flash | ✅ | ✅ | ✅ | | | |
| [DeepSeek](https://docs.cowagent.ai/ja/models/deepseek) | deepseek-v4-flash / pro | ✅ | | | | | |
| [Qwen](https://docs.cowagent.ai/ja/models/qwen) | qwen3.7-max | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [GLM](https://docs.cowagent.ai/ja/models/glm) | glm-5.1、glm-5v-turbo | ✅ | ✅ | | ✅ | | ✅ |
| [Doubao](https://docs.cowagent.ai/ja/models/doubao) | doubao-seed-2.0 シリーズ | ✅ | ✅ | ✅ | | | ✅ |
| [Kimi](https://docs.cowagent.ai/ja/models/kimi) | kimi-k2.6 | ✅ | ✅ | | | | |
| [MiniMax](https://docs.cowagent.ai/ja/models/minimax) | MiniMax-M2.7 | ✅ | ✅ | ✅ | | ✅ | |
| [ERNIE](https://docs.cowagent.ai/ja/models/qianfan) | ernie-5.1 | ✅ | ✅ | | | | |
| [MiMo](https://docs.cowagent.ai/ja/models/mimo) | mimo-v2.5-pro / v2.5 | ✅ | ✅ | | | ✅ | |
| [LinkAI](https://docs.cowagent.ai/ja/models/linkai) | 1 つの Key で 100+ モデルに接続 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [カスタム](https://docs.cowagent.ai/ja/models/custom) | ローカルモデル / サードパーティプロキシ | ✅ | | | | | |

> Web コンソールでの設定が推奨されており、ファイルを手動編集する必要はありません。手動設定については各プロバイダーのドキュメントおよび [モデル概要](https://docs.cowagent.ai/ja/models/index) を参照してください。

<br/>

## 💬 チャネル

一つの Agent インスタンスで複数のチャネルを同時に提供できます。`channel_type` 設定で切り替えるか、複数のチャネルを並列実行できます。

| チャネル | テキスト | 画像 | ファイル | 音声 | グループ |
| --- | :-: | :-: | :-: | :-: | :-: |
| [Web コンソール](https://docs.cowagent.ai/ja/channels/web)（デフォルト） | ✅ | ✅ | ✅ | ✅ | |
| [WeChat](https://docs.cowagent.ai/ja/channels/weixin) | ✅ | ✅ | ✅ | ✅ | |
| [Feishu / Lark](https://docs.cowagent.ai/ja/channels/feishu) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [DingTalk](https://docs.cowagent.ai/ja/channels/dingtalk) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WeCom Bot](https://docs.cowagent.ai/ja/channels/wecom-bot) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [QQ](https://docs.cowagent.ai/ja/channels/qq) | ✅ | ✅ | ✅ | | ✅ |
| [WeCom App](https://docs.cowagent.ai/ja/channels/wecom) | ✅ | ✅ | ✅ | ✅ | |
| [WeChat 公式アカウント](https://docs.cowagent.ai/ja/channels/wechatmp) | ✅ | ✅ | | ✅ | |
| [Telegram](https://docs.cowagent.ai/ja/channels/telegram) | ✅ | ✅ | ✅ | ✅ | ✅ |

> Feishu と WeCom Bot は **Web コンソール内で QR コードをスキャンするだけで接続**できます — パブリック IP は不要です。詳細は [チャネル概要](https://docs.cowagent.ai/ja/channels/index) を参照してください。

<img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/web-console-chat.png" alt="CowAgent Web Console" width="800"/>

*Web コンソールはデフォルトのチャネルであると同時に、Agent の設定・管理を統一的に行う場でもあります。*

<br/>

## 🧠 記憶とナレッジベース

**長期記憶**は三層構造：会話コンテキスト（短期）→ デイリー記憶（中期）→ MEMORY.md（長期）。毎晩の **Deep Dream** が散在する記憶を洗練された長期記憶とナラティブな日記に蒸留します。詳細は [長期記憶](https://docs.cowagent.ai/ja/memory/index) · [Deep Dream](https://docs.cowagent.ai/ja/memory/deep-dream) を参照してください。

**パーソナルナレッジベース**は時系列の記憶とは異なり、構造化された知識を**トピック単位**で整理します。Agent が会話中に有用な情報を自動でキュレーションし、相互参照とインデックスを維持し、Web コンソールでナレッジグラフを可視化できます。詳細は [パーソナルナレッジベース](https://docs.cowagent.ai/ja/knowledge/index) を参照してください。

<table>
  <tr>
    <td width="50%">
      <img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/web-console-memory.png" alt="長期記憶" />
      <p align="center"><em>長期記憶 · 三層構造 + Deep Dream</em></p>
    </td>
    <td width="50%">
      <img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/web-console-knowledge.png" alt="パーソナルナレッジベース" />
      <p align="center"><em>ナレッジベース · 自動キュレーションされた Markdown Wiki</em></p>
    </td>
  </tr>
</table>

<br/>

## 🔧 ツールと Skill

**ツール（Tools）** は Agent がシステムリソースを操作するためのアトミックな機能です。**Skill（Skills）** はマニフェストファイルで定義される高レベルのワークフローで、複数のツールを組み合わせて複雑なタスクを完了します。

### ツールシステム

**組み込みツール**には、ファイル I/O（`read` / `write` / `edit` / `ls`）、ターミナル（`bash`）、ファイル送信（`send`）、記憶検索（`memory`）、環境変数（`env_config`）、Web フェッチ（`web_fetch`）、スケジューラ（`scheduler`）、Web 検索（`web_search`）、画像認識（`vision`）、ブラウザ自動化（`browser`）などが含まれます。

**MCP プロトコル**は [Model Context Protocol](https://modelcontextprotocol.io) のオープンエコシステムを統合します。`mcp.json` を一度設定すれば即利用可能で、stdio / SSE トランスポート、ホットリロード、ノーコード統合をサポートします。

詳細: [ツール概要](https://docs.cowagent.ai/ja/tools/index) · [MCP 統合](https://docs.cowagent.ai/ja/tools/mcp)。

### Skill システム

- **[Skill Hub](https://skills.cowagent.ai/)** — オープン Skill マーケットプレイス：閲覧、検索、ワンクリックインストール
- **GitHub / ClawHub / URL など** — 任意のソースからワンクリックでインストール
- **対話による作成** — `skill-creator` を使って対話でカスタム Skill を生成；ワークフローやサードパーティ API を再利用可能な Skill に変換

```bash
/skill list                   # インストール済み Skill の一覧
/skill search <キーワード>     # マーケットプレイスで検索
/skill install <名前>          # ワンクリックインストール
```

詳細: [Skill 概要](https://docs.cowagent.ai/ja/skills/index) · [Skill 作成](https://docs.cowagent.ai/ja/skills/create)。

<br/>

## 🏷 更新履歴

> **2026.05.22:** [v2.0.9](https://github.com/zhayujie/CowAgent/releases/tag/2.0.9) — モデル管理、MCP プロトコル対応、ブラウザセッション永続化、新モデル（gpt-5.5、gemini-3.5-flash、qwen3.7-max）、デプロイのセキュリティ強化。

> **2026.05.06:** [v2.0.8](https://github.com/zhayujie/CowAgent/releases/tag/2.0.8) — Feishu チャネル全面アップグレード（音声、ストリーミング、QR 接続）、DeepSeek V4 と Baidu Qianfan 対応、スケジューラツール強化。

> **2026.04.22:** [v2.0.7](https://github.com/zhayujie/CowAgent/releases/tag/2.0.7) — 組み込み画像生成（GPT Image 2、Nano Banana）、新モデル（Kimi K2.6、Claude Opus 4.7、GLM 5.1）、ナレッジベースと記憶の強化。

> **2026.04.14:** [v2.0.6](https://github.com/zhayujie/CowAgent/releases/tag/2.0.6) — ナレッジベース、Deep Dream 記憶蒸留、スマートコンテキスト圧縮、マルチセッション Web コンソール。

> **2026.04.01:** [v2.0.5](https://github.com/zhayujie/CowAgent/releases/tag/2.0.5) — Cow CLI、Skill Hub オープンソース化、ブラウザツール、WeCom Bot QR 接続。

> **2026.02.03:** [v2.0.0](https://github.com/zhayujie/CowAgent/releases/tag/2.0.0) — マルチステップタスク計画、長期記憶、Skill フレームワークを備えたスーパー Agent アシスタントへの全面アップグレード。

完全な履歴: [リリースノート](https://docs.cowagent.ai/ja/releases/overview)

<br/>

## 🤝 コミュニティとサポート

GitHub で [Issue を報告](https://github.com/zhayujie/CowAgent/issues) するか、下記 QR コードをスキャンして WeChat コミュニティに参加してください：

<img width="130" src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/open-community.png">

<br/>

## 🔗 関連プロジェクト

- **[Cow Skill Hub](https://github.com/zhayujie/cow-skill-hub)** — AI エージェント向けのオープン Skill マーケットプレイス；CowAgent、OpenClaw、Claude Code などに対応
- **[bot-on-anything](https://github.com/zhayujie/bot-on-anything)** — 軽量な LLM アプリケーションフレームワーク；Slack、Telegram、Discord、Gmail などに対応
- **[AgentMesh](https://github.com/MinimalFuture/AgentMesh)** — チーム協調による複雑な問題解決のためのオープンソースのマルチエージェントフレームワーク

<br/>

## 🏢 エンタープライズサービス

[**LinkAI**](https://link-ai.tech/) は企業や開発者向けのワンストップ AI Agent プラットフォームで、CowAgent にマネージドホスティングとエンタープライズグレードのサポートを提供します：

- **🚀 デプロイ不要のホスト型ランタイム** — [CowAgent オンラインアシスタント](https://link-ai.tech/cowagent/create) を 1 分以内に起動、サーバー不要
- **🧠 Agent インフラ** — 主要 LLM・ナレッジベース・データベース・Skill・ワークフローへの統一アクセス。CowAgent の機能を拡張する、すぐに使えるビルディングブロック
- **🏢 チーム & エンタープライズ機能** — ワークスペース、ロールベースのアクセス制御、監査ログ、本番運用向けプライベートデプロイ

エンタープライズに関するお問い合わせ：**sales@simple-future.tech** または [QR コードをスキャン](https://cdn.link-ai.tech/consultant.jpg) して WeChat でお問い合わせください。

<br/>

## 🛠️ 開発とコントリビューション

新しいチャネルの追加を歓迎します — [Feishu チャネル](https://github.com/zhayujie/CowAgent/blob/master/channel/feishu/feishu_channel.py) を参考にカスタムチャネルを実装できます。新しい Skill のコントリビューションも [Skill Hub](https://skills.cowagent.ai/submit) で受け付けています。

⭐ Star でプロジェクトの更新をフォローしてください。PR や Issue の提出も歓迎します。

## 🌟 コントリビューター

![cow contributors](https://contrib.rocks/image?repo=zhayujie/CowAgent&max=1000)

<br/>

## ⚠️ 免責事項

1. 本プロジェクトは [MIT License](/LICENSE) に基づき、技術研究と学習を目的としています。利用者は所在地の法令・規制を遵守する必要があり、本プロジェクトの利用に起因するいかなる結果についてもメンテナーは責任を負いません。
2. **コストと安全性：** Agent モードは通常のチャットよりトークン消費が大幅に多いため、品質とコストのバランスを考慮してモデルを選択してください。Agent はローカル OS にアクセスできるため、信頼できる環境にのみデプロイしてください。
3. CowAgent は純粋なオープンソースプロジェクトであり、暗号通貨の発行・参加・承認は一切行いません。

<br/>

## 📌 プロジェクト改名のお知らせ

本プロジェクトは旧名 `chatgpt-on-wechat` から、2026.04.13 に **CowAgent** へ正式に改名されました。元の GitHub URL は自動的にリダイレクトされます。既存ユーザーは `git remote set-url origin https://github.com/zhayujie/CowAgent.git` でローカルのリモートを更新できます。
````

## File: docs/ja/releases/overview.mdx
````markdown
---
title: 変更履歴
description: CowAgent バージョン更新履歴
---

| バージョン | 日付 | 説明 |
| --- | --- | --- |
| [2.0.9](/ja/releases/v2.0.9) | 2026.05.22 | モデル管理機能の追加、MCP プロトコル対応、ブラウザログイン状態の永続化、新モデル追加（gpt-5.5、gemini-3.5-flash、qwen3.7-max など）、デプロイ・セキュリティ強化 |
| [2.0.8](/ja/releases/v2.0.8) | 2026.05.06 | Feishu チャネル全面アップグレード（音声、ストリーミング出力と Markdown、QR コードによるワンクリック接続）、DeepSeek V4 と百度モデルの追加、スケジュールタスクツールの強化 |
| [2.0.7](/ja/releases/v2.0.7) | 2026.04.22 | 画像生成スキル（6 プロバイダー自動ルーティング）、新モデル対応（Kimi K2.6、Claude Opus 4.7、GLM 5.1）、ナレッジベース強化、Web コンソール最適化 |
| [2.0.6](/ja/releases/v2.0.6) | 2026.04.14 | プロジェクト名変更、ナレッジベースシステム、Deep Dream 記憶蒸留、コンテキストの賢い圧縮、Web コンソールのマルチセッションおよび複数の最適化 |
| [2.0.5](/ja/releases/v2.0.5) | 2026.04.01 | Cow CLI、Skill Hub オープンソース化、ブラウザツール、WeCom QR コード作成、複数の最適化と修正 |
| [2.0.4](/ja/releases/v2.0.4) | 2026.03.22 | 個人 WeChat チャネル追加、新モデル対応、日本語ドキュメント、スクリプトリファクタリングおよび複数の修正 |
| [2.0.3](/ja/releases/v2.0.3) | 2026.03.18 | WeCom スマートボットおよび QQ チャネル追加、Coding Plan 対応、複数モデル追加、Web 側のファイル処理、メモリシステムアップグレード |
| [2.0.2](/ja/releases/v2.0.2) | 2026.02.27 | Web コンソールアップグレード、マルチチャネル同時実行、セッション永続化 |
| [2.0.1](/ja/releases/v2.0.1) | 2026.02.13 | Web Search ツール組み込み、スマートコンテキスト管理、複数の修正 |
| [2.0.0](/ja/releases/v2.0.0) | 2026.02.03 | スーパー Agent アシスタントへの全面アップグレード |
| 1.7.6 | 2025.05.23 | Web Channel 最適化、AgentMesh マルチエージェントプラグイン |
| 1.7.5 | 2025.04.11 | DeepSeek モデル |
| 1.7.4 | 2024.12.13 | Gemini 2.0 モデル、Web Channel |
| 1.7.3 | 2024.10.31 | 安定性向上、データベース機能 |
| 1.7.2 | 2024.09.26 | ワンクリックインストールスクリプト、o1 モデル |
| 1.7.0 | 2024.08.02 | 讯飞 4.0 モデル、ナレッジベース参照 |
| 1.6.9 | 2024.07.19 | gpt-4o-mini、アリババ音声認識 |
| 1.6.8 | 2024.07.05 | Claude 3.5、Gemini 1.5 Pro |
| 1.6.0 | 2024.04.26 | Kimi 接続、gpt-4-turbo アップグレード |
| 1.5.8 | 2024.03.26 | GLM-4、Claude-3、edge-tts |
| 1.5.2 | 2023.11.10 | Feishu チャネル、画像認識対話 |
| 1.5.0 | 2023.11.10 | gpt-4-turbo、dall-e-3、tts マルチモーダル |
| 1.0.0 | 2022.12.12 | プロジェクト作成、初の ChatGPT モデル接続 |

その他の過去バージョンは [GitHub Releases](https://github.com/zhayujie/CowAgent/releases) をご覧ください。
````

## File: docs/ja/releases/v2.0.0.mdx
````markdown
---
title: v2.0.0
description: CowAgent 2.0 - チャットボットから AI スーパーアシスタントへの全面アップグレード
---

CowAgent 2.0 は、チャットボットから **AI スーパーアシスタント** への包括的なアップグレードです。自律的な思考とタスク計画、長期記憶、コンピューターの操作、Skill の作成と実行が可能です。

**リリース日**: 2026.02.03 | [GitHub Release](https://github.com/zhayujie/CowAgent/releases/tag/2.0.0)

## 主な更新内容

### Agent コア

- **複雑なタスク計画**: マルチターン推論による自律的な計画
- **長期記憶**: キーワードおよびベクトル検索による永続的な記憶
- **組み込みツール**: ファイル操作、Bash、ブラウザ、スケジューラなど 10 以上のツール
- **Web 検索**: 組み込みの `web_search` ツール、複数の検索エンジンに対応、対応する API キーを設定して使用
- **Skill システム**: 組み込みおよびカスタム Skill をサポートする Skill エンジン
- **セキュリティとコスト**: シークレット管理、プロンプト制御、トークン制限

### その他

- **チャネル**: 飞书/钉钉 WebSocket 対応、画像・ファイルメッセージ
- **モデル**: claude-sonnet-4-5、gemini-3-pro-preview、glm-4.7、MiniMax-M2.1、qwen3-max
- **デプロイ**: ワンクリックでのインストール、設定、実行、および管理スクリプト

## 長期記憶

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260203000455.png" width="800" />
</Frame>

## タスク計画とツール

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202181130.png" width="800" />
</Frame>

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260203121008.png" width="800" />
</Frame>

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202195402.png" width="800" />
</Frame>

## Skill システム

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202202247.png" width="800" />
</Frame>

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202213219.png" width="800" />
</Frame>

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202234350.png" width="750" />
</Frame>

## コントリビューション

[フィードバックの送信](https://github.com/zhayujie/CowAgent/issues) や [コードのコントリビューション](https://github.com/zhayujie/CowAgent/pulls) を歓迎します。
````

## File: docs/ja/releases/v2.0.1.mdx
````markdown
---
title: v2.0.1
description: CowAgent 2.0.1 - 組み込み Web Search、スマートコンテキスト管理、複数の修正
---

**リリース日**: 2026.02.27 | [全変更履歴](https://github.com/zhayujie/CowAgent/compare/2.0.0..2.0.1)

## 新機能

- **組み込み Web Search ツール**: Web 検索を Agent の組み込みツールとして統合し、判断コストを削減 ([4f0ea5d](https://github.com/zhayujie/CowAgent/commit/4f0ea5d7568d61db91ff69c91c429e785fd1b1c2))
- **Claude Opus 4.6 モデル対応**: Claude Opus 4.6 モデルのサポートを追加 ([#2661](https://github.com/zhayujie/CowAgent/pull/2661))
- **企业微信の画像認識**: 企业微信チャネルでの画像メッセージ認識をサポート ([#2667](https://github.com/zhayujie/CowAgent/pull/2667))

## 改善

- **スマートコンテキスト管理**: インテリジェントなコンテキストトリミング戦略により、チャットコンテキストのオーバーフローを解決し、トークン制限超過を防止 ([cea7fb7](https://github.com/zhayujie/CowAgent/commit/cea7fb7490c53454602bf05955a0e9f059bcf0fd), [8acf2db](https://github.com/zhayujie/CowAgent/commit/8acf2dbdfe713b84ad74b761b7f86674b1c1904d)) [#2663](https://github.com/zhayujie/CowAgent/issues/2663)
- **ランタイム情報の動的更新**: 動的関数によるシステムプロンプト内のタイムスタンプおよびその他のランタイム情報の自動更新 ([#2655](https://github.com/zhayujie/CowAgent/pull/2655), [#2657](https://github.com/zhayujie/CowAgent/pull/2657))
- **Skill プロンプトの最適化**: Skill システムプロンプト生成を改善し、ツールの説明を簡素化して Agent のパフォーマンスを向上 ([6c21833](https://github.com/zhayujie/CowAgent/commit/6c218331b1f1208ea8be6bf226936d3b556ade3e))
- **GLM カスタム API Base URL**: GLM モデルのカスタム API Base URL をサポート ([#2660](https://github.com/zhayujie/CowAgent/pull/2660))
- **起動スクリプトの最適化**: `run.sh` スクリプトのインタラクションと設定フローを改善 ([#2656](https://github.com/zhayujie/CowAgent/pull/2656))
- **判断ステップのログ記録**: デバッグ用の Agent 判断ステップログを追加 ([cb303e6](https://github.com/zhayujie/CowAgent/commit/cb303e6109c50c8dfef1f5e6c1ec47223bf3cd11))

## バグ修正

- **Scheduler の記憶喪失**: Scheduler ディスパッチャーによる記憶喪失を修正 ([a77a874](https://github.com/zhayujie/CowAgent/commit/a77a8741b500a408c6f5c8868856fb4b018fe9db))
- **空のツール呼び出しと長い結果**: 空のツール呼び出しおよび過度に長いツール結果の処理を修正 ([0542700](https://github.com/zhayujie/CowAgent/commit/0542700f9091ebb08c1a56103b0f0f45f24aa621))
- **OpenAI Function Call**: OpenAI モデルとの Function Call 互換性を修正 ([158c87a](https://github.com/zhayujie/CowAgent/commit/158c87ab8b05bae054cc1b4eacdbb64fc1062ba9))
- **Claude ツール名フィールド**: Claude モデルのレスポンスから余分なツール名フィールドを削除 ([eec10cb](https://github.com/zhayujie/CowAgent/commit/eec10cb5db6a3d5bc12ef606606532237d2c5f6e))
- **MiniMax 推論**: MiniMax モデルの推論コンテンツ処理を最適化し、思考プロセスの出力を非表示化 ([c72cda3](https://github.com/zhayujie/CowAgent/commit/c72cda33864bd1542012ee6e0a8bd8c6c88cb5ed), [72b1cac](https://github.com/zhayujie/CowAgent/commit/72b1cacea1ba0d1f3dedacbab2e088e98fd7e172))
- **GLM 思考プロセス**: GLM モデルの思考プロセス表示を非表示化 ([72b1cac](https://github.com/zhayujie/CowAgent/commit/72b1cacea1ba0d1f3dedacbab2e088e98fd7e172))
- **飞书の接続と SSL**: 飞书チャネルの SSL 証明書エラーおよび接続問題を修正 ([229b14b](https://github.com/zhayujie/CowAgent/commit/229b14b6fcabe7123d53cab1dea39f38dab26d6d), [8674421](https://github.com/zhayujie/CowAgent/commit/867442155e7f095b4f38b0856f8c1d8312b5fcf7))
- **model_type バリデーション**: 非文字列の `model_type` による `AttributeError` を修正 ([#2666](https://github.com/zhayujie/CowAgent/pull/2666))

## プラットフォーム互換性

- **Windows 互換性**: 複数のツールモジュールにおける Windows でのパス処理、ファイルエンコーディング、および `os.getuid()` の利用不可問題を修正 ([051ffd7](https://github.com/zhayujie/CowAgent/commit/051ffd78a372f71a967fd3259e37fe19131f83cf), [5264f7c](https://github.com/zhayujie/CowAgent/commit/5264f7ce18360ee4db5dcb4ebe67307977d40014))
````

## File: docs/ja/releases/v2.0.2.mdx
````markdown
---
title: v2.0.2
description: CowAgent 2.0.2 - Web Console アップグレード、マルチチャネル同時実行、セッション永続化
---

**リリース日**: 2026.02.27 | [全変更履歴](https://github.com/zhayujie/CowAgent/compare/2.0.1...master)

## ハイライト

### 🖥️ Web Console アップグレード

Web Console が全面的にアップグレードされ、ストリーミング会話出力、ツール実行と推論プロセスの視覚的表示、**モデル、Skill、記憶、チャネル、Agent 設定** のオンライン管理が可能になりました。

#### チャットインターフェース

ストリーミング出力に対応し、Agent の推論プロセスとツール呼び出しをリアルタイムに表示することで、Agent の意思決定を直感的に観察できます：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227180120.png" />

#### モデル管理

設定ファイルを手動で編集せずに、モデル設定をオンラインで管理できます：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173811.png" />

#### Skill 管理

Agent の Skill をオンラインで表示・管理できます：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173403.png" />

#### 記憶管理

Agent の記憶をオンラインで表示・管理できます：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173349.png" />

#### チャネル管理

接続されたチャネルをオンラインで管理し、リアルタイムで接続・切断操作ができます：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173331.png" />

#### スケジュールタスク

ワンタイムタスク、固定間隔、Cron 式を含むスケジュールタスクをオンラインで表示・管理できます：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173704.png" />

#### ログ

Agent のランタイムログをリアルタイムで表示し、監視とトラブルシューティングに活用できます：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173514.png" />

関連コミット: [f1a1413](https://github.com/zhayujie/CowAgent/commit/f1a1413), [c0702c8](https://github.com/zhayujie/CowAgent/commit/c0702c8), [394853c](https://github.com/zhayujie/CowAgent/commit/394853c), [1c71c4e](https://github.com/zhayujie/CowAgent/commit/1c71c4e), [5e3eccb](https://github.com/zhayujie/CowAgent/commit/5e3eccb), [e1dc037](https://github.com/zhayujie/CowAgent/commit/e1dc037), [5edbf4c](https://github.com/zhayujie/CowAgent/commit/5edbf4c), [7d258b5](https://github.com/zhayujie/CowAgent/commit/7d258b5)

### 🔀 マルチチャネル同時実行

複数のチャネル（例：飞书、钉钉、企业微信、Web）を同時に実行できるようになりました。各チャネルは独立したスレッドで動作し、互いに干渉しません。

設定方法: `config.json` の `channel_type` にカンマ区切りで複数のチャネルを設定するか、Web Console のチャネル管理ページからリアルタイムでチャネルの接続・切断を行います。

```json
{
  "channel_type": "web,feishu,dingtalk"
}
```

関連コミット: [4694594](https://github.com/zhayujie/CowAgent/commit/4694594), [7cce224](https://github.com/zhayujie/CowAgent/commit/7cce224), [7d258b5](https://github.com/zhayujie/CowAgent/commit/7d258b5), [c9adddb](https://github.com/zhayujie/CowAgent/commit/c9adddb)

### 💾 セッション永続化

セッション履歴がローカルの SQLite データベースに永続化されるようになりました。サービス再起動後も会話コンテキストが自動的に復元されます。Web Console の過去の会話も復元されます。

関連コミット: [29bfbec](https://github.com/zhayujie/CowAgent/commit/29bfbec), [9917552](https://github.com/zhayujie/CowAgent/commit/9917552), [925d728](https://github.com/zhayujie/CowAgent/commit/925d728)

## 新モデル

- **Gemini 3.1 Pro Preview**: `gemini-3.1-pro-preview` モデルのサポートを追加 ([52d7cad](https://github.com/zhayujie/CowAgent/commit/52d7cad))
- **Claude 4.6 Sonnet**: `claude-4.6-sonnet` モデルのサポートを追加 ([52d7cad](https://github.com/zhayujie/CowAgent/commit/52d7cad))
- **Qwen3.5 Plus**: `qwen3.5-plus` モデルのサポートを追加 ([e59a289](https://github.com/zhayujie/CowAgent/commit/e59a289))
- **MiniMax M2.5**: `Minimax-M2.5` モデルのサポートを追加 ([48db538](https://github.com/zhayujie/CowAgent/commit/48db538))
- **GLM-5**: `glm-5` モデルのサポートを追加 ([48db538](https://github.com/zhayujie/CowAgent/commit/48db538))
- **Kimi K2.5**: `kimi-k2.5` モデルのサポートを追加 ([48db538](https://github.com/zhayujie/CowAgent/commit/48db538))
- **Doubao 2.0 Code**: コーディング特化型 `doubao-2.0-code` モデルを追加 ([ab28ee5](https://github.com/zhayujie/CowAgent/commit/ab28ee5))
- **DashScope モデル**: 阿里云 DashScope モデル名のサポートを追加 ([ce58f23](https://github.com/zhayujie/CowAgent/commit/ce58f23))

## ウェブサイトとドキュメント

- **公式サイト**: [cowagent.ai](https://cowagent.ai/)
- **ドキュメント**: [docs.cowagent.ai](https://docs.cowagent.ai/)

## バグ修正

- **Gemini 钉钉画像認識**: 钉钉チャネルで Gemini が画像マーカーを処理できない問題を修正 ([05a3304](https://github.com/zhayujie/CowAgent/commit/05a3304)) ([#2670](https://github.com/zhayujie/CowAgent/pull/2670)) Thanks [@SgtPepper114](https://github.com/SgtPepper114)
- **起動スクリプトの依存関係**: `run.sh` スクリプトの依存関係インストール問題を修正 ([b6fc9fa](https://github.com/zhayujie/CowAgent/commit/b6fc9fa))
- **bare except の整理**: より適切な例外処理のため `bare except` を `except Exception` に置換 ([adca89b](https://github.com/zhayujie/CowAgent/commit/adca89b)) ([#2674](https://github.com/zhayujie/CowAgent/pull/2674)) Thanks [@haosenwang1018](https://github.com/haosenwang1018)
````

## File: docs/ja/releases/v2.0.3.mdx
````markdown
---
title: v2.0.3
description: CowAgent 2.0.3 - 企業微信スマートボットとQQチャネルの追加、Webコンソールファイル処理、メモリシステムのアップグレード
---

## 🔌 新規チャネル

### 企業微信スマートボット

企業微信スマートボット（`wecom_bot`）チャネルを追加しました。ストリーミングカードメッセージ出力、テキストと画像メッセージの送受信をサポートし、Webコンソールでチャネルの設定と管理が可能です。

接続ドキュメント：[企業微信スマートボット接続](https://docs.cowagent.ai/channels/wecom-bot)。

関連コミット：[d4480b6](https://github.com/zhayujie/CowAgent/commit/d4480b6), [a42f31f](https://github.com/zhayujie/CowAgent/commit/a42f31f), [4ecd4df](https://github.com/zhayujie/CowAgent/commit/4ecd4df), [8b45d6c](https://github.com/zhayujie/CowAgent/commit/8b45d6c)

### QQ チャネル

QQ 公式ボット（`qq`）チャネルを追加しました。テキストと画像メッセージの送受信をサポートし、プライベートチャットとグループチャットに対応しています。

接続ドキュメント：[QQボット接続](https://docs.cowagent.ai/channels/qq)。

関連コミット：[005a0e1](https://github.com/zhayujie/CowAgent/commit/005a0e1), [a4d54f5](https://github.com/zhayujie/CowAgent/commit/a4d54f5)

## 🖥️ Web コンソールのファイル入力・処理対応

Web コンソールのチャット画面でファイルや画像のアップロードが可能になり、Agent に直接ファイルを送信して処理できます。また、Read ツールに Office ドキュメント（Word、Excel、PPT）の解析機能を追加しました。

関連コミット：[30c6d9b](https://github.com/zhayujie/CowAgent/commit/30c6d9b)

## 🤖 新規モデル

- **GPT-5.4 シリーズ**：`gpt-5.4`、`gpt-5.4-mini`、`gpt-5.4-nano` モデルのサポートを追加 ([1623deb](https://github.com/zhayujie/CowAgent/commit/1623deb))
- **Gemini 3.1 Flash Lite Preview**：`gemini-3.1-flash-lite-preview` モデルのサポートを追加 ([ba915f2](https://github.com/zhayujie/CowAgent/commit/ba915f2))

## 💰 Coding Plan サポート

各ベンダーの Coding Plan（プログラミング月額プラン）への接続をサポートしました。OpenAI 互換方式で統一的に接続できます。現在、阿里雲、MiniMax、智譜 GLM、Kimi、火山エンジンなどのベンダーに対応しています。

詳細設定は [Coding Plan ドキュメント](https://docs.cowagent.ai/models/coding-plan) を参照してください。

## 🧠 メモリシステムのアップグレード

メモリ書き込み（Memory Flush）のアップグレード：

- LLM を使用してコンテキストウィンドウを超えた会話内容をインテリジェントに要約し、精製された日次メモリエントリを生成
- 要約はバックグラウンドスレッドで非同期実行され、応答をブロックしない
- コンテキストの一括トリミング戦略を最適化し、フラッシュ頻度を低減
- 日次定期フラッシュのフォールバック機能を追加し、低アクティビティシナリオでのメモリ損失を防止
- コンテキストメモリの損失問題を修正

関連コミット：[022c13f](https://github.com/zhayujie/CowAgent/commit/022c13f), [c116235](https://github.com/zhayujie/CowAgent/commit/c116235)

## 🔧 ツールリファクタリング

- **画像認識**：画像認識（Image Vision）を Skill から内蔵 Tool にリファクタリングし、独立した画像ビジョンプロバイダー（Vision Provider）設定を追加。安定性と保守性を向上 ([a50fafa](https://github.com/zhayujie/CowAgent/commit/a50fafa), [3b8b562](https://github.com/zhayujie/CowAgent/commit/3b8b562))
- **Webスクレイピング**：Webスクレイピング（Web Fetch）を Skill から内蔵 Tool にリファクタリング。リモートドキュメントファイル（PDF、Word、Excel、PPT）のダウンロードと解析をサポート ([ccb9030](https://github.com/zhayujie/CowAgent/commit/ccb9030), [fa61744](https://github.com/zhayujie/CowAgent/commit/fa61744))

## 🐳 Docker デプロイメントの最適化

- **設定テンプレートの整合**：`docker-compose.yml` の環境変数を `config-template.json` と整合し、モデル API Key と Agent 設定項目を完備
- **Web コンソールポートマッピング**：`9899` ポートマッピングを追加。Docker デプロイ後にブラウザから Web コンソールにアクセス可能
- **設定のホットリロード**：各モデル Bot の API Key と API Base をリアルタイム読み込みに変更。Web コンソールで設定変更後、再起動不要で即時反映
- **ワークスペースの永続化**：`./cow` Volume マウントを追加。Agent ワークスペースデータ（メモリ、ペルソナ、スキルなど）をホストマシンに永続化し、コンテナの再構築やアップグレードでデータが失われない

## ⚡ パフォーマンス最適化

- **起動高速化**：飛書チャネルで依存関係の遅延読み込みを採用し、4-10秒の起動遅延を回避 ([924dc79](https://github.com/zhayujie/CowAgent/commit/924dc79))
- **チャネルの安定性**：チャネル接続の安定性を最適化し、環境変数によるチャネル設定をサポート ([f1c04bc](https://github.com/zhayujie/CowAgent/commit/f1c04bc), [46d97fd](https://github.com/zhayujie/CowAgent/commit/46d97fd))

## 🐛 バグ修正

- **bot_type 設定**：Agent モードでの `bot_type` 設定の受け渡し問題を修正 ([#2691](https://github.com/zhayujie/CowAgent/pull/2691)) Thanks [@Weikjssss](https://github.com/Weikjssss)
- **bot_type 優先順位**：Agent モードでの `bot_type` の解析優先順位を調整 ([#2692](https://github.com/zhayujie/CowAgent/pull/2692)) Thanks [@6vision](https://github.com/6vision)
- **智譜モデル設定**：智譜の `bot_type` 命名、Web コンソールの永続化、正規表現エスケープの問題を修正 ([#2693](https://github.com/zhayujie/CowAgent/pull/2693)) Thanks [@6vision](https://github.com/6vision)
- **OpenAI 互換レイヤー**：`openai_compat` レイヤーによる統一エラー処理 ([#2688](https://github.com/zhayujie/CowAgent/pull/2688)) Thanks [@JasonOA888](https://github.com/JasonOA888)
- **OpenAI 互換移行**：全モデル Bot の `openai_compat` 移行を完了 ([#2689](https://github.com/zhayujie/CowAgent/pull/2689))
- **Gemini ツール呼び出し**：Gemini モデルのツール呼び出しマッチング問題を修正 ([eda82ba](https://github.com/zhayujie/CowAgent/commit/eda82ba))
- **セッション並行処理**：セッション並行シナリオでの競合条件の問題を修正 ([9879878](https://github.com/zhayujie/CowAgent/commit/9879878))
- **履歴メッセージの復元**：履歴セッションメッセージの不完全な問題を修正。user/assistant のテキストメッセージのみを復元し、ツール呼び出しを除外 ([b788a3d](https://github.com/zhayujie/CowAgent/commit/b788a3d), [a33ce97](https://github.com/zhayujie/CowAgent/commit/a33ce97))
- **飛書グループチャット**：飛書グループチャットシナリオでの `bot_name` 依存を削除 ([b641bff](https://github.com/zhayujie/CowAgent/commit/b641bff))
- **Safari 互換性**：Safari ブラウザでの IME Enter キーによるメッセージ誤送信の問題を修正 ([0687916](https://github.com/zhayujie/CowAgent/commit/0687916))
- **Windows 互換性**：Windows での bash スタイル `$VAR` 環境変数を `%VAR%` に変換する問題を修正 ([7c67513](https://github.com/zhayujie/CowAgent/commit/7c67513))
- **MiniMax パラメータ**：MiniMax モデルの `max_tokens` 制限を追加 ([1767413](https://github.com/zhayujie/CowAgent/commit/1767413))
- **.gitignore 更新**：Python ディレクトリの無視ルールを追加 ([#2683](https://github.com/zhayujie/CowAgent/pull/2683)) Thanks [@pelioo](https://github.com/pelioo)
- **AGENT.md の能動的進化**：システムプロンプトでの AGENT.md 更新ガイダンスを最適化。受動的な「ユーザーが変更した時に更新」から、会話中の性格やスタイルの変化を能動的に検出して自動更新するように改善

## 📦 アップグレード方法

ソースコードデプロイの場合は `./run.sh update` でワンクリックアップグレードできます。または手動でコードをプルして再起動してください。詳細は [アップデートドキュメント](https://docs.cowagent.ai/guide/upgrade) を参照。

**リリース日**：2026.03.18 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.2...master)
````

## File: docs/ja/releases/v2.0.4.mdx
````markdown
---
title: v2.0.4
description: CowAgent 2.0.4 - 個人WeChat チャネルの追加、新モデルサポート、日本語ドキュメント、スクリプトリファクタリングおよび複数の修正
---

## 🔌 個人WeChat チャネルの追加

個人WeChat（`weixin`）チャネルを追加しました。本バージョンの最も重要なアップデートです。QRコードをスキャンするだけで CowAgent を個人WeChatに接続でき、以下の機能をサポートします：

- **メッセージ送受信**：テキスト、画像、ファイル、動画メッセージの送受信、音声メッセージの受信をサポート
- **QRコードログイン**：ターミナルにQRコードを表示、WeChatでスキャンして確認するだけでログイン完了。QRコード期限切れ時は自動更新
- **認証情報の永続化**：ログイン認証情報を `~/.weixin_cow_credentials.json` に自動保存、再起動時に再スキャン不要
- **Session 自動再接続**：Session 期限切れ時に旧認証情報を自動クリアし、QRコードログインを再開
- **Web コンソール接続**：Web コンソールからWeChatチャネルを追加可能、QRコードログインフローを同期表示
- **Docker・スクリプト対応**：`run.sh` と `docker-compose.yml` がWeChat チャネルに対応

接続ドキュメント：[WeChat 接続](https://docs.cowagent.ai/channels/weixin)。

関連コミット：[ce89869](https://github.com/zhayujie/CowAgent/commit/ce89869), [a483ec0](https://github.com/zhayujie/CowAgent/commit/a483ec0), [c1421e0](https://github.com/zhayujie/CowAgent/commit/c1421e0)

## 🤖 新規モデル

- **MiniMax-M2.7**：MiniMax-M2.7 モデルのサポートを追加
- **GLM-5-Turbo**：智譜 glm-5-turbo モデルのサポートを追加

関連コミット：[9192f6f](https://github.com/zhayujie/CowAgent/commit/9192f6f)

## 🔧 スクリプトリファクタリング

- **run.sh リファクタリング**：共通ロジックを抽出し、大量の重複コードを削除。スクリプトの行数を 600+ 行から 177 行に圧縮 ([49d8707](https://github.com/zhayujie/CowAgent/commit/49d8707))
- **実行権限**：`run.sh` ファイルの権限問題を修正 ([652156e](https://github.com/zhayujie/CowAgent/commit/652156e))

## ⚡ 最適化

- **リクエストヘッダー統一**：Agent の各サービス（Chat、Embedding、Vision、WebSearch 等）の外部リクエストに統一的な識別ヘッダーを追加 ([b4e711f](https://github.com/zhayujie/CowAgent/commit/b4e711f))
- **メッセージ自動修復**：メッセージプロトコルのフォールトトレランスを強化し、フォーマット異常なメッセージシーケンスを自動修復 ([b8b57e3](https://github.com/zhayujie/CowAgent/commit/b8b57e3))

## 🌍 日本語ドキュメント

完全な日本語ドキュメントを追加しました。入門ガイド、チャネル接続、モデル設定などの主要セクションをカバーしています。Thanks [@Ikko Ashimine](https://github.com/ikoamu)

関連コミット：[5487c0b](https://github.com/zhayujie/CowAgent/commit/5487c0b)

## 🐛 バグ修正

- **企業微信ボット互換性**：旧バージョンの `websocket-client` との互換性問題を修正し、統一的な WebSocket 互換レイヤーを追加 ([bc7f627](https://github.com/zhayujie/CowAgent/commit/bc7f627))
- **run.sh PID 取得**：`run.sh` でのプロセス PID 取得エラーを修正 ([9febb07](https://github.com/zhayujie/CowAgent/commit/9febb07))
- **飛書エンコーディング**：飛書チャネルのメッセージとログのエンコーディング問題を修正 ([7d0e156](https://github.com/zhayujie/CowAgent/commit/7d0e156))
- **飛書設定**：`run.sh` での `feishu_bot_name` への冗長な依存を削除 ([1b5be1b](https://github.com/zhayujie/CowAgent/commit/1b5be1b))

## 📦 アップグレード方法

ソースコードデプロイの場合は `./run.sh update` でワンクリックアップグレードできます。または手動でコードをプルして再起動してください。詳細は [アップデートドキュメント](https://docs.cowagent.ai/guide/upgrade) を参照。

**リリース日**：2026.03.22 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.3...master)
````

## File: docs/ja/releases/v2.0.5.mdx
````markdown
---
title: v2.0.5
description: CowAgent 2.0.5 - Cow CLI、Skill Hub オープンソース、ブラウザツール、企業微信スキャン作成、その他改善
---

## 🖥️ Cow CLI コマンドシステム

ターミナルと会話の両方で CowAgent を管理する新しい CLI コマンドシステム：

- **ターミナルコマンド**：`cow <コマンド>` で `start`、`stop`、`restart`、`update`、`status`、`logs` などを実行
- **チャットコマンド**：会話で `/<コマンド>` を入力して `/help`、`/status`、`/config`、`/skill`、`/context`、`/logs`、`/version` など
- **Web コンソール**：入力欄で `/` を入力するとスラッシュコマンドメニューが表示、矢印キーで入力履歴を辿れる
- **Windows サポート**：PowerShell スクリプト `scripts/run.ps1` を追加、`cow` コマンドに対応

ドキュメント：[コマンド一覧](https://docs.cowagent.ai/ja/cli)

<img src="https://cdn.link-ai.tech/doc/20260401114549.png" width="750" />

## 🧩 Cow Skill Hub オープンソース

[Cow Skill Hub](https://skills.cowagent.ai)（スキル広場）がオープンソースとして公開。AI Agent スキルの閲覧、検索、インストール、公開が可能：

- **ワンコマンドインストール**：会話で `/skill install <名前>` またはターミナルで `cow skill install <名前>`
- **マルチソース**：Skill Hub、GitHub、ClawHub、LinkAI などからインストール可能
- **検索**：`/skill search` と `/skill list --remote` でスキル広場を閲覧・検索
- **スキル公開**：[skills.cowagent.ai/submit](https://skills.cowagent.ai/submit) で自作スキルを提出
- **ミラー加速**：中国国内向けミラーダウンロード対応

オープンソースリポジトリ：[cow-skill-hub](https://github.com/zhayujie/cow-skill-hub)

ドキュメント：[スキル広場](https://docs.cowagent.ai/ja/skills/hub)、[スキルのインストール](https://docs.cowagent.ai/ja/skills/install)

<img src="https://cdn.link-ai.tech/doc/20260401110103.png" width="750" />

## 🌐 ブラウザツール

新しい Browser ツール — Agent が Chromium ブラウザを制御して Web ページにアクセス・操作：

- **ナビゲーションと操作**：`navigate`、`click`、`fill`、`select`、`scroll`、`press` など
- **ページスナップショット**：精簡 DOM スナップショットで Agent がページ構造を効率的に理解、ナビゲーション後に自動スナップショット
- **スクリーンショット**：ワークスペースにページのスクリーンショットを保存
- **JavaScript 実行**：ページでカスタムスクリプトを実行
- **CLI インストール**：`cow install-browser` でワンコマンドセットアップ
- **Docker サポート**：Docker イメージにブラウザインストール組み込み

ドキュメント：[ブラウザツール](https://docs.cowagent.ai/ja/tools/browser)

<img src="https://cdn.link-ai.tech/doc/20260401115728.png" width="750" />

## 🤖 企業微信 Bot スキャン作成

企業微信 Bot チャネルで QR コードスキャンによるワンクリック作成をサポート：

- **Web コンソールでスキャン**：「スキャン接入」モードを選択し、企業微信でスキャンするとボットが自動作成・接続
- **手動モード**：既存の Bot ID と Secret を手動入力する方式も引き続きサポート
- **ストリーム配信最適化**：WebSocket 混雑を避けるためのスロットリング

ドキュメント：[企業微信 Bot](https://docs.cowagent.ai/ja/channels/wecom-bot)

PR：[#2735](https://github.com/zhayujie/CowAgent/pull/2735)。Thanks [@WecomTeam](https://github.com/WecomTeam)

## 🐛 その他の改善と修正

- **DeepSeek モジュール**：独立 DeepSeek Bot、`deepseek_api_key` 専用設定対応（[#2719](https://github.com/zhayujie/CowAgent/pull/2719)）。Thanks [@6vision](https://github.com/6vision)
- **Web コンソール**：スラッシュコマンドメニュー、入力履歴、新モデル選択肢、モバイル最適化（[#2731](https://github.com/zhayujie/CowAgent/pull/2731)）。Thanks [@zkjqd](https://github.com/zkjqd)
- **コンテキスト**：トリミング後のコンテキスト喪失を修正（[393f0c0](https://github.com/zhayujie/CowAgent/commit/393f0c0)）
- **システムプロンプト**：毎ターン再構築されない問題を修正（[13f5fde](https://github.com/zhayujie/CowAgent/commit/13f5fde)）
- **Gemini**：GoogleGeminiBot の model 属性欠落を修正（[#2716](https://github.com/zhayujie/CowAgent/pull/2716)）。Thanks [@cowagent](https://github.com/cowagent)
- **WeChat チャネル**：ファイル送信失敗・ファイル名消失の修正（[6d9b7ba](https://github.com/zhayujie/CowAgent/commit/6d9b7ba)、[45faa9c](https://github.com/zhayujie/CowAgent/commit/45faa9c)）
- **Docker**：ボリューム権限修正、イメージサイズ削減（[3eb8348](https://github.com/zhayujie/CowAgent/commit/3eb8348)、[4470d4c](https://github.com/zhayujie/CowAgent/commit/4470d4c)）
- **セキュリティ**：Memory Content パストラバーサルリスクを修正。Thanks [@August829](https://github.com/August829)

## 📦 アップグレード

`cow update` または `./run.sh update` でアップグレード、またはコードを手動で pull して再起動。詳細は[アップグレードガイド](https://docs.cowagent.ai/ja/guide/upgrade)を参照。

**リリース日**：2026.04.01 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.4...master)
````

## File: docs/ja/releases/v2.0.6.mdx
````markdown
---
title: v2.0.6
description: CowAgent 2.0.6 - ナレッジベース、Deep Dream 記憶蒸留、スマートコンテキスト圧縮、Web コンソールマルチセッションなど
---

## プロジェクト名を CowAgent に改称

リポジトリが `chatgpt-on-wechat` から **CowAgent** に正式改称され、フル機能の AI Agent アシスタントへ進化しました。

- 新アドレス：[github.com/zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)、旧アドレスは GitHub が自動リダイレクト
- CLI コマンド、設定ファイル、ドキュメントリンクはすべて互換性を維持、追加操作は不要

## 📚 ナレッジベース

新しいパーソナルナレッジベースシステム — Agent が構造化された知識を自律的に構築・維持し、会話中に必要に応じて検索・引用：

- **インデックス駆動の自己組織構造**：ナレッジは `knowledge/` ディレクトリに保存、カテゴリ別に自動整理、各ナレッジページは独立した Markdown ファイル
- **自動書き込み**：Agent にファイルやリンクなどの知識を送信、または会話で価値ある情報を識別した際にナレッジページを自動作成・更新
- **ハイブリッド検索**：キーワード全文検索とベクトル意味検索をサポート、会話中に関連ナレッジをオンデマンドで読み込み
- **ビジュアライゼーション**：ファイルツリー閲覧とナレッジグラフの可視化、ドキュメント内リンクで直接ナビゲーション
- **コマンド管理**：`/knowledge` で統計表示、`/knowledge list` でディレクトリ構造、`/knowledge on|off` でオン・オフ

<img src="https://cdn.link-ai.tech/doc/20260413105435.png" width="750" />


ドキュメント：[ナレッジベース](https://docs.cowagent.ai/ja/knowledge)

## 🌙 Deep Dream 記憶蒸留

散在する会話記憶を毎日自動的に精製された長期記憶へ蒸留する新しい記憶整理メカニズム：

- **三層記憶フロー**：会話コンテキスト（短期）→ デイリーメモリ（中期）→ MEMORY.md（長期）、完全な記憶ライフサイクルを形成
- **自動蒸留**：毎日 23:55 に定期実行、当日のデイリーメモリと MEMORY.md を読み取り、LLM で重複排除・統合・剪定を行い、精製された新しい MEMORY.md を出力
- **夢日記**：各蒸留でナラティブスタイルの夢日記を生成、整理過程の発見と洞察を記録、`memory/dreams/` ディレクトリに保存
- **手動トリガー**：`/memory dream [N]` で手動トリガー、整理日数を指定可能（デフォルト 3 日、最大 30 日）、完了後にチャットで通知
- **Web コンソール**：記憶管理ページに「夢日記」タブを追加、すべての夢日記を閲覧可能

ドキュメント：[Deep Dream](https://docs.cowagent.ai/ja/memory/deep-dream)

<img src="https://cdn.link-ai.tech/doc/20260414120158.png" width="750" />

## 🧠 スマートコンテキスト圧縮

コンテキストが上限を超えた場合、トリミング部分を LLM で要約し非同期で注入、会話の連続性を維持：

- **LLM 非同期要約**：トリミングされたメッセージを LLM がキー情報に要約、デイリーメモリファイルへの書き込みと保持コンテキストへの注入を同時実行
- **マルチモデル対応**：メインモデルを優先使用、Claude、OpenAI、MiniMax など異なるモデルのメッセージ形式要件に対応

ドキュメント：[短期記憶](https://docs.cowagent.ai/ja/memory/context)

## 💬 Web コンソールアップグレード

Web コンソールの複数機能を強化：

- **マルチセッション管理**：独立セッションの作成と切り替え、サイドバーにセッションリスト表示、タイトルの自動生成と手動編集をサポート
- **パスワード保護**：`web_console_password` 設定でコンソールにログインパスワードを設定可能
- **深い思考**：Web 端でモデルの思考プロセスを表示、`enable_thinking` 設定で制御
- **定期プッシュ**：定期タスクの結果を Web コンソールにプッシュ
- **メッセージコピー**：AI 回答バブルから元の Markdown コンテンツをワンクリックコピー
- **言語切替**：上部の言語切替ボタンが現在の言語を表示するように改善、より直感的な操作

## 🤖 モデル関連

- **視覚認識の最適化**：画像認識ツールがメインモデルを優先使用、複数プロバイダーの自動フォールバック対応。ドキュメント：[ビジョンツール](https://docs.cowagent.ai/ja/tools/vision)
- **MiniMax 新モデル**：MiniMax-M2.7-highspeed モデルと MiniMax TTS 音声合成サポートを追加。Thanks @octo-patch
- **通義千問**：qwen3.6-plus モデルサポートを追加

## 🐛 その他の改善と修正

- **記憶プロンプト最適化**：`MEMORY.md` をシステムプロンプトにデフォルト注入、記憶検索と書き込みのトリガー条件を精緻化、主動的な書き込み能力を強化
- **システムプロンプト**：システムプロンプトのスタイルとトーンガイダンスを最適化
- **ブラウザツール**：暗黙的なインタラクティブ要素の検出を強化
- **ファイル送信**：汎用ファイルタイプ（tar.gz、zip 等）が正しく送信されない問題を修正。Thanks @6vision
- **macOS 互換性**：ネットワークプリチェックタイムアウトの互換性問題を修正。Thanks @Moliang Zhou
- **Windows 互換性**：Windows での PowerShell 互換性、プロセス更新、ターミナルエンコーディングなどの問題を修正
- **Python 3.13+**：Python 3.13 以降で `legacy-cgi` 依存関係が不足する問題を修正
- **個人 WeChat**：個人 WeChat チャネルバージョンを更新

## 📦 アップグレード

`cow update` または `./run.sh update` でアップグレード、またはコードを手動で pull して再起動。詳細は[アップグレードガイド](https://docs.cowagent.ai/ja/guide/upgrade)を参照。

**リリース日**：2026.04.14 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.5...master)
````

## File: docs/ja/releases/v2.0.7.mdx
````markdown
---
title: v2.0.7
description: CowAgent 2.0.7 - 画像生成スキル（6プロバイダー自動ルーティング）、新モデルサポート、ナレッジベース強化、Web コンソール改善およびバグ修正
---

## 🎨 画像生成スキル

新しい内蔵スキル `image-generation` を追加。テキストから画像生成、画像編集、複数画像の融合に対応し、6 社の主要プロバイダーをカバー：

- **6 プロバイダー自動ルーティング**：OpenAI (GPT-Image-2) → Gemini (Nano Banana) → Seedream (Volcengine Ark) → Qwen (DashScope) → MiniMax → LinkAI — 固定の優先順位で設定済みプロバイダーを自動選択、失敗時は次のプロバイダーへ自動フォールバック
- **モデル選択不要**：API Key を設定するだけで使用可能、モデルを手動で指定する必要なし。会話で特定モデルを指名することも可能（例：「seedream で猫を描いて」）
- **柔軟な制御**：`quality`（画質）、`size`（解像度、512/1K〜4K）、`aspect_ratio`（アスペクト比）パラメータ対応、各プロバイダーが自動的に有効な値にマッピング
- **画像編集**：既存の画像を渡して編集・スタイル変換・複数画像融合が可能（Seedream は最大 14 枚の参照画像をサポート）
- **スキルレベル設定**：`config.json` の `skills.image-generation.model` でデフォルトモデルを固定可能
- **画像ライトボックス**：Web コンソールのすべての画像がクリックで拡大プレビュー対応

ドキュメント：[画像生成スキル](https://docs.cowagent.ai/ja/skills/image-generation)

## 🤖 新モデルサポート

- **Kimi K2.6**：`kimi-k2.6` モデルサポートを追加
- **Claude Opus 4.7**：`claude-opus-4-7` モデルサポートを追加
- **GLM 5.1**：`glm-5.1` モデルサポートを追加
- **Kimi Coding Plan**：Kimi Coding Plan モードをサポート
- **カスタムモデルプロバイダー**：新しいカスタムモデルプロバイダー設定により、追加ベンダーとの統合が容易に

## 💬 Web コンソール改善

- **スマート自動スクロール**：チャットスクロールの動作を改善 — ユーザーが過去のメッセージを閲覧中に強制的に最下部にスクロールしなくなりました
- **推論コンテンツ制限**：深い思考コンテンツを 4KB に制限し、フロントエンドのラグを防止
- **モバイル最適化**：セッションサイドバーをモバイルではデフォルトで非表示、オーバーレイタップで閉じることが可能
- **セッションタイトル修正**：タイトル自動生成のフォールバックロジックと設定変更時の Bridge リセットを修正
- **画像プレビュー重複排除**：同一メッセージ内での画像の重複レンダリングを修正

## 📚 ナレッジベース強化

- **ネストディレクトリ対応**：ナレッジベースの一覧表示が多階層のネストディレクトリに対応
- **ルートレベルファイル表示**：ナレッジツリーにルートディレクトリの `index.md`、`log.md` などを表示
- **空状態統計の修正**：ルートレベルファイルが空状態検出に干渉しなくなりました

## 🌙 夢の記憶改善

- **構造化整理**：夢の記憶ファイルが日付別に自動アーカイブされ、ディレクトリ構造がより整理されました
- **スケジュールジッター**：毎日の夢トリガーにランダムジッターを追加し、クラスター環境での同時実行の競合を回避

## 🛠 スキルシステム改善

- **スキルマネージャーの更新**：`/skill` コマンド実行後にスキルマネージャーを自動リフレッシュし、状態の同期を確保
- **インストールソース拡張**：スキルインストールが複数のソース形式（URL、zip、ローカルファイルなど）に対応し、ターゲットディレクトリを自動的に確保

## 🐛 その他の修正

- **Gemini 修正**：Gemini の tool call が結果を返さない問題を修正
- **Agent リトライ**：空レスポンスのリトライ時に `tool_calls` が破棄されなくなりました
- **Docker 環境変数同期**：Docker 環境で設定更新後に環境変数が同期されない問題を修正
- **Python 3.7 互換**：Python 3.7 互換性のために `Literal` のインポートを遅延
- **モデル切替通知**：モデル切替後に bot_type 変更通知が表示されない問題を修正。Thanks @6vision
- **設定コマンド**：`/config` で `enable_thinking` の設定が可能に
- **思考表示**：深い思考の表示がデフォルトで無効に

## 📦 アップグレード

`cow update` または `./run.sh update` でアップグレード、またはコードを手動で pull して再起動。詳細は[アップグレードガイド](https://docs.cowagent.ai/ja/guide/upgrade)を参照。

**リリース日**：2026.04.22 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.6...master)
````

## File: docs/ja/releases/v2.0.8.mdx
````markdown
---
title: v2.0.8
description: CowAgent 2.0.8 - 飛書チャネル全面アップグレード（音声、ストリーミングタイプライター、ワンクリック QR アプリ作成）、DeepSeek V4 / 百度千帆 ERNIE 5.0 サポート、スケジューラ記憶強化および複数の修正
---

## 🪶 飛書チャネル全面アップグレード

### 1. ワンクリック QR スキャンでアプリ作成

飛書オープンプラットフォームで手動でアプリを作成し、権限とイベントサブスクリプションを設定する必要がなくなりました。Web コンソールおよびコマンドライン起動時に `feishu_app_id` が未設定の場合、QR スキャン入口が自動的に表示されます。飛書でスキャン・認可するとボットが自動作成され、設定が自動で書き戻され、すぐに使い始められます。

ドキュメント：[飛書チャネル](https://docs.cowagent.ai/ja/channels/feishu)

### 2. 音声メッセージ送受信

ユーザーから送られた飛書の音声メッセージを受信し、自動的にテキストへ変換できるようになりました。返信も TTS による音声形式に対応。中国語の短い音声メッセージの認識精度も改善されています。

### 3. ストリーミングタイプライター返信

飛書 CardKit ストリーミングカードを統合し、**デフォルト有効**で Web コンソールと同等の体験を提供：

- マルチターンの Agent シナリオで、中間メッセージと最終回答を別カードで表示
- DeepSeek など高頻度出力モデル向けに最適化、Web コンソールと同等の速度を実現
- 非対応時は自動的に通常のテキスト返信にフォールバック、手動設定不要
- 飛書クライアント ≥ 7.20 が必要

飛書の音声メッセージ送受信とストリーミングタイプライターのベース機能はコミュニティ貢献 #2791 によるものです。Thanks [@yangluxin613](https://github.com/yangluxin613)

## 🤖 新モデルサポート

- **DeepSeek V4 シリーズ**：`deepseek-v4-pro` / `deepseek-v4-flash` を追加、デフォルトモデルを `deepseek-v4-flash` に切り替え
- **思考モデルスイッチの統一**：DeepSeek V4、Qwen3 など思考対応モデルの切り替え動作を `enable_thinking` に統一
- **百度千帆 / ERNIE のファーストクラス対応**：新たな `qianfan` プロバイダーを追加。`ernie-5.0`（デフォルト推奨）、`ernie-x1.1`、`ernie-4.5-turbo-128k`、`ernie-4.5-turbo-32k` をサポート。`qianfan_api_key` / `qianfan_api_base` の独立設定により OpenAI 設定を汚染せず、旧来の `wenxin` / `wenxin-4` パスも完全互換 #2790 Thanks [@jimmyzhuu](https://github.com/jimmyzhuu)

  ドキュメント：[百度千帆 / ERNIE](https://docs.cowagent.ai/ja/models/qianfan)

## 🌐 翻訳プロバイダー

- **有道翻訳を追加**：`translate/` モジュールに有道翻訳プロバイダーを追加。v3 SHA-256 署名方式に対応し、`zh` / `zh-TW` などの ISO 639-1 言語コードを自動マッピング #2797 Thanks [@Zmjjeff7](https://github.com/Zmjjeff7)

## 🛠 OpenAI クライアントのリファクタリング

- **SDK 依存を排除**：OpenAI Bot をネイティブ HTTP クライアントに刷新、起動が軽量化、依存衝突も削減
- **Web コンソールヒント**：モデル設定の API Base 入力欄にバージョンパスのプレースホルダーヒントを追加

## ⏰ スケジューラ記憶強化

- **タスク結果への追問**：定期タスクの実行結果を受信側のセッション履歴に自動注入。次のターンでコンテキストを再説明することなくそのまま追問可能 Thanks [@huangrichao2020](https://github.com/huangrichao2020)
- **長期記憶を汚染しない**：注入されたスケジューラ対話は毎日の記憶フラッシュ対象から除外され、高頻度タスクで記憶ストアが埋まることを防止
- **遅くなり続ける問題を回避**：スケジューラ自身のコンテキスト長を自動制限、長期反復実行でも蓄積して応答を遅延させません

## 🔧 ツールと安全性

- **Vision モデル選択**：`tools.vision.model` 設定が実際に反映されるようになり、未設定時は自動フォールバック #2792
- **Bash セーフティ確認**：破壊的削除の確認プロンプトをワークスペース外のパスに限定。ワークスペース内の通常操作は中断されません

## 🐛 その他の修正

- マルチインスタンス環境で Deep Dream が重複実行される問題を修正
- DeepSeek マルチターン会話の一部の履歴ターンで `reasoning_content` が欠落する問題を修正

## 📦 アップグレード

ソースコードデプロイは `cow update` または `./run.sh update` でワンクリックアップグレード、または最新コードを手動で pull して再起動してください。詳細は[アップグレードガイド](https://docs.cowagent.ai/ja/guide/upgrade)を参照。

> ⚠️ 飛書のワンクリックアプリ作成は `lark-oapi>=1.5.5` が必要です。`cow update` は自動で取得します。手動デプロイの場合は依存関係の更新を確認してください。

**リリース日**：2026.05.05 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.7...2.0.8)
````

## File: docs/ja/releases/v2.0.9.mdx
````markdown
---
title: v2.0.9
description: CowAgent 2.0.9 - モデル管理機能、MCP プロトコル対応、ブラウザログイン状態の永続化、新モデル追加とデプロイ・セキュリティ強化
---

## 🖥️ モデル管理機能の追加

Web コンソールに「モデル」ページを新設。**モデルプロバイダー × モデル機能** の軸で管理し、対話、画像、音声、ベクトル、検索の各能力を一元的に設定可能になりました：

- **プロバイダー単位の設定**：各プロバイダーの API Key / API Base はページ上部で一度だけ設定すれば、下部の各機能が自動で参照。再入力は不要
- **画像モデル**：画像理解・画像生成それぞれで独立にプロバイダーとモデルを選択可能。未指定時はメインモデルに自動で追従
- **音声モデル**：音声認識（ASR）と音声合成（TTS）を独立に設定可能。Qwen・Zhipu の ASR/TTS モデルを新たに追加
- **ベクトルモデル**：埋め込み（Embedding）モデルを設定可能（記憶およびナレッジベース検索で利用）。OpenAI、Tongyi、Doubao、Zhipu などに対応。モデル切り替え後は `/memory rebuild-index` でインデックスをオンライン再構築してください
- **検索機能**：ウェブ検索機能を強化、Bocha・Baidu・Zhipu など複数プロバイダーに対応。自動モードでは Agent が複数ソースの結果を統合してより深いリサーチを実行可能

ドキュメント：[モデル概要](https://docs.cowagent.ai/ja/models)

<img width="720" alt="20260522113305" src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/web-console-models-config.png" />


## 🧩 MCP プロトコル対応

**MCP（Model Context Protocol）** プロトコルに対応。固定のツールセットから、開放的でプラグイン可能なツールエコシステムへと拡張され、MCP 互換のあらゆるサービスを Agent のツールとして直接接続できます。

- ネイティブ JSON-RPC 実装、追加依存ゼロ。`stdio` と `sse` の両伝送方式に対応
- Claude Desktop / Cursor などの主流形式の `mcpServers` 設定に互換、`~/cow/mcp.json` を優先的に読み込み

ドキュメント：[MCP ツール](https://docs.cowagent.ai/ja/tools/mcp)。Thanks [@yangluxin613](https://github.com/yangluxin613) (#2801)

## 🌐 ブラウザログイン状態の永続化

ログインが必要なサイトや反クロウル機構のあるサイトに対して、ブラウザツールが一度のログイン状態を長期的に再利用できるようになりました。さらに自前の本物の Chrome に接続することで、フィンガープリント検出も回避可能です：

- **永続化ユーザープロファイル（デフォルト）**：`~/.cow/browser_profile` をブラウザのユーザーディレクトリとしてデフォルト使用、一度ログインすれば次回以降は自動で復元
- **CDP モード**：`tools.browser.cdp_endpoint` を設定することで実際の Chrome ブラウザを乗っ取り、完全なブラウザ権限を享受可能

ドキュメント：[ブラウザツール](https://docs.cowagent.ai/ja/tools/browser)。Thanks [@leafmove](https://github.com/leafmove) (#2809)

## 🤖 モデル追加と最適化

- **モデル新規追加**：`gpt-5.5`、`gemini-3.5-flash`、`qwen3.7-max`、`ernie-5.1`
- **モデル最適化**：DeepSeek V4 が `reasoning_effort` 思考深度パラメータをサポート。MiMo などの思考モデルが OpenAI 互換プロトコル経由で接続できない問題を修正

## 🔒 デプロイとセキュリティ

- **デフォルトでローカルアクセスのみ**：Web コンソールの `web_host` をデフォルトで `127.0.0.1` にバインド。サーバーデプロイ時は手動で `0.0.0.0` に変更しパスワードを設定してください。Thanks @August829、@yidaozhongqing、@YLChen-007、@icysun
- **フロントエンド資源の完全ローカル化**：サードパーティ CSS / JS をすべてローカル配信化、オフライン / イントラネット環境でもコンソールが正常に動作。Thanks [@gitlayzer](https://github.com/gitlayzer) (#2816)

## 🛠 体験改善と修正

- **TTS のチャネル拡充**：Web 対話、個人 WeChat、飛書、DingTalk、WeCom スマートボットすべてが音声返信に対応。詳細は [チャネル概要](https://docs.cowagent.ai/ja/channels) を参照
- **ログパネル強化**：ログレベルに応じたハイライト表示と、レベル別フィルタリングをサポート。Thanks [@yangluxin613](https://github.com/yangluxin613) (#2807)
- **Web コンソールの自動起動**：プログラム起動後に Web コンソールが自動で開きます。Thanks [@yangluxin613](https://github.com/yangluxin613) (#2804)
- **Ctrl+C のクリーン終了**：長い `KeyboardInterrupt` スタックトレースが表示されなくなりました。Thanks [@yangluxin613](https://github.com/yangluxin613) (#2806)
- **フォルダアップロード**：Web 端でディレクトリアップロードに対応、Windows 向けのパス検証に適合。Thanks [@TryToMakeUsBetter](https://github.com/TryToMakeUsBetter) (#2814)
- 特定条件下でスケジュールタスクが重複実行される問題を修正。Thanks [@CNXudiandian](https://github.com/CNXudiandian) (#2820)
- タイムゾーン付きの単発スケジュールタスクが発火しない問題を修正。Thanks @AethericSpace
- 実行失敗したツール呼び出しがページ更新後に表示されない問題を修正。Thanks [@a1094174619](https://github.com/a1094174619) (#2822)
- WeCom ボットメッセージに不正な制御文字が含まれる場合に配信が失敗する問題を修正。Thanks [@Jacques-Zhao](https://github.com/Jacques-Zhao) (#2810)

## 📦 アップグレード方法

ソースコードデプロイは `cow update` でワンクリックアップグレード、または最新コードを手動で pull して再起動してください。詳細は [アップグレードガイド](https://docs.cowagent.ai/ja/guide/upgrade) を参照。

**リリース日**：2026.05.22 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.8...2.0.9)
````

## File: docs/ja/skills/create.mdx
````markdown
---
title: スキルの作成
description: 会話を通じてカスタムスキルを作成
---

CowAgent には Skill Creator が組み込まれており、自然言語の会話を通じてスキルの作成、インストール、更新を素早く行えます。

## 使い方

会話で作りたいスキルを説明するだけで、Agent が自動的に作成します：

- ワークフローをスキル化：「このデプロイプロセスからスキルを作成して」
- サードパーティ API の統合：「この API ドキュメントに基づいてスキルを作成して」
- リモートスキルのインストール：「xxx スキルをインストールして」

## 作成フロー

1. 作成したいスキルを Agent に伝えます
2. Agent が自動的に `SKILL.md` の説明と実行スクリプトを生成します
3. スキルはワークスペースの `~/cow/skills/` ディレクトリに保存されます
4. 以降の会話で Agent が自動的にそのスキルを認識し使用します

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202202247.png" width="800" />
</Frame>

## SKILL.md のフォーマット

作成されたスキルは標準の SKILL.md フォーマットに従います：

```markdown
---
name: my-skill
description: Brief description of the skill
metadata:
  emoji: 🔧
  requires:
    bins: ["curl"]
    env: ["MY_API_KEY"]
  primaryEnv: "MY_API_KEY"
---

# My Skill

Detailed instructions...
```

| フィールド | 説明 |
| --- | --- |
| `name` | スキル名。ディレクトリ名と一致する必要があります |
| `description` | スキルの説明。Agent はこれに基づいて呼び出すかどうかを判断します |
| `metadata.requires.bins` | 必要なシステムコマンド |
| `metadata.requires.env` | 必要な環境変数 |
| `metadata.always` | 常に読み込む（デフォルトは false） |

<Tip>
  詳細は [Skill Creator のドキュメント](https://github.com/zhayujie/CowAgent/blob/master/skills/skill-creator/SKILL.md)をご覧ください。
</Tip>
````

## File: docs/ja/skills/hub.mdx
````markdown
---
title: スキルハブ
description: AI Agent スキルの閲覧、検索、インストール
---

[Cow Skill Hub](https://skills.cowagent.ai/) は、公式推奨・コミュニティ貢献・サードパーティ（GitHub、ClawHub など）のスキルを集約した、オープンソースの AI Agent スキルマーケットプレイスです。

ソースコード: [github.com/zhayujie/cow-skill-hub](https://github.com/zhayujie/cow-skill-hub)

<img src="https://cdn.link-ai.tech/doc/20260401110103.png" width="800" />

## 機能

- **スキル閲覧** — カテゴリ（公式推奨 / コミュニティ / サードパーティ）とタグでフィルタ
- **スキル検索** — 名前または説明で検索
- **詳細表示** — スキルマニフェスト、ファイル内容、インストールコマンド、必要な環境変数を確認
- **ワンクリックインストール** — インストールコマンドをコピーして CowAgent で実行

## スキルのインストール

チャット内またはターミナルでインストールコマンドを実行:

<CodeGroup>
```text チャット
/skill install <name>
```

```bash ターミナル
cow skill install <name>
```
</CodeGroup>

チャットからスキルハブを直接閲覧することもできます:

```text
/skill list --remote
/skill search <キーワード>
```

リスト表示されている厳選スキル以外にも、**GitHub、ClawHub、LinkAI、任意の URL** からサードパーティスキルを CLI 経由でインストールできます。詳しくは [スキルのインストール](/ja/skills/install) を参照してください。

## スキルの貢献

ご自身のスキルを投稿するには:

1. [skills.cowagent.ai/submit](https://skills.cowagent.ai/submit) にアクセス
2. GitHub または Google でログイン
3. `SKILL.md` を含むフォルダまたは zip ファイルをアップロード
4. スキル名・表示名・説明は自動検出されます。必要に応じて編集してください
5. 提出後、セキュリティ・品質チェックを経て公開されます

<img src="https://cdn.link-ai.tech/doc/20260401111904.png" width="800" />

スキルのファイル構成:

```
your-skill/
├── SKILL.md        # 必須、ルートに配置
├── scripts/        # 任意、実行スクリプト
└── resources/      # 任意、その他リソース
```

<Tip>
  スキルは `SKILL.md` マニフェストを中心に構築されます。スキル詳細ページから `SKILL.md` をダウンロードし、カスタム指示に対応した任意の Agent（OpenClaw、Cursor、Claude Code など）でも利用できます。
</Tip>
````

## File: docs/ja/skills/image-generation.mdx
````markdown
---
title: image-generation - 画像生成
description: テキストから画像生成 / 画像編集 / 複数画像融合に対応。複数プロバイダーの自動ルーティングとフォールバックをサポート
---

汎用の画像生成・編集スキルです。OpenAI、Gemini、Seedream（Volcengine Ark）、Qwen（DashScope）、MiniMax、LinkAI の 6 つのプロバイダーに対応しています。いずれか 1 社の Key を設定すれば利用でき、複数社を設定すると自動フォールバックが有効になります。

## 対応モデル

| プロバイダー | モデル / エイリアス | 特徴 |
| --- | --- | --- |
| OpenAI | `gpt-image-2`、`gpt-image-1` | 汎用テキスト→画像、高品質、`quality` で画質制御に対応 |
| Gemini Nano Banana | `nano-banana-2`、`nano-banana-pro`、`nano-banana` | `gemini-3.1-flash`、`gemini-3-pro`、`gemini-2.5-flash` の画像バージョン |
| Seedream（Volcengine Ark） | `seedream-5.0-lite`、`seedream-4.5` | ネイティブ 2K–4K、最大 14 枚の画像融合 |
| Qwen（DashScope） | `qwen-image-2.0`、`qwen-image-2.0-pro` | 中国語のレイアウトや画像とテキストの融合に強い |
| MiniMax | `image-01` | シンプルで高速 |
| LinkAI | 任意のモデル | 統一ゲートウェイ、フォールバック用途 |

## モデル選択

デフォルトでは「自動ルーティング + 失敗時フォールバック」で動作します：

1. `OpenAI → Gemini → Seedream → Qwen → MiniMax → LinkAI` の順に、設定済みのプロバイダーを最初に選択
2. 401、モデル未開通、ネットワークエラーなどに遭遇した場合、自動的に次のプロバイダーへ切り替え
3. ユーザーが対話内でモデルを指定した場合（例：「seedream で猫を描いて」）、該当プロバイダーが優先候補に繰り上がります

特定のモデルに固定したい場合：

```json
{
  "skills": {
    "image-generation": {
      "model": "seedream-5.0-lite"
    }
  }
}
```

## API Key の設定

<Tip>
  [Web コンソール](/ja/channels/web) の「モデル管理」ページから設定するのが推奨です。設定済みの対話モデル Key は画像生成スキルでも自動的に再利用されるため、重複した設定は不要です。設定ファイルを手動編集するか、対話中に `env_config` ツールで一時的に設定することもできます。
</Tip>

認証情報はメインモデルプロバイダーの Key を統一的に再利用します：

| フィールド | 対応プロバイダー |
| --- | --- |
| `openai_api_key` | OpenAI |
| `gemini_api_key` | Gemini |
| `ark_api_key` | Volcengine Ark（Seedream） |
| `dashscope_api_key` | Alibaba DashScope（Qwen） |
| `minimax_api_key` | MiniMax |
| `linkai_api_key` | LinkAI |


## 有効化と無効化

スキルは API Key に応じて自動的にステータスが調整されます：

- **Key 設定済み**：Agent は画像生成リクエストを受けると直接呼び出します
- **Key 未設定**：スキルはコンテキストに表示されますが（「設定が必要」とマーク）、Agent はユーザーに Key の設定を案内します

手動で制御する場合：

```text
/skill disable image-generation    # 無効化
/skill enable image-generation     # 再有効化
```

ターミナルでの等価コマンド：`cow skill disable image-generation` / `cow skill enable image-generation`。

## パラメータ

| パラメータ | 型 | 必須 | デフォルト | 説明 |
| --- | --- | --- | --- | --- |
| `prompt` | string | はい | — | 画像の説明 |
| `image_url` | string / list | いいえ | null | 編集用の入力画像。ローカルパスまたは URL。リスト指定で複数画像融合 |
| `quality` | string | いいえ | auto | `low` / `medium` / `high`、一部のプロバイダーのみ対応 |
| `size` | string | いいえ | auto | `512` / `1K` / `2K` / `3K` / `4K`、またはピクセル値（例：`1024x1024`） |
| `aspect_ratio` | string | いいえ | null | `1:1` / `3:2` / `2:3` / `16:9` / `9:16` / `21:9`。Gemini は `1:4` / `4:1` / `1:8` / `8:1` にも対応 |

<Warning>
  **品質が高いほど、解像度が大きいほど、時間とコストが高くなります。** 日常の対話ではデフォルト（`auto`）または `quality=low` + `size=1K` で十分で、約 20 秒で生成されます。ポスター制作や明示的に高解像度が必要な場合のみ `high` + `2K/4K` を使用してください。1〜5 分かかる場合があります。
</Warning>

## よくある使い方

- **テキスト→画像**：説明文からイラスト、ポスター、アイコン、アバター、絵コンテなどを生成
- **画像→画像**：既存の画像のスタイル変更、要素差し替え、装飾や文字の追加など
- **複数画像融合**：複数の参考画像を 1 枚に合成（着せ替え、キャラクター集合写真など）

<Note>
- bash タイムアウトは 600 秒に設定することを推奨：単一プロバイダーの HTTP タイムアウトは 300 秒、スクリプトは複数社を順に試行する場合があります
- 入力画像は自動的に 4 MB 以内・最長辺 4096 px 以内に圧縮されます
- Gemini / Seedream / Qwen / MiniMax は `quality` パラメータに対応していません
- Seedream のデフォルトは 2K。`seedream-5.0-lite` は 3K まで、`seedream-4.5` は 4K まで対応
</Note>
````

## File: docs/ja/skills/index.mdx
````markdown
---
title: スキル概要
description: CowAgent のスキルシステム紹介
---

スキル（Skill）は Agent に無限の拡張性を提供します。各スキルは説明ファイル（`SKILL.md`）、実行スクリプト（任意）、リソース（任意）で構成され、特定のタスクをどのように遂行するかを記述します。

スキルとツールの違い：ツールはコードで実装された原子的な操作（例：ファイルの読み書き、コマンドの実行）であるのに対し、スキルは説明ファイルに基づく高レベルなワークフローであり、複数のツールを組み合わせて複雑なタスクを完遂できます。

## スキルの取得

CowAgent ではスキルを取得する複数の方法を提供しています：

- **Cow スキル広場** — `/skill list --remote` でコミュニティスキルを閲覧・インストール
- **GitHub** — GitHub リポジトリから直接インストール、バッチインストールにも対応
- **ClawHub** — `/skill install clawhub:名前` で ClawHub のスキルをインストール
- **URL** — zip アーカイブや SKILL.md リンクからインストール
- **会話で作成** — 自然言語の会話を通じて Agent にスキルを自動作成させる

詳細は[スキルのインストール](/ja/skills/install)と[スキル管理コマンド](/ja/cli/skill)を参照してください。会話を通じて[スキルを作成](/ja/skills/create)することもできます。

## スキルの読み込み優先順位

1. **ワークスペースのスキル**（最高優先）：`~/cow/skills/`
2. **プロジェクト組み込みスキル**（最低優先）：`skills/`

同名のスキルは優先順位に従って上書きされます。

## スキルのファイル構成

```
skills/
├── my-skill/
│   ├── SKILL.md          # Skill の説明（frontmatter + 手順）
│   ├── scripts/          # 実行スクリプト（任意）
│   └── resources/        # 追加リソース（任意）
```

### SKILL.md のフォーマット

```markdown
---
name: my-skill
description: Brief description of the skill
metadata:
  emoji: 🔧
  requires:
    bins: ["curl"]
    env: ["MY_API_KEY"]
  primaryEnv: "MY_API_KEY"
---

# My Skill

Detailed instructions...
```

| フィールド | 説明 |
| --- | --- |
| `name` | スキル名。ディレクトリ名と一致する必要があります |
| `description` | スキルの説明。Agent はこれに基づいて呼び出すかどうかを判断します |
| `metadata.requires.bins` | 必要なシステムコマンド |
| `metadata.requires.env` | 必要な環境変数 |
| `metadata.always` | 常に読み込む（デフォルトは false） |
````

## File: docs/ja/skills/install.mdx
````markdown
---
title: スキルのインストール
description: 統一コマンドで多様なソースからスキルをインストール
---

CowAgent は統一された `install` コマンドで、**Cow スキル広場、GitHub、ClawHub** および任意の URL からスキルをインストールできます。チャットでは `/skill install`、ターミナルでは `cow skill install` を使用します。

## スキル広場からインストール

スキル広場を閲覧してインストール：

```text
/skill list --remote
/skill install pptx
```

## GitHub からインストール

リポジトリからの一括インストールとサブディレクトリ指定に対応：

```text
/skill install larksuite/cli
/skill install https://github.com/larksuite/cli/tree/main/skills/lark-im
```

## ClawHub からインストール

```text
/skill install clawhub:baidu-search
```

## URL からインストール

zip アーカイブと SKILL.md ファイルリンクに対応：

```text
/skill install https://cdn.link-ai.tech/skills/pptx.zip
/skill install https://example.com/path/to/SKILL.md
```

## スキルの管理

```text
/skill list                  # インストール済みスキルを表示
/skill info pptx             # スキルの詳細を表示
/skill enable pptx           # スキルを有効化
/skill disable pptx          # スキルを無効化
/skill uninstall pptx        # スキルをアンインストール
```

<Tip>
  上記のすべてのコマンドは、ターミナルでは `/skill` を `cow skill` に置き換えて使用できます。完全なコマンドドキュメントは[スキル管理コマンド](/ja/cli/skill)を参照してください。
</Tip>
````

## File: docs/ja/skills/knowledge-wiki.mdx
````markdown
---
title: knowledge-wiki - ナレッジベース
description: ローカルの構造化ナレッジベースを管理し、自動でアーカイブ・分類・相互参照を行う
---

会話で生まれた資料、アイデア、メモをローカルの構造化ナレッジベースに整理し、インデックスとページ間の相互参照を自動で維持します。

`knowledge-wiki` はワークスペース内の `knowledge/` ディレクトリを管理します。Agent の「外部メモリ」のようなものです。`always: true` が設定されているため**常にコンテキストにロード**され、外部依存は不要です。

## いつ起動するか

- 記事、ドキュメント、URL を共有して、後で参照できるように残したいとき
- 会話の中で長期保存に値する結論が出たとき
- 以前蓄積したナレッジを調べたいとき

## ディレクトリ構成

```
knowledge/
├── index.md           # グローバルインデックス（必ずメンテナンスする）
├── log.md             # 操作ログ（追記のみ）
└── <category>/        # カテゴリサブディレクトリ（内容ごとにグループ化）
    └── <slug>.md      # ナレッジページ（小文字ハイフン区切りのファイル名）
```

## 3 つの基本操作

### 1. 収録（Ingest）

資料を共有すると、Agent は：

1. 原文を読んで理解し、重要な情報を抽出
2. どのカテゴリに属するか判断 — まず `index.md` をチェックし、適切なカテゴリがなければ新規作成
3. `knowledge/<category>/<slug>.md` にナレッジページを生成
4. インデックス `index.md` とログ `log.md` を更新

### 2. 統合（Synthesize）

会話の中で新しい結論やインサイトが生まれたとき：

1. 適切なカテゴリの下に新しいナレッジページを作成
2. 関連する既存ページに相互リンクを追加
3. インデックスとログを更新

### 3. 検索（Query）

以前蓄積したナレッジについて質問されたとき：

1. `index.md` から関連しそうなページを探す
2. `read` ツールで具体的なページを開く
3. 必要に応じて `memory_search` で補完検索
4. 回答にナレッジページへのリンクを含め、ユーザーが原文を確認できるようにする

## ページの書き方

```markdown
# ページタイトル

> Source: <ソース URL または簡単な説明>

本文。ページ間は相対パスでリンク：
[関連ページ](../category/related-page.md)

## 要点

- ...

## 関連ページ

- [ページ A](../category/page-a.md) — 関連する理由
```

<Note>
- `> Source:` はこのナレッジの出典を記録します。明確な出典がある場合は必ず記載してください
- 相互参照は重要です：ページを作成・更新したら、関連ページにも逆リンクを追加してください
- **既に存在するページにのみリンクしてください**。ある概念が独立ページに値する場合は、先にページを作成してからリンクを追加してください
</Note>

## インデックス形式

`knowledge/index.md` はフラットリスト形式で、カテゴリごとにグループ化し、各ナレッジページを 1 行で表します：

```markdown
# Knowledge Index

## カテゴリ A
- [ページタイトル](category-a/page-slug.md) — 一行の要約

## カテゴリ B
- [ページタイトル](category-b/page-slug.md) — 一行の要約
```

テーブルや絵文字は使いません。カテゴリ名や構成は柔軟に調整できます。

## ログ形式

`knowledge/log.md` は追記のみ、最新のエントリが一番下：

```markdown
## [YYYY-MM-DD] ingest | ページタイトル
## [YYYY-MM-DD] synthesize | ページタイトル
```

## 執筆ガイドライン

- **ファイル名**は小文字＋ハイフン（例: `machine-learning.md`）
- **1 ページ 1 トピック** — 関連コンテンツはリンクで繋ぐ
- **重複ページを作らず、既存ページを更新する**
- **変更のたびにインデックスを更新する**（`knowledge/index.md`）
- **要点を抽出し、全文をコピーしない**
- **会話中にナレッジページを参照する際はフルパスを使用**（例: `[タイトル](knowledge/<category>/<slug>.md)`）。ページ間の相互リンクのみ相対パスを使用
- **ナレッジページに基づいて回答する際はリンクを含める** — ユーザーが詳細を確認できるように
````

## File: docs/ja/skills/skill-creator.mdx
````markdown
---
title: skill-creator - スキル作成
description: スキルの作成・インストール・更新、SKILL.md の書き方とディレクトリ構成の標準化
---

`skill-creator` は「メタスキル」です。Agent が他のスキルを作成・インストール・更新する際に呼び出され、すべてのスキルの `SKILL.md` の書き方とディレクトリ構成を統一します。

## いつ起動するか

- ユーザーが URL やリモートリポジトリからスキルをインストールしたいとき
- ユーザーが新しいスキルをゼロから作成したいとき
- 既存のスキルをアップグレード・リファクタリングする必要があるとき

## スキルとは

スキルは「再利用可能な説明書」にオプションのスクリプトやリソースを加えたものです。特定のドメインの専門知識を Agent に注入し、該当タスクをスペシャリストのように処理できるようにします。

スキルには通常、以下が含まれます：

1. **専門ワークフロー** — ある種のタスクの完全な手順
2. **ツールの使い方** — 特定の API やファイル形式の処理方法
3. **ドメイン知識** — チームの規約、ビジネスルール、データ構造など
4. **付属リソース** — スクリプト、参考ドキュメント、テンプレートなど

<Note>
**基本原則：省けるものは省く。** Agent が自力で推測できない内容だけを書きましょう。1 行追加するたびに「このトークンコストに見合うか？」と自問してください。
</Note>

## ディレクトリ構成

```
skill-name/
├── SKILL.md            # 必須：スキル定義
│   ├── YAML frontmatter（name / description は必須）
│   └── Markdown 本文（説明 + 例）
└── オプションリソース
    ├── scripts/        # 実行可能スクリプト（Python / Bash など）
    ├── references/     # 分量が多い参考ドキュメント（Agent が必要時に読む）
    └── assets/         # テンプレート、アイコンなど（出力に直接使われるもの）
```

## SKILL.md 仕様

SKILL.md ヘッダーの `frontmatter` フィールド：

| フィールド | 説明 |
| --- | --- |
| `name` | スキル名。小文字＋ハイフン、ディレクトリ名と一致させる |
| `description` | **最も重要なフィールド**。「このスキルが何をするか」「いつ使うべきか」を明記する。Agent はこれを見て呼び出すかどうかを判断する。トリガーに関する記述はすべてここに書き、本文には書かない |
| `metadata.cowagent.requires.bins` | システムに必要な CLI ツール |
| `metadata.cowagent.requires.env` | 必要な環境変数（すべて揃っている必要がある） |
| `metadata.cowagent.requires.anyEnv` | 複数の API Key のうち 1 つあればよい |
| `metadata.cowagent.requires.anyBins` | 複数のツールのうち 1 つあればよい |
| `metadata.cowagent.always` | `true` にすると常にロードされ、依存チェックをスキップ |
| `metadata.cowagent.emoji` | 表示用の絵文字（任意） |
| `metadata.cowagent.os` | OS 制限、例: `["darwin", "linux"]` |

<Note>
`category` フィールドは手動で設定する必要はありません。システムが自動的に `skill` に設定します。
</Note>

API Key 依存の宣言方法は 2 通り：

```yaml
metadata:
  cowagent:
    requires:
      env: ["MYAPI_KEY"]            # 必須
```

```yaml
metadata:
  cowagent:
    requires:
      anyEnv: ["OPENAI_API_KEY", "LINKAI_API_KEY"]   # いずれか 1 つ
```

**スキルは依存関係に基づいて自動的に有効/無効になります**：環境変数が揃えば自動有効、不足すれば自動無効。手動で `/skill enable` する必要はありません。

## リソースディレクトリの使い方

| ディレクトリ | 入れるもの | 入れないもの |
| --- | --- | --- |
| `scripts/` | 繰り返し実行するコード、確定的な結果が必要なスクリプト | デモ用のコード片 |
| `references/` | **500 行超**で SKILL.md に収まらない大きなドキュメント（完全な DB スキーマなど） | 一般的な API ドキュメント、チュートリアル |
| `assets/` | 最終出力に含まれるファイル（テンプレート、アイコン、ボイラープレートなど） | 説明用ドキュメント |

<Warning>
**原則としてすべての内容を `SKILL.md` に書きます** — リソースディレクトリに分割するのは本当に収まらない場合だけです。

`README.md`、`CHANGELOG.md`、`INSTALLATION_GUIDE.md` などをスキルに追加しないでください。すべて `SKILL.md` に入れましょう。リソースディレクトリには実際に実行するスクリプトや実際に使う素材だけを配置してください。
</Warning>

## 外部スキルのインストール

インストール後、スキルは `<workspace>/skills/<name>/` に配置されます。

| ソース | インストール方法 |
| --- | --- |
| URL（単一ファイル） | curl / web_fetch |
| URL（zip アーカイブ） | ダウンロードして展開 |
| ローカル SKILL.md | 直接読み込み |
| ローカル zip アーカイブ | 展開 |

インストール手順：

1. `SKILL.md` を見つける（アーカイブのルートまたはサブディレクトリにある場合がある）
2. frontmatter から `name` を読み取る
3. **スキルディレクトリ全体**（`SKILL.md`、`scripts/`、`assets/` など）を `<workspace>/skills/<name>/` にコピー
4. アーカイブに `INSTALL.md` などのセットアップスクリプトがあれば実行するが、最終的に `<workspace>/skills/<name>/` に収まっている必要がある

## スキルをゼロから作成

推奨手順：

1. **要件を明確にする** — ユーザーに具体的なユースケースをいくつか挙げてもらう（一度に多く聞きすぎない）
2. **構成を計画する** — スクリプトは必要か？参考ドキュメントは？テンプレートは？
3. **スキャフォールド** — 初期化スクリプトを使用：

   ```bash
   scripts/init_skill.py <skill-name> --path <workspace>/skills [--resources scripts,references,assets] [--examples]
   ```

4. **内容を埋める** — SKILL.md を書き、スクリプトとリソースを追加。スクリプトは必ず実行テストする
5. **バリデーション**（任意）：

   ```bash
   scripts/quick_validate.py <workspace>/skills/<skill-name>
   ```

6. **イテレーション** — 実際の使用フィードバックに基づいて継続的に改善

## 命名規則

- 小文字、数字、ハイフンのみ使用。ユーザーの入力は正規化する（例: `Plan Mode` → `plan-mode`）
- 64 文字以内
- 短く、動詞で始め、一目で何をするか分かるように
- 必要に応じてツール名をプレフィックスにする（例: `gh-address-comments`、`linear-address-issue`）
- ディレクトリ名と `name` フィールドは完全に一致させる

## 3 段階ローディング

スキルは一度にすべてコンテキストに読み込まれるわけではなく、3 段階で必要に応じてロードされます：

1. **メタ情報**（`name` + `description`） — 常にコンテキスト内（約 100 語）。Agent がスキルを使うかどうかの判断に使用
2. **SKILL.md 本文** — スキルが有効化されたときだけロード。500 行以内を推奨
3. **リソースファイル** — Agent が必要なときに読み込む

複数のバリエーション（例: マルチクラウドデプロイ）を持つスキルは次のように整理：

```
cloud-deploy/
├── SKILL.md             # メインワークフローとプロバイダー選択ロジック
└── references/
    ├── aws.md
    ├── gcp.md
    └── azure.md
```

ユーザーが AWS を選んだら、Agent は `aws.md` だけを読みます。3 社分のドキュメントをすべてロードする必要はありません。

## よくあるデザインパターン

**ステップ式**：番号付きの手順と対応スクリプト。

```markdown
1. フォーム構造を分析（analyze_form.py を実行）
2. フィールドマッピングを生成（fields.json を編集）
3. フォームを自動入力（fill_form.py を実行）
```

**分岐式**：ユーザーの意図に応じて異なるフローへ。

```markdown
1. 操作タイプを判定：
   **新規作成？** → 「作成フロー」へ
   **既存の編集？** → 「編集フロー」へ
```

**テンプレート式**：出力形式に厳密な要件がある場合、SKILL.md にテンプレートを含め、Agent にそれに従って出力させる。
````

## File: docs/ja/tools/bash.mdx
````markdown
---
title: bash - ターミナル
description: システムコマンドの実行
---

現在の作業ディレクトリでBashコマンドを実行し、stdoutとstderrを返します。`env_config` で設定されたAPIキーは自動的に環境変数に注入されます。

## 依存関係

追加の依存関係は不要で、デフォルトで利用可能です。

## パラメータ

| パラメータ | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `command` | string | はい | 実行するコマンド |
| `timeout` | integer | いいえ | タイムアウト（秒） |

## ユースケース

- パッケージや依存関係のインストール
- コードやテストの実行
- アプリケーションやサービスのデプロイ（Nginx設定、プロセス管理など）
- システム管理とトラブルシューティング

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260203121008.png" width="800" />
</Frame>
````

## File: docs/ja/tools/browser.mdx
````markdown
---
title: browser - ブラウザ
description: ブラウザを操作してWebページにアクセス・操作する
---

Chromiumブラウザを操作してWebページのナビゲーション、要素操作、コンテンツ取得を行います。JavaScriptでレンダリングされる動的ページに対応し、簡略化したDOMスナップショットによりAgentが効率的にページ構造を理解できます。

## インストール

<Tabs>
  <Tab title="CLIインストール（推奨）">
    ```bash
    cow install-browser
    ```

    このコマンドは以下を自動で実行します：
    - `playwright` Pythonパッケージのインストール（古いシステムでは互換バージョンに自動フォールバック）
    - Linuxにおけるシステム依存のインストール
    - Chromiumブラウザのダウンロード（Linuxサーバーでは自動的にヘッドレス軽量版を使用）
    - 中国本土ネットワークの自動検知とミラー高速化
  </Tab>
  <Tab title="手動インストール">
    ```bash
    pip install playwright
    playwright install chromium
    ```

    Linuxサーバーではシステム依存も必要：
    ```bash
    sudo playwright install-deps chromium
    ```

    古いシステム（例: Ubuntu 18.04、glibc < 2.28）では互換バージョンをインストール：
    ```bash
    pip install playwright==1.28.0
    python -m playwright install chromium
    ```

    中国からChromiumのダウンロードを高速化したい場合：
    ```bash
    export PLAYWRIGHT_DOWNLOAD_HOST=https://registry.npmmirror.com/-/binary/playwright
    python -m playwright install chromium
    ```
  </Tab>
</Tabs>

<Note>
  1. Ubuntu 20.04+、Debian 10+、macOS、Windowsをサポート。Ubuntu 18.04などの古いシステムでは互換バージョンに自動フォールバックします。
  2. ブラウザToolは依存関係が大きい（約300MB）ため、不要な場合はインストールを省略できます。軽量なWebコンテンツ取得には `web_fetch` Toolをご利用ください。
</Note>

## ワークフロー

Agentがブラウザを使う典型的な流れ：

1. **`navigate`** — 対象URLを開く
2. **`snapshot`** — 簡略化したDOMを取得し、操作可能な要素には自動で番号（`ref`）が付く
3. **`click` / `fill` / `select`** — `ref`で要素を操作する
4. **`snapshot`** — 再度スナップショットを取得して結果を確認

## サポートされる操作

| 操作 | 説明 | 主なパラメータ |
| --- | --- | --- |
| `navigate` | URLを開く | `url` |
| `snapshot` | 構造化されたページテキストを取得（主な利用方法） | `selector`（任意） |
| `click` | 要素をクリック | `ref` または `selector` |
| `fill` | 入力欄にテキストを入力 | `ref` または `selector`、`text` |
| `select` | プルダウンから選択 | `ref` または `selector`、`value` |
| `scroll` | ページをスクロール | `direction`（up/down/left/right） |
| `screenshot` | スクリーンショットをワークスペースに保存 | `full_page` |
| `wait` | 要素または時間を待機 | `selector`、`timeout` |
| `press` | キー入力（Enter、Tabなど） | `key` |
| `back` / `forward` | ブラウザの戻る／進む | - |
| `get_text` | 要素のテキストを取得 | `selector` |
| `evaluate` | JavaScriptを実行 | `script` |

## ユースケース

- 指定URLにアクセスして動的コンテンツを取得
- フォーム入力やログイン操作
- Web要素の操作（ボタンクリック、項目選択など）
- デプロイ後のWebページ動作確認
- JSレンダリングが必要な動的コンテンツのスクレイピング

## 動作モード

実行環境に応じてブラウザのモードが自動選択されます：

| 環境 | モード |
| --- | --- |
| macOS / Windows | ヘッドモード（ブラウザウィンドウを表示） |
| Linuxデスクトップ（DISPLAYあり） | ヘッドモード |
| Linuxサーバー（DISPLAYなし） | ヘッドレスモード |

`config.json`で手動上書き可能：

```json
{
  "tools": {
    "browser": {
      "headless": true
    }
  }
}
```

## ログイン状態の永続化

**対象サイトに一度ログインすれば、Agentは以降そのまま利用できます。** 2つの方法があります：

### 方法1: Persistentモード（デフォルト）

設定不要、すぐに利用可能。ログイン情報は `~/.cow/browser_profile` に保存されます。

毎回クリーンな環境で起動したい場合は、永続化を無効化：

```json
{
  "tools": {
    "browser": {
      "persistent": false
    }
  }
}
```

### 方法2: CDPモード（既存のChromeに接続）

Playwright付属のChromiumではなく、別途起動した本物のChromeにAgentを接続させることで、完全なブラウザフィンガープリントが得られます。Bot検知が厳しいサイトに有効です。

Chromeをデバッグポートと専用のユーザーデータディレクトリ付きで起動します：

<Tabs>
  <Tab title="macOS">
    ```bash
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
      --remote-debugging-port=9222 \
      --user-data-dir="$HOME/.cow/chrome-cdp"
    ```
  </Tab>
  <Tab title="Linux">
    ```bash
    google-chrome \
      --remote-debugging-port=9222 \
      --user-data-dir="$HOME/.cow/chrome-cdp"
    ```
  </Tab>
  <Tab title="Windows">
    ```powershell
    & "C:\Program Files\Google\Chrome\Application\chrome.exe" `
      --remote-debugging-port=9222 `
      --user-data-dir="$env:USERPROFILE\.cow\chrome-cdp"
    ```
  </Tab>
</Tabs>

`config.json` で接続先を指定：

```json
{
  "tools": {
    "browser": {
      "cdp_endpoint": "http://localhost:9222"
    }
  }
}
```

<Note>
  Chrome 137以降では `--remote-debugging-port` を専用の `--user-data-dir` と組み合わせる必要があるため、CDPで起動するChromeは**普段使いのChromeのログイン状態をそのまま流用できません**。専用プロファイル内で一度ログインし直す必要があります。
</Note>
````

## File: docs/ja/tools/edit.mdx
````markdown
---
title: edit - ファイル編集
description: テキスト置換によるファイル編集
---

テキスト置換によるファイル編集を行います。`oldText` が空の場合、ファイル末尾に追記します。

## 依存関係

追加の依存関係は不要で、デフォルトで利用可能です。

## パラメータ

| パラメータ | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `path` | string | はい | ファイルパス |
| `oldText` | string | はい | 置換対象の元テキスト（空の場合は追記） |
| `newText` | string | はい | 置換後のテキスト |

## ユースケース

- 設定ファイルの特定パラメータの変更
- コードのバグ修正
- ファイル内の特定位置へのコンテンツ挿入
````

## File: docs/ja/tools/env-config.mdx
````markdown
---
title: env_config - 環境設定
description: APIキーとシークレットの管理
---

ワークスペースの `.env` ファイルで環境変数（APIキーやシークレット）を管理し、会話形式で安全に更新できます。セキュリティ保護とマスキング機能を内蔵しています。

## 依存関係

| 依存関係 | インストールコマンド |
| --- | --- |
| `python-dotenv` ≥ 1.0.0 | `pip install python-dotenv>=1.0.0` |

オプション依存関係のインストールに含まれています：`pip3 install -r requirements-optional.txt`

## パラメータ

| パラメータ | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `action` | string | はい | 操作タイプ：`get`、`set`、`list`、`delete` |
| `key` | string | いいえ | 環境変数名 |
| `value` | string | いいえ | 環境変数の値（`set` の場合のみ） |

## 使い方

設定したいキーをAgentに伝えると、自動的にこのToolが呼び出されます：

- 「BOCHA_API_KEYを設定して」
- 「OPENAI_API_KEYをsk-xxxに設定して」
- 「設定済みの環境変数を表示して」

設定されたキーは `bash` Toolの実行環境に自動的に注入されます。

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202234939.png" width="800" />
</Frame>
````

## File: docs/ja/tools/index.mdx
````markdown
---
title: Tools 概要
description: CowAgent 組み込みToolシステム
---

Toolは、AgentがOSリソースにアクセスするための中核機能です。Agentはタスクの要件に基づいてToolをインテリジェントに選択・呼び出し、ファイル操作、コマンド実行、Web検索、スケジュールタスクなどを実行します。Toolは `agent/tools/` ディレクトリに実装されています。

## 組み込みTool

以下のToolは追加設定なしでデフォルトで利用可能です：

<CardGroup cols={2}>
  <Card title="read - ファイル読み取り" icon="file" href="/ja/tools/read">
    ファイル内容を読み取り、テキスト・画像・PDFに対応
  </Card>
  <Card title="write - ファイル書き込み" icon="pen" href="/ja/tools/write">
    ファイルの作成または上書き
  </Card>
  <Card title="edit - ファイル編集" icon="pen-to-square" href="/ja/tools/edit">
    テキスト置換によるファイル編集
  </Card>
  <Card title="ls - ディレクトリ一覧" icon="folder-open" href="/ja/tools/ls">
    ディレクトリの内容を一覧表示
  </Card>
  <Card title="bash - ターミナル" icon="terminal" href="/ja/tools/bash">
    システムコマンドの実行
  </Card>
  <Card title="send - ファイル送信" icon="paper-plane" href="/ja/tools/send">
    ファイルや画像をユーザーに送信
  </Card>
  <Card title="memory - メモリ" icon="brain" href="/ja/tools/memory">
    長期メモリの検索と読み取り
  </Card>
</CardGroup>

## オプションTool

以下のToolは追加の依存関係またはAPIキーの設定が必要です：

<CardGroup cols={2}>
  <Card title="env_config - 環境設定" icon="key" href="/ja/tools/env-config">
    APIキーとシークレットの管理
  </Card>
  <Card title="scheduler - スケジューラ" icon="clock" href="/ja/tools/scheduler">
    スケジュールタスクの作成と管理
  </Card>
  <Card title="web_search - Web検索" icon="magnifying-glass" href="/ja/tools/web-search">
    インターネットからリアルタイム情報を検索
  </Card>
</CardGroup>

## MCP Tool

[Model Context Protocol](https://modelcontextprotocol.io) を介して、コミュニティの既製 Tool（地図、GitHub、Notion など数千種類）を統合できます。`mcp.json` を一度設定するだけで利用可能です：

<CardGroup cols={1}>
  <Card title="MCP - 外部Toolエコシステム" icon="plug" href="/ja/tools/mcp">
    標準の stdio / SSE トランスポートをサポート。ホットリロードで、コード変更不要
  </Card>
</CardGroup>
````

## File: docs/ja/tools/ls.mdx
````markdown
---
title: ls - ディレクトリ一覧
description: ディレクトリの内容を一覧表示
---

ディレクトリの内容をアルファベット順にソートして一覧表示します。ディレクトリには `/` が付与され、隠しファイルも含まれます。

## 依存関係

追加の依存関係は不要で、デフォルトで利用可能です。

## パラメータ

| パラメータ | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `path` | string | はい | ディレクトリパス。相対パスはワークスペースディレクトリを基準とします |
| `limit` | integer | いいえ | 返すエントリの最大数、デフォルト500 |

## ユースケース

- プロジェクト構造の閲覧
- 特定ファイルの検索
- ディレクトリの存在確認
````

## File: docs/ja/tools/mcp.mdx
````markdown
---
title: MCP Tool
description: Model Context Protocol を介して外部Toolエコシステムを統合
---

CowAgent は [Model Context Protocol (MCP)](https://modelcontextprotocol.io) をサポートしており、コミュニティで提供されている数万種類の MCP Tool を Agent から直接呼び出せます。`mcp.json` を一度設定すれば、組み込みToolとまったく同じ形で LLM に公開され、自動的に選択・呼び出されます。

## 設定ファイル

CowAgent は `~/cow/mcp.json` を読み込みます。ファイルが存在しない場合は MCP Tool は読み込まれず、エラーにもなりません。

Docker デプロイの場合、公式の `docker-compose.yml` はホスト側の `./cow` をコンテナ内の `/home/agent/cow`（コンテナユーザーの `~/cow`）にマウント済みです。ホスト側の `./cow/` に `mcp.json` を置くだけで反映されます。

### 標準フォーマット

MCP コミュニティ標準に完全準拠しており、Claude Desktop / Cursor と同じです：

```json
{
  "mcpServers": {
    "<server-name>": {
      "command": "npx",
      "args": ["-y", "some-mcp-package"],
      "env": {
        "API_KEY": "your-key-here"
      }
    }
  }
}
```

| フィールド | 必須 | 説明 |
| --- | --- | --- |
| `command` | stdio | サーバーを起動する実行コマンド（`npx`、`python`、`uvx` など） |
| `args` | 任意 | `command` に渡す引数 |
| `env` | 任意 | サブプロセスの環境変数。API Key などに利用 |
| `url` | SSE / Streamable HTTP | リモートエンドポイントの URL（`command` と二者択一） |
| `type` | リモート | リモートトランスポート種別：`sse` または `streamable-http`（既定は `sse`） |
| `headers` | 任意 | リモートリクエストの追加 HTTP ヘッダ（`Authorization` など）。Streamable HTTP のみ |
| `disabled` | 任意 | `true` のとき該当サーバーをスキップ。一時的に無効化したいときに便利 |

### 完全な例

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}
```

- **fetch**：汎用 Web ページ取得。ページ本文を返す。API Key 不要
- **github**：GitHub のリポジトリ、Issue、PR などにアクセス。Personal Access Token が必要

## Agent に設定を任せる

CowAgent には `read` / `write` / `edit` Tool が組み込まれているため、**MCP の設定をそのまま Agent に渡して、ファイルに書き込んでもらえます**：

例：

```markdown
この MCP を ~/cow/mcp.json に追加してください：

{"mcpServers":{"fetch":{"command":"uvx","args":["mcp-server-fetch"]}}}
```

Agent は次のように動作します：

1. 既存の MCP 設定ファイルを読み込み、新しい server エントリをマージ（既存の項目は保持）
2. 増分の MCP Server を自動でリロードし、次のメッセージから対応する Tool が利用可能に

## 動作の仕組み

- **起動時の非同期ロード**：`mcp.json` に設定された全 server はバックグラウンドで非同期に読み込まれ、メインループをブロックしません。会話はすぐに開始できます
- **ホットリロード**：ユーザーまたは Agent が `mcp.json` を変更すると、メッセージ処理完了時に変更された server のみが自動でリロードされます。cow の再起動は不要です
- **フラットな公開**：MCP server が公開する各メソッドは独立した Tool として並列に公開され、LLM が直接選択して呼び出します。二段階の判断は不要です

## サポートされるトランスポート

| トランスポート | 説明 | 設定フィールド |
| --- | --- | --- |
| **stdio** | サブプロセス通信。最も一般的で、コミュニティのエコシステムが最も豊富 | `command` + `args` |
| **SSE** | HTTP Server-Sent Events。従来のリモート用トランスポート | `url`（既定） |
| **Streamable HTTP** | 新しい単一エンドポイント方式。SSE を段階的に置き換え | `type: "streamable-http"` + `url` |

## トラブルシューティング

| 症状 | 確認ポイント |
| --- | --- |
| 起動後に MCP Tool が一つもない | `~/cow/mcp.json` が存在し、JSON が正しいか確認 |
| 特定の server が読み込みに失敗する | 起動ログの `[MCP] Server 'xxx' load failed` を確認。多くは依存関係の不足や API Key 未設定 |
| `mcp.json` の変更が反映されない | 変更は **次のメッセージ** から有効になる。server の設定が実質的に変わっていない（コメントだけ変更など）場合は再起動されない |
| Docker デプロイ | ホストの `./cow` がコンテナ内の `/home/agent/cow` にマウントされていることを確認し、ホスト側の `./cow/` に `mcp.json` を配置。または Agent に直接インストールを依頼 |

## おすすめ MCP マーケットプレイス

各種サードパーティのマーケットプレイスから既製の MCP server を探し、JSON 設定をコピーしてそのまま利用できます。例：

- [mcp.so](https://mcp.so) — グローバル MCP サービスインデックス
- [ModelScope MCP 広場](https://modelscope.cn/mcp) — 魔搭コミュニティの MCP 広場、中国本土からのアクセスが安定

MCP 標準プロトコル（stdio / SSE / Streamable HTTP）に準拠していれば、コードを一切変更せずに CowAgent に統合できます。
````

## File: docs/ja/tools/memory.mdx
````markdown
---
title: memory - メモリ & ナレッジ
description: 長期メモリとナレッジベースファイルの検索・読み取り
---

メモリToolには `memory_search`（メモリ検索）と `memory_get`（メモリまたはナレッジファイル読み取り）の2つのサブToolがあります。

[ナレッジベース](/ja/knowledge) 機能が有効な場合、両ツールとも `knowledge/` ディレクトリのファイルへのアクセスもサポートします。

## 依存関係

追加の依存関係は不要で、デフォルトで利用可能です。Agent Coreのメモリシステムによって管理されます。

## memory_search

キーワードとベクトルのハイブリッド検索で過去のメモリとナレッジベースの内容を検索します。

| パラメータ | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `query` | string | はい | 検索クエリ |

## memory_get

特定のメモリファイルまたはナレッジファイルの内容を読み取ります。

| パラメータ | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `path` | string | はい | ファイルの相対パス（例：`MEMORY.md`、`memory/2026-01-01.md`、`knowledge/concepts/rag.md`） |
| `start_line` | integer | いいえ | 開始行番号 |
| `end_line` | integer | いいえ | 終了行番号 |

## 仕組み

Agentは以下のシナリオでメモリToolを自動的に呼び出します：

- ユーザーが重要な情報を共有した場合 → メモリに保存
- 過去のコンテキストが必要な場合 → 関連するメモリを検索
- 会話が一定の長さに達した場合 → 要約を抽出して保存
- 専門知識について議論する場合 → ナレッジベースから関連ページを検索

<Note>
  設定で `knowledge` が `false` に設定されている場合、ツールの説明と検索範囲は自動的にメモリファイルのみに調整されます。
</Note>
````

## File: docs/ja/tools/read.mdx
````markdown
---
title: read - ファイル読み取り
description: ファイル内容の読み取り
---

ファイルの内容を読み取ります。テキストファイル、PDFファイル、画像（メタデータを返す）などに対応しています。

## 依存関係

追加の依存関係は不要で、デフォルトで利用可能です。

## パラメータ

| パラメータ | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `path` | string | はい | ファイルパス。相対パスはワークスペースディレクトリを基準とします |
| `offset` | integer | いいえ | 開始行番号（1始まり）。負の値は末尾からの読み取り |
| `limit` | integer | いいえ | 読み取る行数 |

## ユースケース

- 設定ファイルやログファイルの閲覧
- コードファイルの読み取りと分析
- 画像・動画ファイルの情報確認
````

## File: docs/ja/tools/scheduler.mdx
````markdown
---
title: scheduler - スケジューラ
description: スケジュールタスクの作成と管理
---

柔軟なスケジュール設定と実行モードを備えた、動的スケジュールタスクの作成と管理を行います。

## 依存関係

| 依存関係 | インストールコマンド |
| --- | --- |
| `croniter` ≥ 2.0.0 | `pip install croniter>=2.0.0` |

コア依存関係に含まれています：`pip3 install -r requirements.txt`

## スケジュールモード

| モード | 説明 |
| --- | --- |
| ワンタイム | 指定した時刻に1回だけ実行 |
| 固定間隔 | 一定の時間間隔で繰り返し実行 |
| Cron式 | Cron構文を使用した複雑なスケジュール定義 |

## 実行モード

- **固定メッセージ**: トリガー時にプリセットメッセージを送信
- **Agent動的タスク**: トリガー時にAgentがインテリジェントにタスクを実行

## 使い方

自然言語でスケジュールタスクを作成・管理できます：

- 「毎朝9時に天気予報を送って」
- 「2時間ごとにサーバーのステータスを確認して」
- 「明日の午後3時に会議のリマインドをして」
- 「すべてのスケジュールタスクを表示して」

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202195402.png" width="800" />
</Frame>
````

## File: docs/ja/tools/send.mdx
````markdown
---
title: send - ファイル送信
description: ユーザーへのファイル送信
---

ユーザーにファイル（画像、動画、音声、ドキュメントなど）を送信します。ユーザーが明示的にファイルの送信・共有を要求した場合に使用されます。

## 依存関係

追加の依存関係は不要で、デフォルトで利用可能です。

## パラメータ

| パラメータ | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `path` | string | はい | ファイルパス。絶対パスまたはワークスペースからの相対パス |
| `message` | string | いいえ | 添付メッセージ |

## ユースケース

- 生成したコードやドキュメントをユーザーに送信
- スクリーンショットやチャートの送信
- ダウンロードしたファイルの共有
````

## File: docs/ja/tools/vision.mdx
````markdown
---
title: vision - 画像理解
description: 画像コンテンツを分析（認識、説明、OCR など）
---

Vision API を使用してローカル画像や画像 URL を分析します。コンテンツの説明、テキスト抽出（OCR）、オブジェクト認識などに対応しています。

## モデル選択

Vision ツールは多段階の自動選択 + 自動フォールバック戦略を採用しており、手動設定なしで利用できます：

1. **メインモデル** — 現在設定されているメインモデルを優先的に使用して画像認識を行います（マルチモーダルモデルである必要があります）
2. **その他の設定済みモデル** — API Key が設定済みのその他のマルチモーダルモデルを自動的に検出して候補とします

現在のプロバイダーで呼び出しに失敗した場合、成功するかすべて失敗するまで自動的に次のプロバイダーを試行します。

### 対応モデル

| プロバイダー | ビジョンモデル | 説明 |
| --- | --- | --- |
| OpenAI / 互換プロトコル | メインモデルを使用 | すべての OpenAI 互換マルチモーダルモデルに対応 |
| 通義千問 (DashScope) | メインモデルを使用 | 例：qwen3.6-plus など |
| Claude | メインモデルを使用 | Anthropic ネイティブ画像形式 |
| Gemini | メインモデルを使用 | inlineData 形式 |
| 豆包 (Doubao) | メインモデルを使用 | doubao-seed-2-0 シリーズがネイティブ対応 |
| Kimi (Moonshot) | メインモデルを使用 | kimi-k2.6、kimi-k2.5 がネイティブ対応 |
| 百度 Qianfan | メインモデルを使用 | デフォルトでマルチモーダルメインモデル（`ernie-5.1` など）を使用。メインモデルが非対応の場合は `ernie-4.5-turbo-vl` にフォールバック |
| 智谱 AI | glm-5v-turbo | 常にビジョン専用モデルを使用 |
| MiniMax | MiniMax-Text-01 | 常にビジョン専用モデルを使用 |

<Note>
  智谱と MiniMax のテキストモデルは画像理解に対応していないため、常に対応するビジョン専用モデルが使用されます。手動で指定する必要はありません。
</Note>

> `use_linkai=true` の場合、デフォルトで LinkAI のマルチモーダルモデルが使用されます。

## カスタム設定

Vision で使用するモデルを指定したい場合は、`config.json` に以下のように設定できます：

```json
{
    "tools": {
        "vision": {
            "model": "gpt-4.1"
        }
    }
}
```

指定したモデルが**優先的に使用**され、ツールはモデル名に応じて対応するプロバイダーへ自動ルーティングします。呼び出しに失敗した場合は、他の設定済みプロバイダーへ自動的にフォールバックします。

ほとんどの場合、設定は不要です。メインモデルがマルチモーダルに対応しているか、ビジョン対応の API Key が 1 つでも設定されていれば自動的に動作します。

## パラメータ

| パラメータ | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `image` | string | はい | ローカルファイルパスまたは HTTP(S) 画像 URL |
| `question` | string | はい | 画像に対する質問 |

対応画像形式：jpg、jpeg、png、gif、webp



## ユースケース

- 画像コンテンツの説明
- 画像からのテキスト抽出（OCR）
- オブジェクト、色、シーンの認識
- スクリーンショットやスキャン文書などの分析

<Note>
  1MB を超える画像は自動的に圧縮してアップロードされます。すべての画像（リモート URL を含む）は base64 に統一変換して送信され、すべてのモデルバックエンドとの互換性を確保します。
</Note>
````

## File: docs/ja/tools/web-fetch.mdx
````markdown
---
title: web_fetch - Web 取得
description: Web ページやドキュメントのコンテンツを取得
---

HTTP/HTTPS URL の内容を取得します。Web ページからは可読テキストを抽出し、ドキュメントファイル（PDF、Word、Excel など）は自動でダウンロードして解析します。

## パラメータ

| パラメータ | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `url` | string | はい | HTTP/HTTPS URL（Web ページまたはドキュメント） |

## 対応ファイル形式

| 種別 | 形式 |
| --- | --- |
| PDF | `.pdf` |
| Word | `.docx` |
| テキスト | `.txt`、`.md`、`.csv`、`.log` |
| 表計算 | `.xls`、`.xlsx` |
| プレゼン | `.ppt`、`.pptx` |

## ユースケース

- Web ページの可読テキストを抽出する
- リモートドキュメントのダウンロードと解析
- API レスポンスの確認

<Note>
  `web_fetch` は静的 HTML のみ取得できます。JavaScript レンダリングが必要なページ（SPA など）は `browser` ツールを使用してください。
</Note>
````

## File: docs/ja/tools/web-search.mdx
````markdown
---
title: web_search - Web 検索
description: インターネットからリアルタイム情報を検索。複数の検索プロバイダーに対応
---

インターネットからリアルタイム情報、ニュース、リサーチなどを検索します。Bocha、百度 Qianfan、智谱（Zhipu）、LinkAI の 4 つのバックエンドに対応しており、いずれか 1 社を設定すれば利用可能です。

<Tip>
  [Web コンソール](/ja/channels/web) の「モデル管理 → 検索」パネルから、プロバイダーと戦略を可視化して設定するのが推奨です。設定ファイルを手動で編集する必要はありません。
</Tip>

## プロバイダー

| プロバイダー | 認証情報 | 申請窓口 |
| --- | --- | --- |
| Bocha | `tools.web_search.bocha_api_key` | [Bocha Open Platform](https://open.bochaai.com/) |
| 百度 Qianfan | `qianfan_api_key` を再利用 | [Qianfan コンソール](https://cloud.baidu.com/doc/qianfan/s/2mh4su4uy) |
| 智谱 Zhipu | `zhipu_ai_api_key` を再利用 | [Zhipu Open Platform](https://docs.bigmodel.cn/cn/guide/tools/web-search) |
| LinkAI | `linkai_api_key` を再利用 | [LinkAI コンソール](https://link-ai.tech/console/interface) |

Bocha のみ独立した `bocha_api_key` が必要ですが、他の 3 社は対応するモデルの API Key をそのまま再利用するため、モデルを設定すれば検索機能も同時に利用可能になります。

## ルーティング戦略

```json
{
  "tools": {
    "web_search": {
      "strategy": "auto",
      "provider": ""
    }
  }
}
```

- `auto`（デフォルト）：Agent が設定済みのプロバイダーから自動的に選択し、1 回のタスク内で複数回呼び出し、異なるプロバイダーを切り替えてより包括的な結果を取得できます。未指定の場合は `bocha → qianfan → zhipu → linkai` の順でフォールバックします。
- `fixed`：`provider` で指定したプロバイダーに固定。該当プロバイダーの認証情報が欠けている場合は自動的に auto の順序にフォールバックします。

## ツールパラメータ

| パラメータ | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `query` | string | はい | 検索キーワード |
| `count` | integer | いいえ | 返却する結果数（1–50、デフォルト 10） |
| `freshness` | string | いいえ | 期間指定：`noLimit`（デフォルト）、`oneDay`、`oneWeek`、`oneMonth`、`oneYear`、または `2025-01-01..2025-02-01` のような日付範囲 |
| `summary` | boolean | いいえ | ページ要約を返すか（デフォルト false） |
| `provider` | string | いいえ | `auto` 戦略で複数プロバイダーを設定している場合に表示。単回のプロバイダー切り替えに使用 |

<Note>
  4 社の認証情報がいずれも未設定の場合、このツールは Agent に登録されません。
</Note>
````

## File: docs/ja/tools/write.mdx
````markdown
---
title: write - ファイル書き込み
description: ファイルの作成または上書き
---

ファイルにコンテンツを書き込みます。ファイルが存在しない場合は新規作成し、存在する場合は上書きします。親ディレクトリは自動的に作成されます。

## 依存関係

追加の依存関係は不要で、デフォルトで利用可能です。

## パラメータ

| パラメータ | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `path` | string | はい | ファイルパス |
| `content` | string | はい | 書き込む内容 |

## ユースケース

- 新しいコードファイルやスクリプトの作成
- 設定ファイルの生成
- 処理結果の保存

<Note>
  1回の書き込みは10KBを超えないようにしてください。大きなファイルの場合は、まずスケルトンを作成し、editツールを使用してチャンクごとにコンテンツを追加してください。
</Note>
````

## File: docs/knowledge/index.mdx
````markdown
---
title: 个人知识库
description: CowAgent 的个人知识库系统 — 结构化知识沉淀、自动整理与知识图谱
---

个人知识库是 Agent 的长期结构化知识存储，保存在工作空间的 `knowledge/` 目录下。与按时间线组织的记忆不同，知识库以主题为维度，将用户分享的文章、对话中的洞察、学习材料等整理为互相关联的 Markdown 页面，形成可持续增长的知识网络。

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260413105435.png" width="800" />
</Frame>

## 核心概念

### 知识 vs 记忆

| 维度 | 知识库（knowledge/） | 长期记忆（memory/） |
| --- | --- | --- |
| 组织方式 | 按主题分类、互相关联 | 按时间线、日期文件 |
| 写入方式 | Agent 主动整理结构化内容 | 上下文裁剪时自动摘要 |
| 内容特点 | 提炼后的结构化知识 | 原始对话摘要 |
| 典型用途 | 学习笔记、技术文档、项目知识 | 对话历史、事件记录 |

### 目录结构

```
~/cow/knowledge/
├── index.md          # 知识索引，所有页面的入口
├── log.md            # 变更日志，记录每次写入
├── concepts/         # 概念类知识
│   └── machine-learning.md
├── entities/         # 实体类知识（人物、组织、工具）
│   └── openai.md
└── sources/          # 来源类知识（文章、论文）
    └── llm-wiki.md
```

目录结构是灵活的 — Agent 会根据实际内容自动创建合适的分类目录。用户也可以通过对话的方式自定义目录组织方式。


<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260413110104.png" width="800" />
</Frame>

## 自动整理

知识库的写入是 Agent 的自主行为，在以下场景中触发：

- **用户分享文章或文档** — Agent 自动提取关键信息，创建结构化知识页面
- **对话产生有价值的结论** — Agent 将洞察整理为知识页面，并与已有知识建立关联
- **用户主动要求整理** — 用户可以通过对话指导 Agent 组织和更新知识

<Frame>
  <img src="https://cdn.link-ai.tech/doc/17aad553d3e9e428c52ff9dc31726fda.png" width="800" />
</Frame>


每个知识页面都包含与其他页面的交叉引用链接，逐步构建起一个知识图谱。

## 知识检索

Agent 在对话中可以通过以下方式检索知识：

- **索引查阅** — 通过 `knowledge/index.md` 快速定位相关知识页面
- **语义搜索** — 通过 `memory_search` 工具对知识库内容进行语义检索
- **直接读取** — 通过 `memory_get` 工具读取特定知识文件

## Web 控制台

Web 控制台提供了专用的「知识」模块，支持：

- **文档浏览** — 树状目录结构，可搜索、可折叠，点击查看文档内容
- **知识图谱** — 可视化展示知识之间的关联关系，节点可直接跳转至文档
- **对话联动** — Agent 回复中引用的知识文档链接可直接点击跳转查看

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260413105402.png" width="800" />
</Frame>


## CLI 命令

通过 `/knowledge` 命令管理知识库：

| 命令 | 说明 |
| --- | --- |
| `/knowledge` | 显示知识库统计信息 |
| `/knowledge list` | 以树状结构显示文件目录 |
| `/knowledge on` | 开启知识库功能 |
| `/knowledge off` | 关闭知识库功能 |

## 相关配置

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
| `knowledge` | 是否启用个人知识库功能 | `true` |
| `agent_workspace` | 工作空间路径，知识库存储在此目录的 `knowledge/` 子目录下 | `~/cow` |
````

## File: docs/memory/context.mdx
````markdown
---
title: 短期记忆
description: 对话上下文 — 消息管理、压缩策略和上下文操作
---

对话上下文是 Agent 的短期记忆，包含当前会话中的所有消息（用户输入、Agent 回复、工具调用及结果）。合理管理上下文对于 Agent 的推理质量和成本控制至关重要。

## 上下文结构

每一轮对话由以下消息组成：

```
用户消息 → Agent 思考 → 工具调用 → 工具结果 → ... → Agent 最终回复
```

一轮中可能包含多次工具调用（Agent 的决策步数由 `agent_max_steps` 控制），所有工具调用和结果都会保留在上下文中，直到被压缩或裁剪。

## 关键配置

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
| `agent_max_context_tokens` | 上下文最大 token 预算 | `50000` |
| `agent_max_context_turns` | 上下文最大对话轮次 | `20` |
| `agent_max_steps` | 单轮对话最大决策步数（工具调用次数） | `15` |

可通过 `config.json` 或对话中的 `/config` 命令修改。

## 压缩策略

当上下文超出限制时，系统会自动执行压缩以释放空间。整个过程分为多个阶段：

### 1. 工具结果截断

在每次决策循环开始前，系统会检查历史轮次中的工具调用结果。超过 **20000 字符** 的工具结果会被截断，仅保留首尾内容和截断说明。当前轮次的工具结果不受影响。

### 2. 轮次裁剪

当对话轮次超过 `agent_max_context_turns` 时：

- 裁剪 **最早一半** 的完整轮次（保证工具调用链的完整性）
- 被裁剪的消息会通过 LLM 总结后**写入当天的日级记忆文件**
- LLM 摘要完成后，同时将摘要**注入到保留消息的第一条用户消息开头**，帮助模型在后续对话中保持上下文连贯性
- 摘要注入在后台异步完成，不阻塞当前回复；注入的摘要在下一轮对话时生效

### 3. Token 预算裁剪

裁剪轮次后，如果 token 数仍超出预算：

- **轮次 < 5 时**：对所有轮次进行**文本压缩** — 每轮只保留第一条用户文本和最后一条 Agent 回复，去掉中间的工具调用链
- **轮次 ≥ 5 时**：再次裁剪**前半轮次**，被丢弃内容同样写入记忆并注入上下文摘要

### 4. 溢出应急处理

当模型 API 返回上下文溢出错误时：

1. 先将当前所有消息总结写入记忆
2. 执行激进裁剪（工具结果限制 10K 字符、用户文本限制 10K、最多保留 5 轮）
3. 如果仍然溢出，清空整个对话上下文

## 会话持久化

对话消息会持久化到本地数据库，服务重启后自动恢复。恢复策略：

- 恢复最近的 **`max(3, max_context_turns / 6)`** 轮对话
- 只保留每轮的**用户文本和 Agent 最终回复**，不恢复中间工具调用链
- 超过 **30 天**的历史会话自动清理

## 操作命令

在对话中可以使用以下命令管理上下文：

| 命令 | 说明 |
| --- | --- |
| `/context` | 查看当前上下文统计（消息数、角色分布、总字符数） |
| `/context clear` | 清空当前会话上下文 |
| `/config agent_max_context_tokens 80000` | 调整上下文 token 预算 |
| `/config agent_max_context_turns 30` | 调整上下文轮次上限 |

<Tip>
  清空上下文后，Agent 会"忘记"之前的对话内容。被裁剪和清空的内容如果已经写入长期记忆，仍可通过记忆检索找回。
</Tip>
````

## File: docs/memory/deep-dream.mdx
````markdown
---
title: 梦境蒸馏
description: Deep Dream — 从对话到永久记忆的自动蒸馏机制
---

梦境蒸馏（Deep Dream）是 CowAgent 记忆系统的核心整理机制，负责将分散的天级记忆蒸馏为精炼的长期记忆，并生成梦境日记。

## 记忆流转

CowAgent 的记忆从短期到长期经历三个阶段：

```
对话上下文（短期）→ 天级记忆（中期）→ MEMORY.md（长期）
```

### 1. 对话 → 天级记忆

当对话上下文被裁剪或每日定时总结时，系统使用 LLM 将对话内容摘要为关键事件，写入当天的天级记忆文件 `memory/YYYY-MM-DD.md`。

触发时机：
- **上下文裁剪** — 轮次或 token 超限时，裁剪的内容被总结写入
- **每日定时** — 23:55 自动触发全量总结
- **API 溢出** — 紧急保存当前对话摘要

### 2. 天级记忆 → MEMORY.md（蒸馏）

每日总结完成后，Deep Dream 自动执行蒸馏：

1. **读取材料** — 当前 `MEMORY.md` + 当天的天级记忆
2. **LLM 蒸馏** — 去重、合并、修剪、提取新信息
3. **覆写 MEMORY.md** — 输出精炼后的长期记忆
4. **生成梦境日记** — 记录整理过程的发现和洞察

### 3. MEMORY.md 的作用

`MEMORY.md` 会被注入到每次对话的系统提示词中，让 Agent 始终了解用户的偏好、决策和关键事实。因此它必须保持精炼——Deep Dream 会控制在约 30 条以内。

## 蒸馏规则

Deep Dream 遵循以下整理规则：

| 操作 | 说明 |
| --- | --- |
| **合并提炼** | 含义相近的多条合并为一条高密度表述 |
| **新增萃取** | 从天级记忆中提取偏好、决策、人物、经验等 |
| **冲突更新** | 新信息与旧条目矛盾时，以新信息为准 |
| **清理无效** | 删除临时性记录、空白条目、格式残留 |
| **删除冗余** | 已被更精炼表述涵盖的旧条目删除 |

## 梦境日记

每次蒸馏会生成一篇梦境日记，保存在 `memory/dreams/YYYY-MM-DD.md`，用叙事风格记录：

- 发现了哪些重复或矛盾
- 从天级记忆中提取了什么新洞察
- 做了哪些清理和优化
- 整体感受和观察

梦境日记可在 Web 控制台的「记忆管理 → 梦境日记」tab 中查看。

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260414110032.png" width="800" />
</Frame>

## 手动触发

除了每日自动执行外，也可以在对话中手动触发：

```text
/memory dream [N]
```

- `N`：整理近 N 天的记忆（默认 3 天，最大 30 天）
- 蒸馏在后台异步执行，完成后在对话中通知结果
- Web 端通知包含可点击链接，直接跳转查看 MEMORY.md 和梦境日记
- 无需 Agent 初始化，首次对话前即可使用

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260414120158.png" width="800" />
</Frame>

<Tip>
  首次部署后可以手动执行一次 `/memory dream 30`，将历史天级记忆全量蒸馏到 MEMORY.md。
</Tip>

## 安全机制

| 机制 | 说明 |
| --- | --- |
| **无新内容跳过** | 没有天级记忆时不执行蒸馏，避免空覆写 |
| **输入去重** | 定时任务中，输入材料未变化时自动跳过 |
| **异步执行** | 蒸馏在后台线程运行，不阻塞对话 |
| **顺序保证** | 定时任务中，天级 flush 全部完成后才启动蒸馏 |
| **禁止编造** | 提示词明确约束只能基于已有材料整理，不得推测或添加 |
````

## File: docs/memory/index.mdx
````markdown
---
title: 长期记忆
description: CowAgent 的长期记忆系统 — 文件持久化、自动写入与混合检索
---

长期记忆保存在工作空间文件中，跨会话持久存在。Agent 在对话中通过检索工具按需加载历史记忆，也会在上下文裁剪时自动将对话摘要写入长期记忆。

<img src="https://cdn.link-ai.tech/doc/memory-architecture-zh.jpeg" alt="Memory Architecture" />

## 记忆类型

### 核心记忆（MEMORY.md）

存储在 `~/cow/MEMORY.md` 中，包含用户的长期偏好、重要决策、关键事实等不会随时间淡化的信息。Agent 可通过工具读写此文件来维护长期知识。

### 日级记忆（memory/YYYY-MM-DD.md）

存储在 `~/cow/memory/` 目录下，按日期命名（如 `2026-03-08.md`），记录每天的对话摘要和关键事件。仅在首次写入时创建，避免生成空文件。

### 梦境日记（memory/dreams/YYYY-MM-DD.md）

Deep Dream（记忆蒸馏）过程的副产物，记录每次整理的发现、去重合并操作和新洞察。存储在 `~/cow/memory/dreams/` 目录下，按日期命名。

## 自动写入

Agent 通过以下机制自动将对话内容持久化为长期记忆：

- **上下文裁剪时** — 当对话轮次或 token 超出配置上限时，裁剪最早一半的上下文，使用 LLM 将被裁剪的内容总结为关键信息写入当天记忆文件，并将摘要异步注入到保留的上下文中，帮助模型保持对话连贯性
- **每日定时总结** — 每天 23:55 自动触发一次全量总结，防止低活跃日无记忆留存（内容无变化时自动跳过）
- [梦境蒸馏（Deep Dream）](/memory/deep-dream) — 每日总结完成后自动执行，将天级记忆蒸馏合并到 MEMORY.md，并生成梦境日记
- **API 上下文溢出时** — 当模型 API 返回上下文溢出错误时，紧急保存当前对话摘要

所有记忆写入均在后台异步执行（LLM 总结 + 文件写入），不阻塞正常对话回复。

## 记忆检索

记忆系统支持混合检索模式：

- **关键词检索** — 基于 FTS5 全文索引匹配历史记忆，支持 BM25 排序
- **向量检索** — 基于 embedding 语义相似度搜索，即使表述不同也能找到相关记忆

Agent 会在对话中根据需要自动触发记忆检索，将相关历史信息纳入上下文。检索结果按混合评分排序（默认向量权重 0.7、关键词权重 0.3），日级记忆会随时间衰减（半衰期 30 天），核心记忆不衰减。

## 相关文件

工作空间（默认 `~/cow`）中与记忆相关的文件：

| 文件 | 说明 |
| --- | --- |
| `AGENT.md` | Agent 的人格和行为设定 |
| `USER.md` | 用户身份信息和偏好 |
| `RULE.md` | 自定义规则和约束 |
| `MEMORY.md` | 核心记忆（长期） |
| `memory/YYYY-MM-DD.md` | 日级记忆（按需创建） |
| `memory/dreams/YYYY-MM-DD.md` | 梦境日记（Deep Dream 自动生成） |

## Web 控制台

在 Web 控制台的记忆管理页面中，可浏览记忆文件和梦境日记，支持通过 Tab 切换查看：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260414171014.png" width="800" />
</Frame>

## 相关配置

| 参数 | 说明 | 默认值 |
| --- | --- | --- |
| `agent_workspace` | 工作空间路径，记忆文件存储在此目录下 | `~/cow` |
| `agent_max_context_tokens` | 最大上下文 token 数，超出时裁剪并总结写入记忆 | `50000` |
| `agent_max_context_turns` | 最大上下文轮次，超出时裁剪并总结写入记忆 | `20` |
````

## File: docs/models/claude.mdx
````markdown
---
title: Claude
description: Anthropic Claude 模型配置（文本对话 + 图像理解）
---

Claude 由 Anthropic 提供，支持文本对话与图像理解，主流 Sonnet / Opus 模型均原生支持视觉，无需额外指定 Vision 模型。

<Tip>
  通过 Web 控制台的「模型管理」页面可一站式配置以下全部能力，无需手动改配置文件。
</Tip>

## 文本对话

```json
{
  "model": "claude-sonnet-4-6",
  "claude_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | 支持 `claude-sonnet-4-6`、`claude-opus-4-7`、`claude-opus-4-6`、`claude-sonnet-4-5`、`claude-sonnet-4-0`、`claude-3-5-sonnet-latest` 等，参考 [官方模型](https://docs.anthropic.com/en/docs/about-claude/models/overview) |
| `claude_api_key` | 在 [Claude 控制台](https://console.anthropic.com/settings/keys) 创建 |
| `claude_api_base` | 可选，默认为 `https://api.anthropic.com/v1`，可改为第三方代理 |

### 模型选择

| 模型 | 适用场景 |
| --- | --- |
| `claude-sonnet-4-6` | 默认推荐，性价比与速度平衡 |
| `claude-opus-4-7` | 复杂推理与长链路任务，效果最佳但成本更高 |
| `claude-sonnet-4-5` / `claude-sonnet-4-0` | 上一代旗舰，价格更低 |

## 图像理解

配置 `claude_api_key` 后 Agent 的 Vision 工具会自动使用 Claude 主模型识别图像，无需额外配置。

如需手动指定 Vision 模型，可在配置文件中显式配置：

```json
{
  "tools": {
    "vision": {
      "model": "claude-sonnet-4-6"
    }
  }
}
```
````

## File: docs/models/coding-plan.mdx
````markdown
---
title: Coding Plan
description: Coding Plan 模式模型配置
---

> Coding Plan 是各厂商推出的编程包月套餐，适合高频使用 Agent 的场景。CowAgent 支持通过 OpenAI 兼容方式接入各厂商的 Coding Plan 接口。

<Note>
  Coding Plan 的 API Base 和 API Key 通常与普通按量计费接口不通用，请在各厂商平台单独获取。
</Note>

## 通用配置格式

所有厂商均可使用 OpenAI 兼容协议接入，可在web控制台快速配置。设置模型厂商为**OpenAI**，选择自定义模型并填入模型编码，最后填写对应厂商的API Base 和 API Key：

<img src="https://cdn.link-ai.tech/doc/20260318113134.png" width="800"/>

也可通过 `config.json` 配置文件直接修改：

```json
{
  "bot_type": "openai",
  "model": "模型名称",
  "open_ai_api_base": "厂商 Coding Plan API Base",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `bot_type` | 固定为 `openai`（OpenAI 兼容方式） |
| `model` | 各厂商支持的模型名称 |
| `open_ai_api_base` | 各厂商 Coding Plan 专用 API Base |
| `open_ai_api_key` | 各厂商 Coding Plan 专用 API Key |

---

## 阿里云

```json
{
  "bot_type": "openai",
  "model": "qwen3.5-plus",
  "open_ai_api_base": "https://coding.dashscope.aliyuncs.com/v1",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | `qwen3.5-plus`、`qwen3-max-2026-01-23`、`qwen3-coder-next`、`qwen3-coder-plus`、`glm-5`、`glm-4.7`、`kimi-k2.5`、`MiniMax-M2.5` |
| `open_ai_api_base` | `https://coding.dashscope.aliyuncs.com/v1` |
| `open_ai_api_key` | Coding Plan 专用 Key（与按量计费接口不通用） |

官方文档：[快速开始](https://help.aliyun.com/zh/model-studio/coding-plan-quickstart?spm=a2c4g.11186623.help-menu-2400256.d_0_2_1.70115203zi5Igc)、[模型列表](https://help.aliyun.com/zh/model-studio/coding-plan)

---

## MiniMax

```json
{
  "bot_type": "openai",
  "model": "MiniMax-M2.5",
  "open_ai_api_base": "https://api.minimaxi.com/v1",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | `MiniMax-M2.5`、`MiniMax-M2.5-highspeed`、`MiniMax-M2.1`、`MiniMax-M2` |
| `open_ai_api_base` | 国内：`https://api.minimaxi.com/v1`；海外：`https://api.minimax.io/v1` |
| `open_ai_api_key` | Coding Plan 专用 Key（与按量计费接口不通用） |

官方文档：[国内 Key 获取](https://platform.minimaxi.com/docs/coding-plan/quickstart)、[模型列表](https://platform.minimaxi.com/docs/guides/pricing-coding-plan)、[国际 Key 获取](https://platform.minimax.io/docs/coding-plan/quickstart)

---


## 智谱 GLM

```json
{
  "bot_type": "openai",
  "model": "glm-4.7",
  "open_ai_api_base": "https://open.bigmodel.cn/api/coding/paas/v4",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | `glm-5`、`glm-4.7`、`glm-4.6`、`glm-4.5`、`glm-4.5-air` |
| `open_ai_api_base` | 中国区：`https://open.bigmodel.cn/api/coding/paas/v4`；全球区：`https://api.z.ai/api/coding/paas/v4` |
| `open_ai_api_key` | API Key 与普通接口通用 |

官方文档：[国内版快速开始](https://docs.bigmodel.cn/cn/coding-plan/quick-start)、[国际版快速开始](https://docs.z.ai/devpack/quick-start)

---

## 火山引擎

```json
{
  "bot_type": "openai",
  "model": "Doubao-Seed-2.0-Code",
  "open_ai_api_base": "https://ark.cn-beijing.volces.com/api/coding/v3",
  "open_ai_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | `Doubao-Seed-2.0-Code`、`Doubao-Seed-2.0-pro`、`Doubao-Seed-2.0-lite`、`Doubao-Seed-Code`、`MiniMax-M2.5`、`Kimi-K2.5`、`GLM-4.7`、`DeepSeek-V3.2` |
| `open_ai_api_base` | `https://ark.cn-beijing.volces.com/api/coding/v3` |
| `open_ai_api_key` | API Key 与普通接口通用 |

官方文档：[快速开始](https://www.volcengine.com/docs/82379/1928261?lang=zh)

---

## Kimi

```json
{
  "bot_type": "moonshot",
  "model": "kimi-for-coding",
  "moonshot_base_url": "https://api.kimi.com/coding/v1",
  "moonshot_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | 填写 `kimi-for-coding` 会自动更新模型，或指定模型例如 `kimi-k2.6` |
| `moonshot_base_url` | `https://api.kimi.com/coding/v1` |
| `moonshot_api_key` | Coding Plan 专用 Key（与按量计费接口不通用） |

官方文档：[Key 获取](https://www.kimi.com/code/docs/)
````

## File: docs/models/custom.mdx
````markdown
---
title: 自定义
description: 自定义厂商配置，适用于第三方 API 代理和本地模型
---

适用于通过 OpenAI 兼容协议接入的第三方模型服务或本地部署的模型，例如：

- **第三方 API 代理**：使用统一的 API Base 调用多种模型
- **本地模型**：通过 Ollama、vLLM、LocalAI 等工具在本地部署的模型
- **私有化部署**：企业内部部署的模型服务

<Note>
  与 `openai` 厂商的区别：选择自定义厂商后，通过 `/config model` 切换模型时，不会自动切换厂商类型，始终使用自定义的 API 地址。
</Note>

## 文本对话

### 第三方 API 代理

```json
{
  "bot_type": "custom",
  "model": "",
  "custom_api_key": "YOUR_API_KEY",
  "custom_api_base": "https://{your-proxy.com}/v1"
}
```

| 参数 | 说明 |
| --- | --- |
| `bot_type` | 必须设为 `custom` |
| `model` | 模型名称，填写代理服务支持的任意模型名 |
| `custom_api_key` | API 密钥，由代理服务提供 |
| `custom_api_base` | API 地址，由代理服务提供，需兼容 OpenAI 协议 |

### 本地模型

本地模型通常不需要 API Key，只需填写 API Base：

```json
{
  "bot_type": "custom",
  "model": "qwen3.5:27b",
  "custom_api_base": "http://localhost:11434/v1"
}
```

常见的本地部署工具及默认地址：

| 工具 | 默认 API Base |
| --- | --- |
| [Ollama](https://ollama.com) | `http://localhost:11434/v1` |
| [vLLM](https://docs.vllm.ai) | `http://localhost:8000/v1` |
| [LocalAI](https://localai.io) | `http://localhost:8080/v1` |

### 切换模型

自定义厂商下切换模型时，只会修改 `model`，不会改变 `bot_type` 和 API 地址：

```
/config model qwen3.5:27b
```
````

## File: docs/models/deepseek.mdx
````markdown
---
title: DeepSeek
description: DeepSeek 模型配置（文本对话 + 思考模式）
---

DeepSeek 是当前 Agent 模式默认推荐的厂商之一，主打高性价比的文本对话和任务规划能力。

## 文本对话

```json
{
  "model": "deepseek-v4-flash",
  "deepseek_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | 支持 `deepseek-v4-flash`（默认）、`deepseek-v4-pro` |
| `deepseek_api_key` | 在 [DeepSeek 平台](https://platform.deepseek.com/api_keys) 创建 |
| `deepseek_api_base` | 可选，默认为 `https://api.deepseek.com/v1`，可修改为第三方代理地址 |

### 模型选择

| 模型 | 适用场景 |
| --- | --- |
| `deepseek-v4-flash` | 默认推荐，速度快、成本低 |
| `deepseek-v4-pro` | 更智能，复杂任务效果更强 |

## 思考模式

V4 系列（`deepseek-v4-flash` / `deepseek-v4-pro`）支持显式的「思考模式」：模型在输出最终回答前，先输出一段思维链（`reasoning_content`），从而提升答案质量。

### 开关

通过全局配置 `enable_thinking` 控制，也可在 web控制台 - 配置页面中进行切换：

```json
{
  "enable_thinking": true
}
```

- `true`：所有渠道下模型都会先思考再作答。Web 控制台会展示思考过程，IM 渠道（微信 / 企微 / 钉钉 / 飞书）虽不展示但同样获得更好答案。
- `false`：关闭思考，响应更快，首字延迟更低。

### 推理强度

思考模式下可通过 `reasoning_effort` 控制推理强度：

```json
{
  "enable_thinking": true,
  "reasoning_effort": "high"
}
```

| 取值 | 适用场景 |
| --- | --- |
| `high`（默认） | 日常 Agent 任务，思考与速度的平衡 |
| `max` | 复杂编码、长链路规划、严格约束的任务，推理更深但耗时与输出 token 更多 |

`reasoning_effort` 仅在 `enable_thinking` 为 `true` 时生效；模型不支持思考模式时该字段自动忽略。

### 行为说明

- **采样参数**：思考模式下 `temperature`、`top_p`、`presence_penalty`、`frequency_penalty` 会被服务端忽略（不会报错），CowAgent 会自动跳过传入。
- **多轮工具调用**：当历史中包含工具调用时，DeepSeek 要求所有 assistant 消息必须回传 `reasoning_content`。CowAgent 会自动处理回传逻辑，跨轮次切换思考开关也不会出错。

<Tip>
  默认使用 `deepseek-v4-flash`；复杂任务可使用 `deepseek-v4-pro`；需要深度推理可开启 `enable_thinking`。
</Tip>
````

## File: docs/models/doubao.mdx
````markdown
---
title: 豆包 Doubao
description: 豆包（火山方舟）模型配置（文本 / 图像理解 / 图像生成 / 向量）
---

豆包（火山方舟）支持文本对话、图像理解、图像生成（Seedream）和向量能力，一份 `ark_api_key` 即可启用全部能力。

<Tip>
  通过 Web 控制台的「模型管理」页面可一站式配置以下全部能力，无需手动改配置文件。
</Tip>

## 文本对话

```json
{
  "model": "doubao-seed-2-0-pro-260215",
  "ark_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | 可填 `doubao-seed-2-0-pro-260215`、`doubao-seed-2-0-code-preview-260215`、`doubao-seed-2-0-lite-260215` 等 |
| `ark_api_key` | 在 [火山方舟控制台](https://console.volcengine.com/ark/region:ark+cn-beijing/apikey) 创建 |
| `ark_base_url` | 可选，默认为 `https://ark.cn-beijing.volces.com/api/v3` |

## 图像理解

配置 `ark_api_key` 后 Agent 的 Vision 工具会自动使用 `doubao-seed-2-0-pro-260215` 识别图像，无需额外配置。

如需手动指定 Vision 模型：

```json
{
  "tools": {
    "vision": {
      "model": "doubao-seed-2-0-pro-260215"
    }
  }
}
```

## 图像生成

```json
{
  "skills": {
    "image-generation": {
      "model": "seedream-5.0-lite"
    }
  }
}
```

可选模型：`seedream-5.0-lite`、`seedream-4.5`。

## 向量

```json
{
  "embedding_provider": "doubao",
  "embedding_model": "doubao-embedding-vision-251215"
}
```

默认模型 `doubao-embedding-vision-251215`（多模态 embedding），可在配置文件中通过 `embedding_dimensions` 指定 1024 或 2048 维。修改 embedding 后需执行 `/memory rebuild-index` 命令重建索引。
````

## File: docs/models/gemini.mdx
````markdown
---
title: Gemini
description: Google Gemini 模型配置（文本对话 + 图像理解 + 图像生成）
---

Google Gemini 支持文本对话、图像理解和图像生成（Nano Banana 系列），一个 `gemini_api_key` 即可启用全部能力。

<Tip>
  通过 Web 控制台的「模型管理」页面可一站式配置以下全部能力，无需手动改配置文件。
</Tip>

## 文本对话

```json
{
  "model": "gemini-3.5-flash",
  "gemini_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | 推荐 `gemini-3.5-flash`，亦支持 `gemini-3.1-pro-preview`、`gemini-3.1-flash-lite-preview`、`gemini-3-flash-preview`、`gemini-3-pro-preview` 等，参考 [官方文档](https://ai.google.dev/gemini-api/docs/models) |
| `gemini_api_key` | 在 [Google AI Studio](https://aistudio.google.com/app/apikey) 创建 |
| `gemini_api_base` | 可选，默认为 `https://generativelanguage.googleapis.com`，可改为第三方代理 |

## 图像理解

Gemini 全系列模型均原生支持视觉，配置 `gemini_api_key` 后 Agent 的 Vision 工具会自动使用主模型识别图像，无需额外配置。

如需手动指定 Vision 模型：

```json
{
  "tools": {
    "vision": {
      "model": "gemini-3.1-flash-lite-preview"
    }
  }
}
```

## 图像生成

```json
{
  "skills": {
    "image-generation": {
      "model": "gemini-3.1-flash-image-preview"
    }
  }
}
```

| 模型 ID | 别名 |
| --- | --- |
| `gemini-3.1-flash-image-preview` | Nano Banana 2 |
| `gemini-3-pro-image-preview` | Nano Banana Pro |
| `gemini-2.5-flash-image` | Nano Banana |
````

## File: docs/models/glm.mdx
````markdown
---
title: 智谱 GLM
description: 智谱 AI GLM 模型配置（文本 / 图像理解 / 语音识别 / 向量）
---

智谱 AI 支持文本对话、图像理解、语音识别（ASR）和向量（Embedding），一份 `zhipu_ai_api_key` 即可启用全部能力。

<Tip>
  通过 Web 控制台的「模型管理」页面可一站式配置以下全部能力，无需手动改配置文件。
</Tip>

## 文本对话

```json
{
  "model": "glm-5.1",
  "zhipu_ai_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | 可填 `glm-5.1`、`glm-5-turbo`、`glm-5`、`glm-4.7`、`glm-4-plus`、`glm-4-flash`、`glm-4-air` 等，参考 [模型编码](https://bigmodel.cn/dev/api/normal-model/glm-4) |
| `zhipu_ai_api_key` | 在 [智谱 AI 控制台](https://www.bigmodel.cn/usercenter/proj-mgmt/apikeys) 创建 |
| `zhipu_ai_api_base` | 可选，默认为 `https://open.bigmodel.cn/api/paas/v4` |

## 图像理解

智谱 chat 系列模型（`glm-5.1`、`glm-5-turbo` 等）不支持视觉，视觉调用统一路由到 `glm-5v-turbo`。配置 `zhipu_ai_api_key` 后 Agent 的 Vision 工具会自动使用该模型，无需在配置文件中显式指定。

## 语音识别

```json
{
  "voice_to_text": "zhipu",
  "voice_to_text_model": "glm-asr-2512"
}
```

| 参数 | 说明 |
| --- | --- |
| `voice_to_text` | 设为 `zhipu` 启用智谱 ASR |
| `voice_to_text_model` | 可选，默认 `glm-asr-2512` |

凭证自动复用 `zhipu_ai_api_key`。语音文件建议小于 25MB，超大文件可能被服务端拒绝。

## 向量

```json
{
  "embedding_provider": "zhipu",
  "embedding_model": "embedding-3"
}
```

可选模型：`embedding-3`、`embedding-2`。修改 embedding 后需执行 `/memory rebuild-index` 命令重建索引。
````

## File: docs/models/index.mdx
````markdown
---
title: 模型概览
description: CowAgent 支持的模型厂商及能力矩阵
---

CowAgent 支持国内外主流厂商的大语言模型，模型接口实现在项目的 `models/` 目录下。除文本对话外，部分厂商还提供视觉理解、图像生成、语音识别、语音合成、向量等能力，可在 Agent 流程中按需调用。


## 模型能力总览

各厂商提供的能力一览。「文本」指主对话模型，其余列表示该厂商可承担对应 Agent 能力。

| 厂商 | 代表模型 | 文本 | 图像理解 | 图像生成 | 语音识别 | 语音合成 | 向量 |
| --- | --- | :-: | :-: | :-: | :-: | :-: | :-: |
| [DeepSeek](/models/deepseek) | deepseek-v4-flash / pro | ✅ | | | | | |
| [MiniMax](/models/minimax) | MiniMax-M2.7 | ✅ | ✅ | ✅ | | ✅ | |
| [Claude](/models/claude) | claude-opus-4-7 | ✅ | ✅ | | | | |
| [Gemini](/models/gemini) | gemini-3.5-flash | ✅ | ✅ | ✅ | | | |
| [OpenAI](/models/openai) | gpt-5.5、o 系列 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [智谱 GLM](/models/glm) | glm-5.1、glm-5v-turbo | ✅ | ✅ | | ✅ | | ✅ |
| [通义千问](/models/qwen) | qwen3.7-max | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [豆包 Doubao](/models/doubao) | doubao-seed-2.0 系列 | ✅ | ✅ | ✅ | | | ✅ |
| [Kimi](/models/kimi) | kimi-k2.6 | ✅ | ✅ | | | | |
| [百度千帆](/models/qianfan) | ernie-5.1 | ✅ | ✅ | | | | |
| [小米 MiMo](/models/mimo) | mimo-v2.5-pro / v2.5 | ✅ | ✅ | | | ✅ | |
| [LinkAI](/models/linkai) | 多厂商 100+ 模型统一接入 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [自定义](/models/custom) |本地模型 / 三方代理 | ✅ | | | | | |

<Tip>
  Web 控制台中各项能力（视觉 / 图像 / 语音识别 / 语音合成 / 向量 / 网络搜索）均可独立配置厂商与模型，互相之间不强制绑定。
</Tip>


## 配置方式

**方式一（推荐）：** 通过 [Web 控制台](/channels/web) 在线管理模型与各项能力，无需手动编辑配置文件：

<img width="900" src="https://cdn.link-ai.tech/doc/20260521212527.png" />

**方式二：** 手动编辑 `config.json`，根据所选模型填写对应的模型名称和 API Key。每个模型也支持 OpenAI 兼容方式接入，将 `bot_type` 设为 `openai`，配置 `open_ai_api_base` 和 `open_ai_api_key` 即可。
````

## File: docs/models/kimi.mdx
````markdown
---
title: Kimi
description: Kimi（Moonshot）模型配置（文本对话 + 图像理解）
---

Kimi 由 Moonshot 提供，支持文本对话与图像理解，`kimi-k2.x` 系列原生支持视觉。

<Tip>
  通过 Web 控制台的「模型管理」页面可一站式配置以下全部能力，无需手动改配置文件。
</Tip>

## 文本对话

```json
{
  "model": "kimi-k2.6",
  "moonshot_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | 可填 `kimi-k2.6`、`kimi-k2.5`、`kimi-k2`、`moonshot-v1-8k`、`moonshot-v1-32k`、`moonshot-v1-128k` |
| `moonshot_api_key` | 在 [Moonshot 控制台](https://platform.moonshot.cn/console/api-keys) 创建 |
| `moonshot_base_url` | 可选，默认为 `https://api.moonshot.cn/v1` |

## 图像理解

配置 `moonshot_api_key` 后 Agent 的 Vision 工具会自动使用 `kimi-k2.6` 识别图像，无需额外配置。

如需手动指定 Vision 模型：

```json
{
  "tools": {
    "vision": {
      "model": "kimi-k2.6"
    }
  }
}
```
````

## File: docs/models/linkai.mdx
````markdown
---
title: LinkAI
description: 通过 LinkAI 平台统一接入文本、视觉、图像、语音与向量能力
---

通过一份 `linkai_api_key` 即可访问 OpenAI、Claude、Gemini、DeepSeek、MiniMax、Qwen、Kimi、豆包 等主流厂商的全部能力。

<Tip>
  通过 Web 控制台的「模型管理」页面可一站式配置以下全部能力，无需手动改配置文件。
</Tip>

## 文本对话

```json
{
  "use_linkai": true,
  "linkai_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `use_linkai` | 设为 `true` 启用 |
| `linkai_api_key` | 在 [控制台](https://link-ai.tech/console/interface) 创建 |
| `model` | 可填写 [模型列表](https://link-ai.tech/console/models) 中任意编码 |

前往 [模型服务](https://link-ai.tech/console/models) 了解更多。

## 图像理解

配置完成后 Agent 的 Vision 工具会自动调用网关上的多模态模型，无需额外配置。如需手动指定 Vision 模型：

```json
{
  "tools": {
    "vision": {
      "model": "gpt-5.4-mini"
    }
  }
}
```

可选模型：`gpt-4.1-mini`、`gpt-5.4-mini`、`qwen3.6-plus`、`doubao-seed-2-0-pro-260215`、`kimi-k2.6`、`claude-sonnet-4-6`、`gemini-3.1-flash-lite-preview` 等。

## 图像生成

```json
{
  "skills": {
    "image-generation": {
      "model": "gpt-image-2"
    }
  }
}
```

| 模型 ID | 别名 |
| --- | --- |
| `gpt-image-2` | OpenAI |
| `gemini-3.1-flash-image-preview` | Nano Banana 2 |
| `gemini-3-pro-image-preview` | Nano Banana Pro |
| `seedream-5.0-lite` | 字节豆包 Seedream |

## 语音识别

```json
{
  "voice_to_text": "linkai"
}
```

ASR 固定使用 Whisper，凭证自动复用 `linkai_api_key`。

## 语音合成

语音合成网关下支持多个底层 TTS 引擎，按 `text_to_voice_model` 选择引擎，音色随引擎切换。

```json
{
  "text_to_voice": "linkai",
  "text_to_voice_model": "doubao",
  "tts_voice_id": "BV001_streaming"
}
```

| `text_to_voice_model` | 引擎说明 |
| --- | --- |
| `tts-1` | OpenAI · 多语种通用（音色 `alloy` / `nova` / `echo` 等） |
| `doubao` | 字节豆包 · 中文音色丰富 |
| `baidu` | 百度 · 中文主播音色 |

不同引擎对应的音色不同，建议在 Web 控制台「模型管理 → 语音合成」中可视化选择。

## 向量

```json
{
  "embedding_provider": "linkai",
  "embedding_model": "text-embedding-3-small"
}
```

默认模型 `text-embedding-3-small`（OpenAI 兼容）。修改 embedding 后需执行 `/memory rebuild-index` 命令重建索引。
````

## File: docs/models/mimo.mdx
````markdown
---
title: 小米 MiMo
description: 小米 MiMo 模型配置（文本对话 + 图像理解 + 语音合成）
---

小米 MiMo 是原生全模态大模型，单 `mimo_api_key` 即可同时启用文本对话、图像理解与语音合成。

<Tip>
  通过 Web 控制台的「模型管理」页面可一站式配置以下全部能力，无需手动改配置文件。
</Tip>

## 文本对话

```json
{
  "model": "mimo-v2.5-pro",
  "mimo_api_key": "YOUR_API_KEY",
  "mimo_api_base": "https://api.xiaomimimo.com/v1"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | 默认推荐 `mimo-v2.5-pro`，也可使用 `mimo-v2.5` |
| `mimo_api_key` | 在 [MiMo 开放平台](https://platform.xiaomimimo.com/console/api-keys) 创建 |
| `mimo_api_base` | 可选，默认为 `https://api.xiaomimimo.com/v1` |

### 模型选择

| 模型 | 适用场景 |
| --- | --- |
| `mimo-v2.5-pro` | 旗舰，原生全模态 + Agent 能力，最高 100 万 tokens 上下文 |
| `mimo-v2.5` | 综合版，原生全模态（文本 / 图像 / 视频 / 音频） |

## 思考模式

MiMo V2.5 系列默认开启「思考模式」：模型在输出最终回答前会先输出 `reasoning_content`（思维链），提升复杂任务表现。

通过全局配置 `enable_thinking` 控制是否展示（也可在 Web 控制台 - 配置页面切换）：

```json
{
  "enable_thinking": true
}
```

## 图像理解

配置 `mimo_api_key` 后，Agent 的 Vision 工具可以自动使用 MiMo 视觉模型：

- 当主模型本身是多模态时（`mimo-v2.5-pro` / `mimo-v2.5`），直接由主模型识别图像，无需额外配置
- 当主模型是其他厂商时，Vision 工具会根据顺序自动 fallback 到 `mimo-v2.5-pro`

如需手动指定 Vision 模型，可在配置文件中显式配置：

```json
{
  "tools": {
    "vision": {
      "provider": "mimo",
      "model": "mimo-v2.5-pro"
    }
  }
}
```

## 语音合成

```json
{
  "text_to_voice": "mimo",
  "text_to_voice_model": "mimo-v2.5-tts",
  "tts_voice_id": "冰糖"
}
```

| 参数 | 说明 |
| --- | --- |
| `text_to_voice_model` | 当前仅支持 `mimo-v2.5-tts`（预置音色 + 唱歌模式） |
| `tts_voice_id` | 预置音色名（中文音色直接使用中文名作为 ID） |

### 预置音色

| 音色 ID | 说明 |
| --- | --- |
| `冰糖` | 中文 · 女声（默认） |
| `茉莉` | 中文 · 女声 |
| `苏打` | 中文 · 男声 |
| `白桦` | 中文 · 男声 |
| `Mia` | 英文 · 女声 |
| `Chloe` | 英文 · 女声 |
| `Milo` | 英文 · 男声 |
| `Dean` | 英文 · 男声 |

也可在 Web 控制台的「模型管理 → 语音合成」下拉框中可视化选择。

### 风格控制

MiMo TTS 支持在合成文本中嵌入 **音频标签** 来控制情绪、语调、方言、角色甚至唱歌。标签需出现在 **最终被合成为语音的文本（即 Agent 回复内容）** 中，整体风格标签写在开头：

```
(风格)待合成内容
```

支持半角 `()`、全角 `（）` 或 `[]` 三种括号。常见风格示例：

| 类型 | 示例标签 |
| --- | --- |
| 基础情绪 | `开心` `悲伤` `愤怒` `恐惧` `惊讶` `兴奋` `委屈` `平静` `冷漠` |
| 复合情绪 | `怅然` `欣慰` `无奈` `愧疚` `释然` `忐忑` `动情` |
| 整体语调 | `温柔` `高冷` `活泼` `严肃` `慵懒` `俏皮` `深沉` `干练` `凌厉` |
| 音色定位 | `磁性` `醇厚` `清亮` `空灵` `稚嫩` `苍老` `甜美` `沙哑` |
| 人设腔调 | `夹子音` `御姐音` `正太音` `大叔音` `台湾腔` |
| 方言 | `东北话` `四川话` `河南话` `粤语` |
| 角色扮演 | `孙悟空` `林黛玉` |
| 唱歌 | `唱歌`（等价于 `sing` / `singing`） |

示例：

- (磁性)夜已经深了，城市还在呼吸。
- (东北话)哎呀妈呀，这天儿也忒冷了吧！
- (粤语)呢个真係好正啊！
- (唱歌)原谅我这一生不羁放纵爱自由…

也可以在文本任意位置插入细粒度音频标签来控制呼吸、笑声、停顿等，例如：

```
（紧张，深呼吸）呼……冷静，冷静。（语速加快）自我介绍我背了五十遍了，应该没问题。
```

完整标签列表参见 [MiMo 语音合成文档](https://platform.xiaomimimo.com/docs/zh-CN/usage-guide/speech-synthesis-v2.5)。

<Tip>
  CowAgent 在调用 TTS 时会将 Agent 的回复原文（含 `(...)` 标签）直接送入 MiMo 合成。你可以在人设 / 系统提示词里要求模型「在回复开头用 `(风格)` 标签控制语气」，即可让 IM 渠道（微信 / 飞书 / 钉钉 / 企微）的语音回复带上情绪、方言、唱歌等效果。
</Tip>
````

## File: docs/models/minimax.mdx
````markdown
---
title: MiniMax
description: MiniMax 模型配置（文本 / 图像理解 / 图像生成 / 语音合成）
---

MiniMax 支持文本对话、图像理解、图像生成与语音合成，一份 `minimax_api_key` 即可启用全部能力。

<Tip>
  通过 Web 控制台的「模型管理」页面可一站式配置以下全部能力，无需手动改配置文件。
</Tip>

## 文本对话

```json
{
  "model": "MiniMax-M2.7",
  "minimax_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | 可填 `MiniMax-M2.7`、`MiniMax-M2.7-highspeed`、`MiniMax-M2.5`、`MiniMax-M2.1`、`MiniMax-M2.1-lightning`、`MiniMax-M2` 等 |
| `minimax_api_key` | 在 [MiniMax 控制台](https://platform.minimaxi.com/user-center/basic-information/interface-key) 创建 |

## 图像理解

MiniMax 的 M2.x 系列 chat 模型本身不支持视觉，视觉调用统一路由到 `MiniMax-Text-01`。配置 `minimax_api_key` 后 Agent 的 Vision 工具会自动使用该模型，无需在配置文件中显式指定。

## 图像生成

```json
{
  "skills": {
    "image-generation": {
      "model": "image-01"
    }
  }
}
```

可选模型：`image-01`。

## 语音合成

```json
{
  "text_to_voice": "minimax",
  "text_to_voice_model": "speech-2.8-hd",
  "tts_voice_id": "female-shaonv"
}
```

| 参数 | 说明 |
| --- | --- |
| `text_to_voice_model` | `speech-2.8-hd`（情绪渲染、自然听感）、`speech-2.8-turbo`（极速）、`speech-2.6-hd`、`speech-2.6-turbo` |
| `tts_voice_id` | 音色 ID，支持中文 / 粤语 / 英 / 日 / 韩，共 70+ 种 |

常用音色示例：

| 音色 ID | 说明 |
| --- | --- |
| `female-shaonv` | 中文 · 少女（女） |
| `female-yujie` | 中文 · 御姐（女） |
| `female-tianmei` | 中文 · 甜美女性（女） |
| `male-qn-jingying` | 中文 · 精英青年（男） |
| `male-qn-badao` | 中文 · 霸道青年（男） |
| `Cantonese_GentleLady` | 粤语 · 温柔女声 |
| `English_Graceful_Lady` | 英文 · Graceful Lady |

完整音色（中文 / 粤语 / 英 / 日 / 韩共 70+ 种）可参考 [系统音色列表](https://platform.minimaxi.com/docs/faq/system-voice-id)，也可在 Web 控制台的「模型管理 → 语音合成」下拉框中可视化选择。
````

## File: docs/models/openai.mdx
````markdown
---
title: OpenAI
description: OpenAI 模型配置（文本 / 视觉 / 图像 / 语音 / 向量）
---

OpenAI 是覆盖最完整的厂商，可同时承担文本对话、视觉理解、图像生成、语音识别（ASR）、语音合成（TTS）和向量（Embedding）能力。一份 `open_ai_api_key` 即可让 Agent 用到全部能力。

<Tip>
  通过 Web 控制台的「模型管理」页面可一站式配置以下全部能力，无需手动改配置文件。
</Tip>


## 文本对话

```json
{
  "model": "gpt-5.5",
  "open_ai_api_key": "YOUR_API_KEY",
  "open_ai_api_base": "https://api.openai.com/v1"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | 与 OpenAI 接口的 [model 参数](https://platform.openai.com/docs/models) 一致，支持 `gpt-5.5`、`gpt-5.4`、`gpt-5.4-mini`、`gpt-5.4-nano`、`gpt-5` 系列、`gpt-4.1`、o 系列等；Agent 模式默认 `gpt-5.5`，追求性价比可改为 `gpt-5.4` |
| `open_ai_api_key` | 在 [OpenAI 平台](https://platform.openai.com/api-keys) 创建 |
| `open_ai_api_base` | 可选，修改可接入第三方代理 |
| `bot_type` | 使用 OpenAI 官方模型时无需填写；通过兼容协议接入厂商模型时需设为 `openai` |

## 图像理解

`gpt-5.5`、`gpt-5.4`、`gpt-4o`、`gpt-4.1` 等 OpenAI 模型均原生支持视觉，配置 `open_ai_api_key` 后 Agent 的 Vision 工具会自动使用主模型识别图像。若主模型不支持视觉或希望显式指定，可在配置文件中配置：

```json
{
  "tools": {
    "vision": {
      "model": "gpt-5.4-mini"
    }
  }
}
```

支持的 Vision 模型：`gpt-5.5`、`gpt-5.4`、`gpt-5.4-mini`、`gpt-5.4-nano`、`gpt-5`、`gpt-4.1`、`gpt-4.1-mini`、`gpt-4o`。

## 图像生成

在配置文件中指定图像生成模型，Agent 调用图像生成技能时会自动路由到 OpenAI：

```json
{
  "skills": {
    "image-generation": {
      "model": "gpt-image-2"
    }
  }
}
```

支持的图像生成模型：`gpt-image-2`、`gpt-image-1`。

## 语音识别

```json
{
  "voice_to_text": "openai",
  "voice_to_text_model": "gpt-4o-mini-transcribe"
}
```

| 参数 | 说明 |
| --- | --- |
| `voice_to_text` | 设为 `openai` 启用 OpenAI 语音识别 |
| `voice_to_text_model` | 可选，默认 `gpt-4o-mini-transcribe`；也可填 `gpt-4o-transcribe`、`whisper-1` |

凭证自动复用 `open_ai_api_key`。

## 语音合成

```json
{
  "text_to_voice": "openai",
  "text_to_voice_model": "tts-1",
  "tts_voice_id": "alloy"
}
```

| 参数 | 说明 |
| --- | --- |
| `text_to_voice_model` | `tts-1`、`tts-1-hd`、`gpt-4o-mini-tts` |
| `tts_voice_id` | 音色：`alloy`、`echo`、`fable`、`onyx`、`nova`、`shimmer`、`ash`、`ballad`、`coral`、`sage`、`verse` |

## 向量

```json
{
  "embedding_provider": "openai",
  "embedding_model": "text-embedding-3-small"
}
```

可选模型：`text-embedding-3-small`、`text-embedding-3-large`、`text-embedding-ada-002`。修改 embedding 后需执行 `/memory rebuild-index` 命令重建索引。
````

## File: docs/models/qianfan.mdx
````markdown
---
title: 百度千帆
description: 百度千帆 ERNIE 模型配置（文本对话 + 图像理解）
---

百度千帆提供 ERNIE 系列模型，支持文本对话与图像理解。

<Tip>
  通过 Web 控制台的「模型管理」页面可一站式配置以下全部能力，无需手动改配置文件。
</Tip>

## 文本对话

```json
{
  "model": "ernie-5.1",
  "qianfan_api_key": "YOUR_API_KEY",
  "qianfan_api_base": "https://qianfan.baidubce.com/v2"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | 默认推荐使用 `ernie-5.1`；也可使用 `ernie-5.0`、`ernie-x1.1`、`ernie-4.5-turbo-128k`、`ernie-4.5-turbo-32k` |
| `qianfan_api_key` | 千帆 API Key，格式通常以 `bce-v3/` 开头 |
| `qianfan_api_base` | 可选，默认为 `https://qianfan.baidubce.com/v2` |

### 模型选择

| 模型 | 适用场景 |
| --- | --- |
| `ernie-5.1` | 默认推荐，文心新一代旗舰模型，综合能力最强 |
| `ernie-5.0` | 上一代旗舰模型，综合能力优异 |
| `ernie-x1.1` | 深度思考推理模型，幻觉更低、指令遵循与工具调用更强 |
| `ernie-4.5-turbo-128k` | 长上下文和通用对话 |
| `ernie-4.5-turbo-32k` | 通用对话，成本和上下文更均衡 |

## 图像理解

配置 `qianfan_api_key` 后，Agent 的 Vision 工具可以自动使用千帆视觉模型：

- 当主模型本身是多模态时（如 `ernie-5.1`、`ernie-5.0`、`ernie-x1.1`、`ernie-4.5-turbo-vl`），直接由主模型识别图像，无需额外配置
- 当主模型是纯文本时（如 `ernie-4.5-turbo-128k`），Vision 工具会自动 fallback 到 `ernie-4.5-turbo-vl`

如需手动指定 Vision 模型，可在配置文件中显式配置：

```json
{
  "tools": {
    "vision": {
      "model": "ernie-4.5-turbo-vl"
    }
  }
}
```

<Tip>
  新配置推荐使用 `qianfan_api_key`。旧的 `wenxin`、`wenxin-4`、`baidu_wenxin_api_key`、`baidu_wenxin_secret_key` 配置仍保持兼容。
</Tip>
````

## File: docs/models/qwen.mdx
````markdown
---
title: 通义千问 Qwen
description: 通义千问模型配置（文本 / 图像理解 / 图像生成 / 语音识别 / 语音合成 / 向量）
---

通义千问（DashScope / 百炼）是国内覆盖最完整的厂商之一，文本、图像理解、图像生成、语音识别、语音合成与向量能力均可用一份 `dashscope_api_key` 启用。

<Tip>
  通过 Web 控制台的「模型管理」页面可一站式配置以下全部能力，无需手动改配置文件。
</Tip>

## 文本对话

```json
{
  "model": "qwen3.6-plus",
  "dashscope_api_key": "YOUR_API_KEY"
}
```

| 参数 | 说明 |
| --- | --- |
| `model` | 可填 `qwen3.6-plus`、`qwen3.7-max`、`qwen3.5-plus`、`qwen3-max`、`qwen-max`、`qwen-plus`、`qwen-turbo`、`qwq-plus` 等 |
| `dashscope_api_key` | 在 [百炼控制台](https://bailian.console.aliyun.com/?tab=model#/api-key) 创建，参考 [官方文档](https://bailian.console.aliyun.com/?tab=api#/api) |

## 图像理解

配置 `dashscope_api_key` 后 Agent 的 Vision 工具会自动调用千问的视觉模型识别图像。`qwen3-max` / `qwen3.5-plus` / `qwen3.6-plus` 等模型本身就是多模态；若主模型是纯文本（如 `qwen-turbo`），会自动回落到 `qwen-vl-max`。

如需手动指定 Vision 模型：

```json
{
  "tools": {
    "vision": {
      "model": "qwen3.6-plus"
    }
  }
}
```

支持模型：`qwen3.6-plus`、`qwen3.5-plus`、`qwen3-max`。

## 图像生成

```json
{
  "skills": {
    "image-generation": {
      "model": "qwen-image-2.0"
    }
  }
}
```

可选模型：`qwen-image-2.0`、`qwen-image-2.0-pro`。

## 语音识别

```json
{
  "voice_to_text": "dashscope",
  "voice_to_text_model": "qwen3-asr-flash"
}
```

| 参数 | 说明 |
| --- | --- |
| `voice_to_text` | 设为 `dashscope` 启用通义千问 ASR |
| `voice_to_text_model` | 可选，默认 `qwen3-asr-flash` |

凭证自动复用 `dashscope_api_key`。单段音频建议小于 10MB、时长不超过 300 秒。

## 语音合成

```json
{
  "text_to_voice": "dashscope",
  "text_to_voice_model": "qwen3-tts-flash",
  "tts_voice_id": "Cherry"
}
```

| 参数 | 说明 |
| --- | --- |
| `text_to_voice_model` | 可选，默认 `qwen3-tts-flash`，覆盖普通话、方言与主流外语 |
| `tts_voice_id` | 音色 ID，详见下方常用列表 |

常用音色示例：

| 音色 ID | 说明 |
| --- | --- |
| `Cherry` | 芊悦 · 阳光女声 |
| `Serena` | 苏瑶 · 温柔女声 |
| `Ethan` | 晨煦 · 阳光男声 |
| `Chelsie` | 千雪 · 二次元少女 |
| `Dylan` | 北京话 · 晓东 |
| `Rocky` | 粤语 · 阿强 |
| `Sunny` | 四川话 · 晴儿 |

完整音色（普通话 / 各地方言 / 双语等）可在 Web 控制台的「模型管理 → 语音合成」下拉框中可视化选择。

## 向量

```json
{
  "embedding_provider": "dashscope",
  "embedding_model": "text-embedding-v4"
}
```

默认模型 `text-embedding-v4`。修改 embedding 后需执行 `/memory rebuild-index` 命令重建索引。
````

## File: docs/README.md
````markdown
# Documentation

This directory contains the Mintlify documentation site for the project.

## Prerequisites

- Node.js v20.17.0 or higher (LTS recommended)

## Install the CLI (one-time, global)

```bash
npm i -g mint
```

## Run the docs locally

From this `docs/` directory:

```bash
mint dev
```

Then open http://localhost:3000 (or the port Mint reports if 3000 is in use).

> The first run downloads the Mint preview framework (~90 MB) into `~/.mintlify/`.
> Subsequent runs start instantly from the local cache.

## More

- Mintlify docs: https://www.mintlify.com/docs
````

## File: docs/releases/overview.mdx
````markdown
---
title: 更新日志
description: CowAgent 版本更新历史
---

| 版本 | 日期 | 说明 |
| --- | --- | --- |
| [2.0.9](/releases/v2.0.9) | 2026.05.22 | 新增模型管理、MCP 协议支持、浏览器登录态持久化、新模型接入（gpt-5.5、gemini-3.5-flash、qwen3.7-max 等）、部署安全加固 |
| [2.0.8](/releases/v2.0.8) | 2026.05.06 | 飞书渠道全面升级（语音、流式输出和Markdown、扫码一键接入）、DeepSeek V4和百度模型新增、定时任务工具增强 |
| [2.0.7](/releases/v2.0.7) | 2026.04.22 | 图像生成技能（六厂商自动路由）、新模型支持（Kimi K2.6、Claude Opus 4.7、GLM 5.1）、知识库增强、Web 控制台优化 |
| [2.0.6](/releases/v2.0.6) | 2026.04.14 | 项目更名、知识库系统、梦境记忆蒸馏、上下文智能压缩、Web 控制台多会话及多项优化 |
| [2.0.5](/releases/v2.0.5) | 2026.04.01 | Cow CLI、Skill Hub 开源、浏览器工具、企微扫码创建、多项优化和修复 |
| [2.0.4](/releases/v2.0.4) | 2026.03.22 | 新增个人微信通道、新模型支持、日文文档、脚本重构及多项修复 |
| [2.0.3](/releases/v2.0.3) | 2026.03.18 | 新增企微智能机器人和 QQ 通道、支持Coding Plan、新增多个模型、Web端文件处理、记忆系统升级 |
| [2.0.2](/releases/v2.0.2) | 2026.02.27 | Web 控制台升级、多通道同时运行、会话持久化 |
| [2.0.1](/releases/v2.0.1) | 2026.02.13 | 内置 Web Search 工具、智能上下文管理、多项修复 |
| [2.0.0](/releases/v2.0.0) | 2026.02.03 | 全面升级为超级 Agent 助理 |
| 1.7.6 | 2025.05.23 | Web Channel 优化、AgentMesh 多智能体插件 |
| 1.7.5 | 2025.04.11 | DeepSeek 模型 |
| 1.7.4 | 2024.12.13 | Gemini 2.0 模型、Web Channel |
| 1.7.3 | 2024.10.31 | 稳定性提升、数据库功能 |
| 1.7.2 | 2024.09.26 | 一键安装脚本、o1 模型 |
| 1.7.0 | 2024.08.02 | 讯飞 4.0 模型、知识库引用 |
| 1.6.9 | 2024.07.19 | gpt-4o-mini、阿里语音识别 |
| 1.6.8 | 2024.07.05 | Claude 3.5、Gemini 1.5 Pro |
| 1.6.0 | 2024.04.26 | Kimi 接入、gpt-4-turbo 升级 |
| 1.5.8 | 2024.03.26 | GLM-4、Claude-3、edge-tts |
| 1.5.2 | 2023.11.10 | 飞书通道、图像识别对话 |
| 1.5.0 | 2023.11.10 | gpt-4-turbo、dall-e-3、tts 多模态 |
| 1.0.0 | 2022.12.12 | 项目创建，首次接入 ChatGPT 模型 |

更多历史版本请查看 [GitHub Releases](https://github.com/zhayujie/CowAgent/releases)。
````

## File: docs/releases/v2.0.0.mdx
````markdown
---
title: v2.0.0
description: CowAgent 2.0 - 从聊天机器人到超级智能助理的全面升级
---

CowAgent 2.0 实现了从聊天机器人到**超级智能助理**的全面升级！现在它能够主动思考和规划任务、拥有长期记忆、操作计算机和外部资源、创造和执行技能，真正理解你并和你一起成长。

**发布日期**：2026.02.03 | [GitHub Release](https://github.com/zhayujie/CowAgent/releases/tag/2.0.0)

## 重点更新

### Agent 核心能力

- **复杂任务规划**：能够理解复杂任务并自主规划执行，持续思考和调用工具直到完成目标，支持多轮推理和上下文理解
- **长期记忆**：自动将对话记忆持久化至本地文件和数据库中，包括全局记忆和天级记忆，支持关键词及向量检索
- **内置系统工具**：内置实现 10+ 种工具，包括文件操作、Bash 终端、浏览器、文件发送、定时任务、记忆管理等
- **Skills**：新增 Skill 运行引擎，内置多种技能，并支持通过自然语言对话完成自定义 Skills 开发
- **安全和成本**：通过秘钥管理工具、提示词控制、系统权限等手段控制 Agent 的访问安全；通过最大记忆轮次、最大上下文 token、工具执行步数对 token 成本进行限制

### 其他更新

- **渠道优化**：飞书及钉钉接入渠道支持长连接接入（无需公网 IP）、支持图片/文件消息的接收和发送
- **模型更新**：新增 claude-sonnet-4-5、gemini-3-pro-preview、glm-4.7、MiniMax-M2.1、qwen3-max 等最新模型
- **部署优化**：增加一键安装、配置、运行、管理的脚本，简化部署流程

## 长期记忆系统

Agent 会在用户分享重要信息时主动存储，也会在对话达到一定长度时自动提取摘要。支持语义搜索和向量检索的混合检索模式。

**首次启动**时，Agent 会主动询问关键信息，并记录至工作空间（默认 `~/cow`）中的智能体设定、用户身份、记忆文件中。

**长期对话**中，Agent 会智能记录或检索记忆，不断更新自身设定、用户偏好，总结经验和教训，真正实现自主思考和持续成长。

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260203000455.png" width="800" />
</Frame>

## 任务规划与工具调用

Agent 根据任务需求智能选择和调用工具，完成各类复杂操作。

### 终端和文件访问

最基础和核心的工具能力，用户可通过手机端与 Agent 交互，操作个人电脑或服务器上的资源：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202181130.png" width="800" />
</Frame>

### 应用编程能力

基于编程能力和系统访问能力，Agent 可实现从信息搜索、素材生成、编码、测试、部署、Nginx 配置、发布的 **Vibecoding 全流程**，通过手机端一句命令完成应用快速 demo。

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260203121008.png" width="800" />
</Frame>

### 定时任务

支持 **一次性任务、固定时间间隔、Cron 表达式** 三种形式，任务触发可选择 **固定消息发送** 或 **Agent 动态任务执行** 两种模式：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202195402.png" width="800" />
</Frame>

### 环境变量管理

通过 `env_config` 工具管理技能所需秘钥，支持对话式更新，内置安全保护和脱敏策略：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202234939.png" width="800" />
</Frame>

## 技能系统

每个 Skill 由说明文件、运行脚本（可选）、资源（可选）组成，为 Agent 提供无限扩展性。

### 技能创造器

通过对话方式快速创建技能，将工作流程固化或对接任意第三方接口：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202202247.png" width="800" />
</Frame>

### 网页搜索和图像识别

- **网页搜索**：内置 `web_search` 工具，支持多种搜索引擎，配置对应 API Key 即可使用
- **图像识别**：支持 `gpt-4.1-mini`、`gpt-4.1` 等模型，配置 `OPENAI_API_KEY` 即可使用

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202213219.png" width="800" />
</Frame>

### 三方知识库和插件

`linkai-agent` 技能可将 [LinkAI](https://link-ai.tech/) 上的所有智能体作为 Skill 使用，实现多智能体决策：

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202234350.png" width="750" />
</Frame>

## 参与共建

2.0 版本后，项目将持续升级 Agent 能力、拓展接入渠道、内置工具、技能系统，降低模型成本和提升安全性。欢迎 [提出反馈](https://github.com/zhayujie/CowAgent/issues) 和 [贡献代码](https://github.com/zhayujie/CowAgent/pulls)。
````

## File: docs/releases/v2.0.1.mdx
````markdown
---
title: v2.0.1
description: CowAgent 2.0.1 - 内置 Web Search、智能上下文管理、多项修复
---

**发布日期**：2026.02 | [GitHub Release](https://github.com/zhayujie/CowAgent/releases/tag/2.0.1) | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.0..2.0.1)

## 新特性

- **内置 Web Search 工具**：将网络搜索作为 Agent 内置工具集成，降低决策成本 ([4f0ea5d](https://github.com/zhayujie/CowAgent/commit/4f0ea5d7568d61db91ff69c91c429e785fd1b1c2))
- **Claude Opus 4.6 模型支持**：新增对 Claude Opus 4.6 模型的支持 ([#2661](https://github.com/zhayujie/CowAgent/pull/2661))
- **企业微信图片消息识别**：支持企业微信渠道的图片消息识别功能 ([#2667](https://github.com/zhayujie/CowAgent/pull/2667))

## 优化

- **智能上下文管理**：解决聊天上下文溢出问题，新增智能上下文裁剪策略，防止 token 超限 ([cea7fb7](https://github.com/zhayujie/CowAgent/commit/cea7fb7490c53454602bf05955a0e9f059bcf0fd), [8acf2db](https://github.com/zhayujie/CowAgent/commit/8acf2dbdfe713b84ad74b761b7f86674b1c1904d)) [#2663](https://github.com/zhayujie/CowAgent/issues/2663)
- **运行时信息动态更新**：通过动态函数方案实现系统提示词中时间戳等运行时信息的自动更新 ([#2655](https://github.com/zhayujie/CowAgent/pull/2655), [#2657](https://github.com/zhayujie/CowAgent/pull/2657))
- **Skill 提示词优化**：改进 Skill 系统提示词生成逻辑，简化工具描述，提升 Agent 表现 ([6c21833](https://github.com/zhayujie/CowAgent/commit/6c218331b1f1208ea8be6bf226936d3b556ade3e))
- **智谱 AI 自定义 API Base URL**：支持智谱 AI 配置自定义 API Base URL ([#2660](https://github.com/zhayujie/CowAgent/pull/2660))
- **启动脚本优化**：改进 `run.sh` 脚本的交互体验和配置流程 ([#2656](https://github.com/zhayujie/CowAgent/pull/2656))
- **决策轮次日志**：新增 Agent 决策轮次的日志记录，便于调试 ([cb303e6](https://github.com/zhayujie/CowAgent/commit/cb303e6109c50c8dfef1f5e6c1ec47223bf3cd11))

## 问题修复

- **定时任务记忆丢失**：修复 Scheduler 调度器导致的记忆丢失问题 ([a77a874](https://github.com/zhayujie/CowAgent/commit/a77a8741b500a408c6f5c8868856fb4b018fe9db))
- **空工具调用与超长结果**：修复空 tool calls 及过长工具返回结果的异常处理 ([0542700](https://github.com/zhayujie/CowAgent/commit/0542700f9091ebb08c1a56103b0f0f45f24aa621))
- **OpenAI Function Call**：修复 OpenAI 模型的 function call 调用兼容性问题 ([158c87a](https://github.com/zhayujie/CowAgent/commit/158c87ab8b05bae054cc1b4eacdbb64fc1062ba9))
- **Claude 工具名字段**：移除 Claude 模型响应中多余的 tool name 字段 ([eec10cb](https://github.com/zhayujie/CowAgent/commit/eec10cb5db6a3d5bc12ef606606532237d2c5f6e))
- **MiniMax 推理优化**：优化 MiniMax 模型 reasoning content 处理，隐藏思考过程输出 ([c72cda3](https://github.com/zhayujie/CowAgent/commit/c72cda33864bd1542012ee6e0a8bd8c6c88cb5ed), [72b1cac](https://github.com/zhayujie/CowAgent/commit/72b1cacea1ba0d1f3dedacbab2e088e98fd7e172))
- **智谱 AI 思考过程**：隐藏智谱 AI 模型的思考过程展示 ([72b1cac](https://github.com/zhayujie/CowAgent/commit/72b1cacea1ba0d1f3dedacbab2e088e98fd7e172))
- **飞书连接与证书**：修复飞书渠道的 SSL 证书错误和连接异常问题 ([229b14b](https://github.com/zhayujie/CowAgent/commit/229b14b6fcabe7123d53cab1dea39f38dab26d6d), [8674421](https://github.com/zhayujie/CowAgent/commit/867442155e7f095b4f38b0856f8c1d8312b5fcf7))
- **model_type 类型校验**：修复非字符串 `model_type` 导致的 `AttributeError` ([#2666](https://github.com/zhayujie/CowAgent/pull/2666))

## 平台兼容

- **Windows 兼容性适配**：修复 Windows 平台下路径处理、文件编码及 `os.getuid()` 不可用等问题，涉及多个工具模块 ([051ffd7](https://github.com/zhayujie/CowAgent/commit/051ffd78a372f71a967fd3259e37fe19131f83cf), [5264f7c](https://github.com/zhayujie/CowAgent/commit/5264f7ce18360ee4db5dcb4ebe67307977d40014))
````

## File: docs/releases/v2.0.2.mdx
````markdown
---
title: v2.0.2
description: CowAgent 2.0.2 - Web 控制台升级、多通道同时运行、会话持久化
---

## ✨ 重点更新

### 🖥️ Web 控制台升级

本次对 Web 控制台进行了全面升级，支持流式对话输出、工具执行过程和思考过程的可视化展示，并支持对模型、技能、记忆、通道、Agent 配置的在线查看和管理。

#### 对话界面

支持流式输出，可实时展示 Agent 的思考过程（Reasoning）和工具调用过程（Tool Calls），更直观地观察 Agent 的决策过程：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227180120.png" />

#### 模型管理

支持在线管理模型配置，无需手动编辑配置文件：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173811.png" />

#### 技能管理

支持在线查看和管理 Agent 技能（Skills）：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173403.png" />

#### 记忆管理

支持在线查看和管理 Agent 记忆：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173349.png" />

#### 通道管理

支持在线管理接入通道，支持实时连接/断开操作：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173331.png" />

#### 定时任务

支持在线查看和管理定时任务，包括一次性任务、固定间隔、Cron 表达式等多种调度方式的可视化管理：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173704.png" />

#### 日志

支持在线实时查看 Agent 运行日志，便于监控运行状态和排查问题：

<img width="850" src="https://cdn.link-ai.tech/doc/20260227173514.png" />

相关提交：[f1a1413](https://github.com/zhayujie/CowAgent/commit/f1a1413), [c0702c8](https://github.com/zhayujie/CowAgent/commit/c0702c8), [394853c](https://github.com/zhayujie/CowAgent/commit/394853c), [1c71c4e](https://github.com/zhayujie/CowAgent/commit/1c71c4e), [5e3eccb](https://github.com/zhayujie/CowAgent/commit/5e3eccb), [e1dc037](https://github.com/zhayujie/CowAgent/commit/e1dc037), [5edbf4c](https://github.com/zhayujie/CowAgent/commit/5edbf4c), [7d258b5](https://github.com/zhayujie/CowAgent/commit/7d258b5)

### 🔀 多通道同时运行

支持多个接入通道（如飞书、钉钉、企微应用、Web 等）同时运行，每个通道在独立子线程中启动，互不干扰。

配置方式：在 `config.json` 中通过 `channel_type` 配置多个通道，以逗号分隔，也可在 Web 控制台的通道管理页面中实时连接或断开各通道。

```json
{
  "channel_type": "web,feishu,dingtalk"
}
```

相关提交：[4694594](https://github.com/zhayujie/CowAgent/commit/4694594), [7cce224](https://github.com/zhayujie/CowAgent/commit/7cce224), [7d258b5](https://github.com/zhayujie/CowAgent/commit/7d258b5), [c9adddb](https://github.com/zhayujie/CowAgent/commit/c9adddb)

### 💾 会话持久化

会话历史支持持久化存储至本地 SQLite 数据库，服务重启后会话上下文自动恢复，不再丢失。Web 控制台中的历史对话记录也会同步恢复展示。

相关提交：[29bfbec](https://github.com/zhayujie/CowAgent/commit/29bfbec), [9917552](https://github.com/zhayujie/CowAgent/commit/9917552), [925d728](https://github.com/zhayujie/CowAgent/commit/925d728)

### 🤖 新增模型

- **Gemini 3.1 Pro Preview**：新增 `gemini-3.1-pro-preview` 模型支持 ([52d7cad](https://github.com/zhayujie/CowAgent/commit/52d7cad))
- **Claude 4.6 Sonnet**：新增 `claude-4.6-sonnet` 模型支持 ([52d7cad](https://github.com/zhayujie/CowAgent/commit/52d7cad))
- **Qwen3.5 Plus**：新增 `qwen3.5-plus` 模型支持 ([e59a289](https://github.com/zhayujie/CowAgent/commit/e59a289))
- **MiniMax M2.5**：新增 `Minimax-M2.5` 模型支持 ([48db538](https://github.com/zhayujie/CowAgent/commit/48db538))
- **GLM-5**：新增 `glm-5` 模型支持 ([48db538](https://github.com/zhayujie/CowAgent/commit/48db538))
- **Kimi K2.5**：新增 `kimi-k2.5` 模型支持 ([48db538](https://github.com/zhayujie/CowAgent/commit/48db538))
- **Doubao 2.0 Code**：新增 `doubao-2.0-code` 编程专用模型 ([ab28ee5](https://github.com/zhayujie/CowAgent/commit/ab28ee5))
- **DashScope 模型**：新增阿里云 DashScope 模型名称支持 ([ce58f23](https://github.com/zhayujie/CowAgent/commit/ce58f23))

### 🌐 新增官网和文档中心

- **官网上线**：[cowagent.ai](https://cowagent.ai/)
- **文档中心上线**：[docs.cowagent.ai](https://docs.cowagent.ai/)

### 🐛 问题修复

- **Gemini 钉钉图片识别**：修复 Gemini 在钉钉通道中无法处理图片标记的问题 ([05a3304](https://github.com/zhayujie/CowAgent/commit/05a3304)) ([#2670](https://github.com/zhayujie/CowAgent/pull/2670)) Thanks [@SgtPepper114](https://github.com/SgtPepper114)
- **启动脚本依赖**：修复 `run.sh` 脚本的依赖安装问题 ([b6fc9fa](https://github.com/zhayujie/CowAgent/commit/b6fc9fa))
- **裸异常捕获**：将代码中的 `bare except` 替换为 `except Exception`，提升异常处理规范性 ([adca89b](https://github.com/zhayujie/CowAgent/commit/adca89b)) ([#2674](https://github.com/zhayujie/CowAgent/pull/2674)) Thanks [@haosenwang1018](https://github.com/haosenwang1018)

**发布日期**：2026.02.27 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.1...master)
````

## File: docs/releases/v2.0.3.mdx
````markdown
---
title: v2.0.3
description: CowAgent 2.0.3 - 新增企微智能机器人和 QQ 通道、Web 控制台文件处理、记忆系统升级
---

## 🔌 新增接入通道

### 企业微信智能机器人

新增企业微信智能机器人（`wecom_bot`）通道，支持流式卡片消息输出，支持文本和图片消息的接收与回复，可在 Web 控制台中进行通道配置和管理。

接入文档：[企微智能机器人接入](https://docs.cowagent.ai/channels/wecom-bot)。

相关提交：[d4480b6](https://github.com/zhayujie/CowAgent/commit/d4480b6), [a42f31f](https://github.com/zhayujie/CowAgent/commit/a42f31f), [4ecd4df](https://github.com/zhayujie/CowAgent/commit/4ecd4df), [8b45d6c](https://github.com/zhayujie/CowAgent/commit/8b45d6c)

### QQ 通道

新增 QQ 官方机器人（`qq`）通道，支持文本和图片消息的接收与回复，支持私聊和群聊场景。

接入文档参考：[QQ机器人接入](https://docs.cowagent.ai/channels/qq)。

相关提交：[005a0e1](https://github.com/zhayujie/CowAgent/commit/005a0e1), [a4d54f5](https://github.com/zhayujie/CowAgent/commit/a4d54f5)

## 🖥️ Web 控制台支持文件输入和处理

Web 控制台对话界面支持文件和图片上传，可直接发送文件给 Agent 进行处理。同时 Read 工具新增对 Office 文档（Word、Excel、PPT）的解析能力。

相关提交：[30c6d9b](https://github.com/zhayujie/CowAgent/commit/30c6d9b)

## 🤖 新增模型

- **GPT-5.4 系列**：新增 `gpt-5.4`、`gpt-5.4-mini`、`gpt-5.4-nano` 模型支持 ([1623deb](https://github.com/zhayujie/CowAgent/commit/1623deb))
- **Gemini 3.1 Flash Lite Preview**：新增 `gemini-3.1-flash-lite-preview` 模型支持 ([ba915f2](https://github.com/zhayujie/CowAgent/commit/ba915f2))

## 💰 Coding Plan 支持

新增各厂商 Coding Plan（编程包月套餐）的接入支持，通过 OpenAI 兼容方式统一接入。目前已支持阿里云、MiniMax、智谱 GLM、Kimi、火山引擎等厂商。

详细配置参考 [Coding Plan 文档](https://docs.cowagent.ai/models/coding-plan)。

## 🧠 记忆系统升级

记忆写入（Memory Flush）升级：

- 使用 LLM 对超出上下文窗口的对话内容进行智能摘要，生成精炼的每日记忆条目
- 摘要在后台线程异步执行，不阻塞回复
- 优化上下文批量裁剪策略，降低冲刷频率
- 新增每日定时冲刷兜底机制，避免低活跃场景下记忆丢失
- 修复上下文记忆丢失问题

相关提交：[022c13f](https://github.com/zhayujie/CowAgent/commit/022c13f), [c116235](https://github.com/zhayujie/CowAgent/commit/c116235)

## 🔧 工具重构

- **图片识别**：将图片识别（Image Vision）从 Skill 重构为内置 Tool，新增独立的图片视觉提供方（Vision Provider）配置，提升稳定性和可维护性 ([a50fafa](https://github.com/zhayujie/CowAgent/commit/a50fafa), [3b8b562](https://github.com/zhayujie/CowAgent/commit/3b8b562))
- **网页抓取**：将网页抓取（Web Fetch）从 Skill 重构为内置 Tool，支持远程文档文件（PDF、Word、Excel、PPT）的下载和解析 ([ccb9030](https://github.com/zhayujie/CowAgent/commit/ccb9030), [fa61744](https://github.com/zhayujie/CowAgent/commit/fa61744))

## 🐳 Docker 部署优化

- **配置模板对齐**：`docker-compose.yml` 环境变量与 `config-template.json` 对齐，补充完整的模型 API Key 和 Agent 等配置项
- **Web 控制台端口映射**：新增 `9899` 端口映射，Docker 部署后可通过浏览器访问 Web 控制台
- **配置热更新**：各模型 Bot 的 API Key 和 API Base 改为实时读取，通过 Web 控制台修改配置后无需重启即可生效
- **工作空间持久化**：新增 `./cow` Volume 挂载，Agent 工作空间数据（记忆、人格、技能等）持久化到宿主机，容器重建或升级不丢失

## ⚡ 性能优化

- **启动加速**：飞书通道采用懒加载方式导入依赖，避免 4-10 秒的启动延迟 ([924dc79](https://github.com/zhayujie/CowAgent/commit/924dc79))
- **通道稳定性**：优化通道连接稳定性，支持通道配置通过环境变量设置 ([f1c04bc](https://github.com/zhayujie/CowAgent/commit/f1c04bc), [46d97fd](https://github.com/zhayujie/CowAgent/commit/46d97fd))

## 🐛 问题修复

- **bot_type 配置**：修复 Agent 模式下 `bot_type` 配置传递问题 ([#2691](https://github.com/zhayujie/CowAgent/pull/2691)) Thanks [@Weikjssss](https://github.com/Weikjssss)
- **bot_type 优先级**：调整 Agent 模式下 `bot_type` 的解析优先级 ([#2692](https://github.com/zhayujie/CowAgent/pull/2692)) Thanks [@6vision](https://github.com/6vision)
- **智谱模型配置**：修复智谱 `bot_type` 命名、Web 控制台持久化及正则转义问题 ([#2693](https://github.com/zhayujie/CowAgent/pull/2693)) Thanks [@6vision](https://github.com/6vision)
- **OpenAI 兼容层**：使用 `openai_compat` 层统一错误处理 ([#2688](https://github.com/zhayujie/CowAgent/pull/2688)) Thanks [@JasonOA888](https://github.com/JasonOA888)
- **OpenAI 兼容迁移**：完成所有模型 Bot 的 `openai_compat` 迁移 ([#2689](https://github.com/zhayujie/CowAgent/pull/2689))
- **Gemini 工具调用**：修复 Gemini 模型的工具调用匹配问题 ([eda82ba](https://github.com/zhayujie/CowAgent/commit/eda82ba))
- **会话并发**：修复会话并发场景下的竞态条件问题 ([9879878](https://github.com/zhayujie/CowAgent/commit/9879878))
- **历史消息恢复**：修复历史会话消息不完整问题，仅恢复 user/assistant 文本消息，剥离工具调用 ([b788a3d](https://github.com/zhayujie/CowAgent/commit/b788a3d), [a33ce97](https://github.com/zhayujie/CowAgent/commit/a33ce97))
- **飞书群聊**：移除飞书群聊场景下对 `bot_name` 的依赖 ([b641bff](https://github.com/zhayujie/CowAgent/commit/b641bff))
- **Safari 兼容**：修复 Safari 浏览器 IME 回车键误触发消息发送问题 ([0687916](https://github.com/zhayujie/CowAgent/commit/0687916))
- **Windows 兼容**：修复 Windows 下 bash 风格 `$VAR` 环境变量转换为 `%VAR%` 的问题 ([7c67513](https://github.com/zhayujie/CowAgent/commit/7c67513))
- **MiniMax 参数**：增加 MiniMax 模型的 `max_tokens` 限制 ([1767413](https://github.com/zhayujie/CowAgent/commit/1767413))
- **.gitignore 更新**：添加 Python 目录忽略规则 ([#2683](https://github.com/zhayujie/CowAgent/pull/2683)) Thanks [@pelioo](https://github.com/pelioo)
- **AGENT.md 主动演进**：优化系统提示词中对 AGENT.md 的更新引导，从被动的"用户修改时更新"改为主动识别对话中的性格、风格变化并自动更新

## 📦 升级方式

源码部署可执行 `./run.sh update` 一键升级，或手动拉取代码后重启。详见 [更新升级文档](https://docs.cowagent.ai/guide/upgrade)。

**发布日期**：2026.03.18 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.2...master)
````

## File: docs/releases/v2.0.4.mdx
````markdown
---
title: v2.0.4
description: CowAgent 2.0.4 - 新增个人微信通道、新模型支持、日文文档、脚本重构及多项修复
---

## 🔌 新增个人微信通道

新增个人微信（`weixin`）通道，微信扫描二维码即可将 CowAgent 接入个人微信，支持以下功能：

- **消息收发**：支持文本、图片、文件、视频消息的接收与回复，支持语音消息接收和识别
- **扫码登录**：终端显示二维码，微信扫码确认即可登录，二维码过期自动刷新
- **凭证持久化**：登录凭证自动保存至 `~/.weixin_cow_credentials.json`，重启无需重新扫码
- **Session 自动重连**：Session 过期后自动清除旧凭证并重新发起扫码登录
- **Web 控制台接入**：支持在 Web 控制台中添加微信通道，扫码登录流程同步展示
- **Docker 和脚本支持**：`run.sh` 和 `docker-compose.yml` 均已适配微信通道

接入文档：[微信接入](https://docs.cowagent.ai/channels/weixin)。

相关提交：[ce89869](https://github.com/zhayujie/CowAgent/commit/ce89869)

## 🤖 新增模型

- **MiniMax-M2.7**：新增 MiniMax-M2.7 模型支持
- **GLM-5-Turbo**：新增智谱 glm-5-turbo 模型支持

相关提交：[9192f6f](https://github.com/zhayujie/CowAgent/commit/9192f6f)

## 🔧 脚本重构

- **run.sh 重构**：提取公共逻辑，精简脚本代码([49d8707](https://github.com/zhayujie/CowAgent/commit/49d8707))
- **可执行权限**：修复 `run.sh` 文件权限问题 ([652156e](https://github.com/zhayujie/CowAgent/commit/652156e))
- **PID 获取**：修复 `run.sh` 中进程 PID 获取错误的问题 ([9febb07](https://github.com/zhayujie/CowAgent/commit/9febb07))

## 🌍 文档更新

新增完整的日文文档，覆盖入门指南、通道接入、模型配置等主要章节。Thanks [@Ikko Ashimine](https://github.com/ikoamu)

相关提交：[5487c0b](https://github.com/zhayujie/CowAgent/commit/5487c0b)

## 🐛 问题修复

- **企微机器人兼容**：修复旧版 `websocket-client` 的兼容性问题，新增统一的 WebSocket 兼容层 ([bc7f627](https://github.com/zhayujie/CowAgent/commit/bc7f627))
- **消息自动修复**：增强消息协议的容错能力，自动修复格式异常的消息序列 ([b8b57e3](https://github.com/zhayujie/CowAgent/commit/b8b57e3))
- **飞书编码**：修复飞书通道消息和日志的编码问题 ([7d0e156](https://github.com/zhayujie/CowAgent/commit/7d0e156))
- **飞书配置**：移除 `run.sh` 中对 `feishu_bot_name` 的冗余依赖 ([1b5be1b](https://github.com/zhayujie/CowAgent/commit/1b5be1b))

## 📦 升级方式

源码部署可执行 `./run.sh update` 一键升级，或手动拉取代码后重启。详见 [更新升级文档](https://docs.cowagent.ai/guide/upgrade)。

**发布日期**：2026.03.22 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.3...master)
````

## File: docs/releases/v2.0.5.mdx
````markdown
---
title: v2.0.5
description: CowAgent 2.0.5 - Cow CLI、Skill Hub 开源、浏览器工具、企微扫码创建、DeepSeek 独立模块及多项优化
---

## 🖥️ Cow CLI 命令系统

新增 Cow CLI 命令系统，支持在终端和对话中执行命令，实现对 CowAgent 的全方位管理：

- **终端命令**：在系统终端中执行 `cow <命令>`，支持 `start`、`stop`、`restart`、`update`、`status`、`logs` 等服务管理操作
- **对话命令**：在对话中输入 `/<命令>` 或 `cow <命令>`，支持 `/help`、`/status`、`/config`、`/skill`、`/context`、`/logs`、`/version` 等
- **web控制台**：Web 控制台输入框输入 `/` 即可弹出指令菜单，支持方向键回溯历史输入
- **Windows 支持**：新增 PowerShell 一键安装脚本 `scripts/run.ps1`，同时支持 `cow` 命令

相关文档：[命令总览](https://docs.cowagent.ai/cli)

<img src="https://cdn.link-ai.tech/doc/20260401114549.png" width="750" />

## 🧩 Cow Skill Hub 开源

[Cow Skill Hub](https://skills.cowagent.ai)（技能广场）正式开源并上线，提供 AI Agent 技能的浏览、搜索、安装和发布，汇集精选技能、社区贡献技能、三方技能：

- **一键安装**：在对话中 `/skill install <名称>` 或终端 `cow skill install <名称>` 一键安装
- **多来源支持**：支持安装 Skill Hub、GitHub、ClawHub、LinkAI 上的全部技能，支持 GitHub 批量安装和子目录指定
- **技能搜索**：`/skill search` 和 `/skill list --remote` 浏览和搜索技能广场
- **技能发布**：通过 [skills.cowagent.ai/submit](https://skills.cowagent.ai/submit) 提交自己的技能
- **镜像加速**：支持 Skill Hub 镜像加速，国内环境下载更流畅

Skill Hub 开源仓库：[cow-skill-hub](https://github.com/zhayujie/cow-skill-hub)。

相关文档：[技能广场](https://docs.cowagent.ai/skills/hub)、[安装技能](https://docs.cowagent.ai/skills/install)

<img src="https://cdn.link-ai.tech/doc/20260401110103.png" width="750" />


## 🌐 新增浏览器工具

新增 Browser 工具，Agent 可控制浏览器访问和操作网页：

- **网页导航与交互**：支持 `navigate`、`click`、`fill`、`select`、`scroll`、`press` 等操作
- **页面快照**：使用精简 DOM 快照技术，让 Agent 高效理解页面结构，导航后自动快照
- **截图能力**：支持页面截图保存到工作区
- **JavaScript 执行**：支持在页面中执行自定义脚本
- **CLI 安装**：通过 `cow install-browser` 一键安装浏览器及依赖，自动适配系统环境
- **Docker 支持**：Docker 镜像已内置浏览器安装支持

相关文档：[浏览器工具](https://docs.cowagent.ai/tools/browser)。

<img src="https://cdn.link-ai.tech/doc/20260401115728.png" width="750" />


## 🤖 企微智能机器人扫码创建

企业微信智能机器人通道新增扫码一键创建功能：

- **Web 控制台扫码**：在 Web 控制台通道页面，选择「扫码接入」模式，使用企业微信扫码即可自动创建并接入智能机器人，无需手动到企业微信后台配置
- **手动模式保留**：同时保留「手动填写」模式，可输入已有的 Bot ID 和 Secret 接入
- **流式推送优化**：增加推送节流，避免 WebSocket 拥塞

相关文档：[企微智能机器人接入](https://docs.cowagent.ai/channels/wecom-bot)。

相关提交：[#2735](https://github.com/zhayujie/CowAgent/pull/2735)

Thanks [@WecomTeam](https://github.com/WecomTeam)

## 🐛 其他优化与修复

- **DeepSeek 独立模块**：新增独立的 DeepSeek Bot 模块，支持 `deepseek_api_key` 专属配置，无需再通过 OpenAI 兼容方式接入（[#2719](https://github.com/zhayujie/CowAgent/pull/2719)）。Thanks [@6vision](https://github.com/6vision)
- **Web 控制台优化**：新增斜杠指令菜单和输入历史回溯，新增模型选项，优化移动端适配（[#2731](https://github.com/zhayujie/CowAgent/pull/2731)）。Thanks [@zkjqd](https://github.com/zkjqd)
- **上下文丢失**：修复上下文裁剪后丢失的问题 ([393f0c0](https://github.com/zhayujie/CowAgent/commit/393f0c0))
- **系统提示词**：修复系统提示词未在每轮重建的问题 ([13f5fde](https://github.com/zhayujie/CowAgent/commit/13f5fde))
- **Agent 响应**：去除 Agent 响应首尾空白字符 ([f890318](https://github.com/zhayujie/CowAgent/commit/f890318))
- **视觉压缩**：优化视觉图片压缩策略 ([22b8ca0](https://github.com/zhayujie/CowAgent/commit/22b8ca0))
- **Gemini 模型**：修复 GoogleGeminiBot 缺少 model 属性的问题（[#2716](https://github.com/zhayujie/CowAgent/pull/2716)）。Thanks [@cowagent](https://github.com/cowagent)
- **微信通道**：修复文件发送失败、文件名丢失等问题 ([6d9b7ba](https://github.com/zhayujie/CowAgent/commit/6d9b7ba)、[baf66a1](https://github.com/zhayujie/CowAgent/commit/baf66a1)、[45faa9c](https://github.com/zhayujie/CowAgent/commit/45faa9c))
- **Docker 优化**：修复卷权限问题，精简镜像体积 ([3eb8348](https://github.com/zhayujie/CowAgent/commit/3eb8348)、[4470d4c](https://github.com/zhayujie/CowAgent/commit/4470d4c))
- **README 排版**：优化中英文排版空格（[#2723](https://github.com/zhayujie/CowAgent/pull/2723)）。Thanks [@Xiaozhou345](https://github.com/Xiaozhou345)
- **安全修复**：修复 Memory Content路径遍历风险，Thanks [@August829](https://github.com/August829)

## 📦 升级方式

源码部署可执行 `cow update` 或 `./run.sh update` 一键升级，或手动拉取代码后重启。详见 [更新升级文档](https://docs.cowagent.ai/guide/upgrade)。

**发布日期**：2026.04.01 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.4...master)
````

## File: docs/releases/v2.0.6.mdx
````markdown
---
title: v2.0.6
description: CowAgent 2.0.6 - 知识库系统、梦境记忆蒸馏、上下文智能压缩、Web 控制台多会话及多项优化
---

## 项目正式更名为 CowAgent

项目仓库正式从 `chatgpt-on-wechat` 更名为 **CowAgent**，演进为功能完备的 AI Agent 助理。

- 新地址：[github.com/zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)，旧地址 GitHub 会自动重定向
- CLI 命令、配置文件、文档链接均保持兼容，无需额外操作

## 📚 知识库系统

新增个人知识库系统，Agent 可自主构建和维护结构化知识，并在对话中按需检索引用。

- **索引驱动的自组织结构**：知识库采用 `knowledge/` 目录，按分类自动组织，每个知识页面为独立的 Markdown 文件
- **自动写入**：向 Agent 发送文件、链接等知识，或在讨论中识别到有价值的知识时，自动创建或更新知识页面
- **混合检索**：支持关键词全文搜索和向量语义检索，在对话中按需加载相关知识
- **可视化**：支持文件树浏览和知识图谱可视化，文档内链接可直接跳转查看
- **命令管理**：`/knowledge` 查看统计、`/knowledge list` 查看目录结构、`/knowledge on|off` 开关知识库

<img src="https://cdn.link-ai.tech/doc/20260413105435.png" width="750" />

相关文档：[知识库](https://docs.cowagent.ai/knowledge)

Inspired by Karpathy's [LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

## 🌙 梦境记忆蒸馏（Deep Dream）

全新的记忆整理机制，每日自动将分散的对话记忆蒸馏为精炼的长期记忆：

- **三层记忆流转**：对话上下文（短期）→ 天级记忆（中期）→ MEMORY.md（长期），形成完整的记忆生命周期
- **自动蒸馏**：每日 23:55 定时执行，读取当天天级记忆和 MEMORY.md，通过 LLM 进行去重、合并、修剪，输出精炼的新版 MEMORY.md
- **梦境日记**：每次蒸馏生成一篇叙事风格的梦境日记，记录整理过程的发现和洞察，存储在 `memory/dreams/` 目录
- **手动触发**：支持 `/memory dream [N]` 手动触发，可指定整理天数（默认 3 天，最大 30 天），完成后在对话中通知结果
- **Web 控制台**：记忆管理页面新增「梦境日记」tab，可浏览和查看所有梦境日记

相关文档：[梦境蒸馏](https://docs.cowagent.ai/memory/deep-dream)

<img src="https://cdn.link-ai.tech/doc/20260414120158.png" width="750" />

## 🧠 上下文智能压缩

上下文超出限制时将裁剪的部分通过 LLM 总结后异步注入，保持对话连贯性：

- **LLM 异步摘要**：裁剪的消息由 LLM 总结为关键信息，同时写入天级记忆文件和注入保留的上下文
- **多模型兼容**：优先使用主模型进行摘要，兼容 Claude、OpenAI、MiniMax 等不同模型的消息格式要求

相关文档：[短期记忆](https://docs.cowagent.ai/memory/context)

## 💬 Web 控制台升级

Web 控制台多项功能增强：

- **多会话管理**：支持创建和切换多个独立会话，侧边栏展示会话列表，支持会话标题自动生成和手动编辑
- **密码保护**：支持为控制台设置登录密码，可通过 `web_console_password` 配置项控制
- **深度思考**：支持在 Web 端展示模型的思考过程，可通过`enable_thinking` 配置项控制
- **定时推送**：支持定时任务结果推送到 Web 控制台
- **消息复制**：AI 回复支持一键复制原始 Markdown 内容

## 🤖 模型相关

- **视觉识别优化**：图片识别工具优先使用主模型，支持多模型厂商自动降级。相关文档：[视觉工具](https://docs.cowagent.ai/tools/vision)
- **MiniMax 新模型**：新增 MiniMax-M2.7-highspeed 模型和 MiniMax TTS 语音合成支持。Thanks @octo-patch
- **通义千问**：新增 qwen3.6-plus 模型支持

## 🐛 其他优化与修复

- **记忆提示词优化**：`MEMORY.md` 默认注入系统提示词，精细化记忆检索和写入的触发条件，增强主动写入能力
- **系统提示词**：优化系统提示词的风格和语气引导
- **浏览器工具**：增强隐式交互元素检测
- **文件发送**：修复通用文件类型（tar.gz、zip 等）未能正确发送的问题。Thanks @6vision
- **macOS 兼容**：修复网络预检超时兼容性问题。Thanks @Moliang Zhou
- **Windows 兼容**：修复 Windows 下 PowerShell 兼容性、进程更新、终端编码等多项问题
- **Python 3.13+**：修复 Python 3.13 及以上版本缺少 `legacy-cgi` 依赖的问题
- **个人微信**：更新个人微信通道版本

## 📦 升级方式

源码部署可执行 `cow update` 或 `./run.sh update` 一键升级，或手动拉取代码后重启。详见 [更新升级文档](https://docs.cowagent.ai/guide/upgrade)。

**发布日期**：2026.04.14 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.5...master)
````

## File: docs/releases/v2.0.7.mdx
````markdown
---
title: v2.0.7
description: CowAgent 2.0.7 - 图像生成技能（六厂商自动路由）、新模型支持、知识库增强、Web 控制台优化及多项修复
---

## 🎨 图像生成技能

新增图像生成内置技能，支持文生图、图生图、多图融合，支持 `GPT-Image-2`、`Nano Banana` 等多种模型：

- **自动路由**：支持六种模型厂商自动切换，OpenAI (GPT-Image-2) → Gemini (Nano Banana) → Seedream (火山方舟) → Qwen (百炼) → MiniMax → LinkAI
- **开箱即用**：配置 API Key 即可使用，无需手动指定模型。也支持在对话中指定特定模型
- **灵活控制**：支持 `quality`（画质）、`size`（分辨率，512/1K~4K）、`aspect_ratio`（宽高比）等参数，各厂商自动适配有效值
- **图片编辑**：传入已有图片即可进行编辑、风格迁移、多图融合
- **Skill 级配置**：支持通过 `config.json` 中的 `skills.image-generation.model` 固定默认模型

相关文档：[图像生成技能](https://docs.cowagent.ai/skills/image-generation)

## 🤖 新模型支持

- **Kimi K2.6**：新增 `kimi-k2.6` 模型支持
- **Claude Opus 4.7**：新增 `claude-opus-4-7` 模型支持
- **GLM 5.1**：新增 `glm-5.1` 模型支持
- **Kimi Coding Plan**：支持 Kimi Coding Plan 模式
- **自定义模型厂商**：新增[自定义模型](https://docs.cowagent.ai/models/custom)提供方配置，方便接入本地模型及更多厂商

## 📚 知识库增强

- **嵌套目录支持**：知识库列表和展示支持多级嵌套目录
- **根级文件展示**：知识树中显示根目录下的 `index.md`、`log.md` 等文件
- **空状态统计修复**：排除根级文件对知识库统计的干扰，正确保持空状态

## 🌙 梦境记忆优化

- **结构化组织**：梦境记忆文件按日期自动归档，目录结构更清晰
- **定时抖动**：每日定时触发增加随机抖动，避免集群场景下的并发冲突

## 🛠 技能系统改进

- **技能管理刷新**：`/skill` 命令执行后自动加载最新技能，确保状态同步
- **安装来源扩展**：技能安装支持多种来源格式（URL、zip、本地文件等）

## 💬 Web 控制台优化

- **智能自动滚动**：优化聊天窗口滚动逻辑，用户手动翻阅时不再强制跳到底部 Thanks @colin2060
- **移动端适配**：侧边栏默认隐藏，支持点击遮罩关闭
- **图片预览去重**：修复同一消息中图片重复渲染的问题
- **推理内容截断**：深度思考内容超出阶段，解决前端卡顿问题
- **会话标题修复**：修复标题自动生成的回退逻辑


## 🐛 其他修复

- **Gemini 修复**：修复 Gemini tool call 不返回结果的问题
- **Agent 重试**：空响应重试时不再丢弃 tool_calls
- **Docker 环境变量**：修复 Docker 环境下更新配置后环境变量未同步的问题 Thanks @sunboy0523 
- **Python 3.7 兼容**：延迟导入 `Literal` 以兼容 Python 3.7
- **模型切换通知**：修复切换模型后 bot_type 变更通知未显示的问题。Thanks @6vision
- **配置命令增强**：`/config` 支持设置 `enable_thinking`

## 📦 升级方式

源码部署可执行 `cow update` 或 `./run.sh update` 一键升级，或手动拉取代码后重启。详见 [更新升级文档](https://docs.cowagent.ai/guide/upgrade)。

**发布日期**：2026.04.22 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.6...2.0.7)
````

## File: docs/releases/v2.0.8.mdx
````markdown
---
title: v2.0.8
description: CowAgent 2.0.8 - 飞书渠道全面升级（语音、流式打字机、一键扫码接入）、DeepSeek V4 / 百度千帆支持、定时任务工具优化
---

## 🪶 飞书渠道全面升级

### 1. 一键扫码创建飞书应用

不再需要手动到飞书开放平台建应用、填权限和事件订阅。Web 控制台和命令行启动时若未配置 `feishu_app_id`，会自动展示扫码入口，飞书扫码授权后自动创建机器人并回填配置，开箱即用。

相关文档：[飞书渠道](https://docs.cowagent.ai/channels/feishu)

### 2. 语音消息收发

支持接收用户发送的飞书语音消息并自动转文本，回复也可走 TTS 以语音形式发出。同时优化了中文短语音的识别准确度。

### 3. 流式打字机回复

接入飞书 CardKit 流式卡片，**默认开启**，体验对齐 Web 端：

- 多轮 Agent 场景下中间过场消息与最终回复分卡呈现
- 针对 DeepSeek 等高频输出模型做了专门优化，速度与 Web 端持平
- 不支持时自动回退为普通文本回复，无需手动配置
- 要求飞书客户端 ≥ 7.20

飞书语音消息收发与流式打字机的基础能力来自社区贡献 #2791 Thanks @yangluxin613

## 🤖 新模型支持

- **DeepSeek V4 系列**：新增 `deepseek-v4-pro` / `deepseek-v4-flash`，并将默认模型切换为 `deepseek-v4-flash`
- **思考模型开关统一**：DeepSeek V4、Qwen3 等思考模型的开关行为对齐到 `enable_thinking`
- **百度千帆模型接入**：新增百度千帆厂商，支持 `ernie-5.0`、`ernie-4.5-turbo-128k` 等模型，并支持图像识别工具，相关文档查看 [百度千帆](https://docs.cowagent.ai/models/qianfan)。#2790 Thanks @jimmyzhuu
- **新增有道翻译**：`translate` 模块新增有道翻译支持 #2797 Thanks @Zmjjeff7

## 🛠 OpenAI 客户端重构

- **去 SDK 依赖**：OpenAI Bot 改为原生 HTTP 实现，启动更轻、依赖冲突更少
- **Web 控制台提示**：模型配置 API Base 输入框加入版本路径占位提示

## ⏰ 定时任务记忆增强

- **任务结果可被追问**：定时任务的执行结果自动注入到接收方的会话历史中，下一轮对话可直接追问，无需重新交代上下文 Thanks @huangrichao2020
- **不污染长期记忆**：注入的调度对话不会被纳入每日梦境记忆汇总，避免高频任务把记忆刷满
- **避免越跑越慢**：调度任务自己的上下文长度自动控制在合理范围内，长期反复执行也不会越积越大、拖慢响应

## 🔧 工具与安全

- **图像识别模型**：让 `tools.vision.model` 配置真正生效，未配置时自动 fallback #2792 Thanks CNXudiandian
- **Bash 安全确认**：仅对工作区外的破坏性删除做二次确认，工作区内常规操作不再打扰

## 🐛 其他修复

- 修复 Deep Dream 在多实例场景下重复触发
- 修复 DeepSeek 多轮对话中部分历史轮次缺失 `reasoning_content`

## 📦 升级方式

源码部署可执行 `cow update` 或 `./run.sh update` 一键升级，或手动拉取代码后重启。详见 [更新升级文档](https://docs.cowagent.ai/guide/upgrade)。

> ⚠️ 飞书一键创建应用依赖 `lark-oapi>=1.5.5`，`cow update` 会自动拉取；手动部署请确保依赖已更新。

**发布日期**：2026.05.06 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.7...2.0.8)
````

## File: docs/releases/v2.0.9.mdx
````markdown
---
title: v2.0.9
description: CowAgent 2.0.9 - 新增模型管理、MCP 协议支持、浏览器登录态持久化、新模型接入
---

## 🖥️ 新增模型管理

Web 控制台新增「模型」页面，按 **模型厂商 + 模型能力** 进行管理，支持对话、图像、语音、向量模型和搜索能力的配置：

- **多厂商配置**：所有厂商的 API Key / API Base 在顶部统一维护，下方所有能力立即生效，无需重复填写
- **图像模型**：图像理解与图像生成均可独立选择厂商和模型，未指定时跟随主模型自动选择
- **语音模型**：语音识别和合成可独立配置，新增千问、智谱 ASR/TTS 模型
- **向量模型**：支持配置 Embedding 模型（用于记忆及知识库检索），新增支持 OpenAI、通义、豆包、智谱等；切换模型后需执行 `/memory rebuild-index` 在线重建索引
- **搜索能力**：联网搜索能力升级，支持博查、百度、智谱等多个厂商，自动模式下 Agent 可综合多来源搜索结果进行深度研究

相关文档：[模型概览](https://docs.cowagent.ai/models)

<img width="720" alt="20260522113305" src="https://cdn.link-ai.tech/doc/20260522113305.png" />


## 🧩 MCP 协议支持

支持 **MCP（Model Context Protocol）** 协议，从固定工具集扩展为开放可插拔的工具生态，任何兼容 MCP 协议的服务均可作为工具直接接入 Agent。

- 原生 JSON-RPC 实现，零额外依赖，同时支持 `stdio` 和 `sse` 两种传输
- 兼容 Claude Desktop / Cursor 等主流风格的 `mcpServers` 配置，优先读取 `~/cow/mcp.json`

相关文档：[MCP 工具](https://docs.cowagent.ai/tools/mcp)。Thanks @yangluxin613 (#2801)

## 🌐 浏览器登录态持久化

针对需要登录、有反爬机制的网站，浏览器工具支持登录一次后长期复用登录态，并允许接入用户自己的真实 Chrome 以通过指纹检测：

- **持久化用户配置（默认）**：默认使用 `~/.cow/browser_profile` 作为浏览器用户目录，登录一次后下次自动复用登录态
- **CDP 模式**：通过 `tools.browser.cdp_endpoint` 接管真实 Chrome 浏览器，享有完整浏览器权限

相关文档：[浏览器工具](https://docs.cowagent.ai/tools/browser)。Thanks @leafmove (#2809)

## 🤖 模型新增与优化

- **模型新增**：`gpt-5.5`、`gemini-3.5-flash`、`qwen3.7-max`、`ernie-5.1`
- **模型优化**：DeepSeek V4 支持 `reasoning_effort` 思考深度参数；修复 MiMo 等思考模型通过 OpenAI 兼容协议接入的问题

## 🔒 部署与安全

- **默认本机访问**：Web 控制台 `web_host` 配置默认绑定 `127.0.0.1`，服务器部署时可手动设置为 `0.0.0.0` 并设置密码。Thanks @August829、@yidaozhongqing、@YLChen-007、@icysun
- **前端资源完全本地化**：第三方 CSS / JS 全部本地分发，离线 / 内网环境也能正常加载控制台。Thanks @gitlayzer (#2816)

## 🛠 体验优化与修复

- **TTS 适配更多通道**：Web对话、个人微信、飞书、钉钉、企微智能机器人均已支持回复语音，详情查看 [通道概览](https://docs.cowagent.ai/channels)
- **日志面板增强**：根据日志等级差异化高亮展示、支持根据等级筛选。Thanks @yangluxin613 (#2807)
- **Web 控制台自动启动**：程序启动后自动打开 Web 控制台。Thanks @yangluxin613 (#2804)
- **Ctrl+C 干净退出**：不再打印一长串 `KeyboardInterrupt` 堆栈。Thanks @yangluxin613 (#2806)
- **文件夹上传**：Web 端支持目录上传，路径校验适配 Windows。Thanks @TryToMakeUsBetter (#2814)
- 修复定时任务在某些情况下重复执行的问题。Thanks @CNXudiandian (#2820)
- 修复定时任务带时区时单次任务不触发的问题。Thanks @AethericSpace
- 修复执行失败的工具调用在页面刷新后不显示的问题。Thanks @a1094174619 (#2822)
- 修复企微机器人消息中包含非法控制字符导致投递失败的问题。Thanks @Jacques-Zhao (#2810)

## 📦 升级方式

源码部署可执行 `cow update` 一键升级，或手动拉取代码后重启。详见 [更新升级文档](https://docs.cowagent.ai/guide/upgrade)。

**发布日期**：2026.05.22 | [Full Changelog](https://github.com/zhayujie/CowAgent/compare/2.0.8...2.0.9)
````

## File: docs/skills/create.mdx
````markdown
---
title: 创造技能
description: 通过对话创建自定义技能
---

CowAgent 内置了 Skill Creator，可以通过自然语言对话快速创建、安装或更新技能。

## 使用方式

直接在对话中描述你想要的技能，Agent 会自动完成创建：

- 将工作流程固化为技能："帮我把这个部署流程创建为一个技能"
- 对接第三方 API："根据这个接口文档创建一个技能"
- 安装远程技能："帮我安装 xxx 技能"

## 创建流程

1. 告诉 Agent 你想创建的技能功能
2. Agent 自动生成 `SKILL.md` 说明文件和运行脚本
3. 技能保存到工作空间的 `~/cow/skills/` 目录
4. 后续对话中 Agent 会自动识别并使用该技能

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202202247.png" width="800" />
</Frame>

## SKILL.md 格式

创建的技能遵循标准的 SKILL.md 格式：

```markdown
---
name: my-skill
description: Brief description of the skill
metadata:
  emoji: 🔧
  requires:
    bins: ["curl"]
    env: ["MY_API_KEY"]
  primaryEnv: "MY_API_KEY"
---

# My Skill

Detailed instructions...
```

| 字段 | 说明 |
| --- | --- |
| `name` | 技能名称，需与目录名一致 |
| `description` | 技能描述，Agent 据此决定是否调用 |
| `metadata.requires.bins` | 依赖的系统命令 |
| `metadata.requires.env` | 依赖的环境变量 |
| `metadata.always` | 是否始终加载（默认 false） |

<Tip>
  详细开发文档可参考 [Skill Creator 说明](https://github.com/zhayujie/CowAgent/blob/master/skills/skill-creator/SKILL.md)。
</Tip>
````

## File: docs/skills/hub.mdx
````markdown
---
title: 技能广场
description: 浏览、搜索和安装 AI Agent 技能
---

[Cow Skill Hub](https://skills.cowagent.ai/) 是开源的 AI Agent 技能广场，汇集了官方推荐、社区贡献和第三方平台（GitHub、ClawHub 等）的技能。

开源仓库：[github.com/zhayujie/cow-skill-hub](https://github.com/zhayujie/cow-skill-hub)

<img src="https://cdn.link-ai.tech/doc/20260401110103.png" width="800" />

## 功能

- **浏览技能**：按类别（推荐 / 社区 / 第三方）和标签筛选
- **搜索技能**：按名称或描述搜索
- **查看详情**：查看技能文档、文件内容、安装命令和依赖的环境变量
- **一键安装**：复制安装命令即可在 CowAgent 中使用

## 安装技能

在对话中或终端中执行安装命令：

<CodeGroup>
```text 对话
/skill install <name>
```

```bash 终端
cow skill install <name>
```
</CodeGroup>

也可以在对话中浏览技能广场：

```text
/skill list --remote
/skill search <关键词>
```

除了在列表中展示的精选技能，还可以通过 **CLI命令 + Skill Hub** 安装各种第三方技能（**GitHub、ClawHub、LinkAI、URL** 等）参考 [安装技能](/skills/install)。

## 贡献技能

欢迎向技能广场提交你的技能：

1. 访问 [skills.cowagent.ai/submit](https://skills.cowagent.ai/submit)
2. 使用 GitHub 或 Google 账号登录
3. 上传包含 `SKILL.md` 的文件夹或 zip 包
4. 自动解析技能名称、显示名称和描述，可按需修改
5. 提交后将经过安全检查和审核后发布

<img src="https://cdn.link-ai.tech/doc/20260401111904.png" width="800" />

技能文件结构：

```
your-skill/
├── SKILL.md        # 必须，放在根目录
├── scripts/        # 可选，运行脚本
└── resources/      # 可选，其他资源
```

<Tip>
  技能基于 `SKILL.md` 文件构建，你也可以在技能详情页下载 SKILL.md，用于任何支持自定义指令的 Agent（如 OpenClaw、Cursor、Claude Code 等）。
</Tip>
````

## File: docs/skills/image-generation.mdx
````markdown
---
title: image-generation - 图像生成
description: 文生图 / 图生图 / 多图融合，支持多家厂商自动路由与回退
---

通用的图像生成与编辑技能，支持 OpenAI、Gemini、Seedream（火山方舟）、Qwen（百炼）、MiniMax、LinkAI 共六家厂商。配好任意一家的 Key 即可使用，配多家可享受自动回退。

## 支持的模型

| 厂商 | 模型 / 别名 | 特点 |
| --- | --- | --- |
| OpenAI | `gpt-image-2`、`gpt-image-1` | 通用文生图，高质量，支持 `quality` 控制画质 |
| Gemini Nano Banana | `nano-banana-2`、`nano-banana-pro`、`nano-banana` | 对应 `gemini-3.1-flash`、`gemini-3-pro`、`gemini-2.5-flash` 的图像版本 |
| Seedream（火山方舟） | `seedream-5.0-lite`、`seedream-4.5` | 原生 2K–4K，最多 14 张图融合 |
| Qwen（百炼） | `qwen-image-2.0`、`qwen-image-2.0-pro` | 擅长中文排版和图文融合 |
| MiniMax | `image-01` | 简单快速 |
| LinkAI | 任意模型 | 统一网关，作为兜底 |

## 模型选择

默认走「自动路由 + 失败回退」：

1. 按 `OpenAI → Gemini → Seedream → Qwen → MiniMax → LinkAI` 顺序选第一个已配置的厂商
2. 遇到 401、模型未开通、网络异常等错误时，自动切到下一家
3. 用户在对话里指定模型时（如「用 seedream 画一只猫」），对应厂商会被提到最前优先尝试

如需固定使用某个模型：

```json
{
  "skills": {
    "image-generation": {
      "model": "seedream-5.0-lite"
    }
  }
}
```

## 配置 API Key

<Tip>
  推荐通过 [Web 控制台](/channels/web) 的「模型管理」页面配置，配好的对话模型 Key 会被图像生成技能自动复用，无需重复配置。也可手动编辑配置文件或在对话中通过 `env_config` 工具临时设置。
</Tip>

凭证统一复用主模型厂商的 Key：

| 字段 | 对应厂商 |
| --- | --- |
| `openai_api_key` | OpenAI |
| `gemini_api_key` | Gemini |
| `ark_api_key` | 火山方舟（Seedream） |
| `dashscope_api_key` | 阿里百炼（Qwen） |
| `minimax_api_key` | MiniMax |
| `linkai_api_key` | LinkAI |


## 开启和关闭

技能会根据 API Key 自动调整状态：

- **已配置 Key**：Agent 收到画图请求时直接调用
- **未配置 Key**：技能仍会出现在上下文中（标记为「需要配置」），Agent 会引导用户去配 Key

如需手动控制：

```text
/skill disable image-generation    # 关闭
/skill enable image-generation     # 重新开启
```

终端等价命令：`cow skill disable image-generation` / `cow skill enable image-generation`。

## 参数

| 参数 | 类型 | 必填 | 默认 | 说明 |
| --- | --- | --- | --- | --- |
| `prompt` | string | 是 | — | 图像描述 |
| `image_url` | string / list | 否 | null | 编辑用的输入图，本地路径或 URL；传列表为多图融合 |
| `quality` | string | 否 | auto | `low` / `medium` / `high`，仅部分厂商支持 |
| `size` | string | 否 | auto | `512` / `1K` / `2K` / `3K` / `4K`，或像素值如 `1024x1024` |
| `aspect_ratio` | string | 否 | null | `1:1` / `3:2` / `2:3` / `16:9` / `9:16` / `21:9`；Gemini 还支持 `1:4` / `4:1` / `1:8` / `8:1` |

<Warning>
  **质量越高、分辨率越大，耗时和成本越高。** 日常对话用默认（`auto`）或 `quality=low` + `size=1K` 即可，约 20 秒出图；做海报或明确要高清时再上 `high` + `2K/4K`，可能需要 1–5 分钟。
</Warning>

## 常见用法

- **文生图**：根据描述生成插画、海报、图标、头像、分镜图等
- **图生图**：在已有图片上改风格、换元素、加装饰、加文字等
- **多图融合**：把多张参考图合成一张（换装、角色合影等）

<Note>
- bash 超时建议设 600 秒：单厂商 HTTP 超时 300 秒，脚本可能依次尝试多家
- 输入图片自动压缩到 4MB 以内、最长边不超过 4096px
- Gemini / Seedream / Qwen / MiniMax 不支持 `quality` 参数
- Seedream 默认出 2K 图；`seedream-5.0-lite` 支持到 3K，`seedream-4.5` 支持到 4K
</Note>
````

## File: docs/skills/index.mdx
````markdown
---
title: 技能概览
description: CowAgent 技能系统介绍
---

技能（Skill）为 Agent 提供无限的扩展性。每个 Skill 由说明文件（`SKILL.md`）、运行脚本（可选）、资源（可选）组成，描述如何完成特定类型的任务。

Skill 与 Tool 的区别：Tool 是由代码实现的原子操作（如读写文件、执行命令），Skill 则是基于说明文件的高级工作流，可以组合调用多个 Tool 来完成复杂任务。

## 获取技能

CowAgent 提供多种方式获取技能：

- [Cow 技能广场](https://skills.cowagent.ai/) — 在线浏览所有可用技能，或通过 `/skill list --remote` 在对话中浏览和安装
- **GitHub** — 直接从 GitHub 仓库安装，支持批量安装
- **ClawHub** — 通过 `/skill install clawhub:名称` 安装 ClawHub 上的技能 (4w+个)
- **LinkA** — 通过 `/skill install linkai:编码` 安装 LinkAI 上的公开资源和创建的知识库/数据库/工作流/插件等资源
- **URL** — 从 zip 压缩包或 SKILL.md 链接安装
- **对话创建** — 通过自然语言对话让 Agent 自动创建技能

详细安装方式参考 [安装技能](/skills/install) 和 [技能管理命令](/cli/skill)。也可以通过对话 [创建技能](/skills/create)，或向 [Skill Hub](https://skills.cowagent.ai/submit) 贡献你的技能。

## 技能加载优先级

1. **工作空间技能**（最高）：`~/cow/skills/`
2. **项目内置技能**（最低）：`skills/`

同名技能按优先级覆盖。

## 技能文件结构

```
skills/
├── my-skill/
│   ├── SKILL.md          # Skill description (frontmatter + instructions)
│   ├── scripts/          # Execution scripts (optional)
│   └── resources/        # Additional resources (optional)
```

### SKILL.md 格式

```markdown
---
name: my-skill
description: Brief description of the skill
metadata:
  emoji: 🔧
  requires:
    bins: ["curl"]
    env: ["MY_API_KEY"]
  primaryEnv: "MY_API_KEY"
---

# My Skill

Detailed instructions...
```

| 字段 | 说明 |
| --- | --- |
| `name` | 技能名称，需与目录名一致 |
| `description` | 技能描述，Agent 据此决定是否调用 |
| `metadata.requires.bins` | 依赖的系统命令 |
| `metadata.requires.env` | 依赖的环境变量 |
| `metadata.always` | 是否始终加载（默认 false） |
````

## File: docs/skills/install.mdx
````markdown
---
title: 安装技能
description: 通过命令一键安装来自多种来源的技能
---

CowAgent 支持通过统一的 `install` 命令安装来自 [Cow 技能广场](https://skills.cowagent.ai/)、GitHub、ClawHub、LinkAI 以及任意 URL 上的技能。在对话中使用 `/skill install`，在终端中使用 `cow skill install`。

## 从Cow技能广场安装

访问 [skills.cowagent.ai](https://skills.cowagent.ai/) 浏览所有可用技能，找到想要的技能后直接安装，例如：

```text
/skill list --remote
/skill install pptx
```

## 从 GitHub 安装

> Github上的所有技能都可以直接安装，支持仓库级批量安装和指定子目录安装，例如：

```text
/skill install larksuite/cli
/skill install https://github.com/larksuite/cli/tree/main/skills/lark-im
```

## 从 ClawHub 安装

[ClawHub](https://clawhub.ai/) 上的所有技能 (4w+个) 都可以一键安装，例如：


```text
/skill install clawhub:<name>
```

## 从 LinkAI 安装

[LinkAI](https://link-ai.tech/console) 上的所有公开资源 (1w+个应用/工作流/插件) ，以及自己创建的资源 (应用/工作流/知识库/数据库/插件) 都可以通过命令一键安装：

```text
/skill install linkai:<code>
```

> LinkAI平台上创建的所有应用、工作流、知识库、数据库、插件都有唯一的code，可在[控制台](https://link-ai.tech/console)各资源页面中进行获取并填写到命令中

## 从 URL 安装

支持 zip 压缩包和 SKILL.md 文件链接：

```text
/skill install https://cdn.link-ai.tech/skills/pptx.zip
/skill install https://example.com/path/to/SKILL.md
```

## 管理技能

```text
/skill list                  # 查看已安装技能
/skill info pptx             # 查看技能详情
/skill enable pptx           # 启用技能
/skill disable pptx          # 禁用技能
/skill uninstall pptx        # 卸载技能
```

<Tip>
  以上所有命令在终端中使用时，将 `/skill` 替换为 `cow skill` 即可。完整命令说明参考 [技能管理命令](/cli/skill)。
</Tip>
````

## File: docs/skills/knowledge-wiki.mdx
````markdown
---
title: knowledge-wiki - 知识库
description: 维护本地结构化知识库，自动归档、分类和交叉引用
---

帮你把对话中产生的资料、灵感和零散笔记整理成结构化的本地知识库，自动维护索引和页面之间的交叉引用。

`knowledge-wiki` 在工作空间下维护一个 `knowledge/` 目录，相当于 Agent 的「外脑」。技能设置了 `always: true`，会**常驻上下文**，不需要任何外部依赖。

## 什么时候会触发

- 你分享了一篇文章、一份文档或一个 URL，想要沉淀下来
- 聊天过程中聊出了值得长期保留的结论
- 你想查一下之前积累过的知识

## 目录结构

```
knowledge/
├── index.md           # 全局索引（必须维护）
├── log.md             # 操作日志（只追加）
└── <category>/        # 分类子目录（按内容自由分组）
    └── <slug>.md      # 知识页（文件名用小写加中划线）
```

## 三个核心操作

### 1. 收录（Ingest）

你分享了一段资料时，Agent 会：

1. 读懂原文，提取关键信息
2. 按内容决定放到哪个分类下——先看 `index.md` 里有没有合适的分类，没有就新建一个
3. 生成知识页 `knowledge/<category>/<slug>.md`
4. 更新索引 `index.md` 和日志 `log.md`

### 2. 综合（Synthesize）

聊天中产生了新的结论或洞见时：

1. 在合适的分类下创建新知识页
2. 给相关的已有页面加上互相指向的链接
3. 更新索引和日志

### 3. 查询（Query）

你问到以前积累的知识时：

1. 先从 `index.md` 里找可能相关的页面
2. 用 `read` 工具打开具体页面
3. 需要时再用 `memory_search` 补充检索
4. 回答里会带上知识页的链接，方便你点过去看原文

## 知识页怎么写

```markdown
# 页面标题

> Source: <来源 URL 或简要说明>

正文内容。页面之间用相对路径链接：
[相关页](../category/related-page.md)

## 要点

- ...

## 相关页面

- [页面 A](../category/page-a.md) — 为什么相关
```

<Note>
- `> Source:` 用来记录这条知识的来源。有明确来源时一定要写
- 交叉引用很重要：创建或更新某页时，记得也去关联页面里补上反向链接
- **只链接已经存在的页面**。如果某个概念值得单独成页，先建好再加链接
</Note>

## 索引格式

`knowledge/index.md` 采用扁平列表，按分类分组，每个知识页占一行：

```markdown
# Knowledge Index

## 分类 A
- [页面标题](category-a/page-slug.md) — 一句话摘要

## 分类 B
- [页面标题](category-b/page-slug.md) — 一句话摘要
```

不用表格，不加 emoji。分类怎么起名、怎么组织都可以灵活调整。

## 日志格式

`knowledge/log.md` 只追加、不修改，最新的写在最下面：

```markdown
## [YYYY-MM-DD] ingest | 页面标题
## [YYYY-MM-DD] synthesize | 页面标题
```

## 写作约定

- **文件名**用小写加中划线，比如 `machine-learning.md`
- **一页只讲一件事**，需要关联的内容通过链接串起来
- **有了就更新，不要重复建页**
- **每次改完都要更新索引** `knowledge/index.md`
- **写精华别抄全文**，抓住要点就行
- **对话里引用知识页时用完整路径**，比如 `[标题](knowledge/<category>/<slug>.md)`。页面之间互相链接才用相对路径
- **基于知识页回答问题时附上链接**，方便深入查阅
````

## File: docs/skills/skill-creator.mdx
````markdown
---
title: skill-creator - 技能创建
description: 创建、安装、更新技能，规范 SKILL.md 写法与目录结构
---

`skill-creator` 是一个「元技能」，专门用来帮助 Agent 创建、安装和更新其他技能，确保所有技能的 `SKILL.md` 写法和目录结构保持一致。

## 什么时候会触发

- 用户想从 URL 或远程仓库安装一个技能
- 用户想从头创建一个全新的技能
- 需要升级或重构已有技能

## 技能是什么

简单来说，技能就是一份「可复用的说明书」加上可选的脚本和资源。它给 Agent 注入了某个领域的专业知识，让 Agent 在遇到对应任务时能像专家一样处理。

一个技能通常包含以下内容：

1. **专项工作流** — 某类任务的完整步骤
2. **工具用法** — 怎么调某种 API 或处理某种文件
3. **领域知识** — 团队约定、业务规则、数据结构之类
4. **附带资源** — 脚本、参考文档、模板等

<Note>
**核心原则：能省则省**。只写 Agent 自己想不到的内容，每加一行都要问自己：值不值得占这些 token？
</Note>

## 目录结构

```
skill-name/
├── SKILL.md            # 必需：技能定义
│   ├── YAML frontmatter（必填 name / description）
│   └── Markdown 正文（说明 + 示例）
└── 可选资源
    ├── scripts/        # 可执行脚本（Python / Bash 等）
    ├── references/     # 内容较多的参考文档，Agent 按需读取
    └── assets/         # 模板、图标等，会直接用在输出里
```

## SKILL.md 规范定义

SKILL.md 文件头部的 `frontmatter` 字段：

| 字段 | 说明 |
| --- | --- |
| `name` | 技能名，小写加中划线，必须和目录名一致 |
| `description` | **最关键的字段**。写清楚「这个技能干什么」和「什么情况下该用它」，Agent 看到这段来决定要不要调它。注意：所有触发相关的描述都放在这里，不要写到正文里 |
| `metadata.cowagent.requires.bins` | 系统里必须装了哪些命令行工具 |
| `metadata.cowagent.requires.env` | 需要哪些环境变量（全部满足才行） |
| `metadata.cowagent.requires.anyEnv` | 多个 API Key 满足一个就行 |
| `metadata.cowagent.requires.anyBins` | 多个工具满足一个就行 |
| `metadata.cowagent.always` | 设为 `true` 会始终加载，不检查依赖 |
| `metadata.cowagent.emoji` | 展示用的 emoji（可选） |
| `metadata.cowagent.os` | 限定系统，如 `["darwin", "linux"]` |

<Note>
`category` 字段不需要手写，系统会自动设成 `skill`。
</Note>

声明 API Key 依赖有两种写法：

```yaml
metadata:
  cowagent:
    requires:
      env: ["MYAPI_KEY"]            # 必须有
```

```yaml
metadata:
  cowagent:
    requires:
      anyEnv: ["OPENAI_API_KEY", "LINKAI_API_KEY"]   # 有一个就行
```

**技能会自动按依赖启禁用**：环境变量齐了就自动启用，缺了就自动禁用，不需要手动 `/skill enable`。

## 资源目录怎么用

| 目录 | 放什么 | 不要放 |
| --- | --- | --- |
| `scripts/` | 需要反复执行的代码，或需要确定性结果的脚本 | 纯演示用的代码片段 |
| `references/` | **超过 500 行**、SKILL.md 实在塞不下的大文档（比如完整的数据库 Schema） | 普通 API 文档、示例、教程 |
| `assets/` | 会出现在最终产物里的文件（模板、图标、样板代码等） | 说明性文档 |

<Warning>
**原则上所有内容都写在 `SKILL.md` 里**，只有确实放不下才拆到资源目录。

不要给技能加 `README.md`、`CHANGELOG.md`、`INSTALLATION_GUIDE.md` 之类的文件——全部放进 `SKILL.md`。资源目录里只放真正要跑的脚本或真正要用的素材。
</Warning>

## 安装外部技能

安装后最终落在 `<workspace>/skills/<name>/` 目录。

| 来源 | 怎么装 |
| --- | --- |
| URL（单文件） | curl / web_fetch 直接拉 |
| URL（zip 包） | 下载解压 |
| 本地 SKILL.md | 直接读 |
| 本地 zip 包 | 解压 |

安装步骤：

1. 找到 `SKILL.md`（可能在包的根目录或某个子目录里）
2. 从 frontmatter 里读出 `name`
3. 把**整个技能目录**（包括 `SKILL.md`、`scripts/`、`assets/` 等）复制到 `<workspace>/skills/<name>/`
4. 如果包里有 `INSTALL.md` 之类的安装脚本，照着跑一遍，但最终结果仍然要落在 `<workspace>/skills/<name>/` 下

## 从头创建技能

推荐按这个顺序来：

1. **搞清楚需求** — 让用户举几个具体的使用场景，一次别问太多
2. **想好结构** — 这个技能需要脚本吗？需要参考文档吗？需要模板素材吗？
3. **生成骨架** — 用初始化脚本：

   ```bash
   scripts/init_skill.py <skill-name> --path <workspace>/skills [--resources scripts,references,assets] [--examples]
   ```

4. **填充内容** — 写好 SKILL.md、补上脚本和资源。脚本写完一定要实际跑一遍
5. **格式校验**（可选）：

   ```bash
   scripts/quick_validate.py <workspace>/skills/<skill-name>
   ```

6. **迭代完善** — 实际用起来之后根据反馈持续改进

## 命名规则

- 只用小写字母、数字和中划线。用户给的名字需要做标准化处理，比如 `Plan Mode` → `plan-mode`
- 长度别超过 64 个字符
- 尽量短、用动词开头、一看就知道干什么
- 必要时用工具名做前缀，比如 `gh-address-comments`、`linear-address-issue`
- 目录名和 `name` 字段必须完全一致

## 三级加载机制

技能不会一次性全部塞进上下文，而是分三级按需加载：

1. **元信息**（`name` + `description`）— 常驻上下文，约 100 词。Agent 靠它判断「要不要用这个技能」
2. **SKILL.md 正文** — 确定要用了才加载，建议控制在 500 行以内
3. **资源文件** — Agent 需要的时候再读

如果一个技能涉及多个变体（比如多云厂商部署），建议这样组织：

```
cloud-deploy/
├── SKILL.md             # 主流程和厂商选择逻辑
└── references/
    ├── aws.md
    ├── gcp.md
    └── azure.md
```

用户选了 AWS，Agent 只需要读 `aws.md`，不用把三家的文档全加载进来。

## 常见设计模式

**步骤式**：按编号列出操作步骤和对应脚本。

```markdown
1. 分析表单结构（运行 analyze_form.py）
2. 生成字段映射（编辑 fields.json）
3. 自动填充表单（运行 fill_form.py）
```

**分支式**：根据用户意图走不同流程。

```markdown
1. 判断操作类型：
   **新建内容？** → 走「创建流程」
   **编辑已有内容？** → 走「编辑流程」
```

**模板式**：输出格式有严格要求时，在 SKILL.md 里直接给一个样板，让 Agent 照着写。
````

## File: docs/tools/bash.mdx
````markdown
---
title: bash - 终端
description: 执行系统命令
---

在当前工作目录执行 Bash 命令，返回 stdout 和 stderr。`env_config` 中配置的 API Key 会自动注入到环境变量中。

## 依赖

无额外依赖，默认可用。

## 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `command` | string | 是 | 要执行的命令 |
| `timeout` | integer | 否 | 超时时间（秒） |

## 使用场景

- 安装软件包和依赖
- 运行代码和测试
- 部署应用和服务（Nginx 配置、进程管理等）
- 系统运维和排查

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260203121008.png" width="800" />
</Frame>
````

## File: docs/tools/browser.mdx
````markdown
---
title: browser - 浏览器
description: 控制浏览器访问和操作网页
---

控制 Chromium 浏览器进行网页导航、元素交互和内容提取。支持 JavaScript 渲染的动态页面，使用精简 DOM 快照让 Agent 高效理解页面结构。

## 安装

<Tabs>
  <Tab title="CLI 安装（推荐）">
    ```bash
    cow install-browser
    ```

    该命令会自动完成：
    - 安装 `playwright` Python 包（旧系统自动降级兼容版本）
    - 在 Linux 上安装系统依赖
    - 下载 Chromium 浏览器（Linux 服务器自动使用无头精简版）
    - 自动检测国内网络并使用镜像加速
  </Tab>
  <Tab title="手动安装">
    ```bash
    pip install playwright
    playwright install chromium
    ```

    Linux 服务器还需安装系统依赖：
    ```bash
    sudo playwright install-deps chromium
    ```

    如果系统较旧（如 Ubuntu 18.04，glibc < 2.28），需安装兼容版本：
    ```bash
    pip install playwright==1.28.0
    python -m playwright install chromium
    ```

    国内网络下载 Chromium 较慢，可设置镜像加速：
    ```bash
    export PLAYWRIGHT_DOWNLOAD_HOST=https://registry.npmmirror.com/-/binary/playwright
    python -m playwright install chromium
    ```
  </Tab>
</Tabs>

<Note>
  1. 支持 Ubuntu 20.04+、Debian 10+、macOS、Windows。Ubuntu 18.04 等旧系统会自动降级安装兼容版本。
  2. 浏览器工具依赖较重（约300MB），为可选安装。轻量的网页内容获取可使用 `web_fetch` 工具。
</Note>

## 工作流程

Agent 使用浏览器的典型流程：

1. **`navigate`** — 打开目标 URL
2. **`snapshot`** — 获取页面精简 DOM，交互元素自动编号（ref）
3. **`click` / `fill` / `select`** — 通过 ref 编号操作元素
4. **`snapshot`** — 再次快照验证操作结果

## 支持的操作

| 操作 | 说明 | 关键参数 |
| --- | --- | --- |
| `navigate` | 打开 URL | `url` |
| `snapshot` | 获取页面结构化文本（主要方式） | `selector`（可选） |
| `click` | 点击元素 | `ref` 或 `selector` |
| `fill` | 填入文本 | `ref` 或 `selector`，`text` |
| `select` | 下拉选择 | `ref` 或 `selector`，`value` |
| `scroll` | 滚动页面 | `direction`（up/down/left/right） |
| `screenshot` | 截图保存到工作区 | `full_page` |
| `wait` | 等待元素或超时 | `selector`，`timeout` |
| `press` | 按键（Enter、Tab 等） | `key` |
| `back` / `forward` | 浏览器前进/后退 | - |
| `get_text` | 获取元素文本内容 | `selector` |
| `evaluate` | 执行 JavaScript | `script` |

## 使用场景

- 访问指定 URL 获取动态页面内容
- 填写表单、登录操作
- 操作网页元素（点击按钮、选择选项等）
- 验证部署后的网页效果
- 抓取需要 JS 渲染的动态内容

## 运行模式

浏览器会根据运行环境自动选择模式：

| 环境 | 模式 |
| --- | --- |
| macOS / Windows | 有头模式（显示浏览器窗口） |
| Linux 桌面（有 DISPLAY） | 有头模式 |
| Linux 服务器（无 DISPLAY） | 无头模式（headless） |

可在 `config.json` 中手动覆盖：

```json
{
  "tools": {
    "browser": {
      "headless": true
    }
  }
}
```

## 登录态持久化

**只需登录一次目标网站，Agent 后续可直接使用**。提供两种方式：

### 方式一：Persistent 模式（默认）

开箱即用，登录信息保存在 `~/.cow/browser_profile`。无需任何配置。

如需关闭持久化模式，每次都用纯净环境：

```json
{
  "tools": {
    "browser": {
      "persistent": false
    }
  }
}
```

### 方式二：CDP 模式（接管真实 Chrome）

让 Agent 连接独立启动的真实 Chrome（而非 Playwright 自带的 Chromium），获得完整浏览器指纹，适合反爬严格的网站。

启动 Chrome 时加上调试端口和独立用户目录：

<Tabs>
  <Tab title="macOS">
    ```bash
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
      --remote-debugging-port=9222 \
      --user-data-dir="$HOME/.cow/chrome-cdp"
    ```
  </Tab>
  <Tab title="Linux">
    ```bash
    google-chrome \
      --remote-debugging-port=9222 \
      --user-data-dir="$HOME/.cow/chrome-cdp"
    ```
  </Tab>
  <Tab title="Windows">
    ```powershell
    & "C:\Program Files\Google\Chrome\Application\chrome.exe" `
      --remote-debugging-port=9222 `
      --user-data-dir="$env:USERPROFILE\.cow\chrome-cdp"
    ```
  </Tab>
</Tabs>

在 `config.json` 中配置端点：

```json
{
  "tools": {
    "browser": {
      "cdp_endpoint": "http://localhost:9222"
    }
  }
}
```

<Note>
  Chrome 137+ 限制 `--remote-debugging-port` 必须搭配独立 `--user-data-dir`，因此 CDP 启动的 Chrome **无法直接复用你日常 Chrome 的登录态**，需要在独立目录中重新登录一次。
</Note>
````

## File: docs/tools/edit.mdx
````markdown
---
title: edit - 文件编辑
description: 通过精确文本替换编辑文件
---

通过精确文本替换编辑文件。如果 `oldText` 为空则追加到文件末尾。

## 依赖

无额外依赖，默认可用。

## 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `path` | string | 是 | 文件路径 |
| `oldText` | string | 是 | 要替换的原始文本（为空时追加到末尾） |
| `newText` | string | 是 | 替换后的文本 |

## 使用场景

- 修改配置文件中的特定参数
- 修复代码中的 bug
- 在文件指定位置插入内容
````

## File: docs/tools/env-config.mdx
````markdown
---
title: env_config - 环境变量
description: 管理 API Key 等秘钥配置
---

管理工作空间 `.env` 文件中的环境变量（API Key 等秘钥），支持通过对话安全地添加和更新。内置安全保护和脱敏策略。

## 依赖

| 依赖 | 安装命令 |
| --- | --- |
| `python-dotenv` ≥ 1.0.0 | `pip install python-dotenv>=1.0.0` |

安装扩展依赖时已包含：`pip3 install -r requirements-optional.txt`

## 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `action` | string | 是 | 操作类型：`get`、`set`、`list`、`delete` |
| `key` | string | 否 | 环境变量名称 |
| `value` | string | 否 | 环境变量值（仅 `set` 时需要） |

## 使用方式

直接告诉 Agent 需要配置的秘钥，Agent 会自动调用该工具：

- "帮我配置 BOCHA_API_KEY"
- "设置 OPENAI_API_KEY 为 sk-xxx"
- "查看已配置的环境变量"

配置的秘钥会自动注入到 `bash` 工具的执行环境中。

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202234939.png" width="800" />
</Frame>
````

## File: docs/tools/index.mdx
````markdown
---
title: 工具概览
description: CowAgent 内置工具系统
---

工具是 Agent 访问操作系统资源的核心能力。Agent 会根据任务需求智能选择和调用工具，完成文件操作、命令执行、联网搜索、定时任务等各类操作。工具实现在项目的 `agent/tools/` 目录下。

## 内置工具

以下工具默认可用，无需额外配置：

<CardGroup cols={2}>
  <Card title="read - 文件读取" icon="file" href="/tools/read">
    读取文件内容，支持文本、图片、PDF
  </Card>
  <Card title="write - 文件写入" icon="pen" href="/tools/write">
    创建或覆盖写入文件
  </Card>
  <Card title="edit - 文件编辑" icon="pen-to-square" href="/tools/edit">
    通过精确文本替换编辑文件
  </Card>
  <Card title="ls - 目录列表" icon="folder-open" href="/tools/ls">
    列出目录内容
  </Card>
  <Card title="bash - 终端" icon="terminal" href="/tools/bash">
    执行系统命令
  </Card>
  <Card title="send - 文件发送" icon="paper-plane" href="/tools/send">
    向用户发送文件或图片
  </Card>
  <Card title="memory - 记忆" icon="brain" href="/tools/memory">
    搜索和读取长期记忆
  </Card>
  <Card title="env_config - 环境变量" icon="key" href="/tools/env-config">
    管理 API Key 等秘钥配置
  </Card>
  <Card title="web_fetch - 网页获取" icon="globe" href="/tools/web-fetch">
    获取网页或文档内容
  </Card>
  <Card title="scheduler - 定时任务" icon="clock" href="/tools/scheduler">
    创建和管理定时任务
  </Card>
</CardGroup>

## 可选工具

以下工具需要安装额外依赖或配置 API Key 后启用：

<CardGroup cols={2}>
  <Card title="web_search - 联网搜索" icon="magnifying-glass" href="/tools/web-search">
    搜索互联网获取实时信息
  </Card>
  <Card title="vision - 图片理解" icon="eye" href="/tools/vision">
    分析图片内容（识别、描述、OCR 文字提取等）
  </Card>
  <Card title="browser - 浏览器" icon="window" href="/tools/browser">
    控制浏览器访问和操作网页
  </Card>
</CardGroup>

## MCP 工具

通过 [Model Context Protocol](https://modelcontextprotocol.io) 接入社区生态中的各种MCP工具，配置一次 `mcp.json` 即用即得：

<CardGroup cols={1}>
  <Card title="MCP - 外部工具生态" icon="plug" href="/tools/mcp">
    支持 stdio / SSE 标准协议，热更新，零代码接入
  </Card>
</CardGroup>
````

## File: docs/tools/ls.mdx
````markdown
---
title: ls - 目录列表
description: 列出目录内容
---

列出目录内容，按字母排序，目录名带 `/` 后缀，包含隐藏文件。

## 依赖

无额外依赖，默认可用。

## 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `path` | string | 是 | 目录路径，相对路径基于工作空间目录 |
| `limit` | integer | 否 | 最大返回条目数，默认 500 |

## 使用场景

- 浏览项目结构
- 查找特定文件
- 检查目录是否存在
````

## File: docs/tools/mcp.mdx
````markdown
---
title: MCP 工具
description: 通过 Model Context Protocol 接入外部工具生态
---

CowAgent 支持 [Model Context Protocol (MCP)](https://modelcontextprotocol.io)，让 Agent 能够直接调用社区中数以万计的 MCP 工具。配置一次 `mcp.json`，工具就会以与内置工具完全相同的方式呈现给 LLM，可被自动选择和调用。

## 配置文件

CowAgent 读取 `~/cow/mcp.json`。文件不存在时不会启用任何 MCP 工具，也不会报错。

Docker 部署时，官方 `docker-compose.yml` 已经把宿主机 `./cow` 挂载到容器内 `/home/agent/cow`（即容器用户的 `~/cow`），把 `mcp.json` 放进宿主机 `./cow/` 目录即可生效。

### 标准格式

完全兼容 MCP 社区标准，同 Claude Desktop / Cursor 一致：

```json
{
  "mcpServers": {
    "<server-name>": {
      "command": "npx",
      "args": ["-y", "some-mcp-package"],
      "env": {
        "API_KEY": "your-key-here"
      }
    }
  }
}
```

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `command` | stdio | 启动 server 的可执行命令（如 `npx`、`python`、`uvx`） |
| `args` | 否 | 传给 command 的参数列表 |
| `env` | 否 | 子进程的环境变量，常用于 API Key |
| `url` | SSE / Streamable HTTP | 远程端点 URL（与 `command` 二选一） |
| `type` | 远程 | 远程传输类型，可选 `sse` 或 `streamable-http`，默认 `sse` |
| `headers` | 否 | 远程请求附加 HTTP 头（如 `Authorization`），仅 Streamable HTTP 使用 |
| `disabled` | 否 | `true` 时跳过该 server，便于临时关闭 |

### 完整示例

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}
```

- **fetch**：通用网页抓取，返回页面文本内容，无需 API Key
- **github**：访问 GitHub 仓库、Issue、PR 等，需要 Personal Access Token

## 让 Agent 帮你配置

CowAgent 自带 `read` / `write` / `edit` 工具，**直接把要装的 MCP 配置发给 Agent，让它写到配置文件中：

例如：

```markdown
帮我把这个 MCP 加到 ~/cow/mcp.json 里：

{"mcpServers":{"fetch":{"command":"uvx","args":["mcp-server-fetch"]}}}
```

Agent 会：

1. 访问 MCP 配置文件，合并新 server 配置，保留已有项
2. 自动重载增量的 MCP Server，下一次对话即可使用相应 Tools

## 工作方式

- 启动时**异步加载**：`mcp.json` 中配置的所有 server 会在后台异步加载，不阻塞主流程，对话可以立刻使用
- **热更新**：用户或 Agent 修改 `mcp.json` 后，消息处理完成时会自动重载变更的 server，无需重启 cow
- **平铺呈现**：每个 MCP server 暴露的多个方法会平铺为独立的工具，LLM 直接选择调用，不需要二次决策

## 支持的传输协议

| 协议 | 说明 | 配置字段 |
| --- | --- | --- |
| **stdio** | 子进程通信，最常见，社区生态最丰富 | `command` + `args` |
| **SSE** | HTTP Server-Sent Events，旧版远程协议 | `url`（默认） |
| **Streamable HTTP** | 新版远程协议，单端点收发，逐步取代 SSE | `type: "streamable-http"` + `url` |

## 排错

| 现象 | 排查方向 |
| --- | --- |
| 启动后 Agent 没有 MCP 工具 | 检查 `~/cow/mcp.json` 是否存在、JSON 格式是否合法 |
| 某个 server 加载失败 | 查看启动日志中的 `[MCP] Server 'xxx' load failed`，常见为依赖未装、API Key 缺失 |
| 修改 `mcp.json` 没有生效 | 改动会在**下一条消息**生效；若 server 配置不变（如只改注释），不会触发重启 |
| Docker 部署 | 确认宿主机 `./cow` 已挂载到容器内 `/home/agent/cow`，`mcp.json` 直接放进宿主机 `./cow/` 目录即可，或者直接对话 Agent 安装 |

## MCP 市场推荐

可以从各个第三方广场寻找现成的 MCP server，复制 JSON 配置即可使用，例如：

- [mcp.so](https://mcp.so) — 全球 MCP 服务索引
- [ModelScope MCP 广场](https://modelscope.cn/mcp) — 魔搭社区 MCP 广场，国内访问更稳定

只要遵循 MCP 标准协议（stdio / SSE / Streamable HTTP），都可以直接接入 CowAgent。
````

## File: docs/tools/memory.mdx
````markdown
---
title: memory - 记忆与知识
description: 搜索和读取长期记忆及知识库文件
---

记忆工具包含两个子工具：`memory_search`（搜索记忆）和 `memory_get`（读取记忆或知识文件）。

当 [知识库](/knowledge) 功能开启时，这两个工具同时支持访问 `memory/` 和 `knowledge/` 目录下的文件。

## 依赖

无额外依赖，默认可用。由 Agent Core 的记忆系统管理。

## memory_search

搜索历史记忆和知识库内容，支持关键词和向量混合检索。

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `query` | string | 是 | 搜索查询 |

## memory_get

读取特定记忆文件或知识库文件的内容。

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `path` | string | 是 | 文件的相对路径（如 `MEMORY.md`、`memory/2026-01-01.md`、`knowledge/concepts/rag.md`） |
| `start_line` | integer | 否 | 起始行号 |
| `end_line` | integer | 否 | 结束行号 |

## 工作方式

Agent 会在以下场景自动调用记忆工具：

- 用户分享重要信息时 → 存储到记忆
- 需要参考历史信息时 → 搜索相关记忆
- 对话达到一定长度时 → 提取摘要存储
- 讨论到专业知识时 → 检索知识库中的相关页面

<Note>
  当 `knowledge` 配置为 `false` 时，工具的描述和搜索范围会自动调整为仅包含记忆文件。
</Note>
````

## File: docs/tools/read.mdx
````markdown
---
title: read - 文件读取
description: 读取文件内容
---

读取文件内容。支持文本文件、PDF 文件、图片（返回元数据）等格式。

## 依赖

无额外依赖，默认可用。

## 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `path` | string | 是 | 文件路径，相对路径基于工作空间目录 |
| `offset` | integer | 否 | 起始行号（1-indexed），负值表示从末尾读取 |
| `limit` | integer | 否 | 读取行数 |

## 使用场景

- 查看配置文件、日志文件
- 读取代码文件进行分析
- 检查图片/视频的文件信息
````

## File: docs/tools/scheduler.mdx
````markdown
---
title: scheduler - 定时任务
description: 创建和管理定时任务
---

创建和管理动态定时任务，支持灵活的调度方式和执行模式。

## 依赖

| 依赖 | 安装命令 |
| --- | --- |
| `croniter` ≥ 2.0.0 | `pip install croniter>=2.0.0` |

安装核心依赖时已包含：`pip3 install -r requirements.txt`

## 调度方式

| 方式 | 说明 |
| --- | --- |
| 一次性任务 | 在指定时间执行一次 |
| 固定间隔 | 按固定时间间隔重复执行 |
| Cron 表达式 | 使用 Cron 语法定义复杂调度规则 |

## 执行模式

- **固定消息发送**：到达触发时间时发送预设消息
- **Agent 动态任务**：到达触发时间时由 Agent 智能执行任务

## 使用方式

通过自然语言即可创建和管理定时任务：

- "每天早上 9 点给我发天气预报"
- "每隔 2 小时检查一下服务器状态"
- "明天下午 3 点提醒我开会"
- "查看所有定时任务"

<Frame>
  <img src="https://cdn.link-ai.tech/doc/20260202195402.png" width="800" />
</Frame>

## 结果进入会话上下文

定时任务在隔离 session 中执行（内部规划与 tool 调用不污染用户会话），但**最终输出**会作为一对消息回写到接收者的真实会话，用户可以直接追问"刚才那条第二点展开说说"。

**默认策略**

- Agent 动态任务的输出进入上下文
- 固定消息类任务默认不进入上下文（可通过配置打开）
- 每个会话最多保留最近 **3 对** scheduler 消息，更早的自动清理；普通用户消息不受影响

**配置项**

| 配置项 | 默认值 | 说明 |
| --- | --- | --- |
| `scheduler_inject_to_session` | `true` | 总开关 |
| `scheduler_inject_max_per_session` | `3` | 每会话保留 scheduler 消息对数上限 |
| `scheduler_inject_send_message` | `false` | 是否同时注入固定消息类任务 |

```json
{
  "scheduler_inject_to_session": true,
  "scheduler_inject_max_per_session": 3,
  "scheduler_inject_send_message": false
}
```

## 任务执行时的上下文

定时任务的隔离 session 会保留最近几次执行的对话历史，便于做"对比上次"、"延续之前结论"等操作；但为了避免高频任务（如每 5 分钟监控）prompt 越积越长，会按公式自动裁剪：

```
scheduler_keep_turns = max(1, agent_max_context_turns / 5)
```

`agent_max_context_turns` 默认为 `20`，所以定时任务每次执行默认带最近 **4 轮**历史。需要更长记忆可调大 `agent_max_context_turns`。

<Note>
群聊场景（飞书 / 企微群机器人 / 钉钉等）下用户的真实 session_id 形如 `user_id:group_id`，与 receiver 不同。创建任务时会自动记录正确的 session_id；老的 `tasks.json` 缺该字段时回落到 receiver，行为与历史版本一致。
</Note>
````

## File: docs/tools/send.mdx
````markdown
---
title: send - 文件发送
description: 向用户发送文件
---

向用户发送文件（图片、视频、音频、文档等），当用户明确要求发送/分享文件时使用。

## 依赖

无额外依赖，默认可用。

## 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `path` | string | 是 | 文件路径，可以是绝对路径或相对于工作空间的路径 |
| `message` | string | 否 | 附带的消息说明 |

## 使用场景

- 将生成的代码或文档发送给用户
- 发送截图、图表
- 分享下载的文件
````

## File: docs/tools/vision.mdx
````markdown
---
title: vision - 图片理解
description: 分析图片内容（识别、描述、OCR 等）
---

使用 Vision API 分析本地图片或图片 URL，支持内容描述、文字提取（OCR）、物体识别等。

## 模型选择

Vision 工具采用多级自动选择 + 自动兜底策略，无需手动配置即可使用：

1. **主模型** — 优先使用当前配置的主模型进行图像识别（需要是多模态模型）
2. **其他已配置模型** — 自动发现已配置 API Key 的其他多模态模型作为备选

如果当前 provider 调用失败，会自动尝试下一个，直到成功或全部失败。

### 支持的模型

| 厂商 | 视觉模型 | 说明 |
| --- | --- | --- |
| OpenAI / 兼容协议 | 使用主模型 | 支持所有 OpenAI 协议兼容的多模态模型 |
| 通义千问 (DashScope) | 使用主模型 | 例如 qwen3.6-plus 等 |
| Claude | 使用主模型 | Anthropic 原生图像格式 |
| Gemini | 使用主模型 | inlineData 格式 |
| 豆包 (Doubao) | 使用主模型 | doubao-seed-2-0 系列原生支持 |
| Kimi (Moonshot) | 使用主模型 | kimi-k2.6、kimi-k2.5 原生支持 |
| 百度千帆 (Qianfan) | 使用主模型 | 默认使用多模态主模型 (如 ernie-5.1)，主模型不支持时兜底使用 ernie-4.5-turbo-vl |
| 智谱 AI | glm-5v-turbo | 固定使用视觉专用模型 |
| MiniMax | MiniMax-Text-01 | 固定使用视觉专用模型 |

<Note>
  智谱和 MiniMax 的文本模型不支持图像理解，因此始终使用对应的视觉专用模型，无需手动指定。
</Note>

> 当 `use_linkai=true` 时，默认使用 LinkAI 的多模态模型进行

## 自定义配置

如果希望指定 Vision 使用的模型，可在 `config.json` 中配置，例如：

```json
{
    "tools": {
        "vision": {
            "model": "gpt-4.1"
        }
    }
}
```

指定的模型会被**优先使用**，工具会根据模型名自动路由到对应的 provider；若调用失败，会自动 fallback 到其他已配置的 provider。

大多数情况下无需配置，主模型支持多模态或配置任意一个支持视觉的 API Key 即可自动工作。

## 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `image` | string | 是 | 本地文件路径或 HTTP(S) 图片 URL |
| `question` | string | 是 | 对图片提出的问题 |

支持的图片格式：jpg、jpeg、png、gif、webp



## 使用场景

- 描述图片中的内容
- 提取图片中的文字（OCR）
- 识别物体、颜色、场景
- 分析截图、文档扫描图片等

<Note>
  超过 1MB 的图片会自动压缩后上传，所有图片（包括远程 URL）会统一转为 base64 传输，确保兼容所有模型后端。
</Note>
````

## File: docs/tools/web-fetch.mdx
````markdown
---
title: web_fetch - 网页获取
description: 获取网页或文档内容
---

获取 HTTP/HTTPS URL 的内容。对网页提取可读文本，对文档文件（PDF、Word、Excel 等）自动下载并解析内容。

## 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `url` | string | 是 | HTTP/HTTPS URL（网页或文档链接） |

## 支持的文件类型

| 类型 | 格式 |
| --- | --- |
| PDF | `.pdf` |
| Word | `.docx` |
| 文本 | `.txt`、`.md`、`.csv`、`.log` |
| 表格 | `.xls`、`.xlsx` |
| 演示文稿 | `.ppt`、`.pptx` |

## 使用场景

- 获取网页的文本内容
- 下载并解析远程文档
- 获取 API 响应内容

<Note>
  `web_fetch` 只能获取静态 HTML 内容。如果页面需要 JavaScript 渲染（如 SPA 单页应用），请使用 `browser` 工具。
</Note>
````

## File: docs/tools/web-search.mdx
````markdown
---
title: web_search - 联网搜索
description: 搜索互联网获取实时信息，支持多个搜索厂商
---

搜索互联网获取实时信息、新闻、研究等内容。支持博查、百度千帆、智谱、LinkAI 四个后端，配置任意一家即可使用。

<Tip>
  推荐通过 [Web 控制台](/channels/web) 的「模型管理 → 搜索」面板可视化配置厂商与策略，无需手动编辑配置文件。
</Tip>

## 厂商

| 厂商 | 凭证 | 申请入口 |
| --- | --- | --- |
| 博查 Bocha | `tools.web_search.bocha_api_key` | [博查开放平台](https://open.bochaai.com/) |
| 百度千帆 | 复用 `qianfan_api_key` | [千帆控制台](https://cloud.baidu.com/doc/qianfan/s/2mh4su4uy) |
| 智谱 Zhipu | 复用 `zhipu_ai_api_key` | [智谱开放平台](https://docs.bigmodel.cn/cn/guide/tools/web-search) |
| LinkAI | 复用 `linkai_api_key` | [LinkAI 控制台](https://link-ai.tech/console/interface) |

除博查需要单独的 `bocha_api_key` 外，其他三家直接复用对应模型的 API Key，配好模型即同时获得搜索能力。

## 路由策略

```json
{
  "tools": {
    "web_search": {
      "strategy": "auto",
      "provider": ""
    }
  }
}
```

- `auto`（默认）：由 Agent 在已配置的厂商中智能选择，并可在一次任务中多次调用、切换不同厂商以获取更全面的结果；未指定时按 `bocha → qianfan → zhipu → linkai` 顺序兜底。
- `fixed`：固定使用 `provider` 指定的厂商；该厂商凭证缺失时自动回落到 auto 顺序。

## 工具参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `query` | string | 是 | 搜索关键词 |
| `count` | integer | 否 | 返回结果数量（1–50，默认 10） |
| `freshness` | string | 否 | 时间范围：`noLimit`（默认）、`oneDay`、`oneWeek`、`oneMonth`、`oneYear`，或日期范围如 `2025-01-01..2025-02-01` |
| `summary` | boolean | 否 | 是否返回页面摘要（默认 false） |
| `provider` | string | 否 | `auto` 策略下配置了多个厂商时可见，用于单次切换厂商 |

<Note>
  四家凭证均未配置时，该工具不会注册到 Agent。
</Note>
````

## File: docs/tools/write.mdx
````markdown
---
title: write - 文件写入
description: 创建或覆盖写入文件
---

写入内容到文件。文件不存在则自动创建，已存在则覆盖。自动创建父目录。

## 依赖

无额外依赖，默认可用。

## 参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `path` | string | 是 | 文件路径 |
| `content` | string | 是 | 要写入的内容 |

## 使用场景

- 创建新的代码文件或脚本
- 生成配置文件
- 保存处理结果

<Note>
  单次写入不应超过 10KB。对于大文件，建议先创建骨架，再使用 edit 工具分块添加内容。
</Note>
````

## File: docs/zh/README.md
````markdown
<p align="center"><img src= "https://github.com/user-attachments/assets/eca9a9ec-8534-4615-9e0f-96c5ac1d10a3" alt="CowAgent" width="420" /></p>

<p align="center">
  <a href="https://github.com/zhayujie/CowAgent/releases/latest"><img src="https://img.shields.io/github/v/release/zhayujie/CowAgent" alt="Latest release"></a>
  <a href="https://github.com/zhayujie/CowAgent/blob/master/LICENSE"><img src="https://img.shields.io/github/license/zhayujie/CowAgent" alt="License: MIT"></a>
  <a href="https://github.com/zhayujie/CowAgent"><img src="https://img.shields.io/github/stars/zhayujie/CowAgent?style=flat-square" alt="Stars"></a> <br/>
  [<a href="../../README.md">English</a>] | [中文] | [<a href="../ja/README.md">日本語</a>]
</p>

**CowAgent** 是一个开源的超级 AI 助理，能够主动思考和规划任务、操作计算机和外部资源、创造和执行 Skills、构建知识库与长期记忆，与你一同成长，是 Agent Harness 工程的最佳实践之一。

CowAgent 轻量、易部署、可扩展，自由接入主流大模型，覆盖微信、飞书、钉钉、企微、QQ、Telegram、网页等多渠道，7×24 运行于个人电脑或服务器中。

<p align="center">
  <a href="https://cowagent.ai/?lang=zh">🌐 官网</a> &nbsp;·&nbsp;
  <a href="https://docs.cowagent.ai/">📖 文档中心</a> &nbsp;·&nbsp;
  <a href="https://docs.cowagent.ai/guide/quick-start">🚀 快速开始</a> &nbsp;·&nbsp;
  <a href="https://skills.cowagent.ai/">🧩 技能广场</a> &nbsp;·&nbsp;
  <a href="https://link-ai.tech/cowagent/create">☁️ 在线体验</a>
</p>

<br/>

## 🌟 核心能力

| 能力 | 说明 |
| :--- | :--- |
| [任务规划](https://docs.cowagent.ai/intro/architecture) | 理解复杂任务并自主分解执行，循环调用工具直到完成目标 |
| [长期记忆](https://docs.cowagent.ai/memory) | 三层记忆架构（上下文 → 天级 → 核心），梦境蒸馏自动整理，支持关键词与向量混合检索 |
| [知识库](https://docs.cowagent.ai/knowledge) | 自动整理结构化知识为 Markdown Wiki，构建持续增长的知识图谱，可视化浏览 |
| [技能](https://docs.cowagent.ai/skills) | 从 [Skill Hub](https://skills.cowagent.ai/)、GitHub、ClawHub 等一键安装；也可通过对话创造自定义技能 |
| [工具](https://docs.cowagent.ai/tools) | 内置文件读写、终端、浏览器、定时任务、记忆检索、联网搜索等 10+ 工具，支持 MCP 协议 |
| [通道](https://docs.cowagent.ai/channels) | 一个 Agent 同时接入 Web、微信、飞书、钉钉、企微、QQ、公众号、Telegram 等多个渠道 |
| 多模态 | 文本、图片、语音、文件全消息类型支持，覆盖识别、生成、收发 |
| [模型](https://docs.cowagent.ai/models) | DeepSeek、Claude、Gemini、GPT、GLM、Qwen、Kimi、MiniMax、Doubao 等主流厂商，配置一行切换 |
| [部署](https://docs.cowagent.ai/guide/quick-start) | 一键脚本安装，Web 控制台统一管理；本地、Docker、服务器多种部署方式 |

<br/>

## 🏗️ 架构总览

<img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/architecture/zh/architecture.jpg" alt="CowAgent Architecture" width="750"/>

CowAgent 是一个完整的 **Agent Harness**：消息从各类**通道**进入，**Agent Core** 结合记忆、知识库与可用工具/技能进行任务规划与决策，调用**模型**生成结果，再回传至原通道。各模块解耦清晰，按需扩展。

详见 [项目架构](https://docs.cowagent.ai/intro/architecture)。

<br/>

## 🚀 快速开始

项目提供一键安装脚本，自动完成依赖安装、配置和启动：

**Linux / macOS：**

```bash
bash <(curl -fsSL https://cdn.link-ai.tech/code/cow/run.sh)
```

**Windows（PowerShell）：**

```powershell
irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex
```

**Docker：**

```bash
curl -O https://cdn.link-ai.tech/code/cow/docker-compose.yml
docker compose up -d
```

启动成功后访问 `http://localhost:9899` 进入 **Web 控制台**，在控制台内即可完成模型配置、渠道接入、技能安装等全部操作。

> 服务器部署且需要公网访问控制台时，请在 `config.json` 中将 `web_host` 设为 `0.0.0.0`（同时强烈建议设置 `web_password` 启用鉴权），然后访问 `http://<server-ip>:9899`，并确保防火墙/安全组放行 `9899` 端口。

> 📖 详细安装指南：[快速开始](https://docs.cowagent.ai/guide/quick-start) · [源码安装](https://docs.cowagent.ai/guide/manual-install) · [升级](https://docs.cowagent.ai/guide/upgrade)

安装后可使用 `cow` [CLI 命令](https://docs.cowagent.ai/cli) 管理服务：

```bash
cow start | stop | restart        # 服务管理
cow status | logs                  # 状态和日志
cow update                         # 拉取最新代码并重启
cow skill install <名称>           # 安装技能
cow install-browser                # 安装浏览器工具
```

<br/>

## 🤖 模型支持

CowAgent 支持国内外主流厂商的大语言模型。**文本对话、图像理解、图像生成、语音识别/合成、向量** 等能力均可独立配置厂商。

| 厂商 | 代表模型 | 文本 | 图像理解 | 图像生成 | 语音识别 | 语音合成 | 向量 |
| --- | --- | :-: | :-: | :-: | :-: | :-: | :-: |
| [DeepSeek](https://docs.cowagent.ai/models/deepseek) | deepseek-v4-flash / pro | ✅ | | | | | |
| [MiniMax](https://docs.cowagent.ai/models/minimax) | MiniMax-M2.7 | ✅ | ✅ | ✅ | | ✅ | |
| [Claude](https://docs.cowagent.ai/models/claude) | claude-opus-4-7 | ✅ | ✅ | | | | |
| [Gemini](https://docs.cowagent.ai/models/gemini) | gemini-3.5-flash | ✅ | ✅ | ✅ | | | |
| [OpenAI](https://docs.cowagent.ai/models/openai) | gpt-5.5、o 系列 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [智谱 GLM](https://docs.cowagent.ai/models/glm) | glm-5.1、glm-5v-turbo | ✅ | ✅ | | ✅ | | ✅ |
| [通义千问](https://docs.cowagent.ai/models/qwen) | qwen3.7-max | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [豆包 Doubao](https://docs.cowagent.ai/models/doubao) | doubao-seed-2.0 系列 | ✅ | ✅ | ✅ | | | ✅ |
| [Kimi](https://docs.cowagent.ai/models/kimi) | kimi-k2.6 | ✅ | ✅ | | | | |
| [百度ERNIE](https://docs.cowagent.ai/models/qianfan) | ernie-5.1 | ✅ | ✅ | | | | |
| [小米 MiMo](https://docs.cowagent.ai/models/mimo) | mimo-v2.5-pro / v2.5 | ✅ | ✅ | | | ✅ | |
| [LinkAI](https://docs.cowagent.ai/models/linkai) | 一个 Key 接入 100+ 模型 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [自定义](https://docs.cowagent.ai/models/custom) | 本地模型 / 三方代理 | ✅ | | | | | |

> 推荐通过 Web 控制台在线配置，无需手动编辑文件。手动配置请参考各厂商文档，详见 [模型概览](https://docs.cowagent.ai/models)。

<br/>

## 💬 通道接入

一个 Agent 实例可同时接入多个渠道，启动时通过 `channel_type` 切换或并行运行。

| 通道 | 文本 | 图片 | 文件 | 语音 | 群聊 |
| --- | :-: | :-: | :-: | :-: | :-: |
| [Web 控制台](https://docs.cowagent.ai/channels/web)（默认） | ✅ | ✅ | ✅ | ✅ | |
| [微信](https://docs.cowagent.ai/channels/weixin) | ✅ | ✅ | ✅ | ✅ | |
| [飞书](https://docs.cowagent.ai/channels/feishu) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [钉钉](https://docs.cowagent.ai/channels/dingtalk) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [企微智能机器人](https://docs.cowagent.ai/channels/wecom-bot) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [QQ](https://docs.cowagent.ai/channels/qq) | ✅ | ✅ | ✅ | | ✅ |
| [企业微信应用](https://docs.cowagent.ai/channels/wecom) | ✅ | ✅ | ✅ | ✅ | |
| [微信公众号](https://docs.cowagent.ai/channels/wechatmp) | ✅ | ✅ | | ✅ | |
| [Telegram](https://docs.cowagent.ai/channels/telegram) | ✅ | ✅ | ✅ | ✅ | ✅ |

> 飞书、企微智能机器人支持在 Web 控制台内**扫码一键接入**，无需公网 IP。详见 [通道概览](https://docs.cowagent.ai/channels)。

<img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/zh/web-console-chat.png" alt="CowAgent Web 控制台" width="800"/>

*Web 控制台是默认通道，也是统一的 Agent 配置和管理入口*

<br/>

## 🧠 记忆与知识库

**长期记忆**采用三层架构：对话上下文（短期）→ 天级记忆（中期）→ MEMORY.md（长期）。每日自动执行**梦境蒸馏（Deep Dream）**，将分散记忆整合为精炼的长期记忆并生成叙事日记。详见 [长期记忆](https://docs.cowagent.ai/memory) · [梦境蒸馏](https://docs.cowagent.ai/memory/deep-dream)。

**个人知识库** 与按时间记录的记忆不同，以**主题为维度**组织结构化知识。Agent 在对话中自动整理有价值信息，维护交叉引用与索引，Web 控制台可可视化浏览知识图谱。详见 [个人知识库](https://docs.cowagent.ai/knowledge)。

<table>
  <tr>
    <td width="50%">
      <img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/zh/web-console-memory.png" alt="长期记忆" />
      <p align="center"><em>长期记忆 · 三层记忆 + 梦境蒸馏</em></p>
    </td>
    <td width="50%">
      <img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/zh/web-console-knowledge.png" alt="个人知识库" />
      <p align="center"><em>个人知识库 · 自动整理的 Markdown Wiki</em></p>
    </td>
  </tr>
</table>

<br/>


## 🔧 工具与技能

**工具（Tools）** 是 Agent 操作系统资源的原子能力，**技能（Skills）** 是基于说明文件的高级工作流，可组合多个工具完成复杂任务。

### 工具系统

**内置工具** 涵盖文件读写（`read` / `write` / `edit` / `ls`）、终端（`bash`）、文件发送（`send`）、记忆检索（`memory`）、环境变量（`env_config`）、网页获取（`web_fetch`）、定时任务（`scheduler`）、联网搜索（`web_search`）、图像识别（`vision`）、浏览器自动化（`browser`）等常用能力。

**MCP 协议** 通过 [Model Context Protocol](https://modelcontextprotocol.io) 接入开放生态中的各种 MCP 服务，配置一次 `mcp.json` 即用即得，支持 stdio / SSE 协议、热更新、零代码接入。

详见 [工具概览](https://docs.cowagent.ai/tools) · [MCP 集成](https://docs.cowagent.ai/tools/mcp)。

### 技能系统

- **[Skill Hub](https://skills.cowagent.ai/)** — 开源的技能广场，浏览、搜索、一键安装
- **GitHub / ClawHub / URL 等** — 任意来源一键安装
- **对话创造** — 通过 `skill-creator` 用对话快速生成自定义技能，可将工作流程或第三方接口直接固化为技能

```bash
/skill list                   # 查看当前技能
/skill search <关键词>         # 在技能广场搜索
/skill install <名称>          # 一键安装
```

详见 [技能概览](https://docs.cowagent.ai/skills) · [创建技能](https://docs.cowagent.ai/skills/create)。

<br/>

## 🏷 更新日志

> **2026.05.22：** [v2.0.9](https://github.com/zhayujie/CowAgent/releases/tag/2.0.9) — 模型管理、MCP 协议支持、浏览器登录态持久化、新模型接入（gpt-5.5、gemini-3.5-flash、qwen3.7-max）、部署安全加固

> **2026.05.06：** [v2.0.8](https://github.com/zhayujie/CowAgent/releases/tag/2.0.8) — 飞书渠道全面升级（语音、流式输出、扫码接入）、新模型支持（DeepSeek V4、百度千帆）、定时任务工具增强

> **2026.04.22：** [v2.0.7](https://github.com/zhayujie/CowAgent/releases/tag/2.0.7) — 图像生成内置技能（GPT Image 2、Nano Banana）、新模型支持（Kimi K2.6、Claude Opus 4.7、GLM 5.1）、知识库和记忆增强

> **2026.04.14：** [v2.0.6](https://github.com/zhayujie/CowAgent/releases/tag/2.0.6) — 知识库系统、梦境记忆模块、上下文智能压缩、Web 控制台多会话

> **2026.04.01：** [v2.0.5](https://github.com/zhayujie/CowAgent/releases/tag/2.0.5) — Cow CLI 命令系统、Skill Hub 开源、浏览器工具、企微扫码创建

> **2026.03.22：** [v2.0.4](https://github.com/zhayujie/CowAgent/releases/tag/2.0.4) — 新增个人微信通道，支持文本/图片/文件/语音消息

> **2026.02.03：** [v2.0.0](https://github.com/zhayujie/CowAgent/releases/tag/2.0.0) — 正式升级为超级 Agent 助理，支持多轮任务决策、长期记忆、Skills 框架

完整更新历史：[Release Notes](https://docs.cowagent.ai/releases)

<br/>

## 🤝 社区与支持

扫码加入微信开源交流群：

<img width="130" src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/open-community.png">

也可通过以下方式获取支持：

- 🐛 [提交 Issue](https://github.com/zhayujie/CowAgent/issues)
- 🤖 在线 AI 助手：[项目小助手](https://link-ai.tech/app/Kv2fXJcH)（基于项目知识库）

<br/>

## 🔗 相关项目

- **[Cow Skill Hub](https://github.com/zhayujie/cow-skill-hub)** — 开源的 AI Agent 技能广场，支持 CowAgent、OpenClaw、Claude Code 等多种 Agent
- **[bot-on-anything](https://github.com/zhayujie/bot-on-anything)** — 轻量大模型应用框架，支持 Slack、Telegram、Discord、Gmail 等海外平台
- **[AgentMesh](https://github.com/MinimalFuture/AgentMesh)** — 开源多智能体（Multi-Agent）框架，通过团队协同解决复杂问题

<br/>

## 🏢 企业服务

<a href="https://link-ai.tech" target="_blank"><img width="650" src="https://cdn.link-ai.tech/image/link-ai-intro.jpg"></a>

> [LinkAI](https://link-ai.tech/) 是面向企业和个人的一站式 AI 智能体平台，为 CowAgent 提供云端托管和企业级支持：
>
> - **🚀 免部署在线运行**：无需服务器即可创建 [CowAgent 在线助理](https://link-ai.tech/cowagent/create)，1 分钟拥有专属 Agent
> - **🧠 Agent 基础设施**：聚合主流大模型、知识库、数据库、技能、工作流，提供开箱即用的 Agent 能力扩展
> - **🏢 企业级协作**：提供团队协作、权限分级、审计日志、私有化部署等能力，让 Agent 安全落地企业场景

**产品咨询和企业服务** 可联系产品客服：

<img width="130" src="https://cdn.link-ai.tech/portal/linkai-customer-service.png">

<br/>

## 🛠️ 开发与贡献

欢迎接入更多应用通道，参考 [飞书通道实现](https://github.com/zhayujie/CowAgent/blob/master/channel/feishu/feishu_channel.py) 新增自定义通道；同时欢迎贡献新技能，向 [Skill Hub](https://skills.cowagent.ai/submit) 提交。

通过 ⭐ Star 关注项目更新，欢迎提交 PR、Issue 进行反馈。

## 🌟 贡献者

![cow contributors](https://contrib.rocks/image?repo=zhayujie/CowAgent&max=1000)

<br/>

## ⚠️ 声明

1. 本项目遵循 [MIT 开源协议](/LICENSE)，主要用于技术研究和学习。使用时请遵守所在地法律法规及相关政策，因使用本项目所产生的一切后果由使用者自行承担。
2. **成本与安全：** Agent 模式 Token 消耗显著高于普通对话，请根据效果与成本权衡选择模型；Agent 具备访问本地操作系统的能力，请谨慎选择部署环境。
3. CowAgent 项目专注于开源技术开发，不会参与、授权或发行任何加密货币。

<br/>

## 📌 项目更名说明

本项目原名 `chatgpt-on-wechat`，于 2026.04.13 正式更名为 **CowAgent**。原 GitHub 地址已自动重定向，老用户可选择执行 `git remote set-url origin https://github.com/zhayujie/CowAgent.git` 更新本地远程地址。
````

## File: LICENSE
````
Copyright (c) 2022 zhayujie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: pyproject.toml
````toml
[build-system]
requires = ["setuptools>=45.0"]
build-backend = "setuptools.build_meta"

[project]
name = "cowagent"
version = "1.0.0"
description = "CowAgent - AI Agent on WeChat and more"
requires-python = ">=3.7"
dependencies = [
    "click>=8.0",
    "requests>=2.28.2",
]

[project.scripts]
cow = "cli.cli:main"

[tool.setuptools.packages.find]
include = ["cli*"]
````

## File: README.md
````markdown
<p align="center"><img src="https://github.com/user-attachments/assets/eca9a9ec-8534-4615-9e0f-96c5ac1d10a3" alt="CowAgent" width="420" /></p>

<p align="center">
  <a href="https://github.com/zhayujie/CowAgent/releases/latest"><img src="https://img.shields.io/github/v/release/zhayujie/CowAgent" alt="Latest release"></a>
  <a href="https://github.com/zhayujie/CowAgent/blob/master/LICENSE"><img src="https://img.shields.io/github/license/zhayujie/CowAgent" alt="License: MIT"></a>
  <a href="https://github.com/zhayujie/CowAgent"><img src="https://img.shields.io/github/stars/zhayujie/CowAgent?style=flat-square" alt="Stars"></a> <br/>
  [English] | [<a href="docs/zh/README.md">中文</a>] | [<a href="docs/ja/README.md">日本語</a>]
</p>

**CowAgent** is an open-source super AI assistant that proactively plans tasks, controls your computer and external services, creates and runs Skills, and grows alongside you through a personal knowledge base and long-term memory — a reference implementation of Agent Harness engineering.

CowAgent is lightweight, easy to deploy, and built to extend. Plug in any major LLM provider and run it 24/7 on a personal computer or server, across the web and all major IM platforms.

<p align="center">
  <a href="https://cowagent.ai/">🌐 Website</a> &nbsp;·&nbsp;
  <a href="https://docs.cowagent.ai/en/intro/index">📖 Docs</a> &nbsp;·&nbsp;
  <a href="https://docs.cowagent.ai/en/guide/quick-start">🚀 Quick Start</a> &nbsp;·&nbsp;
  <a href="https://skills.cowagent.ai/">🧩 Skill Hub</a> &nbsp;·&nbsp;
  <a href="https://link-ai.tech/cowagent/create">☁️ Try Online</a>
</p>

<br/>

## 🌟 Highlights

| Capability | Description |
| :--- | :--- |
| [Planning](https://docs.cowagent.ai/en/intro/architecture) | Decomposes complex tasks and executes them step by step, looping over tools until the goal is reached |
| [Memory](https://docs.cowagent.ai/en/memory/index) | Three-tier architecture (context → daily → core), automatic Deep Dream distillation, hybrid keyword + vector retrieval |
| [Knowledge](https://docs.cowagent.ai/en/knowledge/index) | Auto-curates structured knowledge into a Markdown wiki, builds an evolving knowledge graph with visual browsing |
| [Skills](https://docs.cowagent.ai/en/skills/index) | One-click install from [Skill Hub](https://skills.cowagent.ai/), GitHub, ClawHub; or create custom skills via natural-language conversation |
| [Tools](https://docs.cowagent.ai/en/tools/index) | Built-in file I/O, terminal, browser, scheduler, memory retrieval, web search, and 10+ more tools — with native MCP integration |
| [Channels](https://docs.cowagent.ai/en/channels/index) | Integrates with Web, WeChat, Feishu, DingTalk, WeCom, QQ, Official Accounts, and Telegram |
| Multimodal | First-class support for text, images, voice, and files — recognition, generation, and delivery |
| [Models](https://docs.cowagent.ai/en/models/index) | Claude, GPT, Gemini, DeepSeek, Qwen, GLM, Kimi, MiniMax, Doubao, and more — swap providers from the Web console with one click |
| [Deploy](https://docs.cowagent.ai/en/guide/quick-start) | One-line installer, unified Web console, multiple deployment modes (local, Docker, server) |

<br/>

## 🏗️ Architecture

<img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/architecture/en/architecture.jpg" alt="CowAgent Architecture" width="750"/>

CowAgent is a complete **Agent Harness**: messages flow in through **Channels**; the **Agent Core** plans and reasons over memory, knowledge, and the available tools and skills; **Models** generate the response, which is sent back through the originating channel. Every layer is decoupled and independently extensible.

Read more in [Architecture](https://docs.cowagent.ai/en/intro/architecture).

<br/>

## 🚀 Quick Start

A one-line installer takes care of dependencies, configuration, and startup:

**Linux / macOS:**

```bash
bash <(curl -fsSL https://cdn.link-ai.tech/code/cow/run.sh)
```

**Windows (PowerShell):**

```powershell
irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex
```

**Docker:**

```bash
curl -O https://cdn.link-ai.tech/code/cow/docker-compose.yml
docker compose up -d
```

Once started, open `http://localhost:9899` to access the **Web console** — your one-stop hub to chat with the Agent, configure models, connect channels, and install skills.

> Deploying on a server? Set `web_host` to `0.0.0.0` in `config.json` to make the console reachable from outside, and set `web_password` to protect it. Don't forget to open port `9899` in your firewall or security group.

> 📖 Detailed guides: [Quick Start](https://docs.cowagent.ai/en/guide/quick-start) · [Install from Source](https://docs.cowagent.ai/en/guide/manual-install) · [Upgrade](https://docs.cowagent.ai/en/guide/upgrade)

After installation, manage the service with the [cow CLI](https://docs.cowagent.ai/en/cli/index):

```bash
cow start | stop | restart        # service control
cow status | logs                  # status and logs
cow update                         # pull latest code and restart
cow skill install <name>           # install a skill
cow install-browser                # install browser automation
```

<br/>

## 🤖 Models

CowAgent supports all mainstream LLM providers. **Chat, vision, image generation, ASR/TTS, and embeddings** can each be routed to a different vendor. Providers are configured directly in the Web console — no manual file editing required.

| Provider | Featured Models | Chat | Vision | Image Gen | ASR | TTS | Embedding |
| --- | --- | :-: | :-: | :-: | :-: | :-: | :-: |
| [Claude](https://docs.cowagent.ai/en/models/claude) | claude-opus-4-7 | ✅ | ✅ | | | | |
| [OpenAI](https://docs.cowagent.ai/en/models/openai) | gpt-5.5, o-series | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Gemini](https://docs.cowagent.ai/en/models/gemini) | gemini-3.5-flash | ✅ | ✅ | ✅ | | | |
| [DeepSeek](https://docs.cowagent.ai/en/models/deepseek) | deepseek-v4-flash / pro | ✅ | | | | | |
| [Qwen](https://docs.cowagent.ai/en/models/qwen) | qwen3.7-max | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [GLM](https://docs.cowagent.ai/en/models/glm) | glm-5.1, glm-5v-turbo | ✅ | ✅ | | ✅ | | ✅ |
| [Doubao](https://docs.cowagent.ai/en/models/doubao) | doubao-seed-2.0 series | ✅ | ✅ | ✅ | | | ✅ |
| [Kimi](https://docs.cowagent.ai/en/models/kimi) | kimi-k2.6 | ✅ | ✅ | | | | |
| [MiniMax](https://docs.cowagent.ai/en/models/minimax) | MiniMax-M2.7 | ✅ | ✅ | ✅ | | ✅ | |
| [ERNIE](https://docs.cowagent.ai/en/models/qianfan) | ernie-5.1 | ✅ | ✅ | | | | |
| [MiMo](https://docs.cowagent.ai/en/models/mimo) | mimo-v2.5 / pro | ✅ | ✅ | | | ✅ | |
| [LinkAI](https://docs.cowagent.ai/en/models/linkai) | One key for 100+ models | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| [Custom](https://docs.cowagent.ai/en/models/custom) | Local models / third-party proxy | ✅ | | | | | |

> For details on each provider, see the [Models overview](https://docs.cowagent.ai/en/models/index).

<br/>

## 💬 Channels

A single Agent instance can serve multiple channels in parallel. Most channels can be onboarded right from the Web console.

| Channel | Text | Image | File | Voice | Group |
| --- | :-: | :-: | :-: | :-: | :-: |
| [Web Console](https://docs.cowagent.ai/en/channels/web) (default) | ✅ | ✅ | ✅ | ✅ | |
| [WeChat](https://docs.cowagent.ai/en/channels/weixin) | ✅ | ✅ | ✅ | ✅ | |
| [Feishu / Lark](https://docs.cowagent.ai/en/channels/feishu) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [DingTalk](https://docs.cowagent.ai/en/channels/dingtalk) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WeCom Bot](https://docs.cowagent.ai/en/channels/wecom-bot) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [QQ](https://docs.cowagent.ai/en/channels/qq) | ✅ | ✅ | ✅ | | ✅ |
| [WeCom App](https://docs.cowagent.ai/en/channels/wecom) | ✅ | ✅ | ✅ | ✅ | |
| [WeChat Official Account](https://docs.cowagent.ai/en/channels/wechatmp) | ✅ | ✅ | | ✅ | |
| [Telegram](https://docs.cowagent.ai/en/channels/telegram) | ✅ | ✅ | ✅ | ✅ | ✅ |

> See the [Channels overview](https://docs.cowagent.ai/en/channels/index) for setup details.

<img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/web-console-chat.png" alt="CowAgent Web Console" width="800"/>

*The Web console is the default channel and the unified entry point to configure models, channels, skills, memory, and more.*

<br/>

## 🧠 Memory & Knowledge Base

**Long-term memory** uses a three-tier architecture: conversation context (short-term) → daily memory (mid-term) → MEMORY.md (long-term). A nightly **Deep Dream** pass distills scattered memories into refined long-term entries and a narrative journal. See [Long-term Memory](https://docs.cowagent.ai/en/memory/index) · [Deep Dream](https://docs.cowagent.ai/en/memory/deep-dream).

**Personal knowledge base** complements the time-ordered memory by organizing structured knowledge **by topic**. The Agent automatically curates valuable information from conversations, maintains cross-references and indexes, and the Web console offers an interactive knowledge-graph view. See [Personal Knowledge Base](https://docs.cowagent.ai/en/knowledge/index).

<table>
  <tr>
    <td width="50%">
      <img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/web-console-memory.png" alt="Long-term Memory" />
      <p align="center"><em>Long-term Memory · Three-tier architecture + Deep Dream</em></p>
    </td>
    <td width="50%">
      <img src="https://cdn.jsdelivr.net/gh/zhayujie/cowagent-assets@main/screenshots/en/web-console-knowledge.png" alt="Personal Knowledge Base" />
      <p align="center"><em>Knowledge Base · Auto-curated Markdown wiki</em></p>
    </td>
  </tr>
</table>

<br/>

## 🔧 Tools & Skills

**Tools** are atomic capabilities the Agent uses to interact with system resources. **Skills** are higher-level workflows defined by a manifest file that compose multiple tools to accomplish complex tasks.

### Tool System

**Built-in tools** cover file I/O (`read` / `write` / `edit` / `ls`), terminal (`bash`), file sending (`send`), memory retrieval (`memory`), environment variables (`env_config`), web fetching (`web_fetch`), scheduling (`scheduler`), web search (`web_search`), vision (`vision`), and browser automation (`browser`).

**MCP protocol** integrates the open ecosystem of [Model Context Protocol](https://modelcontextprotocol.io) servers. A single `mcp.json` is enough — supports stdio / SSE transports, hot reload, and zero-code integration.

Learn more: [Tools overview](https://docs.cowagent.ai/en/tools/index) · [MCP integration](https://docs.cowagent.ai/en/tools/mcp).

### Skills System

- **[Skill Hub](https://skills.cowagent.ai/)** — open skill marketplace: browse, search, install in one click
- **GitHub / ClawHub / URL and more** — install skills from any source
- **Conversational authoring** — generate custom skills through dialogue with `skill-creator`; turn any workflow or third-party API into a reusable skill

```bash
/skill list                   # list installed skills
/skill search <keyword>        # search the marketplace
/skill install <name>          # one-click install
```

Learn more: [Skills overview](https://docs.cowagent.ai/en/skills/index) · [Creating Skills](https://docs.cowagent.ai/en/skills/create).

<br/>

## 🏷 Changelog

> **2026.05.22:** [v2.0.9](https://github.com/zhayujie/CowAgent/releases/tag/2.0.9) — Model management, MCP protocol support, persistent browser sessions, new models (gpt-5.5, gemini-3.5-flash, qwen3.7-max), deployment hardening.

> **2026.05.06:** [v2.0.8](https://github.com/zhayujie/CowAgent/releases/tag/2.0.8) — Feishu channel overhaul (voice, streaming, QR onboarding), DeepSeek V4 and Baidu Qianfan support, scheduler tool upgrades.

> **2026.04.22:** [v2.0.7](https://github.com/zhayujie/CowAgent/releases/tag/2.0.7) — Built-in image generation (GPT Image 2, Nano Banana), new models (Kimi K2.6, Claude Opus 4.7, GLM 5.1), memory and knowledge enhancements.

> **2026.04.14:** [v2.0.6](https://github.com/zhayujie/CowAgent/releases/tag/2.0.6) — Knowledge base, Deep Dream memory distillation, smart context compression, multi-session Web console.

> **2026.04.01:** [v2.0.5](https://github.com/zhayujie/CowAgent/releases/tag/2.0.5) — Cow CLI, Skill Hub open source, browser tool, WeCom Bot QR onboarding.

> **2026.02.03:** [v2.0.0](https://github.com/zhayujie/CowAgent/releases/tag/2.0.0) — Major upgrade to a super Agent assistant with multi-step task planning, long-term memory, and the Skills framework.

Full history: [Release Notes](https://docs.cowagent.ai/en/releases/overview)

<br/>

## 🤝 Community & Support

[File an issue](https://github.com/zhayujie/CowAgent/issues) on GitHub, or scan the QR code below to join our WeChat community:

<img width="130" src="https://img-1317903499.cos.ap-guangzhou.myqcloud.com/docs/open-community.png">

<br/>

## 🔗 Related Projects

- **[Cow Skill Hub](https://github.com/zhayujie/cow-skill-hub)** — open skill marketplace for AI Agents; works with CowAgent, OpenClaw, Claude Code, and more
- **[bot-on-anything](https://github.com/zhayujie/bot-on-anything)** — lightweight LLM application framework with integrations for Slack, Telegram, Discord, Gmail, and more
- **[AgentMesh](https://github.com/MinimalFuture/AgentMesh)** — open-source multi-agent framework for solving complex problems through team collaboration

<br/>

## 🏢 Enterprise Services

[**LinkAI**](https://link-ai.tech/) is an all-in-one AI Agent platform for enterprises and developers, offering managed hosting and enterprise-grade support for CowAgent:

- **🚀 Zero-deployment hosted runtime** — spin up a [CowAgent online assistant](https://link-ai.tech/cowagent/create) in under a minute, no server required
- **🧠 Agent infrastructure** — unified access to LLMs, knowledge bases, databases, skills, and workflows; plug-and-play building blocks that extend what CowAgent can do
- **🏢 Team & enterprise features** — workspaces, role-based access, audit logs, and private deployment for production use cases

For enterprise inquiries: sales@simple-future.tech or [scan the QR code](https://cdn.link-ai.tech/consultant.jpg) to reach our team on WeChat.

<br/>

## 🛠️ Development & Contributing

Contributions are welcome — add a new channel by following the [Feishu channel reference](https://github.com/zhayujie/CowAgent/blob/master/channel/feishu/feishu_channel.py), or contribute new skills to [Skill Hub](https://skills.cowagent.ai/submit).

⭐ Star the project to follow updates, and feel free to open PRs and Issues.

## 🌟 Contributors

![cow contributors](https://contrib.rocks/image?repo=zhayujie/CowAgent&max=1000)

<br/>

## ⚠️ Disclaimer

1. This project is licensed under the [MIT License](/LICENSE) and is intended for technical research and learning. You are responsible for complying with applicable laws and regulations in your jurisdiction; the maintainers assume no liability for any consequences arising from use of this project.
2. **Cost & safety:** Agent mode consumes substantially more tokens than regular chat — pick models that balance quality and cost. The Agent has access to your local operating system, so only deploy it in trusted environments.
3. CowAgent is a pure open-source project and does not participate in, authorize, or issue any cryptocurrency.

<br/>

## 📌 Project Renaming Notice

This project was previously named `chatgpt-on-wechat` and is now officially **CowAgent**. The old GitHub URL redirects automatically; existing users may optionally run `git remote set-url origin https://github.com/zhayujie/CowAgent.git` to update the local remote.
````
