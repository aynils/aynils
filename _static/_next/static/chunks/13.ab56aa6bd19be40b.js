"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13],{6013:function(t,e,n){n.r(e);var i=n(7320),s=n(1720),a=n(425),c=n(7059),o=n.n(c);e.default=function(t){var e=t.mapping,n=(0,s.useState)(!0),c=n[0],r=n[1],m=(0,a.F)(),u=m.theme,g=m.resolvedTheme,d=""===o().comment.giscusConfig.themeURL?"dark"===u||"dark"===g?o().comment.giscusConfig.darkTheme:o().comment.giscusConfig.theme:o().comment.giscusConfig.themeURL,f="comments-container",p=(0,s.useCallback)((function(){r(!1);var t=document.createElement("script");t.src="https://giscus.app/client.js",t.setAttribute("data-repo",o().comment.giscusConfig.repo),t.setAttribute("data-repo-id",o().comment.giscusConfig.repositoryId),t.setAttribute("data-category",o().comment.giscusConfig.category),t.setAttribute("data-category-id",o().comment.giscusConfig.categoryId),t.setAttribute("data-mapping",e),t.setAttribute("data-reactions-enabled",o().comment.giscusConfig.reactions),t.setAttribute("data-emit-metadata",o().comment.giscusConfig.metadata),t.setAttribute("data-input-position",o().comment.giscusConfig.inputPosition),t.setAttribute("data-lang",o().comment.giscusConfig.lang),t.setAttribute("data-theme",d),t.setAttribute("crossorigin","anonymous"),t.async=!0;var n=document.getElementById(f);return n&&n.appendChild(t),function(){var t=document.getElementById(f);t&&(t.innerHTML="")}}),[d,e]);return(0,s.useEffect)((function(){document.querySelector("iframe.giscus-frame")&&p()}),[p]),(0,i.BX)("div",{className:"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300",children:[c&&(0,i.tZ)("button",{onClick:p,children:"Load Comments"}),(0,i.tZ)("div",{className:"giscus",id:f})]})}}}]);