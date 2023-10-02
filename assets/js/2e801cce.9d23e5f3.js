"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[450],{6029:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"use-effect-with-funnel","metadata":{"permalink":"/use-effect-with-funnel","source":"@site/blog/2023-06-16-use-effect-with-funnel.md","title":"useEffect cleanup\uacfc \ud37c\ub110 \uad00\ub9ac\uc5d0 \ub300\ud55c \uc0dd\uac01\ub4e4","description":"\uac1c\uc694","date":"2023-06-16T00:00:00.000Z","formattedDate":"2023\ub144 6\uc6d4 16\uc77c","tags":[{"label":"react","permalink":"/tags/react"},{"label":"useEffect","permalink":"/tags/use-effect"}],"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"use-effect-with-funnel","title":"useEffect cleanup\uacfc \ud37c\ub110 \uad00\ub9ac\uc5d0 \ub300\ud55c \uc0dd\uac01\ub4e4","tags":["react","useEffect"]},"nextItem":{"title":"\uccab \uc81c\ud488\uc744 \ubc30\ud3ec\ud558\uace0 \ubc30\uc6b4 \uac83\ub4e4","permalink":"/after-launching-first-product"}},"content":"### **\uac1c\uc694**\\n\\n\ud37c\ub110\uc744 \uc774\ud0c8\ud560 \ub54c, \uc720\uc800\uac00 \uc5c5\ub370\uc774\ud2b8\ud55c \uc0c1\ud0dc\ub97c \ucd08\uae30 \uc0c1\ud0dc\ub85c clear\ud558\ub294 \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub300\ud574\uc11c \uace0\ubbfc\ud558\ub2e4\uac00 \uc0dd\uac01\ud55c \ub0b4\uc6a9\ub4e4\uc744 \uc815\ub9ac\ud574\ubcf4\uc558\ub2e4.\\n\\n### **TL;DR**\\n\\n- useEffect \ub0b4\uc758 \ucf54\ub4dc \uc5c6\uc774 cleanup\ub9cc \uc815\uc758\ub41c \ucf54\ub4dc\ub294 \ubb38\uc81c\uac00 \ub420 \uc218 \uc788\ub2e4.\\n- \ucef4\ud3ec\ub10c\ud2b8\uc758 side effect\ub294 \uac00\ub2a5\ud558\ub2e4\uba74 \uc774\ubca4\ud2b8\uc640 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub85c \uad00\ub9ac\ud558\uace0, useEffect\ub294 \uadf8\ub807\uac8c \ud558\uae30 \uc5b4\ub824\uc6b8 \ub54c\ub9cc \uc0ac\uc6a9\ud55c\ub2e4.\\n\\n\x3c!-- \ubaa8\ubc14\uc77c \ucee4\uba38\uc2a4 \uc571\uc758 \uacb0\uc81c \ud398\uc774\uc9c0\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uc0c1\ud669\uc744 \uc608\uc2dc\ub85c \uc0dd\uac01\ud574\ubcf4\uc790.\\n\\n\\\\- **\uacb0\uc81c \uc218\ub2e8 \uc9c0\uc815 \ud398\uc774\uc9c0** \\\\[**\ubaa8\ubc14\uc77c \ud074\ub77c\uc774\uc5b8\ud2b8 \uc571**\\\\]\\n\\\\- **\uacb0\uc81c \ud398\uc774\uc9c0** \\\\[**\uc6f9**\\\\]\\n\xa0 - **\uacb0\uc81c \ud398\uc774\uc9c0**\ub294 \uacb0\uc81c \uc218\ub2e8 \ub370\uc774\ud130\ub97c Next.js\uc758 getServerSideProps\uc5d0\uc11c Redux\uc758 initial store\ub85c \ucd08\uae30\ud654\uc2dc\ud0a4\uace0 \uc788\ub2e4.\\n\\n1.  **\ud074\ub77c\uc774\uc5b8\ud2b8 \uc571**\uc5d0\uc11c \\"**\uacb0\uc81c \uc218\ub2e8 \uc9c0\uc815 \ud398\uc774\uc9c0**\\"\ub97c \ub744\uc6b4\ub2e4.\\n2.  \uc720\uc800\uac00 \uacb0\uc81c \uc218\ub2e8\uc744 \uc9c0\uc815\ud55c\ub2e4.\\n3.  \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \\"**\uacb0\uc81c \ud398\uc774\uc9c0**\\" **\uc6f9\ubdf0** \ud654\uba74\uc744 \ub744\uc6cc\uc900\ub2e4. (\ud074\ub77c\uc774\uc5b8\ud2b8-\uc6f9\ubdf0 \uac04 \ub370\uc774\ud130 \uc804\ub2ec \ubc29\uc2dd\uc5d0 \ub300\ud574\uc11c\ub294 \uc0dd\uac01\ud558\uc9c0 \uc54a\ub294\ub2e4)\\n4.  \ucd5c\uc885 \uacb0\uc81c\uac00 \uc774\ub8e8\uc5b4\uc9c0\uc9c0 \uc54a\uace0 **\uc6f9** \\"**\uacb0\uc81c \ud398\uc774\uc9c0\\"**\ub97c \uc774\ud0c8\ud55c\ub2e4.\\n5.  \uc6f9\ubdf0\uc5d0\uc11c **\uc6f9** \\"**\uba54\uc778 \ud398\uc774\uc9c0**\\"\ub85c \uc774\ub3d9\ud55c\ub2e4.\\n\\n\uc774 \ub54c, \ucd5c\uc885 \uacb0\uc81c\uac00 \uc774\ub8e8\uc5b4\uc9c0\uc9c0 \uc54a\uc558\uc73c\ubbc0\ub85c, 5\ubc88\uc758 \uc6f9 \\"**\uba54\uc778 \ud398\uc774\uc9c0**\\"\uc5d0\uc11c **\uacb0\uc81c \uc218\ub2e8\uc774 \uc9c0\uc815\ub418\uc9c0 \uc54a\uc740** **\uc0c1\ud0dc**\uc5ec\uc57c \ud558\ub294 \uc694\uad6c\uc0ac\ud56d\uc774 \uc788\ub2e4\uace0 \uac00\uc815\ud558\uc790. \uc989, clear \ub41c \uc0c1\ud0dc\uc5ec\uc57c \ud55c\ub2e4.\\n\\n\uc774\ub7f0 \uacbd\uc6b0 \uacb0\uc81c \uc218\ub2e8 \uc815\ubcf4\ub97c clear\ud558\ub294 \ub3d9\uc791\uc740 \uc5b4\ub5bb\uac8c \uad00\ub9ac\ud574\uc57c \ud560\uae4c? --\x3e\\n\\n### **cleanup\uc744 \ud1b5\ud55c \uc194\ub8e8\uc158**\\n\\n\uac00\uc7a5 \uba3c\uc800 \ub5a0\uc62c\ub9b0 \ubc29\ubc95\uc740 \ud398\uc774\uc9c0 \ucef4\ud3ec\ub10c\ud2b8\uc758 cleanup \uc2dc\uc810\uc5d0 clear\uc2dc\ucf1c\uc8fc\ub294 \ubc29\ubc95\uc774\ub2e4.\\n\\n```tsx\\nfunction Payment() {\\n  // ...\\n\\n  useEffect(() => {\\n    return () => {\\n      dispatch(paymentActions.clear());\\n    };\\n  }, []);\\n\\n  // ...\\n}\\n```\\n\\n\ubb38\uc81c\ub294 \uac1c\ubc1c \ud658\uacbd\uc5d0\uc11c **StrictMode** \ub3d9\uc791\uc73c\ub85c \uc778\ud574 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub450 \ubc88 \ub80c\ub354\ub418\uba70 cleanup\uc774 \ud55c \ubc88 \uc2e4\ud589\ub41c\ub2e4\ub294 \uc810\uc774\ub2e4. \uacb0\uacfc\uc801\uc73c\ub85c \uc6d0\ud558\ub294 \uac12\uc73c\ub85c \uc720\uc9c0\uc2dc\ud0ac \uc218 \uc5c6\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud55c\ub2e4.\\n\\n\uc774\uc5d0 \ub300\ud55c \ud574\uacb0\ucc45\uc73c\ub85c \ub450 \uac00\uc9c0\ub97c \uc0dd\uac01\ud588\ub2e4.\\n\\n1.  \ud658\uacbd\ubcc0\uc218\ub97c \ucc38\uc870\ud558\ub294 \ub4f1(dev\uc778\uc9c0 \ud655\uc778\ud558\uace0 \ubd84\uae30) \uc5b4\ub5bb\uac8c\ub4e0 cleanup\uc744 \ub2e8 \ud55c \ubc88 \uc2e4\ud589\uc2dc\ud0a8\ub2e4.\\n2.  useEffect\uac00 \uc544\ub2cc \ub2e4\ub978 \ubc29\ubc95\uc744 \ud1b5\ud574 \uad6c\ud604\ud55c\ub2e4.\\n\\n### **cleanup\uc774 \uc194\ub8e8\uc158\uc774 \ub420 \uc218 \uc5c6\ub294 \uc774\uc720**\\n\\nuseEffect cleanup\uc774 \uc194\ub8e8\uc158\uc774 \ub420 \uc218 \uc5c6\ub2e4\uace0 \uc0dd\uac01\ud55c \uc774\uc720\ub294 \uadf8 **\uba58\ud0c8\ubaa8\ub378\uc774 \ub3d9\uae30\ud654\ub97c \uad6c\ud604\ud558\ub294 \uac83** \uc774\uae30 \ub54c\ubb38\uc774\ub2e4. \uc694\uad6c\uc0ac\ud56d\uc740 \uc720\uc800\uac00 \ud2b9\uc815 \ud37c\ub110\uc5d0 \uc9c4\uc785\ud558\uac70\ub098, \uc5b4\ub5a4 \ubc84\ud2bc\uc744 \ub204\ub974\ub294 \ub4f1\uc758 \ub3d9\uc791\uc744 \ud588\uc744 \ub54c \uadf8\uc5d0 \ubc18\uc751\ud558\ub294 \ub3d9\uc791\uc744 \uc815\uc758\ud558\uba74 \ub420 \ubfd0\uc774\ub2e4. \uc989, **\ub2e8\uc21c\ud788 \ud654\uba74\uc5d0\uc11c \uc0ac\ub77c\uc9c8 \ub54c\ub97c \uce90\uce58\ud558\uae30 \uc704\ud574 cleanup\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc644\uc804 \uc798\ubabb\ub41c \uc0ac\uace0\ubc29\uc2dd\uc77c \uc218 \uc788\ub2e4**.\\n\\n\x3c!--\\n- **StrictMode** \ub3d9\uc791\uc5d0\ub3c4 \uc77c\uad00\ub41c \uacb0\uacfc\uac00 \ub80c\ub354\ub418\ub294, \ubcf8\ub514 \uc774\ud399\ud2b8\uac00 \uc5ec\ub7ec\ubc88 \uc2e4\ud589\ub418\uc5b4\ub3c4 \uad1c\ucc2e\uc740 \ud615\ud0dc\ub85c \uad6c\ud604\ub418\uc5b4\uc57c \ud558\ub294 \uac83\uc774 \uc633\ub2e4\\n- \ub9cc\uc57d **cleanup\ub9cc \uc788\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \uadf8\uc5d0 \ud398\uc5b4\ub9c1\ub418\ub294 useEffect \uc5d0\uc11c \ucd08\uae30\ud654 \uad6c\ubb38\uc774 \uc788\uc5c8\ub2e4\uba74 \uc194\ub8e8\uc158\uc77c \uac00\ub2a5\uc131\uc774 \uc788\uc5c8\ub2e4\uace0 \uc0dd\uac01\ud55c\ub2e4.** --\x3e\\n\\n\x3c!-- > \uacb0\uc81c \ud398\uc774\uc9c0\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc804\ub2ec\ubc1b\uc740 \uacb0\uc81c \uc218\ub2e8 \ub370\uc774\ud130\ub97c Next.js\uc758 getServerSideProps\uc5d0\uc11c Redux\uc758 initial store\ub85c \ucd08\uae30\ud654\uc2dc\ud0a4\uace0 \uc788\ub2e4. --\x3e\\n\\n\x3c!-- \ub2e4\ub9cc \uc774 \uae00 \ucd08\ubc18\uc5d0 \uc5b8\uae09\ub41c \uac83\uacfc \uac19\uc774 \uc11c\ubc84\uc0ac\uc774\ub4dc\uc5d0 \ucd08\uae30\ud654 \uad6c\ubb38\uc774 \uc788\uc73c\ubbc0\ub85c, \ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc774\ub4dc\uc758 useEffect\uc5d0 \ucd08\uae30\ud654 \uad6c\ubb38\uc774 \uc704\uce58\ub418\uc9c0 \uc54a\uc73c\ubbc0\ub85c **cleanup\uc740 \uc801\uc808\ud55c \uc194\ub8e8\uc158\uc774 \uc544\ub2c8\ub77c\uace0 \uc0dd\uac01\ud588\ub2e4.** --\x3e\\n\\n\uadf8\ub807\ub2e4\uba74 \ub2e4\ub978 \ud574\uacb0\ucc45\uc740 \ubb34\uc5c7\uc774 \uc788\uc744\uae4c?\\n\\n\uae30\ubcf8\uc801\uc73c\ub85c \ub9ac\uc561\ud2b8\uc5d0\uc11c [\ucef4\ud3ec\ub10c\ud2b8\ub294 \ub80c\ub354\uc5d0 \ub300\ud574\uc11c \ud4e8\uc5b4\ud574\uc57c \ud55c\ub2e4](https://react.dev/learn/keeping-components-pure#where-you-_can_-cause-side-effects). \uacf5\uc2dd\ucc98\ub7fc \uacc4\uc0b0\ub9cc \ud574\uc57c\ud558\uc9c0, \ubcc0\uacbd\ud574\uc11c\ub294 \uc548\ub41c\ub2e4.\\n\\n```tsx\\n<Component\xa0props={1}\xa0/>\xa0\\n<Component\xa0props={1}\xa0/>\xa0//\xa0\uac19\uc740\xa0input\xa0(props,\xa0state,\xa0context)\xa0\uc5d0\xa0\ub300\ud574\uc11c\xa0\uac19\uc740\xa0\uacb0\uacfc\ub97c\xa0\ub9ac\ud134\ud574\uc57c\xa0\ud55c\ub2e4\\n```\\n\\n\ub2e8, \ub80c\ub354 \uc774\ud6c4\uc5d0 side effect\uac00 \ud544\uc694\ud55c \uc2dc\uc810\uc774 \uc788\ub2e4. \uc774\ub7f0 side effect\uc5d0\ub294 \ub370\uc774\ud130\ub97c \ubc14\uafb8\uac70\ub098 API\ub97c \uc694\uccad\ud558\ub294 \ub4f1 \ub2e4\uc591\ud55c \ud589\ub3d9\uc774 \uc788\uc744 \uc218 \uc788\ub2e4. \uc774\ub7ec\ud55c side effect\ub294 \ub300\ubd80\ubd84\xa0\uc774\ubca4\ud2b8\xa0\ud578\ub4e4\ub7ec\ub85c\xa0\ucc98\ub9ac\uac00\xa0\uac00\ub2a5\ud558\ub2e4.\\n**\uc774\ubca4\ud2b8\ub294 \ub80c\ub354 \uc911\uc5d0 \uc77c\uc5b4\ub098\uc9c0 \uc54a\uc73c\ubbc0\ub85c** \ud4e8\uc5b4\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4.\\n\\n> Even though event handlers are defined inside your component, they don\u2019t run during rendering! **So event handlers don\u2019t need to be pure.**\\n\\n\ubc1c\uc0dd\uc2dc\ucf1c\uc57c \ud558\ub294 side effect\uac00 \uadf8 \uc5b4\ub5a4 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub85c\ub3c4 \ucc98\ub9ac\uac00 \uc5b4\ub835\ub2e4\uba74, \ub9c8\uc9c0\ub9c9 \uc635\uc158\uc73c\ub85c useEffect\ub97c \ud65c\uc6a9\ud55c\ub2e4.\\n\\n\uacb0\ub860\uc801\uc73c\ub85c, \uc6b0\ub9ac\uac00 \uc81c\uc5b4\ud558\uace0 \uc2f6\uc740 \uc0c1\ud669\uc740 **\uc774\ubca4\ud2b8\ub2e4**. \ud37c\ub110\uc744 \uc774\ud0c8\ud558\ub294 \ub3d9\uc791\uc740 \ub4a4\ub85c \uac00\uae30 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\ub294 \uac83 \ucc98\ub7fc \uc774\ubca4\ud2b8\ub85c\uc11c \ucc98\ub9ac\ub420 \uc218 \uc788\uae30 \ub54c\ubb38\uc774\ub2e4.\\n\\n---\\n\\n### **\ub370\uc774\ud130\ub97c \uc5b4\ub5bb\uac8c \uad00\ub9ac\ud560 \uac83\uc778\uac00?**\\n\\n\ud55c \ud37c\ub110\uc5d0 \ud574\ub2f9\ud558\ub294 \ucf54\ub4dc\ub4e4\uc744 \ud558\ub098\uc758 \ubaa8\ub4c8\uc5d0 \uc704\uce58\uc2dc\ucf1c **\uc751\uc9d1\ub3c4\ub97c \ub192\uc5ec\uc57c \uc804\uccb4\uc801\uc778 \ub370\uc774\ud130 \ud750\ub984\uc774 \uad00\ub9ac\ub420 \uc218** \uc788\ub2e4\uace0 \uc0dd\uac01\ud588\ub2e4.\\n\\n**\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub85c \ud074\ub9ac\uc5b4\ud558\ub294 \ub85c\uc9c1\ub4e4\uc774 \uacf3\uacf3\uc5d0 \uc0b0\uc7ac\ub418\uc5b4 \uc788\uc73c\uba74 \uc804\uc5ed \uc0c1\ud0dc\uc5d0 \ub300\ud55c \uad00\ub9ac\uac00 \ud798\ub4e4\uc5b4\uc9c4\ub2e4.** \uc5b4\ub5a4 \ud37c\ub110\uc5d0\uc11c\ub294 \uc5b4\ub5a4 \ub370\uc774\ud130\ub97c \ud074\ub9ac\uc5b4\ud574\uc57c\ud558\uace0, \uadf8 \ud6c4 \uc9c4\uc785 \uc2dc\uc5d0\ub294 \uc5b4\ub5a4 \ub370\uc774\ud130\uac00 \ub0a8\uc544 \uc788\uc744 \uac83\uc774\uace0.. \uc774\ub7f0 \uac83\ub4e4\uc744 \uc0dd\uac01\ud558\uba74 \uc0c1\ud0dc\ub97c \ucd94\uc801\ud558\uae30\uc5d0 \uc5b4\ub824\uc6c0\uc774 \uc788\uc744 \uc218 \uc788\ub2e4.\\n\\ntoss\uc758 slash \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 [useFunnel](http://%20https://slash.page/ko/libraries/react/use-funnel/readme.i18n/)\ub77c\ub294 hook\uc774 \uc788\ub2e4, \uc774\ucc98\ub7fc \ud55c \ud37c\ub110\uc5d0 \ud574\ub2f9\ud558\ub294 \uc2a4\ud15d\ub4e4\uc744 \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\ub3c4 \uc88b\uc740 \uac83 \uac19\ub2e4.\\n\\n```tsx\\nconst KyoboLifeFunnel = () => {\\n  const [Funnel, state, setState] = useFunnel([\'\uc544\ud30c\ud2b8\uc5ec\ubd80\', \'\uc9c0\uc5ed\uc120\ud0dd\', \'\uc644\ub8cc\'] as const).withState<{\\n    propertyType?: \'\ube4c\ub77c\' | \'\uc544\ud30c\ud2b8\';\\n    address?: string;\\n  }>({});\\n\\n  const \uc0c1\ub2f4\uc2e0\uccad = useLoanApplicationCallback();\\n\\n  return (\\n    <Funnel>\\n      <Funnel.Step name=\\"\uc544\ud30c\ud2b8\uc5ec\ubd80\\">\\n        <\uc544\ud30c\ud2b8\uc5ec\ubd80\uc2a4\ud15d \uc9c0\uc5ed\uc120\ud0dd\uc73c\ub85c\uac00\uae30={() => setState(prev => ({...prev, step: \'\uc9c0\uc5ed\uc120\ud0dd\', isApartment: true})} />\\n      </Funnel.Step>\\n      <Funnel.Step name=\\"\uc9c0\uc5ed\uc120\ud0dd\\">\\n        <\uc9c0\uc5ed\uc120\ud0dd\uc2a4\ud15d \uc9c0\uc5ed\uc120\ud0dd\uc644\ub8cc={(\uc9c0\uc5ed\uc815\ubcf4) => setState(prev => ({...prev, step: \'\uc644\ub8cc\', region: \uc9c0\uc5ed\uc815\ubcf4})} />\\n      </Funnel.Step>\\n      <Funnel.Step name=\\"\uc644\ub8cc\\">\\n        <\uc644\ub8cc\uc2a4\ud15d \uc2e0\uccad={() => \uc0c1\ub2f4\uc2e0\uccad(state)} />\\n      </Funnel.Step>\\n    </Funnel>\\n  );\\n};\\n```"},{"id":"after-launching-first-product","metadata":{"permalink":"/after-launching-first-product","source":"@site/blog/2023-04-24-after-launching-first-product.md","title":"\uccab \uc81c\ud488\uc744 \ubc30\ud3ec\ud558\uace0 \ubc30\uc6b4 \uac83\ub4e4","description":"\uc57d 3\uac1c\uc6d4 \uc815\ub3c4 \uac1c\ubc1c\uc5d0 \ucc38\uc5ec\ud55c \uc81c\ud488\uc774 3\uc6d4 \uacbd \ub4dc\ub514\uc5b4 \uc138\uc0c1\uc5d0 \ub098\uc654\ub2e4.","date":"2023-04-24T00:00:00.000Z","formattedDate":"2023\ub144 4\uc6d4 24\uc77c","tags":[{"label":"career","permalink":"/tags/career"},{"label":"retrospect","permalink":"/tags/retrospect"}],"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"after-launching-first-product","title":"\uccab \uc81c\ud488\uc744 \ubc30\ud3ec\ud558\uace0 \ubc30\uc6b4 \uac83\ub4e4","tags":["career","retrospect"]},"prevItem":{"title":"useEffect cleanup\uacfc \ud37c\ub110 \uad00\ub9ac\uc5d0 \ub300\ud55c \uc0dd\uac01\ub4e4","permalink":"/use-effect-with-funnel"},"nextItem":{"title":"\ub0b4\uac00 2022\ub144\uc5d0 \ubc30\uc6b4 \uac83\ub4e4","permalink":"/2022-retro"}},"content":"\uc57d 3\uac1c\uc6d4 \uc815\ub3c4 \uac1c\ubc1c\uc5d0 \ucc38\uc5ec\ud55c \uc81c\ud488\uc774 3\uc6d4 \uacbd \ub4dc\ub514\uc5b4 \uc138\uc0c1\uc5d0 \ub098\uc654\ub2e4.\\n\\n\uc8fc\uc694 \uc81c\ud488\uc774\ub77c\uace0 \ud560 \ub9cc\ud55c \uc815\ub3c4\ub85c \ud06c\uae30\uac00 \ud070 \uacbd\uc6b0\ub294 \ucc98\uc74c\uc778 \uac83 \uac19\ub2e4.\\n\\n\ud68c\uc0ac\uc5d0\uc11c \uc6b4\uc601 \uc911\uc778 \uc11c\ube44\uc2a4\uc758 \ud2b9\uc9d5\uc73c\ub85c\ub294 \ud22c \uc0ac\uc774\ub4dc \ub9c8\ucf13 \ud50c\ub7ab\ud3fc \uc11c\ube44\uc2a4\ub77c\ub294 \uc810\uc774 \uc788\ub2e4. \uc790\uc5f0\uc2a4\ub7fd\uac8c \uc5b4\ub5a4 \ud55c \uc81c\ud488\uc744 \uac1c\ubc1c\ud55c\ub2e4\ub294 \uac83\uc740 \uc218\uc694\uc790(\uc774\ud6c4 \'\uc720\uc800\') \uc0ac\uc774\ub4dc\uc5d0 \uc81c\uacf5\ub418\ub294 \uc11c\ube44\uc2a4\uc640, \uacf5\uae09\uc790(\uc774\ud6c4 \'\ub4dc\ub77c\uc774\ubc84\') \uc0ac\uc774\ub4dc\uc5d0 \uc81c\uacf5\ub418\ub294 \uc11c\ube44\uc2a4\ub97c \ub3d9\uc2dc\uc5d0 \uac1c\ubc1c\ud558\uac8c \ub418\ub294 \uacbd\uc6b0\uac00 \ub9ce\ub2e4. \ub610\ud55c \ud604\uc7ac \ubaa9\uc801 \uc870\uc9c1 \ud615\ud0dc\ub85c \uc77c\ud558\uace0 \uc788\ub294\ub370, \uc774\ub7ec\ud55c \ud2b9\uc9d5\ub4e4 \ub355\ubd84\uc5d0 \uac1c\ubc1c\uc790\ub85c\uc11c\ub294 \uc7ac\ubbf8\uc788\ub294 \uacbd\ud5d8\uc744 \ud560 \uc218 \uc788\ub2e4.\\n\\n- \uc720\uc800-\ub4dc\ub77c\uc774\ubc84 \uc0ac\uc774\ub4dc\ub97c \ubaa8\ub450 \uace0\ub824\ud558\uba70 \uc81c\ud488\uc758 \uc544\uc774\ub514\uc5d0\uc774\uc158\ubd80\ud130 UI / UX \uac1c\uc120, \uc804\ubc18\uc801\uc778 \uc0ac\uc6a9 \uacbd\ud5d8\uae4c\uc9c0 \ud3ed\ub113\uac8c \ucc38\uc5ec\ud560 \uc218 \uc788\uc5c8\ub2e4.\\n- \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub85c\uc11c\ub294 \uc0dd\uac01\ud574\uc57c \ud558\ub294 \uc0ac\uc6a9\uc790\uc758 \uacbd\ud5d8\uc774 \uc804\ud600 \ub2e4\ub974\ub2e4\ub294 \uc810\uc774 \uc7ac\ubc0c\uc5c8\ub2e4.\\n\\n\uc785\uc0ac \ud6c4 \uc0ac\uc2e4\uc0c1 \uccab \ud504\ub85c\uc81d\ud2b8\uc600\uace0, \ud504\ub860\ud2b8\uc5d4\ub4dc \uad00\ub828 \uac1c\ubc1c\uc740 \ub300\uccb4\ub85c \ud63c\uc790 \uc9c4\ud589\ud588\ub2e4. \ucd08\ubc18\uc5d0\ub294 \uc0dd\uac01\ud588\ub358 \uac83\ubcf4\ub2e4 \ud06c\uae30\uac00 \ud070 \uc81c\ud488\uc774\uc5b4\uc11c \ub2f9\ud669\uc2a4\ub7fd\uae30\ub3c4 \ud588\uc9c0\ub9cc, \uac19\uc774 \uc791\uc5c5\ud55c \ub3d9\ub8cc\ub4e4\uc758 \ub3c4\uc6c0 \ub355\ubd84\uc5d0 \uc798 \ub9c8\ubb34\ub9ac\ud560 \uc218 \uc788\uc5c8\ub2e4. \ud504\ub85c\ub85c\uc11c \ucc98\uc74c\uc73c\ub85c \ub0b4\ub193\uc740 \ubcfc\ub968 \uc788\ub294 \uacb0\uacfc\ubb3c\uc774\uc790, \uadf8 \uacfc\uc815\uc5d0 \uc8fc\ub3c4\uc801\uc73c\ub85c \ucc38\uc5ec\ud560 \uc218 \uc788\ub294 \uc810\uc774 \uc758\ubbf8 \uc788\uc5c8\ub2e4\uace0 \uc0dd\uac01\ud55c\ub2e4. \ubc30\ud3ec \uc774\ud6c4 \ud070 \uc774\uc288 \uc5c6\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ud504\ub85c\ub355\uc158\uc5d0\uc11c \uc6b4\uc601 \uc911\uc778 \uc810\ub3c4 \ud504\ub85c\uc81d\ud2b8\ub85c\uc11c \uc88b\uc740 \ub9c8\ubb34\ub9ac\uc600\ub2e4\uace0 \uc0dd\uac01\ud55c\ub2e4.\\n\\n\uc544\uc26c\uc6e0\ub358 \uc810\uc740 \ub2e4\uc74c\ucc98\ub7fc \uc815\ub9ac\ud574 \ubcfc \uc218 \uc788\uaca0\ub2e4.\\n\\n- \uc608\uc0c1 \uac1c\ubc1c \uc2dc\uac04 \uc0b0\uc815\uc774 \ubd80\uc815\ud655\ud588\ub2e4.\\n\\n  - \ucf54\ub4dc\ubca0\uc774\uc2a4\uc640 \uae30\uc874 \uc5c5\ubb34 \ud504\ub85c\uc138\uc2a4 \uc774\ud574\ub3c4\uac00 \ub2e4\uc18c \ubd80\uc871\ud55c \uc0c1\ud0dc\uc600\uae30\uc5d0 \uc0b0\uc815\ud588\ub358 \uac83\uacfc \uc2e4\uc81c \uac1c\ubc1c \ub9c8\ubb34\ub9ac \uc2dc\uac04\uc774 \ub2e4\ub978 \uacbd\uc6b0\uac00 \uaf64 \uc788\uc5c8\ub2e4.\\n  - \ud504\ub85c\uc81d\ud2b8 \uc774\ud574\ub3c4 \ubd80\uc871\uacfc, \uc5ed\ub7c9\uc744 \uc99d\uba85\ud558\uace0 \uc2f6\ub2e4\ub294 \uc695\uc2ec \ub54c\ubb38\uc5d0 \uc870\uae08 \ubb34\ub9ac\ud55c \uc77c\uc815\uc744 \uc7a1\uae30\ub3c4 \ud588\ub2e4. 1~2 \uc8fc\uc57c \uad1c\ucc2e\uc558\uc9c0\ub9cc \ud504\ub85c\uc81d\ud2b8 \uae30\uac04\uc774 \uae38\uc5b4\uc9c0\uc790 \uc870\uae08 \ubb34\ub9ac\uc600\ub2e4\ub294 \uc0dd\uac01\uc774 \ub4e0\ub2e4.\\n\\n- \ub108\ubb34 \ud070 PR\uc744 \ub9cc\ub4e4\uc5c8\ub2e4.\\n  - \ucd08\ubc18\uc758 \ud504\ub85c\uc81d\ud2b8 \uc774\ud574\ub3c4 \ubd80\uc871\uc73c\ub85c \uc778\ud574 \uc791\uc5c5 \ub2e8\uc704\ub97c \ub108\ubb34 \ud06c\uac8c \ub098\ub234\uace0, \uc774\ub294 PR\uc774 \ub108\ubb34 \ucee4\uc9c0\ub294 \uacb0\uacfc\ub85c \uc774\uc5b4\uc84c\ub2e4. \ucf54\ub4dc \ub9ac\ubdf0\ud558\ub294 \ub3d9\ub8cc\ub4e4\ub3c4 \ubd80\ub2f4\uc2a4\ub7ec\uc6e0\uc744 \uac83\uc774\uace0, \uac08\uc218\ub85d \uc138\ubd80\uc801\uc778 \uc791\uc5c5\uc758 \ud30c\uc545\ub4e4\uc774 \uc27d\uc9c0 \uc54a\ub2e4\uace0 \ub290\uaf08\ub2e4.\\n- \uc6d0\uc778\uc740 \ubcf5\ud569\uc801\uc774\uaca0\uc9c0\ub9cc \uc0dd\uac01\ubcf4\ub2e4 \ub9ce\uc740 \uc218\uc694\ub97c \ub9cc\ub4e4\uc5b4 \ub0b4\uc9c0 \ubabb\ud588\ub2e4.\\n\\n\uc5b4\uca0c\ub4e0 \uc774 \uc81c\ud488\uc774 \uc131\uacf5\uc801\uc73c\ub85c \ub79c\ub529\ud55c \ub355\ubd84\uc5d0 \ub9ce\uc740 \uac83\uc744 \ubc30\uc6b8 \uc218 \uc788\uc5c8\ub2e4. \uacfc\uc815\uc5d0\uc11c \uacaa\uc740 \uc5b4\ub824\uc6c0\ub3c4 \uc788\uc5c8\uc9c0\ub9cc \uc804\ubcf4\ub2e4 \ud55c \ub2e8\uacc4 \uc131\uc7a5\ud588\uc74c\uc5d0 \uc758\uc2ec\uc740 \uc5c6\ub2e4."},{"id":"2022-retro","metadata":{"permalink":"/2022-retro","source":"@site/blog/2023-02-12-2022-retro.md","title":"\ub0b4\uac00 2022\ub144\uc5d0 \ubc30\uc6b4 \uac83\ub4e4","description":"- \ud504\ub85c\ub85c\uc11c\uc758 \ub9c8\uc74c\uac00\uc9d0","date":"2023-02-12T00:00:00.000Z","formattedDate":"2023\ub144 2\uc6d4 12\uc77c","tags":[{"label":"career","permalink":"/tags/career"},{"label":"retrospect","permalink":"/tags/retrospect"}],"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"2022-retro","title":"\ub0b4\uac00 2022\ub144\uc5d0 \ubc30\uc6b4 \uac83\ub4e4","tags":["career","retrospect"]},"prevItem":{"title":"\uccab \uc81c\ud488\uc744 \ubc30\ud3ec\ud558\uace0 \ubc30\uc6b4 \uac83\ub4e4","permalink":"/after-launching-first-product"}},"content":"- \ud504\ub85c\ub85c\uc11c\uc758 \ub9c8\uc74c\uac00\uc9d0\\n\\n2022\ub144\uc740 \ub3c8\uc744 \ubc1b\uace0 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc790\ub85c \uc77c\ud558\uae30 \uc2dc\uc791\ud55c \uccab \ud574\ub2e4. \ud559\uc0dd \uaf2c\ub9ac\ud45c\ub97c \ub5bc\uace0 \ucc98\uc74c\uc73c\ub85c \ud68c\uc0ac\uc5d0\uc11c \uc77c\uc744 \ud558\uba70 \ucc38 \ub9ce\uc774 \ubc30\uc6e0\ub2e4\uace0 \uc0dd\ud55c\ub2e4.\\n\\n\uc5b4\ub5a4 \ud0dc\ub3c4\ub85c \uc77c\uc744 \ub300\ud558\uace0, \uc0ac\ub78c\ub4e4\uc744 \ub300\ud560\uc9c0\uc5d0 \ub300\ud55c \ub098\ub9cc\uc758 \uae30\uc900\uc744 \ubc30\uc6cc\ub098\uac08 \uc218 \uc788\uc5c8\ub2e4. \ub3c8\uc744 \ubc1b\uace0 \ud68c\uc0ac\uc5d0\uc11c \uc77c\uc744 \ud558\ub294 \ud55c \ud504\ub85c\ub85c\uc11c\uc758 \ud0dc\ub3c4\ub97c \uc783\uc9c0 \uc54a\uc73c\ub824\uace0 \ub178\ub825\ud588\ub2e4.\\n\\n---\\n\\n- \uc774\uc9c1\\n\\n\ube44\uad50\uc801 \uc77c\ucc0d \uc774\uc9c1 \ud504\ub85c\uc138\uc2a4\ub97c \uacbd\ud5d8\ud558\uba70 \ub9ce\uc740 \uacbd\ud5d8\uacfc \uace0\ubbfc\uc744 \ud560 \uc218 \uc788\uc5c8\ub2e4. \uc5ec\ub2f4\uc774\uc9c0\ub9cc \uc0c8 \uc9c1\uc7a5 \uccab \ucd9c\uadfc \uc804\uc5d0 \ud63c\uc790 \ub2e4\ub140\uc628 \uc5ec\ud589 \ub355\ubd84\uc5d0 \uc18c\uc911\ud55c \uacbd\ud5d8\uc744 \ud560 \uc218 \uc788\uc5c8\uace0, \uc778\uac04\uc801\uc73c\ub85c\ub3c4 \uc131\uc7a5\ud560 \uc218 \uc788\uc5c8\ub2e4. \uadf8\ub807\uae30\uc5d0 \'2022\ub144\uc758 \uc0ac\uac74 \ub2e8 \ud558\ub098\'\ub97c \uc120\uc815\ud55c\ub2e4\uba74 \uc774\uc9c1\uc744 \uaf3d\uc544\uc57c\uaca0\ub2e4.\\n\\n\uc11c\ub958\ub97c \uc5ec\ub7ec\ubc88 \uace0\uce58\uba70 \uc774\ub825\uc11c\ub97c \uc5b4\ub5bb\uac8c \uc791\uc131\ud574\uc57c\ud558\ub294\uc9c0 \uace0\ubbfc\uc744 \ub9ce\uc774 \ud588\ub2e4. \uacbd\ub825\uc5d0\uc11c \uc5b4\ud544\ud560 \ub0b4\uc6a9\uc740 \uc5c6\uc5c8\uae30\uc5d0, \uc804 \uc9c1\uc7a5\uc5d0\uc11c \ub9e1\uc740 \ud504\ub85c\uc81d\ud2b8\ub4e4\uc5d0\uc11c \uc81c\uac00 \ud588\ub358 \uae30\uc220\uc801\uc778 \ud310\ub2e8\ub4e4\uc758 \uadfc\uac70 \uc704\uc8fc\ub85c \uc791\uc131\ub2e4. \ucd5c\uc885 \uc774\ub825\uc11c\ub85c \ud604 \uc9c1\uc7a5\uc5d0 \ucd5c\uc885 \ud569\uaca9 \ud6c4 \uc774\uc57c\uae30\ud574 \ubcf4\ub2c8 \uc774\ub825\uc11c\uc5d0 \ud655\uc2e4\ud55c \ud50c\ub7ec\uc2a4 \uc694\uc778\uc740 \uc5c6\uc5c8\ub354\ub77c\ub3c4 \ub9c8\uc774\ub108\uc2a4\ub294 \ub531\ud788 \uc5c6\uc5c8\ub358 \uac83 \uac19\ub2e4. \uc774\ub825\uc11c\ub780 \uacb0\uad6d \uba74\uc811 \uae30\ud68c\ub97c \uc5bb\uae30 \uc704\ud55c \uc218\ub2e8 \uc815\ub3c4\ub85c\ub9cc \uc0dd\uac01\ud55c\ub2e4\uba74 \uc131\uacf5\uc774\uc9c0 \uc54a\uc558\ub098 \uc2f6\ub2e4.\\n\\n\uacfc\uc81c, \uc804\ud654\uba74\uc811\ubd80\ud130 \ub77c\uc774\ube0c \ucf54\ub529\uae4c\uc9c0 \ub9ce\uc740 \uc804\ud615\uc744 \uacbd\ud5d8\ud588\ub2e4 \uba74\uc811\uc740 \ud655\uc2e4\ud788 \ud558\uba74 \ud560\uc218\ub85d \ub290\ub294 \uac83 \uac19\ub2e4. \ud2b9\ud788 \ub77c\uc774\ube0c \ucf54\ub529\uc740 \ud55c \ubc88 \ud574\ubcf4\uace0 \uc548\ud574\ubcf4\uace0\uc758 \ucc28\uc774\uac00 \uad49\uc7a5\ud788 \ud06c\ub2e4\uace0 \ub290\uaf08\ub2e4. \uceec\uccd0\ud54f \ub0b4\uc9c0 \uc778\uc131 \uba74\uc811\uc740 \uafb8\uba70\uc9c4 \ub2f5\ubcc0\uc744 \ud558\uae30\ubcf4\ub2e4\ub294 \uc790\uc2e0\uc758 \uc0dd\uac01\uc744 \uc774\uc57c\uae30\ud558\ub294\uac8c \uba74\uc811\uad00\ub3c4, \uba74\uc811\uc790\ub3c4 \ub354 \uc88b\ub2e4\uace0 \ub290\uaf08\ub2e4.\\n\\n---\\n\\n- \uc194\uc9c1\ud55c \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\\n\\n\ud604 \uc9c1\uc7a5\uc758 \uae30\uc5c5 \ubb38\ud654\uc5d0\uc11c \ud06c\uac8c \uac15\uc870\ud558\ub294 \ub0b4\uc6a9 \uc911 \ud558\ub098\uac00 \uc194\uc9c1\ud55c \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uc774\ub2e4. \uc0ac\uc2e4 \uc785\uc0ac \uc804\uc5d0\ub294 \uac71\uc815\ub3c4 \uc788\uc5c8\ub294\ub370, \'\uc194\uc9c1\ud568\'\uacfc \'\ubb34\ub840\ud568\'\uc744 \uad6c\ubd84\ud558\uc9c0 \ubabb\ud558\ub294 \uc0ac\ub840\ub4e4\uc744 \uacaa\ub2e4 \ubcf4\ub2c8 \uacfc\uc5f0 \ub0b4\ubd80 \ubb38\ud654\uac00 \uc2e4\uc81c\ub85c \uc5b4\ub5a8\uc9c0 \uac71\uc815\uc774 \uc55e\uc130\ub2e4. \uadf8\ub807\uae30\uc5d0 \ucd5c\uc885 \uba74\uc811 \uc790\ub9ac\uc5d0\uc11c \uc870\uc9c1 \ub0b4\uc5d0\uc11c \uc5b4\ub5a4 \uc2dc\uac01\uc73c\ub85c \uc194\uc9c1\ud568\uc744 \ubc14\ub77c\ubcf4\uace0 \uc788\ub294\uc9c0 \uc9c8\ubb38\ud558\uae30\ub3c4 \ud588\ub2e4.\\n\\n\uc785\uc0ac \ud6c4 \ub290\ub080 \uc810\uc740 \uac71\uc815\uacfc\ub294 \ub2ec\ub9ac\xa0\uc774\ub7ec\ud55c \ubb38\ud654\uac00 \uc798 \uc720\uc9c0\ub418\uace0 \uc788\ub2e4\ub294 \uc810\uc774\ub2e4. \uc194\uc9c1\ud568\uc744 \ubc29\ud328\uc0bc\uc544 \ubd80\uc801\uc808\ud55c \uc758\uc0ac\uc18c\ud1b5\uc744 \ud558\ub294 \uc0ac\ub840\ub294 \uc544\uc9c1\uae4c\uc9c0 \uacbd\ud5d8\ud574\ubcf4\uc9c0 \ubabb\ud588\ub2e4.\\n\\n\uadf8\uc804\uc5d0\ub294 \uc2a4\uc2a4\ub85c \uad49\uc7a5\ud788 \uc870\uc2ec\uc2a4\ub7ec\uc6b4 \uc758\uc0ac\uc18c\ud1b5\uc744 \ud574\uc654\ub2e4\uace0 \uc0dd\uac01\ud55c\ub2e4. \uadf8\ub807\uae30\uc5d0 \uc785\uc0ac \ud6c4 \ucd5c\ub300\ud55c \uc194\uc9c1\ud558\uace0 \uc9c1\uad00\uc801\uc778 \uc758\uc0ac\uc18c\ud1b5\uc744 \ud558\uae30 \uc704\ud574 \ub178\ub825\ud588\ub2e4. \uc774\ubbf8 \ub9ce\uc740 \ub3d9\ub8cc\ub4e4\uc774 \uadf8\ub7f0 \ubaa8\uc2b5\uc744 \ubcf4\uc5ec\uc8fc\uace0 \uc788\uae30\uc5d0 \uc5b4\ub835\uc9c0 \uc54a\uac8c \uc801\uc751\ud560 \uc218 \uc788\uc5c8\ub358 \uac83 \uac19\uc544 \uac10\uc0ac\ud558\ub2e4.\\n\\n\uc194\uc9c1\ud568\uc758 \uc7a5\uc810\uc740 \uc624\ud574\uac00 \uc5c6\ub2e4\ub294 \uc810\uc774\ub2e4. \ub204\uad70\uac00\uc758 \ub9d0\uc774 \ub2e4\ub978 \uc758\ub3c4\uac00 \uc788\uc744\uc9c0 \uc758\uc2ec\ud558\uace0 \uace0\ubbfc\ud558\ub294 \uc77c\uc740 \uc0c1\ub2f9\ud788 \uc2a4\ud2b8\ub808\uc2a4\ubc1b\ub294 \uc77c\uc774\ub2e4. \uc9c1\uc7a5\uc5d0\uc11c \ub4e4\uc740 \ub9d0\uc758 \uc758\ubbf8\uac00 \ubb34\uc5c7\uc778\uc9c0\uc5d0 \ub300\ud55c \uace0\ubbfc\uc744 \ud1f4\uadfc \ud6c4 \uc9d1\uae4c\uc9c0 \uac00\uc838\uc624\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc744 \uac83\uc774\ub2e4. \uadf8\ub7ec\ub098 \uc11c\ub85c\uac00 \uc194\uc9c1\ud558\uac8c \ub9d0\ud55c\ub2e4\ub294 \ubbff\uc74c\uc774 \uc0dd\uae30\uba74 \uc788\ub294 \uadf8\ub300\ub85c \ubc1b\uc544\ub4e4\uc77c \uc218 \uc788\uc5b4 \uac04\ub2e8\ud558\uace0 \uba85\ub8cc\ud558\uac8c \ub300\ud654\ub97c \ub9c8\ubb34\ub9ac\uc9c0\uc744 \uc218 \uc788\ub2e4. \uc774\ub7f0 \uc810\uc774 \uc5c5\ubb34\uc5d0\uc11c \uc624\ub294 \uc5b4\ub824\uc6c0\uc744 \ud06c\uac8c \uc904\uc5ec\uc8fc\uace0, \uc11c\ub85c\uac04\uc758 \uc2e0\ub8b0\ub97c \uc313\ub294\ub370 \ub3c4\uc6c0\uc744 \uc8fc\ub294 \uac83 \uac19\ub2e4.\\n\\n---\\n\\n- \uae30\uc220\uc801 \ubc30\uc6c0\\n\\n\ucd08\uae30 \uc628\ubcf4\ub529\uacfc \uc774\ud6c4 \ub9e1\uc740 \uc5c5\ubb34\ub97c \uc9c4\ud589\ud558\uba70 \ud68c\uc0ac\uc5d0\uc11c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uae30\uc220\ub4e4\uc5d0 \uc775\uc219\ud574\uc9c8 \uc218 \uc788\uc5c8\ub2e4. redux\uc640 saga\ub97c \uc775\ud788\uace0 \uc788\ub294\ub370, \ud2b8\ub80c\ub514\ud558\uc9c0\ub294 \uc54a\ub354\ub77c\ub3c4 \ucda9\ubd84\ud788 \ubfb0\uc871\ud55c \uc7a5\uc810\uc774 \uc788\ub294 \uc870\ud569\uc774\ub77c\uace0 \uc0dd\uac01\ud55c\ub2e4. \ube60\ub974\uac8c \ud504\ub85c\uc81d\ud2b8 \ud558\ub098\ub97c \ub9e1\uc544\uc11c \ucd9c\uc2dc\ub97c \uc55e\ub450\uace0 \uc788\ub294\ub370, \ub9ce\uc740 \ub3c4\uc6c0\uc744 \uc8fc\ub294 \ub3d9\ub8cc\ub4e4\uacfc \ud568\uaed8 \ud560 \uc218 \uc788\uc5b4 \uc990\uac81\uac8c \uc77c\ud588\ub2e4\uace0 \uc0dd\uac01\uc774 \ub4e0\ub2e4."}]}')}}]);