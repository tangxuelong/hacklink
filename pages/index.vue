<template>
  <PostsList :ssr-data="ssrData" />
</template>

<script>
export default {
  name: 'IndexPage',
  // 服务器端获取数据  TODO: 分页 loading 
  async asyncData () {
    let api = 'https://hackerlink.io/blog/ghost/api/v3/content/posts/?key=7abd2f4753f5e0790df953ac28&include=tags,authors';
    return fetch(api, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    }).then((result) => {
      return {
        ssrData: result
      };
    }).catch((e) => {
      console.log('ssr data exception', e)
    });
  },
  data () {
    return {
      ssrData: {}
    };
  },
}
</script>
