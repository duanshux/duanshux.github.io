import{_ as a,c as i,a2 as e,o as t}from"./chunks/framework.Dz7_3PEu.js";const g=JSON.parse('{"title":"Hexo快速开始","description":"","frontmatter":{"title":"Hexo快速开始","prev":false,"next":{"text":"Hexo备份与恢复","link":"/software/hexo/backup/"}},"headers":[],"relativePath":"software/hexo/index.md","filePath":"software/hexo/index.md"}'),n={name:"software/hexo/index.md"};function h(l,s,p,o,k,d){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="hexo快速开始" tabindex="-1">Hexo快速开始 <a class="header-anchor" href="#hexo快速开始" aria-label="Permalink to &quot;Hexo快速开始&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><s>腾讯云服务器和域名闲着也是闲着，想着不如搭个博客玩玩吧，话说回来，这服务器闲了也有一年了吧，笑。另外本篇写的是搭在github上，自己服务器的话配个git仓库就行了，这个后面另写吧。</s></p><p>本篇使用github对博客进行备份同步，使用github pages进行托管。</p><h2 id="git基本操作" tabindex="-1">Git基本操作 <a class="header-anchor" href="#git基本操作" aria-label="Permalink to &quot;Git基本操作&quot;">​</a></h2><p>博客是用hexo搭的，基本是个成品，只要学会部署和稍稍修改下主题就可以很愉快的使用了。</p><p>hexo的一个好处就是可以放到github上去，不需要另外购买域名和服务器(当然真想搭在自己的服务器上也行，我就是这么做的)，那么可想而知的是需要用到git。</p><h3 id="本地git安装" tabindex="-1">本地git安装 <a class="header-anchor" href="#本地git安装" aria-label="Permalink to &quot;本地git安装&quot;">​</a></h3><p>首先肯定是要下载安装包：<a href="https://git-scm.com/download/win" target="_blank" rel="noreferrer">git下载地址</a></p><p>下载64位安装版本（如果使用32位windows则选择32位版本，windows11直接下载64位版本），双击安装。</p><p>添加勾选&#39;Add a Git Bash Profile to Windows Terminal&#39;选项，其余选项不变，然后一路next安装。</p><h3 id="git使用" tabindex="-1">git使用 <a class="header-anchor" href="#git使用" aria-label="Permalink to &quot;git使用&quot;">​</a></h3><h4 id="打开" tabindex="-1">打开 <a class="header-anchor" href="#打开" aria-label="Permalink to &quot;打开&quot;">​</a></h4><p><s>首先，初始化，右键鼠标，或者直接在程序菜单里找到“Git Bash”,打开</s></p><p><s>好了，现在的默认窗口其实不怎么符合我们的审美，但是我也并不打算在这里写什么美化教程，毕竟这里只写基本操作（其实就是想再水一篇文，笑）</s></p><p>打开windows Terminal即可。（中文软件名为终端，是windows11自带的软件，windows10可在微软应用商店即Microsoft Store下载安装）</p><h4 id="配置全局信息" tabindex="-1">配置全局信息 <a class="header-anchor" href="#配置全局信息" aria-label="Permalink to &quot;配置全局信息&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;用户名&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;邮箱&quot;</span></span></code></pre></div><h4 id="生成ssh-key" tabindex="-1">生成ssh key <a class="header-anchor" href="#生成ssh-key" aria-label="Permalink to &quot;生成ssh key&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh-keygen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsa</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;邮箱&quot;</span></span></code></pre></div><h4 id="配置github的ssh免密" tabindex="-1">配置github的ssh免密 <a class="header-anchor" href="#配置github的ssh免密" aria-label="Permalink to &quot;配置github的ssh免密&quot;">​</a></h4><p>然后在C:\\Users\\&quot;你的windows用户名&quot;\\.ssh这个文件夹中，打开id_rsa.pub文件（以文本方式打开）,将其中的内容复制。</p><p>在github的设置里面，添加新的SSH keys，将复制的内容粘贴到Key中，Title（标题）随便填。</p><h4 id="创建github仓库" tabindex="-1">创建github仓库 <a class="header-anchor" href="#创建github仓库" aria-label="Permalink to &quot;创建github仓库&quot;">​</a></h4><p>github新建一个私有仓库，用来备份博客，仓库名随意，我创建的仓库名为“writeblog”。</p><p>创建仓库方法：点击加号，选择下拉框中的New repository。</p><p>再新建一个公共仓库，用来托管博客，仓库名为“用户名.github.io”</p><p><s>创建完成之后，尝试使用ssh克隆仓库到本地</s></p><h4 id="更多" tabindex="-1">更多 <a class="header-anchor" href="#更多" aria-label="Permalink to &quot;更多&quot;">​</a></h4><p>更多git相关操作，可以参考我的另一篇博客<a href="/software/git/user/">git基本使用</a>，此处用不到就不再赘述。</p><h2 id="node-js使用" tabindex="-1">Node.js使用 <a class="header-anchor" href="#node-js使用" aria-label="Permalink to &quot;Node.js使用&quot;">​</a></h2><p><strong>本小节内容全部过时</strong></p><p><strong>本小节内容全部过时</strong></p><p><strong>本小节内容全部过时</strong></p><p>请直接参考<a href="/software/nvm/windows/">在windows下使用nvm安装管理nodejs</a>进行操作。</p><p><strong>完成后可直接跳转至下一节hexo使用</strong></p><p><strong>以下为原文，也可以使用，但不是推荐的方法</strong></p><p>在git准备好之后，接下来要在本机安装node.js，hexo就是基于此的</p><h3 id="node-js下载" tabindex="-1">Node.js下载 <a class="header-anchor" href="#node-js下载" aria-label="Permalink to &quot;Node.js下载&quot;">​</a></h3><p>网址：<a href="https://nodejs.org/zh-cn/" target="_blank" rel="noreferrer">Node.js下载地址</a></p><p>我下载的12.14.0，下载完成后直接安装，还是一路next，然后检查是否成功</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><p>分别使用上面的两条命令，如果能输出版本号即可。</p><h3 id="node-js基本配置" tabindex="-1">Node.js基本配置 <a class="header-anchor" href="#node-js基本配置" aria-label="Permalink to &quot;Node.js基本配置&quot;">​</a></h3><p>npm默认源由于众所周知的原因，非常慢，所以这里首先要换源，才能愉快的玩耍。</p><p>这里通过nrm插件实现，首先安装nrm插件，下载源指定为淘宝源，避免先有鸡还是蛋这种事</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nrm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --registry=https://registry.npm.taobao.org</span></span></code></pre></div><p>nrm下载完成之后，可以查看默认可用源</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nrm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span></code></pre></div><p>选择使用淘宝源（或其他源）</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nrm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> taobao</span></span></code></pre></div><p>OK，基本配置完毕</p><h2 id="hexo使用" tabindex="-1">hexo使用 <a class="header-anchor" href="#hexo使用" aria-label="Permalink to &quot;hexo使用&quot;">​</a></h2><h3 id="hexo安装" tabindex="-1">hexo安装 <a class="header-anchor" href="#hexo安装" aria-label="Permalink to &quot;hexo安装&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hexo-cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hexo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><h3 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to &quot;初始化&quot;">​</a></h3><p>进入一个空文件夹，然后在该文件夹中按住shift，鼠标右击，选择打开powershell窗口，执行</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><p>如果遇到powershell无法执行脚本的错误，请参考<a href="/software/powershell7/run-shell/">powershell运行脚本</a>由于众所周知的原因，下载的有点慢，耐心等会</p><p>然后选择在vscode中打开。</p><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><p><strong>此小节的配置已被本人弃用，但依旧可用</strong><strong>可直接跳转至下一节本地测试</strong></p><p>修改./package.json文件中的scripts</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;deploy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hexo clean &amp;&amp; hexo g -d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hexo clean &amp;&amp; hexo g &amp;&amp; hexo s&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><h3 id="本地测试" tabindex="-1">本地测试 <a class="header-anchor" href="#本地测试" aria-label="Permalink to &quot;本地测试&quot;">​</a></h3><p>在vscode中按ctrl+\`打开终端，执行</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span></span></code></pre></div><p>然后在浏览器中打开网址</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://localhost:4000</span></span></code></pre></div><p>可以看到页面则测试成功。</p><p>在终端Ctrl+C结束。</p><h3 id="提交到github" tabindex="-1">提交到github <a class="header-anchor" href="#提交到github" aria-label="Permalink to &quot;提交到github&quot;">​</a></h3><p>修改./_config.yml文件，在最末尾的deploy:</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">git</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  repo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;用于托管的github仓库的ssh地址，地址可通过下图方式复制&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  branch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main</span></span></code></pre></div><p>安装git提交插件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hexo-deployer-git</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span></span></code></pre></div><p>再执行</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hexo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> d</span></span></code></pre></div><p>提交成功</p><p>再浏览器输入网址</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;用户名&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.github.io</span></span></code></pre></div><p>可以成功访问则配置成功。</p><h2 id="备份" tabindex="-1">备份 <a class="header-anchor" href="#备份" aria-label="Permalink to &quot;备份&quot;">​</a></h2><p>新建文件 <strong>.gitignore</strong> ，写入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>node_modules/</span></span>
<span class="line"><span>.github/</span></span>
<span class="line"><span>themes/</span></span>
<span class="line"><span>_config.landscape.yml</span></span>
<span class="line"><span>package-lock.json</span></span>
<span class="line"><span>package.json</span></span>
<span class="line"><span>db.json</span></span>
<span class="line"><span>public/</span></span>
<span class="line"><span>.deploy_git/</span></span></code></pre></div><p>使用git将本文件夹内容同步至github的备份仓库</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;re&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 用于备份的github仓库的ssh地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rebase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span></code></pre></div><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><p>好了，基本的搭建和备份就此完成 <s>，后面的主题配置及美化，服务器git仓库搭建以及一些其他东西有时间再写</s> 。</p>`,89)]))}const c=a(n,[["render",h]]);export{g as __pageData,c as default};
