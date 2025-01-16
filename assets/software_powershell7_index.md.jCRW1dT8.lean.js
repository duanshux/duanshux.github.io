import{_ as e,c as i,a2 as a,o as l}from"./chunks/framework.Dz7_3PEu.js";const c=JSON.parse('{"title":"powershell7快速开始","description":"","frontmatter":{"title":"powershell7快速开始","prev":false,"next":{"text":"PowerShell7运行脚本","link":"/software/powershell7/run-shell/"}},"headers":[],"relativePath":"software/powershell7/index.md","filePath":"software/powershell7/index.md"}'),t={name:"software/powershell7/index.md"};function h(n,s,p,o,r,d){return l(),i("div",null,s[0]||(s[0]=[a(`<h1 id="powershell7快速开始" tabindex="-1">powershell7快速开始 <a class="header-anchor" href="#powershell7快速开始" aria-label="Permalink to &quot;powershell7快速开始&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="官方文档" tabindex="-1">官方文档 <a class="header-anchor" href="#官方文档" aria-label="Permalink to &quot;官方文档&quot;">​</a></h3><p><a href="https://learn.microsoft.com/zh-cn/powershell/scripting/whats-new/migrating-from-windows-powershell-51-to-powershell-7?view=powershell-7.3" target="_blank" rel="noreferrer">从Windows PowerShell 5.1迁移到PowerShell 7</a></p><p><a href="https://learn.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3" target="_blank" rel="noreferrer">在Windows上安装PowerShell</a></p><h3 id="方式一-使用msi安装" tabindex="-1">方式一：使用msi安装 <a class="header-anchor" href="#方式一-使用msi安装" aria-label="Permalink to &quot;方式一：使用msi安装&quot;">​</a></h3><p>下载地址：<a href="https://github.com/PowerShell/PowerShell/releases/" target="_blank" rel="noreferrer">GIthub下载地址</a></p><h3 id="方式二-使用winget安装" tabindex="-1">方式二：使用winget安装 <a class="header-anchor" href="#方式二-使用winget安装" aria-label="Permalink to &quot;方式二：使用winget安装&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">winget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Microsoft.Powershell</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> winge</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><h3 id="在windows-terminal中启用" tabindex="-1">在Windows Terminal中启用 <a class="header-anchor" href="#在windows-terminal中启用" aria-label="Permalink to &quot;在Windows Terminal中启用&quot;">​</a></h3><p>打开设置，点击添加新配置文件，选择原有的WIndow PowerShell配置文件，点击复制。</p><p>修改配置中的名称和命令行，名称修改为PowerShell7，命令行修改为安装的Powershell7。</p><p>如果使用msi安装，填入自己选定安装路径中的pwsh.exe的文件地址。</p><p>如果使用winget安装，默认安装位置为&#39;$env:ProgramFiles\\PowerShell\\7&#39;，则应填入&#39;$env:ProgramFiles\\PowerShell\\7\\pwsh.exe&#39;。</p><p>图标也可以替换为安装目录的assets文件夹中的图片。</p><h3 id="在vscode中启用" tabindex="-1">在VSCode中启用 <a class="header-anchor" href="#在vscode中启用" aria-label="Permalink to &quot;在VSCode中启用&quot;">​</a></h3><p><a href="https://code.visualstudio.com/docs/terminal/profiles" target="_blank" rel="noreferrer">VSCode终端配置官方文档</a></p><p>打开VSCode的设置，搜索&#39;terminal integrated profile windows&#39;，点击在settings.json中编辑。</p><p>添加powershell7配置</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PowerShell7&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;自己的pwsh.exe文件地址&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;icon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;terminal-powershell&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><p>完成后在设置中修改&#39;terminal integrated default profile windows&#39;，选择PowerShell7。</p><h3 id="使用oh-my-posh美化" tabindex="-1">使用Oh My Posh美化 <a class="header-anchor" href="#使用oh-my-posh美化" aria-label="Permalink to &quot;使用Oh My Posh美化&quot;">​</a></h3><p><a href="https://ohmyposh.dev/docs" target="_blank" rel="noreferrer">Oh My Posh官方文档</a></p><p>安装</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">winget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> JanDeDobbeleer.OhMyPosh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> winget</span></span></code></pre></div><p>用记事本新建并编辑PowerShell配置文件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">notepad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PROFILE</span></span></code></pre></div><p>在记事本中写入</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oh-my-posh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pwsh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Invoke-Expression</span></span></code></pre></div><p>保存并关闭记事本。</p><p>安装需要的字体，使用管理员身份打开终端，输入</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oh-my-posh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> font</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><p>在列表中找到Meslo字体并回车安装。</p><p>在终端中启用字体，找到创建的PowerShell7配置，点击外观</p><p>更改字体和配色方案</p><p>继续下拉有更改背景透明度的选项。</p><p>然后更改VSCode中的终端字体，在设置中搜索&#39;terminal integrated font family&#39;，在其中填入&#39;MesloLGM Nerd Font&#39;，填入时单引号也要填入。</p><p>VSCode终端字体配置完成，回到Windows终端。</p><p>选择Oh My Posh的主题，首先要找到主题文件夹目录。</p><p>主题文件夹目录在终端输入</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$env:POSH_THEMES_PATH</span></span></code></pre></div><p>并回车即可看见。</p><p>选择主题可以在终端输入</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Get-PoshThemes</span></span></code></pre></div><p>打开PowerShell的配置文件，修改为</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oh-my-posh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pwsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;主题文件夹目录\\主题名.omp.json&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Invoke-Expression</span></span></code></pre></div><p>重启终端，新主题生效。</p>`,48)]))}const g=e(t,[["render",h]]);export{c as __pageData,g as default};
