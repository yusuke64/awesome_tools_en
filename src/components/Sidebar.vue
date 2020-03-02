<template>
  <section class="sidebar">
    <div class="panel">
      <div class="panel-search">
        <input required class="panel-search-input" @keydown.enter="search" v-model="searchWord" type="text" placeholder="Search for tools">
        <button @click="search" class="panel-search-btn"><font-awesome-icon class="icon" icon="search" /></button>
        <!-- <router-link class="panel-search-btn js_search_btn" :to="{name: 'ItemKeyword', query: {searchWord : searchWord}}"><font-awesome-icon class="icon" icon="search" /></router-link> -->
      </div>
    </div>
    <div class="panel">
      <h2 class="panel-title">Tags</h2>
      <div class="panel-category">
        <router-link to="/all" class="panel-category-inner">All</router-link>
        <router-link :to="`/${id}`" class="panel-category-inner" v-for="{id, name} in categorys" :key="id">{{name}}</router-link>
      </div>
    </div>
    <div class="panel">
      <h2 class="panel-title">Recent</h2>
      <ul class="panel-recently">
        <li v-for="{itemId, title} in currentPost" :key="itemId"><router-link class="item-link" :to="`/item/${itemId}`">{{title}}</router-link></li>
      </ul>
    </div>
  </section>
</template>

<script>
import data from '../api/data.js'
export default {
  name: 'Sidebar',
  data() {
    return {
      categorys: [],
      searchWord: '',
      currentPost: [],
      itemId: '',
    }
  },
  created() {
    this.categorys = data.getcategory(); // カテゴリーのデータを取得
    this.currentPost = data.findCurrentPost(); // 最近の投稿を取得
  },
  methods: {
    search: function() {
      if(!this.searchWord) return
      this.$router.push({name: 'ItemKeyword', query: {searchWord : this.searchWord}})
    }
  },
  watch: {
    '$route' (el) {
      // キーワード検索でない場合input要素をからにする
      if(!el.query.searchWord) this.searchWord = '';
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/__common.scss';
.sidebar{
    width: 30%;

    @include mq(md) {
      width: 100%;
    }
}

.panel{
    padding: 15px;
    background: #ffffff;
    margin-bottom: 5px;

    &-title{
        text-align: center;
        font-size: 18px;
        margin: 5px 0 20px;
    }

    &-search{
      @include search_panel;
    }

    &-category{
      font-size: 0;

        &-inner{
            @include category_inner;
            margin-bottom: 5px;
            transition: all .3s;

            &:hover{
                opacity: 0.7;
            }
        }
    }

    &-recently{
        padding: 0 15px;

        @include mq(s) {
          padding: 0 10px;
        }

        li{
            display: block;
            font-size: 15px;
            margin-bottom: 10px;
            position: relative;
            padding-left: 12px;

            @include mq(s) {
              font-size: 14px;
              margin-bottom: 8px;
            }

            .item-link{
              // display: inline-block;
                padding: 5px 0;
                transition: all .3s;

                &:hover{
                    opacity: 0.7;
                }
            }

            &::before{
                content: '';
                position: absolute;
                top: 50%;
                left: 0%;
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                height: 10px;
                width: 10px;
                border-radius: 50%;
                display: inline-block;
                background: #078FFE;

                @include mq(s) {
                  height: 7px;
                  width: 7px;
                }
            }
        }
    }
}

</style>
