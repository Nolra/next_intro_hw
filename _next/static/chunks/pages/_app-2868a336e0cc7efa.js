(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4285)}])},3991:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",i="navigate",l="restore",u="server-patch",a="prefetch",s="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2387),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let n=r(8754),o=r(1757),i=o._(r(7294)),l=r(3935),u=n._(r(2636)),a=r(5471),s=r(3735),c=r(3341);r(4210);let f=r(9955),d=n._(r(7746)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next_intro_hw/",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,n,o,i){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function h(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:l,width:u,decoding:a,className:s,style:c,fetchPriority:f,placeholder:d,loading:p,unoptimized:m,fill:b,onLoadRef:v,onLoadingCompleteRef:y,setBlurComplete:_,setShowAltText:w,onLoad:j,onError:x,...E}=e;return i.default.createElement("img",{...E,...h(f),loading:p,width:u,height:l,decoding:a,"data-nimg":b?"fill":"1",className:s,style:c,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&g(e,d,v,y,_,m))},[r,d,v,y,_,x,m,t]),onLoad:e=>{let t=e.currentTarget;g(t,d,v,y,_,m)},onError:e=>{w(!0),"blur"===d&&_(!0),x&&x(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t?((0,l.preload)(r.src,n),null):i.default.createElement(u.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let v=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(f.RouterContext),n=(0,i.useContext)(c.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=p||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:u}=e,g=(0,i.useRef)(l);(0,i.useEffect)(()=>{g.current=l},[l]);let h=(0,i.useRef)(u);(0,i.useEffect)(()=>{h.current=u},[u]);let[v,y]=(0,i.useState)(!1),[_,w]=(0,i.useState)(!1),{props:j,meta:x}=(0,a.getImgProps)(e,{defaultLoader:d.default,imgConf:o,blurComplete:v,showAltText:_});return i.default.createElement(i.default.Fragment,null,i.default.createElement(m,{...j,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:w,ref:t}),x.priority?i.default.createElement(b,{isAppRouter:!r,imgAttributes:j}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(8754),o=n._(r(7294)),i=r(4532),l=r(3353),u=r(1410),a=r(9064),s=r(370),c=r(9955),f=r(4224),d=r(508),p=r(1516),g=r(4266),h=r(3991),m=new Set;function b(e,t,r,n,o,i){if(!i&&!(0,l.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(m.has(i))return;m.add(i)}let u=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(u).catch(e=>{})}function v(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let y=o.default.forwardRef(function(e,t){let r,n;let{href:u,as:m,children:y,prefetch:_=null,passHref:w,replace:j,shallow:x,scroll:E,locale:O,onClick:A,onMouseEnter:C,onTouchStart:P,legacyBehavior:S=!1,...R}=e;r=y,S&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let I=o.default.useContext(c.RouterContext),M=o.default.useContext(f.AppRouterContext),k=null!=I?I:M,N=!I,T=!1!==_,z=null===_?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:L,as:U}=o.default.useMemo(()=>{if(!I){let e=v(u);return{href:e,as:m?v(m):e}}let[e,t]=(0,i.resolveHref)(I,u,!0);return{href:e,as:m?(0,i.resolveHref)(I,m):t||e}},[I,u,m]),F=o.default.useRef(L),V=o.default.useRef(U);S&&(n=o.default.Children.only(r));let D=S?n&&"object"==typeof n&&n.ref:t,[W,B,H]=(0,d.useIntersection)({rootMargin:"200px"}),K=o.default.useCallback(e=>{(V.current!==U||F.current!==L)&&(H(),V.current=U,F.current=L),W(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[U,D,L,H,W]);o.default.useEffect(()=>{k&&B&&T&&b(k,L,U,{locale:O},{kind:z},N)},[U,L,B,O,T,null==I?void 0:I.locale,k,N,z]);let G={ref:K,onClick(e){S||"function"!=typeof A||A(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),k&&!e.defaultPrevented&&function(e,t,r,n,i,u,a,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let g=()=>{let e=null==a||a;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:u,locale:s,scroll:e}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f,scroll:e})};c?o.default.startTransition(g):g()}(e,k,L,U,j,x,E,O,N,T)},onMouseEnter(e){S||"function"!=typeof C||C(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),k&&(T||!N)&&b(k,L,U,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:z},N)},onTouchStart(e){S||"function"!=typeof P||P(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),k&&(T||!N)&&b(k,L,U,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:z},N)}};if((0,a.isAbsoluteUrl)(U))G.href=U;else if(!S||w||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,p.getDomainLocale)(U,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);G.href=t||(0,g.addBasePath)((0,s.addLocale)(U,e,null==I?void 0:I.defaultLocale))}return S?o.default.cloneElement(n,G):o.default.createElement("a",{...R,...G},r)}),_=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),o=r(29),i="function"==typeof IntersectionObserver,l=new Map,u=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,s=a||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},u.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]);let g=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,g]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(4210);let n=r(7757),o=r(3735);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r;let u,a,s,{src:c,sizes:f,unoptimized:d=!1,priority:p=!1,loading:g,className:h,quality:m,width:b,height:v,fill:y=!1,style:_,onLoad:w,onLoadingComplete:j,placeholder:x="empty",blurDataURL:E,fetchPriority:O,layout:A,objectFit:C,objectPosition:P,lazyBoundary:S,lazyRoot:R,...I}=e,{imgConf:M,showAltText:k,blurComplete:N,defaultLoader:T}=t,z=M||o.imageConfigDefault;if("allSizes"in z)u=z;else{let e=[...z.deviceSizes,...z.imageSizes].sort((e,t)=>e-t),t=z.deviceSizes.sort((e,t)=>e-t);u={...z,allSizes:e,deviceSizes:t}}let L=I.loader||T;delete I.loader,delete I.srcSet;let U="__next_img_default"in L;if(U){if("custom"===u.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(A){"fill"===A&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[A];t&&!f&&(f=t)}let F="",V=l(b),D=l(v);if("object"==typeof(r=c)&&(i(r)||void 0!==r.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,s=e.blurHeight,E=E||e.blurDataURL,F=e.src,!y){if(V||D){if(V&&!D){let t=V/e.width;D=Math.round(e.height*t)}else if(!V&&D){let t=D/e.height;V=Math.round(e.width*t)}}else V=e.width,D=e.height}}let W=!p&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:F)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,W=!1),u.unoptimized&&(d=!0),U&&c.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(d=!0),p&&(O="high");let B=l(m),H=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:P}:{},k?{}:{color:"transparent"},_),K="blur"===x&&E&&!N?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:V,heightInt:D,blurWidth:a,blurHeight:s,blurDataURL:E,objectFit:H.objectFit})+'")'}:{},G=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,l),c=a.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:a.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:i,width:a[c]})}}({config:u,src:c,unoptimized:d,width:V,quality:B,sizes:f,loader:L}),J={...I,loading:W?"lazy":g,fetchPriority:O,width:V,height:D,decoding:"async",className:h,style:{...H,...K},sizes:G.sizes,srcSet:G.srcSet,src:G.src},X={unoptimized:d,priority:p,placeholder:x,fill:y};return{props:J,meta:X}}},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,u=n||t,a=o||r,s=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return u&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+u+" "+a+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&o?"1":"20")+"'/%3E"+s+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},unstable_getImgProps:function(){return a}});let n=r(8754),o=r(5471),i=r(4210),l=r(8872),u=n._(r(7746)),a=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next_intro_hw/",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=l.Image},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},4285:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893);r(3814);var o=r(1664),i=r.n(o),l=r(9008),u=r.n(l),a=r(5675),s=r.n(a),c={src:"/next_intro_hw/_next/static/media/logo.871e55e3.png",height:801,width:1601,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAZ0lEQVR42mOQVXFVc0tQtouUVXYFITknWQVnOS1PBnXPZNfZWx16l8upu6v5pernNWlGFcipuTOoOMU49q+ybpwtp+amEZmnnVSuFVusYOjHADRKXtcHqBeoQ1bWSUbcXkbKQU7TEwDhvhhblJHOmwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4};function f(e){let{children:t,title:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u(),{children:[(0,n.jsx)("title",{children:r}),(0,n.jsx)("meta",{name:"description",content:"JSON placeholder app for homework"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("main",{className:"mx-auto max-w-7xl px-6 lg:px-8 pt-10 pb-10",children:[(0,n.jsxs)("div",{className:"px-4 sm:px-0",children:[(0,n.jsx)(s(),{className:"logo",src:c,alt:"JSON Logo",role:"presentation"}),(0,n.jsx)("h3",{className:"text-base underline font-semibold leading-7 text-gray-500",children:(0,n.jsx)(i(),{href:"/",children:"to homepage"})})]}),t]})})]})}function d(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(f,{title:r.pageTitle,children:(0,n.jsx)(t,{...r})})}},3814:function(){},9008:function(e,t,r){e.exports=r(2636)},5675:function(e,t,r){e.exports=r(2555)},1664:function(e,t,r){e.exports=r(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);