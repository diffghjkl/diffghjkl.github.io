---
title: 喜欢的女孩子
icon: i-ri-heart-2-line
girls: /girls.json
random: true
toc: false
aside: false
nav: false
---
> 下方人物随机排序，不分先后顺序.  

<ValaxyGirls :girls="frontmatter.girls" :random="frontmatter.random" :layout="grid" :initial-count="26" :batch-size="26" :auto-load="true" switchable>
  <template #header="{ count, isLoading }">
    <header>
      <p v-if="!isLoading">共计 {{ count }} 位</p>
    </header>
  </template>
</ValaxyGirls>