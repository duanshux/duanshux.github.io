import{_ as a,c as n,o as i,ai as e}from"./chunks/framework.J4wuZ4z4.js";const k=JSON.parse('{"title":"Nvm快速开始","description":"","frontmatter":{"title":"Nvm快速开始","prev":false,"next":false},"headers":[],"relativePath":"software/nvm/windows/index.md","filePath":"software/nvm/windows/index.md","lastUpdated":1736955357000}'),l={name:"software/nvm/windows/index.md"};function p(t,s,r,h,d,o){return i(),n("div",null,s[0]||(s[0]=[e(`<h1 id="nvm快速开始-windows版" tabindex="-1">Nvm快速开始(Windows版) <a class="header-anchor" href="#nvm快速开始-windows版" aria-label="Permalink to &quot;Nvm快速开始(Windows版)&quot;">​</a></h1><h2 id="安装nvm" tabindex="-1">安装nvm <a class="header-anchor" href="#安装nvm" aria-label="Permalink to &quot;安装nvm&quot;">​</a></h2><h3 id="项目地址" tabindex="-1">项目地址 <a class="header-anchor" href="#项目地址" aria-label="Permalink to &quot;项目地址&quot;">​</a></h3><p><a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">nvm的github项目地址</a></p><p><a href="https://github.com/coreybutler/nvm-windows" target="_blank" rel="noreferrer">nvm-windows的github项目地址</a></p><h3 id="下载地址" tabindex="-1">下载地址 <a class="header-anchor" href="#下载地址" aria-label="Permalink to &quot;下载地址&quot;">​</a></h3><p><a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">nvm-windows下载地址</a></p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><h4 id="安装包安装" tabindex="-1">安装包安装 <a class="header-anchor" href="#安装包安装" aria-label="Permalink to &quot;安装包安装&quot;">​</a></h4><p>下载<code>nvm-setup.exe</code>，双击安装。</p><p>需要注意的是选择node路径时需要自行创建相应的<code>nodejs</code>文件夹。</p><h4 id="压缩包安装" tabindex="-1">压缩包安装 <a class="header-anchor" href="#压缩包安装" aria-label="Permalink to &quot;压缩包安装&quot;">​</a></h4><p>下载<code>nvm-noinstall.zip</code>，解压到安装目录。</p><p>添加环境变量<code>NVM_HOME</code>为nvm安装目录。</p><p>添加环境变量<code>NVM_SYMLINK</code>为nodejs安装目录（不需要创建<code>nodejs</code>文件夹）。</p><p>在nvm安装目录创建文件<code>settings.txt</code>，写入</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>root nvm安装目录</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>即可正常使用。</p><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><p>换源</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_mirror</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://npmmirror.com/mirrors/node/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm_mirror</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://npmmirror.com/mirrors/npm/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> arch</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 表⽰node是运⾏在32位还是64位。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开启node.js版本管理。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> off</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#关闭node.js版本管理。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [available]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看已安装的node版本。available可选参数，查看所有可安装的node版本。list可简化成ls。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [version]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装指定的node版本。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [version] [arch]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#使⽤指定版本的node。可指定32位或64位。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#卸载指定版本的node。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> versio</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看nvm版本号。version可简化为v。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="安装nodejs" tabindex="-1">安装nodejs <a class="header-anchor" href="#安装nodejs" aria-label="Permalink to &quot;安装nodejs&quot;">​</a></h2><p>查看可用的nodejs版本</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> available</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装需要的nodejs版本，以安装node18.17.1为例</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18.17.1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用对应的nodejs版本，以node18.17.1为例</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18.17.1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>遇到弹出对话框点是即可。</p>`,31)]))}const b=a(l,[["render",p]]);export{k as __pageData,b as default};
