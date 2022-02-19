<template>
  <PostsIndex :ssr-data="ssrData" />
</template>

<script>
export default {
  name: 'IndexPage',
  components:{
    PostsIndex: () =>
        import('~/components/post/_id/index.vue')
  },
  // 服务器端获取数据  TODO: 分页 loading 
  async asyncData (ctx) {
    const { route } = ctx;
    // post
    let _post = new Promise((resolve)=>{
      let api = `https://hackerlink.io/blog/ghost/api/v3/content/posts/${route.params.id}/?key=7abd2f4753f5e0790df953ac28&include=tags,authors`;
      fetch(api, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      }).then((result) => {
        resolve(result)
      }).catch((e) => {
        console.log('ssr data exception', e)
      });
    });
    // posts
    let _posts = new Promise((resolve)=>{
      let api = 'https://hackerlink.io/blog/ghost/api/v3/content/posts/?key=7abd2f4753f5e0790df953ac28&include=tags,authors';
      fetch(api, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      }).then((result) => {
        resolve(result)
      }).catch((e) => {
        console.log('ssr data exception', e)
      });
    });

    return Promise.all([_post, _posts]).then((values) => {
      return {
        ssrData: Object.assign(values[0], {
          related_posts: values[1].posts
        })
      };
    });
  },
  data () {
    return {
      ssrData: {}
    };
  },
}
</script>
