import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.Dz7_3PEu.js";const g=JSON.parse('{"title":"typecho快速开始","description":"","frontmatter":{"title":"typecho快速开始","prev":false,"next":false},"headers":[],"relativePath":"software/typecho/index.md","filePath":"software/typecho/index.md"}'),h={name:"software/typecho/index.md"};function p(l,s,e,k,d,r){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="typecho快速开始" tabindex="-1">typecho快速开始 <a class="header-anchor" href="#typecho快速开始" aria-label="Permalink to &quot;typecho快速开始&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>本文测试环境：Debian11。</p><h2 id="环境安装" tabindex="-1">环境安装 <a class="header-anchor" href="#环境安装" aria-label="Permalink to &quot;环境安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php-fpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php-curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php-mbstring</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php-mysql</span></span></code></pre></div><h2 id="typecho文件部署" tabindex="-1">Typecho文件部署 <a class="header-anchor" href="#typecho文件部署" aria-label="Permalink to &quot;Typecho文件部署&quot;">​</a></h2><h3 id="上传typecho" tabindex="-1">上传Typecho <a class="header-anchor" href="#上传typecho" aria-label="Permalink to &quot;上传Typecho&quot;">​</a></h3><p>本地执行</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./Downloads/typecho</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user@ip:/home/user/Downloads</span></span></code></pre></div><p>user和ip替换为自己的用户名和ip地址</p><h3 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h3><p>复制到 <code>/var/www</code>文件夹</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Downloads/typecho</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/www</span></span></code></pre></div><p>修改文件夹权限</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> www-data:www-data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/www/</span></span></code></pre></div><h2 id="数据库设置" tabindex="-1">数据库设置 <a class="header-anchor" href="#数据库设置" aria-label="Permalink to &quot;数据库设置&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mysql</span></span></code></pre></div><p>为typecho创建新的数据库和用户</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DATABASE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> typecho</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> USER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">typecho</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IDENTIFIED </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;password&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">grant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> all </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> typecho.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;typecho&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;%&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> with</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> grant</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FLUSH PRIVILEGES;</span></span></code></pre></div><h2 id="php设置" tabindex="-1">php设置 <a class="header-anchor" href="#php设置" aria-label="Permalink to &quot;php设置&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/php/7.4/fpm/php.in</span></span></code></pre></div><p>修改以下内容，以支持更大的文件上传</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">post_max_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=512M</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">upload_max_filesize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=512M</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">max_execution_time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=0</span></span></code></pre></div><h2 id="nginx设置" tabindex="-1">nginx设置 <a class="header-anchor" href="#nginx设置" aria-label="Permalink to &quot;nginx设置&quot;">​</a></h2><h3 id="修改nignx-conf" tabindex="-1">修改nignx.conf <a class="header-anchor" href="#修改nignx-conf" aria-label="Permalink to &quot;修改nignx.conf&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/nginx/nginx.conf</span></span></code></pre></div><p>在 <code>http{}</code>字段内添加以下内容，以支持更大的文件上传</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">client_max_body_size </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">512m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>修改用户，将第一行的用户改为 <code>www-data</code></p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">user </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">www-data;</span></span></code></pre></div><h3 id="添加配置文件" tabindex="-1">添加配置文件 <a class="header-anchor" href="#添加配置文件" aria-label="Permalink to &quot;添加配置文件&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/nginx/conf.d/typecho.conf</span></span></code></pre></div><p>写入</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	server_name	</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">origincat.com www.origincat.com;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	rewrite</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> ^(.*) https://$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server_name$1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">permanent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">443</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ssl;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	server_name	</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">origincat.com www.origincat.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	ssl_certificate	</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/nginx/conf.d/cert/origincat.com_bundle.crt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	ssl_certificate_key	</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/nginx/conf.d/cert/origincat.com.key;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	ssl_session_timeout	</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	ssl_protocols	</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TLSv1.2	TLSv1.3;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	ssl_ciphers </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	ssl_prefer_server_ciphers </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.html index.php;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/www/typecho;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!-e </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$request_filename) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		rewrite</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> ^(.*)$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /index.php$1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">last</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-f </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$request_filename/index.html){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			rewrite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (.*) $1/index.html </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-f </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$request_filename/index.php){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			rewrite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (.*) $1/index.php;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!-f </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$request_filename){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			rewrite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (.*) /index.php;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ~</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> \\.php$ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/www/typecho;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/nginx/snippets/fastcgi-php.conf;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		fastcgi_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">unix:/var/run/php/php7.4-fpm.sock;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	error_page </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /404.html;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h3><p>关闭apache2，避免占用80端口（没有可忽略）</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apache2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apache2</span></span></code></pre></div><p>启动nginx并设置为开机启动</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><h2 id="设置内网穿透" tabindex="-1">设置内网穿透 <a class="header-anchor" href="#设置内网穿透" aria-label="Permalink to &quot;设置内网穿透&quot;">​</a></h2><p>下载并安装</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frpc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">下载地</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">址</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frpc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 775</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/frpc</span></span></code></pre></div><p>编写配置文件</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/etc/natfrp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/etc/natfrp/frpc.ini</span></span></code></pre></div><p>注册为系统服务</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/systemd/system/frpc.service</span></span></code></pre></div><p>写入</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=SakuraFrp Service</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">After</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=network.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=idle</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=nobody</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=on-failure</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RestartSec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=60s</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ExecStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=/usr/local/bin/frpc</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WorkingDirectory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=/usr/local/etc/natfrp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WantedBy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=multi-user.target</span></span></code></pre></div><p>设置为开机启动</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frpc.service</span></span></code></pre></div><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><p>服务器上需要布置的基本就这么多，还有上传主题和插件之类的参考上传Typecho文件夹的操作。</p>`,52)]))}const o=i(h,[["render",p]]);export{g as __pageData,o as default};
