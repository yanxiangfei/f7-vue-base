<template>
  <f7-page>
    <f7-navbar back-link="Back" title="Contacts" sliding>
    <f7-nav-right>
        <!-- <f7-link toggle-sortable="#sortable">{{sorting?'Done':'Open'}}</f7-link> -->
        <f7-link @click="addNewItem">New Item</f7-link>
      </f7-nav-right>
    </f7-navbar>

     <f7-messages>
    <f7-message v-for="message in messages"
      :text="message.text"
      :label="message.label"
      :date="message.date"
      :name="message.name"
      :avatar="message.avatar"
      :type="message.type"
      :day="message.day"
      :time="message.time"
      @click="onClick"
      @click:text="onTextClick"
      @click:name="onNameClick"
      @click:avatar="onAvatarClick"
    ></f7-message>
  </f7-messages>
  <f7-messagebar placeholder="Message" send-link="Send" @submit="onSubmit"></f7-messagebar>
    <!-- 虚拟列表 -->
   <!--  <f7-searchbar cancel-link="取消" placeholder="搜索" search-list="#list"></f7-searchbar>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>
    <f7-list
    id="list"
    class="searchbar-found"
    media-list
    virtual
    :virtual-items="items"
    :virtual-height="63"
    :virtual-search-all="searchAll">
      <t7-template>
        <f7-list-item media-item link="#" :title="'{{title}}'" :subtitle="'{{subtitle}}'"></f7-list-item>
      </t7-template>
    </f7-list> -->

  <!-- 滑动操作列表 -->
   <!--  <f7-list>
      <f7-list-item swipeout  title="Item1" @swipeout:deleted="onSwipeoutDeleted">
      <f7-swipeout-actions left>
        <f7-swipeout-button close color="pink">Mark</f7-swipeout-button>
      </f7-swipeout-actions>
        <f7-swipeout-actions right>
          <f7-swipeout-button delete>Delete</f7-swipeout-button>
          <f7-swipeout-button close color="blue">Reply</f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
      <f7-list-item swipeout title="Item2" @swipeout:deleted="onSwipeoutDeleted">
        <f7-swipeout-actions right>
          <f7-swipeout-button delete>Delete</f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item></f7-list> -->

<!-- 可排序列表 -->
 <!--    <f7-list id="sortable" sortable @sortable:sort="onSort" @sortable:open="onOpen" @sortable:close="onClose">
      <f7-list-item v-for="item in items" :title="'Items'+item"></f7-list-item>
    </f7-list> -->


<!-- 联系人列表 -->
<!--     <f7-list contacts>
      <f7-list-group v-for="(group, key) in contacts">
        <f7-list-item :title="key" group-title></f7-list-item>
        <f7-list-item v-for="name in group" :title="name"></f7-list-item>
      </f7-list-group></f7-list> -->




  </f7-page>
</template>
<script>
  export default {
    data: function () {
      // return {
      //   contacts: {
      //     'A': [
      //       'Aaron',
      //       'Abbie',
      //       'Adam',
      //       'Adele',
      //       'Agatha',
      //       'Agnes',
      //       'Albert',
      //       'Alexander'
      //     ],
      //     'B': [
      //       'Bailey',
      //       'Barclay',
      //       'Bartolo',
      //       'Bellamy',
      //       'Belle',
      //       'Benjamin'
      //     ],
      //     'C': [
      //       'Caiden',
      //       'Calvin',
      //       'Candy',
      //       'Carl',
      //       'Cherilyn',
      //       'Chester',
      //       'Chloe'
      //     ],
      //     'V': [
      //       'Vladimir'
      //     ]
      //   }
      // }
      // return{
      //   sorting:false,
      //   items:[1,2,3,4,5,6,7,8,9,0]
      // }
      // var items=[];
      // for (var i = 1; i <=5; i++) {
      //   items.push({
      //     title:'Item'+i,
      //     subtitle:'subtitle'+i
      //   })
      // }
      // return{
      //     items:items
      // }
       return {
        name: 'Vladimir',
        avatar: 'path/to/avatar-1.jpg',
        messages: [
          {
            day: 'Wendesday',
            time: '13:34'
          },
          {
            name: 'Vladimir',
            text: 'How are you?',
            label: 'Sent in good mood :)',
            avatar: 'path/to/avatar-1.jpg',
            date: 'Yesterday 13:34'
          },
          {
            name: 'Jane',
            text: 'I\'m good, thank you!',
            type: 'received',
            avatar: 'path/to/avatar-2.jpg',
            date: 'Yesterday at 13:50'
          }
        ]
      }
    },
    methods:{
      onOpen:function(){
        this.sorting = !this.sorting;
      },
      onClose:function(){
        this.sorting = !this.sorting;
      },
      onSwipeoutDeleted:function(){
        console.log('delete', 'deletesuccess');
      },
      onSort:function(event,indexes){
          console.log('sort', indexes);
      },
      addNewItem:function(){
        var self=this;
        self.items.push({
          title:'Item'+(self.items.length+1),
          subtitle:'subtitle'+(self.items.length+1)
        })
      },
      searchAll:function(query){
        var self=this;
        var found=[];
        for(var i=0;i<self.items.length;i++){
          if(self.items[i].title.indexOf(query)>=0||query.trim()==='')found.push(i);
        }
        return found;
      }, onClick: function (event) {
        console.log('message click');
      },
      onAvatarClick: function () {
        console.log('avatar-click');
      },
      onTextClick: function () {
        console.log('text-click');
      },
      onNameClick: function () {
        console.log('name-click');
      },
      onSubmit: function (text, clear) {
        if (text.trim().length === 0) return;
        this.messages.push({
          name: this.name,
          avatar: this.avatar,
          text: text,
          date: (function () {
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            return hours + ':' + minutes;
          })()
        });
        // Clear Message Bar
        clear();
      }
    }
  }
</script>