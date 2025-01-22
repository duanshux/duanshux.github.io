import{_ as a,c as i,ai as n,o as p}from"./chunks/framework.BODoyW7Z.js";const o=JSON.parse('{"title":"将vitepress部署在gitlab pages","description":"","frontmatter":{"title":"将vitepress部署在gitlab pages","prev":false,"next":false},"headers":[],"relativePath":"software/vitepress/index.md","filePath":"software/vitepress/index.md"}'),e={name:"software/vitepress/index.md"};function t(l,s,h,k,d,r){return p(),i("div",null,s[0]||(s[0]=[n(`<h1 id="将vitepress部署在gitlab-pages" tabindex="-1">将vitepress部署在gitlab pages <a class="header-anchor" href="#将vitepress部署在gitlab-pages" aria-label="Permalink to &quot;将vitepress部署在gitlab pages&quot;">​</a></h1><p>在vitpress中创建三个文件，然后将viepress整体提交到gitlab，启用gitlab pages和gitlab ci自动构建，每次提交就会自动构建部署。</p><p>要添加的文件如下：</p><p>创建<code>.gitlab-ci.yml</code>，写入。</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The Docker image that will be used to build your app</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node:lts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node_modules/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Functions that should be executed before the build script is run</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">before_script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm add -D vitepress</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sed -i &#39;$d&#39; package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sed -i &#39;s/}/},/g&#39; package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sed -i &#39;$ r ./requirments/add.txt&#39; package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cat package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run docs:build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  artifacts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # The folder that contains the files to be exposed at the Page URL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">public</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # This ensures that only pushes to the default branch will trigger</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # a pages deploy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH</span></span></code></pre></div><p>创建<code>.gitignore</code>文件，写入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package.json</span></span>
<span class="line"><span>package-lock.json</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>docs/.vitepress/cache/</span></span></code></pre></div><p>创建<code>requirments</code>文件夹，在文件夹中创建<code>add.txt</code>文件，写入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;docs:dev&quot;: &quot;vitepress dev docs&quot;,</span></span>
<span class="line"><span>    &quot;docs:build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span>    &quot;docs:preview&quot;: &quot;vitepress preview docs&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,9)]))}const E=a(e,[["render",t]]);export{o as __pageData,E as default};
