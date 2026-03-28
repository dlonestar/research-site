import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../plugins/emitters/ogImage"
export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    // Url of current page
    const socialUrl =
      fileData.slug === "404" ? url.toString() : joinSegments(url.toString(), fileData.slug!)

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some(
      (e) => e.name === CustomOgImagesEmitterName,
    )
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`

    const passwordGateScript = `(function(){
var H='cc7fffc22c4f12d190e818690c66a232d95bd5b590fcdf50bcedebca912ea720';
var C=30;
function gc(n){var m=document.cookie.match(new RegExp('(^| )'+n+'=([^;]+)'));return m?m[2]:null}
if(gc('sr_auth')===H)return;
var s=document.createElement('style');
s.textContent='body>*{display:none!important}#sr-gate{display:flex!important;position:fixed;inset:0;z-index:999999;background:#0F0F12;align-items:center;justify-content:center;font-family:Inter,system-ui,sans-serif}#sr-gate *{box-sizing:border-box}#sr-gate .box{text-align:center;max-width:380px;width:90%;padding:48px 32px;border-radius:16px;background:#18181D;border:1px solid #2A2830}#sr-gate h1{color:#D4B862;font-size:1.5rem;margin:0 0 8px;font-weight:600;letter-spacing:-0.02em}#sr-gate p{color:#6E6E73;font-size:0.85rem;margin:0 0 32px}#sr-gate input{width:100%;padding:14px 16px;border:1px solid #2A2830;border-radius:10px;background:#0F0F12;color:#ECECEE;font-size:1rem;outline:none;transition:border-color .2s}#sr-gate input:focus{border-color:#D4B862}#sr-gate button{width:100%;padding:14px;margin-top:12px;border:none;border-radius:10px;background:#D4B862;color:#0F0F12;font-size:0.95rem;font-weight:600;cursor:pointer;transition:background .2s}#sr-gate button:hover{background:#E8D090}#sr-gate .err{color:#FF6B6B;font-size:0.8rem;margin-top:12px;display:none}';
document.head.appendChild(s);
document.addEventListener('DOMContentLoaded',function(){
var d=document.createElement('div');d.id='sr-gate';
d.innerHTML='<div class="box"><h1>Star Research</h1><p>Access is restricted to authorized members.</p><form id="sr-f"><input id="sr-i" type="password" placeholder="Password" autocomplete="current-password" autofocus/><button type="submit">Enter</button><div class="err" id="sr-e">Incorrect password</div></form></div>';
document.body.appendChild(d);
document.getElementById('sr-i').focus();
document.getElementById('sr-f').addEventListener('submit',async function(e){
e.preventDefault();
var pw=document.getElementById('sr-i').value;
var buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(pw));
var h=Array.from(new Uint8Array(buf)).map(function(b){return b.toString(16).padStart(2,'0')}).join('');
if(h===H){var x=new Date();x.setTime(x.getTime()+C*864e5);document.cookie='sr_auth='+H+';expires='+x.toUTCString()+';path=/;SameSite=Lax';location.reload()}
else{document.getElementById('sr-e').style.display='block';document.getElementById('sr-i').value='';document.getElementById('sr-i').focus()}
})})})();`

    return (
      <head>
        <script dangerouslySetInnerHTML={{ __html: passwordGateScript }} />
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}
        {/* Pretendard — Korean-optimized font */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
          </>
        )}

        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        {/* generator tag removed */}

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
